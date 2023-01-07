"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[2042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),s=n(4996);const i={sidebar_position:1,title:"Transferring Assets",description:"Discover Polymesh's compliant on-chain solution",slug:"/settlement/transferring-assets"},a=void 0,l={unversionedId:"settlement/landingpage",id:"settlement/landingpage",title:"Transferring Assets",description:"Discover Polymesh's compliant on-chain solution",source:"@site/docs/05-settlement/landingpage.mdx",sourceDirName:"05-settlement",slug:"/settlement/transferring-assets",permalink:"/polymesh-documentation-site/docs/settlement/transferring-assets",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/05-settlement/landingpage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Transferring Assets",description:"Discover Polymesh's compliant on-chain solution",slug:"/settlement/transferring-assets"},sidebar:"defaultSidebar",previous:{title:"Settlement",permalink:"/polymesh-documentation-site/docs/category/settlement"},next:{title:"Settlement Process",permalink:"/polymesh-documentation-site/docs/settlement/settlement-process"}},c={},d=[{value:"Settlement, custody and exchanges",id:"settlement-custody-and-exchanges",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=p("OverviewVideoBox"),u=p("OverviewBox"),h=p("ActionCardWrapper"),y=p("ActionCard"),f={toc:d};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{title:"Settlement & Custody",videoId:"8sgIgPBdO7U",mdxType:"OverviewVideoBox"},(0,o.kt)("p",null,"In this episode Nick and Adam talk about Polymesh's settlement engine and the legal and technical dimensions of custody on Polymesh."),(0,o.kt)("p",null,"You can watch ",(0,o.kt)("a",{parentName:"p",href:"/docs/resources/polymesh-webcast"},"the whole talk")," in one go or pick the parts related to each section of the documentation.")),(0,o.kt)("p",null,"Settlement has never been so seamless."),(0,o.kt)("p",null,"Want to incorporate a custodian and exchange? No problem at all. Polymesh does that."),(0,o.kt)("p",null,"Take a look at the example scenario, then dive into step-by-step practice exercises and see it unfold on the Dashboard and with the Polymesh SDK."),(0,o.kt)("p",null,"What's inside?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The overview introduces important conceptual ideas and how Polymesh addresses custody, compliant and settlement."),(0,o.kt)("li",{parentName:"ul"},"An introductory exercise. Try it yourself using the ",(0,o.kt)("strong",{parentName:"li"},"Dashboard")),(0,o.kt)("li",{parentName:"ul"},"A developer-level exercise focused on settlement implementation using the ",(0,o.kt)("strong",{parentName:"li"},"SDK")),(0,o.kt)("li",{parentName:"ul"},"A self-assessment quiz"),(0,o.kt)("li",{parentName:"ul"},"Dive deeper with links to the reference documentation")),(0,o.kt)("hr",null),(0,o.kt)(u,{title:"Overview: Settlement and custody",linkHref:"./settlement-process/",linkText:"Overview",imgSrc:(0,s.Z)("/img/tmpAssets/illu-p-screen.svg"),mdxType:"OverviewBox"},(0,o.kt)("p",null,"Discover how Polymesh handles multiparty transactions, instructions, KYC requirements, affirmations, and atomic executions."),(0,o.kt)("p",null,"This overview reveals how Polymesh addresses the needs of custody service providers, exchanges and others participating in the settlement process.")),(0,o.kt)("h3",{id:"settlement-custody-and-exchanges"},"Settlement, custody and exchanges"),(0,o.kt)("p",null,"Polymesh is tailored for the needs and challenges of capital markets. Compliant settlement processes involving many participants unfold on-chain. Polymesh allows custodians and exchanges to offer their services seemleslessly."),(0,o.kt)("p",null,"Explore an example scenario. Building on the concepts from the introduction, let's take a look at settlements on Polymesh using the Dashboard and the SDK."),(0,o.kt)(h,{mdxType:"ActionCardWrapper"},(0,o.kt)(y,{href:"./with-dashboard/",text:"Settlement with the Dashboard",desc:"Let's perform a settlement with your browser and the Polymesh Dashboard. A step-by-step example.",mdxType:"ActionCard"}),(0,o.kt)(y,{href:"./sdk/",showDevSign:"true",text:"Settlement with the SDK",desc:"Create trades and affirm instructions with the SDK",mdxType:"ActionCard"})),(0,o.kt)(u,{title:"Dive into further resources",linkHref:"https://docs.polymesh.live/polymesh/index.html",linkText:"Explore",imgSrc:(0,s.Z)("/img/tmpAssets/illu-p-code.svg"),mdxType:"OverviewBox"},(0,o.kt)("p",null,"A closer look at the detailed technical documentation to dive deeper?")))}v.isMDXComponent=!0}}]);