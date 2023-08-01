"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[53686],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>b});var n=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},l=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),u=p(i),f=r,b=u["".concat(d,".").concat(f)]||u[f]||c[f]||a;return i?n.createElement(b,s(s({ref:e},l),{},{components:i})):n.createElement(b,s({ref:e},l))}));function b(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=i.length,s=new Array(a);s[0]=f;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,s[1]=o;for(var p=2;p<a;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},3030:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));const a={id:"DistributionParticipant",title:"Interface: DistributionParticipant",sidebar_label:"DistributionParticipant"},s=void 0,o={unversionedId:"interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant",id:"version-19.1.x/interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant",title:"Interface: DistributionParticipant",description:"api/entities/DividendDistribution/types.DistributionParticipant",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/DistributionParticipant.md",sourceDirName:"interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant",slug:"/interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"DistributionParticipant",title:"Interface: DistributionParticipant",sidebar_label:"DistributionParticipant"},sidebar:"defaultSidebar",previous:{title:"HumanReadable",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/DividendDistribution/HumanReadable/"},next:{title:"DividendDistributionDetails",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/"}},d={},p=[{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"amountAfterTax",id:"amountaftertax",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"paid",id:"paid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"taxWithholdingPercentage",id:"taxwithholdingpercentage",level:3},{value:"Defined in",id:"defined-in-4",level:4}],l={toc:p};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Entities/DividendDistribution/Types/"},"api/entities/DividendDistribution/types"),".DistributionParticipant"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"amount"},"amount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"amount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/DividendDistribution/types.ts#L15"},"api/entities/DividendDistribution/types.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"amountaftertax"},"amountAfterTax"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"amountAfterTax"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"amount to be paid to the participant after tax deductions"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/DividendDistribution/types.ts#L23"},"api/entities/DividendDistribution/types.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identity"},"identity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"identity"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/DividendDistribution/types.ts#L14"},"api/entities/DividendDistribution/types.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"paid"},"paid"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"paid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/DividendDistribution/types.ts#L24"},"api/entities/DividendDistribution/types.ts:24")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"taxwithholdingpercentage"},"taxWithholdingPercentage"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"taxWithholdingPercentage"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"percentage (0-100) of tax withholding for this participant"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/DividendDistribution/types.ts#L19"},"api/entities/DividendDistribution/types.ts:19")))}u.isMDXComponent=!0}}]);