"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[74600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?s.createElement(f,a(a({ref:t},d),{},{components:n})):s.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=n(87462),i=(n(67294),n(3905));const r={id:"TransactionPermissions",title:"Interface: TransactionPermissions",sidebar_label:"TransactionPermissions"},a=void 0,o={unversionedId:"interfaces/Types/TransactionPermissions/TransactionPermissions",id:"version-19.1.x/interfaces/Types/TransactionPermissions/TransactionPermissions",title:"Interface: TransactionPermissions",description:"types.TransactionPermissions",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/Types/TransactionPermissions/TransactionPermissions.md",sourceDirName:"interfaces/Types/TransactionPermissions",slug:"/interfaces/Types/TransactionPermissions/",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/TransactionPermissions/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"TransactionPermissions",title:"Interface: TransactionPermissions",sidebar_label:"TransactionPermissions"},sidebar:"defaultSidebar",previous:{title:"TickerOwnerRole",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/TickerOwnerRole/"},next:{title:"TrustedClaimIssuer",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/TrustedClaimIssuer/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"exceptions",id:"exceptions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"values",id:"values",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Types/"},"types"),".TransactionPermissions"),(0,i.kt)("p",null,"Permissions related to Transactions. Can include/exclude individual transactions or entire modules"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/SectionPermissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"SectionPermissions")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Generated/Types/#txtag"},(0,i.kt)("inlineCode",{parentName:"a"},"TxTag"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/enums/Generated/Types/ModuleName/"},(0,i.kt)("inlineCode",{parentName:"a"},"ModuleName")),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TransactionPermissions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"exceptions"},"exceptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"exceptions"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Generated/Types/#txtag"},(0,i.kt)("inlineCode",{parentName:"a"},"TxTag")),"[]"),(0,i.kt)("p",null,"Transactions to be exempted from inclusion/exclusion. This allows more granularity when\nsetting permissions. For example, let's say we want to include only the ",(0,i.kt)("inlineCode",{parentName:"p"},"asset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"staking")," modules,\nbut exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"asset.registerTicker")," transaction. We could add both modules to ",(0,i.kt)("inlineCode",{parentName:"p"},"values"),", and add\n",(0,i.kt)("inlineCode",{parentName:"p"},"TxTags.asset.registerTicker")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"exceptions")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L945"},"types/index.ts:945")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/enums/Types/PermissionType/"},(0,i.kt)("inlineCode",{parentName:"a"},"PermissionType"))),(0,i.kt)("p",null,"Whether the permissions are inclusive or exclusive"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/SectionPermissions/"},"SectionPermissions"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/SectionPermissions/#type"},"type")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L932"},"types/index.ts:932")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"values"},"values"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"values"),": (",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Generated/Types/#txtag"},(0,i.kt)("inlineCode",{parentName:"a"},"TxTag"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/enums/Generated/Types/ModuleName/"},(0,i.kt)("inlineCode",{parentName:"a"},"ModuleName")),")[]"),(0,i.kt)("p",null,"Values to be included/excluded"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/SectionPermissions/"},"SectionPermissions"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/SectionPermissions/#values"},"values")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L928"},"types/index.ts:928")))}c.isMDXComponent=!0}}]);