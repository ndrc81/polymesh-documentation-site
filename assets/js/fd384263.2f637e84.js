"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[6289],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(i),h=n,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return i?r.createElement(m,s(s({ref:t},d),{},{components:i})):r.createElement(m,s({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<o;l++)s[l]=i[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},11274:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const o={title:"Customer Due Diligence",description:"",subsite:"polymesh-docs"},s=void 0,a={unversionedId:"primitives/cdd",id:"primitives/cdd",title:"Customer Due Diligence",description:"",source:"@site/polymesh-docs/primitives/cdd.mdx",sourceDirName:"primitives",slug:"/primitives/cdd",permalink:"/polymesh-docs/primitives/cdd",draft:!1,tags:[],version:"current",frontMatter:{title:"Customer Due Diligence",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Authorisations",permalink:"/polymesh-docs/primitives/authorisations"},next:{title:"Compliance",permalink:"/polymesh-docs/primitives/compliance"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"CDD Service Providers",id:"cdd-service-providers",level:2},{value:"CDD Claims",id:"cdd-claims",level:2}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Polymesh has a unique on-boarding Customer Due Dilgence (CDD) process that leverages a federation of professional KYC companies to quickly and easily on-board users, whilst providing the network and its participants stronger security. Given the domain of Polymesh is regulated assets and capital markets, this allows investors, institutions and other users to interact with confidence on Polymesh, strengthing its value and aiding ecosystem adoption."),(0,n.kt)("p",null,"Every transaction that is executed on-chain in Polymesh must be associated with an identity that has a valid CDD claim. To be valid a CDD claim must be issued by one of a group of permissioned identities representing professional KYC companies."),(0,n.kt)("p",null,"To on-board into Polymesh, a user must go through a simple due diligence process with a Polymesh CDD service provider - that CDD service provider will then create the users identity and attach a CDD claim."),(0,n.kt)("p",null,"These checks for a valid CDD claim are performed as part of the networks pre-processing checks. This ensures that a transaction without a valid CDD claim cannot even pay a network fee for a failed transaction - they have no ability to interact with the network, including paying fees. This gives operators the confidence that all on-chain transactions are associated with a CDD'ed identity, including failed transactions."),(0,n.kt)("h2",{id:"cdd-service-providers"},"CDD Service Providers"),(0,n.kt)("p",null,"CDD Service Providers in Polymesh are permissioned. This means that if an organisation wants to offer Polymesh users a CDD service, they must be approved through the on-chain governance process. A Polymesh Improvement Proposal would be created to add the new CDD service provider to the list of permissioned CDD service providers on-chain."),(0,n.kt)("p",null,'Similarily to remove an existing CDD service provider, on-chain governance would enact a proposal to remove their identity from the on-chain list of permissioned CDD service providers. When an existing CDD service provider is removed, the governance process can set a "sunset" window, during which their previously issued CDD claims are valid, but they cannot issue new ones. This allows users to receive a CDD claim from an alternative CDD service provider, and not lose access to the network.'),(0,n.kt)("h2",{id:"cdd-claims"},"CDD Claims"),(0,n.kt)("p",null,"CDD claims are issued by the networks trusted CDD service providers. They would typically have a 6 month expiry, meaning customers need to re-authenticate with the CDD service provider every 6 months to maintain access to the network."),(0,n.kt)("p",null,"An identity must always have a valid CDD claim if it wishes to be able to interact with the network. It may have more than one valid CDD claim, for example if they have KYC'ed with two separate CDD service providers. This provides some additional redundancy if a CDD service provider is removed from the trusted list of providers."),(0,n.kt)("p",null,"A user can also have multiple identities. In this case each identity must have a valid CDD claim, although these could be issued by the same CDD service provider meaning the user only needs to KYC once. These identities (from the same entity) are tied together using Polymesh Confidential Identity Mechanism - see the next section for details."))}p.isMDXComponent=!0}}]);