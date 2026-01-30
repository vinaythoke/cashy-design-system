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
`;
document.head.appendChild(style);

