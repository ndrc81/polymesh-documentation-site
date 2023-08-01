"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[11630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,p=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?o.createElement(p,a(a({ref:t},m),{},{components:n})):o.createElement(p,a({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={title:"Governance",description:"",subsite:"polymesh-docs"},a=void 0,s={unversionedId:"network/governance",id:"network/governance",title:"Governance",description:"",source:"@site/polymesh-docs/network/governance.mdx",sourceDirName:"network",slug:"/network/governance",permalink:"/polymesh-docs/network/governance",draft:!1,tags:[],version:"current",frontMatter:{title:"Governance",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Fees",permalink:"/polymesh-docs/network/fees"},next:{title:"Ledger Hardware Wallet",permalink:"/polymesh-docs/network/ledger"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Governance Flow Diagram",id:"governance-flow-diagram",level:2},{value:"Polymesh Improvement Proposals",id:"polymesh-improvement-proposals",level:2},{value:"Signalling",id:"signalling",level:2},{value:"Committees",id:"committees",level:2},{value:"Governing Council",id:"governing-council",level:2},{value:"Release Coordinator",id:"release-coordinator",level:2}],m={toc:c};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Polymesh includes on-chain governance to manage network upgrades, changing parameters of the network (e.g. slashing percentages), permissioning network roles and distributing treasury funds."),(0,i.kt)("p",null,"The governance system is designed to allow both community members and technical experts to collaborate on improving Polymesh and managing network changes."),(0,i.kt)("p",null,"There are three main groups of actors in Polymesh governance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"POLYX token holders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Committees (e.g. Technical Committee, Upgrade Committee)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Governing Council"))),(0,i.kt)("p",null,"The governance process begins either via a community submitted proposal, which is then curated by other POLYX token holders, or a committee submitted proposal. In both cases the governing council is responsible for accessing the change and determining whether it should be ratified, rejected or temporarily skipped."),(0,i.kt)("p",null,"The governance system consists of POLYX token holders populating and curating a list of PIPs ordered by their importance to the community. The governing council will then consider this list of PIPs, in their curated order, on a periodic basis (e.g. once per month), ratifying, rejecting or skipping each PIP in order as appropriate."),(0,i.kt)("p",null,"In addition to the Governing Council there are other committees (e.g. Technical Committee) that can submit PIPs directly to the Governing Council for review, bypassing the community curation process. However generally we expect most PIPs to go through the usual flow of the community curation process, and for direct committee submitted proposals to be rare."),(0,i.kt)("h2",{id:"governance-flow-diagram"},"Governance Flow Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Governance Flow Diagram",src:n(59820).Z,width:"3150",height:"2513"})),(0,i.kt)("h2",{id:"polymesh-improvement-proposals"},"Polymesh Improvement Proposals"),(0,i.kt)("p",null,"Polymesh Improvement Proposals (PIPs) represent an on-chain action that the community or a committee is recomending to the Governing Council."),(0,i.kt)("p",null,"Polymesh Improvement Proposals (PIPs) represent any of change to the network, and can be created both by dedicated committees as well as any POLYX token holder and are actioned by the Governing Council."),(0,i.kt)("p",null,"A PIP is an on-chain dispatchable function w/ parameters alongside some metadata giving some additional context as to why the function should be called. For example, it may be a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"system::set_code(new_binary)")," which is linked to a Github PR describing the change."),(0,i.kt)("p",null,"These PIP dispatchables can only be executed by the Governing Council and not an individual user."),(0,i.kt)("p",null,"PIPs are also used to permission certain on-chain identities to have special priviledged roles. This includes adding and removing permissioned operators and CDD service providers."),(0,i.kt)("p",null,"Some common examples include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"network upgrades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"treasury disbursement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tokenomics parameter change")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"adding new permissioned operators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"adding new permissioned CDD service providers"))),(0,i.kt)("h2",{id:"signalling"},"Signalling"),(0,i.kt)("p",null,"It is important that PIPs are curated by community members (POLYX token holders) to provide feedback to the Governing Council on the relative importance to the community of different PIPs."),(0,i.kt)("p",null,"Any POLYX token holder, in addition to being able to submit a PIP for consideration, can signal their view on other community submitted PIPS, both postiviely or negatively, by bonding POLYX to the relevant PIP. The POLYX token holders signal is proportional to the amount of POLYX bonded by that community member."),(0,i.kt)("p",null,"When the Governing Council triggers a PIP snapshot, we take these signals and use them to order the community submitted PIPs for consideration by the Governing Council."),(0,i.kt)("p",null,"Currently we take a linear count of positive and negative signals and use these to order PIPs, but in the future we can consider more expressive mechanisms, such as quadratic voting by leveraging our ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-docs/primitives/confidential-identity"},"confidential identity")," model."),(0,i.kt)("p",null,"Token holders can unbond their POLYX and remove their support (or lack of support) from a PIP at any time. Bonding POLYX to signal on different PIPs does not prevent token holders from staking their POLYX."),(0,i.kt)("h2",{id:"committees"},"Committees"),(0,i.kt)("p",null,"Polymesh governance includes committees. Each committee is a group of identities which a specific remit to manage certain types of network changes."),(0,i.kt)("p",null,"Each committee has a membership, with the current members being responsible for voting new members in or existing members out."),(0,i.kt)("p",null,"Associated with each committee is a voting threshold - for example, if the committee has 5 members, and a threshold of 50%, then at least 3 members of the committee must agree on an action before it is executed by the committee."),(0,i.kt)("p",null,"Committees can submit PIPs which are included and then put in front of the Governance Council for consideration. The Governing Council can choose to ratify, reject or ignore a committee submitted PIP."),(0,i.kt)("p",null,"Unlike community submitted PIPs, a committee submitted PIP is not subject to signalling from the community of POLYX token holders, and is always eligable for actioning by the Governing Council."),(0,i.kt)("h2",{id:"governing-council"},"Governing Council"),(0,i.kt)("p",null,"The Polymesh Governing Council is ultimately responsible for actioning PIPs which were submitted either via the community curation process, or directly by one of the committees."),(0,i.kt)("p",null,"Any member of the governing council can trigger a PIP snapshot. The snapshot summarises the current list of PIPs (both from the community and committees) and orders community based PIPs based on their signal."),(0,i.kt)("p",null,"The Governing Council then meet to discuss the PIPs included in the snapshot. For community currated PIPs, the Governing Council must work through them based on their curated order, choosing whether to ratify, reject or skip each PIP in turn."),(0,i.kt)("p",null,"For PIPs which are skipped, we track how many times they have been skipped, and limit the Governing Council to skipping a particular PIP too many times. This is designed to give the Governing Council the flexibility they need to reasonable govern the evolution of the Polymesh network, as well as ensuring that community signalling of the relative importance of PIPs is closely considered by the Governing Council."),(0,i.kt)("p",null,"For PIPs submitted by committees rather than through the community curation process, the Governing Council is free to ratify or reject these PIPs in any order."),(0,i.kt)("p",null,"The Governance Concil can be thought of as a multisig controlled by its members, and has an associated voting threshold that must be reached in order to execute an action through the Governing Council. This applies both for PIP management as well as some additional non-PIP related actions that the Governing Council may need to execute."),(0,i.kt)("p",null,"These non-PIP actions include managing the membership of the Governing Council itself, with existing members needing to agree and vote on the addition or removal of members, as well as changes to the voting structure, for example the voting threshold."),(0,i.kt)("p",null,"The Goverance Council is also able to issue a ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-docs/primitives/cdd"},"Customer Due Diligence")," claim should the need arise."),(0,i.kt)("h2",{id:"release-coordinator"},"Release Coordinator"),(0,i.kt)("p",null,"One member of the Governing Council is elected as the Release Coordinator. The role of the Release Coordinator is to schedule PIPs that have been ratified by the Governing Council."),(0,i.kt)("p",null,"Every ratified PIP has a default execution time, set as a specific amount of blocks from the time it was ratified. The Release Coordinator can re-schedule any PIP to a different execution block or choose to enact it immediately. This provides flexibility to coordinate the release of critical fixes, and ensure that any stakeholders in a particular PIP are coordinated and well prepared before the PIP is executed."),(0,i.kt)("p",null,"Release coordinators are elected by the governing council members, and must be a current member of the governing council."))}h.isMDXComponent=!0},59820:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Polymesh_Governance-a68e747d368f68730f4df70d601bba59.png"}}]);