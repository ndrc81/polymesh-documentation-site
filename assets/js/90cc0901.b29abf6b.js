"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[16129],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=n,u=d["".concat(p,".").concat(y)]||d[y]||m[y]||o;return r?a.createElement(u,i(i({ref:t},l),{},{components:r})):a.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},73579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"RotatePrimaryKeyParams",title:"Interface: RotatePrimaryKeyParams",sidebar_label:"RotatePrimaryKeyParams"},i=void 0,s={unversionedId:"interfaces/API/Procedures/Types/RotatePrimaryKeyParams/RotatePrimaryKeyParams",id:"version-22.0.x/interfaces/API/Procedures/Types/RotatePrimaryKeyParams/RotatePrimaryKeyParams",title:"Interface: RotatePrimaryKeyParams",description:"api/procedures/types.RotatePrimaryKeyParams",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/API/Procedures/Types/RotatePrimaryKeyParams/RotatePrimaryKeyParams.md",sourceDirName:"interfaces/API/Procedures/Types/RotatePrimaryKeyParams",slug:"/interfaces/API/Procedures/Types/RotatePrimaryKeyParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RotatePrimaryKeyParams/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"RotatePrimaryKeyParams",title:"Interface: RotatePrimaryKeyParams",sidebar_label:"RotatePrimaryKeyParams"},sidebar:"defaultSidebar",previous:{title:"RevokeClaimsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RevokeClaimsParams/"},next:{title:"ScopeClaimProof",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ScopeClaimProof/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"targetAccount",id:"targetaccount",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".RotatePrimaryKeyParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"expiry"},"expiry"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"expiry"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")),(0,n.kt)("p",null,"(optional) when the generated authorization should expire"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L425"},"api/procedures/types.ts:425")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"targetaccount"},"targetAccount"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"targetAccount"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"},(0,n.kt)("inlineCode",{parentName:"a"},"Account"))),(0,n.kt)("p",null,"The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L420"},"api/procedures/types.ts:420")))}d.isMDXComponent=!0}}]);