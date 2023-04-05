"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[49170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?s.createElement(k,i(i({ref:t},c),{},{components:n})):s.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=n(87462),a=(n(67294),n(3905));const r={id:"Issuance",title:"Class: Issuance",sidebar_label:"Issuance"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/Issuance/Issuance",id:"version-20.0.x/classes/API/Entities/Asset/Issuance/Issuance",title:"Class: Issuance",description:"api/entities/Asset/Issuance.Issuance",source:"@site/sdk-docs_versioned_docs/version-20.0.x/classes/API/Entities/Asset/Issuance/Issuance.md",sourceDirName:"classes/API/Entities/Asset/Issuance",slug:"/classes/API/Entities/Asset/Issuance/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Issuance/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"Issuance",title:"Class: Issuance",sidebar_label:"Issuance"},sidebar:"defaultSidebar",previous:{title:"Documents",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Documents/"},next:{title:"Metadata",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Metadata/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"issue",id:"issue",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Asset/Issuance/"},"api/entities/Asset/Issuance"),".Issuance"),(0,a.kt)("p",null,"Handles all Asset Issuance related functionality"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Issuance"))))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"issue"},"issue"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"issue"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"),(0,a.kt)("p",null,"Issue a certain amount of Asset tokens to the caller's default portfolio"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," this method is of type ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"issue.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.amount")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,a.kt)("td",{parentName:"tr",align:"left"},"amount of Asset tokens to be issued")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"opts?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,a.kt)("inlineCode",{parentName:"a"},"ProcedureOpts"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),", ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),">",">"))}d.isMDXComponent=!0}}]);