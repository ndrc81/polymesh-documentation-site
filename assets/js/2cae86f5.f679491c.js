"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[41109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=s,k=d["".concat(l,".").concat(u)]||d[u]||f[u]||i;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const i={id:"TransferBreakdown",title:"Interface: TransferBreakdown",sidebar_label:"TransferBreakdown"},a=void 0,o={unversionedId:"interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown",id:"version-20.1.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown",title:"Interface: TransferBreakdown",description:"api/entities/Asset/types.TransferBreakdown",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md",sourceDirName:"interfaces/API/Entities/Asset/Types/TransferBreakdown",slug:"/interfaces/API/Entities/Asset/Types/TransferBreakdown/",permalink:"/sdk-docs/interfaces/API/Entities/Asset/Types/TransferBreakdown/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"TransferBreakdown",title:"Interface: TransferBreakdown",sidebar_label:"TransferBreakdown"},sidebar:"defaultSidebar",previous:{title:"IdentityBalance",permalink:"/sdk-docs/interfaces/API/Entities/Asset/Types/IdentityBalance/"},next:{title:"TransferRestrictionResult",permalink:"/sdk-docs/interfaces/API/Entities/Asset/Types/TransferRestrictionResult/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"compliance",id:"compliance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"general",id:"general",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"restrictions",id:"restrictions",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/Asset/Types/"},"api/entities/Asset/types"),".TransferBreakdown"),(0,s.kt)("p",null,"Object containing every reason why a specific Asset transfer would fail"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"compliance"},"compliance"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"compliance"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/Compliance/"},(0,s.kt)("inlineCode",{parentName:"a"},"Compliance"))),(0,s.kt)("p",null,"how the transfer adheres to the asset's compliance rules"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Asset/types.ts#L43"},"api/entities/Asset/types.ts:43")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"general"},"general"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"general"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/TransferError/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransferError")),"[]"),(0,s.kt)("p",null,"list of general transfer errors"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Asset/types.ts#L39"},"api/entities/Asset/types.ts:39")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"restrictions"},"restrictions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"restrictions"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/API/Entities/Asset/Types/TransferRestrictionResult/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransferRestrictionResult")),"[]"),(0,s.kt)("p",null,"list of transfer restrictions and whether the transfer satisfies each one"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Asset/types.ts#L47"},"api/entities/Asset/types.ts:47")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"result"},"result"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"result"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"true if the transfer is possible"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Asset/types.ts#L51"},"api/entities/Asset/types.ts:51")))}d.isMDXComponent=!0}}]);