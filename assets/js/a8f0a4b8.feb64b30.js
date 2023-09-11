"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[67024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=s.createContext({}),p=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||l;return n?s.createElement(f,i(i({ref:t},c),{},{components:n})):s.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const l={id:"CheckRolesResult",title:"Interface: CheckRolesResult",sidebar_label:"CheckRolesResult"},i=void 0,o={unversionedId:"interfaces/Types/CheckRolesResult/CheckRolesResult",id:"version-20.1.x/interfaces/Types/CheckRolesResult/CheckRolesResult",title:"Interface: CheckRolesResult",description:"types.CheckRolesResult",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/Types/CheckRolesResult/CheckRolesResult.md",sourceDirName:"interfaces/Types/CheckRolesResult",slug:"/interfaces/Types/CheckRolesResult/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/CheckRolesResult/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"CheckRolesResult",title:"Interface: CheckRolesResult",sidebar_label:"CheckRolesResult"},sidebar:"defaultSidebar",previous:{title:"CheckPermissionsResult",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/CheckPermissionsResult/"},next:{title:"CheckpointWithData",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/CheckpointWithData/"}},a={},p=[{value:"Properties",id:"properties",level:2},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"missingRoles",id:"missingroles",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/"},"types"),".CheckRolesResult"),(0,r.kt)("p",null,"Result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"checkRoles")," call"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"message"},"message"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"message"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"optional message explaining the reason for failure in special cases"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1023"},"types/index.ts:1023")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"missingroles"},"missingRoles"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"missingRoles"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/#role"},(0,r.kt)("inlineCode",{parentName:"a"},"Role")),"[]"),(0,r.kt)("p",null,"required roles which the Identity ",(0,r.kt)("em",{parentName:"p"},"DOESN'T")," have. Only present if ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1015"},"types/index.ts:1015")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"result"},"result"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"result"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"whether the signer possesses all the required roles or not"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/types/index.ts#L1019"},"types/index.ts:1019")))}u.isMDXComponent=!0}}]);