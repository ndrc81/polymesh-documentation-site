"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[64878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5,title:"Compliance",description:"Defining ownership rules",slug:"/originate/compliance"},a=void 0,s={unversionedId:"originate/compliance",id:"originate/compliance",title:"Compliance",description:"Defining ownership rules",source:"@site/docs/03-originate/compliance.mdx",sourceDirName:"03-originate",slug:"/originate/compliance",permalink:"/polymesh-documentation-site/docs/originate/compliance",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/03-originate/compliance.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Compliance",description:"Defining ownership rules",slug:"/originate/compliance"},sidebar:"defaultSidebar",previous:{title:"Secondary Keys",permalink:"/polymesh-documentation-site/docs/originate/secondary-keys"},next:{title:"With the SDK",permalink:"/polymesh-documentation-site/docs/originate/sdk"}},l={},c=[{value:"Compliance",id:"compliance",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"compliance"},"Compliance"),(0,o.kt)("p",null,"We can see ACME's token on the Token Studio's ",(0,o.kt)("inlineCode",{parentName:"p"},"Your security tokens")," panel. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage token")," and then the ",(0,o.kt)("inlineCode",{parentName:"p"},"Compliance")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"your tokens",src:n(969).Z,width:"726",height:"383"})),(0,o.kt)("p",null,"This is where ACME defines the ",(0,o.kt)("strong",{parentName:"p"},"rules of ownership"),"."),(0,o.kt)("p",null,"Polymesh will ensure that no transfers complete unless these conditions are met. A holder can transfer assets to another account that is non-compliant, but the transaction will remain in a pending state until the compliance requirements are met or the sender cancels the transfer."),(0,o.kt)("p",null,"Take a moment to explore the options. There are rules for lock-ups and KYC service providers. The rules can be constructed with comparators (is, is not, is one of, is none of) and these can be combined with jurisdictions and other conditions. This flexible rule-driven system means distinct compliance rules and service providers can apply within each jurisdiction. More than one rule can apply."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"compliance rules",src:n(33725).Z,width:"1206",height:"831"})),(0,o.kt)("p",null,"To keep this simple, we will let ACME be the KYC service provider. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add provider"),". The Add new attestation provider panel appears. From there, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add my own Polymesh ID"),". Accept the defaults, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add and sign"),"."),(0,o.kt)("p",null,"We can see that ACME is an approved attestation provider for the ACME preferred equity token."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"token kyc",src:n(12571).Z,width:"1373",height:"592"})),(0,o.kt)("p",null,"Let's suppose that ACME wishes to exempt primary issuances and to create two compliance rules. The rules will be that all token owners must have attestations from the KYC service provider and that they must not be located in Liechtenstein."),(0,o.kt)("p",null,"Delete what is not needed and add rules until your screen looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"compliance rules",src:n(95303).Z,width:"1317",height:"793"})),(0,o.kt)("p",null,"Submit the changes and sign as ACME."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations! You have defined regulatory compliance rules.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Compliance rules are defined at the ",(0,o.kt)("strong",{parentName:"p"},"token level")," and are enforced by the Polymesh network."))}d.isMDXComponent=!0},969:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04-your-tokens-28deed82c776f391208f12e5687a3e12.png"},33725:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/05-compliance-rules-e78d72f04c8eb889a17ae3f8c0aa59ee.png"},12571:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/07-token-kyc-0e7c92b53a501095e94680d00fa4d1aa.png"},95303:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/08-rules-a0f40cd2072965e87a437c9764277adc.png"}}]);