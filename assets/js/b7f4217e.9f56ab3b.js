"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[59889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"Types",title:"Module: CheckpointSchedule Types",sidebar_label:"Types"},s=void 0,a={unversionedId:"modules/API/Entities/CheckpointSchedule/Types/Types",id:"version-20.0.x/modules/API/Entities/CheckpointSchedule/Types/Types",title:"Module: CheckpointSchedule Types",description:"Interfaces",source:"@site/sdk-docs_versioned_docs/version-20.0.x/modules/API/Entities/CheckpointSchedule/Types/Types.md",sourceDirName:"modules/API/Entities/CheckpointSchedule/Types",slug:"/modules/API/Entities/CheckpointSchedule/Types/",permalink:"/sdk-docs/20.0.x/modules/API/Entities/CheckpointSchedule/Types/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"Types",title:"Module: CheckpointSchedule Types",sidebar_label:"Types"},sidebar:"defaultSidebar",previous:{title:"CheckpointSchedule",permalink:"/sdk-docs/20.0.x/modules/API/Entities/CheckpointSchedule/"},next:{title:"Authorizations",permalink:"/sdk-docs/20.0.x/modules/API/Entities/Common/Namespaces/Authorizations/"}},c={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"CheckpointScheduleParams",id:"checkpointscheduleparams",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk-docs/20.0.x/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/"},"ScheduleDetails"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"checkpointscheduleparams"},"CheckpointScheduleParams"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"CheckpointScheduleParams"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/API/Entities/CheckpointSchedule/UniqueIdentifiers/"},(0,i.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers"))," & ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/interfaces/API/Entities/CheckpointSchedule/Params/"},(0,i.kt)("inlineCode",{parentName:"a"},"Params")),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"ticker"'),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/CheckpointSchedule/types.ts#L10"},"api/entities/CheckpointSchedule/types.ts:10")))}d.isMDXComponent=!0}}]);