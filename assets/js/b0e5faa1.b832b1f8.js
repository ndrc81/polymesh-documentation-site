"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[26245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,title:"Origination Process",description:"Originating assets with Polymesh",slug:"/originate/origination-process/"},s=void 0,r={unversionedId:"originate/originate-introduction",id:"originate/originate-introduction",title:"Origination Process",description:"Originating assets with Polymesh",source:"@site/docs/03-originate/originate-introduction.mdx",sourceDirName:"03-originate",slug:"/originate/origination-process/",permalink:"/polymesh-documentation-site/docs/originate/origination-process/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/03-originate/originate-introduction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Origination Process",description:"Originating assets with Polymesh",slug:"/originate/origination-process/"},sidebar:"defaultSidebar",previous:{title:"Creating Assets",permalink:"/polymesh-documentation-site/docs/originate/creating-asset/"},next:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/originate/dashboard"}},l={},c=[{value:"Security token design",id:"security-token-design",level:2},{value:"The token type",id:"the-token-type",level:3},{value:"The token lifecycle",id:"the-token-lifecycle",level:3},{value:"The token owner",id:"the-token-owner",level:3},{value:"The token external agents",id:"the-token-external-agents",level:3},{value:"The underlying asset",id:"the-underlying-asset",level:2},{value:"Ownership of the asset",id:"ownership-of-the-asset",level:3},{value:"The asset lifecycle",id:"the-asset-lifecycle",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Links",id:"links",level:2}],h=(p="OverviewVideoBox",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(h,{title:"Originating an asset",videoId:"Wyp6ljYhm4w",mdxType:"OverviewVideoBox"},(0,a.kt)("p",null,"Watch this webcast episode on the process of originating an asset. How Polymesh is built for security token issuance and what you need to do when working with securities. Adam and Nick explain how assets are originated on Polymesh and discuss the technical and business challenges Polymesh solves."),(0,a.kt)("p",null,"You can watch ",(0,a.kt)("a",{parentName:"p",href:"/docs/resources/polymesh-webcast"},"the whole talk")," in one go or pick the parts related to each section of the documentation.")),(0,a.kt)("p",null,"Polymesh makes it exceptionally simple to originate a regulated security. There is more than one way to execute the process and your implementation decisions will usually be based on scale."),(0,a.kt)("p",null,"For example, a business may only occasionally issue new securities, in which case the intuitive manual approach will be sufficient. Service providers who routinely issue securities for their clients may wish to eliminate repetition. In this case, create an integration with internal systems and automate the process. The Token Studio found in the Polymesh Dashboard is an example of an integration created with the SDK."),(0,a.kt)("p",null,"Before we go through a simple practical exercise, let's explore the overall asset representation and the origination process."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"security tokens",src:n(26144).Z,width:"1917",height:"1498"})),(0,a.kt)("h2",{id:"security-token-design"},"Security token design"),(0,a.kt)("h3",{id:"the-token-type"},"The token type"),(0,a.kt)("p",null,"The type of a security token asset is represented on Polymesh by its ",(0,a.kt)("strong",{parentName:"p"},"ticker")," registration. This is a 12 character-long, and unique, identifier. If the name reminds you of a ticker as found on a stockmarket, this is intentional. It is expected that certain names are more valuable than others, in the same way that ",(0,a.kt)("inlineCode",{parentName:"p"},".com")," domains are. Therefore, Polymesh implements an optional reservation mechanism, whereby one can reserve a ticker name for 60 days, as of the time of writing. At any time during these 60 days, the owner of this ticker reservation can cancel the reservation or create the token proper, i.e. ",(0,a.kt)("strong",{parentName:"p"},"originate")," it."),(0,a.kt)("p",null,"At origination, there are some considerations available, among others:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the asset type,"),(0,a.kt)("li",{parentName:"ul"},"attached ",(0,a.kt)("strong",{parentName:"li"},"documentation")," and other metadata,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"extra compliance requirements")," of eventual asset owners, and"),(0,a.kt)("li",{parentName:"ul"},"whether the represented ",(0,a.kt)("strong",{parentName:"li"},"asset")," can be sub-divided, or not, think one company share.")),(0,a.kt)("p",null,"For added flexibility and cross-referencing, an asset can also be identified by ",(0,a.kt)("strong",{parentName:"p"},"external identifiers"),". Such are ISINs, CUSIPs, CINs, LEIs, and DTIs, on top of the ticker."),(0,a.kt)("h3",{id:"the-token-lifecycle"},"The token lifecycle"),(0,a.kt)("p",null,"The token reservation and origination are not the only available operations for security tokens. Here is a non-exhaustive ",(0,a.kt)("strong",{parentName:"p"},"list of other operations")," in the token's lifecycle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the token information;"),(0,a.kt)("li",{parentName:"ul"},"Token ownership transfer;"),(0,a.kt)("li",{parentName:"ul"},"Issuance of assets;"),(0,a.kt)("li",{parentName:"ul"},"Initial distribution of assets;"),(0,a.kt)("li",{parentName:"ul"},"Exchange of assets;"),(0,a.kt)("li",{parentName:"ul"},"Corporate actions related to the asset such as dividend payments, capital distributions, and corporate ballots.")),(0,a.kt)("p",null,"All these can be ",(0,a.kt)("strong",{parentName:"p"},"managed through the asset base layer logic in Polymesh"),". Of note is that the documentation content, although referenced on the blockchain by link or by content hash, is not actually stored on-chain."),(0,a.kt)("h3",{id:"the-token-owner"},"The token owner"),(0,a.kt)("p",null,"The originator of a token is, quite naturally, the token's initial owner by default and they are assigned permissions for full control over the token. Eventually, because of the importance of this ownership role, it is expected that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The token owner will be held by a multi-signature account."),(0,a.kt)("li",{parentName:"ul"},"The token owner will be called upon for rare and higher-level tasks, typically to appoint and revoke or modify permissions for external agents.")),(0,a.kt)("p",null,"Polymesh was built with such a vision in mind. A multi-signature account could, for instance, be the expression of a quorum of the board of directors of a company."),(0,a.kt)("h3",{id:"the-token-external-agents"},"The token external agents"),(0,a.kt)("p",null,"Given the scope of possible operations that affect a token over its lifecycle, and to limit the need to use the token owner with full permissions, it is only natural to delegate responsibilities to specialized parties that act on behalf of the token owner, a.k.a. external agents. Each external agent is entrusted with, and restricted to, certain specific operations. Well-defined responsibilities assigned to external agents map to real world roles, such as primary issuance agent (PIA) or corporate actions agent (CAA). Polymesh lets you tailor agents' responsibilities and permissions through ",(0,a.kt)("a",{parentName:"p",href:"/docs/settlement/settlement-agents/"},"external agent permission groups"),"."),(0,a.kt)("p",null,"There is a special permission group for external agents that gives all rights over a token. It helps discussion to call those assigned those permission the token owner. As previously discussed the originator of a token is the default owner. It is possible to assign full permissions to additional identities and also to remove those permissions for the originator. To avoid a case of ",(0,a.kt)("em",{parentName:"p"},"orphan")," tokens, there must always be at least one token owner."),(0,a.kt)("h2",{id:"the-underlying-asset"},"The underlying asset"),(0,a.kt)("p",null,"To help you develop a sense of the permissions, we shall peek ahead at what lies beyond origination."),(0,a.kt)("p",null,"As seen above, the token represents the type of the asset, and is ",(0,a.kt)("em",{parentName:"p"},"owned")," by its originator, or by whomever else they granted full rights on the token to. By contrast, the asset it represents is owned by individual investors' accounts according to token holdings."),(0,a.kt)("h3",{id:"ownership-of-the-asset"},"Ownership of the asset"),(0,a.kt)("p",null,"Two elements determine ",(0,a.kt)("strong",{parentName:"p"},"ownership")," of a token's underlying asset:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The sum of balances of an individual investor's account(s) of said asset. The ",(0,a.kt)("strong",{parentName:"li"},"numerator")," if you will;"),(0,a.kt)("li",{parentName:"ul"},"The total supply of tokens representing ownership of said asset. i.e. the ",(0,a.kt)("strong",{parentName:"li"},"denominator"),".")),(0,a.kt)("p",null,"When the total supply of tokens increases, it is called ",(0,a.kt)("strong",{parentName:"p"},"issuance"),". The account responsible for issuance is commonly called the ",(0,a.kt)("strong",{parentName:"p"},"primary issuance agent (PIA)"),". The owner of the token itself can act as a PIA, but this role can be delegated by the owner to an external agent."),(0,a.kt)("p",null,"As with so many actions in Polymesh, the targeted external agent account needs to accept the role delegation for it to become effective."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Whether an asset can be transferred, or owned at all, is called ",(0,a.kt)("strong",{parentName:"p"},"compliance")," and is automatically enforced on-chain by Polymesh. In effect, for an action to take place, all involved accounts must have attestations that satisfy the rules defined by the token originator for that action. Skip ahead to the section about ",(0,a.kt)("a",{parentName:"p",href:"../compliance/"},"Compliance")," for details about this.")),(0,a.kt)("h3",{id:"the-asset-lifecycle"},"The asset lifecycle"),(0,a.kt)("p",null,"We have seen that the token has a lifecycle. The ",(0,a.kt)("strong",{parentName:"p"},"underlying asset has a lifecycle of its own"),". Here is the typical list of operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issuance to the PIA, or minting, i.e. changing the total supply;"),(0,a.kt)("li",{parentName:"ul"},"Transfer from the PIA to other accounts;"),(0,a.kt)("li",{parentName:"ul"},"Transfer between accounts, i.e. changing the distribution of the supply.")),(0,a.kt)("p",null,"Those too are managed through the asset base layer logic in Polymesh."),(0,a.kt)("p",null,"Other actions address rare cases such as the forcible return of the asset to the primary issuance agent. For the avoidance of doubt, issuance to the PIA bypasses the compliance step."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"You know that a ticker can be reserved before the token is created with finalized parameters."),(0,a.kt)("p",null,"Let's see how this looks in the Token Studio exercise where you originate your very own ACME token."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/assets/"},"Asset Documentation")),(0,a.kt)("li",{parentName:"ul"},"For developers, the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.polymesh.live/pallet_asset/index.html"},"asset pallet documentation"))))}d.isMDXComponent=!0},26144:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/security_tokens-7ac05f95932001790ec05b6a383c3646.png"}}]);