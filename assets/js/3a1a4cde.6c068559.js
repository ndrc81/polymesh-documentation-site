"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[20999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"InviteExternalAgentParams",title:"Interface: InviteExternalAgentParams",sidebar_label:"InviteExternalAgentParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/InviteExternalAgentParams/InviteExternalAgentParams",id:"version-20.0.x/interfaces/API/Procedures/Types/InviteExternalAgentParams/InviteExternalAgentParams",title:"Interface: InviteExternalAgentParams",description:"api/procedures/types.InviteExternalAgentParams",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/API/Procedures/Types/InviteExternalAgentParams/InviteExternalAgentParams.md",sourceDirName:"interfaces/API/Procedures/Types/InviteExternalAgentParams",slug:"/interfaces/API/Procedures/Types/InviteExternalAgentParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/InviteExternalAgentParams/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"InviteExternalAgentParams",title:"Interface: InviteExternalAgentParams",sidebar_label:"InviteExternalAgentParams"},sidebar:"defaultSidebar",previous:{title:"InviteAccountParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/InviteAccountParams/"},next:{title:"LaunchOfferingParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/LaunchOfferingParams/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".InviteExternalAgentParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"expiry"},"expiry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"expiry"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("p",null,"date at which the authorization request for invitation expires (optional)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," if expiry date is not set, the invitation will never expire"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," due to chain limitations, the expiry will be ignored if the passed ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," don't correspond to an existing Permission Group"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L767"},"api/procedures/types.ts:767")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"permissions"},"permissions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"permissions"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,i.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup"))," ","|"," { ",(0,i.kt)("inlineCode",{parentName:"p"},"transactions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/TransactionPermissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionPermissions")),"  } ","|"," { ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionGroups"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/TxGroup/"},(0,i.kt)("inlineCode",{parentName:"a"},"TxGroup")),"[]  }"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L752"},"api/procedures/types.ts:752")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L751"},"api/procedures/types.ts:751")))}c.isMDXComponent=!0}}]);