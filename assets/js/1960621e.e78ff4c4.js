"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[89568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"Interfaces/API/Procedures/Types/AddInstructionParams",id:"Interfaces/API/Procedures/Types/AddInstructionParams",title:"AddInstructionParams",description:"api/procedures/types.AddInstructionParams",source:"@site/sdk-docs/Interfaces/API/Procedures/Types/AddInstructionParams.md",sourceDirName:"Interfaces/API/Procedures/Types",slug:"/Interfaces/API/Procedures/Types/AddInstructionParams",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/AddInstructionParams",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"AddClaimsParams",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/AddClaimsParams"},next:{title:"AddInstructionWithVenueIdParams",permalink:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/AddInstructionWithVenueIdParams"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"endBlock",id:"endblock",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"legs",id:"legs",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"memo",id:"memo",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"tradeDate",id:"tradedate",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"valueDate",id:"valuedate",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/API/Procedures/Types"},"api/procedures/types"),".AddInstructionParams"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AddInstructionParams"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Interfaces/API/Procedures/Types/AddInstructionWithVenueIdParams"},(0,a.kt)("inlineCode",{parentName:"a"},"AddInstructionWithVenueIdParams"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"endblock"},"endBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"endBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"block at which the Instruction will be executed automatically (optional, the Instruction will be executed when all participants have authorized it if not supplied)"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L426"},"api/procedures/types.ts:426")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"legs"},"legs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"legs"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"amount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"asset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/API/Entities/Asset/"},(0,a.kt)("inlineCode",{parentName:"a"},"Asset"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"from"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/#portfoliolike"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Modules/Types/#portfoliolike"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioLike")),"  }[]"),(0,a.kt)("p",null,"array of Asset movements (amount, from, to, asset)"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L409"},"api/procedures/types.ts:409")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"memo"},"memo"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"memo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"identifier string to help differentiate instructions"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L430"},"api/procedures/types.ts:430")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tradedate"},"tradeDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"tradeDate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"date at which the trade was agreed upon (optional, for off chain trades)"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L418"},"api/procedures/types.ts:418")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"valuedate"},"valueDate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"valueDate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"date at which the trade was executed (optional, for off chain trades)"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L422"},"api/procedures/types.ts:422")))}c.isMDXComponent=!0}}]);