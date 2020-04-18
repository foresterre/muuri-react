(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(145)),o={title:"Muuri"},u={id:"usage/muuri",title:"Muuri",description:"The core of this package is based on `Muuri`. An instance of Muuri is created internally, and is used to manage all interactions with the DOM. The term `grid` will be used in this documentation to refer to that instance. <br/>",source:"@site/docs\\usage\\muuri.mdx",permalink:"/muuri-react/docs/usage/muuri",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/usage/muuri.mdx",sidebar:"someSidebar",previous:{title:"Server side rendering \ud83d\udda5",permalink:"/muuri-react/docs/usage/server-side-rendering"},next:{title:"useData",permalink:"/muuri-react/docs/hooks/useData"}},c=[{value:"Items \ud83d\udee0\ufe0f",id:"items-\ufe0f",children:[]},{value:"Muuri map \ud83d\uddfa\ufe0f",id:"muuri-map-\ufe0f",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The core of this package is based on ",Object(i.b)("inlineCode",{parentName:"p"},"Muuri"),". An instance of Muuri is created internally, and is used to manage all interactions with the DOM. The term ",Object(i.b)("inlineCode",{parentName:"p"},"grid")," will be used in this documentation to refer to that instance. ",Object(i.b)("br",null),"\nYou can interact with it using the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../api-reference/muuricomponent#ref"}),"ref")," prop. For its documentation, see its page on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/haltu/muuri"}),"Github"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const App = () => {\n  const gridRef = useRef();\n\n  useEffect(() => {\n    // The instance is avaible as gridRef.current.\n  });\n\n  return <MuuriComponent ref={gridRef} />;\n};\n")),Object(i.b)("p",null,"If you just need to initialize some events you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"onMount")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent\n  onMount={(grid) => {\n    // Drag release event.\n    grid.on("dragReleaseEnd", (item) => {\n      // Do something...\n    });\n  }}\n/>\n')),Object(i.b)("h2",{id:"items-\ufe0f"},"Items \ud83d\udee0\ufe0f"),Object(i.b)("p",null,"Muuri internally manages the instances of the Items, each instance is associated with an ",Object(i.b)("inlineCode",{parentName:"p"},"Item")," component and contains its information (plus all the methods specified in the Muuri ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/haltu/muuri#item-methods"}),"documentation"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Return the key of the component\n// that represents the item in question.\nitem.getKey();\n\n// Return the props of the component\n// that represents the item in question.\nitem.getProps();\n\n// Return the data of the component\n// that represents the item in question.\nitem.getData();\n")),Object(i.b)("h2",{id:"muuri-map-\ufe0f"},"Muuri map \ud83d\uddfa\ufe0f"),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"muuriMap")," to access all the Muuri instances of the MuuriComponents via ",Object(i.b)("inlineCode",{parentName:"p"},"ids")," and ",Object(i.b)("inlineCode",{parentName:"p"},"groupIds"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent id={"id"} groupIds={["groupId"]} />\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'import { muuriMap } from "muuri-react";\n\n// The Muuri instance belonging to the\n// MuuriComponenent with the id: "id".\nconst grid = muuriMap.get("id");\n\n// All the Muuri instances belonging to the\n// MuuriComponenents of the group: "groupId".\nconst gridsArray = muuriMap.getGroup("groupId");\n')))}p.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||i;return n?a.a.createElement(d,u({ref:t},s,{components:n})):a.a.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);