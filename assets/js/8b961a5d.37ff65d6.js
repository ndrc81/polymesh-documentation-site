"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[36569],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),o=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=o(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return t?a.createElement(f,s(s({ref:r},p),{},{components:t})):a.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:i,s[1]=c;for(var o=2;o<n;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65309:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));const n={id:"ClaimClassicTickerParams",title:"Interface: ClaimClassicTickerParams",sidebar_label:"ClaimClassicTickerParams"},s="Interface: ClaimClassicTickerParams",c={unversionedId:"interfaces/API/Procedures/Types/ClaimClassicTickerParams/ClaimClassicTickerParams",id:"interfaces/API/Procedures/Types/ClaimClassicTickerParams/ClaimClassicTickerParams",title:"Interface: ClaimClassicTickerParams",description:"api/procedures/types.ClaimClassicTickerParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/ClaimClassicTickerParams/ClaimClassicTickerParams.md",sourceDirName:"interfaces/API/Procedures/Types/ClaimClassicTickerParams",slug:"/interfaces/API/Procedures/Types/ClaimClassicTickerParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ClaimClassicTickerParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"ClaimClassicTickerParams",title:"Interface: ClaimClassicTickerParams",sidebar_label:"ClaimClassicTickerParams"},sidebar:"defaultSidebar",previous:{title:"AssetBase",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/AssetBase/"},next:{title:"ClaimCountTransferRestrictionInput",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ClaimCountTransferRestrictionInput/"}},l={},o=[{value:"Properties",id:"properties",level:2},{value:"ethereumSignature",id:"ethereumsignature",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:o};function m(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-claimclassictickerparams"},"Interface: ClaimClassicTickerParams"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".ClaimClassicTickerParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"ethereumsignature"},"ethereumSignature"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ethereumSignature"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"signature generated by signing a message formed by the DID (hex without the leading 0x),\nprefixed by ",(0,i.kt)("inlineCode",{parentName:"p"},"classic_claim"),". Example: if the DID is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x1230000000000000000000000000000000000000000000000000000000000000"),",\nthe message would be ",(0,i.kt)("inlineCode",{parentName:"p"},"classic_claim1230000000000000000000000000000000000000000000000000000000000000")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L271"},"api/procedures/types.ts:271")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ticker"},"ticker"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ticker"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"ticker symbol to claim"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L275"},"api/procedures/types.ts:275")))}m.isMDXComponent=!0}}]);