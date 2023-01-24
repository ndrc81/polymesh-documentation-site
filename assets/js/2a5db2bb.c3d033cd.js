"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[54937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={},o=void 0,l={unversionedId:"Interfaces/API/Entities/CheckpointSchedule/Params",id:"Interfaces/API/Entities/CheckpointSchedule/Params",title:"Params",description:"api/entities/CheckpointSchedule.Params",source:"@site/sdk-docs/Interfaces/API/Entities/CheckpointSchedule/Params.md",sourceDirName:"Interfaces/API/Entities/CheckpointSchedule",slug:"/Interfaces/API/Entities/CheckpointSchedule/Params",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Entities/CheckpointSchedule/Params",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"HumanReadable",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Entities/CheckpointSchedule/HumanReadable"},next:{title:"ScheduleDetails",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"nextCheckpointDate",id:"nextcheckpointdate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"period",id:"period",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"remaining",id:"remaining",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/API/Entities/CheckpointSchedule"},"api/entities/CheckpointSchedule"),".Params"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"nextcheckpointdate"},"nextCheckpointDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nextCheckpointDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/CheckpointSchedule/index.ts#L38"},"api/entities/CheckpointSchedule/index.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"period"},"period"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"period"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/CalendarPeriod"},(0,r.kt)("inlineCode",{parentName:"a"},"CalendarPeriod"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/CheckpointSchedule/index.ts#L35"},"api/entities/CheckpointSchedule/index.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remaining"},"remaining"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"remaining"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/CheckpointSchedule/index.ts#L37"},"api/entities/CheckpointSchedule/index.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"start"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/CheckpointSchedule/index.ts#L36"},"api/entities/CheckpointSchedule/index.ts:36")))}d.isMDXComponent=!0}}]);