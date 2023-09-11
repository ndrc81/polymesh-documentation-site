"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[94017],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>v});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(i),k=r,v=d["".concat(l,".").concat(k)]||d[k]||u[k]||s;return i?n.createElement(v,a(a({ref:t},p),{},{components:i})):n.createElement(v,a({ref:t},p))}));function v(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=i.length,a=new Array(s);a[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},98432:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const s={id:"TickerReservationDetails",title:"Interface: TickerReservationDetails",sidebar_label:"TickerReservationDetails"},a=void 0,o={unversionedId:"interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/TickerReservationDetails",id:"version-20.1.x/interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/TickerReservationDetails",title:"Interface: TickerReservationDetails",description:"api/entities/TickerReservation/types.TickerReservationDetails",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/TickerReservationDetails.md",sourceDirName:"interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails",slug:"/interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/TickerReservation/Types/TickerReservationDetails/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"TickerReservationDetails",title:"Interface: TickerReservationDetails",sidebar_label:"TickerReservationDetails"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Subsidy/UniqueIdentifiers/"},next:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/TickerReservation/UniqueIdentifiers/"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"expiryDate",id:"expirydate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Entities/TickerReservation/Types/"},"api/entities/TickerReservation/types"),".TickerReservationDetails"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"expirydate"},"expiryDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"expiryDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("p",null,"date at which the reservation expires, null if it never expires (permanent reservation or Asset already launched)"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/TickerReservation/types.ts#L26"},"api/entities/TickerReservation/types.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"owner"},"owner"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"owner"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,r.kt)("p",null,"Identity ID of the owner of the ticker, null if it hasn't been reserved"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/TickerReservation/types.ts#L22"},"api/entities/TickerReservation/types.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"status"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/enums/API/Entities/TickerReservation/Types/TickerReservationStatus/"},(0,r.kt)("inlineCode",{parentName:"a"},"TickerReservationStatus"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/entities/TickerReservation/types.ts#L27"},"api/entities/TickerReservation/types.ts:27")))}d.isMDXComponent=!0}}]);