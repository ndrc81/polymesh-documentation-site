"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[60412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,u=c["".concat(l,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},i=void 0,r={unversionedId:"README",id:"version-20.0.x/README",title:"Polymesh SDK Readme",description:"semantic-release",source:"@site/sdk-docs_versioned_docs/version-20.0.x/README.md",sourceDirName:".",slug:"/",permalink:"/sdk-docs/20.0.x/",draft:!1,tags:[],version:"20.0.x",sidebarPosition:0,frontMatter:{id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"SDK Module List",permalink:"/sdk-docs/20.0.x/modules"}},l={},p=[{value:"@polymeshassociation/polymesh-sdk",id:"polymeshassociationpolymesh-sdk",level:2},{value:"Polymesh version",id:"polymesh-version",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Before moving on",id:"before-moving-on",level:3},{value:"Technical Pre-requisites",id:"technical-pre-requisites",level:3},{value:"Documentation",id:"documentation",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Installation",id:"installation",level:4},{value:"Initializing the client",id:"initializing-the-client",level:4}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg",alt:"semantic-release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/standard/semistandard"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square",alt:"js-semistandard-style"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/types/@polymeshassociation/polymesh-sdk",alt:"Types"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polymeshassociation/polymesh-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@polymeshassociation/polymesh-sdk",alt:"npm"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/Apache-2.0"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",alt:"License"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=coverage",alt:"Coverage"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/actions"},(0,s.kt)("img",{parentName:"a",src:"https://github.com/PolymeshAssociation/polymesh-sdk/actions/workflows/main.yml/badge.svg",alt:"Github Actions Workflow"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=alert_status",alt:"Sonar Status"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/issues"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/issues/PolymeshAssociation/polymesh-sdk",alt:"Issues"}))),(0,s.kt)("h2",{id:"polymeshassociationpolymesh-sdk"},"@polymeshassociation/polymesh-sdk"),(0,s.kt)("h2",{id:"polymesh-version"},"Polymesh version"),(0,s.kt)("p",null,"This release is compatible with Polymesh v5.2.0"),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The Polymesh SDK's main goal is to provide external developers with a set of tools that will allow them to build powerful applications that interact with the Polymesh protocol. It focuses on abstracting away all the complexities of the Polymesh blockchain and expose a simple but complete interface. The result is a feature-rich, user-friendly node.js library."),(0,s.kt)("h3",{id:"before-moving-on"},"Before moving on"),(0,s.kt)("p",null,"This document assumes you are already familiar with ",(0,s.kt)("a",{parentName:"p",href:"https://thesecuritytokenstandard.org/"},"Security Tokens")," in general and ",(0,s.kt)("a",{parentName:"p",href:"https://www.polymath.network/"},"Polymath")," as well as ",(0,s.kt)("a",{parentName:"p",href:"https://polymath.network/polymesh"},"Polymesh")," in particular."),(0,s.kt)("h3",{id:"technical-pre-requisites"},"Technical Pre-requisites"),(0,s.kt)("p",null,"In order to use the Polymath SDK, you must install ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"node")," ","(","version 14",")"," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),". The library is written in ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"typescript"),", but can also be used in plain javascript. This document will assume you are using typescript, but the translation to javascript is very simple."),(0,s.kt)("h3",{id:"documentation"},"Documentation"),(0,s.kt)("p",null,"Token Studio SDK Walkthrough:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developers.polymath.network/token-studio-api-walkthrough/"},"https://developers.polymath.network/token-studio-api-walkthrough/")),(0,s.kt)("p",null,"Polymesh SDK API Reference:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki"},"https://github.com/PolymeshAssociation/polymesh-sdk/wiki")),(0,s.kt)("h3",{id:"how-to-use"},"How to use"),(0,s.kt)("h4",{id:"installation"},"Installation"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"npm i @polymeshassociation/polymesh-sdk --save")),(0,s.kt)("p",null,"Or, if you're using yarn"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add @polymeshassociation/polymesh-sdk")),(0,s.kt)("p",null,"Or, if using pnpm"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pnpm add @polymeshassociation/polymesh-sdk")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE")," it is ",(0,s.kt)("em",{parentName:"p"},"highly")," recommended that you use one of these three package managers. This project uses package resolutions/overrides to pin certain problematic dependencies, and these are only supported by the aforementioned package managers. Using a different package manager may result in unexpected behavior"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE"),' if using TypeScript the compiler option "skipLibCheck" should be set to true in your tsconfig.json file'),(0,s.kt)("h4",{id:"initializing-the-client"},"Initializing the client"),(0,s.kt)("p",null,"Before you can start registering Tickers and creating Assets, you have to connect the Polymesh SDK client to a Polymesh node. This is a pretty straightforward process:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { LocalSigningManager } from '@polymeshassociation/local-signing-manager';\n\nasync function run() {\n  const signingManager = await LocalSigningManager.create({\n    accounts: [\n      {\n        seed: 'YOU_WISH',\n      },\n    ],\n  });\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n")),(0,s.kt)("p",null,"Here is an overview of the parameters passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"connect")," function:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nodeUrl")," is a URL that points to a running Polymesh node"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"signingManager")," is an object that complies with the ",(0,s.kt)("inlineCode",{parentName:"li"},"SigningManager")," interface. It holds the Accounts capable of signing transactions, and the signing logic itself. In this example, ",(0,s.kt)("inlineCode",{parentName:"li"},"LocalSigningManager")," is a simple signing manager that holds private keys in memory and signs with them")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE:")," if using the SDK on a browser environment ","(","i.e. with the Polymesh wallet browser extension",")",", you would use the ",(0,s.kt)("inlineCode",{parentName:"p"},"BrowserExtensionSigningManager")," provided by ",(0,s.kt)("inlineCode",{parentName:"p"},"@polymeshassociation/browser-extension-signing-manager")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { BrowserExtensionSigningManager } from '@polymeshassociation/browser-extension-signing-manager';\n\nasync function run() {\n  const signingManager = await BrowserExtensionSigningManager.create('MY_APP_NAME'); // The Polymesh wallet extension will ask the user to authorize MY_APP_NAME for access\n\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n")))}c.isMDXComponent=!0}}]);