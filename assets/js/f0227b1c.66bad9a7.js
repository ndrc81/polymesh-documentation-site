"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[54717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(f,c(c({ref:t},p),{},{components:n})):i.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={id:"ScheduleDetails",title:"Interface: ScheduleDetails",sidebar_label:"ScheduleDetails"},c=void 0,a={unversionedId:"interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails",id:"version-19.1.x/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails",title:"Interface: ScheduleDetails",description:"api/entities/CheckpointSchedule/types.ScheduleDetails",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails.md",sourceDirName:"interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails",slug:"/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"ScheduleDetails",title:"Interface: ScheduleDetails",sidebar_label:"ScheduleDetails"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Entities/CheckpointSchedule/Params/"},next:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Entities/CheckpointSchedule/UniqueIdentifiers/"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"nextCheckpointDate",id:"nextcheckpointdate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"remainingCheckpoints",id:"remainingcheckpoints",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/API/Entities/CheckpointSchedule/Types/"},"api/entities/CheckpointSchedule/types"),".ScheduleDetails"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"nextcheckpointdate"},"nextCheckpointDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nextCheckpointDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/CheckpointSchedule/types.ts#L7"},"api/entities/CheckpointSchedule/types.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remainingcheckpoints"},"remainingCheckpoints"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"remainingCheckpoints"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/CheckpointSchedule/types.ts#L6"},"api/entities/CheckpointSchedule/types.ts:6")))}d.isMDXComponent=!0}}]);