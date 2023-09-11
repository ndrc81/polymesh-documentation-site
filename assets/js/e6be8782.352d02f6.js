"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[34069],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(i),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return i?n.createElement(m,o(o({ref:t},p),{},{components:i})):n.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,o=new Array(s);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var c=2;c<s;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},82187:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const s={id:"MultiSigDetails",title:"Interface: MultiSigDetails",sidebar_label:"MultiSigDetails"},o=void 0,a={unversionedId:"interfaces/API/Entities/Account/Types/MultiSigDetails/MultiSigDetails",id:"version-22.0.x/interfaces/API/Entities/Account/Types/MultiSigDetails/MultiSigDetails",title:"Interface: MultiSigDetails",description:"api/entities/Account/types.MultiSigDetails",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/API/Entities/Account/Types/MultiSigDetails/MultiSigDetails.md",sourceDirName:"interfaces/API/Entities/Account/Types/MultiSigDetails",slug:"/interfaces/API/Entities/Account/Types/MultiSigDetails/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Account/Types/MultiSigDetails/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"MultiSigDetails",title:"Interface: MultiSigDetails",sidebar_label:"MultiSigDetails"},sidebar:"defaultSidebar",previous:{title:"HistoricPolyxTransaction",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Account/Types/HistoricPolyxTransaction/"},next:{title:"CorporateActionDefaultConfig",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/CorporateActions/Types/CorporateActionDefaultConfig/"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"requiredSignatures",id:"requiredsignatures",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"signers",id:"signers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Account/Types/"},"api/entities/Account/types"),".MultiSigDetails"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"requiredsignatures"},"requiredSignatures"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"requiredSignatures"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Account/types.ts#L8"},"api/entities/Account/types.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signers"},"signers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"signers"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer")),"[]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Account/types.ts#L7"},"api/entities/Account/types.ts:7")))}u.isMDXComponent=!0}}]);