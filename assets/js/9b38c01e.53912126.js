"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[16902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"CreateCheckpointScheduleParams",title:"Interface: CreateCheckpointScheduleParams",sidebar_label:"CreateCheckpointScheduleParams"},o=void 0,s={unversionedId:"interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/CreateCheckpointScheduleParams",id:"version-21.0.x/interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/CreateCheckpointScheduleParams",title:"Interface: CreateCheckpointScheduleParams",description:"api/procedures/types.CreateCheckpointScheduleParams",source:"@site/sdk-docs_versioned_docs/version-21.0.x/interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/CreateCheckpointScheduleParams.md",sourceDirName:"interfaces/API/Procedures/Types/CreateCheckpointScheduleParams",slug:"/interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/CreateCheckpointScheduleParams/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"CreateCheckpointScheduleParams",title:"Interface: CreateCheckpointScheduleParams",sidebar_label:"CreateCheckpointScheduleParams"},sidebar:"defaultSidebar",previous:{title:"CreateAssetWithTickerParams",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/CreateAssetWithTickerParams/"},next:{title:"CreateGroupParams",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Procedures/Types/CreateGroupParams/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"period",id:"period",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"repetitions",id:"repetitions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".CreateCheckpointScheduleParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"period"},"period"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"period"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/CalendarPeriod/"},(0,a.kt)("inlineCode",{parentName:"a"},"CalendarPeriod"))),(0,a.kt)("p",null,"The cadence with which to make Checkpoints."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," A null value indicates to create only one Checkpoint, regardless of repetitions specified. This can be used to schedule the creation of a Checkpoint in the future"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L617"},"api/procedures/types.ts:617")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"repetitions"},"repetitions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"repetitions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"The number of snapshots to take. A null value indicates snapshots should be made indefinitely"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L621"},"api/procedures/types.ts:621")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"start"},"start"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"start"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"The date from which to begin creating snapshots. A null value indicates immediately"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/procedures/types.ts#L612"},"api/procedures/types.ts:612")))}d.isMDXComponent=!0}}]);