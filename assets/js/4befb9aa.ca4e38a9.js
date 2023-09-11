"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[23321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={id:"MoveFundsParams",title:"Interface: MoveFundsParams",sidebar_label:"MoveFundsParams"},a=void 0,i={unversionedId:"interfaces/API/Procedures/Types/MoveFundsParams/MoveFundsParams",id:"version-21.0.x/interfaces/API/Procedures/Types/MoveFundsParams/MoveFundsParams",title:"Interface: MoveFundsParams",description:"api/procedures/types.MoveFundsParams",source:"@site/sdk-docs_versioned_docs/version-21.0.x/interfaces/API/Procedures/Types/MoveFundsParams/MoveFundsParams.md",sourceDirName:"interfaces/API/Procedures/Types/MoveFundsParams",slug:"/interfaces/API/Procedures/Types/MoveFundsParams/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/MoveFundsParams/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"MoveFundsParams",title:"Interface: MoveFundsParams",sidebar_label:"MoveFundsParams"},sidebar:"defaultSidebar",previous:{title:"ModifySignerPermissionsParams",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/ModifySignerPermissionsParams/"},next:{title:"PayDividendsParams",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/PayDividendsParams/"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"items",id:"items",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"to",id:"to",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".MoveFundsParams"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"items"},"items"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"items"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/PortfolioMovement/"},(0,o.kt)("inlineCode",{parentName:"a"},"PortfolioMovement")),"[]"),(0,o.kt)("p",null,"list of Assets (and the corresponding token amounts) that will be moved"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L1006"},"api/procedures/types.ts:1006")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"to"},"to"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"to"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio"))),(0,o.kt)("p",null,"portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L1002"},"api/procedures/types.ts:1002")))}c.isMDXComponent=!0}}]);