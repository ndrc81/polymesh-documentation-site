"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[6635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const i={},o=void 0,a={unversionedId:"Interfaces/Types/ComplianceRequirements",id:"Interfaces/Types/ComplianceRequirements",title:"ComplianceRequirements",description:"types.ComplianceRequirements",source:"@site/sdk-docs/Interfaces/Types/ComplianceRequirements.md",sourceDirName:"Interfaces/Types",slug:"/Interfaces/Types/ComplianceRequirements",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ComplianceRequirements",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Compliance",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/Compliance"},next:{title:"ConditionBase",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/ConditionBase"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"defaultTrustedClaimIssuers",id:"defaulttrustedclaimissuers",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"requirements",id:"requirements",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/"},"types"),".ComplianceRequirements"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"defaulttrustedclaimissuers"},"defaultTrustedClaimIssuers"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"defaultTrustedClaimIssuers"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/TrustedClaimIssuer"},(0,s.kt)("inlineCode",{parentName:"a"},"TrustedClaimIssuer")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"false"),">","[]"),(0,s.kt)("p",null,"used for conditions where no trusted claim issuers were specified"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L484"},"types/index.ts:484")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"requirements"},"requirements"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"requirements"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/Types/Requirement"},(0,s.kt)("inlineCode",{parentName:"a"},"Requirement")),"[]"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L480"},"types/index.ts:480")))}u.isMDXComponent=!0}}]);