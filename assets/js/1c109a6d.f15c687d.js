"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[43902],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83251:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const a={id:"RedeemTokensParams",title:"Interface: RedeemTokensParams",sidebar_label:"RedeemTokensParams"},s=void 0,i={unversionedId:"interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams",id:"version-19.1.x/interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams",title:"Interface: RedeemTokensParams",description:"api/procedures/types.RedeemTokensParams",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams.md",sourceDirName:"interfaces/API/Procedures/Types/RedeemTokensParams",slug:"/interfaces/API/Procedures/Types/RedeemTokensParams/",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/RedeemTokensParams/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"RedeemTokensParams",title:"Interface: RedeemTokensParams",sidebar_label:"RedeemTokensParams"},sidebar:"defaultSidebar",previous:{title:"PercentageTransferRestrictionInput",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/PercentageTransferRestrictionInput/"},next:{title:"RegisterIdentityParams",permalink:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/RegisterIdentityParams/"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"from",id:"from",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:d};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Procedures/Types/"},"api/procedures/types"),".RedeemTokensParams"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"amount"},"amount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"amount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L544"},"api/procedures/types.ts:544")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"from"},"from"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"from"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio"))),(0,o.kt)("p",null,"portfolio (or portfolio ID) from which Assets will be redeemed (optional, defaults to the default Portfolio)"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L548"},"api/procedures/types.ts:548")))}c.isMDXComponent=!0}}]);