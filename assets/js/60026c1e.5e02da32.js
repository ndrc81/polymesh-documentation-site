"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[40129],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||i;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92238:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={id:"InvestInOfferingParams",title:"Interface: InvestInOfferingParams",sidebar_label:"InvestInOfferingParams"},a=void 0,s={unversionedId:"interfaces/API/Procedures/Types/InvestInOfferingParams/InvestInOfferingParams",id:"version-20.0.x/interfaces/API/Procedures/Types/InvestInOfferingParams/InvestInOfferingParams",title:"Interface: InvestInOfferingParams",description:"api/procedures/types.InvestInOfferingParams",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/API/Procedures/Types/InvestInOfferingParams/InvestInOfferingParams.md",sourceDirName:"interfaces/API/Procedures/Types/InvestInOfferingParams",slug:"/interfaces/API/Procedures/Types/InvestInOfferingParams/",permalink:"/sdk-docs/20.0.x/interfaces/API/Procedures/Types/InvestInOfferingParams/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"InvestInOfferingParams",title:"Interface: InvestInOfferingParams",sidebar_label:"InvestInOfferingParams"},sidebar:"defaultSidebar",previous:{title:"IncreaseAllowanceParams",permalink:"/sdk-docs/20.0.x/interfaces/API/Procedures/Types/IncreaseAllowanceParams/"},next:{title:"InviteAccountParams",permalink:"/sdk-docs/20.0.x/interfaces/API/Procedures/Types/InviteAccountParams/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"fundingPortfolio",id:"fundingportfolio",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"maxPrice",id:"maxprice",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"purchaseAmount",id:"purchaseamount",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"purchasePortfolio",id:"purchaseportfolio",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".InvestInOfferingParams"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"fundingportfolio"},"fundingPortfolio"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"fundingPortfolio"),": ",(0,o.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#portfoliolike"},(0,o.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,o.kt)("p",null,"portfolio from which funds will be withdrawn to pay for the Asset tokens"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L872"},"api/procedures/types.ts:872")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maxprice"},"maxPrice"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"maxPrice"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,o.kt)("p",null,"maximum average price to pay per Asset token (optional)"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L880"},"api/procedures/types.ts:880")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"purchaseamount"},"purchaseAmount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"purchaseAmount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,o.kt)("p",null,"amount of Asset tokens to purchase"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L876"},"api/procedures/types.ts:876")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"purchaseportfolio"},"purchasePortfolio"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"purchasePortfolio"),": ",(0,o.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#portfoliolike"},(0,o.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,o.kt)("p",null,"portfolio in which the purchased Asset tokens will be stored"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L868"},"api/procedures/types.ts:868")))}d.isMDXComponent=!0}}]);