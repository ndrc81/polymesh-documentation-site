"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[36433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(44996);const s={sidebar_position:1,title:"Creating Assets",description:"Configure regulated security tokens",slug:"/originate/creating-asset/"},a=void 0,l={unversionedId:"originate/landingpage",id:"originate/landingpage",title:"Creating Assets",description:"Configure regulated security tokens",source:"@site/docs/03-originate/landingpage.mdx",sourceDirName:"03-originate",slug:"/originate/creating-asset/",permalink:"/polymesh-documentation-site/docs/originate/creating-asset/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/03-originate/landingpage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Creating Assets",description:"Configure regulated security tokens",slug:"/originate/creating-asset/"},sidebar:"defaultSidebar",previous:{title:"Get POLYX",permalink:"/polymesh-documentation-site/docs/quickstart/quickstart-polyx"},next:{title:"Origination Process",permalink:"/polymesh-documentation-site/docs/originate/origination-process/"}},c={},p=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=u("YoutubePlayer"),m=u("OverviewBox"),g=u("ActionCardWrapper"),h=u("ActionCard"),y={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{videoId:"TGDBulqZUM0",mdxType:"YoutubePlayer"}),(0,o.kt)("p",null,"Learn how assets (regulated security tokens) are designed and created in Polymesh."),(0,o.kt)("p",null,"We will use an example scenario to illustrate how this works."),(0,o.kt)("p",null,"What's inside?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An overview explaining the main concepts."),(0,o.kt)("li",{parentName:"ul"},"An introductory exercise with a step-by-step process you can follow."),(0,o.kt)("li",{parentName:"ul"},"A developer-level exercise diving deep into SDK methods you can use to integrate Polymesh into existing processes and systems."),(0,o.kt)("li",{parentName:"ul"},"A self-assessment quiz to evaluate how far we have come."),(0,o.kt)("li",{parentName:"ul"},"Links to reference documentation to help advanced users find in-depth resources.")),(0,o.kt)("hr",null),(0,o.kt)(m,{title:"Overview: The Polymesh solution to asset origination",linkHref:"../origination-process/",linkText:"Overview",imgSrc:(0,i.Z)("/img/tmpAssets/illu-p-screen.svg"),mdxType:"OverviewBox"},(0,o.kt)("p",null,"Discover how Polymesh approaches asset origination, and creates a secure and standardized environment for it. This introduction also explains how Polymesh addresses compliance necessities throughout the process."),(0,o.kt)("p",null,"Discover how Polymesh streamlines corporate actions.")),(0,o.kt)("h3",null,"Asset Origination"),"Now that you are up and running with the Polymesh Wallet, try it!",(0,o.kt)("p",null,"The example scenario introduces what you can do when originating a security token on Polymesh. Follow the step-by-step process using the Dashboard. Developers can follow the same step-by-step process using the SDK."),(0,o.kt)(g,{mdxType:"ActionCardWrapper"},(0,o.kt)(h,{href:"../dashboard/",text:"Originate an asset with the Dashboard",desc:"Discover the no-code approach to creating a Polymesh Security Token.",mdxType:"ActionCard"}),(0,o.kt)(h,{href:"../sdk/",text:"Originate an asset with the SDK",desc:"Integrate asset creation into your in-house sytems with the Polymesh SDK.",mdxType:"ActionCard"})),(0,o.kt)(m,{title:"Dive into further resources",linkHref:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki",linkText:"Explore",imgSrc:(0,i.Z)("/img/tmpAssets/illu-p-code.svg"),external:"true",mdxType:"OverviewBox"},(0,o.kt)("p",null,"A closer look at the detailed technical documentation to dive deeper?")))}f.isMDXComponent=!0}}]);