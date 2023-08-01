"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[64909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,u=k["".concat(o,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[k]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"Polymesh",title:"Class: Polymesh",sidebar_label:"Polymesh"},l=void 0,s={unversionedId:"classes/API/Client/Polymesh/Polymesh",id:"version-19.1.x/classes/API/Client/Polymesh/Polymesh",title:"Class: Polymesh",description:"api/client/Polymesh.Polymesh",source:"@site/sdk-docs_versioned_docs/version-19.1.x/classes/API/Client/Polymesh/Polymesh.md",sourceDirName:"classes/API/Client/Polymesh",slug:"/classes/API/Client/Polymesh/",permalink:"/sdk-docs/19.1.x/classes/API/Client/Polymesh/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"Polymesh",title:"Class: Polymesh",sidebar_label:"Polymesh"},sidebar:"defaultSidebar",previous:{title:"Network",permalink:"/sdk-docs/19.1.x/classes/API/Client/Network/"},next:{title:"Settlements",permalink:"/sdk-docs/19.1.x/classes/API/Client/Settlements/"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"accountManagement",id:"accountmanagement",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"claims",id:"claims",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"identities",id:"identities",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"network",id:"network",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"settlements",id:"settlements",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Accessors",id:"accessors",level:2},{value:"_middlewareApi",id:"_middlewareapi",level:3},{value:"Returns",id:"returns",level:4},{value:"_middlewareApiV2",id:"_middlewareapiv2",level:3},{value:"Returns",id:"returns-1",level:4},{value:"_polkadotApi",id:"_polkadotapi",level:3},{value:"Returns",id:"returns-2",level:4},{value:"_signingAddress",id:"_signingaddress",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Methods",id:"methods",level:2},{value:"createTransactionBatch",id:"createtransactionbatch",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"disconnect",id:"disconnect",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getSigningIdentity",id:"getsigningidentity",level:3},{value:"Returns",id:"returns-6",level:4},{value:"onConnectionError",id:"onconnectionerror",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"onDisconnect",id:"ondisconnect",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"setSigningAccount",id:"setsigningaccount",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"setSigningManager",id:"setsigningmanager",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Client/Polymesh/"},"api/client/Polymesh"),".Polymesh"),(0,r.kt)("p",null,"Main entry point of the Polymesh SDK"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"accountmanagement"},"accountManagement"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"accountManagement"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/AccountManagement/"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountManagement"))),(0,r.kt)("p",null,"A set of methods for managing a Polymesh Identity's Accounts and their permissions"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/client/Polymesh.ts#L100"},"api/client/Polymesh.ts:100")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"assets"},"assets"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"assets"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Assets/"},(0,r.kt)("inlineCode",{parentName:"a"},"Assets"))),(0,r.kt)("p",null,"A set of methods for interacting with Assets"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/client/Polymesh.ts#L108"},"api/client/Polymesh.ts:108")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"claims"},"claims"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"claims"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Claims/"},(0,r.kt)("inlineCode",{parentName:"a"},"Claims"))),(0,r.kt)("p",null,"A set of methods to deal with Claims"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/client/Polymesh.ts#L88"},"api/client/Polymesh.ts:88")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identities"},"identities"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"identities"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Identities/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identities"))),(0,r.kt)("p",null,"A set of methods for interacting with Polymesh Identities."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/client/Polymesh.ts#L104"},"api/client/Polymesh.ts:104")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"network"},"network"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"network"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Network/"},(0,r.kt)("inlineCode",{parentName:"a"},"Network"))),(0,r.kt)("p",null,"A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/client/Polymesh.ts#L92"},"api/client/Polymesh.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settlements"},"settlements"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"settlements"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Settlements/"},(0,r.kt)("inlineCode",{parentName:"a"},"Settlements"))),(0,r.kt)("p",null,"A set of methods for exchanging Assets"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/client/Polymesh.ts#L96"},"api/client/Polymesh.ts:96")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"_middlewareapi"},"_","middlewareApi"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"_middlewareApi"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,r.kt)("p",null,"Middleware client"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"default"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_middlewareapiv2"},"_","middlewareApiV2"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"_middlewareApiV2"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,r.kt)("p",null,"MiddlewareV2 client"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"default"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_polkadotapi"},"_","polkadotApi"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"_polkadotApi"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiPromise")),(0,r.kt)("p",null,"Polkadot client"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApiPromise")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_signingaddress"},"_","signingAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"_signingAddress"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"signing address (to manually submit transactions with the polkadot API)"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createtransactionbatch"},"createTransactionBatch"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createTransactionBatch"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValues"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">",">"),(0,r.kt)("p",null,"Create a batch transaction from a list of separate transactions. The list can contain batch transactions as well.\nThe result of running this transaction will be an array of the results of each transaction in the list, in the same order.\nTransactions with no return value will produce ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," in the resulting array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null," Batching 3 ticker reservation transactions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx1 = await sdk.assets.reserveTicker({ ticker: 'FOO' });\nconst tx2 = await sdk.assets.reserveTicker({ ticker: 'BAR' });\nconst tx3 = await sdk.assets.reserveTicker({ ticker: 'BAZ' });\n\nconst batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const });\n\nconst [res1, res2, res3] = await batch.run();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null," Specifying the signer account for the whole batch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const }, { signingAccount: 'someAddress' });\n\nconst [res1, res2, res3] = await batch.run();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," it is mandatory to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"as const")," type assertion when passing in the transaction array to the method in order to get the correct types\nfor the results of running the batch"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," if a signing Account is not specified, the default one will be used (the one returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.accountManagement.getSigningAccount()"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," all fees in the resulting batch must be paid by the calling Account, regardless of any exceptions that would normally be made for\nthe individual transactions (such as subsidies or accepting invitations to join an Identity)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/interfaces/Types/CreateTransactionBatchProcedureMethod/"},"CreateTransactionBatchProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/interfaces/Types/CreateTransactionBatchProcedureMethod/#checkauthorization"},"createTransactionBatch.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReturnValues")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends readonly ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]")))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/19.1.x/interfaces/API/Procedures/Types/CreateTransactionBatchParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateTransactionBatchParams")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"ReturnValues"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/19.1.x/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValues"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disconnect"},"disconnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"disconnect"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Disconnect the client and close all open connections and subscriptions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," the SDK will become unusable after this operation. It will throw an error when attempting to\naccess any chain or middleware data. If you wish to continue using the SDK, you must\ncreate a new instance by calling ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Polymesh/#connect"},"connect")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsigningidentity"},"getSigningIdentity"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSigningIdentity"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,r.kt)("p",null,"Retrieve the Identity associated to the signing Account (null if there is none)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null," if there is no signing Account associated to the SDK"),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onconnectionerror"},"onConnectionError"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"onConnectionError"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,r.kt)("p",null,"Handle connection errors"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,r.kt)("p",null,"an unsubscribe callback"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ondisconnect"},"onDisconnect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"onDisconnect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,r.kt)("p",null,"Handle disconnection"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(...",(0,r.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]) => ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,r.kt)("p",null,"an unsubscribe callback"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setsigningaccount"},"setSigningAccount"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setSigningAccount"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"signer"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Set the SDK's signing Account to the provided one"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null," if the passed Account is not present in the Signing Manager (or there is no Signing Manager)"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/19.1.x/classes/API/Entities/Account/"},(0,r.kt)("inlineCode",{parentName:"a"},"Account")))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setsigningmanager"},"setSigningManager"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setSigningManager"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"signingManager"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Set the SDK's Signing Manager to the provided one"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signingManager")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SigningManager"))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"connect"},"connect"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"connect"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Polymesh/"},(0,r.kt)("inlineCode",{parentName:"a"},"Polymesh")),">"),(0,r.kt)("p",null,"Create an SDK instance and connect to a Polymesh node"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/19.1.x/interfaces/API/Client/Polymesh/ConnectParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectParams")))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Client/Polymesh/"},(0,r.kt)("inlineCode",{parentName:"a"},"Polymesh")),">"))}k.isMDXComponent=!0}}]);