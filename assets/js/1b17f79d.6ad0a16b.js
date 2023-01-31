"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[52371],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var s=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,s,t=function(e,r){if(null==e)return{};var n,s,t={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=s.createContext({}),d=function(e){var r=s.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=d(e.components);return s.createElement(c.Provider,{value:r},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},u=s.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=d(n),u=t,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||i;return n?s.createElement(f,o(o({ref:r},p),{},{components:n})):s.createElement(f,o({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[m]="string"==typeof e?e:t,o[1]=a;for(var d=2;d<i;d++)o[d]=n[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37366:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(87462),t=(n(67294),n(3905));const i={id:"ModifySignerPermissionsParams",title:"Interface: ModifySignerPermissionsParams",sidebar_label:"ModifySignerPermissionsParams"},o="Interface: ModifySignerPermissionsParams",a={unversionedId:"interfaces/API/Procedures/Types/ModifySignerPermissionsParams/ModifySignerPermissionsParams",id:"interfaces/API/Procedures/Types/ModifySignerPermissionsParams/ModifySignerPermissionsParams",title:"Interface: ModifySignerPermissionsParams",description:"api/procedures/types.ModifySignerPermissionsParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/ModifySignerPermissionsParams/ModifySignerPermissionsParams.md",sourceDirName:"interfaces/API/Procedures/Types/ModifySignerPermissionsParams",slug:"/interfaces/API/Procedures/Types/ModifySignerPermissionsParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ModifySignerPermissionsParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"ModifySignerPermissionsParams",title:"Interface: ModifySignerPermissionsParams",sidebar_label:"ModifySignerPermissionsParams"},sidebar:"defaultSidebar",previous:{title:"ModifyPrimaryIssuanceAgentParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ModifyPrimaryIssuanceAgentParams/"},next:{title:"MoveFundsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/MoveFundsParams/"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"secondaryAccounts",id:"secondaryaccounts",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:d};function m(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,s.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"interface-modifysignerpermissionsparams"},"Interface: ModifySignerPermissionsParams"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".ModifySignerPermissionsParams"),(0,t.kt)("h2",{id:"properties"},"Properties"),(0,t.kt)("h3",{id:"secondaryaccounts"},"secondaryAccounts"),(0,t.kt)("p",null,"\u2022 ",(0,t.kt)("strong",{parentName:"p"},"secondaryAccounts"),": ",(0,t.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/Utils/#modify"},(0,t.kt)("inlineCode",{parentName:"a"},"Modify")),"<",(0,t.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PermissionedAccount/"},(0,t.kt)("inlineCode",{parentName:"a"},"PermissionedAccount")),", { ",(0,t.kt)("inlineCode",{parentName:"p"},"account"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,t.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"},(0,t.kt)("inlineCode",{parentName:"a"},"Account"))," ; ",(0,t.kt)("inlineCode",{parentName:"p"},"permissions"),": ",(0,t.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#permissionslike"},(0,t.kt)("inlineCode",{parentName:"a"},"PermissionsLike")),"  }",">","[]"),(0,t.kt)("p",null,"list of secondary Accounts"),(0,t.kt)("h4",{id:"defined-in"},"Defined in"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L244"},"api/procedures/types.ts:244")))}m.isMDXComponent=!0}}]);