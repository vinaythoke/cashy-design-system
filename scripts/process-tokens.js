import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const TOKENS_DIR = path.resolve(ROOT_DIR, 'Figma Tokens Export');
const OUTPUT_FILE = path.resolve(ROOT_DIR, 'src/tokens/variables.css');

// --- Helper Utilities ---

function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_\/]+/g, '-')
        .toLowerCase();
}

function resolveReference(value, aliasData) {
    // If it's a direct alias string "{Group.Token}"
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        const refName = value.slice(1, -1);
        // FORCE kebab-case for the reference to match primitive definitions
        // e.g. "Gray/50" -> "gray-50"
        return `var(--${toKebabCase(refName)})`;
    }

    // If we have Figma alias data
    if (aliasData && aliasData.targetVariableName) {
        // Also ensure target variable name is kebab-cased strictly
        // Figma might give "Gray/50", we want "gray-50"
        return `var(--${toKebabCase(aliasData.targetVariableName)})`;
    }

    // Fallback: value is raw
    return value;
}

function processColorPrimitives(filePath) {
    if (!fs.existsSync(filePath)) return [];

    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cssVars = [];

    // Helper to recurse
    function traverse(obj, prefix = '') {
        for (const [key, node] of Object.entries(obj)) {
            if (key.startsWith('$')) continue; // Skip metadata

            const newPrefix = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

            if (node.$value && typeof node.$value === 'object' && node.$value.hex) {
                // It's a color leaf node
                cssVars.push(`--${newPrefix}: ${node.$value.hex};`);
            } else if (typeof node === 'object') {
                traverse(node, newPrefix);
            }
        }
    }
    traverse(content);
    return cssVars;
}

function processSizeTokens(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cssVars = [];

    function traverse(obj, prefix = '') {
        for (const [key, node] of Object.entries(obj)) {
            if (key.startsWith('$')) continue;

            const newPrefix = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

            if (node.$value !== undefined) {
                // Numbers usually pixels in Figma, add 'px' if it looks like a dimension
                // However, "050" value is 2, etc.
                const val = node.$value;
                const suffix = (typeof val === 'number' && val !== 0) ? 'px' : '';
                cssVars.push(`--${newPrefix}: ${val}${suffix};`);
            } else if (typeof node === 'object') {
                traverse(node, newPrefix);
            }
        }
    }
    traverse(content);
    return cssVars;
}

function processTypography(filePath, isSemantic = false) {
    if (!fs.existsSync(filePath)) return [];
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cssVars = [];

    function traverse(obj, prefix = '') {
        for (const [key, node] of Object.entries(obj)) {
            if (key.startsWith('$')) continue;

            const newPrefix = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

            if (node.$value !== undefined) {
                let val = node.$value;
                // Handle aliases
                if (isSemantic) {
                    // Check alias data in extensions first for robust mapping
                    const aliasData = node.$extensions?.['com.figma.aliasData'];
                    val = resolveReference(val, aliasData);
                }

                // If it's a number and part of size/height, add px.
                // Weights are numbers but unitless.
                if (typeof val === 'number' && !newPrefix.includes('weight') && val !== 0) {
                    val = val + 'px';
                }
                // Handle font family arrays or strings
                if (newPrefix.includes('family') && !val.includes('var(')) {
                    val = `"${val}", sans-serif`; // naive, but safer
                }

                cssVars.push(`--${newPrefix}: ${val};`);
            } else if (typeof node === 'object') {
                traverse(node, newPrefix);
            }
        }
    }
    traverse(content);
    return cssVars;
}

function processSemanticColors(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const cssVars = [];

    function traverse(obj, prefix = '') {
        for (const [key, node] of Object.entries(obj)) {
            if (key.startsWith('$')) continue;

            const newPrefix = prefix ? `${prefix}-${toKebabCase(key)}` : toKebabCase(key);

            if (node.$value && node.$value.hex) {
                // Resolve alias
                const aliasData = node.$extensions?.['com.figma.aliasData'];
                const val = resolveReference(node.$value.hex, aliasData);
                cssVars.push(`--${newPrefix}: ${val};`);
            } else if (node.$value && typeof node.$value === 'string' && node.$value.startsWith('{')) {
                // Special blankest case: {Opacity.black-40}
                const val = resolveReference(node.$value);
                cssVars.push(`--${newPrefix}: ${val};`);

            } else if (typeof node === 'object') {
                traverse(node, newPrefix);
            }
        }
    }
    traverse(content);
    return cssVars;
}


// --- Main Execution ---

const primitivesColors = processColorPrimitives(path.join(TOKENS_DIR, 'Color Primitives/primitives.colors.tokens.json'));
const sizeTokens = processSizeTokens(path.join(TOKENS_DIR, 'Size/size.tokens.json'));
const primitivesTypography = processTypography(path.join(TOKENS_DIR, 'Typography Primitives/primitives.typography.tokens.json'));

const semanticLight = processSemanticColors(path.join(TOKENS_DIR, 'Color Tokens/light.semantic.colors.tokens.json'));
const semanticDark = processSemanticColors(path.join(TOKENS_DIR, 'Color Tokens/dark.semantic.colors.tokens.json'));
const semanticTypography = processTypography(path.join(TOKENS_DIR, 'Typography Tokens/semantic.typography.tokens.json'), true);


const cssContent = `/* Generated Token Variables */
/* Do not edit directly. Generated from Figma Token Exports. */

:root {
  /* --- Primitives --- */
  
  /* Colors */
${primitivesColors.map(l => '  ' + l).join('\n')}

  /* Sizes & Spacing */
${sizeTokens.map(l => '  ' + l).join('\n')}

  /* Typography Primitives */
${primitivesTypography.map(l => '  ' + l).join('\n')}


  /* --- Semantic Tokens (Light/Default) --- */
  
  /* Colors */
${semanticLight.map(l => '  ' + l).join('\n')}

  /* Typography */
${semanticTypography.map(l => '  ' + l).join('\n')}
}

/* --- Dark Theme --- */
/* Usage: <html data-theme="dark"> or system preference */

@media (prefers-color-scheme: dark) {
  :root {
${semanticDark.map(l => '    ' + l).join('\n')}
  }
}

[data-theme='dark'] {
${semanticDark.map(l => '  ' + l).join('\n')}
}
`;

fs.writeFileSync(OUTPUT_FILE, cssContent);
console.log(`Successfully generated ${OUTPUT_FILE}`);
