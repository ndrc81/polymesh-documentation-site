"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,y=m["".concat(d,".").concat(u)]||m[u]||k[u]||i;return n?a.createElement(y,l(l({ref:t},o),{},{components:n})):a.createElement(y,l({ref:t},o))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"Utils",title:"Module: utils",sidebar_label:"Utils"},l=void 0,p={unversionedId:"modules/Types/Utils/Utils",id:"version-21.0.x/modules/Types/Utils/Utils",title:"Module: utils",description:"Type Aliases",source:"@site/sdk-docs_versioned_docs/version-21.0.x/modules/Types/Utils/Utils.md",sourceDirName:"modules/Types/Utils",slug:"/modules/Types/Utils/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/Utils/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"Utils",title:"Module: utils",sidebar_label:"Utils"},sidebar:"defaultSidebar",previous:{title:"Types",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/"},next:{title:"AccountIdentityRelation",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/API/Entities/Account/Types/AccountIdentityRelation/"}},d={},s=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"ArgsType",id:"argstype",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Ensured",id:"ensured",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"EnsuredV2",id:"ensuredv2",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"HumanReadableType",id:"humanreadabletype",level:3},{value:"Type parameters",id:"type-parameters-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Modify",id:"modify",level:3},{value:"Type parameters",id:"type-parameters-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"PaginatedQueryArgs",id:"paginatedqueryargs",level:3},{value:"Type parameters",id:"type-parameters-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"QueryArgs",id:"queryargs",level:3},{value:"Type parameters",id:"type-parameters-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"WithRequired",id:"withrequired",level:3},{value:"Type parameters",id:"type-parameters-7",level:4},{value:"Defined in",id:"defined-in-7",level:4}],o={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"argstype"},"ArgsType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"ArgsType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends (...",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": infer A) => ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")," ? ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"never")),(0,r.kt)("p",null,"Less strict version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Parameters<T>")),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L29"},"types/utils/index.ts:29")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ensured"},"Ensured"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Ensured"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",">"),(0,r.kt)("p",null,"Pick a single property from T and ensure it is defined"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L87"},"types/utils/index.ts:87")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ensuredv2"},"EnsuredV2"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"EnsuredV2"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Required"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Pick"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",">"," & { ","[SubKey in K]",": NonNullable<T","[SubKey]",">"," }"),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L89"},"types/utils/index.ts:89")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"humanreadabletype"},"HumanReadableType"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"HumanReadableType"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),", infer H",">"," ? ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/Utils/#humanreadabletype"},(0,r.kt)("inlineCode",{parentName:"a"},"HumanReadableType")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"H"),">"," : ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ? ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," ? ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," ? { ","[K in keyof T]",": T","[K]"," extends Entity<unknown, infer E",">"," ? HumanReadableType<E",">"," : HumanReadableType<T","[K]",">"," } : ",(0,r.kt)("inlineCode",{parentName:"p"},"T")),(0,r.kt)("p",null,"Recursively traverse a type and transform its Entity properties into their\nhuman readable version (as if ",(0,r.kt)("inlineCode",{parentName:"p"},".toHuman")," had been called on all of them)"),(0,r.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L35"},"types/utils/index.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"modify"},"Modify"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"Modify"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", keyof ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">"," & ",(0,r.kt)("inlineCode",{parentName:"p"},"R")),(0,r.kt)("p",null,"Override T with the properties of R"),(0,r.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"R"))))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L76"},"types/utils/index.ts:76")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"paginatedqueryargs"},"PaginatedQueryArgs"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PaginatedQueryArgs"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"size?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"start?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"  }"),(0,r.kt)("h4",{id:"type-parameters-5"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L93"},"types/utils/index.ts:93")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queryargs"},"QueryArgs"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"QueryArgs"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",": { ","[P in K]","?: T","[P]"," }"),(0,r.kt)("h4",{id:"type-parameters-6"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L98"},"types/utils/index.ts:98")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"withrequired"},"WithRequired"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"WithRequired"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"K"),">",": ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," & { ","[P in K]","-?: T","[P]"," }"),(0,r.kt)("p",null,"Ensure a specific property of T is defined"),(0,r.kt)("h4",{id:"type-parameters-7"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"K")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/utils/index.ts#L82"},"types/utils/index.ts:82")))}m.isMDXComponent=!0}}]);