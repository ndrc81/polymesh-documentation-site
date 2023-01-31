"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[86806],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(o),p=i,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return o?n.createElement(m,s(s({ref:t},h),{},{components:o})):n.createElement(m,s({ref:t},h))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,s=new Array(a);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},20149:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(87462),i=(o(67294),o(3905));const a={title:"Identity",description:"Identity in Polymesh"},s=void 0,r={unversionedId:"introduction/identity",id:"introduction/identity",title:"Identity",description:"Identity in Polymesh",source:"@site/docs/01-introduction/5-identity.mdx",sourceDirName:"01-introduction",slug:"/introduction/identity",permalink:"/polymesh-documentation-site/docs/introduction/identity",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/01-introduction/5-identity.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Identity",description:"Identity in Polymesh"},sidebar:"defaultSidebar",previous:{title:"POLYX",permalink:"/polymesh-documentation-site/docs/introduction/polyx/"},next:{title:"Governance",permalink:"/polymesh-documentation-site/docs/introduction/governance"}},l={},c=[{value:"&quot;My name is Alice&quot;",id:"my-name-is-alice",level:2},{value:"Polymesh uID: &quot;Who are you?&quot;",id:"polymesh-uid-who-are-you",level:2},{value:"Polymesh account: &quot;What is/are your username(s)?&quot;",id:"polymesh-account-what-isare-your-usernames",level:2},{value:"Attestations: &quot;Show me your ID&quot;",id:"attestations-show-me-your-id",level:2},{value:"Signing keys: &quot;Sign here&quot;",id:"signing-keys-sign-here",level:2},{value:"Portfolios",id:"portfolios",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Polymesh Unique Identity System (PUIS)",id:"polymesh-unique-identity-system-puis",level:2},{value:"Know your customer (KYC)",id:"know-your-customer-kyc",level:2},{value:"Customer due diligence (CDD)",id:"customer-due-diligence-cdd",level:2},{value:"Links",id:"links",level:2}],h={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Identity is a central concept in all of blockchain technology. As it is one of the main concepts, but also because Polymesh has a very specific way of addressing identity, it is valuable to have a more detailed look at it."),(0,i.kt)("p",null,"So, let's dive right into it!"),(0,i.kt)("h2",{id:"my-name-is-alice"},'"My name is Alice"'),(0,i.kt)("p",null,"This deceptively simple-sounding statement is among the first sentences children learn to say and it is among the first statements one learns when studying a new language. This concept is second-nature to human beings."),(0,i.kt)("p",null,'Just as proverbial fish seldom think about water, we seldom find ourselves pondering the meaning of such a statement. But, when we are talking about systems that "prove" certain things, it\'s important to understand exactly what is being proven, and how it is being proven.'),(0,i.kt)("p",null,"Let's avoid confusion about fundamental concepts by deconstructing what was said, consider the challenge of proving it, and the way Polymesh solves the problem."),(0,i.kt)("h2",{id:"polymesh-uid-who-are-you"},'Polymesh uID: "Who are you?"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"natural person",src:o(76301).Z,width:"1917",height:"1740"})),(0,i.kt)("p",null,"One of the first challenges we face when unpacking this topic is that some of the common terms are overloaded with too many meanings in different contexts. Let's make the first distinction."),(0,i.kt)("p",null,"You, dear reader, are the one who is reading this message. You may hear the words in your mind as you absorb their meaning. No matter what you were called, or how many times you change your name, you will always be you. You can do things and you can own things. You can interact with others. You can be accountable for the things you do."),(0,i.kt)("p",null,"Intuitively, you know that someone wrote the words, possibly a team of people. But you also know that this publication comes from The Polymesh Association, and The Polymesh Association, is responsible for what is written here."),(0,i.kt)("p",null,'In the legal and corporate world, corporations are "persons" meaning (approximately) that organisations can own things and do things. Thus, organisations and business entities are often referred to as a ',(0,i.kt)("strong",{parentName:"p"},"juridical person"),", a legal entity that is not an individual ",(0,i.kt)("strong",{parentName:"p"},"natural person"),". The people who work for organisations are generally not individually responsible for things the organisation does. They work within the organisation and they usually have limited authority to act on the organisation's behalf. Indeed, given that an organisation is a legal construct, we can surmise that whenever an organisation acts, it is probably executed by one or more people acting on its behalf or possibly an automated system, that is owned by the organisation and operated by the people who work there."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},'Polymesh "uID"')," (unique ID) can be an individual or an organisation."),(0,i.kt)("p",null,"This brings us to the first important pillar that will support our understanding of Polymesh Identities:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A ",(0,i.kt)("strong",{parentName:"p"},"uID")," represents an individual or an organisation. A uID may control more than one account but no one should have more than one uID.")),(0,i.kt)("h2",{id:"polymesh-account-what-isare-your-usernames"},'Polymesh account: "What is/are your username(s)?"'),(0,i.kt)("p",null,'You, as a person, already use several online services. These could include email, social networks, banks, etc.. For each of those services, you chose or were assigned a username or account. It might be your first and last names. It might be "petrolhead1980". You might in fact have two distinct usernames on the same platform which you use for different purposes. You are in control of these usernames and they represent you digitally. But they are not you the person.'),(0,i.kt)("p",null,"The corresponding on-chain concept in Polymesh is a ",(0,i.kt)("strong",{parentName:"p"},'Polymesh "decentralised ID" (DID)'),", implemented as a large number and representing an account. You may not choose your DID, but it is sufficiently obfuscated to protect your privacy."),(0,i.kt)("p",null,"To express these concepts, we thereafter represent a Polymesh account (identified by its DID) as someone coyly hiding behind a party mask."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alice identity behind her mask",src:o(95853).Z,width:"150",height:"149"})),(0,i.kt)("h2",{id:"attestations-show-me-your-id"},'Attestations: "Show me your ID"'),(0,i.kt)("p",null,"Discussions of ",(0,i.kt)("em",{parentName:"p"},"Identity"),' and what it means can be hampered by the various meanings of the phrase "ID" in other contexts. Clearly, your driver\'s license and passport are not you. They are in your wallet or purse, and you are reading this message. No rational observer would confuse a plastic document for you. When someone asks us to show our ID, this is usually a request for ',(0,i.kt)("strong",{parentName:"p"},"evidence of identity"),"."),(0,i.kt)("p",null,"In social settings, it is usually of no importance to confirm someone's legal name. They may prefer to be called by something else, and that's acceptable in a casual context. We might consider it rude if a new acquaintance challenged our claim about our first name for no apparent reason. In more formal settings, it is important to confirm the facts and we are accustomed to presenting our \"ID\", more precisely documents we have collected over our lifetimes, in order to demonstrate that our claims are indeed factual."),(0,i.kt)("p",null,"Can we say that an ID document provides proof of a fact? Are such documents always accurate? Not necessarily so. If one has moved recently. Details like our home address might be out of date for a time. It would be more accurate to say that an ",(0,i.kt)("strong",{parentName:"p"},"ID document provides evidence"),"."),(0,i.kt)("p",null,"Will any document suffice? It would be more accurate to say that only documents that emerge ",(0,i.kt)("strong",{parentName:"p"},"from known issuers with strict processes")," can provide strong evidence. For this reason, government-issued photo IDs are a common method of identification."),(0,i.kt)("p",null,"If one is presenting a passport as evidence of citizenship, we can say with certainty that the passport office of a certain sovereign state believed, at the time of issuance, that the person's citizenship was as specified in the document and the reason they believed it to be so was because they followed a strict process to arrive at that conclusion. The passport itself is evidence that this took place."),(0,i.kt)("p",null,"Another property of good ID documents is they should be ",(0,i.kt)("strong",{parentName:"p"},"difficult to forge"),". The more forgery-resistant the document is, the stronger the evidence. This is where cryptography shines since there is no known (practical) method of forging cryptographic signatures. We can always say, with near certainty, that someone with knowledge of a given private key must have produced a given signature. The main caveat is that private keys must be kept confidential."),(0,i.kt)("p",null,"We might summarise by saying:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"the strength of the evidence is proportional to the thoroughness of the process, the reputation of the document issuer, and the forgery-resistant nature of the document itself."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"attestation",src:o(36463).Z,width:"1917",height:"803"})),(0,i.kt)("p",null,"What we know about the origination process and the reputation of the issuer tells us what we need to know to evaluate the strength of the evidence in support of the ",(0,i.kt)("em",{parentName:"p"},"claims")," (e.g. date of birth). That assessment is roughly equivalent to the decision to accept or reject an ID document that purports to establish something about the person who is presenting it."),(0,i.kt)("p",null,"In Polymesh, ",(0,i.kt)("em",{parentName:"p"},"descriptive properties of a Polymesh account")," are called ",(0,i.kt)("strong",{parentName:"p"},"attestations"),". An attestation is a statement about the Polymesh account and it is always issued by another account. As we will see, know your customer (KYC) and customer due diligence (CDD) providers execute their own internal processes to confirm the facts and then issue attestations. This enables a Polymesh account to prove something about themselves in (approximately) the following cryptographically provable format:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A known, accountable organisation signed an attestation on a certain day indicating that the account in question represents Alice. This attestation expires on a given date.")),(0,i.kt)("p",null,"Slightly more technically accurate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n    Subject: Alice's Account,\n    Name: Alice,\n    Signed: KYC Provider,\n    Date: January 30, 2021,\n    Expires: January 29, 2022\n}\n")),(0,i.kt)("p",null,"The KYC service provider that contributes the attestation is testifying that they followed their process to reach that conclusion. The attestation is signed in a way that proves it came from someone with knowledge of the KYC service provider's private key. In this way, the existence of the attestation stands as evidence that the process took place, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Name: Alice")," was the result. With this signed attestation in her possession, Alice can present it to anyone at any time. There is no further need to involve the KYC service provider as long as the verifier is satisfied with the attestations Alice can present."),(0,i.kt)("h2",{id:"signing-keys-sign-here"},'Signing keys: "Sign here"'),(0,i.kt)("p",null,"This arrangement maps well to an intuitive understanding of the actual material and legal worlds."),(0,i.kt)("p",null,"Let's consider ACME Corp, an entity with a Polymesh DID. We can know the true legal name of the corporation behind a Polymesh account because a KYC service provider attests that they have reviewed the pertinent documentation, for example, the certificate of incorporation."),(0,i.kt)("p",null,"The organisation can own things and do things. Let's say that Alice works for ACME Corp. Alice is an individual who can own things and do things for herself (via her Polymesh DID) as well as for ACME Corp, being an employee of the organisation. When she is acting on behalf of ACME Corp, within the limits of her authority, she signs, on behalf of ACME Corp, with one of her signing keys that was associated with, and authorised by, ACME Corp. When she is acting on her own behalf, she uses another one of her signing keys, this time associated with her personal Polymesh DID."),(0,i.kt)("p",null,"Adding just a little bit of precision to the foregoing description, an entity has its own Polymesh DID, has zero or more secondary keys, and a primary key. Secondary keys have well-defined permissions outlining what they can do on behalf of the account. Secondary keys and permissions are managed by the primary key."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"signing keys",src:o(76112).Z,width:"1917",height:"943"})),(0,i.kt)("p",null,"Lastly, both primary and/or secondary signing keys may be one of several types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"simple")," private key, based on private knowledge, like a seed or mnemonic, may be sufficiently secure for Alice's routine duties, or"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("em",{parentName:"li"},"multi-signature")," key in that it is based on ",(0,i.kt)("em",{parentName:"li"},"n")," keys, of which ",(0,i.kt)("em",{parentName:"li"},"m"),", the quorum, must agree for any action to be validated.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("a",{href:"/polymesh-docs/network/ledger/"},"Ledger signing hardware")," can be used to safeguard signing keys."),(0,i.kt)("h2",{id:"portfolios"},"Portfolios"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"portfolios",src:o(48526).Z,width:"1917",height:"1620"})),(0,i.kt)("p",null,"Polymesh DIDs optionally organise owned assets into ",(0,i.kt)("strong",{parentName:"p"},"portfolios"),". Portfolios are ",(0,i.kt)("strong",{parentName:"p"},"logical containers")," that provide a way to define permission boundaries as well as organise reporting."),(0,i.kt)("p",null,"For example, Alice might have complete control over the assets in the portfolio she is employed to manage, some control over specific assets in other portfolios or all of the assets in specific portfolios, and no control over other assets beyond her permission boundaries."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Portfolios relate strongly to custody on Polymesh. For a more detailed account, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-docs/primitives/portfolios-custody/"},"Portfolios and Custody")," page.")),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"Polymesh's permission requirements are organised on a method-by-method basis because not all permissions are required in all cases."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Refer to the reference documentation for details on ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-docs/network/permissioned-roles/"},"permissioned roles")," and ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-docs/primitives/authorisations/"},"authorisations"),".")),(0,i.kt)("p",null,"In the most stringent case, the allowable actions are the intersection of the ",(0,i.kt)("strong",{parentName:"p"},"action"),", the ",(0,i.kt)("strong",{parentName:"p"},"portfolio"),", and the ",(0,i.kt)("strong",{parentName:"p"},"asset"),". In some cases, one or more of those properties are not relevant to the action to be undertaken so explicit permission is not required."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"permission",src:o(51305).Z,width:"1917",height:"1162"})),(0,i.kt)("h2",{id:"polymesh-unique-identity-system-puis"},"Polymesh Unique Identity System (PUIS)"),(0,i.kt)("p",null,"Of particular importance in the world of regulated securities is the repelling of so-called ",(0,i.kt)("strong",{parentName:"p"},"Sybil attacks"),". The name is inspired by the 1976 movie of the same name. The main character in the film is a woman who suffers from a multiple personality disorder. The creation of multiple accounts by a single individual in order to circumvent restrictions is known as a Sybil attack."),(0,i.kt)("p",null,"An example of a Sybil attack in the realm of regulated securities could be a single entity accumulating a sizeable stake in the security with the use of multiple Polymesh accounts, while avoiding reporting requirements. The ",(0,i.kt)("strong",{parentName:"p"},"Polymesh Unique Identity System (PUIS)")," is designed to repel this type of attack."),(0,i.kt)("p",null,"There is no prohibition against operating multiple Polymesh accounts with distinct Polymesh DIDs. There are, however, regulatory compliance obligations that fall on investors, depending on jurisdiction. Suffice it say that it is generally not permissible to use multiple accounts to obfuscate reportable holdings of a regulated security. Polymesh provides a mechanism of self-reporting linkage between multiple accounts as well a means of detection."),(0,i.kt)("p",null,"The PUIS is an off-chain process which allows CDD providers to coordinate and determine a ",(0,i.kt)("strong",{parentName:"p"},"unique identifier")," for each entity (individual or organisation) that is onboarded to Polymesh. This database can only be accessed by CDD providers. CDD providers can insert new customers, or query for existing ones by using so-called identity ",(0,i.kt)("em",{parentName:"p"},"fingerprints")," unique to their customer. In this PUIS, the CDD customer's unique identifier, or uID, is a v4 UUID generated once when the customer is onboarded for the first time. It is by this uID that customers are indexed in the PUIS system which is off-chain."),(0,i.kt)("p",null,"Only a Pedersen (cryptographic hash) commitment of the uID is published on-chain as part of the CDD claim. Polymesh users do know their uID and can use this knowledge to reveal to asset issuers if they, the unique entity are investing in an asset under multiple Polymesh DIDs."),(0,i.kt)("p",null,"In this way, the PUIS and CDD process lets investors use multiple Polymesh accounts and maintain a high level of confidentiality while supporting compliance for asset issuers that rely on knowing the unique entities that are invested in their asset."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PUIS",src:o(86044).Z,width:"1917",height:"1740"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To take a closer look at how identity and confidentiality play together in Polymesh, this documentation on ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-docs/primitives/confidential-identity/"},"confidential identity")," includes some more information on PUIS, CDD claims, and the linking of identities.")),(0,i.kt)("h2",{id:"know-your-customer-kyc"},"Know your customer (KYC)"),(0,i.kt)("p",null,"While efforts are underway to establish a worldwide standard, there is no universally accepted process for identifying and vetting individuals and organisations or representing attestations."),(0,i.kt)("p",null,"As such, each originator establishes their own policy covering the information they must know about each investor (or counterparty) and how they must know it, i.e. the process."),(0,i.kt)("p",null,"KYC service providers offer suites of services that implement such policies. Each check has corresponding procedures. For example, individual checks include measures such as consuming/interpreting an image of a passport or driver's license, facial recognition, criminal database checks, etc.. Checks dealing with an organisation include collecting incorporation documents and signing officer signatures. KYC service providers can attest to such matters as investor accreditation, legal name, place of residence, or the legally incorporated status of an organisation."),(0,i.kt)("p",null,"While each originator sets their own policy, considerable overlap is expected. Attestations associated with an investor's Polymesh account can be re-used in other contexts, provided the attestations have not expired and the attestation the account already has is acceptable in terms of form and source."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"know your customer",src:o(38813).Z,width:"1917",height:"1637"})),(0,i.kt)("p",null,"Polymesh is designed to welcome existing KYC service providers into the Polymesh network. The SDK integrates easily with existing systems, which allows KYC service providers to ",(0,i.kt)("strong",{parentName:"p"},"issue on-chain attestations"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information on this topic, prospective KYC service providers should review the admission process described ",(0,i.kt)("a",{parentName:"p",href:"/docs/kyc/know-your-customer/"},"here"),".")),(0,i.kt)("h2",{id:"customer-due-diligence-cdd"},"Customer due diligence (CDD)"),(0,i.kt)("p",null,"Customer due diligence, or CDD, is a minimal KYC attestation that entitles a Polymesh account to interact with the Polymesh network. ",(0,i.kt)("strong",{parentName:"p"},"Functions with material importance")," are ",(0,i.kt)("strong",{parentName:"p"},"restricted")," to accounts that have completed a CDD check with an approved CDD service provider."),(0,i.kt)("p",null,"In this way, it is possible to conduct certain activities with no explicit KYC requirements in a pseudo-anonymous fashion. Even so, it is still true to say that no trading occurs between unidentifiable parties because all accounts must complete customer due diligence before materially important transactions are allowed."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For a more in-depth look at CDD on Polymesh, dive right into ",(0,i.kt)("a",{parentName:"p",href:"/docs/kyc/know-your-customer/"},"Polymesh's CDD"),".")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/identity/"},"Primitives: Identity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/confidential-identity/"},"Primitives: Confidential Identity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/cdd/"},"Primitives: Customer due diligence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/portfolios-custody/"},"Primitives: Portfolios and Custody")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/compliance/"},"Primitives: Compliance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/authorisations/"},"Primitives: Authorizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/polymesh-docs/network/permissioned-roles/"},"Polymesh Network: Permissioned Roles"))))}d.isMDXComponent=!0},36463:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/11_attestation-a3e4e0b216a57d1791b7c4a4e631094f.png"},51305:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/12_permission-e8fe89ae010509891961854d6c9c1dc8.png"},76301:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/16_polymath_uid-baa982efd27ce80848274971f1479eac.png"},48526:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/17_portfolios-1500c681bfd9630f872e06817cc93ff5.png"},86044:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/18_polymesh_unique_id_system-e20d9ce9223dbfab52fdadaeefad1530.png"},38813:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/19_kyc-cbb44db0f458678758ab5aef40cf2901.png"},95853:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},76112:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/signing_keys-59d1ea63dd05640997eeb91830ba199d.png"}}]);