"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,u=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"Settlements",title:"Class: Settlements",sidebar_label:"Settlements"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/Settlements/Settlements",id:"version-21.0.x/classes/API/Entities/Asset/Settlements/Settlements",title:"Class: Settlements",description:"api/entities/Asset/Settlements.Settlements",source:"@site/sdk-docs_versioned_docs/version-21.0.x/classes/API/Entities/Asset/Settlements/Settlements.md",sourceDirName:"classes/API/Entities/Asset/Settlements",slug:"/classes/API/Entities/Asset/Settlements/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Asset/Settlements/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"Settlements",title:"Class: Settlements",sidebar_label:"Settlements"},sidebar:"defaultSidebar",previous:{title:"Permissions",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Asset/Permissions/"},next:{title:"TransferRestrictions",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Asset/TransferRestrictions/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"canTransfer",id:"cantransfer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/API/Entities/Asset/Settlements/"},"api/entities/Asset/Settlements"),".Settlements"),(0,a.kt)("p",null,"Handles all Asset Settlements related functionality"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Settlements"))))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"cantransfer"},"canTransfer"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"canTransfer"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/"},(0,a.kt)("inlineCode",{parentName:"a"},"TransferBreakdown")),">"),(0,a.kt)("p",null,"Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of\nthe transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance\nfailures"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be\ntransferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,\nthey would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been\ntransferred yet"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.amount")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,a.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to transfer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.from?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#portfoliolike"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"sender Portfolio (optional, defaults to the signing Identity's Default Portfolio)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args.to")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/#portfoliolike"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"receiver Portfolio")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/"},(0,a.kt)("inlineCode",{parentName:"a"},"TransferBreakdown")),">"))}d.isMDXComponent=!0}}]);