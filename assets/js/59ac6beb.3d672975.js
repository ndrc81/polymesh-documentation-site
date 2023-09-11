"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[14687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"StatType",title:"Enumeration: StatType",sidebar_label:"StatType"},i=void 0,p={unversionedId:"enums/Types/StatType/StatType",id:"version-21.0.x/enums/Types/StatType/StatType",title:"Enumeration: StatType",description:"types.StatType",source:"@site/sdk-docs_versioned_docs/version-21.0.x/enums/Types/StatType/StatType.md",sourceDirName:"enums/Types/StatType",slug:"/enums/Types/StatType/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/StatType/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"StatType",title:"Enumeration: StatType",sidebar_label:"StatType"},sidebar:"defaultSidebar",previous:{title:"StatOpTypeEnum",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/StatOpTypeEnum/"},next:{title:"StoStatus",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/StoStatus/"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Balance",id:"balance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Count",id:"count",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ScopedBalance",id:"scopedbalance",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ScopedCount",id:"scopedcount",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/"},"types"),".StatType"),(0,o.kt)("p",null,"Represents the StatType from the ",(0,o.kt)("inlineCode",{parentName:"p"},"statistics")," module."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,o.kt)("p",null,' the chain doesn\'t use "Scoped" types, but they are needed here to discriminate the input instead of having an optional input'),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.kt)("h3",{id:"balance"},"Balance"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Balance")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Balance"')),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L363"},"types/index.ts:363")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"count"},"Count"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Count")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"Count"')),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L362"},"types/index.ts:362")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"scopedbalance"},"ScopedBalance"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"ScopedBalance")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"ScopedBalance"')),(0,o.kt)("p",null,"ScopedPercentage is an SDK only type, on chain it is ",(0,o.kt)("inlineCode",{parentName:"p"},"Balance")," with a claimType option present"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L371"},"types/index.ts:371")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"scopedcount"},"ScopedCount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"ScopedCount")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"ScopedCount"')),(0,o.kt)("p",null,"ScopedCount is an SDK only type, on chain it is ",(0,o.kt)("inlineCode",{parentName:"p"},"Count")," with a claimType option present"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L367"},"types/index.ts:367")))}c.isMDXComponent=!0}}]);