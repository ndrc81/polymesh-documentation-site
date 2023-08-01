"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[63214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=i,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={id:"PercentageTransferRestriction",title:"Interface: PercentageTransferRestriction",sidebar_label:"PercentageTransferRestriction"},s=void 0,o={unversionedId:"interfaces/Types/PercentageTransferRestriction/PercentageTransferRestriction",id:"version-20.0.x/interfaces/Types/PercentageTransferRestriction/PercentageTransferRestriction",title:"Interface: PercentageTransferRestriction",description:"types.PercentageTransferRestriction",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/Types/PercentageTransferRestriction/PercentageTransferRestriction.md",sourceDirName:"interfaces/Types/PercentageTransferRestriction",slug:"/interfaces/Types/PercentageTransferRestriction/",permalink:"/sdk-docs/20.0.x/interfaces/Types/PercentageTransferRestriction/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"PercentageTransferRestriction",title:"Interface: PercentageTransferRestriction",sidebar_label:"PercentageTransferRestriction"},sidebar:"defaultSidebar",previous:{title:"PayingAccountFees",permalink:"/sdk-docs/20.0.x/interfaces/Types/PayingAccountFees/"},next:{title:"PermissionGroups",permalink:"/sdk-docs/20.0.x/interfaces/Types/PermissionGroups/"}},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"exemptedIds",id:"exemptedids",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"percentage",id:"percentage",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/"},"types"),".PercentageTransferRestriction"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TransferRestrictionBase")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"PercentageTransferRestriction"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"exemptedids"},"exemptedIds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"exemptedIds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"array of Scope/Identity IDs that are exempted from the Restriction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis"},"here")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity"},"here")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"TransferRestrictionBase.exemptedIds"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1274"},"types/index.ts:1274")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"percentage"},"percentage"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"percentage"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"maximum percentage (0-100) of the total supply of the Asset that can be held by a single investor at once"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1285"},"types/index.ts:1285")))}d.isMDXComponent=!0}}]);