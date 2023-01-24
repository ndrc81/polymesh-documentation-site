"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[78167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},s=void 0,o={unversionedId:"Classes/API/Entities/Asset/Checkpoints/Schedules/Schedules",id:"Classes/API/Entities/Asset/Checkpoints/Schedules/Schedules",title:"Schedules",description:"api/entities/Asset/Checkpoints/Schedules.Schedules",source:"@site/sdk-docs/Classes/API/Entities/Asset/Checkpoints/Schedules/Schedules.md",sourceDirName:"Classes/API/Entities/Asset/Checkpoints/Schedules",slug:"/Classes/API/Entities/Asset/Checkpoints/Schedules/",permalink:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/Asset/Checkpoints/Schedules/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Checkpoints",permalink:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/Asset/Checkpoints/"},next:{title:"Compliance",permalink:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/Asset/Compliance/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"complexityOf",id:"complexityof",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"currentComplexity",id:"currentcomplexity",level:3},{value:"Returns",id:"returns-2",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getOne",id:"getone",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"maxComplexity",id:"maxcomplexity",level:3},{value:"Returns",id:"returns-5",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/API/Entities/Asset/Checkpoints/Schedules"},"api/entities/Asset/Checkpoints/Schedules"),".Schedules"),(0,r.kt)("p",null,"Handles all Asset Checkpoint Schedules related functionality"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Schedules"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"complexityof"},"complexityOf"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"complexityOf"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"period"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"Calculate an abstract measure of the complexity of a given Calendar Period"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"period")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/CalendarPeriod"},(0,r.kt)("inlineCode",{parentName:"a"},"CalendarPeriod")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/CheckpointSchedule/"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckpointSchedule")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/CheckpointSchedule/"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckpointSchedule")),">",">"),(0,r.kt)("p",null,'Create a schedule for Checkpoint creation (e.g. "Create a checkpoint every week for 5 weeks, starting next tuesday")'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null,"due to chain limitations, schedules are advanced and (if appropriate) executed whenever the Asset is\nredeemed, issued or transferred between portfolios. This means that on an Asset without much movement, there may be disparities between intended Checkpoint creation dates\nand the actual date when they are created. This, however, has no effect on the Checkpoint's accuracy regarding to balances"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null,"this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ProcedureMethod"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ProcedureMethod#checkauthorization"},"create.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/CreateCheckpointScheduleParams"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateCheckpointScheduleParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ProcedureOpts"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/CheckpointSchedule/"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckpointSchedule")),", ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/CheckpointSchedule/"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckpointSchedule")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"currentcomplexity"},"currentComplexity"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"currentComplexity"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Calculate the sum of the complexity of all current Checkpoint Schedules for this Asset.\nThe number cannot exceed the Asset's maximum complexity (obtained via ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/Asset/Checkpoints/Schedules/#maxcomplexity"},"maxComplexity"),")"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ScheduleWithDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"ScheduleWithDetails")),"[]",">"),(0,r.kt)("p",null,"Retrieve all active Checkpoint Schedules"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ScheduleWithDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"ScheduleWithDetails")),"[]",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getone"},"getOne"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getOne"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ScheduleWithDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"ScheduleWithDetails")),">"),(0,r.kt)("p",null,"Retrieve a single Checkpoint Schedule associated to this Asset by its ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"if there is no Schedule with the passed ID"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ScheduleWithDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"ScheduleWithDetails")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"maxcomplexity"},"maxComplexity"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"maxComplexity"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Retrieve the maximum allowed Schedule complexity for this Asset"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove"},"remove"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"remove"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("p",null,"Remove the supplied Checkpoint Schedule for a given Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null,"this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ProcedureMethod"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ProcedureMethod#checkauthorization"},"remove.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/RemoveCheckpointScheduleParams"},(0,r.kt)("inlineCode",{parentName:"a"},"RemoveCheckpointScheduleParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ProcedureOpts"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"))}m.isMDXComponent=!0}}]);