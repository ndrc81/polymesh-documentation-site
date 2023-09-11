"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[33429],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=n.createContext({}),c=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),f=r,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||s;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,o=new Array(s);o[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},49567:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const s={id:"MultiSigDetails",title:"Interface: MultiSigDetails",sidebar_label:"MultiSigDetails"},o=void 0,l={unversionedId:"interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails",id:"version-20.1.x/interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails",title:"Interface: MultiSigDetails",description:"api/entities/Account/MultiSig/types.MultiSigDetails",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/MultiSigDetails.md",sourceDirName:"interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails",slug:"/interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"MultiSigDetails",title:"Interface: MultiSigDetails",sidebar_label:"MultiSigDetails"},sidebar:"defaultSidebar",previous:{title:"ConnectParams",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Client/Polymesh/ConnectParams/"},next:{title:"AccountTypeInfo",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Account/Types/AccountTypeInfo/"}},a={},c=[{value:"Properties",id:"properties",level:2},{value:"requiredSignatures",id:"requiredsignatures",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"signers",id:"signers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Entities/Account/MultiSig/Types/"},"api/entities/Account/MultiSig/types"),".MultiSigDetails"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"requiredsignatures"},"requiredSignatures"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"requiredSignatures"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/MultiSig/types.ts#L7"},"api/entities/Account/MultiSig/types.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signers"},"signers"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"signers"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/#signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer")),"[]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/Account/MultiSig/types.ts#L6"},"api/entities/Account/MultiSig/types.ts:6")))}p.isMDXComponent=!0}}]);