"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[44090],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48487:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={id:"ReserveTickerParams",title:"Interface: ReserveTickerParams",sidebar_label:"ReserveTickerParams"},i=void 0,o={unversionedId:"interfaces/API/Procedures/Types/ReserveTickerParams/ReserveTickerParams",id:"version-20.0.x/interfaces/API/Procedures/Types/ReserveTickerParams/ReserveTickerParams",title:"Interface: ReserveTickerParams",description:"api/procedures/types.ReserveTickerParams",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/API/Procedures/Types/ReserveTickerParams/ReserveTickerParams.md",sourceDirName:"interfaces/API/Procedures/Types/ReserveTickerParams",slug:"/interfaces/API/Procedures/Types/ReserveTickerParams/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/ReserveTickerParams/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"ReserveTickerParams",title:"Interface: ReserveTickerParams",sidebar_label:"ReserveTickerParams"},sidebar:"defaultSidebar",previous:{title:"RenamePortfolioParams",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/RenamePortfolioParams/"},next:{title:"RevokeClaimsParams",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/RevokeClaimsParams/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"extendPeriod",id:"extendperiod",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".ReserveTickerParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"extendperiod"},"extendPeriod"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"extendPeriod"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L315"},"api/procedures/types.ts:315")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ticker"},"ticker"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ticker"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"ticker symbol to reserve"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L314"},"api/procedures/types.ts:314")))}d.isMDXComponent=!0}}]);