"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[60872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"Modules/Base/Types",id:"Modules/Base/Types",title:"Types",description:"Type Aliases",source:"@site/sdk-docs/Modules/Base/Types.md",sourceDirName:"Modules/Base",slug:"/Modules/Base/Types",permalink:"/polymesh-documentation-site/sdk-docs/Modules/Base/Types",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"PolymeshTransactionBatch",permalink:"/polymesh-documentation-site/sdk-docs/Modules/Base/PolymeshTransactionBatch"},next:{title:"Types",permalink:"/polymesh-documentation-site/sdk-docs/Modules/Generated/Types"}},s={},p=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"PolymeshError",id:"polymesherror",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"PolymeshTransaction",id:"polymeshtransaction",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"PolymeshTransactionBatch",id:"polymeshtransactionbatch",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"polymesherror"},"PolymeshError"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PolymeshError"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/Base/PolymeshError/"},(0,r.kt)("inlineCode",{parentName:"a"},"PolymeshError"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/types.ts#L17"},"base/types.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"polymeshtransaction"},"PolymeshTransaction"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PolymeshTransaction"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Args"),">",": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/Base/PolymeshTransaction/"},(0,r.kt)("inlineCode",{parentName:"a"},"PolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Args"),">"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReturnValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TransformedReturnValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReturnValue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Args")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[] ","|"," [] = ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]")))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/types.ts#L7"},"base/types.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"polymeshtransactionbatch"},"PolymeshTransactionBatch"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"PolymeshTransactionBatch"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Args"),">",": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/Classes/Base/PolymeshTransactionBatch/"},(0,r.kt)("inlineCode",{parentName:"a"},"PolymeshTransactionBatch")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Args"),">"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReturnValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TransformedReturnValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReturnValue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Args")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[][]"," = ",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[][]")))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/base/types.ts#L12"},"base/types.ts:12")))}m.isMDXComponent=!0}}]);