"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[54011],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||s;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const s={id:"TransferTickerOwnershipParams",title:"Interface: TransferTickerOwnershipParams",sidebar_label:"TransferTickerOwnershipParams"},i=void 0,o={unversionedId:"interfaces/API/Procedures/Types/TransferTickerOwnershipParams/TransferTickerOwnershipParams",id:"version-19.1.x/interfaces/API/Procedures/Types/TransferTickerOwnershipParams/TransferTickerOwnershipParams",title:"Interface: TransferTickerOwnershipParams",description:"api/procedures/types.TransferTickerOwnershipParams",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Procedures/Types/TransferTickerOwnershipParams/TransferTickerOwnershipParams.md",sourceDirName:"interfaces/API/Procedures/Types/TransferTickerOwnershipParams",slug:"/interfaces/API/Procedures/Types/TransferTickerOwnershipParams/",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/TransferTickerOwnershipParams/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"TransferTickerOwnershipParams",title:"Interface: TransferTickerOwnershipParams",sidebar_label:"TransferTickerOwnershipParams"},sidebar:"defaultSidebar",previous:{title:"TransferRestriction",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/TransferRestriction/"},next:{title:"TxGroupParams",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/TxGroupParams/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Procedures/Types/"},"api/procedures/types"),".TransferTickerOwnershipParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"expiry"},"expiry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"expiry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"date at which the authorization request for transfer expires (optional)"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L832"},"api/procedures/types.ts:832")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L828"},"api/procedures/types.ts:828")))}d.isMDXComponent=!0}}]);