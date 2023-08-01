"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[93481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(a),c=r,u=m["".concat(p,".").concat(c)]||m[c]||k[c]||s;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={id:"Requirements",title:"Class: Requirements",sidebar_label:"Requirements"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/Compliance/Requirements/Requirements",id:"version-20.1.x/classes/API/Entities/Asset/Compliance/Requirements/Requirements",title:"Class: Requirements",description:"api/entities/Asset/Compliance/Requirements.Requirements",source:"@site/sdk-docs_versioned_docs/version-20.1.x/classes/API/Entities/Asset/Compliance/Requirements/Requirements.md",sourceDirName:"classes/API/Entities/Asset/Compliance/Requirements",slug:"/classes/API/Entities/Asset/Compliance/Requirements/",permalink:"/sdk-docs/classes/API/Entities/Asset/Compliance/Requirements/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"Requirements",title:"Class: Requirements",sidebar_label:"Requirements"},sidebar:"defaultSidebar",previous:{title:"Compliance",permalink:"/sdk-docs/classes/API/Entities/Asset/Compliance/"},next:{title:"TrustedClaimIssuers",permalink:"/sdk-docs/classes/API/Entities/Asset/Compliance/TrustedClaimIssuers/"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"arePaused",id:"arepaused",level:3},{value:"Returns",id:"returns-1",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"modify",id:"modify",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"pause",id:"pause",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"reset",id:"reset",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"unpause",id:"unpause",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4}],d={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/Asset/Compliance/Requirements/"},"api/entities/Asset/Compliance/Requirements"),".Requirements"),(0,r.kt)("p",null,"Handles all Asset Compliance Requirements related functionality"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Requirements"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"add"},"add"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"add"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("p",null,"Add a new compliance requirement to the the Asset. This doesn't modify existing requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"add.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/API/Procedures/Types/AddAssetRequirementParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"AddAssetRequirementParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"arepaused"},"arePaused"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"arePaused"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Check whether Asset compliance requirements are paused or not"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ComplianceRequirements/"},(0,r.kt)("inlineCode",{parentName:"a"},"ComplianceRequirements")),">"),(0,r.kt)("p",null,"Retrieve all of the Asset's compliance requirements, together with the Default Trusted Claim Issuers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," can be subscribed to"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ComplianceRequirements/"},(0,r.kt)("inlineCode",{parentName:"a"},"ComplianceRequirements")),">"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/modules/Types/#subcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ComplianceRequirements/"},(0,r.kt)("inlineCode",{parentName:"a"},"ComplianceRequirements")),">")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"modify"},"modify"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"modify"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("p",null,"Modify a compliance requirement for the Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"modify.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/modules/API/Procedures/Types/#modifycompliancerequirementparams"},(0,r.kt)("inlineCode",{parentName:"a"},"ModifyComplianceRequirementParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pause"},"pause"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pause"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("p",null,"Pause all the Asset's requirements. This means that all transfers will be allowed until requirements are unpaused"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"pause.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove"},"remove"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"remove"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("p",null,"Remove an existing compliance requirement from the Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"remove.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/API/Procedures/Types/RemoveAssetRequirementParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"RemoveAssetRequirementParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reset"},"reset"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"reset"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("p",null,"Delete all the current requirements for the Asset."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"reset.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set"},"set"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"set"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("p",null,"Configure compliance requirements for the Asset. This operation will replace all existing requirements with a new requirement set"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("p",null," Say A, B, C, D and E are requirements and we arrange them as ",(0,r.kt)("inlineCode",{parentName:"p"},"[[A, B], [C, D], [E]]"),".\nFor a transfer to succeed, it must either comply with A AND B, C AND D, OR E."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"set.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/API/Procedures/Types/SetAssetRequirementsParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"SetAssetRequirementsParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unpause"},"unpause"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"unpause"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,r.kt)("p",null,"Un-pause all the Asset's current requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"unpause.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"))}m.isMDXComponent=!0}}]);