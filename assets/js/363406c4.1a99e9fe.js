"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[81181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"HistoricAgentOperation",title:"Interface: HistoricAgentOperation",sidebar_label:"HistoricAgentOperation"},s=void 0,a={unversionedId:"interfaces/Types/HistoricAgentOperation/HistoricAgentOperation",id:"version-19.0.0/interfaces/Types/HistoricAgentOperation/HistoricAgentOperation",title:"Interface: HistoricAgentOperation",description:"types.HistoricAgentOperation",source:"@site/sdk-docs_versioned_docs/version-19.0.0/interfaces/Types/HistoricAgentOperation/HistoricAgentOperation.md",sourceDirName:"interfaces/Types/HistoricAgentOperation",slug:"/interfaces/Types/HistoricAgentOperation/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/HistoricAgentOperation/",draft:!1,tags:[],version:"19.0.0",frontMatter:{id:"HistoricAgentOperation",title:"Interface: HistoricAgentOperation",sidebar_label:"HistoricAgentOperation"},sidebar:"defaultSidebar",previous:{title:"GroupedInstructions",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/GroupedInstructions/"},next:{title:"IdentityCondition",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/IdentityCondition/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"history",id:"history",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".HistoricAgentOperation"),(0,i.kt)("p",null,"Events triggered by transactions performed by an Agent Identity, related to the Token's configuration\nFor example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers"),(0,i.kt)("p",null,"Token transfers (settlements or movements between Portfolios) do not count as Operations"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"history"},"history"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"history"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/EventIdentifier/"},(0,i.kt)("inlineCode",{parentName:"a"},"EventIdentifier")),"[]"),(0,i.kt)("p",null,"list of Token Operation Events that were triggered by the Agent Identity"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L1548"},"types/index.ts:1548")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"identity"},"identity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"identity"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("p",null,"Agent Identity that performed the operations"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L1544"},"types/index.ts:1544")))}d.isMDXComponent=!0}}]);