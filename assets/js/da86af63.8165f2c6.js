"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[32986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:2,title:"Get the Wallet",description:"Connect to Polymesh with your browser"},i=void 0,l={unversionedId:"quickstart/wallet",id:"quickstart/wallet",title:"Get the Wallet",description:"Connect to Polymesh with your browser",source:"@site/docs/02-quickstart/wallet.mdx",sourceDirName:"02-quickstart",slug:"/quickstart/wallet",permalink:"/polymesh-documentation-site/docs/quickstart/wallet",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/02-quickstart/wallet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get the Wallet",description:"Connect to Polymesh with your browser"},sidebar:"defaultSidebar",previous:{title:"Up and Running in 10 Minutes",permalink:"/polymesh-documentation-site/docs/quickstart/up-in-ten-minutes"},next:{title:"Get Verified",permalink:"/polymesh-documentation-site/docs/quickstart/verification-with-cdd"}},s={},c=[{value:"Get the Wallet",id:"get-the-wallet",level:2},{value:"Create a new Account",id:"create-a-new-account",level:2},{value:"Connect a Ledger Hardware wallet",id:"connect-a-ledger-hardware-wallet",level:2},{value:"Links",id:"links",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-the-wallet"},"Get the Wallet"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Polymesh Wallet")," is a ",(0,o.kt)("strong",{parentName:"p"},"Google Chrome extension")," that holds local copies of account information and confidential signing keys. The Polymesh Wallet enables you to manage your Polymesh accounts and interact with Polymesh and Polymesh decentralized apps (dApps)."),(0,o.kt)("p",null,"Currently, the Polymesh Wallet is available as a Google Chrome extension and supports Google Chrome as well as Chromium based browsers (such as Brave and Microsoft Edge)."),(0,o.kt)("p",null,"Get the Polymesh Wallet extension ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/polymesh-wallet/jojhfeoedkpkglbfimdfabpdfjaoolaf"},"here"),' or search for "Polymesh Wallet" in the chrome store and then click "Add to Chrome".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get Extension",src:n(21767).Z,width:"1078",height:"301"})),(0,o.kt)("p",null,'Once installed locate the Polymesh icon in the plugins tray. It may be under the plug-in icon if it is not pinned. Click it to launch the "welcome screen".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pin Extension",src:n(74953).Z,width:"340",height:"235"})),(0,o.kt)("h2",{id:"create-a-new-account"},"Create a new Account"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wallet Welcome",src:n(19210).Z,width:"414",height:"614"})),(0,o.kt)("p",null,"Accept the Privacy Policy and Terms of Use, then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create new account"),"."),(0,o.kt)("p",null,"You will be presented with a 12-word mnemonic. This is a recovery phrase that can be used to regenerate the private signing key stored in the wallet. You should copy this, and store it in a safe and confidential location."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"recovery-phrase",src:n(25572).Z,width:"414",height:"614"})),(0,o.kt)("p",null,"On the next screen, you have to enter the words ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"in the correct order"))," to confirm that you do indeed have access to original list."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"confirm recovery phrase",src:n(77257).Z,width:"414",height:"614"})),(0,o.kt)("p",null,"Check the box to confirm you have a copy of the recovery phrase, press ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),", and select the words in the right order."),(0,o.kt)("p",null,"Give your account a name and set a password. The password helps prevent others from using your account and encrypts your keys in the local storage."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create account",src:n(89125).Z,width:"414",height:"614"})),(0,o.kt)("p",null,"Your new account is created with one unassigned key."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wallet New Account",src:n(19066).Z,width:"414",height:"614"})),(0,o.kt)("p",null,"Notice, at the top of the window, that it informs you which network it is connected to by default. Here, we are connected to Testnet."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When connected to Mainnet addresses will start with a"),(0,o.kt)("span",{style:{fontWeight:"bold"}},"2"),", When connected to Testnet addresses will start with a ",(0,o.kt)("span",{style:{fontWeight:"bold"}},"5")),(0,o.kt)("h2",{id:"connect-a-ledger-hardware-wallet"},"Connect a Ledger Hardware wallet"),(0,o.kt)("p",null,"As an alternative to storing your password encrypted private key in the browser wallet extension itself you may prefer to use a hardware wallet to manage your private key and always keep it offline. The Polymesh wallet extension supports signing with ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4641803176221-Polymesh-POLYX-?docs=true"},"Ledger Hardware wallets"),". You can search for the Polymesh ledger app in the Manager, App catalogue section of Ledger Live and install it on your device."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get the Ledger App",src:n(52903).Z,width:"1010",height:"616"})),(0,o.kt)("p",null,"Once installed enter the Polymesh App on your ledger device."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'If you do not first enter the Polymesh ledger app you will be presented with a\nscreen saying "Your Ledger is not connected".')),(0,o.kt)("p",null,"Once installed, instead of selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Create new account"),", as described above you can select ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect your Ledger"),", if setting up your first wallet, or click ",(0,o.kt)("inlineCode",{parentName:"p"},"+ Add a key")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect Ledger device")," if you have previously set up an account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connect Ledger Device",src:n(43790).Z,width:"414",height:"269"})),(0,o.kt)("p",null,"If prompted by a browser popup select your hardware wallet and click connect."),(0,o.kt)("p",null,"You can then name your ledger account and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," to import it to your wallet. The Advanced settings on the import screen allow you to select an alternate derivation path. This allows you to have multiple accounts on the same ledger device. The default for the first account import is Account type 0, Address index 0 - think of it like a formula from which child accounts are generated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import Ledger Account",src:n(85093).Z,width:"408",height:"601"})),(0,o.kt)("p",null,"Now when signing transactions you must first connect your Ledger, open the Polymesh app and you will be prompted to sign the transaction with the Ledger device."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Due to the limited storage available on the Nano S not all transaction types\nare available. See the README.md at"),(0,o.kt)("a",{href:"https://github.com/LedgerHQ/app-polymesh"},"https://github.com/LedgerHQ/app-polymesh"),' for details of available transaction in the "Light" app.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When imported, Ledger accounts are assigned the genesis hash of the chain\nselected in the wallet at the time of import i.e. Mainnet or Testnet. It is\nnot good practice to share accounts across mainnet and testnet and some dApps\nmay not show accounts imported for testnet on a mainnet instance and vice\nversa.")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Polymesh Wallet ",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/polymesh-wallet/jojhfeoedkpkglbfimdfabpdfjaoolaf"},"https://chrome.google.com/webstore/detail/polymesh-wallet/jojhfeoedkpkglbfimdfabpdfjaoolaf")),(0,o.kt)("li",{parentName:"ul"},"Polymesh Dashboard ",(0,o.kt)("a",{parentName:"li",href:"https://dashboard.polymath.network/"},"https://dashboard.polymath.network/")),(0,o.kt)("li",{parentName:"ul"},"Ledger Polymesh App Github ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/LedgerHQ/app-polymesh"},"https://github.com/LedgerHQ/app-polymesh")),(0,o.kt)("li",{parentName:"ul"},"Ledger Polymesh App support page ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4641803176221-Polymesh-POLYX"},"https://support.ledger.com/hc/en-us/articles/4641803176221-Polymesh-POLYX"))))}d.isMDXComponent=!0},77257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/confirm-recovery-phrase-570da66a00d277cf0e5f3b0d5ed19e5d.png"},43790:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-ledger-device-72d91585b8b7df564f8981effb443a9d.png"},89125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_account-65680352bf936df22ef454ee70706749.png"},52903:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-ledger-app-d1fac58c79baacdb33ad30dff1b2770b.png"},21767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_chrome_extension-14b6a97554851a10862ebb163b99cee6.png"},85093:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-ledger-account-f345ad0ad3a6226df708db8789d332bc.png"},19066:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new_account-c301ca9e2c0e02d1bc0e4c69e7010c29.png"},74953:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pin_extension-00fd456b42050d9d16562bed01b86d45.png"},25572:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/recovery-phrase-ec7bf0999ac7f2503d518bfd3c5e114f.png"},19210:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/welcome-cb06d206977a19dcd8fe809c430598bb.png"}}]);