"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[17785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?s.createElement(f,o(o({ref:t},c),{},{components:n})):s.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=n(87462),i=(n(67294),n(3905));const r={id:"Permissions",title:"Interface: Permissions",sidebar_label:"Permissions"},o=void 0,a={unversionedId:"interfaces/Types/Permissions/Permissions",id:"version-21.0.x/interfaces/Types/Permissions/Permissions",title:"Interface: Permissions",description:"types.Permissions",source:"@site/sdk-docs_versioned_docs/version-21.0.x/interfaces/Types/Permissions/Permissions.md",sourceDirName:"interfaces/Types/Permissions",slug:"/interfaces/Types/Permissions/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/Permissions/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"Permissions",title:"Interface: Permissions",sidebar_label:"Permissions"},sidebar:"defaultSidebar",previous:{title:"PermissionedAccount",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/PermissionedAccount/"},next:{title:"PlainTransactionArgument",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/PlainTransactionArgument/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"portfolios",id:"portfolios",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactionGroups",id:"transactiongroups",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/"},"types"),".Permissions"),(0,i.kt)("p",null,"Permissions a Secondary Key has over the Identity. A null value means the key has\nall permissions of that type (e.g. if ",(0,i.kt)("inlineCode",{parentName:"p"},"assets")," is null, the key has permissions over all\nof the Identity's Assets)"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"assets"},"assets"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"assets"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/SectionPermissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"SectionPermissions")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Asset/"},(0,i.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,i.kt)("p",null,"Assets over which this key has permissions"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L983"},"types/index.ts:983")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"portfolios"},"portfolios"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"portfolios"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/SectionPermissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"SectionPermissions")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/NumberedPortfolio/"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/DefaultPortfolio/"},(0,i.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L997"},"types/index.ts:997")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactiongroups"},"transactionGroups"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactionGroups"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/TxGroup/"},(0,i.kt)("inlineCode",{parentName:"a"},"TxGroup")),"[]"),(0,i.kt)("p",null,"list of Transaction Groups this key can execute. Having permissions over a TxGroup\nmeans having permissions over every TxTag in said group. Partial group permissions are not\ncovered by this value. For a full picture of transaction permissions, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"transactions")," property"),(0,i.kt)("p",null,"NOTE: If transactions is null, ignore this value"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L995"},"types/index.ts:995")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactions"},"transactions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transactions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/Types/TransactionPermissions/"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionPermissions"))),(0,i.kt)("p",null,"Transactions this key can execute"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L987"},"types/index.ts:987")))}d.isMDXComponent=!0}}]);