"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[83950],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(t),f=s,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[l]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10298:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=t(87462),s=(t(67294),t(3905));const a={id:"SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",sidebar_label:"SetCountTransferRestrictionsParams"},i=void 0,o={unversionedId:"interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams",id:"version-20.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",description:"api/procedures/types.SetCountTransferRestrictionsParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams",slug:"/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",permalink:"/sdk-docs/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",sidebar_label:"SetCountTransferRestrictionsParams"},sidebar:"defaultSidebar",previous:{title:"SetClaimPercentageTransferRestrictionsParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams/"},next:{title:"SetCustodianParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/SetCustodianParams/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"restrictions",id:"restrictions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:p};function l(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".SetCountTransferRestrictionsParams"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"restrictions"},"restrictions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"restrictions"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/API/Procedures/Types/CountTransferRestrictionInput/"},(0,s.kt)("inlineCode",{parentName:"a"},"CountTransferRestrictionInput")),"[]"),(0,s.kt)("p",null,"array of Count Transfer Restrictions with their corresponding exemptions (if applicable)"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L212"},"api/procedures/types.ts:212")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/enums/API/Procedures/Types/TransferRestrictionType/#count"},(0,s.kt)("inlineCode",{parentName:"a"},"Count"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L213"},"api/procedures/types.ts:213")))}l.isMDXComponent=!0}}]);