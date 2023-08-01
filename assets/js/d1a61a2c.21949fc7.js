"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[54378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"CorporateActions",title:"Class: CorporateActions",sidebar_label:"CorporateActions"},o=void 0,s={unversionedId:"classes/API/Entities/Asset/CorporateActions/CorporateActions",id:"version-20.0.x/classes/API/Entities/Asset/CorporateActions/CorporateActions",title:"Class: CorporateActions",description:"api/entities/Asset/CorporateActions.CorporateActions",source:"@site/sdk-docs_versioned_docs/version-20.0.x/classes/API/Entities/Asset/CorporateActions/CorporateActions.md",sourceDirName:"classes/API/Entities/Asset/CorporateActions",slug:"/classes/API/Entities/Asset/CorporateActions/",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/CorporateActions/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"CorporateActions",title:"Class: CorporateActions",sidebar_label:"CorporateActions"},sidebar:"defaultSidebar",previous:{title:"TrustedClaimIssuers",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/Compliance/TrustedClaimIssuers/"},next:{title:"Distributions",permalink:"/sdk-docs/20.0.x/classes/API/Entities/Asset/CorporateActions/Distributions/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"distributions",id:"distributions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"getAgents",id:"getagents",level:3},{value:"Returns",id:"returns",level:4},{value:"getDefaultConfig",id:"getdefaultconfig",level:3},{value:"Returns",id:"returns-1",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"setDefaultConfig",id:"setdefaultconfig",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/API/Entities/Asset/CorporateActions/"},"api/entities/Asset/CorporateActions"),".CorporateActions"),(0,a.kt)("p",null,"Handles all Asset Corporate Actions related functionality"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CorporateActions"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"distributions"},"distributions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"distributions"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Asset/CorporateActions/Distributions/"},(0,a.kt)("inlineCode",{parentName:"a"},"Distributions"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Asset/CorporateActions/index.ts#L26"},"api/entities/Asset/CorporateActions/index.ts:26")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getagents"},"getAgents"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAgents"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity")),"[]",">"),(0,a.kt)("p",null,"Retrieve a list of agent Identities"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity")),"[]",">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getdefaultconfig"},"getDefaultConfig"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getDefaultConfig"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/API/Entities/Asset/CorporateActions/Types/CorporateActionDefaultConfig/"},(0,a.kt)("inlineCode",{parentName:"a"},"CorporateActionDefaultConfig")),">"),(0,a.kt)("p",null,"Retrieve default config comprising of targets, global tax withholding percentage and per-Identity tax withholding percentages."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," This config is applied to every Corporate Action that is created until they are modified. Modifying the default config\ndoes not impact existing Corporate Actions.\nWhen creating a Corporate Action, values passed explicitly will override this default config"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/API/Entities/Asset/CorporateActions/Types/CorporateActionDefaultConfig/"},(0,a.kt)("inlineCode",{parentName:"a"},"CorporateActionDefaultConfig")),">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remove"},"remove"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"remove"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.kt)("p",null,"Remove a Corporate Action"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," this method is of type ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"remove.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/API/Procedures/Types/RemoveCorporateActionParams/"},(0,a.kt)("inlineCode",{parentName:"a"},"RemoveCorporateActionParams")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"opts?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,a.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setdefaultconfig"},"setDefaultConfig"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setDefaultConfig"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.kt)("p",null,"Assign default config values(targets, global tax withholding percentage and per-Identity tax withholding percentages)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," These config values are applied to every Corporate Action that is created until they are modified. Modifying these values\ndoes not impact existing Corporate Actions.\nWhen creating a Corporate Action, values passed explicitly will override these default config values"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," this method is of type ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"setDefaultConfig.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/modules/API/Procedures/Types/#modifycadefaultconfigparams"},(0,a.kt)("inlineCode",{parentName:"a"},"ModifyCaDefaultConfigParams")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"opts?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,a.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"))}c.isMDXComponent=!0}}]);