"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[11116],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(f,s(s({ref:r},c),{},{components:t})):a.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13937:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={id:"EditClaimsParams",title:"Interface: EditClaimsParams",sidebar_label:"EditClaimsParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/EditClaimsParams/EditClaimsParams",id:"version-20.1.x/interfaces/API/Procedures/Types/EditClaimsParams/EditClaimsParams",title:"Interface: EditClaimsParams",description:"api/procedures/types.EditClaimsParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/EditClaimsParams/EditClaimsParams.md",sourceDirName:"interfaces/API/Procedures/Types/EditClaimsParams",slug:"/interfaces/API/Procedures/Types/EditClaimsParams/",permalink:"/sdk-docs/interfaces/API/Procedures/Types/EditClaimsParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"EditClaimsParams",title:"Interface: EditClaimsParams",sidebar_label:"EditClaimsParams"},sidebar:"defaultSidebar",previous:{title:"DecreaseAllowanceParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/DecreaseAllowanceParams/"},next:{title:"ExecuteManualInstructionParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/ExecuteManualInstructionParams/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"claims",id:"claims",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"operation",id:"operation",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".EditClaimsParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"claims"},"claims"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"claims"),": ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ClaimTarget/"},(0,n.kt)("inlineCode",{parentName:"a"},"ClaimTarget")),"[]"),(0,n.kt)("p",null,"array of claims to be edited"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L336"},"api/procedures/types.ts:336")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"operation"},"operation"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"operation"),": ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/enums/API/Procedures/Types/ClaimOperation/#edit"},(0,n.kt)("inlineCode",{parentName:"a"},"Edit"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L337"},"api/procedures/types.ts:337")))}d.isMDXComponent=!0}}]);