"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[84431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=d(n),A=s,u=c["".concat(l,".").concat(A)]||c[A]||p[A]||i;return n?o.createElement(u,a(a({ref:t},h),{},{components:n})):o.createElement(u,a({ref:t},h))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=A;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,a[1]=r;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}A.displayName="MDXCreateElement"},29510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>A,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(87462),s=(n(67294),n(3905));const i={sidebar_position:3,title:"Token Studio Dashboard",description:"Originating assets with no code"},a=void 0,r={unversionedId:"originate/dashboard",id:"originate/dashboard",title:"Token Studio Dashboard",description:"Originating assets with no code",source:"@site/docs/03-originate/dashboard.mdx",sourceDirName:"03-originate",slug:"/originate/dashboard",permalink:"/polymesh-documentation-site/docs/originate/dashboard",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/03-originate/dashboard.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Token Studio Dashboard",description:"Originating assets with no code"},sidebar:"defaultSidebar",previous:{title:"Origination Process",permalink:"/polymesh-documentation-site/docs/originate/origination-process/"},next:{title:"Secondary Keys",permalink:"/polymesh-documentation-site/docs/originate/secondary-keys"}},l={},d=[{value:"Exercise",id:"exercise",level:2},{value:"Compliance",id:"compliance",level:2},{value:"1. Open the dashboard",id:"1-open-the-dashboard",level:2},{value:"2. Navigate to origination",id:"2-navigate-to-origination",level:2},{value:"3. Register for Token Studio",id:"3-register-for-token-studio",level:2},{value:"4. My tokens",id:"4-my-tokens",level:2},{value:"5. Send the reservation",id:"5-send-the-reservation",level:2},{value:"6. Security token details",id:"6-security-token-details",level:2},{value:"Links",id:"links",level:2}],h=(c="YoutubePlayer",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var c;const p={toc:d};function A(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(h,{videoId:"-dxy9XN98Vs",mdxType:"YoutubePlayer"}),(0,s.kt)("h2",{id:"exercise"},"Exercise"),(0,s.kt)("p",null,"Let's explore the asset origination process using the Polymesh Wallet, a browser and the Polymesh Token Studio. It will be helpful to consider a hypothetical real-world situation."),(0,s.kt)("p",null,"Let's suppose that ACME Corp (ACME) is being incorporated and its founders wish to create a security for its stock on Polymesh from the start."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The security will represent ",(0,s.kt)("strong",{parentName:"li"},"equity")," in the firm;"),(0,s.kt)("li",{parentName:"ul"},"It will need a ",(0,s.kt)("strong",{parentName:"li"},"ticker symbol"),". The founders chose ACME.")),(0,s.kt)("p",null,"At a later stage, the company founders plan to issue an IPO, another event involving the stock, but we are not there yet."),(0,s.kt)("h2",{id:"compliance"},"Compliance"),(0,s.kt)("p",null,"ACME will create the securities on the Polymesh blockchain. Since ACME is required to ensure compliance, it will first make some important business decisions."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Choosing and engaging a ",(0,s.kt)("strong",{parentName:"li"},"KYC service provider"),". ACME chose EzKyc;"),(0,s.kt)("li",{parentName:"ul"},"Defining the ",(0,s.kt)("strong",{parentName:"li"},"KYC requirements")," and establishing an agreed process that the KYC service provider will provide;"),(0,s.kt)("li",{parentName:"ul"},"Defining ",(0,s.kt)("strong",{parentName:"li"},"jurisdictional properties"),". ACME chose anyone that is not a resident of ",(0,s.kt)("span",{title:"Elbonia doesn't appear in the list of countries"},"Liechtenstein"),".")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Since this action is materially significant, Alice will have to first complete ",(0,s.kt)("a",{parentName:"p",href:"/docs/quickstart/verification-with-cdd"},"customer due diligence"),". You will also need POLYX to pay network transaction fees. If you don't have any, or don't have enough, ",(0,s.kt)("a",{parentName:"p",href:"/docs/quickstart/quickstart-polyx"},"get some free Testnet POLYX"),".")),(0,s.kt)("h2",{id:"1-open-the-dashboard"},"1. Open the dashboard"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"dashboard",src:n(81323).Z,width:"1280",height:"825"})),(0,s.kt)("h2",{id:"2-navigate-to-origination"},"2. Navigate to origination"),(0,s.kt)("p",null,"Choose ",(0,s.kt)("inlineCode",{parentName:"p"},"Token Studio")," or navigate directly to ",(0,s.kt)("a",{parentName:"p",href:"https://tokenstudio.polymath.network/"},"https://tokenstudio.polymath.network/"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"token studio dashboard",src:n(91636).Z,width:"1279",height:"829"})),(0,s.kt)("p",null,"The dashboard and the Token Studio may ask you to authorise. This allows the sites to inspect your keys, which lets the site personalise the presentation."),(0,s.kt)("p",null,"The site wants to confirm you have access to the private key but cannot authorise signed transactions without further consent, so go ahead and authorise if the wallet prompts you."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"authorise",src:n(42544).Z,width:"1237",height:"773"})),(0,s.kt)("h2",{id:"3-register-for-token-studio"},"3. Register for Token Studio"),(0,s.kt)("p",null,"You might be wondering why Token Studio is asking for your name when it is clearly displayed in your wallet."),(0,s.kt)("p",null,"Recall that network participants have completed ",(0,s.kt)("a",{parentName:"p",href:"/docs/quickstart/verification-with-cdd"},"customer due diligence")," but this doesn't reveal who they are to other network members. It is the same with Token Studio, which can see the account (when the wallet is authorised) but cannot know the name stored in the wallet (for your own reference) or the information that was provided to the customer due diligence service provider."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"register",src:n(4492).Z,width:"1236",height:"865"})),(0,s.kt)("p",null,"Sign the transaction."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sign",src:n(89733).Z,width:"1239",height:"870"})),(0,s.kt)("h2",{id:"4-my-tokens"},"4. My tokens"),(0,s.kt)("p",null,"The dashboard shows your tokens. Nothing has been created yet."),(0,s.kt)("p",null,"Click on ",(0,s.kt)("inlineCode",{parentName:"p"},"New Security Token"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create",src:n(96277).Z,width:"1235",height:"871"})),(0,s.kt)("p",null,"The service provider marketplace is where you will choose your KYC service provider."),(0,s.kt)("p",null,"For now, let's just reserve the symbol."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"reserve symbol",src:n(78804).Z,width:"1238",height:"869"})),(0,s.kt)("p",null,"Enter the symbol you want to reserve."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Symbol reservations are held for 60 days to allow ample time to attend to the security tokens details before finalising origination. Symbol reservations ensure no duplicate trading symbols on the network and issuers can proceed in confidence that another organisation will not seize the desired symbol before everything is ready.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"reserve form",src:n(38955).Z,width:"1233",height:"862"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Wait!")," There is problem. If you are following along, chances are another user has already reserved the ACME symbol."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"unavailable",src:n(20081).Z,width:"566",height:"107"})),(0,s.kt)("p",null,"You will have to get creative and enter a symbol no one else has reserved."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"available",src:n(65854).Z,width:"523",height:"87"})),(0,s.kt)("h2",{id:"5-send-the-reservation"},"5. Send the reservation"),(0,s.kt)("p",null,"It will cost 2,500 POLYX to reserve the symbol on the blockchain."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you are low on POLYX, ",(0,s.kt)("a",{parentName:"p",href:"/docs/quickstart/quickstart-polyx"},"get some free Testnet POLYX"),".")),(0,s.kt)("p",null,"This will confirm that it is your intention to reserve the symbol and pay for the transaction with your funds."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"confirm reservation",src:n(66298).Z,width:"995",height:"650"})),(0,s.kt)("p",null,"When you click ",(0,s.kt)("inlineCode",{parentName:"p"},"Confirm")," the site will inform the wallet that a signature is needed. Even though the site is authorised to explore the public information held in the wallet, it ",(0,s.kt)("em",{parentName:"p"},"always")," asks for your approval before signing transactions."),(0,s.kt)("p",null,"Since we expected this and we trust this site, click ",(0,s.kt)("inlineCode",{parentName:"p"},"sign"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sign transaction",src:n(88590).Z,width:"1126",height:"754"})),(0,s.kt)("p",null,"In a few moments, the symbol is reserved."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"reserved",src:n(23784).Z,width:"483",height:"310"})),(0,s.kt)("h2",{id:"6-security-token-details"},"6. Security token details"),(0,s.kt)("p",null,"You can now proceed to specifying the details of the security this token represents."),(0,s.kt)("p",null,"In practice, not all important business decisions will be finalised at this point. That's okay. You can return any time in the next 60 days while the reservation remains in effect."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"returning later",src:n(2655).Z,width:"977",height:"764"})),(0,s.kt)("p",null,"Let's proceed with a ",(0,s.kt)("strong",{parentName:"p"},"simple configuration"),"."),(0,s.kt)("p",null,'Take a moment to explore the options. This will help you understand the breadth of security tokens that can be created this way. To keep matters simple, enter just a company name, select "Equity Preferred", and leave the rest of the defaults as they are.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"details",src:n(31392).Z,width:"1230",height:"996"})),(0,s.kt)("p",null,"Token Studio confirms your intentions before asking the wallet to prepare a signed transaction."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"confirm details",src:n(22785).Z,width:"492",height:"580"})),(0,s.kt)("p",null,"The wallet will ask you to sign the transaction."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sign details txn",src:n(53454).Z,width:"1119",height:"857"})),(0,s.kt)("p",null,"In a few moments, success! ",(0,s.kt)("strong",{parentName:"p"},"Your token has been created.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"success",src:n(73832).Z,width:"492",height:"316"})),(0,s.kt)("p",null,"Your token will be on your dashboard where you can edit properties from time to time. Take a moment to explore how you can amend and extend the configuration over time."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"success",src:n(25033).Z,width:"1026",height:"719"})),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Token Studio: ",(0,s.kt)("a",{parentName:"li",href:"https://tokenstudio.polymath.network/"},"https://tokenstudio.polymath.network/"))))}A.isMDXComponent=!0},81323:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/01-dashboard-d769c61b81ec9b972b0d8855e2ca48b1.png"},91636:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/02-token-studio-68927dd4fc87e03fea816419c111cf68.png"},42544:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/03-token-studio-authorize-0d71068cdcf9042d1f1052a4c2dbe84d.png"},4492:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/04-token-studio-register-09aeda3bd63911d3a53a5711409da1fd.png"},89733:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/05-token-studio-register-sign-8fbd960e318293901367726ae1d97dd3.png"},96277:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/06-my-tokens-dashboard-3ed3305aa37a3d6fe8e8bd16fd082415.png"},78804:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/07-go-to-ticker-ab3c3313bdcf3ffb39068abf315247bb.png"},38955:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/08-reserve-ticker-c7a91adeb4652a9b9ff8c50518d183c5.png"},20081:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},65854:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgsAAABXCAYAAACKjAZrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABc2SURBVHhe7Z3fSxzpnsbPf7AXS+6EXegrvVgxYGPQYBovevCik4COINkGMSEQjwuRvlCzYBMw3qhDEOEkCOkDwRlWzYI/ONvuDOoQ1BDRwaBLRzy9I7ozRhdPGjaRDMOz37d+dFdVl6XdmU7UeR74ELt+vFXvWzX1fd73/VbNHz78ChBCCCGEHAXNAiGEEEI8oVkghBBCiCc0C4QQQgjxhGaBEEIIIZ7QLBBCCCHEE5oFQgghhHiSv1nYXcVQVyuqqwIoKq5ESU0jbnRPYOXAZdvPyir6rwVQdjeObdf1n4+V3joUXYth3WXdZ2NjFPVVQdQP77ivd2MxipLS23h66q59IUigv7YS1b1Jl3W5cyrvAUIIcZCfWTiYR1tNJXy1EfSPzSA+N4ORWA9CVeXwNcSw4rbPZyOJoZZGhLqXsGcs24w1oaiqBwu27fJkbQDVpY3o33BZdwyfO1C4tsNWHHcamtA2vW/b1hOahbyhWSCEnAXyMgvbw7dR5G/FyK5jnQqcxQHcmTu0Lz9l0Czo/GbtQLOQNzQLhJCzQF5mYf1RI4pq3INM6mAfe+8syw4SGOlW0xWVKCoNojocxdByyrbPh19TWBiOor42AF+pmtJowp3h1fRIwId3cdyQ5c3T1n2cD9p9DDXIQ7w7jpGuJlTI9mXtS+nlZV2r+t/hclwozlDUMKpNT2hlSeCctZ57enk0a7liXdZZy7pQGsF4ejtnnW7jTmzJNhWSHSh2MNISkrbtxHjaiFnLCaDsWis6xhJIpfcx6z2DeG8rKvyqnQOovjmAuNPMWfc5oh1c29p2DeUcGjrRv2gZecgyC4dYF0NZIiaqY9G81ieth/P6mevtbC8O405DSMqSc/eHEGqfwIrR9qm5KMqK69C/Zt8nJeeplkfVcq2eQbSNzaD/Zp2cayV8ct91TO8gtRFHRzgky8rhq2qSbZKW8zTNwhJmH0VQrbW33Nc3+zC+4TTJ+dwDhBBy+shvGkIbQahEsEse0EcGJEVSglJAgu1tRMfmMTs3g8G7dfLglJ74mvlgPcRCr5iP0jo0P4ojvjiP8VhECxahR0bv7cRmQR7uEjiC7aOILyewsqUClR6EdLMA7O0mMauOV9WJkY0kNneNYLYRkzpJ8Fi0PvATiNaWp/fN4mAH69NRVEgA6phLYn1r3wgq2XUaiXWiWupQ0bWUDjzO8x9vl+BXE8HIllF+upxQphwJUBUSbEPDZs/WqHdVHeq7J7CwIee0OIrmGlkWHsWmcSwnR7ZDVlub17BVv4aLMxhqb5RrKHVeNtrKYRY2xyIok/Vtc6ahyKEeWddPL9PGxjBCsq+53cLcsNRXmYt5w2CuokPqX92bsOx3iNn2YKa9jXqqAN4xuYr1jVWMtMv1kHOsECPTP5fAplrWpepqHTlSZqFc9qsT49uHp9NiGqZH0dGg2kiuXfq/h3zuAUIIOZ3kneC4Od2HkPQ0LxQHUNEQQYc8EBe27D2rvelOrXdpH6Lfx9Ob0otriesP9t1R1MuDv37MnlC3PtyJ+rsTerDLwSwUhScciYx2s6BwH37fwaBsVyIBJ92LXO7TjIDWE7Vta8FtGkKrU2VWkuD2ZETaowmDhhnInH8Ks11ioiQgP80qx6Vt1MhOehTErLcxMmCQkmP5SqU8j6kB13ZwtPVR13C8qxU3YkYwtpiFzclOMQEh3LHmPORUD+f1y2ZvslWCsHUUR+q7IUF7LXPMle4Qimr7Mvkz7+Zxxy8GNGacg1ZPMRSmIVUcuCwz9qsfM42LbhYu1DhGoQ5ku6pyVJgGJed7ILMNIYScNvI2Czop6cXGMdgV0Y1DaRD1vZlEQq0n5whiCi3nQQUJ+VsPatIj85rvPrFZsJsCnZOaBfO8oogbQWBBBZzjHuQuZkHVqUgCdVad3s2g2RJ49POX3mm39F79tzGYHm3RMdvGGhQ11ChI+phm/RxD9sroyDaDtiBv5yRmQbuG5hTFURhmoX8sKscM4obDFORWjyNGcazIfkE5x4qWGEYWk/ZpLxNt9CuE6LL+O6WZHjE0Zs/f9Z6S6yNmIWMMFEvokHs7bTIMs5DV3oLeVsOawc3tHqBZIIScbj7SLFhJYUUNPxcHcWdOPQgPMd6iRh7sc+NpVPCQ/azGwb1c4ROZhQ+7E1oP+M60CtpqKLsSwXSQOAIXs2Cajuw6GWUaPVd1/qotVB6ATwJbm9Zume21cpztliaIjkW13RH1XvstzIJ+DYta4pY5exeUWVDnpOoh+wZ7V23bf1Q9jkDLWQjXGccNItgygLjRW9dJYvCaGIpuVZ7U466c282JY/JgTmoWKu2jDwYqh6WodkAbzcjlHqBZIIScdvIwC4fY3jhqPlmf4zeHYmfbA9LTimFhI4n1LPT5fb0HlufIgq3n/xuYBTE8Iy0BlNydwd5iD8qkJzrkmZMh5DWyoA+Xa4FCzXNv7UhQll5plexjCXhmOUNrbu2XxLbWoy6kWbD3ltPbONHMgjI7+3pio/ytG0Z9/UfV4zjeyTEXJ9AmxsAM1OY6rX4qEfdAtXtA6mS5Zz/KLJS7Jl/mNrJguQdoFgghp5w8zIIE1JvGg9k5/Lulz9OGhvUH4Z48MH1+a9KXzvbyDOLm/LLso5LVzIenyfqYJWfh13m0+csdvXw9xyAfs7A9rIKkW69PzdFHUOJvRdvdoL0nehSaWXBk3u+qOqmAYD1fOa60h5r/NwO4LVAcSFCSHqv2nQqzXbW2yR5x+LC1hPG5pHFu+ZsF13ZwBFHtGjrMkDrmUTkL2jppO/Vq7VPT+HxMPVzYXp7A4Jh99CKl5TE4grOWNxBEc3srfFWd6ekljY80CxfUdJX1WGbOQncmZyHne4AQQk4peU1DpJb7JECWo6Qhiv6xOMan43j6KKp9lEn15GbTD9GkBPSA8fEmlUmvsuD1jPDqbvNhf4iFbnlgGlnj1m2Cj4wHrxgUNYx8wd+INilnYXEGgy2NqKgJ5GUWUnOd0vtV+RUTGF+2P8z1hDY1PC490UlHcHNjd0KCjgSJlmGMTCeMuf3sTPhxSya8aUCcgSK1FpMAI2WltzHaRtU7ptpmCfGxAdxQH8SSHqxnvU9gFlzbISuIqmsopqymVb+Gc5a3Icw3R2xmQThY1Y2P1E03Ph9RDxeUgVGjFzfU/bK8itlp/W2I7Lc/9jVjq6Y7VI6BbSrlY0cWao23Ieb0tyHa5D6/cMzbECe5Bwgh5DSSd87C3vIoOm42osyvP4y1V/faR7HgHLY/SOCp9lloCTjF8kCvaZKH57wjYW4fCzExGxL8fcY2d2KW7ywopOfd31InQUkMib9OAoU8pG0P2pObBbVMfZOgWs49+0Gtv2J3we/oiXqwOdmjnbvq2aYT6MTgZH074gTv2KvXDlUAb540R1qkHKNt1Ly/qntItXPakOVvFlzbwS2IWq+hrCu7JuYv/Vqk4DQLCvV6o5iuivTrjHnWw5UUVqRtzbLS9571+AbayIgYiw4j0THNR5kFlcuSwIJ6/VPqaH5nYeTY7yyc7B4ghJDTxm+Y4Hhe2MFQWIJWu6MnSs4kWjB25DIQQgjJDZqFNCmsL89j/FErytQcvde3FcipZ29jCfHJPoRUMmEu/1MsQgghWdAsmGgZ82pIuwltk9mvxZGzxD6ehiuhPgNd3z3j/Y0IQgghx0KzQAghhBBPaBYIIYQQ4gnNAiGEEEI8oVkghBBCiCc0C4QQQgjxhGaBEEIIIZ7QLBBCCCHEE5oFQgghhHhCs0AIIYQQT2gWCCGEEOJJzmYh+fMv8Df/jL//YpsQQgg5Fn/zT/jrT7+4xhRyNsjZLKiL/peFd6AoiqKok0jFDNXJdIsp5GyQs1lQLpGiKIqicpGKHW4xhZwNaBYoiqKogotm4WxDs0BRFEUVXDQLZxuaBYqiKKrgolk429AsUBRFUQUXzcLZhmaBoiiKKrhoFs42NAsURVFUwUWzcLahWaAoiqIKLpqFsw3NAkVRFFVw0SycbWgWKIqiqIKLZuFsQ7NAURRFFVyfyyz858/r6EvENb79+b9ctyHHQ7NAURRFFVyf0iwog/CPk234w7+FXVHr1DZu+xJ3TpFZSOLh9XIUNQzjR2OJXft4+U0PvqwNwldaCV9NI271xfH60Fit9CKKkuJKfPls31jg0OE8IpflGLcm8Ddj0au+OlwoLs/C1zZvbCF6u4onHU245JfjXq7D1Y5RvHprrDP047cDCF9X5xbAxesR3P92x1hjah/PH3fii8sBFJUGceVWD55tWk+eoijq/OpTmIU3h/+Hf1l+6moQ3FDbqn3cyiJ2To9Z2IzhSqkE8uJG/GnTWJbWPqbaQii63ITINzN4/sMqnk/FcKu2EiXhYbw2ttLNwtGG42/fdurrHWahSMp4tb2DHy3svjUD+Q6+Dgfgu96Dr18k8PqHOO6HgyiRMsxjvH/Rg0tiAMKPZ/BqM4Hn33RKXepw70XGDLx63Aif/zbuT63i9foSvu6S35c7MeUwHRRFUedRhTYLKuiXTv+rqynwQu1Dw3A8p8YsvJag7QsP4H5DJb54nDSW6nr/fRQXS5vERDh64m9n8EfpqYfNkQRlFtSoQ2kjHmYZjhSe3VLrKrPNguV3ltb7xAg04Ym12m/juOUP4f66+qGXe7FjHu+1lbpUuT6z3MN5/TynUto6XTt40hDA1T87RyAoiqLOnwptFlpzGFFwovZ1K9OdJPqv6Z3STdf1+bHS24iSawNYUb/XBlBdGsG4Yxt39jEkcbN+eN9lnUFO5blzSsxCAg9rK3H1G+nV/7kJRddjmdECHGKqJSDBeMkWjE39+O0wnnxvBFwxCxdrOhG5FcClBwl9mak3o/hSTESkoykTxEXHmYX3UxEU1fThlfFblwr0cr5aoNfPPfzMagREYnBK/FE8V3/Lsa8qs+NoulcPlKGIH21UKIqizokKaRZU/oGbCfDinxcf4+X//jf+7t9va79PnMOwEZPAq4+CD264rM+T7bkYOh7NY1v9plk4QusDuGL23jdj+MI2MpDAfRWMp04wv6+ZhR58p6Yb5N/nll2UCfGFh/FS/ZvLyMKLHlz0R+zTBUbuw6UHq/JjH0/ClbjSZzcnmukpbsUztd+hGokIImKZljBHJI7O0aAoijo/KqRZ+IfJu1lmwAtlFMx9Q8+/0pappEdrmUex3quPgkclQAcfJV23+WhoFtylBex00FSJjhJ801MRS7h3OYA/fm/89JJmFvrw8u2SBPOg7GMGZ9X716crNNPgMAsqobHISqnleIe6WbnUNoHXKvC/TeDrNrlZSmWZZhaA3akISvxNuP9iH+9xiN3vB3D1shiB0lZ8rZmMFJ53hOCr7cHUtjqnfTEtrbikpkRsoygURVHnU4U0C04z4IXVKKi/reusZbqTQL/Eg9DwjvRrpUN4LYZ1bfkhZruCKGmZwZ5l+72xVvgkJi0Yv7cXY2huCKFEjUxUNaLZHElQ64ZviwkZdR9ZeJfESFcrqqtUgnwAFeEePN04NI5jmIXYDAZb6vSp+JomtI0lkDL3zzILOxjvVeVJDJKObPXNPoyky3PnFJgFPRhb8xQ081BrBtFcRxbELMifLx/IBWkxhvh/6MMlY3TAzSwUNcTwcjOJ12l2sGs53PvtOCLX5SKJkbhQHMAXHRN40ha0nHMKLx+34qLcAJrxqGnFwykxDOqYZjliOp7IhfRpZZSjpKEPU2IY1M2xa2xCURR1XlUos+CcgvAaZfAyCopjpyK0oNuEoS35eyOGYGkj+s2piMUelMkzf/zA+P1rCiM3JbB3J/TfW6Ool8B8I7aEzd0UtpdHcUOCf/N0Slt/tFlQRkQ6m9d6MLK2j73dJOIqQT5tVHSz4FPmY3gJ61s7WJnsQVCO1TxpjDbYyktp5ZWFBzC+toPtrQTGu5u00fjZd2q9O5/fLKgEQiOAWnv3F4rr8FBLIDRyFrpOmrOgmwXt7Qq/9OzfHEqvPphOQHQ1C17TEBa9f7OPXW2kQE09BHDrW4eBOUxh901KP081feEyavD+rZQh56T0uq9RqxdFUdR5V6HMQm/iP9LB/p/i97Q3G4b++r3NBCiOMwoKVZa1bCcrvfoouJ7YqBIdK1GdnopYRUdNJvh/OIjjhr8O0bXM/qmDVKa3LyYgfleZiVXtt+fIggT4vbQJETSj0oqn2jJlFqQDenfGUraE1keNmXO1lrc7IaZF9pVearq8XxOI1gZwZ/ro0YXPbhZePQih6PoAntt69vO4V5vJA8i8DaH9zMjlbYi0WcAO/iRu6+rjYe3NhXs/aAtzNwubowhfj2LqjfFbaXsYV6WxtXwEMTPficv78rE+JaFLGZSQJclyFQ/DTbiXnhZRUiMm1qkSiqKo86tPYRasr0FaDcNJjILC2yyogGrPU9DMQ63Zw5ff3XXpoL032Sq9/4H0OkVqawkjsQF03I2gvkG2LS1HmXQY1brjzMLK9Cj6u6NovnkbwZpK6VDfNgK+PrIQcuYsqJGOqihm1d/W8tRy6ZBr3yuyoDrpWWVY+MxmYRX3pNJurw++fiyuqHbAeAsh852Fe9/M4KXHdxYyZgHYfSaNr0Yq0uUcYRY8v7OQ1EzHxVsxfLcuRubFhDYlcaVvNT3Sob7fcFG9afFsVYxOAt+pKYnLETxLG4xDvHwgx6npxJMXUsb6PJ5IfUrE9TFfgaKo34MKZRac0xBOw3BSo6DwnIZY60OFNuqdPQreb44eqKDs78T4QQojLQGbsUjJOjU1EGofwNDkDGbXkhi5GziBWdiXsoLw1UbQEZvA+NwqVpZjCJV+hFmQcxzZ2sGmg+1TOw2hcgmkwk+svXZTqvdeWmd8y0BpH8//HM18wfFyI8IPsr/gaDUL6nsIYX+5LR/iqARHJ7bRhjfzeKgljshyfx3CffOOPINDvH4WxdUaldcgxqIhiq/XHa9SYgdTD25rX4FUX3D8oiWGl9rIBEVR1PlXocyCwhn03T60dJxRUFi3d7LSLR3WawOY3UhiPc08OqTTWt1r5CVoUxMBNI+N4oa/CYMqt8HYX3uL4mbcMlWgchoqjzcL7+Jollhonc74sCzGxWYWyuFriduSK9XxihpcytsdRb2zPCljZTFxis0CRVEU9btQIc2CW1Kj1TCcxCiofAdnuRlUPoL03mM7Weu03IBa42NKxm+fPwBfOrdBR3szoiqCocUktreSmI1FJOCfZBrCmP7omsGKGgFYjqOjQXVM7SMLJVVN2QmOZv6ErbwU4u3q7bwoni6rc0kg3nsbJVl5DHY+r1m4cgV4+FD/W/37e/5NURR1jlVIs+CcijBRhiH84nijoPCcgjB68kNuwXRrGCFrT11+B4v11yvt2+4j3t2KCmN0OdQ+gaETTUOoKYxR3LkWhE/KLaltRf/YQNY0xA0xCkMnfXXy3Q7G5Vy0VyelzLJrnRhcNozFEXz+kYWvvtKDpvr39/yboijqHKuQZkHx6T73/PuE0xAURVFUwVVos6CmHNRUgpsZ8MJ83dKtTJKBZoGiKIoquAptFhQq6OcywqC2pVE4GTQLFEVRVMH1KcyCico/8PqSo1rnmaNAsqBZoCiKogquT2kWrChToD62pKBByB+aBYqiKKrg+lxmgfw20CxQFEVRBRfNwtmGZoGiKIoquGgWzjY0CxRFUVTBRbNwtqFZoCiKogoumoWzDc0CRVEUVXDRLJxtcjYL/ps/4y8L74zLT1EURVHeUjHD3/yTa0whZ4OczcJff/pFu+jKJRJCCCHHoTqZm//zi2tMIWeDnM0CIYQQQn5f0CwQQgghxBOaBUIIIYR4QrNACCGEEE9oFgghhBDiCc0CIYQQQjyhWSCEEEKIJzQLhBBCCPGEZoEQQgghntAsEEIIIcQTmgVCCCGEeEKzQAghhBBPaBYIIYQQ4gnNAiGEEEI8oVkghBBCiAfA/wOVsjz+mL9kwwAAAABJRU5ErkJggg=="},66298:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/12-confirm-symbol-427645cce85aadbc75f1b5c16b5b4789.png"},88590:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/13-confirm-symbol-txn-1e41af15e979e0266ab441c64ce789fd.png"},23784:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/14-symbol-reserved-bac6a23fff8d7f40d4cfc28bfbf65b4a.png"},2655:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/16-returning-later-775b4ca02e315d9751c8b67ec3c79868.png"},31392:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/17-token-details-b12ecb3069d7b77cd71bde1e10329bfa.png"},22785:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/18-confirm-details-1ab993c0c88d3aef5654e1088599f49d.png"},53454:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/19-sign-details-txn-8666ae185a4d1b602ef1e5d0a7f55420.png"},73832:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/20-success-74387ea19a9b995688249cd91d5ac9a7.png"},25033:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/21-success-2-953d4b7622f4f03bf2df60494207c500.png"}}]);