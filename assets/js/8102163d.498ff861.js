"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[47156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={id:"TransactionStatus",title:"Enumeration: TransactionStatus",sidebar_label:"TransactionStatus"},s=void 0,o={unversionedId:"enums/Types/TransactionStatus/TransactionStatus",id:"version-20.0.x/enums/Types/TransactionStatus/TransactionStatus",title:"Enumeration: TransactionStatus",description:"types.TransactionStatus",source:"@site/sdk-docs_versioned_docs/version-20.0.x/enums/Types/TransactionStatus/TransactionStatus.md",sourceDirName:"enums/Types/TransactionStatus",slug:"/enums/Types/TransactionStatus/",permalink:"/polymesh-documentation-site/sdk-docs/enums/Types/TransactionStatus/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"TransactionStatus",title:"Enumeration: TransactionStatus",sidebar_label:"TransactionStatus"},sidebar:"defaultSidebar",previous:{title:"TransactionOrderFields",permalink:"/polymesh-documentation-site/sdk-docs/enums/Types/TransactionOrderFields/"},next:{title:"TransferComplianceTypeEnum",permalink:"/polymesh-documentation-site/sdk-docs/enums/Types/TransferComplianceTypeEnum/"}},l={},d=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Aborted",id:"aborted",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Failed",id:"failed",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Idle",id:"idle",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Rejected",id:"rejected",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Running",id:"running",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Succeeded",id:"succeeded",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Unapproved",id:"unapproved",level:3},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".TransactionStatus"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"aborted"},"Aborted"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Aborted")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Aborted"')),(0,r.kt)("p",null,"the transaction couldn't be broadcast. It was either dropped, usurped or invalidated\nsee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110"},"https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L66"},"types/index.ts:66")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"failed"},"Failed"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Failed")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Failed"')),(0,r.kt)("p",null,"the transaction's execution failed due to a an on-chain validation error, insufficient balance for fees, or other such reasons"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L61"},"types/index.ts:61")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"idle"},"Idle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Idle")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Idle"')),(0,r.kt)("p",null,"the transaction is prepped to run"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L41"},"types/index.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rejected"},"Rejected"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Rejected")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Rejected"')),(0,r.kt)("p",null,"the transaction was rejected by the signer"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L53"},"types/index.ts:53")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"running"},"Running"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Running")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Running"')),(0,r.kt)("p",null,"the transaction is being executed"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L49"},"types/index.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"succeeded"},"Succeeded"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Succeeded")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Succeeded"')),(0,r.kt)("p",null,"the transaction was run successfully"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L57"},"types/index.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unapproved"},"Unapproved"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Unapproved")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"Unapproved"')),(0,r.kt)("p",null,"the transaction is waiting for the user's signature"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L45"},"types/index.ts:45")))}u.isMDXComponent=!0}}]);