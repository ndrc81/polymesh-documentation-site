"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[75887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),p=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?s.createElement(k,a(a({ref:t},d),{},{components:n})):s.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const i={id:"CheckPermissionsResult",title:"Interface: CheckPermissionsResult<Type>",sidebar_label:"CheckPermissionsResult"},a=void 0,l={unversionedId:"interfaces/Types/CheckPermissionsResult/CheckPermissionsResult",id:"version-19.1.x/interfaces/Types/CheckPermissionsResult/CheckPermissionsResult",title:"Interface: CheckPermissionsResult<Type>",description:"types.CheckPermissionsResult",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/Types/CheckPermissionsResult/CheckPermissionsResult.md",sourceDirName:"interfaces/Types/CheckPermissionsResult",slug:"/interfaces/Types/CheckPermissionsResult/",permalink:"/sdk-docs/19.1.x/interfaces/Types/CheckPermissionsResult/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"CheckPermissionsResult",title:"Interface: CheckPermissionsResult<Type>",sidebar_label:"CheckPermissionsResult"},sidebar:"defaultSidebar",previous:{title:"CddProviderRole",permalink:"/sdk-docs/19.1.x/interfaces/Types/CddProviderRole/"},next:{title:"CheckRolesResult",permalink:"/sdk-docs/19.1.x/interfaces/Types/CheckRolesResult/"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"missingPermissions",id:"missingpermissions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/"},"types"),".CheckPermissionsResult"),(0,r.kt)("p",null,"Result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"checkPermissions")," call. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),", represents whether the Account\nhas all the necessary secondary key Permissions. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),", represents whether the\nIdentity has all the necessary external agent Permissions"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/19.1.x/enums/Types/SignerType/"},(0,r.kt)("inlineCode",{parentName:"a"},"SignerType")))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"message"},"message"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"message"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"optional message explaining the reason for failure in special cases"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1040"},"types/index.ts:1040")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"missingpermissions"},"missingPermissions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"missingPermissions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," extends ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/enums/Types/SignerType/#account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))," ? ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/interfaces/Types/SimplePermissions/"},(0,r.kt)("inlineCode",{parentName:"a"},"SimplePermissions"))," : ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Generated/Types/#txtag"},(0,r.kt)("inlineCode",{parentName:"a"},"TxTag")),"[]"),(0,r.kt)("p",null,"required permissions which the signer ",(0,r.kt)("em",{parentName:"p"},"DOESN'T")," have. Only present if ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1032"},"types/index.ts:1032")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"result"},"result"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"result"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"whether the signer complies with the required permissions or not"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1036"},"types/index.ts:1036")))}c.isMDXComponent=!0}}]);