"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[51936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,title:"Get POLYX",description:"Pay network fees, vote and stake"},r=void 0,s={unversionedId:"quickstart/quickstart-polyx",id:"quickstart/quickstart-polyx",title:"Get POLYX",description:"Pay network fees, vote and stake",source:"@site/docs/02-quickstart/quickstart-polyx.mdx",sourceDirName:"02-quickstart",slug:"/quickstart/quickstart-polyx",permalink:"/polymesh-documentation-site/docs/quickstart/quickstart-polyx",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/02-quickstart/quickstart-polyx.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Get POLYX",description:"Pay network fees, vote and stake"},sidebar:"defaultSidebar",previous:{title:"Get Verified",permalink:"/polymesh-documentation-site/docs/quickstart/verification-with-cdd"},next:{title:"Originate an Asset",permalink:"/polymesh-documentation-site/docs/category/originate-an-asset"}},l={},c=[{value:"POLYX",id:"polyx",level:2},{value:"Testnet POLYX",id:"testnet-polyx",level:2},{value:"Mainnet POLYX",id:"mainnet-polyx",level:2},{value:"Buying POLYX from an exchange",id:"buying-polyx-from-an-exchange",level:3},{value:"Getting POLYX via the Bridge",id:"getting-polyx-via-the-bridge",level:3},{value:"Using the Bridge",id:"using-the-bridge",level:3},{value:"Testnet Bridge",id:"testnet-bridge",level:2},{value:"Links",id:"links",level:2}],p={toc:c};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"polyx"},"POLYX"),(0,a.kt)("p",null,"POLYX is the native utility token for Polymesh. POLYX serves three primary purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Payment of onchain transaction fees"),(0,a.kt)("li",{parentName:"ul"},"Network governance, allowing network participants to vote on-chain upgrades and other exceptional events."),(0,a.kt)("li",{parentName:"ul"},"Staking, securing the network by aligning the economic incentives of node operators and stakers to the correct operation of the chain.")),(0,a.kt)("p",null,"For more information on the POLYX token see ",(0,a.kt)("a",{parentName:"p",href:"https://polymesh.network/polyx"},"https://polymesh.network/polyx")),(0,a.kt)("h2",{id:"testnet-polyx"},"Testnet POLYX"),(0,a.kt)("p",null,"If you are completing the exercises contained in the various sections of this site you will require Testnet POLYX."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Getting testnet POLYX couldn't be simpler. If you have already"),(0,a.kt)("a",{href:"./wallet/"},"set up your wallet")," and completed the testnet ",(0,a.kt)("a",{href:"./verification-with-cdd/"},"mock certified due diligence process"),", you will automatically have been credited with Testnet POLYX."),(0,a.kt)("p",null,"The Testnet is where you can practice using Polymesh without material consequences. As the name suggests, it is a fully functional Polymesh network. The main differences are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The funds and securities on the Testnet aren't real and have no material value;"),(0,a.kt)("li",{parentName:"ul"},"You can acquire testnet POLYX at no cost;"),(0,a.kt)("li",{parentName:"ul"},"The testnet is not guaranteed to remain in operation and may be retired and replaced with an alternate testnet in the future.")),(0,a.kt)("h2",{id:"mainnet-polyx"},"Mainnet POLYX"),(0,a.kt)("p",null,"Before you can receive POLYX tokens you must first; ",(0,a.kt)("a",{parentName:"p",href:"./wallet/"},"create a Polymesh account"),", and second; Onboard your account through the ",(0,a.kt)("a",{parentName:"p",href:"./verification-with-cdd/"},"CDD process"),". Once those steps are complete your account is ready to receive POLYX tokens."),(0,a.kt)("p",null,"There are two primary ways to get your first POLYX tokens:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Purchase from an exchange that lists the Polymesh POLYX token."),(0,a.kt)("li",{parentName:"ol"},"Convert ERC20 POLY tokens from Ethereum to POLYX on Polymesh via the token bridge.")),(0,a.kt)("h3",{id:"buying-polyx-from-an-exchange"},"Buying POLYX from an exchange"),(0,a.kt)("p",null,"Possibly the simplest way to get POLYX tokens is to purchase them from an exchange, that lists the POLYX token for trading, and withdraw the tokens to your Polymesh wallet. Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.coingecko.com/en/coins/polymesh#markets"},"CoinGecko")," or ",(0,a.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/currencies/polymesh/markets/"},"CoinMarketCap")," for lists of exchanges that list the POLYX token."),(0,a.kt)("h3",{id:"getting-polyx-via-the-bridge"},"Getting POLYX via the Bridge"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Background and concept")),(0,a.kt)("p",null,"Polymath, the company that originally built the Polymesh blockchain, created the POLY token on the Ethereum blockchain. POLY was intended to be used with their smart contracts used for the issuance of security tokens on the ethereum blockchain. When they built Polymesh it was decided that, instead of having a token generation event, POLYX tokens would be given to POLY token holder who choose to upgrade their tokens. Owners of POLY can upgrade their POLY to POLYX at a ratio of 1:1 through a bridge mechanism."),(0,a.kt)("p",null,"The bridge process works by locking POLY on the Ethereum network using a smart contract that permanently takes them out of circulation. This contract is monitored by the Polymesh bridge and when a locking transaction is identified creates a transaction to issue POLYX tokens to the users specified POLYX address on the Polymesh."),(0,a.kt)("p",null,"The bridge is a one way process. It is not possible to convert POLYX tokens to POLY tokens."),(0,a.kt)("p",null,"Upon launch the Polymesh Association committed to operate the bridge for a minimum of one year, to give POLY token holders the opportunity to convert their tokens, should they wish to."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements")),(0,a.kt)("p",null,"To use the POLY to POLYX bridge your require the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Polymesh ",(0,a.kt)("a",{parentName:"li",href:"./wallet/"},"wallet")," extension;"),(0,a.kt)("li",{parentName:"ol"},"An account with a verified onchain ",(0,a.kt)("a",{parentName:"li",href:"./verification-with-cdd/"},"identity"),";"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," wallet browser extension;"),(0,a.kt)("li",{parentName:"ol"},"ERC20 ",(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec"},"POLY Tokens")," on the Ethereum blockchain in your Metamask wallet;"),(0,a.kt)("li",{parentName:"ol"},"ETH tokens for payment of transaction fees on the Ethereum Blockchain in your Metamask wallet")),(0,a.kt)("p",null,"The following guide assumes you have already satisfied the above 5 requirements."),(0,a.kt)("h3",{id:"using-the-bridge"},"Using the Bridge"),(0,a.kt)("p",null,"To access the bridge go to ",(0,a.kt)("a",{parentName:"p",href:"https://polybridge.polymesh.network/"},"https://polybridge.polymesh.network/")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bridge",src:n(36617).Z,width:"1205",height:"538"})),(0,a.kt)("p",null,"MetaMask will not connect to this website unless you authorise it. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect with MetaMask"),". The metamask browser extension will popup asking you to sign in and authorise the bridge dApp to connect to your wallet. Sign in and approve the request."),(0,a.kt)("p",null,"The first step of the bridge process is to enter you Polymesh address. Open your wallet, copy the address that you wish to receive POLYX and paste it into the window as shown below. (Note: On mainnet Polymesh addresses start with a ",(0,a.kt)("strong",{parentName:"p"},"2"),")"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"enter PID",src:n(57459).Z,width:"913",height:"726"})),(0,a.kt)("p",null,"Your address will be checked and below the input field it should indicate that your Polymesh account identity is verified. If not, you need to complete the ",(0,a.kt)("a",{parentName:"p",href:"/docs/quickstart/verification-with-cdd"},"customer due diligence process")," before continuing."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," and then enter the amount of POLY you wish to bridge. You can enter any amount with up to 6 decimal places, provided you have sufficient POLY in your ethereum wallet to bridge. Once you have entered the amount you wish to bridge click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," again."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"upgrade poly",src:n(75196).Z,width:"518",height:"653"})),(0,a.kt)("p",null,"Review the transaction details and when you are ready to proceed click ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirm"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"confirm",src:n(74126).Z,width:"516",height:"781"})),(0,a.kt)("p",null,"Upon clicking confirm the Metamask browser extension will open and present a transaction for signing."),(0,a.kt)("p",null,"This first transaction calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"Increase Approval"),' method on the POLY token contract and takes two parameters. 1. The "spender" we are approving i.e. the PolyLocker (bridge) contract address. 2. The amount of POLY tokens you are approving to be Locked. These values will have been automatically been populated by the bridge dApp. Review the transaction details and click ',(0,a.kt)("inlineCode",{parentName:"p"},"Confirm")," to approve."),(0,a.kt)("p",null,"Following successful completion of the first transaction you will be presented with a second transaction for signing. This second transaction calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"Limit Lock")," method on the PolyLocker contract and takes two parameters. 1. The Polymesh address you are bridging tokens to. 2. The amount of POLY tokens you will bridge. Again, review the transaction details and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirm")," to approve."),(0,a.kt)("p",null,'Following successful completion of the second transaction click "Done". You will return to the bridge dashboard where you will now be presented with the status of you bridge transaction including a count down to completion. The POLY to POLYX Polymesh bridge has an approximately 24 hour delay between when Polymesh registers a bridge transaction on Ethereum and minting the tokens on Polymesh. This is to minimise risk of the bridge being attacked or compromised.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"upgrade in process",src:n(13820).Z,width:"1389",height:"465"})),(0,a.kt)("p",null,"You can now safely close the bridge dApp while the transaction counts down."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"success",src:n(33515).Z,width:"1383",height:"479"})),(0,a.kt)("p",null,"After the 24 hours have elapsed the bridge dApp will tell you that your upgrade has successfully complete. You will now have POLYX in your wallet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"balance",src:n(81300).Z,width:"402",height:"441"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations! You have POLYX in your verified account and are ready to transact on chain.")),(0,a.kt)("h2",{id:"testnet-bridge"},"Testnet Bridge"),(0,a.kt)("p",null,"A testnet bridge is also available should you require additional test POLYX or wish to test the bridging process. The testnet bridge uses the Goerli ethereum testnet and is accessible at ",(0,a.kt)("a",{parentName:"p",href:"https://testnet-polybridge.polymesh.live/"},"https://testnet-polybridge.polymesh.live/")),(0,a.kt)("p",null,"The testnet bridge functions identically to the ",(0,a.kt)("a",{parentName:"p",href:"#using-the-bridge"},"mainnet bridge")," but with a reduced waiting time to complete the upgrade. To use it you must set your metamask wallet to the Goerli testnet, have Goerli test ETH and have Goerli test ERC-20 POLY tokens. Goerli POLY tokens are available from the Goerli ",(0,a.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0x9e32c0eff886b6ccae99350fd5e7002dced55f15#writeContract"},"POLY faucet contract")," by connecting to the contract with your metamask wallet and calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"getTokens")," method."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/polymesh-docs/network/bridge/"},"POLY to POLYX Bridge Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://polybridge.polymesh.network/"},"Mainnet Bridge dApp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec"},"Ethereum POLY Token Contract")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x5c60610ee8e502d8ce830ba189c075b5f39472df#tokentxns"},"PolyLocker Bridge Contract"))))}h.isMDXComponent=!0},81300:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/alice-balance-f544a17b9b945883a2f662a8b812b419.png"},74126:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bridge-confirm-upgrade-729196e52a99d3b551e1581edcd8ab3f.png"},57459:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bridge-enter-polymesh-address-21a5152690f2cbb551dc08d97a46bf1f.png"},75196:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bridge-poly-to-polyx-0554e2d9d856b9f36ad0c022834a5638.png"},33515:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bridge-success-9883ae1680d920d51c80a4b5d61797ca.png"},13820:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bridge-upgrade-in-process-19f6f60cd3c20f285d5853005cb84b9f.png"},36617:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polybridge-28e7e076f4732b22cd8f2755c3576010.png"}}]);