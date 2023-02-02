"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[71840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(r),f=o,y=l["".concat(p,".").concat(f)]||l[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"ModifyCorporateActionsAgentParams",title:"Interface: ModifyCorporateActionsAgentParams",sidebar_label:"ModifyCorporateActionsAgentParams"},i=void 0,s={unversionedId:"interfaces/API/Procedures/Types/ModifyCorporateActionsAgentParams/ModifyCorporateActionsAgentParams",id:"interfaces/API/Procedures/Types/ModifyCorporateActionsAgentParams/ModifyCorporateActionsAgentParams",title:"Interface: ModifyCorporateActionsAgentParams",description:"api/procedures/types.ModifyCorporateActionsAgentParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/ModifyCorporateActionsAgentParams/ModifyCorporateActionsAgentParams.md",sourceDirName:"interfaces/API/Procedures/Types/ModifyCorporateActionsAgentParams",slug:"/interfaces/API/Procedures/Types/ModifyCorporateActionsAgentParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ModifyCorporateActionsAgentParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"ModifyCorporateActionsAgentParams",title:"Interface: ModifyCorporateActionsAgentParams",sidebar_label:"ModifyCorporateActionsAgentParams"},sidebar:"defaultSidebar",previous:{title:"ModifyCaCheckpointParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ModifyCaCheckpointParams/"},next:{title:"ModifyInstructionAffirmationParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ModifyInstructionAffirmationParams/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"requestExpiry",id:"requestexpiry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".ModifyCorporateActionsAgentParams"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"requestexpiry"},"requestExpiry"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"requestExpiry"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")),(0,o.kt)("p",null,"date at which the authorization request to modify the Corporate Actions Agent expires (optional, never expires if a date is not provided)"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L611"},"api/procedures/types.ts:611")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"target"},"target"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"target"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,o.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,o.kt)("p",null,"Identity to be set as Corporate Actions Agent"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L607"},"api/procedures/types.ts:607")))}l.isMDXComponent=!0}}]);