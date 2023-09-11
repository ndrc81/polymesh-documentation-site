"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[69505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:4,title:"Secondary Keys",description:"Assigning authority"},s=void 0,r={unversionedId:"originate/secondary-keys",id:"originate/secondary-keys",title:"Secondary Keys",description:"Assigning authority",source:"@site/docs/03-originate/secondary-keys.mdx",sourceDirName:"03-originate",slug:"/originate/secondary-keys",permalink:"/polymesh-documentation-site/docs/originate/secondary-keys",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/03-originate/secondary-keys.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Secondary Keys",description:"Assigning authority"},sidebar:"defaultSidebar",previous:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/originate/dashboard"},next:{title:"Compliance",permalink:"/polymesh-documentation-site/docs/originate/compliance/"}},l={},c=[{value:"ACME Corporation",id:"acme-corporation",level:2},{value:"Secondary keys",id:"secondary-keys",level:2},{value:"Use another computer or browser",id:"use-another-computer-or-browser",level:2},{value:"Create a secondary key",id:"create-a-secondary-key",level:2},{value:"Transfer token ownership",id:"transfer-token-ownership",level:2},{value:"ACME accepts ownership",id:"acme-accepts-ownership",level:2},{value:"Summary",id:"summary",level:2}],h=(p="YoutubePlayer",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(h,{videoId:"Osb4Dnf8rvI",mdxType:"YoutubePlayer"}),(0,o.kt)("h2",{id:"acme-corporation"},"ACME Corporation"),(0,o.kt)("p",null,"So far we have seen that obtaining the wallet software, verifying your ID and issuing a security token are surprisingly simple. However, the examples given were somewhat simplistic to avoid complicating matters with adjacent concerns."),(0,o.kt)("p",null,"Now, we will transition to a somewhat ",(0,o.kt)("strong",{parentName:"p"},"more realistic example"),"."),(0,o.kt)("p",null,"You may have noticed that Alice originated a security token. In all probability this is not precisely what she wants to do. She is possibly doing the work, but it is her company and not herself that would originate a security. In other words, Alice does the work but the token should be issued by ACME and not Alice, personally."),(0,o.kt)("p",null,"Let's resolve this."),(0,o.kt)("h2",{id:"secondary-keys"},"Secondary keys"),(0,o.kt)("p",null,"The goal is that ACME should be an ",(0,o.kt)("strong",{parentName:"p"},"identified organisation")," that has passed customer due diligence and Alice has, in addition to her personal wallet, a ",(0,o.kt)("strong",{parentName:"p"},"signing key")," to use when she represents ACME in her capacity as CEO."),(0,o.kt)("p",null,"There is more than one way to do this. Alice, can, for example, create another key for ACME. With that key in focus (click the blue circle to the left of the unassigned key), complete ",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart/verification-with-cdd"},"customer due diligence"),". This will create a new primary key and a new account. Then, create a secondary key for the CEO and assign it to the new account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alice and secondary keys",src:n(17644).Z,width:"1917",height:"1286"})),(0,o.kt)("p",null,"Why would you do that? Key management policy is unique to each organisation, but it is anticipated that organisations will not want to use their primary keys for ordinary operations even for the CEO. That is to say, the CEO should use a secondary key known only to the CEO, and not the primary key that can assign and unassign secondary keys to the account and set permissions."),(0,o.kt)("p",null,"Alice could dismiss the preceding suggestion and do it all from one wallet, i.e. wearing all of the hats and the end result would look approximately like the illustration below, which is perfectly acceptable for practice and learning. Alice has primary keys for herself, for ACME Corp, and a CEO key she would use for most ACME-related activities."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"all three keys",src:n(74267).Z,width:"325",height:"598"})),(0,o.kt)("p",null,"Let's instead proceed as though ACME and Alice are indeed ",(0,o.kt)("strong",{parentName:"p"},"separate entities"),". Possibly ACME existed before Alice became CEO and ACME's keys are managed by separate personnel. How would that work?"),(0,o.kt)("h2",{id:"use-another-computer-or-browser"},"Use another computer or browser"),(0,o.kt)("p",null,"Let's suppose that the ACME account is managed by someone other than Alice. We can simulate this by using a different computer. This procedure closely matches a real-world scenario where these activities would indeed occur separately. For this, the following is necessary:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"/docs/quickstart/wallet/"},"wallet")," and PID for ACME;"),(0,o.kt)("li",{parentName:"ol"},"Complete ",(0,o.kt)("a",{parentName:"li",href:"/docs/quickstart/verification-with-cdd"},"customer due diligence"),";"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/quickstart/quickstart-polyx"},"Get some POLYX")," (ACME will need some too).")),(0,o.kt)("p",null,"Below, you can see ACME has been verified and has some POLYX."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"assign key",src:n(55658).Z,width:"1066",height:"329"})),(0,o.kt)("h2",{id:"create-a-secondary-key"},"Create a secondary key"),(0,o.kt)("p",null,"ACME can assign a key but Alice will have to supply it to them. More precisely, Alice will provide the public information but not the private signing key, which means that ACME cannot sign on her behalf. ACME can determine the scope of the CEO's, Alice, permission within ACME but only Alice can actually sign as CEO."),(0,o.kt)("p",null,"Returning to Alice's wallet, simply click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add a key")," and follow the usual procedure. Give the key a name that will help Alice remember what the key is for, e.g. ACME CEO. The result will be that Alice has a second, unassigned key. ",(0,o.kt)("strong",{parentName:"p"},"Don't")," assign this key."),(0,o.kt)("p",null,"There is nothing Alice can do to associate the key she just made with ACME, an account she doesn't control. Instead, let's say that Alice provides the public key to ACME through an off-chain communication channel and ACME adds it to ",(0,o.kt)("em",{parentName:"p"},"their account")," on their own authority."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can create the ACME primary in the same wallet Alice uses. Add a key, and ",(0,o.kt)("strong",{parentName:"p"},"don't")," assign the key to Alice's account. Instead, bring the new key into focus, proceed to the dashboard, and create a new account.")),(0,o.kt)("p",null,"In case that is unclear, the flow would be:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ACME exists and is managed by ACME personnel;"),(0,o.kt)("li",{parentName:"ol"},"Alice is appointed CEO;"),(0,o.kt)("li",{parentName:"ol"},"As part of ACME's onboarding process, ACME asks Alice for a key;"),(0,o.kt)("li",{parentName:"ol"},"Alice generates a key (pair) for this purpose and gives the address to ACME;"),(0,o.kt)("li",{parentName:"ol"},"ACME adds the address to their account. They would also manage permissions.")),(0,o.kt)("p",null,"As we will see below, Alice's consent will be required for step 5 in the business process."),(0,o.kt)("p",null,"Now that ACME has the key Alice provided, return to ACME's wallet and dashboard, navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," tab and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Assign a key"),". You will see that the UI permits the operator to paste ",(0,o.kt)("em",{parentName:"p"},"any")," Polymesh key into the form. Paste Alice's key there, give the account a nickname, e.g. Alice (our CEO), and verify the transaction."),(0,o.kt)("p",null,"Of course, ACME cannot do that without Alice's consent. After all, it is Alice's key."),(0,o.kt)("p",null,"Back to Alice's wallet, dashboard, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Accounts")," tab, see that Alice is informed that ACME wants to assign ",(0,o.kt)("em",{parentName:"p"},"her key")," to ",(0,o.kt)("em",{parentName:"p"},"their account"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Press the icon to the left of Alice's secondary key to bring the correct account into focus. This is how Alice chooses the key to use for signing at any given time. The header information in the wallet changes to reflect this and the web UI senses the change and refreshes to display the new context.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"images",src:n(5725).Z,width:"2638",height:"898"})),(0,o.kt)("p",null,"Since Alice is the CEO and gave ACME her key for this purpose, she expects this and, after checking the requesting account, approves the assignment."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ceo",src:n(50528).Z,width:"1049",height:"639"})),(0,o.kt)("p",null,"Alice's wallet will now have ",(0,o.kt)("strong",{parentName:"p"},"two signing keys"),", one for her personal concerns and one to use in her capacity as CEO. The wallet will change as she switches between these roles. Here, her personal signing key is in focus. The header and the accounts page on the dashboard reflect this context - this is Alice's personal account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alice&#39;s ceo key",src:n(50528).Z,width:"1049",height:"639"})),(0,o.kt)("p",null,"She can change context by clicking on the little blue circle to the left of ACME CEO. This brings the CEO signing key into focus. Notice that the header region of the wallet updates to reflect this, and the accounts website refeshes immediately to show the ACME account where she is a signer."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ceo context",src:n(77105).Z,width:"1029",height:"649"})),(0,o.kt)("h2",{id:"transfer-token-ownership"},"Transfer token ownership"),(0,o.kt)("p",null,"Alice and ACME are established as separate identities, and Alice's wallet gives her access to her personal accounts as well as the key she uses to sign as ACME's CEO when she needs to."),(0,o.kt)("p",null,"Now would be a good time for her to ",(0,o.kt)("strong",{parentName:"p"},"issue the security")," as ACME's CEO."),(0,o.kt)("p",null,"Of course, if you've been following along then Alice herself already originated an asset, which is purportedly preferred equity in ACME. This situation could easily happen in reality. For example, founders might enthusiastically create an asset and then later realise that the asset was originated by the wrong entity - an individual rather than the new company. Indeed, individuals might want to reserve symbols before the legal inception of the new company."),(0,o.kt)("p",null,"Alice's token is ",(0,o.kt)("strong",{parentName:"p"},"not fully configured")," and ",(0,o.kt)("strong",{parentName:"p"},"no shares have been distributed"),", so the solution is as simple as ",(0,o.kt)("strong",{parentName:"p"},"transferring ownership")," to ACME. ACME will take over from here."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Token Management"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Security Token Details"),", and scroll down to ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Token Management"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"token details",src:n(77390).Z,width:"966",height:"818"})),(0,o.kt)("p",null,"Paste ACME's account number into the new owner field and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer ownership"),". The number is that of the account Alice's (the CEO) key signs for, not Alice's personal key. It starts with 0x. In the wallet, it will be highlighted with a light background colour and you can copy it with the mouse without switching signing accounts."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember that the signer must be the current owner, Alice.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"transfer token ownership",src:n(71945).Z,width:"545",height:"438"})),(0,o.kt)("p",null,"When you click ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer ownership"),", the site will explain that ACME's consent is required before the transfer will be executed."),(0,o.kt)("p",null,"Confirm the transaction and sign, as Alice, in the usual way."),(0,o.kt)("p",null,"After a few moments the option will change to ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel ownership transfer"),", which you can still do until ACME accepts the transfer. The pending status is indicated."),(0,o.kt)("h2",{id:"acme-accepts-ownership"},"ACME accepts ownership"),(0,o.kt)("p",null,"Use the computer with ACME's primary key and navigate to the Token Studio."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"accept",src:n(11256).Z,width:"1143",height:"690"})),(0,o.kt)("p",null,"ACME can either accept or reject this incoming ownership transfer. Accept, of course."),(0,o.kt)("p",null,"Permission to accept or reject such proposals is something ACME can delegate to secondary accounts. The permission system is granular and organised around logical containers and functional concerns. To keep it simple for now, we used ACME's primary key which surely has sufficient permission."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"ACME will need some POLYX to pay transaction fees. If they don't already have some, they should ",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart/quickstart-polyx"},"get some free Testnet POLYX"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations! You have transferred ownership of the token management to ACME.")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Accounts can delegate authority to other users using secondary keys. Users can generate secondary keys for each area of responsibility and safely provide others with the public-facing identifiers. Users can assign keys that belong to other users to their own account, but only if the owners of those keys (who exclusively have the private keys) consent to the assignment."))}u.isMDXComponent=!0},55658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-assign-key-3d6b3bed0ab8ff11af06706f44e9e5ce.png"},77390:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-token-details-3ed5eb787637fab6db17228c10ea740e.png"},5725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-approve-assignment-35d33de158d8157aa1c9acd0786a071b.png"},71945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-transfer-ownership-d17440cf9377ba9402e0d985e0f7a0e8.png"},50528:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-CEO-8cefe120c5fdb3fff97f4cbca2299dea.png"},11256:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-accept-token-ownership-8b8a27534d3fc163aad6e0b6a65a1686.png"},77105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-ACME-context-0ca3baa3506baf8109ba4debd60c7d9e.png"},74267:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/30-three-keys-2a745ab3a1ba083c3d37ea883022ba2d.png"},17644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/primary_secondary_keys-738a25313b37b8bed4d3665479c9cf26.png"}}]);