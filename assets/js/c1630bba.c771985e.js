"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[36575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,u=d["".concat(c,".").concat(m)]||d[m]||f[m]||a;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={id:"ActiveTransferRestrictions",title:"Interface: ActiveTransferRestrictions<Restriction>",sidebar_label:"ActiveTransferRestrictions"},s=void 0,o={unversionedId:"interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions",id:"version-21.0.x/interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions",title:"Interface: ActiveTransferRestrictions<Restriction>",description:"types.ActiveTransferRestrictions",source:"@site/sdk-docs_versioned_docs/version-21.0.x/interfaces/Types/ActiveTransferRestrictions/ActiveTransferRestrictions.md",sourceDirName:"interfaces/Types/ActiveTransferRestrictions",slug:"/interfaces/Types/ActiveTransferRestrictions/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/ActiveTransferRestrictions/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"ActiveTransferRestrictions",title:"Interface: ActiveTransferRestrictions<Restriction>",sidebar_label:"ActiveTransferRestrictions"},sidebar:"defaultSidebar",previous:{title:"AccreditedClaim",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/AccreditedClaim/"},next:{title:"AddCountStatInput",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/AddCountStatInput/"}},c={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"availableSlots",id:"availableslots",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"restrictions",id:"restrictions",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/"},"types"),".ActiveTransferRestrictions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Restriction")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/CountTransferRestriction/"},(0,i.kt)("inlineCode",{parentName:"a"},"CountTransferRestriction"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/PercentageTransferRestriction/"},(0,i.kt)("inlineCode",{parentName:"a"},"PercentageTransferRestriction"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/ClaimCountTransferRestriction/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimCountTransferRestriction"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/ClaimPercentageTransferRestriction/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimPercentageTransferRestriction")))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"availableslots"},"availableSlots"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"availableSlots"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"amount of restrictions that can be added before reaching the shared limit"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1364"},"types/index.ts:1364")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"restrictions"},"restrictions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"restrictions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Restriction"),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L1360"},"types/index.ts:1360")))}d.isMDXComponent=!0}}]);