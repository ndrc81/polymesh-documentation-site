"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[28322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,c=m["".concat(o,".").concat(u)]||m[u]||k[u]||r;return n?a.createElement(c,s(s({ref:t},d),{},{components:n})):a.createElement(c,s({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"Account",title:"Class: Account",sidebar_label:"Account"},s=void 0,l={unversionedId:"classes/API/Entities/Account/Account",id:"version-20.0.x/classes/API/Entities/Account/Account",title:"Class: Account",description:"api/entities/Account.Account",source:"@site/sdk-docs_versioned_docs/version-20.0.x/classes/API/Entities/Account/Account.md",sourceDirName:"classes/API/Entities/Account",slug:"/classes/API/Entities/Account/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Account/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"Account",title:"Class: Account",sidebar_label:"Account"},sidebar:"defaultSidebar",previous:{title:"Settlements",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Client/Settlements/"},next:{title:"Asset",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Asset/"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"authorizations",id:"authorizations",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"key",id:"key",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"subsidies",id:"subsidies",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"checkPermissions",id:"checkpermissions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"getBalance",id:"getbalance",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getCurrentNonce",id:"getcurrentnonce",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getIdentity",id:"getidentity",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getMultiSig",id:"getmultisig",level:3},{value:"Returns",id:"returns-6",level:4},{value:"getPermissions",id:"getpermissions",level:3},{value:"Returns",id:"returns-7",level:4},{value:"getSubsidy",id:"getsubsidy",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"getTransactionHistory",id:"gettransactionhistory",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-10",level:4},{value:"getTransactionHistoryV2",id:"gettransactionhistoryv2",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-11",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isFrozen",id:"isfrozen",level:3},{value:"Returns",id:"returns-13",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/API/Entities/Account/"},"api/entities/Account"),".Account"),(0,i.kt)("p",null,"Represents an Account in the Polymesh blockchain. Accounts can hold POLYX, control Identities and vote on proposals (among other things)"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Account/UniqueIdentifiers/"},(0,i.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Account"))),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/MultiSig/"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiSig"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Polymesh-specific address of the Account. Serves as an identifier"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Account.ts#L274"},"api/entities/Account.ts:274")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"authorizations"},"authorizations"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"authorizations"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Common/Namespaces/Authorizations/"},(0,i.kt)("inlineCode",{parentName:"a"},"Authorizations")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Account.ts#L283"},"api/entities/Account.ts:283")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"key"},"key"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A hex representation of the cryptographic public key of the Account. This is consistent across\nSubstrate chains, while the address depends on the chain as well."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Account.ts#L280"},"api/entities/Account.ts:280")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subsidies"},"subsidies"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"subsidies"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Subsidies/"},(0,i.kt)("inlineCode",{parentName:"a"},"Subsidies"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Account.ts#L284"},"api/entities/Account.ts:284")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uuid"},"uuid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uuid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#uuid"},"uuid")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Entity.ts#L46"},"api/entities/Entity.ts:46")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"checkpermissions"},"checkPermissions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"checkPermissions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"permissions"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/CheckPermissionsResult/"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckPermissionsResult")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/SignerType/#account"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")),">",">"),(0,i.kt)("p",null,"Check if this Account possesses certain Permissions to act on behalf of its corresponding Identity"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"permissions")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/SimplePermissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"SimplePermissions")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/CheckPermissionsResult/"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckPermissionsResult")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/SignerType/#account"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")),">",">"),(0,i.kt)("p",null,"which permissions the Account is missing (if any) and the final result"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exists"},"exists"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"exists"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Determine whether this Account exists on chain"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#exists"},"exists")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getbalance"},"getBalance"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getBalance"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/Balance/"},(0,i.kt)("inlineCode",{parentName:"a"},"Balance")),">"),(0,i.kt)("p",null,"Get the free/locked POLYX balance of the Account"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," can be subscribed to"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/Balance/"},(0,i.kt)("inlineCode",{parentName:"a"},"Balance")),">"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getBalance"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"callback")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#subcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/Balance/"},(0,i.kt)("inlineCode",{parentName:"a"},"Balance")),">")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcurrentnonce"},"getCurrentNonce"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getCurrentNonce"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,i.kt)("p",null,"Retrieve the current nonce for this Account"),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getidentity"},"getIdentity"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getIdentity"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,i.kt)("p",null,"Retrieve the Identity associated to this Account (null if there is none)"),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmultisig"},"getMultiSig"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMultiSig"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/MultiSig/"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiSig")),">"),(0,i.kt)("p",null,"Fetch the MultiSig this Account is part of. If this Account is not a signer on any MultiSig, return null"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/MultiSig/"},(0,i.kt)("inlineCode",{parentName:"a"},"MultiSig")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getpermissions"},"getPermissions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPermissions"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/Permissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"Permissions")),">"),(0,i.kt)("p",null,"Retrieve the Permissions this Account has as a Permissioned Account for its corresponding Identity"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if there is no Identity associated with the Account"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/Permissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"Permissions")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsubsidy"},"getSubsidy"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSubsidy"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,i.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),">"),(0,i.kt)("p",null,"Get the subsidized balance of this Account and the subsidizer Account. If\nthis Account isn't being subsidized, return null"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," can be subscribed to"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,i.kt)("p",null," in favour of ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Subsidies/#getsubsidizer"},"subsidies.getSubsidizer")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,i.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),">"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSubsidy"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"callback")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#subcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,i.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),">")))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#unsubcallback"},(0,i.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettransactionhistory"},"getTransactionHistory"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getTransactionHistory"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"filters?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ExtrinsicData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ExtrinsicData")),">",">"),(0,i.kt)("p",null,"Retrieve a list of transactions signed by this Account. Can be filtered using parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," if both ",(0,i.kt)("inlineCode",{parentName:"p"},"blockNumber")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"blockHash")," are passed, only ",(0,i.kt)("inlineCode",{parentName:"p"},"blockNumber")," is taken into account"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," uses the middleware"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.blockHash?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.blockNumber?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.orderBy?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#transactionorderbyinput"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionOrderByInput"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.size?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"page size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.start?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"page offset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.success?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether the transaction was successful or not")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.tag?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Generated/Types/#txtag"},(0,i.kt)("inlineCode",{parentName:"a"},"TxTag"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"tag associated with the transaction")))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ExtrinsicData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ExtrinsicData")),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettransactionhistoryv2"},"getTransactionHistoryV2"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getTransactionHistoryV2"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"filters?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ExtrinsicData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ExtrinsicData")),">",">"),(0,i.kt)("p",null,"Retrieve a list of transactions signed by this Account. Can be filtered using parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," if both ",(0,i.kt)("inlineCode",{parentName:"p"},"blockNumber")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"blockHash")," are passed, only ",(0,i.kt)("inlineCode",{parentName:"p"},"blockNumber")," is taken into account"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," uses the middlewareV2"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.blockHash?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.blockNumber?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.orderBy?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/ExtrinsicsOrderBy/"},(0,i.kt)("inlineCode",{parentName:"a"},"ExtrinsicsOrderBy"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.size?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"page size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.start?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"page offset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.success?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether the transaction was successful or not")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filters.tag?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Generated/Types/#txtag"},(0,i.kt)("inlineCode",{parentName:"a"},"TxTag"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"tag associated with the transaction")))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ExtrinsicData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ExtrinsicData")),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isequal"},"isEqual"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isEqual"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Determine whether this Entity is the same as another one"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#isequal"},"isEqual")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isfrozen"},"isFrozen"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isFrozen"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Check whether this Account is frozen. If frozen, it cannot perform any Identity related action until the primary Account of the Identity unfreezes all secondary Accounts"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," returns false if the Account isn't associated to any Identity"),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tohuman"},"toHuman"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toHuman"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return the Account's address"),(0,i.kt)("h4",{id:"returns-14"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#tohuman"},"toHuman")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generateuuid"},"generateUuid"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"generateUuid"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Generate the Entity's UUID from its identifying properties"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,i.kt)("h4",{id:"returns-15"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#generateuuid"},"generateUuid")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unserialize"},"unserialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"unserialize"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"serialized"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,i.kt)("p",null,"Unserialize a UUID into its Unique Identifiers"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serialized")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID to unserialize")))),(0,i.kt)("h4",{id:"returns-16"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#unserialize"},"unserialize")))}m.isMDXComponent=!0}}]);