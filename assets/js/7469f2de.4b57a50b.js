"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[24718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,k=d["".concat(l,".").concat(u)]||d[u]||f[u]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const i={id:"TransferBreakdown",title:"Interface: TransferBreakdown",sidebar_label:"TransferBreakdown"},a=void 0,o={unversionedId:"interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown",id:"version-19.1.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown",title:"Interface: TransferBreakdown",description:"api/entities/Asset/types.TransferBreakdown",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/TransferBreakdown.md",sourceDirName:"interfaces/API/Entities/Asset/Types/TransferBreakdown",slug:"/interfaces/API/Entities/Asset/Types/TransferBreakdown/",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"TransferBreakdown",title:"Interface: TransferBreakdown",sidebar_label:"TransferBreakdown"},sidebar:"defaultSidebar",previous:{title:"IdentityBalance",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Asset/Types/IdentityBalance/"},next:{title:"TransferRestrictionResult",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Asset/Types/TransferRestrictionResult/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"compliance",id:"compliance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"general",id:"general",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"restrictions",id:"restrictions",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Entities/Asset/Types/"},"api/entities/Asset/types"),".TransferBreakdown"),(0,s.kt)("p",null,"Object containing every reason why a specific Asset transfer would fail"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"compliance"},"compliance"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"compliance"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/interfaces/Types/Compliance/"},(0,s.kt)("inlineCode",{parentName:"a"},"Compliance"))),(0,s.kt)("p",null,"how the transfer adheres to the asset's compliance rules"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Asset/types.ts#L40"},"api/entities/Asset/types.ts:40")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"general"},"general"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"general"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/enums/Types/TransferError/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransferError")),"[]"),(0,s.kt)("p",null,"list of general transfer errors"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Asset/types.ts#L36"},"api/entities/Asset/types.ts:36")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"restrictions"},"restrictions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"restrictions"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/interfaces/API/Entities/Asset/Types/TransferRestrictionResult/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransferRestrictionResult")),"[]"),(0,s.kt)("p",null,"list of transfer restrictions and whether the transfer satisfies each one"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Asset/types.ts#L44"},"api/entities/Asset/types.ts:44")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"result"},"result"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"result"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"true if the transfer is possible"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Asset/types.ts#L48"},"api/entities/Asset/types.ts:48")))}d.isMDXComponent=!0}}]);