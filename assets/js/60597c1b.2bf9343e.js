"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[34731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(n),f=i,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"GroupedInstructions",title:"Interface: GroupedInstructions",sidebar_label:"GroupedInstructions"},s=void 0,a={unversionedId:"interfaces/Types/GroupedInstructions/GroupedInstructions",id:"interfaces/Types/GroupedInstructions/GroupedInstructions",title:"Interface: GroupedInstructions",description:"types.GroupedInstructions",source:"@site/sdk-docs/interfaces/Types/GroupedInstructions/GroupedInstructions.md",sourceDirName:"interfaces/Types/GroupedInstructions",slug:"/interfaces/Types/GroupedInstructions/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/GroupedInstructions/",draft:!1,tags:[],version:"current",frontMatter:{id:"GroupedInstructions",title:"Interface: GroupedInstructions",sidebar_label:"GroupedInstructions"},sidebar:"defaultSidebar",previous:{title:"Fees",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/Fees/"},next:{title:"HistoricAgentOperation",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/HistoricAgentOperation/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"affirmed",id:"affirmed",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"failed",id:"failed",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"pending",id:"pending",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".GroupedInstructions"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"affirmed"},"affirmed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"affirmed"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,i.kt)("inlineCode",{parentName:"a"},"Instruction")),"[]"),(0,i.kt)("p",null,"Instructions that have already been affirmed by the Identity"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1516"},"types/index.ts:1516")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"failed"},"failed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"failed"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,i.kt)("inlineCode",{parentName:"a"},"Instruction")),"[]"),(0,i.kt)("p",null,"Instructions that failed in their execution (can be rescheduled).\nThis group supersedes the other three, so for example, a failed Instruction\nmight also belong in the ",(0,i.kt)("inlineCode",{parentName:"p"},"affirmed")," group, but it will only be included in this one"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1526"},"types/index.ts:1526")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pending"},"pending"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pending"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/"},(0,i.kt)("inlineCode",{parentName:"a"},"Instruction")),"[]"),(0,i.kt)("p",null,"Instructions that still need to be affirmed/rejected by the Identity"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1520"},"types/index.ts:1520")))}c.isMDXComponent=!0}}]);