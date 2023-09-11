"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[94839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=a(n),f=o,v=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:o,s[1]=d;for(var a=2;a<i;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const i={id:"GroupedInvolvedInstructions",title:"Interface: GroupedInvolvedInstructions",sidebar_label:"GroupedInvolvedInstructions"},s=void 0,d={unversionedId:"interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions",id:"version-22.0.x/interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions",title:"Interface: GroupedInvolvedInstructions",description:"types.GroupedInvolvedInstructions",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/Types/GroupedInvolvedInstructions/GroupedInvolvedInstructions.md",sourceDirName:"interfaces/Types/GroupedInvolvedInstructions",slug:"/interfaces/Types/GroupedInvolvedInstructions/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/GroupedInvolvedInstructions/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"GroupedInvolvedInstructions",title:"Interface: GroupedInvolvedInstructions",sidebar_label:"GroupedInvolvedInstructions"},sidebar:"defaultSidebar",previous:{title:"GroupedInstructions",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/GroupedInstructions/"},next:{title:"HistoricAgentOperation",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/HistoricAgentOperation/"}},p={},a=[{value:"Properties",id:"properties",level:2},{value:"custodied",id:"custodied",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"owned",id:"owned",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:a};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".GroupedInvolvedInstructions"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"custodied"},"custodied"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"custodied"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/GroupedInstructions/"},(0,o.kt)("inlineCode",{parentName:"a"},"GroupedInstructions"))),(0,o.kt)("p",null,"Instructions where the Identity is the custodian of the leg portfolios"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1567"},"types/index.ts:1567")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"owned"},"owned"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"owned"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/GroupedInstructions/"},(0,o.kt)("inlineCode",{parentName:"a"},"GroupedInstructions")),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"affirmed"'),">"),(0,o.kt)("p",null,"Instructions where the Identity is the owner of the leg portfolios"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1571"},"types/index.ts:1571")))}c.isMDXComponent=!0}}]);