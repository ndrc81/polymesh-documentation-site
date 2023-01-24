"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[41528],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(i),h=a,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return i?n.createElement(g,r(r({ref:t},p),{},{components:i})):n.createElement(g,r({ref:t},p))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},46593:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const s={title:"MultiSig",description:"",subsite:"polymesh-docs"},r=void 0,o={unversionedId:"primitives/multisig",id:"primitives/multisig",title:"MultiSig",description:"",source:"@site/polymesh-docs/primitives/multisig.mdx",sourceDirName:"primitives",slug:"/primitives/multisig",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/multisig",draft:!1,tags:[],version:"current",frontMatter:{title:"MultiSig",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Identity",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/identity"},next:{title:"Portfolios and Custody",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/portfolios-custody"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Creating a MultiSig",id:"creating-a-multisig",level:2},{value:"Step 1 - Setting Up Accounts",id:"step-1---setting-up-accounts",level:3},{value:"Step 2 - Creating A MultiSig",id:"step-2---creating-a-multisig",level:3},{value:"Step 3 - Accepting Signer Authorizations",id:"step-3---accepting-signer-authorizations",level:3},{value:"Step 4 - Setting MultiSig As Primary Key",id:"step-4---setting-multisig-as-primary-key",level:3},{value:"Step 5 - Funding The MultiSig",id:"step-5---funding-the-multisig",level:3},{value:"Step 6 - Using The MultiSig",id:"step-6---using-the-multisig",level:3}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Instead of using an external address as a primary or secondary key on your Polymesh Identity, it is possible to use a MultiSig."),(0,a.kt)("p",null,"MultiSig keys can specify a set of associated signers (",(0,a.kt)("inlineCode",{parentName:"p"},"n")," signers) or which a subset (",(0,a.kt)("inlineCode",{parentName:"p"},"m")," signers) must agree in order to execute an on-chain action."),(0,a.kt)("h2",{id:"creating-a-multisig"},"Creating a MultiSig"),(0,a.kt)("p",null,"In Polymesh, MultiSigs are always created by an existing identity, and will be associated with that identity (the creator) permanently."),(0,a.kt)("p",null,"The primary key of the creating identity can add / remove signers from the MultiSig, and must have a valid CDD claim associated with them."),(0,a.kt)("h3",{id:"step-1---setting-up-accounts"},"Step 1 - Setting Up Accounts"),(0,a.kt)("p",null,"In this tutorial we will create a 2 of 3 MultiSig and set it as the primary key of our Polymesh identity."),(0,a.kt)("p",null,"To begin, we create three new keys, called ",(0,a.kt)("inlineCode",{parentName:"p"},"ITN_ORG_MULTISIG_SIGNER_1/2/3"),". In practice these can be created and secured by three different parties."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Signers",src:i(79464).Z,width:"1670",height:"202"})),(0,a.kt)("p",null,"These keys can be created in the Polymesh Wallet, or using the Polymesh App (",(0,a.kt)("a",{parentName:"p",href:"https://mainnet-app.polymesh.network"},"https://mainnet-app.polymesh.network"),") in the Accounts tab. We've used the latter for this tutorial."),(0,a.kt)("h3",{id:"step-2---creating-a-multisig"},"Step 2 - Creating A MultiSig"),(0,a.kt)("p",null,"We now create the MultiSig key, by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"multiSig::createMultisig")," extrinsic. This can only be called by a Primary Key of an existing Identity."),(0,a.kt)("p",null,"In this tutorial, ",(0,a.kt)("inlineCode",{parentName:"p"},"ITN_ORG")," is the Primary Key of our identity, so we use this key to submit the ",(0,a.kt)("inlineCode",{parentName:"p"},"createMultisig")," transaction."),(0,a.kt)("p",null,"This requires us to pass in the initial set of signers for the MultiSig, and specify how many of those signers are required to agree in order to execute a transaction. We specify the three new keys created in Step 1. here."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Create",src:i(77959).Z,width:"1703",height:"815"})),(0,a.kt)("p",null,"Once this extrinsic has been executed, we can check for the corresponding event which will tell us the address of the newly created MultiSig key."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Event",src:i(37774).Z,width:"815",height:"618"})),(0,a.kt)("p",null,"In this case the MultiSig has an address of ",(0,a.kt)("inlineCode",{parentName:"p"},"2DYhiZ....3zBivp"),". You can add this to your address book in the Polymesh App to make it easier to reference in the future."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Address Book",src:i(26945).Z,width:"900",height:"330"})),(0,a.kt)("p",null,"You should now see this MultiSig account in your list of accounts in the Polymesh App, alongside its balance."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Account",src:i(57592).Z,width:"1644",height:"43"})),(0,a.kt)("h3",{id:"step-3---accepting-signer-authorizations"},"Step 3 - Accepting Signer Authorizations"),(0,a.kt)("p",null,"We now need to accept the authorisation to be a signer on this MultiSig from each of the three signers that we specified in Step 2."),(0,a.kt)("p",null,"To accept these authorisations, we need to know the authorisation ID for each signer to accept. These are emitted when the MultiSig is created as events, or alternatively you can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"identity::authorizations")," storage."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Signer Authorizations",src:i(4250).Z,width:"1696",height:"748"})),(0,a.kt)("p",null,"Once you have the authorization ID you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"multiSig::acceptMultisigSignerAsKey")," from each of the signer accounts with the correct authorization ID (each signer will have a different authorization ID to accept)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Signer Accepting",src:i(83054).Z,width:"1699",height:"420"})),(0,a.kt)("p",null,"NB - when accepting these authorisations, the current primary key of the creating identity will pay for the transactions."),(0,a.kt)("p",null,"At this point your MultiSig is created, and three signing addresses have been associated with it. However your MultiSig has not been associated as a primary or secondary key with an identity yet."),(0,a.kt)("h3",{id:"step-4---setting-multisig-as-primary-key"},"Step 4 - Setting MultiSig As Primary Key"),(0,a.kt)("p",null,"In this tutorial we will rotate the Primary Key of our identity to the new MultiSig we've just created. To do this you can call the extrinsic ",(0,a.kt)("inlineCode",{parentName:"p"},"multiSig::makeMultisigPrimary"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Primary",src:i(15279).Z,width:"1695",height:"453"})),(0,a.kt)("p",null,"Your MultiSig is now the Primary Key of your identity and as a result can hold funds (POLYX)."),(0,a.kt)("p",null,"Note that the original Primary Key (",(0,a.kt)("inlineCode",{parentName:"p"},"ITN_ORG"),") is no longer attached to an Identity (since it was replaced by our new MultiSig). This means that any POLYX on the key will be locked until it is attached to a new CDD'ed Identity."),(0,a.kt)("h3",{id:"step-5---funding-the-multisig"},"Step 5 - Funding The MultiSig"),(0,a.kt)("p",null,"To fund your MultiSig you can just transfer POLYX to it like any other key."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Fund",src:i(92011).Z,width:"1073",height:"415"})),(0,a.kt)("p",null,"If you added the MultiSig to your Address Book, you should now see its updated balance."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MultiSig Fund",src:i(19409).Z,width:"1643",height:"45"})),(0,a.kt)("p",null,"Since the MultiSig is the Primary Key of our identity it will need funds in order to pay for the transactions from its signers."),(0,a.kt)("h3",{id:"step-6---using-the-multisig"},"Step 6 - Using The MultiSig"),(0,a.kt)("p",null,"You can now go ahead and use your MultiSig to execute actions as your identity. For example, suppose we want to create a new asset, we can call ",(0,a.kt)("inlineCode",{parentName:"p"},"asset::createAsset")),(0,a.kt)("p",null,"You will need to first propose this transaction from one of the signers, and then approve it from another signer (since 2 of the 3 signers must agree to execute an action)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Proposal",src:i(31970).Z,width:"1481",height:"935"})),(0,a.kt)("p",null,"When the first signer proposes the transaction, the corresponding event shows the proposal ID which can be used by the second signer when approving the transaction."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Proposal Event",src:i(47618).Z,width:"705",height:"595"})),(0,a.kt)("p",null,"In this case the proposal ID is 1, which we then approve from the second signer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Approve Proposal",src:i(31550).Z,width:"1480",height:"456"})),(0,a.kt)("p",null,"You can now see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"asset::createAsset")," transaction is executed!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Proposal Executed",src:i(89790).Z,width:"706",height:"643"})))}u.isMDXComponent=!0},31970:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/13_create_proposal-806c4a5f0f6a0692c66ced8a6b0bef8d.png"},47618:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/14_proposal_event-9f13cbb2c2c875073f775d87f6a2a3d2.png"},31550:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/15_approve_proposal-999f0de5ca121df97c7ebc3c4fadaa2c.png"},89790:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/16_proposal_executed-af3bbdc626ddedda88808f1a216cd2bf.png"},79464:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/1_multisig_accounts-15167891fc45dac6c52ff35618564bcd.png"},77959:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/2_create_multisig-b0e6b73dbb1b9e03bca70df4c5d25b77.png"},37774:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/3_create_multisig_event-6b91a3f9ef238d61a121985c933c8cb5.png"},26945:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/3a_address_book-b129a1072dc6b5da80d4d116828d00f7.png"},57592:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/4_new_multisig-1ea51317b531d5b9db16eaa7b6e0de1e.png"},15279:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/5_primary_rotate-59f2184f6314a577041a617c9e0f5b74.png"},92011:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/6_fund_multisig-e6c13949c983f64a3c2496038140c12c.png"},19409:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/7_multisig_funded-822e14b4d967de18c314f92bbbef85f4.png"},4250:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/8_accept_multisig_signer_event-97b7d688eed4d615fe65e3479a3d523b.png"},83054:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/9_accept_multisig-cde4f19a80fea51f59d2dc5c19b38bdb.png"}}]);