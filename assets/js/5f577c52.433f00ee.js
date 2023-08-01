"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[72599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),f=i,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={id:"ConditionBase",title:"Interface: ConditionBase",sidebar_label:"ConditionBase"},a=void 0,s={unversionedId:"interfaces/Types/ConditionBase/ConditionBase",id:"version-20.1.x/interfaces/Types/ConditionBase/ConditionBase",title:"Interface: ConditionBase",description:"types.ConditionBase",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/Types/ConditionBase/ConditionBase.md",sourceDirName:"interfaces/Types/ConditionBase",slug:"/interfaces/Types/ConditionBase/",permalink:"/sdk-docs/interfaces/Types/ConditionBase/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"ConditionBase",title:"Interface: ConditionBase",sidebar_label:"ConditionBase"},sidebar:"defaultSidebar",previous:{title:"ComplianceRequirements",permalink:"/sdk-docs/interfaces/Types/ComplianceRequirements/"},next:{title:"ConditionCompliance",permalink:"/sdk-docs/interfaces/Types/ConditionCompliance/"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"trustedClaimIssuers",id:"trustedclaimissuers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/"},"types"),".ConditionBase"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/ConditionTarget/"},(0,i.kt)("inlineCode",{parentName:"a"},"ConditionTarget"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L417"},"types/index.ts:417")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"trustedclaimissuers"},"trustedClaimIssuers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"trustedClaimIssuers"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/TrustedClaimIssuer/"},(0,i.kt)("inlineCode",{parentName:"a"},"TrustedClaimIssuer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"false"),">","[]"),(0,i.kt)("p",null,"if undefined, the default trusted claim issuers for the Asset are used"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L421"},"types/index.ts:421")))}c.isMDXComponent=!0}}]);