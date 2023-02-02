"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[73733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const s={id:"Types",title:"Module: Venue Types",sidebar_label:"Types"},o=void 0,a={unversionedId:"modules/API/Entities/Venue/Types/Types",id:"modules/API/Entities/Venue/Types/Types",title:"Module: Venue Types",description:"Enumerations",source:"@site/sdk-docs/modules/API/Entities/Venue/Types/Types.md",sourceDirName:"modules/API/Entities/Venue/Types",slug:"/modules/API/Entities/Venue/Types/",permalink:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Venue/Types/",draft:!1,tags:[],version:"current",frontMatter:{id:"Types",title:"Module: Venue Types",sidebar_label:"Types"},sidebar:"defaultSidebar",previous:{title:"Venue",permalink:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Venue/"},next:{title:"Types",permalink:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"}},p={},l=[{value:"Enumerations",id:"enumerations",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"HistoricInstruction",id:"historicinstruction",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enumerations"},"Enumerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Venue/Types/VenueType/"},"VenueType"))),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Venue/Types/VenueDetails/"},"VenueDetails"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"historicinstruction"},"HistoricInstruction"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"HistoricInstruction"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Instruction/Types/#instructiondetails"},(0,r.kt)("inlineCode",{parentName:"a"},"InstructionDetails")),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"status"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},'"venue"'),">"," & { ",(0,r.kt)("inlineCode",{parentName:"p"},"blockHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"blockNumber"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"legs"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Instruction/Types/Leg/"},(0,r.kt)("inlineCode",{parentName:"a"},"Leg")),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/InstructionStatusEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"InstructionStatusEnum"))," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"venueId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Venue/types.ts#L29"},"api/entities/Venue/types.ts:29")))}c.isMDXComponent=!0}}]);