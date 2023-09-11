"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[23660],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(i),m=n,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||s;return i?r.createElement(h,o(o({ref:t},d),{},{components:i})):r.createElement(h,o({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:n,o[1]=a;for(var l=2;l<s;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},87866:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=i(87462),n=(i(67294),i(3905)),s=i(44996);const o={sidebar_position:1,title:"Distributing Assets",description:"Distribute regulated security tokens",slug:"/distribute/distributing-assets/"},a=void 0,u={unversionedId:"distribute/landingpage",id:"distribute/landingpage",title:"Distributing Assets",description:"Distribute regulated security tokens",source:"@site/docs/04-distribute/landingpage.mdx",sourceDirName:"04-distribute",slug:"/distribute/distributing-assets/",permalink:"/polymesh-documentation-site/docs/distribute/distributing-assets/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/04-distribute/landingpage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Distributing Assets",description:"Distribute regulated security tokens",slug:"/distribute/distributing-assets/"},sidebar:"defaultSidebar",previous:{title:"With the SDK",permalink:"/polymesh-documentation-site/docs/originate/sdk/"},next:{title:"Distribution Process",permalink:"/polymesh-documentation-site/docs/distribute/distribution-process/"}},l={},d=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=c("OverviewVideoBox"),m=c("OverviewBox"),h=c("ActionCardWrapper"),b=c("ActionCard"),y={toc:d};function g(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(p,{title:"Distributing assets",videoId:"VH-jxaC1hos",mdxType:"OverviewVideoBox"},(0,n.kt)("p",null,"Watch Adam and Nick discussing asset distribution on Polymesh and go into detail on the technical implementation of distribution."),(0,n.kt)("p",null,"You can watch ",(0,n.kt)("a",{parentName:"p",href:"/docs/resources/polymesh-webcast/"},"the whole talk")," in one go or pick the parts related to each section of the documentation.")),(0,n.kt)("p",null,"Discover how to distribute regulated security tokens with Polymesh."),(0,n.kt)("p",null,"What's inside?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An overview explaining the ",(0,n.kt)("strong",{parentName:"li"},"main concepts"),"."),(0,n.kt)("li",{parentName:"ul"},"Distribute an asset with an introductory exercise using the Dashboard."),(0,n.kt)("li",{parentName:"ul"},"Learn how to integrating distribution processes into existing systems using the SDK."),(0,n.kt)("li",{parentName:"ul"},"A quiz to self-assess acquired knowledge."),(0,n.kt)("li",{parentName:"ul"},"Helpful links to reference documentation.")),(0,n.kt)("hr",null),(0,n.kt)(m,{title:"Overview: Distributing assets with Polymesh",linkHref:"../distribution-process/",linkText:"Overview",imgSrc:(0,s.Z)("/img/tmpAssets/illu-p-screen.svg"),mdxType:"OverviewBox"},(0,n.kt)("p",null,"Now that you know how to originate an asset, distribute it! This overview introduction explains how Polymesh addresses security token distribution.")),(0,n.kt)("h3",null,"Asset Distribution"),"Now that you have originated an asset, it's time to distribute!",(0,n.kt)("p",null,"The example scenario takes you through the possibilities Polymesh offers. Execute your first distribution using the Dashboard, and then discover the integration possibilities."),(0,n.kt)(h,{mdxType:"ActionCardWrapper"},(0,n.kt)(b,{href:"../with-dashboard/",text:"Distribute an asset using the Dashboard",desc:"Distribute assets, such as dividend payments with your browser and the Polymesh Dashboard.",mdxType:"ActionCard"}),(0,n.kt)(b,{href:"../with-sdk/",text:"Distribute an asset with the SDK",desc:"Integrate asset distribution into your systems with the SDK.",mdxType:"ActionCard"})),(0,n.kt)(m,{title:"Dive into further resources",linkHref:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki",linkText:"Explore",imgSrc:(0,s.Z)("/img/tmpAssets/illu-p-code.svg"),external:"true",mdxType:"OverviewBox"},(0,n.kt)("p",null,"A closer look at the detailed technical documentation to dive deeper?")))}g.isMDXComponent=!0}}]);