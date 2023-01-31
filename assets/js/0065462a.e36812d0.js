"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[51387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=l(a),m=o,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||s;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[h]="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const s={sidebar_position:5,title:"Whitelabel Token Manager",description:"Example of a token manager",slug:"/actions/token-manager/"},i=void 0,r={unversionedId:"actions/token-manager",id:"actions/token-manager",title:"Whitelabel Token Manager",description:"Example of a token manager",source:"@site/docs/06-actions/token-manager.mdx",sourceDirName:"06-actions",slug:"/actions/token-manager/",permalink:"/polymesh-documentation-site/docs/actions/token-manager/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/06-actions/token-manager.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Whitelabel Token Manager",description:"Example of a token manager",slug:"/actions/token-manager/"},sidebar:"defaultSidebar",previous:{title:"With the SDK",permalink:"/polymesh-documentation-site/docs/actions/actions-sdk"},next:{title:"KYC and CDD on Polymesh",permalink:"/polymesh-documentation-site/docs/category/kyc-and-cdd-on-polymesh"}},c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Review",id:"review",level:2},{value:"Ticker",id:"ticker",level:3},{value:"Reservation",id:"reservation",level:3},{value:"Security token",id:"security-token",level:3},{value:"Compliance requirements",id:"compliance-requirements",level:3},{value:"Pending authorisations",id:"pending-authorisations",level:3},{value:"Attestations",id:"attestations",level:3},{value:"Portfolios",id:"portfolios",level:3},{value:"Checkpoints",id:"checkpoints",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:l};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a developer, you have now discovered a good chunk of the Polymesh Typescript SDK. If you wanted to create your own Token Studio, you are now equipped for that. Of course the Token Studio already exists and is usable. However if you wanted to design another one, what would you need to do? This is the purpose of this chapter. We have a bare-bone example of such a manager."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"It is a single-page Web app without any server component. Or rather the only server component is a Polymesh node accessed via the Polymesh Wallet."),(0,o.kt)("p",null,"At the top of the page, you enter the ticker you want to manage. This activates the other parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ticker reservation: reserve / view / transfer ownership / create asset"),(0,o.kt)("li",{parentName:"ul"},"Asset: transfer ownership / change primary issuance agent / issue / redeem"),(0,o.kt)("li",{parentName:"ul"},"Compliance requirements:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"add / remove requirements, then for each requirement: add / remove conditions, and so on for all parameters."),(0,o.kt)("li",{parentName:"ul"},"Pause / resume compliance."),(0,o.kt)("li",{parentName:"ul"},"Check possibility of settlement."))),(0,o.kt)("li",{parentName:"ul"},"Checkpoints: list / create / create scheduled / check balance of any account.")),(0,o.kt)("p",null,"Additionally, the page lets you handle secondary concerns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authorisations: list / accept / reject them. Both incoming and outgoing from your account."),(0,o.kt)("li",{parentName:"ul"},"Attestations: list yours / list those of another account / revoke / publish new."),(0,o.kt)("li",{parentName:"ul"},"Portfolios: list yours / list your custodied portfolios / list portfolios of another account.")),(0,o.kt)("h2",{id:"review"},"Review"),(0,o.kt)("h3",{id:"ticker"},"Ticker"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tickers",src:a(94517).Z,width:"354",height:"208"})),(0,o.kt)("p",null,"You can type either a known ticker, or a new one that does not exist. Alternatively, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L98-L107"},"load those whose reservation or token you own"),"."),(0,o.kt)("p",null,"If the ticker reservation does not exist, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L129-L135"},"reserve it"),"."),(0,o.kt)("h3",{id:"reservation"},"Reservation"),(0,o.kt)("p",null,"If your ticker is only reserved:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reservation",src:a(92665).Z,width:"576",height:"440"})),(0,o.kt)("p",null,"When the feature is implemented, you will be able to transfer the ownership. As of now, you can create the token proper with the parameters of your choice."),(0,o.kt)("p",null,"If your ticker is already created:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reservation",src:a(94108).Z,width:"580",height:"203"})),(0,o.kt)("h3",{id:"security-token"},"Security token"),(0,o.kt)("p",null,"When you have created the token, it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L186-L199"},"loads")," and shows as:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Security token",src:a(37078).Z,width:"588",height:"819"})),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L233-L241"},"transfer the ownership"),", change the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L243-L248"},"primary issuance agent"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L250-L255"},"remove it"),". And if you are the PIA, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L257-L264"},"issue")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L266-L271"},"redeem")," tokens in your default portfolio."),(0,o.kt)("h3",{id:"compliance-requirements"},"Compliance requirements"),(0,o.kt)("p",null,"If the token exists, they are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L273-L280"},"loaded")," and show as:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compliance requirements",src:a(83085).Z,width:"617",height:"657"})),(0,o.kt)("p",null,"The list can be long..."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compliance requirements",src:a(14211).Z,width:"615",height:"449"})),(0,o.kt)("p",null,"If you own the token and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L304-L519"},"change any of the requirements"),", conditions, types and so on, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L521-L527"},"save the whole list"),". You can also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L529-L533"},"pause compliance")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L535-L539"},"resume it"),". And to assist users, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L541-L548"},"simulate whether a transfer")," would complete."),(0,o.kt)("h3",{id:"pending-authorisations"},"Pending authorisations"),(0,o.kt)("p",null,"If you have sent an authorisation out, for instance to change the PIA on your token, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L550-L559"},"load")," that:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Outgoing authorisation",src:a(35827).Z,width:"436",height:"319"})),(0,o.kt)("p",null,"Which you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L647-L653"},"reject"),"."),(0,o.kt)("p",null,"Now, if you are the recipient, the same pending authorisation will appear, although with a possibility to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L639-L645"},"accept"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Incoming authorisation",src:a(73699).Z,width:"434",height:"317"})),(0,o.kt)("h3",{id:"attestations"},"Attestations"),(0,o.kt)("p",null,"Here, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L655-L662"},"load your own"),", or those of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L664-L670"},"someone else"),", for instance if you are the KYC provider and want to see what you already issued."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Attestation received",src:a(63420).Z,width:"501",height:"485"})),(0,o.kt)("p",null,"And if you are the issuer, then you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L757-L763"},"revoke it"),"."),(0,o.kt)("p",null,"To ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L765-L771"},"add an attestation"),", just enter the right parameters:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add attestation",src:a(77160).Z,width:"419",height:"394"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L773-L796"},"investor uniqueness attestation")," is different and requires a special treatment. Also, at the moment, for the Testnet, it relies on a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L783"},"mocked uID")," that may cause issues. Also note how ",(0,o.kt)("inlineCode",{parentName:"p"},"@polymathnetwork/confidential-identity")," are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L779"},"loaded asynchronously"),". This is necessary because it contains WebAssembly modules."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add uniqueness",src:a(81343).Z,width:"415",height:"409"})),(0,o.kt)("h3",{id:"portfolios"},"Portfolios"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L798-L817"},"load your own"),", or that of someone else. The list includes your portfolios which have a custodian. If you want to make someone your custodian, you can enter a new value and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L841-L846"},"do it"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"My portfolios",src:a(75663).Z,width:"547",height:"455"})),(0,o.kt)("p",null,"You can also load the portfolios for which ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L819-L827"},"you are the custodian"),". If you are the custodian of a portfolio, you are the only one who can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L848-L853"},"relinquish custody"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"My custodied portfolios",src:a(41906).Z,width:"548",height:"453"})),(0,o.kt)("h3",{id:"checkpoints"},"Checkpoints"),(0,o.kt)("p",null,"When choosing a ticker, the existing checkpoints ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L884-L889"},"will load"),". In each, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L920-L924"},"check the balance")," of any account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Checkpoint loaded",src:a(22731).Z,width:"473",height:"611"})),(0,o.kt)("p",null,"Of course, you can also create one ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L914-L918"},"immediately"),", or create ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/technical-content-examples/blob/802f9ddb8a4843717eefec2149fd97b97497a1b4/token_manager/pages/index.tsx#L926-L930"},"a schedule"),"."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This token manager does not pretend to have a good interface, but it shows you how you could start when building your own."),(0,o.kt)("p",null,"Keep posted for updates when the SDK changes."))}h.isMDXComponent=!0},94517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-01-tickers-252e2ed8f255351776a43cf2526b6a09.png"},94108:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-02-reservation-created-7454e31b60f02e20cb8d001a5b2ac15d.png"},92665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-02-reservation-reserved-5b8a4e5864b290a0e504e723cfd5a8e1.png"},37078:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-03-security-48d28ce1598672e2a236a3a9ce4a37fe.png"},83085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-04-compliance-a-07ff64ee85ecf810c674301397d0400f.png"},14211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-04-compliance-b-51f9b2d935582edd66eaa5ac20d02565.png"},73699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-05-auth-in-19f21ba6274979489a5880389db1e7b1.png"},35827:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-05-auth-out-a5154042d8f3ccb85dcfe3016385af1d.png"},77160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-06-attestation-add-666e08f2b78116c229cc86560ef123a4.png"},63420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-06-attestation-received-017f50fda1332d875be58df1fefa9333.png"},81343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-06-unique-add-3124404277ba378b6536c63d93d75add.png"},41906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-07-portfolios-custodied-5de4583d7adaa2631e3fe06dd127f650.png"},75663:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-07-portfolios-own-3eac19299836457f1a10dd480ac3ff55.png"},22731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token-08-checkpoint-c674aa54de8656a2a3783ed4bd9165db.png"}}]);