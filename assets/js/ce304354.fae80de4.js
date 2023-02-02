"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[69336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={id:"ComplianceRequirements",title:"Interface: ComplianceRequirements",sidebar_label:"ComplianceRequirements"},a=void 0,o={unversionedId:"interfaces/Types/ComplianceRequirements/ComplianceRequirements",id:"interfaces/Types/ComplianceRequirements/ComplianceRequirements",title:"Interface: ComplianceRequirements",description:"types.ComplianceRequirements",source:"@site/sdk-docs/interfaces/Types/ComplianceRequirements/ComplianceRequirements.md",sourceDirName:"interfaces/Types/ComplianceRequirements",slug:"/interfaces/Types/ComplianceRequirements/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ComplianceRequirements/",draft:!1,tags:[],version:"current",frontMatter:{id:"ComplianceRequirements",title:"Interface: ComplianceRequirements",sidebar_label:"ComplianceRequirements"},sidebar:"defaultSidebar",previous:{title:"Compliance",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/Compliance/"},next:{title:"ConditionBase",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ConditionBase/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"defaultTrustedClaimIssuers",id:"defaulttrustedclaimissuers",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"requirements",id:"requirements",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".ComplianceRequirements"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"defaulttrustedclaimissuers"},"defaultTrustedClaimIssuers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"defaultTrustedClaimIssuers"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/TrustedClaimIssuer/"},(0,i.kt)("inlineCode",{parentName:"a"},"TrustedClaimIssuer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"false"),">","[]"),(0,i.kt)("p",null,"used for conditions where no trusted claim issuers were specified"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L484"},"types/index.ts:484")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requirements"},"requirements"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"requirements"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/Requirement/"},(0,i.kt)("inlineCode",{parentName:"a"},"Requirement")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L480"},"types/index.ts:480")))}u.isMDXComponent=!0}}]);