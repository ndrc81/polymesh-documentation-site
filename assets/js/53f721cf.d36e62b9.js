"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[90439],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(t),d=s,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[l]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33593:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const o={},a=void 0,i={unversionedId:"Interfaces/API/Procedures/Types/SetGroupPermissionsParams",id:"Interfaces/API/Procedures/Types/SetGroupPermissionsParams",title:"SetGroupPermissionsParams",description:"api/procedures/types.SetGroupPermissionsParams",source:"@site/sdk-docs/Interfaces/API/Procedures/Types/SetGroupPermissionsParams.md",sourceDirName:"Interfaces/API/Procedures/Types",slug:"/Interfaces/API/Procedures/Types/SetGroupPermissionsParams",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/SetGroupPermissionsParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SetCustodianParams",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/SetCustodianParams"},next:{title:"SetPercentageTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:c};function l(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/API/Procedures/Types"},"api/procedures/types"),".SetGroupPermissionsParams"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"permissions"},"permissions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"permissions"),": { ",(0,s.kt)("inlineCode",{parentName:"p"},"transactions"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/TransactionPermissions"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionPermissions")),"  } ","|"," { ",(0,s.kt)("inlineCode",{parentName:"p"},"transactionGroups"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Enums/Types/TxGroup"},(0,s.kt)("inlineCode",{parentName:"a"},"TxGroup")),"[]  }"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L776"},"api/procedures/types.ts:776")))}l.isMDXComponent=!0}}]);