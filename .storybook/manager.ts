import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme: theme,
  sidebar: {
    showRoots: false,
  },
});

// Add custom CSS to override sidebar hover colors
const style = document.createElement('style');
style.innerHTML = `
  /* Sidebar item hover - lighter but visible */
  [data-item-id] {
    transition: background-color 0.15s ease;
  }
  
  [data-item-id]:hover {
    background-color: #EDEEF1 !important; /* --gray-100 - visible but subtle */
  }
  
  [data-item-id][data-selected="true"] {
    background-color: #E0DFEB !important; /* --brand-200 - clear selection */
    color: #17142B !important; /* --brand-500 */
    font-weight: 600;
  }
  
  /* Fix icon color for selected items */
  [data-item-id][data-selected="true"] svg {
    color: #17142B !important; /* --brand-500 */
  }
  
  [data-item-id][data-selected="true"]:hover {
    background-color: #C9C8D8 !important; /* --brand-300 - darker on hover */
  }
  
  /* ULTRA AGGRESSIVE: Remove ALL gradients and backgrounds from sidebar buttons */
  [data-item-id] button,
  [data-item-id] button *,
  [data-item-id] > * button,
  [data-item-id] button::before,
  [data-item-id] button::after {
    background: none !important;
    background-image: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  
  /* Subtle hover for ALL buttons - clean, no gradient */
  [data-item-id] button:hover,
  [data-item-id] > * button:hover {
    background: rgba(0, 0, 0, 0.04) !important;
    background-image: none !important;
    background-color: rgba(0, 0, 0, 0.04) !important;
  }
  
  /* Dark mode hover */
  .dark [data-item-id] button:hover,
  .dark [data-item-id] > * button:hover {
    background: rgba(255, 255, 255, 0.04) !important;
    background-image: none !important;
    background-color: rgba(255, 255, 255, 0.04) !important;
  }
  
  /* Hide three-dot menu by default */
  [data-item-id] button[title="Expand/collapse story menu"] {
    opacity: 0;
    transition: opacity 0.15s ease;
  }
  
  [data-item-id]:hover button[title="Expand/collapse story menu"] {
    opacity: 1;
  }
  
  /* Clean hover for three-dot menu */
  [data-item-id] button[title="Expand/collapse story menu"]:hover {
    background: rgba(0, 0, 0, 0.08) !important;
    background-image: none !important;
    background-color: rgba(0, 0, 0, 0.08) !important;
    border-radius: 4px;
  }
  
  .dark [data-item-id] button[title="Expand/collapse story menu"]:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    background-image: none !important;
    background-color: rgba(255, 255, 255, 0.08) !important;
  }
`;
document.head.appendChild(style);

