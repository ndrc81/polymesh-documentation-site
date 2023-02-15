"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[26556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={id:"Types",title:"Module: CheckpointSchedule Types",sidebar_label:"Types"},s=void 0,a={unversionedId:"modules/API/Entities/CheckpointSchedule/Types/Types",id:"version-19.0.0/modules/API/Entities/CheckpointSchedule/Types/Types",title:"Module: CheckpointSchedule Types",description:"Interfaces",source:"@site/sdk-docs_versioned_docs/version-19.0.0/modules/API/Entities/CheckpointSchedule/Types/Types.md",sourceDirName:"modules/API/Entities/CheckpointSchedule/Types",slug:"/modules/API/Entities/CheckpointSchedule/Types/",permalink:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/CheckpointSchedule/Types/",draft:!1,tags:[],version:"19.0.0",frontMatter:{id:"Types",title:"Module: CheckpointSchedule Types",sidebar_label:"Types"},sidebar:"defaultSidebar",previous:{title:"CheckpointSchedule",permalink:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/CheckpointSchedule/"},next:{title:"Authorizations",permalink:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Common/Namespaces/Authorizations/"}},c={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"CheckpointScheduleParams",id:"checkpointscheduleparams",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/"},"ScheduleDetails"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"checkpointscheduleparams"},"CheckpointScheduleParams"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"CheckpointScheduleParams"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/UniqueIdentifiers/"},(0,r.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers"))," & ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/Params/"},(0,r.kt)("inlineCode",{parentName:"a"},"Params")),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"ticker"'),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/entities/CheckpointSchedule/types.ts#L10"},"api/entities/CheckpointSchedule/types.ts:10")))}d.isMDXComponent=!0}}]);