"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[31021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=s,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),s=(n(67294),n(3905));const r={id:"PolymeshTransactionBatch",title:"Class: PolymeshTransactionBatch<ReturnValue, TransformedReturnValue, Args>",sidebar_label:"PolymeshTransactionBatch"},i=void 0,l={unversionedId:"classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch",id:"classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch",title:"Class: PolymeshTransactionBatch<ReturnValue, TransformedReturnValue, Args>",description:"base/PolymeshTransactionBatch.PolymeshTransactionBatch",source:"@site/sdk-docs/classes/Base/PolymeshTransactionBatch/PolymeshTransactionBatch.md",sourceDirName:"classes/Base/PolymeshTransactionBatch",slug:"/classes/Base/PolymeshTransactionBatch/",permalink:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBatch/",draft:!1,tags:[],version:"current",frontMatter:{id:"PolymeshTransactionBatch",title:"Class: PolymeshTransactionBatch<ReturnValue, TransformedReturnValue, Args>",sidebar_label:"PolymeshTransactionBatch"},sidebar:"defaultSidebar",previous:{title:"PolymeshTransactionBase",permalink:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},next:{title:"ConnectParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Polymesh/ConnectParams/"}},o={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"blockHash",id:"blockhash",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"blockNumber",id:"blocknumber",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"error",id:"error",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"receipt",id:"receipt",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"status",id:"status",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"txHash",id:"txhash",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"txIndex",id:"txindex",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Accessors",id:"accessors",level:2},{value:"isSuccess",id:"issuccess",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"result",id:"result",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"transactions",id:"transactions",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Methods",id:"methods",level:2},{value:"getTotalFees",id:"gettotalfees",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"onProcessedByMiddleware",id:"onprocessedbymiddleware",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"onStatusChange",id:"onstatuschange",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"run",id:"run",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"splitTransactions",id:"splittransactions",level:3},{value:"Returns",id:"returns-7",level:4},{value:"supportsSubsidy",id:"supportssubsidy",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Base/PolymeshTransactionBatch/"},"base/PolymeshTransactionBatch"),".PolymeshTransactionBatch"),(0,s.kt)("p",null,"Wrapper class for a batch of Polymesh Transactions"),(0,s.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"TransformedReturnValue")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Args")),(0,s.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,s.kt)("inlineCode",{parentName:"td"},"unknown"),"[][]"," = ",(0,s.kt)("inlineCode",{parentName:"td"},"unknown"),"[][]")))),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransactionBase")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),">"),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"PolymeshTransactionBatch"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"blockhash"},"blockHash"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"hash of the block where this transaction resides (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#blockhash"},"blockHash")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L92"},"base/PolymeshTransactionBase.ts:92")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,s.kt)("p",null,"number of the block where this transaction resides (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#blocknumber"},"blockNumber")),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L97"},"base/PolymeshTransactionBase.ts:97")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"error"},"error"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"error"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshError/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshError"))),(0,s.kt)("p",null,"stores errors thrown while running the transaction (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Aborted"),")"),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#error"},"error")),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L72"},"base/PolymeshTransactionBase.ts:72")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receipt"},"receipt"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"receipt"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"ISubmittableResult")),(0,s.kt)("p",null,"stores the transaction receipt (if successful)"),(0,s.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#receipt"},"receipt")),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L77"},"base/PolymeshTransactionBase.ts:77")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"status"},"status"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"status"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/TransactionStatus/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionStatus"))," = ",(0,s.kt)("inlineCode",{parentName:"p"},"TransactionStatus.Idle")),(0,s.kt)("p",null,"current status of the transaction"),(0,s.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#status"},"status")),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L67"},"base/PolymeshTransactionBase.ts:67")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"txhash"},"txHash"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"txHash"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"transaction hash (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#txhash"},"txHash")),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L82"},"base/PolymeshTransactionBase.ts:82")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"txindex"},"txIndex"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"txIndex"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,s.kt)("p",null,"transaction index within its block (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#txindex"},"txIndex")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/PolymeshTransactionBase.ts#L87"},"base/PolymeshTransactionBase.ts:87")),(0,s.kt)("h2",{id:"accessors"},"Accessors"),(0,s.kt)("h3",{id:"issuccess"},"isSuccess"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"isSuccess"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"returns true if transaction has completed successfully"),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,s.kt)("p",null,"PolymeshTransactionBase.isSuccess"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"result"},"result"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"result"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue")),(0,s.kt)("p",null,"returns the transaction result - this is the same value as the Promise run returns"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null,"it is generally preferable to ",(0,s.kt)("inlineCode",{parentName:"p"},"await")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," returned by ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#run"},"transaction.run()")," instead of reading this property"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,s.kt)("p",null,"if the ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#issuccess"},"transaction.isSuccess")," property is false \u2014 be sure to check that before accessing!"),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue")),(0,s.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,s.kt)("p",null,"PolymeshTransactionBase.result"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transactions"},"transactions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"transactions"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#maptxdata"},(0,s.kt)("inlineCode",{parentName:"a"},"MapTxData")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"Args"),">"),(0,s.kt)("p",null,"transactions in the batch with their respective arguments"),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#maptxdata"},(0,s.kt)("inlineCode",{parentName:"a"},"MapTxData")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"Args"),">"),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"gettotalfees"},"getTotalFees"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getTotalFees"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PayingAccountFees/"},(0,s.kt)("inlineCode",{parentName:"a"},"PayingAccountFees")),">"),(0,s.kt)("p",null,"Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null,"these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other\nchain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)"),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PayingAccountFees/"},(0,s.kt)("inlineCode",{parentName:"a"},"PayingAccountFees")),">"),(0,s.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#gettotalfees"},"getTotalFees")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"onprocessedbymiddleware"},"onProcessedByMiddleware"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"onProcessedByMiddleware"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null,"this event will be fired even if the queue fails"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,s.kt)("p",null,"if the middleware wasn't enabled when instantiating the SDK client"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"err?"),": ",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshError/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshError")),") => ",(0,s.kt)("inlineCode",{parentName:"td"},"void")),(0,s.kt)("td",{parentName:"tr",align:"left"},"callback function that will be called whenever the middleware is updated with the latest data. If there is an error (timeout or middleware offline) it will be passed to this callback")))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"unsubscribe function"),(0,s.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#onprocessedbymiddleware"},"onProcessedByMiddleware")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"onstatuschange"},"onStatusChange"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"onStatusChange"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"Subscribe to status changes"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"transaction"),": ",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"TransformedReturnValue"),">",") => ",(0,s.kt)("inlineCode",{parentName:"td"},"void")),(0,s.kt)("td",{parentName:"tr",align:"left"},"callback function that will be called whenever the status changes")))),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"unsubscribe function"),(0,s.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#onstatuschange"},"onStatusChange")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"run"},"run"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"run"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),">"),(0,s.kt)("p",null,"Run the transaction, update its status and return a result if applicable.\nCertain transactions create Entities on the blockchain, and those Entities are returned\nfor convenience. For example, when running a transaction that creates an Asset, the Asset itself\nis returned"),(0,s.kt)("h4",{id:"returns-6"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),">"),(0,s.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#run"},"run")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"splittransactions"},"splitTransactions"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"splitTransactions"),"(): (",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransaction/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">"," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransaction/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">",")[]"),(0,s.kt)("p",null,"Splits this batch into its individual transactions to be run separately. This is useful if the caller is being subsidized,\nsince batches cannot be run by subsidized Accounts"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null,"the transactions returned by this method must be run in the same order they appear in the array to guarantee the same behavior. If run out of order,\nan error will be thrown. The result that would be obtained by running the batch is returned by running the last transaction in the array"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const createAssetTx = await sdk.assets.createAsset(...);\n\nlet ticker: string;\n\nif (isPolymeshTransactionBatch<Asset>(createAssetTx)) {\n  const transactions = createAssetTx.splitTransactions();\n\n  for (let i = 0; i < length; i += 1) {\n    const result = await transactions[i].run();\n\n    if (isAsset(result)) {\n      ({ticker} = result)\n    }\n  }\n} else {\n  ({ ticker } = await createAssetTx.run());\n}\n\nconsole.log(`New Asset created! Ticker: ${ticker}`);\n")),(0,s.kt)("h4",{id:"returns-7"},"Returns"),(0,s.kt)("p",null,"(",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransaction/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">"," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransaction/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">",")[]"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"supportssubsidy"},"supportsSubsidy"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"supportsSubsidy"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null,"batches can't be subsidized. If the caller is subsidized, they should use ",(0,s.kt)("inlineCode",{parentName:"p"},"splitTransactions")," and\nrun each transaction separately"),(0,s.kt)("h4",{id:"returns-8"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/"},"PolymeshTransactionBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBase/#supportssubsidy"},"supportsSubsidy")))}m.isMDXComponent=!0}}]);