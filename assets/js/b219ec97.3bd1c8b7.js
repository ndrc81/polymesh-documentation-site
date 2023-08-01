"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[51019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=s,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={id:"SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",sidebar_label:"SetCountTransferRestrictionsParams"},o=void 0,i={unversionedId:"interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams",id:"version-19.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",description:"api/procedures/types.SetCountTransferRestrictionsParams",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams",slug:"/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",sidebar_label:"SetCountTransferRestrictionsParams"},sidebar:"defaultSidebar",previous:{title:"SetClaimPercentageTransferRestrictionsParams",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams/"},next:{title:"SetCustodianParams",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/SetCustodianParams/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"restrictions",id:"restrictions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Procedures/Types/"},"api/procedures/types"),".SetCountTransferRestrictionsParams"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"restrictions"},"restrictions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"restrictions"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/CountTransferRestrictionInput/"},(0,s.kt)("inlineCode",{parentName:"a"},"CountTransferRestrictionInput")),"[]"),(0,s.kt)("p",null,"array of Count Transfer Restrictions with their corresponding exemptions (if applicable)"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L212"},"api/procedures/types.ts:212")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/enums/API/Procedures/Types/TransferRestrictionType/#count"},(0,s.kt)("inlineCode",{parentName:"a"},"Count"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L213"},"api/procedures/types.ts:213")))}l.isMDXComponent=!0}}]);