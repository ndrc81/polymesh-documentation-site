"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[2110],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(i),k=a,h=u["".concat(o,".").concat(k)]||u[k]||m[k]||r;return i?n.createElement(h,l(l({ref:t},d),{},{components:i})):n.createElement(h,l({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},73301:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={id:"MultiSigProposal",title:"Class: MultiSigProposal",sidebar_label:"MultiSigProposal"},l=void 0,s={unversionedId:"classes/API/Entities/MultiSigProposal/MultiSigProposal",id:"version-21.0.x/classes/API/Entities/MultiSigProposal/MultiSigProposal",title:"Class: MultiSigProposal",description:"api/entities/MultiSigProposal.MultiSigProposal",source:"@site/sdk-docs_versioned_docs/version-21.0.x/classes/API/Entities/MultiSigProposal/MultiSigProposal.md",sourceDirName:"classes/API/Entities/MultiSigProposal",slug:"/classes/API/Entities/MultiSigProposal/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/MultiSigProposal/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"MultiSigProposal",title:"Class: MultiSigProposal",sidebar_label:"MultiSigProposal"},sidebar:"defaultSidebar",previous:{title:"MetadataEntry",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/MetadataEntry/"},next:{title:"NumberedPortfolio",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/NumberedPortfolio/"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"multiSig",id:"multisig",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"details",id:"details",level:3},{value:"Returns",id:"returns",level:4},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isUniqueIdentifiers",id:"isuniqueidentifiers",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-4",level:4}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/API/Entities/MultiSigProposal/"},"api/entities/MultiSigProposal"),".MultiSigProposal"),(0,a.kt)("p",null,"A proposal for a MultiSig transaction. This is a wrapper around an extrinsic that will be executed when the amount of approvals reaches the signature threshold set on the MultiSig Account"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"UniqueIdentifiers"),", ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/MultiSigProposal/HumanReadable/"},(0,a.kt)("inlineCode",{parentName:"a"},"HumanReadable")),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MultiSigProposal"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/MultiSigProposal/index.ts#L30"},"api/entities/MultiSigProposal/index.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"multisig"},"multiSig"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"multiSig"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Account/MultiSig/"},(0,a.kt)("inlineCode",{parentName:"a"},"MultiSig"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/MultiSigProposal/index.ts#L29"},"api/entities/MultiSigProposal/index.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"uuid"},"uuid"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"uuid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#uuid"},"uuid")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Entity.ts#L46"},"api/entities/Entity.ts:46")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"details"},"details"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"details"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/"},(0,a.kt)("inlineCode",{parentName:"a"},"MultiSigProposalDetails")),">"),(0,a.kt)("p",null,"Fetches the details of the Proposal. This includes the amount of approvals and rejections, the expiry, and details of the wrapped extrinsic"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/MultiSigProposal/Types/MultiSigProposalDetails/"},(0,a.kt)("inlineCode",{parentName:"a"},"MultiSigProposalDetails")),">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"exists"},"exists"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"exists"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,a.kt)("p",null,"Determines whether this Proposal exists on chain"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#exists"},"exists")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isequal"},"isEqual"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isEqual"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Determine whether this Entity is the same as another one"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"entity")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#isequal"},"isEqual")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tohuman"},"toHuman"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toHuman"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/MultiSigProposal/HumanReadable/"},(0,a.kt)("inlineCode",{parentName:"a"},"HumanReadable"))),(0,a.kt)("p",null,"Returns a human readable representation"),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/interfaces/API/Entities/MultiSigProposal/HumanReadable/"},(0,a.kt)("inlineCode",{parentName:"a"},"HumanReadable"))),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#tohuman"},"toHuman")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"generateuuid"},"generateUuid"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"generateUuid"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Generate the Entity's UUID from its identifying properties"),(0,a.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#generateuuid"},"generateUuid")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isuniqueidentifiers"},"isUniqueIdentifiers"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"isUniqueIdentifiers"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"unknown")),(0,a.kt)("td",{parentName:"tr",align:"left"},"object to type check")))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#isuniqueidentifiers"},"isUniqueIdentifiers")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unserialize"},"unserialize"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"unserialize"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"serialized"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,a.kt)("p",null,"Unserialize a UUID into its Unique Identifiers"),(0,a.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"serialized")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"UUID to unserialize")))),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/classes/API/Entities/Entity/#unserialize"},"unserialize")))}u.isMDXComponent=!0}}]);