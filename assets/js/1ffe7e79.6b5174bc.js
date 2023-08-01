"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[85821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={id:"Documents",title:"Class: Documents",sidebar_label:"Documents"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/Documents/Documents",id:"version-20.0.x/classes/API/Entities/Asset/Documents/Documents",title:"Class: Documents",description:"api/entities/Asset/Documents.Documents",source:"@site/sdk-docs_versioned_docs/version-20.0.x/classes/API/Entities/Asset/Documents/Documents.md",sourceDirName:"classes/API/Entities/Asset/Documents",slug:"/classes/API/Entities/Asset/Documents/",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/Documents/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"Documents",title:"Class: Documents",sidebar_label:"Documents"},sidebar:"defaultSidebar",previous:{title:"Distributions",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/CorporateActions/Distributions/"},next:{title:"Issuance",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/Issuance/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/API/Entities/Asset/Documents/"},"api/entities/Asset/Documents"),".Documents"),(0,s.kt)("p",null,"Handles all Asset Document related functionality"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Documents"))))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"get"},"get"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"get"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"paginationOpts?"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ResultSet/"},(0,s.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/AssetDocument/"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetDocument")),">",">"),(0,s.kt)("p",null,"Retrieve all documents linked to the Asset"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," supports pagination"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"paginationOpts?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/PaginationOptions/"},(0,s.kt)("inlineCode",{parentName:"a"},"PaginationOptions")))))),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ResultSet/"},(0,s.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/AssetDocument/"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetDocument")),">",">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"set"},"set"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"set"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,s.kt)("p",null,"Assign a new list of documents to the Asset by replacing the existing list of documents with the ones passed in the parameters"),(0,s.kt)("p",null,"This requires two transactions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this method is of type ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"set.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"args")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/API/Procedures/Types/SetAssetDocumentsParams/"},(0,s.kt)("inlineCode",{parentName:"a"},"SetAssetDocumentsParams")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"opts?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,s.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"))}d.isMDXComponent=!0}}]);