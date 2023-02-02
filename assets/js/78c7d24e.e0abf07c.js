"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[29078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>P});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),u=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return s.createElement(p.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,P=c["".concat(p,".").concat(d)]||c[d]||l[d]||o;return r?s.createElement(P,a(a({ref:t},m),{},{components:r})):s.createElement(P,a({ref:t},m))}));function P(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=r(87462),n=(r(67294),r(3905));const o={id:"SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",sidebar_label:"SetPermissionGroupParams"},a=void 0,i={unversionedId:"interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams",id:"interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",description:"api/procedures/types.SetPermissionGroupParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetPermissionGroupParams",slug:"/interfaces/API/Procedures/Types/SetPermissionGroupParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPermissionGroupParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",sidebar_label:"SetPermissionGroupParams"},sidebar:"defaultSidebar",previous:{title:"SetPercentageTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/"},next:{title:"SubsidizeAccountParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SubsidizeAccountParams/"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"group",id:"group",level:3},{value:"Defined in",id:"defined-in",level:4}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".SetPermissionGroupParams"),(0,n.kt)("p",null,"This procedure can be called with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset"),(0,n.kt)("li",{parentName:"ul"},"A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset"),(0,n.kt)("li",{parentName:"ul"},"A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and\nthe Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used"),(0,n.kt)("li",{parentName:"ul"},"An array of ",(0,n.kt)("a",{parentName:"li",href:"/polymesh-documentation-site/sdk-docs/enums/Types/TxGroup/"},"Transaction Groups")," that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and\nthe Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"group"},"group"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"group"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,n.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TransactionsParams/"},(0,n.kt)("inlineCode",{parentName:"a"},"TransactionsParams"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TxGroupParams/"},(0,n.kt)("inlineCode",{parentName:"a"},"TxGroupParams"))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L909"},"api/procedures/types.ts:909")))}c.isMDXComponent=!0}}]);