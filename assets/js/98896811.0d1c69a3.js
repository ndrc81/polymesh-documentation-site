"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[35485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(o,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"ResultSet",title:"Interface: ResultSet<T>",sidebar_label:"ResultSet"},l=void 0,s={unversionedId:"interfaces/Types/ResultSet/ResultSet",id:"version-19.1.x/interfaces/Types/ResultSet/ResultSet",title:"Interface: ResultSet<T>",description:"types.ResultSet",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/Types/ResultSet/ResultSet.md",sourceDirName:"interfaces/Types/ResultSet",slug:"/interfaces/Types/ResultSet/",permalink:"/sdk-docs/19.1.x/interfaces/Types/ResultSet/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"ResultSet",title:"Interface: ResultSet<T>",sidebar_label:"ResultSet"},sidebar:"defaultSidebar",previous:{title:"RequirementCompliance",permalink:"/sdk-docs/19.1.x/interfaces/Types/RequirementCompliance/"},next:{title:"ScheduleWithDetails",permalink:"/sdk-docs/19.1.x/interfaces/Types/ScheduleWithDetails/"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"count",id:"count",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"next",id:"next",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/"},"types"),".ResultSet"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"count"},"count"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"count"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L727"},"types/index.ts:727")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L725"},"types/index.ts:725")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"next"},"next"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"next"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/#nextkey"},(0,a.kt)("inlineCode",{parentName:"a"},"NextKey"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L726"},"types/index.ts:726")))}c.isMDXComponent=!0}}]);