"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[45235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return a?r.createElement(f,o(o({ref:t},l),{},{components:a})):r.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50228:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const s={id:"CreateTransactionBatchParams",title:"Interface: CreateTransactionBatchParams<ReturnValues>",sidebar_label:"CreateTransactionBatchParams"},o="Interface: CreateTransactionBatchParams<ReturnValues>",i={unversionedId:"interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams",id:"interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams",title:"Interface: CreateTransactionBatchParams<ReturnValues>",description:"api/procedures/types.CreateTransactionBatchParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/CreateTransactionBatchParams/CreateTransactionBatchParams.md",sourceDirName:"interfaces/API/Procedures/Types/CreateTransactionBatchParams",slug:"/interfaces/API/Procedures/Types/CreateTransactionBatchParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateTransactionBatchParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"CreateTransactionBatchParams",title:"Interface: CreateTransactionBatchParams<ReturnValues>",sidebar_label:"CreateTransactionBatchParams"},sidebar:"defaultSidebar",previous:{title:"CreateMultiSigParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateMultiSigParams/"},next:{title:"CreateVenueParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateVenueParams/"}},c={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interface-createtransactionbatchparamsreturnvalues"},"Interface: CreateTransactionBatchParams<ReturnValues",">"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".CreateTransactionBatchParams"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ReturnValues")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends readonly [...unknown[]]")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"transactions"},"transactions"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"transactions"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#transactionarray"},(0,n.kt)("inlineCode",{parentName:"a"},"TransactionArray")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">",">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L933"},"api/procedures/types.ts:933")))}u.isMDXComponent=!0}}]);