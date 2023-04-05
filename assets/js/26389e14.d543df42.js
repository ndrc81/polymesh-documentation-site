"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[96406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=d(r),m=a,y=l["".concat(p,".").concat(m)]||l[m]||u[m]||s;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const s={id:"SetCustodianParams",title:"Interface: SetCustodianParams",sidebar_label:"SetCustodianParams"},i=void 0,o={unversionedId:"interfaces/API/Procedures/Types/SetCustodianParams/SetCustodianParams",id:"version-20.0.x/interfaces/API/Procedures/Types/SetCustodianParams/SetCustodianParams",title:"Interface: SetCustodianParams",description:"api/procedures/types.SetCustodianParams",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/API/Procedures/Types/SetCustodianParams/SetCustodianParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetCustodianParams",slug:"/interfaces/API/Procedures/Types/SetCustodianParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetCustodianParams/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"SetCustodianParams",title:"Interface: SetCustodianParams",sidebar_label:"SetCustodianParams"},sidebar:"defaultSidebar",previous:{title:"SetCountTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/"},next:{title:"SetGroupPermissionsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetGroupPermissionsParams/"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"targetIdentity",id:"targetidentity",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:d};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".SetCustodianParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"expiry"},"expiry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"expiry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L928"},"api/procedures/types.ts:928")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targetidentity"},"targetIdentity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"targetIdentity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L927"},"api/procedures/types.ts:927")))}l.isMDXComponent=!0}}]);