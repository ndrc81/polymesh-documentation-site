"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[29006],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var i=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),l=function(e){var r=i.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return i.createElement(o.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||n;return t?i.createElement(f,s(s({ref:r},p),{},{components:t})):i.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=d;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<n;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28787:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=t(87462),a=(t(67294),t(3905));const n={id:"ClaimClassicTickerParams",title:"Interface: ClaimClassicTickerParams",sidebar_label:"ClaimClassicTickerParams"},s=void 0,c={unversionedId:"interfaces/API/Procedures/Types/ClaimClassicTickerParams/ClaimClassicTickerParams",id:"version-19.1.x/interfaces/API/Procedures/Types/ClaimClassicTickerParams/ClaimClassicTickerParams",title:"Interface: ClaimClassicTickerParams",description:"api/procedures/types.ClaimClassicTickerParams",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Procedures/Types/ClaimClassicTickerParams/ClaimClassicTickerParams.md",sourceDirName:"interfaces/API/Procedures/Types/ClaimClassicTickerParams",slug:"/interfaces/API/Procedures/Types/ClaimClassicTickerParams/",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Procedures/Types/ClaimClassicTickerParams/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"ClaimClassicTickerParams",title:"Interface: ClaimClassicTickerParams",sidebar_label:"ClaimClassicTickerParams"},sidebar:"defaultSidebar",previous:{title:"AssetBase",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Procedures/Types/AssetBase/"},next:{title:"ClaimCountTransferRestrictionInput",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Procedures/Types/ClaimCountTransferRestrictionInput/"}},o={},l=[{value:"Properties",id:"properties",level:2},{value:"ethereumSignature",id:"ethereumsignature",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/API/Procedures/Types/"},"api/procedures/types"),".ClaimClassicTickerParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"ethereumsignature"},"ethereumSignature"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ethereumSignature"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"signature generated by signing a message formed by the DID (hex without the leading 0x),\nprefixed by ",(0,a.kt)("inlineCode",{parentName:"p"},"classic_claim"),". Example: if the DID is ",(0,a.kt)("inlineCode",{parentName:"p"},"0x1230000000000000000000000000000000000000000000000000000000000000"),",\nthe message would be ",(0,a.kt)("inlineCode",{parentName:"p"},"classic_claim1230000000000000000000000000000000000000000000000000000000000000")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L271"},"api/procedures/types.ts:271")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ticker"},"ticker"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ticker"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"ticker symbol to claim"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L275"},"api/procedures/types.ts:275")))}m.isMDXComponent=!0}}]);