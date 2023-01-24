"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[12165],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return o?i.createElement(f,a(a({ref:t},d),{},{components:o})):i.createElement(f,a({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:n,a[1]=r;for(var c=2;c<s;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},29977:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=o(87462),n=(o(67294),o(3905));const s={title:"Portfolios and Custody",description:"",subsite:"polymesh-docs"},a=void 0,r={unversionedId:"primitives/portfolios-custody",id:"primitives/portfolios-custody",title:"Portfolios and Custody",description:"",source:"@site/polymesh-docs/primitives/portfolios-custody.mdx",sourceDirName:"primitives",slug:"/primitives/portfolios-custody",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/portfolios-custody",draft:!1,tags:[],version:"current",frontMatter:{title:"Portfolios and Custody",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"MultiSig",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/multisig"},next:{title:"Settlement",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/settlement"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Portfolio Diagram",id:"portfolio-diagram",level:2},{value:"Portfolios",id:"portfolios",level:2},{value:"Custody",id:"custody",level:2},{value:"Custody Models",id:"custody-models",level:2},{value:"Custody with Full Control and Ownership",id:"custody-with-full-control-and-ownership",level:3},{value:"Omnibus",id:"omnibus",level:4},{value:"Omnibus Segregation",id:"omnibus-segregation",level:4},{value:"Custody with beneficial interest separated from asset control",id:"custody-with-beneficial-interest-separated-from-asset-control",level:3}],d={toc:c};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In Polymesh, all assets (excluding the network native token POLYX) are held at the identity level. This allows Polymesh to enforce compliance in real time based on claims also held at the identity level."),(0,n.kt)("p",null,"To allow users to organise their assets underneath their identity, and to flexibly assign key permissions and custody, Polymesh has the concept of portfolios."),(0,n.kt)("h2",{id:"portfolio-diagram"},"Portfolio Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Peer to peer",src:o(50841).Z,width:"1894",height:"1547"})),(0,n.kt)("h2",{id:"portfolios"},"Portfolios"),(0,n.kt)("p",null,"Assets can be partitioned into logical portfolios within a single identity."),(0,n.kt)("p",null,"A particular asset can have different balances across portfolios within the same identity."),(0,n.kt)("p",null,"Compliance is applied to the sum of balances across an identities portfolios (it can also be applied across all identities under a ",(0,n.kt)("a",{parentName:"p",href:"./confidential-identity"},"single entity"),")."),(0,n.kt)("p",null,"Permissions for keys can be applied at the portfolio granularity."),(0,n.kt)("p",null,"Portfolios are not related to compliance - i.e. claims remain at the identity level and are shared across all portfolios. Transfer restrictions are at the identity level, not per portfolio."),(0,n.kt)("p",null,"Transfers of assets between portfolios of the same identity should always be possible (provided the identity has a CDD check) and not subject to any compliance rules."),(0,n.kt)("p",null,"Secondary keys are managed at the identity level, but can be granted access to specific portfolios under an identity."),(0,n.kt)("p",null,"The distribution of assets into portfolios, and the association of a portfolio with an identity are publicly stored on-chain."),(0,n.kt)("p",null,"Every identity has a default identity which is used in the case that a specific identity is not specified as part of a transfer or instruction settlement."),(0,n.kt)("h2",{id:"custody"},"Custody"),(0,n.kt)("p",null,"A user can assign custodianship of a portfolio to another identity. This cleanly separates beneficial ownership of an asset (which always stays under the beneficiares identity) used for corporate actions, from custodial ownership where another entity may manage those assets on behalf of their beneficiary."),(0,n.kt)("p",null,"Any assets in a portfolio which has been assigned a custodian are managed exclusively by that custodian, and include any new assets which are transferred into the portfolio."),(0,n.kt)("p",null,"A portfolio can only be assigned to a single custodian at a time. Once assigned to a custodian, the custodian can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"affirm or reject instructions that relate to portfolios managed by the custodian on behalf of the owner")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"revoke their custodianship over the portfolio"))),(0,n.kt)("h2",{id:"custody-models"},"Custody Models"),(0,n.kt)("p",null,"The above features allow for different types of custody model that can be used to meet different use-cases and requirements."),(0,n.kt)("p",null,"The first use-case is when a user wants to delegate the full control and recorded beneficial ownership of assets to a third-party custodian."),(0,n.kt)("p",null,"The second use-case is when a user wants to retain beneficial ownership, but delegate settlement responsibilities to a third-party custodian."),(0,n.kt)("h3",{id:"custody-with-full-control-and-ownership"},"Custody with Full Control and Ownership"),(0,n.kt)("p",null,"Since assets are held at the identity level, this involves transferring the assets from the users identity to the custodians identity."),(0,n.kt)("p",null,"From the perspective of Polymesh this would mean that the custodian is the beneficial owner of the securities. The custodian would require the appropriate attestations in order to hold any assets they are holding in custody."),(0,n.kt)("p",null,"The custodian has full rights over these assets in-protocol. For example they can transfer them to another party."),(0,n.kt)("p",null,"For the purposes of any corporate actions, the custodian would be seen as the beneficial owner of these assets."),(0,n.kt)("p",null,"The custodian identity(s) would require any compliance claims necessary to hold the assets they are custodying. The custodian (or other agent) would need to enforce any underlying compliance for their clients required to own the assets on the issuers behalf."),(0,n.kt)("h4",{id:"omnibus"},"Omnibus"),(0,n.kt)("p",null,"Custodian creates one omnibus portfolio and holds all clients assets in a single portfolio within the corresponding identity."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Omnibus",src:o(89487).Z,width:"540",height:"721"})),(0,n.kt)("p",null,"Whilst this model is very simple and easy to manage it lacks many useful features available in the below more sophisticated approaches."),(0,n.kt)("h4",{id:"omnibus-segregation"},"Omnibus Segregation"),(0,n.kt)("p",null,"Custodian has a single identity and segregates client assets by portfolio (aka sub-accounts)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Omnibus Segregation",src:o(60250).Z,width:"813",height:"423"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Smaller number of keys to manage - since secondary keys can be permissioned at the portfolio level, access to client assets can be flexibly segmented.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clear separation of client funds on-chain.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Primary key can access all client funds."))),(0,n.kt)("p",null,"Note: Omnibus Segregation could be extended to large Asset Managers or Broker-Dealers by creating a separate identity. This identity could be the custodian's identity OR the Asset Manager/Broker-Dealers Identity for which the custodian controls the Primary Key."),(0,n.kt)("h3",{id:"custody-with-beneficial-interest-separated-from-asset-control"},"Custody with beneficial interest separated from asset control"),(0,n.kt)("p",null,"In this model the user retains full beneficial interest in their assets, for example for the purposes of dividend payments and corporate actions."),(0,n.kt)("p",null,"Polymesh has dedicated custody functionality for the on-chain settlement of assets."),(0,n.kt)("p",null,"This allows a user, who holds assets in a particular portfolio, to delegate control of that portfolio to a third-party identity, for the purposes of affirming settlements that relate to that portfolio."),(0,n.kt)("p",null,"The custodian can also invest (on behalf of their client) in any STOs using funds from the clients portfolio that they are a custodian of."),(0,n.kt)("p",null,"NB - this follows a similar approach to ERC-2258 as mentioned in:",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"http://www.oecd.org/daf/fin/financial-markets/Regulatory-Approaches-to-the-Tokenisation-of-Assets.pdf"},"http://www.oecd.org/daf/fin/financial-markets/Regulatory-Approaches-to-the-Tokenisation-of-Assets.pdf")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custody Model",src:o(13639).Z,width:"749",height:"367"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The user cannot unilaterally remove a custodian for one of their portfolios - the custodian must relinquish control of the portfolio. This prevents a user who has been \u201chacked\u201d from being vulnerable to having their assets stolen, and means the custodian has full control over those assets.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The beneficial owner, for the purposes of cap tables and corporate actions, remains the investor, not the custodian. So if the issuer were to ask all token holders to vote, each token holder could vote using their own identity without the need for the custodian to intervene/participate.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A user can assign one custodian per portfolio they own. A portfolio can contain any number of different assets."))))}p.isMDXComponent=!0},50841:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/custody-9fd678339859fea00db85abc2eaff36f.png"},13639:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/custody_model-39ca4058f1f06e154a435b0bc0b83e28.png"},89487:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/omnibus-6c8be573b1b45328401e2e9196dd8698.png"},60250:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/omnibus_segregation-dbbb6cbb255177d174449b93601a57d4.png"}}]);