"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[34097],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(i),f=l,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return i?n.createElement(m,a(a({ref:t},u),{},{components:i})):n.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<r;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},89532:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=i(87462),l=(i(67294),i(3905));const r={id:"MultiSigProposalDetails",title:"Interface: MultiSigProposalDetails",sidebar_label:"MultiSigProposalDetails"},a=void 0,o={unversionedId:"interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails",id:"version-20.1.x/interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails",title:"Interface: MultiSigProposalDetails",description:"api/entities/MultiSigProposal/types.MultiSigProposalDetails",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/MultiSigProposalDetails.md",sourceDirName:"interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails",slug:"/interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/",permalink:"/sdk-docs/interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"MultiSigProposalDetails",title:"Interface: MultiSigProposalDetails",sidebar_label:"MultiSigProposalDetails"},sidebar:"defaultSidebar",previous:{title:"HumanReadable",permalink:"/sdk-docs/interfaces/API/Entities/MultiSigProposal/HumanReadable/"},next:{title:"UniqueIdentifiers",permalink:"/sdk-docs/interfaces/API/Entities/NumberedPortfolio/UniqueIdentifiers/"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"approvalAmount",id:"approvalamount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"args",id:"args",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"autoClose",id:"autoclose",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"rejectionAmount",id:"rejectionamount",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"txTag",id:"txtag",level:3},{value:"Defined in",id:"defined-in-6",level:4}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/MultiSigProposal/Types/"},"api/entities/MultiSigProposal/types"),".MultiSigProposalDetails"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"approvalamount"},"approvalAmount"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"approvalAmount"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,l.kt)("p",null,"The number of approvals this proposal has received"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L18"},"api/entities/MultiSigProposal/types.ts:18")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"args"},"args"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"args"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.kt)("p",null,"The arguments to be passed to the transaction for this proposal"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L42"},"api/entities/MultiSigProposal/types.ts:42")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"autoclose"},"autoClose"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"autoClose"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Determines if the proposal will automatically be closed once a threshold of reject votes has been reached"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L34"},"api/entities/MultiSigProposal/types.ts:34")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"expiry"},"expiry"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"expiry"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")),(0,l.kt)("p",null,"An optional time in which this proposal will expire if a decision isn't reached by then"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L30"},"api/entities/MultiSigProposal/types.ts:30")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rejectionamount"},"rejectionAmount"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"rejectionAmount"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,l.kt)("p",null,"The number of rejections this proposal has received"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L22"},"api/entities/MultiSigProposal/types.ts:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"status"},"status"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"status"),": ",(0,l.kt)("a",{parentName:"p",href:"/sdk-docs/enums/API/Entities/MultiSigProposal/Types/ProposalStatus/"},(0,l.kt)("inlineCode",{parentName:"a"},"ProposalStatus"))),(0,l.kt)("p",null,"The current status of the proposal"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L26"},"api/entities/MultiSigProposal/types.ts:26")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"txtag"},"txTag"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"txTag"),": ",(0,l.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Generated/Types/#txtag"},(0,l.kt)("inlineCode",{parentName:"a"},"TxTag"))),(0,l.kt)("p",null,"The tag for the transaction being proposed for the MultiSig to execute"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/MultiSigProposal/types.ts#L38"},"api/entities/MultiSigProposal/types.ts:38")))}d.isMDXComponent=!0}}]);