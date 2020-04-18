(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(1),r=n(6),a=(n(0),n(144)),o={title:"useVisibility"},c={id:"hooks/useVisibility",title:"useVisibility",description:"```js",source:"@site/docs\\hooks\\useVisibility.mdx",permalink:"/muuri-react/docs/hooks/useVisibility",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/hooks/useVisibility.mdx",sidebar:"someSidebar",previous:{title:"useShow",permalink:"/muuri-react/docs/hooks/useShow"},next:{title:"MuuriComponent API",permalink:"/muuri-react/docs/api-reference/muuricomponent"}},s=[{value:"Usage \ud83d\udcd6",id:"usage-",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),'import { useVisibility } from "muuri-react";\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useVisibility")," hook allow you to show/hide the Item in which the hook has been called."),Object(a.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(a.b)("p",null,"It's possible to use the ",Object(a.b)("inlineCode",{parentName:"p"},"setVisibility")," method returned by the hook. It will accept as an argument a boolean representing the visibility of the Item."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'const Item = () => {\n  const setVisibility = useVisibility();\n\n  return (\n    <div className="item">\n      <div\n        className="item-content"\n        {/* Hide the item on click. */}\n        onClick={() => setVisibility(false)}\n      />\n    </div>\n  );\n};\n')),Object(a.b)("p",null,"The Item won't re-render after the hook took effect, use ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../hooks/useShow"}),"useShow")," for this purpose."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The setVisibility method has ",Object(a.b)("inlineCode",{parentName:"p"},"no effect")," when the component is mounting (basically when the Item is added). You have to decide if the Item has to be visible or hidden when you ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../usage/items#visibility-"}),"add")," it."))))}u.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=i,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return n?r.a.createElement(d,c({ref:t},l,{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);