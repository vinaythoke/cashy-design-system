import{j as n}from"./jsx-runtime-IypCLOjj.js";import{useMDXComponents as i}from"./index-HU4yAJHW.js";import{M as t,C as r,a}from"./index-cvFE4oVY.js";import{B as c,P as l,S as d,T as h,D as x,a as j,L as p,b as m,I as u}from"./Button.stories-3bjmdXgI.js";import"./index-fxF7yw4i.js";import"./iframe-BcKrPNOL.js";import"./index-C-dEVNSj.js";import"./index-CcR1FEzS.js";import"./index-DrFu-skq.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(e.p,{children:"Buttons trigger actions or navigation. Use the controls below to explore different configurations."}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.p,{children:"Buttons come in different visual styles based on their semantic meaning:"}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(e.p,{children:"The main call-to-action on a page."}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h3,{id:"secondary",children:"Secondary"}),`
`,n.jsx(e.p,{children:"Alternative actions or less prominent steps."}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n.jsx(e.p,{children:"Low-emphasis actions, often in toolbars or lists."}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"danger",children:"Danger"}),`
`,n.jsxs(e.p,{children:["Destructive actions. Use ",n.jsx(e.code,{children:"danger-bold"})," for high emphasis (e.g., Delete Account) and ",n.jsx(e.code,{children:"danger-subtle"})," for lower emphasis (e.g., Remove Item)."]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h2,{id:"states",children:"States"}),`
`,n.jsx(e.h3,{id:"loading",children:"Loading"}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h2,{id:"icon-only",children:"Icon Only"}),`
`,n.jsxs(e.p,{children:["Buttons can contain only an icon. ",n.jsxs(e.strong,{children:["Always provide an ",n.jsx(e.code,{children:"aria-label"})," for accessibility."]})]}),`
`,n.jsx(r,{of:u}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from './Button';\r
\r
// Basic button\r
<Button variant="primary" onClick={() => console.log('Clicked')}>\r
  Click Me\r
</Button>\r
\r
// With icon\r
<Button variant="secondary" iconLeft={<Icon />}>\r
  Back\r
</Button>\r
\r
// Icon only (requires aria-label)\r
<Button variant="tertiary" iconLeft={<Icon />} aria-label="Settings" />
`})}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{})]})}function L(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{L as default};
