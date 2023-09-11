"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[95251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={id:"PolkadotConfig",title:"Interface: PolkadotConfig",sidebar_label:"PolkadotConfig"},i=void 0,l={unversionedId:"interfaces/Types/PolkadotConfig/PolkadotConfig",id:"version-22.0.x/interfaces/Types/PolkadotConfig/PolkadotConfig",title:"Interface: PolkadotConfig",description:"types.PolkadotConfig",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/Types/PolkadotConfig/PolkadotConfig.md",sourceDirName:"interfaces/Types/PolkadotConfig",slug:"/interfaces/Types/PolkadotConfig/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PolkadotConfig/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"PolkadotConfig",title:"Interface: PolkadotConfig",sidebar_label:"PolkadotConfig"},sidebar:"defaultSidebar",previous:{title:"PlainTransactionArgument",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PlainTransactionArgument/"},next:{title:"PortfolioCustodianRole",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PortfolioCustodianRole/"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"noInitWarn",id:"noinitwarn",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"typesBundle",id:"typesbundle",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".PolkadotConfig"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"metadata"},"metadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"metadata"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ","`","0x${string}","`",">"),(0,a.kt)("p",null,"provide a locally saved metadata file for a modestly fast startup time (e.g. 1 second when provided, 1.5 seconds without)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," if not provided the SDK will read the needed data from chain during startup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," format is key as genesis hash and spec version and the value hex encoded chain metadata"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null," creating valid metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const meta = _polkadotApi.runtimeMetadata.toHex();\nconst genesisHash = _polkadotApi.genesisHash;\nconst specVersion = _polkadotApi.runtimeVersion.specVersion;\n\nconst metadata = {\n [`${genesisHash}-${specVersion}`]: meta,\n};\n")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L699"},"types/index.ts:699")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"noinitwarn"},"noInitWarn"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"noInitWarn"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to disable polkadot start up warnings"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L704"},"types/index.ts:704")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"typesbundle"},"typesBundle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"typesBundle"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"OverrideBundleType")),(0,a.kt)("p",null,"allows for types to be provided for multiple chain specs at once"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," shouldn't be needed for most use cases"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L711"},"types/index.ts:711")))}c.isMDXComponent=!0}}]);