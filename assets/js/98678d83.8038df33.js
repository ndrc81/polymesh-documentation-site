"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[60789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=i,u=m["".concat(o,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"Polymesh",title:"Class: Polymesh",sidebar_label:"Polymesh"},l=void 0,s={unversionedId:"classes/API/Client/Polymesh/Polymesh",id:"version-21.0.x/classes/API/Client/Polymesh/Polymesh",title:"Class: Polymesh",description:"api/client/Polymesh.Polymesh",source:"@site/sdk-docs_versioned_docs/version-21.0.x/classes/API/Client/Polymesh/Polymesh.md",sourceDirName:"classes/API/Client/Polymesh",slug:"/classes/API/Client/Polymesh/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Polymesh/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"Polymesh",title:"Class: Polymesh",sidebar_label:"Polymesh"},sidebar:"defaultSidebar",previous:{title:"Network",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Network/"},next:{title:"Settlements",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Settlements/"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"accountManagement",id:"accountmanagement",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"claims",id:"claims",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"identities",id:"identities",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"network",id:"network",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"settlements",id:"settlements",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Accessors",id:"accessors",level:2},{value:"_middlewareApi",id:"_middlewareapi",level:3},{value:"Returns",id:"returns",level:4},{value:"_middlewareApiV2",id:"_middlewareapiv2",level:3},{value:"Returns",id:"returns-1",level:4},{value:"_polkadotApi",id:"_polkadotapi",level:3},{value:"Returns",id:"returns-2",level:4},{value:"_signingAddress",id:"_signingaddress",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Methods",id:"methods",level:2},{value:"createTransactionBatch",id:"createtransactionbatch",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"disconnect",id:"disconnect",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getSigningIdentity",id:"getsigningidentity",level:3},{value:"Returns",id:"returns-6",level:4},{value:"onConnectionError",id:"onconnectionerror",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"onDisconnect",id:"ondisconnect",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"setSigningAccount",id:"setsigningaccount",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"setSigningManager",id:"setsigningmanager",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"connect",id:"connect",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/API/Client/Polymesh/"},"api/client/Polymesh"),".Polymesh"),(0,i.kt)("p",null,"Main entry point of the Polymesh SDK"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accountmanagement"},"accountManagement"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"accountManagement"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/AccountManagement/"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountManagement"))),(0,i.kt)("p",null,"A set of methods for managing a Polymesh Identity's Accounts and their permissions"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/client/Polymesh.ts#L108"},"api/client/Polymesh.ts:108")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assets"},"assets"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"assets"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Assets/"},(0,i.kt)("inlineCode",{parentName:"a"},"Assets"))),(0,i.kt)("p",null,"A set of methods for interacting with Assets"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/client/Polymesh.ts#L116"},"api/client/Polymesh.ts:116")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"claims"},"claims"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"claims"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Claims/"},(0,i.kt)("inlineCode",{parentName:"a"},"Claims"))),(0,i.kt)("p",null,"A set of methods to deal with Claims"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/client/Polymesh.ts#L96"},"api/client/Polymesh.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"identities"},"identities"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"identities"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Identities/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identities"))),(0,i.kt)("p",null,"A set of methods for interacting with Polymesh Identities."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/client/Polymesh.ts#L112"},"api/client/Polymesh.ts:112")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"network"},"network"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"network"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Network/"},(0,i.kt)("inlineCode",{parentName:"a"},"Network"))),(0,i.kt)("p",null,"A set of methods to interact with the Polymesh network. This includes transferring POLYX, reading network properties and querying for historical events"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/client/Polymesh.ts#L100"},"api/client/Polymesh.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settlements"},"settlements"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"settlements"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Settlements/"},(0,i.kt)("inlineCode",{parentName:"a"},"Settlements"))),(0,i.kt)("p",null,"A set of methods for exchanging Assets"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/client/Polymesh.ts#L104"},"api/client/Polymesh.ts:104")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"_middlewareapi"},"_","middlewareApi"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"_middlewareApi"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloClient"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,i.kt)("p",null,"Middleware client"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApolloClient"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_middlewareapiv2"},"_","middlewareApiV2"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"_middlewareApiV2"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloClient"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,i.kt)("p",null,"MiddlewareV2 client"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApolloClient"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"NormalizedCacheObject"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_polkadotapi"},"_","polkadotApi"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"_polkadotApi"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiPromise")),(0,i.kt)("p",null,"Polkadot client"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApiPromise")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"_signingaddress"},"_","signingAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"_signingAddress"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"signing address (to manually submit transactions with the polkadot API)"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createtransactionbatch"},"createTransactionBatch"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createTransactionBatch"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnValues"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">",">"),(0,i.kt)("p",null,"Create a batch transaction from a list of separate transactions. The list can contain batch transactions as well.\nThe result of running this transaction will be an array of the results of each transaction in the list, in the same order.\nTransactions with no return value will produce ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," in the resulting array"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null," Batching 3 ticker reservation transactions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx1 = await sdk.assets.reserveTicker({ ticker: 'FOO' });\nconst tx2 = await sdk.assets.reserveTicker({ ticker: 'BAR' });\nconst tx3 = await sdk.assets.reserveTicker({ ticker: 'BAZ' });\n\nconst batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const });\n\nconst [res1, res2, res3] = await batch.run();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null," Specifying the signer account for the whole batch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const batch = sdk.createTransactionBatch({ transactions: [tx1, tx2, tx3] as const }, { signingAccount: 'someAddress' });\n\nconst [res1, res2, res3] = await batch.run();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," it is mandatory to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"as const")," type assertion when passing in the transaction array to the method in order to get the correct types\nfor the results of running the batch"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," if a signing Account is not specified, the default one will be used (the one returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.accountManagement.getSigningAccount()"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," all fees in the resulting batch must be paid by the calling Account, regardless of any exceptions that would normally be made for\nthe individual transactions (such as subsidies or accepting invitations to join an Identity)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/CreateTransactionBatchProcedureMethod/"},"CreateTransactionBatchProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/CreateTransactionBatchProcedureMethod/#checkauthorization"},"createTransactionBatch.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ReturnValues")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends readonly ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),"[]")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/CreateTransactionBatchParams/"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateTransactionBatchParams")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"ReturnValues"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnValues"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ReturnValues"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"disconnect"},"disconnect"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"disconnect"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Disconnect the client and close all open connections and subscriptions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," the SDK will become unusable after this operation. It will throw an error when attempting to\naccess any chain or middleware data. If you wish to continue using the SDK, you must\ncreate a new instance by calling ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Polymesh/#connect"},"connect")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsigningidentity"},"getSigningIdentity"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSigningIdentity"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,i.kt)("p",null,"Retrieve the Identity associated to the signing Account (null if there is none)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if there is no signing Account associated to the SDK"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onconnectionerror"},"onConnectionError"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onConnectionError"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,i.kt)("p",null,"Handle connection errors"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"callback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(...",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,i.kt)("p",null,"an unsubscribe callback"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondisconnect"},"onDisconnect"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onDisconnect"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,i.kt)("p",null,"Handle disconnection"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"callback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(...",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,i.kt)("p",null,"an unsubscribe callback"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setsigningaccount"},"setSigningAccount"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setSigningAccount"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"signer"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Set the SDK's signing Account to the provided one"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if the passed Account is not present in the Signing Manager (or there is no Signing Manager)"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setsigningmanager"},"setSigningManager"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setSigningManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"signingManager"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Set the SDK's Signing Manager to the provided one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," Pass ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," to unset the current signing manager"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"signingManager")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"SigningManager"))))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connect"},"connect"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"connect"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Polymesh/"},(0,i.kt)("inlineCode",{parentName:"a"},"Polymesh")),">"),(0,i.kt)("p",null,"Create an SDK instance and connect to a Polymesh node"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Client/Polymesh/ConnectParams/"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectParams")))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Client/Polymesh/"},(0,i.kt)("inlineCode",{parentName:"a"},"Polymesh")),">"))}m.isMDXComponent=!0}}]);