"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[84135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={id:"PermissionGroups",title:"Interface: PermissionGroups",sidebar_label:"PermissionGroups"},i=void 0,a={unversionedId:"interfaces/Types/PermissionGroups/PermissionGroups",id:"version-20.1.x/interfaces/Types/PermissionGroups/PermissionGroups",title:"Interface: PermissionGroups",description:"types.PermissionGroups",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/Types/PermissionGroups/PermissionGroups.md",sourceDirName:"interfaces/Types/PermissionGroups",slug:"/interfaces/Types/PermissionGroups/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/PermissionGroups/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"PermissionGroups",title:"Interface: PermissionGroups",sidebar_label:"PermissionGroups"},sidebar:"defaultSidebar",previous:{title:"PercentageTransferRestriction",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/PercentageTransferRestriction/"},next:{title:"PermissionedAccount",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/PermissionedAccount/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"custom",id:"custom",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"known",id:"known",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/"},"types"),".PermissionGroups"),(0,s.kt)("p",null,"All Permission Groups of a specific Asset, separated by ",(0,s.kt)("inlineCode",{parentName:"p"},"known")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"custom")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"custom"},"custom"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"custom"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/CustomPermissionGroup/"},(0,s.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),"[]"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L987"},"types/index.ts:987")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"known"},"known"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"known"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/KnownPermissionGroup/"},(0,s.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup")),"[]"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L986"},"types/index.ts:986")))}u.isMDXComponent=!0}}]);