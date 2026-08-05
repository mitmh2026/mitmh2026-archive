"use strict";(self.webpackChunkhunt2026=self.webpackChunkhunt2026||[]).push([["9111"],{16584:function(e,r,s){var a=s(86106),l=s(7378),n=s(79124);s(78070);let t=e=>(0,a.jsx)("details",{className:"mb-4",...e}),d=({revealed:e,onClick:r,children:s})=>(0,a.jsx)("tr",{onClick:r,className:`cursor-pointer ${e?"":"text-black bg-black"} hover:text-current hover:bg-transparent`,children:l.Children.map(s,e=>l.isValidElement(e)&&"td"===e.type?l.cloneElement(e,{className:"py-1 px-2"}):e)}),o=({children:e})=>(0,a.jsx)("table",{className:"border-collapse border border-black",children:e}),c=({children:e})=>(0,a.jsx)("table",{className:"border-collapse border border-black",children:e}),i=({hint:e})=>{let[r,s]=(0,l.useState)(!1),n=(0,l.useCallback)(()=>{s(!0)},[]);return(0,a.jsxs)(d,{revealed:r,onClick:n,children:[(0,a.jsx)("td",{children:e.order}),(0,a.jsx)("td",{children:e.description}),(0,a.jsx)("td",{children:e.nudge})]})},b=({guess:e,reply:r})=>{let[s,n]=(0,l.useState)(!1),t=(0,l.useCallback)(()=>{n(!0)},[]);return(0,a.jsxs)(d,{revealed:s,onClick:t,children:[(0,a.jsx)("td",{children:e}),(0,a.jsx)("td",{children:r})]})},x=document.getElementById("solution-hints");if(x){let e=window.hints;console.log("mounting hints"),(0,n.hydrateRoot)(x,(0,a.jsx)(({hints:e})=>0===e.length?null:(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Hints"}),(0,a.jsxs)(c,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"border border-black py-1 px-2",children:"Order"}),(0,a.jsx)("th",{className:"border border-black py-1 px-2",children:"Description"}),(0,a.jsx)("th",{className:"border border-black py-1 px-2",children:"Nudge"})]})}),(0,a.jsx)("tbody",{children:e.map(e=>(0,a.jsx)(i,{hint:e},e.order))})]})]}),{hints:e}))}let h=document.getElementById("solution-canned-responses");if(h){let e=window.cannedResponses;console.log("mounting canned responses"),(0,n.hydrateRoot)(h,(0,a.jsx)(({cannedResponses:e})=>0===e.length?null:(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Canned responses"}),(0,a.jsxs)(o,{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"border border-black py-1 px-2",children:"Guess"}),(0,a.jsx)("th",{className:"border border-black py-1 px-2",children:"Reply"})]})}),(0,a.jsx)("tbody",{children:e.map(e=>{let r=(0,a.jsxs)(a.Fragment,{children:[e.reply,e.link&&(0,a.jsx)("a",{href:e.link.href,children:e.link.display})]});return(0,a.jsx)(l.Fragment,{children:e.guess.map(e=>(0,a.jsx)(b,{guess:e,reply:r},e))},e.guess.join(","))})})]})]}),{cannedResponses:e}))}},78070:function(e,r,s){s.d(r,{$n:()=>o,Ad:()=>_,EY:()=>v,Iu:()=>x,Kp:()=>h,VU:()=>m,cn:()=>d,ks:()=>b,nR:()=>c,pm:()=>p,pr:()=>u,w9:()=>j});var a=s(86106),l=s(7378),n=s(28724),t=s(11545);function d(...e){return(0,t.QP)((0,n.$)(e))}function o({children:e,className:r="",...s}){return(0,a.jsx)("button",{className:d(`cursor-pointer 
        bg-[var(--gold-400)] 
        rounded-md 
        border border-[var(--black)] 
        shadow-[0_0_0_1px_var(--gold-400),_0px_1px_3px_hsl(var(--black)_/_0.8)] 
        p-2 
        text-[var(--black)] 
        text-base 
        font-body 
        m-1 
        inline-flex 
        items-center 
        justify-center
        hover:bg-[var(--accent-yellow)] 
        hover:shadow-[0_0_0_1px_var(--accent-yellow),_0px_2px_8px_hsl(var(--black)_/_0.5)] 
        hover:text-[var(--true-black)]
        focus-visible:shadow-[0_0_0_0.25rem_var(--black)]
        disabled:bg-[var(--gray-100)] 
        disabled:shadow-[0_0_0_1px_var(--gray-300)] 
        disabled:border-[var(--gray-400)] 
        disabled:text-[var(--gray-300)] 
        disabled:cursor-not-allowed
        ${r}`),...s,children:e})}function c({children:e,className:r="",...s}){return(0,a.jsx)(o,{className:`
        bg-[var(--gray-100)] 
        shadow-[0_0_0_1px_var(--gray-100),_0px_1px_3px_hsl(var(--black)_/_0.8)]
        hover:bg-[var(--white)] 
        hover:shadow-[0_0_0_1px_var(--white),_0px_2px_8px_hsl(var(--black)_/_0.3)] 
        hover:text-[var(--true-black)]
        ${r}`,...s,children:e})}let i=`
  rounded-md 
  border border-[var(--black)] 
  shadow-[0_0_0_2px_var(--gold-700)] 
  p-2 
  font-body 
  text-[var(--black)] 
  text-base 
  m-2 
  bg-[var(--gray-000)] 
  focus:shadow-[0_0_0_0.25rem_var(--black)]
  disabled:bg-[var(--gray-100)] 
  disabled:shadow-[0_0_0_2px_var(--gray-300)] 
  disabled:border-[var(--gray-400)] 
  disabled:text-[var(--gray-500)] 
  disabled:cursor-not-allowed
`,b=(0,l.forwardRef)(function(e,r){return(0,a.jsx)("input",{className:i,...e,ref:r})});function x(e){return(0,a.jsx)("select",{className:`${i} w-full`,...e})}function h({children:e,className:r=""}){return(0,a.jsx)("span",{className:`font-mono ${r}`,children:e})}function u({children:e,className:r=""}){return(0,a.jsx)(h,{className:`font-bold ${r}`,children:e})}function p({children:e,className:r=""}){return(0,a.jsx)("div",{className:`relative max-w-full overflow-x-auto ${r}`,children:e})}function _({children:e,className:r=""}){return(0,a.jsx)("table",{className:`w-full border-collapse ${r}`,children:e})}function m({children:e,className:r=""}){return(0,a.jsx)("th",{className:`border-b border-black p-2 ${r}`,children:e})}function j({children:e,className:r=""}){return(0,a.jsx)("td",{className:`p-2 ${r}`,children:e})}let v=({cells:e,tableClasses:r})=>(0,a.jsx)("table",{className:r,children:e.map((e,r)=>(0,a.jsx)("tr",{children:e.map((e,r)=>{let s="transparent"===e.type?"bg-transparent border-none":"bg-white border border-black border-solid";return(0,a.jsx)("td",{className:d("h-10 min-h-10 w-10 min-w-10 text-center",s,e.tailwindClasses),children:e.content},r)})},r))})}},function(e){e.O(0,["3311"],function(){return e(e.s=16584)}),e.O()}]);