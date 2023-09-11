"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[30884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"Settlements",title:"Class: Settlements",sidebar_label:"Settlements"},s=void 0,o={unversionedId:"classes/API/Client/Settlements/Settlements",id:"version-22.0.x/classes/API/Client/Settlements/Settlements",title:"Class: Settlements",description:"api/client/Settlements.Settlements",source:"@site/sdk-docs_versioned_docs/version-22.0.x/classes/API/Client/Settlements/Settlements.md",sourceDirName:"classes/API/Client/Settlements",slug:"/classes/API/Client/Settlements/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Client/Settlements/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"Settlements",title:"Class: Settlements",sidebar_label:"Settlements"},sidebar:"defaultSidebar",previous:{title:"Polymesh",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Client/Polymesh/"},next:{title:"Account",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"}},l={},p=[{value:"Methods",id:"methods",level:2},{value:"addInstruction",id:"addinstruction",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"affirmInstruction",id:"affirminstruction",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"createVenue",id:"createvenue",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getInstruction",id:"getinstruction",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getVenue",id:"getvenue",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Client/Settlements/"},"api/client/Settlements"),".Settlements"),(0,r.kt)("p",null,"Handles all Settlement related functionality"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"addinstruction"},"addInstruction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addInstruction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),"[], ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),">",">"),(0,r.kt)("p",null,"Create an Instruction to exchange Assets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"addInstruction.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#addinstructionwithvenueidparams"},(0,r.kt)("inlineCode",{parentName:"a"},"AddInstructionWithVenueIdParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),"[], ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"affirminstruction"},"affirmInstruction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"affirmInstruction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),">",">"),(0,r.kt)("p",null,"Affirm an Instruction (authorize)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"affirmInstruction.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/InstructionIdParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"InstructionIdParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createvenue"},"createVenue"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createVenue"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/"},(0,r.kt)("inlineCode",{parentName:"a"},"Venue")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/"},(0,r.kt)("inlineCode",{parentName:"a"},"Venue")),">",">"),(0,r.kt)("p",null,"Create a Venue under the ownership of the signing Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"createVenue.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateVenueParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateVenueParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/"},(0,r.kt)("inlineCode",{parentName:"a"},"Venue")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/"},(0,r.kt)("inlineCode",{parentName:"a"},"Venue")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getinstruction"},"getInstruction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getInstruction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),">"),(0,r.kt)("p",null,"Retrieve an Instruction by its ID"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"identifier number of the Instruction")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,r.kt)("inlineCode",{parentName:"a"},"Instruction")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getvenue"},"getVenue"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getVenue"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/"},(0,r.kt)("inlineCode",{parentName:"a"},"Venue")),">"),(0,r.kt)("p",null,"Retrieve a Venue by its ID"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"identifier number of the Venue")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/"},(0,r.kt)("inlineCode",{parentName:"a"},"Venue")),">"))}m.isMDXComponent=!0}}]);