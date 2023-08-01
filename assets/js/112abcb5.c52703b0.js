"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[85328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||s;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<s;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const s={id:"Compliance",title:"Class: Compliance",sidebar_label:"Compliance"},a=void 0,l={unversionedId:"classes/API/Entities/Asset/Compliance/Compliance",id:"version-20.1.x/classes/API/Entities/Asset/Compliance/Compliance",title:"Class: Compliance",description:"api/entities/Asset/Compliance.Compliance",source:"@site/sdk-docs_versioned_docs/version-20.1.x/classes/API/Entities/Asset/Compliance/Compliance.md",sourceDirName:"classes/API/Entities/Asset/Compliance",slug:"/classes/API/Entities/Asset/Compliance/",permalink:"/sdk-docs/classes/API/Entities/Asset/Compliance/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"Compliance",title:"Class: Compliance",sidebar_label:"Compliance"},sidebar:"defaultSidebar",previous:{title:"Schedules",permalink:"/sdk-docs/classes/API/Entities/Asset/Checkpoints/Schedules/"},next:{title:"Requirements",permalink:"/sdk-docs/classes/API/Entities/Asset/Compliance/Requirements/"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"requirements",id:"requirements",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"trustedClaimIssuers",id:"trustedclaimissuers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/Asset/Compliance/"},"api/entities/Asset/Compliance"),".Compliance"),(0,r.kt)("p",null,"Handles all Asset Compliance related functionality"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Compliance"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"requirements"},"requirements"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"requirements"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/Compliance/Requirements/"},(0,r.kt)("inlineCode",{parentName:"a"},"Requirements"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Asset/Compliance/index.ts#L11"},"api/entities/Asset/Compliance/index.ts:11")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trustedclaimissuers"},"trustedClaimIssuers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"trustedClaimIssuers"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/Compliance/TrustedClaimIssuers/"},(0,r.kt)("inlineCode",{parentName:"a"},"TrustedClaimIssuers"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Asset/Compliance/index.ts#L10"},"api/entities/Asset/Compliance/index.ts:10")))}m.isMDXComponent=!0}}]);