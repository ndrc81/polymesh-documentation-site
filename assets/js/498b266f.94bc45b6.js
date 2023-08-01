"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[15505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),o=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,h=m["".concat(p,".").concat(k)]||m[k]||u[k]||a;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<a;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},34481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=n(87462),r=(n(67294),n(3905));const a={id:"PermissionGroup",title:"Class: PermissionGroup",sidebar_label:"PermissionGroup"},s=void 0,l={unversionedId:"classes/API/Entities/PermissionGroup/PermissionGroup",id:"version-20.1.x/classes/API/Entities/PermissionGroup/PermissionGroup",title:"Class: PermissionGroup",description:"api/entities/PermissionGroup.PermissionGroup",source:"@site/sdk-docs_versioned_docs/version-20.1.x/classes/API/Entities/PermissionGroup/PermissionGroup.md",sourceDirName:"classes/API/Entities/PermissionGroup",slug:"/classes/API/Entities/PermissionGroup/",permalink:"/sdk-docs/classes/API/Entities/PermissionGroup/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"PermissionGroup",title:"Class: PermissionGroup",sidebar_label:"PermissionGroup"},sidebar:"defaultSidebar",previous:{title:"Offering",permalink:"/sdk-docs/classes/API/Entities/Offering/"},next:{title:"Portfolio",permalink:"/sdk-docs/classes/API/Entities/Portfolio/"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"asset",id:"asset",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"getPermissions",id:"getpermissions",level:3},{value:"Returns",id:"returns-1",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"isUniqueIdentifiers",id:"isuniqueidentifiers",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-6",level:4}],d={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/PermissionGroup/"},"api/entities/PermissionGroup"),".PermissionGroup"),(0,r.kt)("p",null,"Represents a group of permissions for an Asset"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/API/Entities/PermissionGroup/UniqueIdentifiers/"},(0,r.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PermissionGroup"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,r.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"asset"},"asset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"asset"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset"))),(0,r.kt)("p",null,"Asset for which this group specifies permissions"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/PermissionGroup.ts#L19"},"api/entities/PermissionGroup.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uuid"},"uuid"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"uuid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#uuid"},"uuid")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Entity.ts#L46"},"api/entities/Entity.ts:46")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"exists"},"exists"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"exists"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Determine whether this Entity exists on chain"),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#exists"},"exists")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpermissions"},"getPermissions"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"getPermissions"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#grouppermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupPermissions")),">"),(0,r.kt)("p",null,"Retrieve the Permissions associated with this Permission Group"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#grouppermissions"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupPermissions")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isequal"},"isEqual"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isEqual"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Determine whether this Entity is the same as another one"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/sdk-docs/classes/API/Entities/Entity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#isequal"},"isEqual")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tohuman"},"toHuman"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"toHuman"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("p",null,"Returns Entity data in a human readable (JSON) format"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"unknown")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#tohuman"},"toHuman")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"generateuuid"},"generateUuid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"generateUuid"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Generate the Entity's UUID from its identifying properties"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#generateuuid"},"generateUuid")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isuniqueidentifiers"},"isUniqueIdentifiers"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"isUniqueIdentifiers"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown")),(0,r.kt)("td",{parentName:"tr",align:"left"},"object to type check")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#isuniqueidentifiers"},"isUniqueIdentifiers")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unserialize"},"unserialize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"unserialize"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"serialized"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,r.kt)("p",null,"Unserialize a UUID into its Unique Identifiers"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serialized")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID to unserialize")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Entity/#unserialize"},"unserialize")))}m.isMDXComponent=!0}}]);