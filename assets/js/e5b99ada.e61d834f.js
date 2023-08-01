"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[14020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?i.createElement(u,o(o({ref:t},f),{},{components:n})):i.createElement(u,o({ref:t},f))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const s={id:"Investment",title:"Interface: Investment",sidebar_label:"Investment"},o=void 0,a={unversionedId:"interfaces/API/Entities/Offering/Types/Investment/Investment",id:"version-19.1.x/interfaces/API/Entities/Offering/Types/Investment/Investment",title:"Interface: Investment",description:"api/entities/Offering/types.Investment",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Entities/Offering/Types/Investment/Investment.md",sourceDirName:"interfaces/API/Entities/Offering/Types/Investment",slug:"/interfaces/API/Entities/Offering/Types/Investment/",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Offering/Types/Investment/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"Investment",title:"Interface: Investment",sidebar_label:"Investment"},sidebar:"defaultSidebar",previous:{title:"HumanReadable",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Offering/HumanReadable/"},next:{title:"OfferingDetails",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Offering/Types/OfferingDetails/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"investedAmount",id:"investedamount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"investor",id:"investor",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"soldAmount",id:"soldamount",level:3},{value:"Defined in",id:"defined-in-2",level:4}],f={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Entities/Offering/Types/"},"api/entities/Offering/types"),".Investment"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"investedamount"},"investedAmount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"investedAmount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Offering/types.ts#L90"},"api/entities/Offering/types.ts:90")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"investor"},"investor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"investor"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Offering/types.ts#L88"},"api/entities/Offering/types.ts:88")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"soldamount"},"soldAmount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"soldAmount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Offering/types.ts#L89"},"api/entities/Offering/types.ts:89")))}d.isMDXComponent=!0}}]);