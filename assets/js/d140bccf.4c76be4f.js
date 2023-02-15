"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[4745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"CreateTransactionBatchParams",title:"Interface: CreateTransactionBatchParams<ReturnValues>",sidebar_label:"CreateTransactionBatchParams"},o=void 0,i={unversionedId:"interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams",id:"version-19.0.0/interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams",title:"Interface: CreateTransactionBatchParams<ReturnValues>",description:"api/procedures/types.CreateTransactionBatchParams",source:"@site/sdk-docs_versioned_docs/version-19.0.0/interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams.md",sourceDirName:"interfaces/API/Procedures/Types/CreateTransactionBatchParams",slug:"/interfaces/API/Procedures/Types/CreateTransactionBatchParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateTransactionBatchParams/",draft:!1,tags:[],version:"19.0.0",frontMatter:{id:"CreateTransactionBatchParams",title:"Interface: CreateTransactionBatchParams<ReturnValues>",sidebar_label:"CreateTransactionBatchParams"},sidebar:"defaultSidebar",previous:{title:"CreateMultiSigParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateMultiSigParams/"},next:{title:"CreateVenueParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateVenueParams/"}},c={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".CreateTransactionBatchParams"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ReturnValues")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends readonly [...unknown[]]")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"transactions"},"transactions"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"transactions"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#transactionarray"},(0,n.kt)("inlineCode",{parentName:"a"},"TransactionArray")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">",">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L961"},"api/procedures/types.ts:961")))}d.isMDXComponent=!0}}]);