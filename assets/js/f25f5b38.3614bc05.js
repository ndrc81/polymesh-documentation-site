"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[91692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"CorporateActionTx",title:"Enumeration: CorporateActionTx",sidebar_label:"CorporateActionTx"},o=void 0,l={unversionedId:"enums/Generated/Types/CorporateActionTx/CorporateActionTx",id:"version-20.1.x/enums/Generated/Types/CorporateActionTx/CorporateActionTx",title:"Enumeration: CorporateActionTx",description:"generated/types.CorporateActionTx",source:"@site/sdk-docs_versioned_docs/version-20.1.x/enums/Generated/Types/CorporateActionTx/CorporateActionTx.md",sourceDirName:"enums/Generated/Types/CorporateActionTx",slug:"/enums/Generated/Types/CorporateActionTx/",permalink:"/sdk-docs/enums/Generated/Types/CorporateActionTx/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"CorporateActionTx",title:"Enumeration: CorporateActionTx",sidebar_label:"CorporateActionTx"},sidebar:"defaultSidebar",previous:{title:"ContractsTx",permalink:"/sdk-docs/enums/Generated/Types/ContractsTx/"},next:{title:"CorporateBallotTx",permalink:"/sdk-docs/enums/Generated/Types/CorporateBallotTx/"}},d={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ChangeRecordDate",id:"changerecorddate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"InitiateCorporateAction",id:"initiatecorporateaction",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"InitiateCorporateActionAndDistribute",id:"initiatecorporateactionanddistribute",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"LinkCaDoc",id:"linkcadoc",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"RemoveCa",id:"removeca",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"SetDefaultTargets",id:"setdefaulttargets",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"SetDefaultWithholdingTax",id:"setdefaultwithholdingtax",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"SetDidWithholdingTax",id:"setdidwithholdingtax",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"SetMaxDetailsLength",id:"setmaxdetailslength",level:3},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Generated/Types/"},"generated/types"),".CorporateActionTx"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"changerecorddate"},"ChangeRecordDate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ChangeRecordDate")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.changeRecordDate"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L563"},"generated/types.ts:563")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initiatecorporateaction"},"InitiateCorporateAction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InitiateCorporateAction")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.initiateCorporateAction"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L560"},"generated/types.ts:560")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initiatecorporateactionanddistribute"},"InitiateCorporateActionAndDistribute"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InitiateCorporateActionAndDistribute")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.initiateCorporateActionAndDistribute"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L564"},"generated/types.ts:564")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linkcadoc"},"LinkCaDoc"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"LinkCaDoc")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.linkCaDoc"')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L561"},"generated/types.ts:561")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removeca"},"RemoveCa"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"RemoveCa")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.removeCa"')),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L562"},"generated/types.ts:562")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setdefaulttargets"},"SetDefaultTargets"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SetDefaultTargets")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.setDefaultTargets"')),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L557"},"generated/types.ts:557")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setdefaultwithholdingtax"},"SetDefaultWithholdingTax"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SetDefaultWithholdingTax")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.setDefaultWithholdingTax"')),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L558"},"generated/types.ts:558")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setdidwithholdingtax"},"SetDidWithholdingTax"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SetDidWithholdingTax")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.setDidWithholdingTax"')),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L559"},"generated/types.ts:559")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmaxdetailslength"},"SetMaxDetailsLength"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SetMaxDetailsLength")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"corporateAction.setMaxDetailsLength"')),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/generated/types.ts#L556"},"generated/types.ts:556")))}c.isMDXComponent=!0}}]);