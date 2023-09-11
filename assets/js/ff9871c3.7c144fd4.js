"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[70882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||s;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},79340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={id:"Permissions",title:"Class: Permissions",sidebar_label:"Permissions"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/Permissions/Permissions",id:"version-22.0.x/classes/API/Entities/Asset/Permissions/Permissions",title:"Class: Permissions",description:"api/entities/Asset/Permissions.Permissions",source:"@site/sdk-docs_versioned_docs/version-22.0.x/classes/API/Entities/Asset/Permissions/Permissions.md",sourceDirName:"classes/API/Entities/Asset/Permissions",slug:"/classes/API/Entities/Asset/Permissions/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Permissions/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"Permissions",title:"Class: Permissions",sidebar_label:"Permissions"},sidebar:"defaultSidebar",previous:{title:"Offerings",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Offerings/"},next:{title:"Settlements",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Settlements/"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"createGroup",id:"creategroup",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getAgents",id:"getagents",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getGroup",id:"getgroup",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getGroups",id:"getgroups",level:3},{value:"Returns",id:"returns-4",level:4},{value:"inviteAgent",id:"inviteagent",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"removeAgent",id:"removeagent",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Asset/Permissions/"},"api/entities/Asset/Permissions"),".Permissions"),(0,r.kt)("p",null,"Handles all Asset Permissions related functionality"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Permissions"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"creategroup"},"createGroup"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createGroup"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),">",">"),(0,r.kt)("p",null,"Create a Permission Group for this Asset. Identities can be assigned to Permission Groups as agents. Agents assigned to a Permission Group have said group's permissions over the Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"createGroup.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateGroupParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateGroupParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getagents"},"getAgents"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAgents"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AgentWithGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentWithGroup")),"[]",">"),(0,r.kt)("p",null,"Retrieve a list of agents (Identities which have permissions over the Asset) and\ntheir respective Permission Groups"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AgentWithGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"AgentWithGroup")),"[]",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getgroup"},"getGroup"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getGroup"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),">"),(0,r.kt)("p",null,"Retrieve a single Permission Group by its ID (or type). Passing an ID will fetch a Custom Permission Group,\nwhile passing a type will fetch a Known Permission Group"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null," if there is no Permission Group with the passed ID"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),">"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getGroup"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup")),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/enums/Types/PermissionGroupType/"},(0,r.kt)("inlineCode",{parentName:"a"},"PermissionGroupType")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getgroups"},"getGroups"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getGroups"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PermissionGroups/"},(0,r.kt)("inlineCode",{parentName:"a"},"PermissionGroups")),">"),(0,r.kt)("p",null,"Retrieve all Permission Groups of this Asset"),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PermissionGroups/"},(0,r.kt)("inlineCode",{parentName:"a"},"PermissionGroups")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inviteagent"},"inviteAgent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"inviteAgent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">",">"),(0,r.kt)("p",null,"Invite an Identity to be an agent with permissions over this Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this will create an ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},"Authorization Request")," which has to be accepted by the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," Identity.\nAn ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"},"Account")," or ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},"Identity")," can fetch its pending Authorization Requests by calling ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Common/Namespaces/Authorizations/#getreceived"},"authorizations.getReceived"),".\nAlso, an Account or Identity can directly fetch the details of an Authorization Request by calling ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Common/Namespaces/Authorizations/#getone"},"authorizations.getOne")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"inviteAgent.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/InviteExternalAgentParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"InviteExternalAgentParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removeagent"},"removeAgent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeAgent"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("p",null,"Revoke an agent's permissions over this Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"removeAgent.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RemoveExternalAgentParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"RemoveExternalAgentParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"))}d.isMDXComponent=!0}}]);