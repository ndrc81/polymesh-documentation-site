"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[35382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Discovering the Testnets, Local Networks and Mainnet",description:"Where to test, where to get serious",slug:"/introduction/networks/"},a=void 0,s={unversionedId:"introduction/intro-networks",id:"introduction/intro-networks",title:"Discovering the Testnets, Local Networks and Mainnet",description:"Where to test, where to get serious",source:"@site/docs/01-introduction/7-intro-networks.mdx",sourceDirName:"01-introduction",slug:"/introduction/networks/",permalink:"/docs/introduction/networks/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/01-introduction/7-intro-networks.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Discovering the Testnets, Local Networks and Mainnet",description:"Where to test, where to get serious",slug:"/introduction/networks/"},sidebar:"defaultSidebar",previous:{title:"Governance",permalink:"/docs/introduction/governance"},next:{title:"Up and Running in 10 Minutes",permalink:"/docs/quickstart/up-in-ten-minutes"}},l={},c=[{value:"Testnet",id:"testnet",level:2},{value:"Local networks",id:"local-networks",level:2},{value:"Mainnet",id:"mainnet",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When developing in blockchain environments, it is very important to know where exactly to test and where to get serious. Thus, let's take a look at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Testnet,"),(0,r.kt)("li",{parentName:"ul"},"local networks, and"),(0,r.kt)("li",{parentName:"ul"},"the Polymesh Mainnet.")),(0,r.kt)("h2",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,"The Testnet is a fully-functional Polymesh network where you can experiment and test without financial consequence. Use the Testnet to practice and experiment!"),(0,r.kt)("p",null,"The Testnet is an actual instance of the Polymesh protocol, so it uses POLYX for transaction fees and voting, exactly as the Mainnet does. However, Testnet POLYX and assets you originate and trade are considered valueless."),(0,r.kt)("p",null,"Notice how the wallet defaults to the Testnet (at the time of writing)? The default is set so that one needs to be explicit about transacting with actual assets."),(0,r.kt)("h2",{id:"local-networks"},"Local networks"),(0,r.kt)("p",null,"You can deploy your own local private network. This is useful if you want to go deeper. For example, a developer may prefer to work alone when developing a custom extension to the protocol itself, an extrinsic. A local, standalone node can perform all of the functions of a complete network."),(0,r.kt)("h2",{id:"mainnet"},"Mainnet"),(0,r.kt)("p",null,"The Polymesh Mainnet is where the actual assets are and where the actual transactions take place. You can select the Mainnet in the Polymesh Wallet."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be aware of the implications when deploying on the Mainnet.")))}p.isMDXComponent=!0}}]);