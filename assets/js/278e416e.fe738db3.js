"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[95145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={id:"ProcedureAuthorizationStatus",title:"Interface: ProcedureAuthorizationStatus",sidebar_label:"ProcedureAuthorizationStatus"},s=void 0,a={unversionedId:"interfaces/Types/ProcedureAuthorizationStatus/ProcedureAuthorizationStatus",id:"version-20.0.x/interfaces/Types/ProcedureAuthorizationStatus/ProcedureAuthorizationStatus",title:"Interface: ProcedureAuthorizationStatus",description:"types.ProcedureAuthorizationStatus",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/Types/ProcedureAuthorizationStatus/ProcedureAuthorizationStatus.md",sourceDirName:"interfaces/Types/ProcedureAuthorizationStatus",slug:"/interfaces/Types/ProcedureAuthorizationStatus/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureAuthorizationStatus/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"ProcedureAuthorizationStatus",title:"Interface: ProcedureAuthorizationStatus",sidebar_label:"ProcedureAuthorizationStatus"},sidebar:"defaultSidebar",previous:{title:"PortfolioMovement",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PortfolioMovement/"},next:{title:"ProcedureMethod",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"accountFrozen",id:"accountfrozen",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"agentPermissions",id:"agentpermissions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"noIdentity",id:"noidentity",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"roles",id:"roles",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"signerPermissions",id:"signerpermissions",level:3},{value:"Defined in",id:"defined-in-4",level:4}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".ProcedureAuthorizationStatus"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accountfrozen"},"accountFrozen"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"accountFrozen"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"whether the Account is frozen (i.e. can't perform any transactions)"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1258"},"types/index.ts:1258")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"agentpermissions"},"agentPermissions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"agentPermissions"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/CheckPermissionsResult/"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckPermissionsResult")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/SignerType/#identity"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,i.kt)("p",null,"whether the Identity complies with all required Agent permissions"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1246"},"types/index.ts:1246")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"noidentity"},"noIdentity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"noIdentity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"true only if the Procedure requires an Identity but the signing Account\ndoesn't have one associated"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1263"},"types/index.ts:1263")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"roles"},"roles"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"roles"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/CheckRolesResult/"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckRolesResult"))),(0,i.kt)("p",null,"whether the Identity complies with all required Roles"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1254"},"types/index.ts:1254")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signerpermissions"},"signerPermissions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"signerPermissions"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/CheckPermissionsResult/"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckPermissionsResult")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/SignerType/#account"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")),">"),(0,i.kt)("p",null,"whether the Account complies with all required Signer permissions"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1250"},"types/index.ts:1250")))}u.isMDXComponent=!0}}]);