"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[17046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(r),k=n,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||s;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},66223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={id:"TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",sidebar_label:"TransferRestrictionBase"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase",id:"version-20.0.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",description:"api/entities/Asset/TransferRestrictions/TransferRestrictionBase.TransferRestrictionBase",source:"@site/sdk-docs_versioned_docs/version-20.0.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md",sourceDirName:"classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase",slug:"/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",sidebar_label:"TransferRestrictionBase"},sidebar:"defaultSidebar",previous:{title:"Percentage",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/TransferRestrictions/Percentage/"},next:{title:"AuthorizationRequest",permalink:"/sdk-docs/20.0.x/classes/API/Entities/AuthorizationRequest/"}},p={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-3",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4}],d={toc:l};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/"},"api/entities/Asset/TransferRestrictions/TransferRestrictionBase"),".TransferRestrictionBase"),(0,n.kt)("p",null,"Base class for managing Transfer Restrictions"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/enums/Types/TransferRestrictionType/"},(0,n.kt)("inlineCode",{parentName:"a"},"TransferRestrictionType")))))),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,n.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"TransferRestrictionBase"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/TransferRestrictions/ClaimCount/"},(0,n.kt)("inlineCode",{parentName:"a"},"ClaimCount"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage/"},(0,n.kt)("inlineCode",{parentName:"a"},"ClaimPercentage"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/TransferRestrictions/Count/"},(0,n.kt)("inlineCode",{parentName:"a"},"Count"))),(0,n.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/TransferRestrictions/Percentage/"},(0,n.kt)("inlineCode",{parentName:"a"},"Percentage"))))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"addrestriction"},"addRestriction"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addRestriction"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,n.kt)("p",null,"Add a Transfer Restriction of the corresponding type to this Asset"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," the result is the total amount of restrictions after the procedure has run"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," this method is of type ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"addRestriction.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/#addrestrictionparams"},(0,n.kt)("inlineCode",{parentName:"a"},"AddRestrictionParams")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"opts?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,n.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"disablestat"},"disableStat"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"disableStat"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,n.kt)("p",null,"Removes an Asset statistic"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null," if the statistic is being used or is not set"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," this method is of type ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"disableStat.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/modules/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#removeassetstatparamsbase"},(0,n.kt)("inlineCode",{parentName:"a"},"RemoveAssetStatParamsBase")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"opts?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,n.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"enablestat"},"enableStat"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"enableStat"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,n.kt)("p",null,"Enables statistic of the corresponding type for this Asset, which are required for restrictions to be created"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," this method is of type ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"enableStat.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/#setassetstatparams"},(0,n.kt)("inlineCode",{parentName:"a"},"SetAssetStatParams")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"opts?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,n.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"get"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/#gettransferrestrictionreturntype"},(0,n.kt)("inlineCode",{parentName:"a"},"GetTransferRestrictionReturnType")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,n.kt)("p",null,"Retrieve all active Transfer Restrictions of the corresponding type"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," there is a maximum number of restrictions allowed across all types.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"availableSlots")," property of the result represents how many more restrictions can be added\nbefore reaching that limit"),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/#gettransferrestrictionreturntype"},(0,n.kt)("inlineCode",{parentName:"a"},"GetTransferRestrictionReturnType")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"removerestrictions"},"removeRestrictions"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"removeRestrictions"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,n.kt)("p",null,"Removes all Transfer Restrictions of the corresponding type from this Asset"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," the result is the total amount of restrictions after the procedure has run"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," this method is of type ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"removeRestrictions.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"opts?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,n.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setrestrictions"},"setRestrictions"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setRestrictions"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,n.kt)("p",null,"Sets all Transfer Restrictions of the corresponding type on this Asset"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," the result is the total amount of restrictions after the procedure has run"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,n.kt)("p",null," this method is of type ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"setRestrictions.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"args")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/#setrestrictionsparams"},(0,n.kt)("inlineCode",{parentName:"a"},"SetRestrictionsParams")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"opts?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,n.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"))}m.isMDXComponent=!0}}]);