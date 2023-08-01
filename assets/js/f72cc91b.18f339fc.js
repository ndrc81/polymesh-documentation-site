"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[69784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||s;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={sidebar_position:3,title:"Token Studio Dashboard",description:"Distribute assets with no code"},o=void 0,r={unversionedId:"distribute/with-dashboard",id:"distribute/with-dashboard",title:"Token Studio Dashboard",description:"Distribute assets with no code",source:"@site/docs/04-distribute/with-dashboard.mdx",sourceDirName:"04-distribute",slug:"/distribute/with-dashboard",permalink:"/docs/distribute/with-dashboard",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/04-distribute/with-dashboard.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Token Studio Dashboard",description:"Distribute assets with no code"},sidebar:"defaultSidebar",previous:{title:"Distribution Process",permalink:"/docs/distribute/distribution-process/"},next:{title:"With the SDK",permalink:"/docs/distribute/with-sdk"}},l={},c=[{value:"Exercise",id:"exercise",level:2},{value:"Mint tokens",id:"mint-tokens",level:2},{value:"Summary",id:"summary",level:2},{value:"Links",id:"links",level:2}],d=(p="YoutubePlayer",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const h={toc:c};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{videoId:"IwyXvbk11nw",mdxType:"YoutubePlayer"}),(0,a.kt)("h2",{id:"exercise"},"Exercise"),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/docs/originate/dashboard"},"Origination")),", ACME originated an asset. No shares exist yet."),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/docs/originate/secondary-keys"},"Secondary keys")),", we created distinct accounts for Alice and ACME, and Alice created a secondary key to use when she signs on behalf of ACME as the CEO."),(0,a.kt)("p",null,"Now, it's time to create some shares and distribute them."),(0,a.kt)("p",null,"To keep matters simple, let's suppose that Alice will receive 20,000 shares of a planned 100,000."),(0,a.kt)("p",null,"In practice, the distribution agent may be external to the company that issues the security tokens. Again, to keep matters simple, ACME will serve as its own distribution agent. When the shares are minted, they are initially sent to the distribution agent."),(0,a.kt)("p",null,"In summary:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ACME will issue 20,000 shares;"),(0,a.kt)("li",{parentName:"ol"},"ACME will transfer them to Alice.")),(0,a.kt)("p",null,"As we proceed, you will see how Polymesh assists with ensuring a compliant process."),(0,a.kt)("h2",{id:"mint-tokens"},"Mint tokens"),(0,a.kt)("p",null,"Open the wallet and select ACME's primary key. Then proceed to the dashboard, ",(0,a.kt)("inlineCode",{parentName:"p"},"Explore")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Token Studio"),". The token that was originated is displayed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"token studio",src:n(82412).Z,width:"1048",height:"805"})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage token")," to see the token details."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"manage token",src:n(92324).Z,width:"1051",height:"805"})),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Distribution tab"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"distribution",src:n(45762).Z,width:"1044",height:"808"})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Mint tokens"),". Alice is to receive 20,000 tokens, so we need to mint 20,000 tokens. If more are needed for other distributions or shareholders we could, of course, mint them all now."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mint tokens",src:n(2505).Z,width:"1047",height:"806"})),(0,a.kt)("p",null,"Confirm minting and sign."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For brevity's sake we will not include images of each signature request. You should be accustomed to signing on-chain transactions at this point or you may wish to opt for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Don't ask me for the next 15 minutes")," option that is available each time a signature is required.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"confirm minting",src:n(54246).Z,width:"1044",height:"806"})),(0,a.kt)("p",null,"In a few moments the minting operation is confirmed on the blockchain."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"success",src:n(53996).Z,width:"1046",height:"805"})),(0,a.kt)("p",null,"When the tokens have been issued, they will be in the ",(0,a.kt)("strong",{parentName:"p"},"custody of the distribution agent")," which ",(0,a.kt)("strong",{parentName:"p"},"defaults to the originator"),", so ACME."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"agent balance",src:n(30488).Z,width:"1047",height:"808"})),(0,a.kt)("p",null,"Now it is time for the distribution agent, which is ACME, to distribute the tokens. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Distribute"),"."),(0,a.kt)("p",null,'Each investor has a unique uID scope which the system suggests for you. The Polymesh Unique ID System records investor uniqueness claims. This is to detect cases where an individual attempts to use multiple accounts to avoid reporting requirements. These on-chain uniqueness claims work in concert with CDD and records, on chain, hashes that don\'t leak metadata about the investors but aim to identity accounts that are, in fact, controlled by the same investor. As a matter of course, each holder of a given token will create a "uID scope" for each token in their portfolio.'),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Create uID"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create uID",src:n(85239).Z,width:"1046",height:"808"})),(0,a.kt)("p",null,"In a few moments the process is confirmed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"uID scope success",src:n(55264).Z,width:"1043",height:"801"})),(0,a.kt)("p",null,"Now we will create a distribution event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Multiple distributions can be logically grouped into a single event"),', for example "Founder distributions". Since Alice and only Alice will receive shares, let\'s call this event "Alice\'s founder\'s shares".'),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"+ Add new distribution event"),", give the event a name, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add"),"."),(0,a.kt)("p",null,"This distribution will be to a single Polymesh account, Alice. Copy Alice's Polymesh account number (starts with 0x) from Alice's wallet. Be sure to choose Alice's personal account number because that's where ACME should send the shares. Lastly, 20,000 is the amount to send."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The distribution agent may receive a warning to indicate that Alice's account is not compliant at this time. This will occur if the token has compliance rules because Alice has not completed KYC for ACME. As ACME, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Compliance")," in the token studio and disable rules for primary distributions.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"20,000 to alice",src:n(98916).Z,width:"1047",height:"806"})),(0,a.kt)("p",null,"As always, confirm the transaction and sign."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"confirm distribution",src:n(26735).Z,width:"1046",height:"805"})),(0,a.kt)("p",null,"After a few moments, the distribution confirms."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"distribution success",src:n(87530).Z,width:"1038",height:"798"})),(0,a.kt)("p",null,"Now, when the transaction has confirmed, ACME will see a ",(0,a.kt)("em",{parentName:"p"},"pending")," distribution. Why is this if the transaction has been confirmed?"),(0,a.kt)("p",null,"Unlike most blockchains where transfers are final, a security token cannot be transferred without the consent of the recipient because the receipt may have legal or tax implications and the recipient may not agree. Therefore, the system waits for Alice to ",(0,a.kt)("em",{parentName:"p"},"accept")," the distribution."),(0,a.kt)("p",null,"Switch to Alice's personal Polymesh account by bringing her personal primary key into focus in the wallet. Navigate to the dashboard ",(0,a.kt)("inlineCode",{parentName:"p"},"Portfolios")," tab where Alice's incoming transfer is displayed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"incoming",src:n(87303).Z,width:"1223",height:"654"})),(0,a.kt)("p",null,"Alice needs to create a uID Scope. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Manage uID scopes")," and create a uID scope for the symbol you choose for the ACME shares."),(0,a.kt)("p",null,"The Polymesh Unique ID system helps prevent Sybil attacks on tokens, such as creating multiple accounts under the control of a single entity for the purpose of evading reporting requirements."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create uid scope",src:n(51961).Z,width:"1228",height:"644"})),(0,a.kt)("p",null,"These shares are of upmost importance to Alice and she doesn't want to hold them in her default portfolio. Instead, she wants to create a special portfolio for them - ",(0,a.kt)("strong",{parentName:"p"},"Portfolios")," are ",(0,a.kt)("em",{parentName:"p"},"logical containers that help manage permission or organise holdings"),"."),(0,a.kt)("p",null,"Below holdings, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Portfolio"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create portfolio",src:n(72830).Z,width:"1089",height:"583"})),(0,a.kt)("p",null,'Create a new portfolio called "cold store".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create cold store",src:n(6518).Z,width:"1229",height:"566"})),(0,a.kt)("p",null,"Alice can now accept or reject the incoming transfer. Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept")," next to the incoming transfer, confirm, and sign."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"accept",src:n(18121).Z,width:"1044",height:"502"})),(0,a.kt)("p",null,"In a moment, the shares arrive in the default portfolio."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"accepted",src:n(34724).Z,width:"1112",height:"615"})),(0,a.kt)("p",null,"Now, it is a simple matter of moving Alice's shares from her default portfolio to her cold store portfolio."),(0,a.kt)("p",null,"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send")," button and specify that 20,000 ACME shares should be moved to Alice's cold store portfolio. This happens without the accept/reject flow because there is no change of ownership."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"to cold store",src:n(72509).Z,width:"1229",height:"596"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Success!")),(0,a.kt)("p",null,"Alice has 20,000 ACME shares in her cold store portfolio."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"success",src:n(11240).Z,width:"1118",height:"627"})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Let's briefly summarise:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Tokens are minted by originators and are distributed by distribution agents, which can be the same organisation;"),(0,a.kt)("li",{parentName:"ol"},"Newly minted tokens are held by distribution agents until they are actually distributed;"),(0,a.kt)("li",{parentName:"ol"},"Compliance rules are enforced in the transfer process and transfers will remain in a pending state until either the receiver achieves compliance with the help of a KYC service provider, or the distribution agent cancels the transfer;"),(0,a.kt)("li",{parentName:"ol"},"Compliance rules can be disabled for primary distributions at the originator's discretion;"),(0,a.kt)("li",{parentName:"ol"},"Transfers require the consent of the receiving party;"),(0,a.kt)("li",{parentName:"ol"},"Users can transfer assets between their portfolios in one step. There is no need to accept the transfer because there is no change of ownership.")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dashboard: ",(0,a.kt)("a",{parentName:"li",href:"https://dashboard.polymath.network/"},"https://dashboard.polymath.network/")),(0,a.kt)("li",{parentName:"ul"},"Token studio: ",(0,a.kt)("a",{parentName:"li",href:"https://tokenstudio.polymath.network/"},"https://tokenstudio.polymath.network/"))))}u.isMDXComponent=!0},82412:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/02-token-363379b10c5030e3a939d1d91a5007bf.png"},92324:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03-manage-token-083ebe3cd1d46a6722d0cb47258dc6f9.png"},45762:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/04-distribution-adc01973f4ad7d1f03bacd0a14dae8b8.png"},2505:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/05-mint-4207f2e9285a2f0f246620440d95519a.png"},54246:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/06-confirm-mint-991b6d1b5e44a7dde4fa3aa5b66dd50a.png"},53996:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/08-success-7379744df34bb633a2f1224acee46786.png"},30488:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/09-agents-balance-e439e50a2368343c65e491c90ee040f8.png"},85239:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/10-investor-uid-5118ea7c1c43b9097cb37062290fa9e4.png"},55264:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/11-success-uid-7d23e7501ddaa43b354df59503922284.png"},98916:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/14-to-alice-85ed45937828c2d842715d98ae3db9dd.png"},26735:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/15-confirm-9b0bbeb6843215b76b5eccf75021e07b.png"},87530:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/16-pending-0c610212abfbcf3bb4cad673a7953620.png"},87303:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/18-incoming-7553dc0365f27058cf1f01f827530451.png"},72830:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/19-to-portolio-b91bb6a34de7b52a66ad8b95fe100627.png"},6518:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20-create-cold-store-221c1136433eadb6772709839cb1c224.png"},18121:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/24-accepting-3f8fb4e6cff6db070b63efcec34185e1.png"},51961:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/26-scope-22bbdf599abfcc53e1dd0fe4465feb47.png"},34724:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/28-unassigned-3307c78473d55ae638cde7197e73db39.png"},72509:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/29-to-cold-c554344f55ad1e11e2b40171fee3650b.png"},11240:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/30-stored-732e256387310d8839a78be5ebcb2d9f.png"}}]);