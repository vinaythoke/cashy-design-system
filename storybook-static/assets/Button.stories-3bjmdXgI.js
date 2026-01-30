import{j as e}from"./jsx-runtime-IypCLOjj.js";import{R as I}from"./index-fxF7yw4i.js";const p=I.forwardRef(({variant:b="primary",size:f="medium",iconLeft:g,iconRight:y,isLoading:a=!1,className:v="",children:h,disabled:S,...w},x)=>{const B="button",R=`button--variant-${b}`,D=`button--size-${f}`,T=a?"button--loading":"",j=(g||y)&&!h?"button--has-icon-only":"";return e.jsxs("button",{type:"button",className:[B,R,D,T,j,v].filter(Boolean).join(" "),disabled:S||a,ref:x,...w,children:[a&&e.jsx("span",{className:"button__spinner","aria-hidden":"true"}),!a&&g,h,!a&&y]})});p.displayName="Button";p.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger-bold' | 'danger-subtle'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger-bold'"},{name:"literal",value:"'danger-subtle'"}]},description:"Visual style of the button",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to display on the left"},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to display on the right"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Is the button in a loading state?",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const m=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 0L16 16H0L8 0Z"})}),L={title:"Components/Button",component:p,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/Example?node-id=21%3A3762"}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","danger-bold","danger-subtle"],description:"Visual style of the button"},size:{control:"radio",options:["small","medium","large"],description:"Size of the button"},iconLeft:{control:"boolean",mapping:{true:e.jsx(m,{}),false:void 0},description:"Show icon on the left"},iconRight:{control:"boolean",mapping:{true:e.jsx(m,{}),false:void 0},description:"Show icon on the right"},disabled:{control:"boolean",description:"Disable the button"},isLoading:{control:"boolean",description:"Show loading state"},onClick:{action:"clicked"}}},r={args:{variant:"primary",children:"Button"}},t={args:{variant:"primary",children:"Primary"}},n={args:{variant:"secondary",children:"Secondary"}},o={args:{variant:"tertiary",children:"Tertiary"}},s={args:{variant:"danger-bold",children:"Delete"}},i={args:{variant:"danger-subtle",children:"Remove"}},l={args:{children:"Saving...",isLoading:!0}},c={args:{children:"Disabled",disabled:!0}},d={args:{variant:"secondary",iconLeft:e.jsx(m,{}),"aria-label":"Edit"},parameters:{docs:{description:{story:"Icon-only buttons require an `aria-label` for accessibility."}}}},u={args:{children:"Button with very long text that might wrap"},parameters:{docs:{description:{story:"Buttons handle long text gracefully with proper padding."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger-bold',
    children: 'Delete'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger-subtle',
    children: 'Remove'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Saving...',
    isLoading: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    iconLeft: <IconPlaceholder />,
    'aria-label': 'Edit'
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons require an \`aria-label\` for accessibility.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button with very long text that might wrap'
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons handle long text gracefully with proper padding.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const _=["Default","Primary","Secondary","Tertiary","DangerBold","DangerSubtle","Loading","Disabled","IconOnly","LongText"],q=Object.freeze(Object.defineProperty({__proto__:null,DangerBold:s,DangerSubtle:i,Default:r,Disabled:c,IconOnly:d,Loading:l,LongText:u,Primary:t,Secondary:n,Tertiary:o,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{q as B,s as D,d as I,l as L,t as P,n as S,o as T,i as a,c as b};
