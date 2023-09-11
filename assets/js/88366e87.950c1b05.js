"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[39949],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),i=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=i(e.components);return a.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,s(s({ref:r},p),{},{components:t})):a.createElement(f,s({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35052:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const o={id:"DecreaseAllowanceParams",title:"Interface: DecreaseAllowanceParams",sidebar_label:"DecreaseAllowanceParams"},s=void 0,c={unversionedId:"interfaces/API/Procedures/Types/DecreaseAllowanceParams/DecreaseAllowanceParams",id:"version-20.0.x/interfaces/API/Procedures/Types/DecreaseAllowanceParams/DecreaseAllowanceParams",title:"Interface: DecreaseAllowanceParams",description:"api/procedures/types.DecreaseAllowanceParams",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/API/Procedures/Types/DecreaseAllowanceParams/DecreaseAllowanceParams.md",sourceDirName:"interfaces/API/Procedures/Types/DecreaseAllowanceParams",slug:"/interfaces/API/Procedures/Types/DecreaseAllowanceParams/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/DecreaseAllowanceParams/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"DecreaseAllowanceParams",title:"Interface: DecreaseAllowanceParams",sidebar_label:"DecreaseAllowanceParams"},sidebar:"defaultSidebar",previous:{title:"CreateVenueParams",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/CreateVenueParams/"},next:{title:"EditClaimsParams",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/EditClaimsParams/"}},l={},i=[{value:"Properties",id:"properties",level:2},{value:"allowance",id:"allowance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"operation",id:"operation",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:i};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".DecreaseAllowanceParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"allowance"},"allowance"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"allowance"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("p",null,"amount of POLYX to decrease the allowance by"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L835"},"api/procedures/types.ts:835")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"operation"},"operation"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"operation"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/API/Procedures/Types/AllowanceOperation/#decrease"},(0,n.kt)("inlineCode",{parentName:"a"},"Decrease"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L836"},"api/procedures/types.ts:836")))}d.isMDXComponent=!0}}]);