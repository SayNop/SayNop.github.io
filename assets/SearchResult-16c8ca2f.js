import{u as I,f as ee,g as j,h as B,Z as le,i as ae,t as se,j as x,k as D,l as te,w as M,m as a,n as _,p as F,q as U,s as re,v as ue,x as ie,y as ne,R as oe,O as ce,z as ve,A as pe,B as he,C as ye,D as de,E as me,F as b,G as fe}from"./app-4c2ff166.js";const ge="SEARCH_PRO_QUERY_HISTORY",y=I(ge,[]),Re=()=>{const{queryHistoryCount:r}=b,n=r>0;return{enabled:n,queryHistory:y,addQueryHistory:t=>{n&&(y.value.length<r?y.value=Array.from(new Set([t,...y.value])):y.value=Array.from(new Set([t,...y.value.slice(0,r-1)])))},removeQueryHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}},He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:E}=b,d=I(He,[]),Qe=()=>{const r=j(),n=E>0,t=s=>r.resolve({name:s.key,..."anchor"in s?{hash:`#${s.anchor}`}:{}}).fullPath;return{enabled:n,resultHistory:d,addResultHistory:s=>{if(n){const u={link:t(s),display:s.display};"header"in s&&(u.header=s.header),d.value.length<E?d.value=[u,...d.value]:d.value=[u,...d.value.slice(0,E-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},ke=r=>{const n=oe(),t=B(),{search:s,terminate:u}=ce(),f=x(!1),g=ve([]);return pe(()=>{const m=()=>{g.value=[],f.value=!1},w=fe(R=>{f.value=!0,R?s({type:"search",query:R,locale:t.value,options:n}).then(h=>{g.value=h,f.value=!1}).catch(h=>{console.error(h),m()}):m()},b.searchDelay);M([r,t],()=>w(r.value),{immediate:!0}),he(()=>{u()})}),{searching:f,results:g}};var we=ee({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(r,{emit:n}){const t=j(),s=B(),u=le(ae),{enabled:f,addQueryHistory:g,queryHistory:m,removeQueryHistory:w}=Re(),{enabled:R,resultHistory:h,addResultHistory:O,removeResultHistory:Y}=Qe(),P=f||R,S=se(r,"query"),{results:H,searching:z}=ke(S),o=x({isQuery:!0,index:0}),p=x(0),c=x(0),L=D(()=>P&&(m.value.length>0||h.value.length>0)),C=D(()=>H.value.length>0),q=D(()=>H.value[p.value]||null),T=e=>t.resolve({name:e.key,..."anchor"in e?{hash:`#${e.anchor}`}:{}}).fullPath,G=()=>{const{isQuery:e,index:l}=o.value;l===0?o.value={isQuery:!e,index:e?h.value.length-1:m.value.length-1}:o.value={isQuery:e,index:l-1}},V=()=>{const{isQuery:e,index:l}=o.value;l===(e?m.value.length-1:h.value.length-1)?o.value={isQuery:!e,index:0}:o.value={isQuery:e,index:l+1}},Z=()=>{p.value=p.value>0?p.value-1:H.value.length-1,c.value=q.value.contents.length-1},J=()=>{p.value=p.value<H.value.length-1?p.value+1:0,c.value=0},K=()=>{c.value<q.value.contents.length-1?c.value=c.value+1:J()},N=()=>{c.value>0?c.value=c.value-1:Z()},A=e=>e.map(l=>ye(l)?l:a(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=de[e.index]||"$content",[i,k=""]=me(l)?l[s.value].split("$content"):l.split("$content");return e.display.map(v=>a("div",A([i,...v,k])))}return e.display.map(l=>a("div",A(l)))},Q=()=>{p.value=0,c.value=0,n("updateQuery",""),n("close")};return te("keydown",e=>{if(r.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const l=q.value.contents[c.value],i=T(l);g(r.query),O(l),t.push(i),Q()}}else if(R){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:l}=o.value;o.value.isQuery?(n("updateQuery",m.value[l]),e.preventDefault()):(t.push(h.value[l].link),Q())}}}}),M([p,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:S.value?!C.value:!L.value}],id:"search-pro-results"},S.value===""?P?L.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.history),m.value.map((e,l)=>a("div",{class:["search-pro-result-item",{active:o.value.isQuery&&o.value.index===l}],onClick:()=>{n("updateQuery",e)}},[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(l)}})]))])):null,R?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.history),h.value.map((e,l)=>a(U,{to:e.link,class:["search-pro-result-item",{active:!o.value.isQuery&&o.value.index===l}],onClick:()=>{Q()}},()=>[a(_,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>A(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:i=>{i.preventDefault(),i.stopPropagation(),Y(l)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:z.value?a(re,{hint:u.value.searching}):C.value?a("ul",{class:"search-pro-result-list"},H.value.map(({title:e,contents:l},i)=>{const k=p.value===i;return a("li",{class:["search-pro-result-list-item",{active:k}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),l.map((v,X)=>{const $=k&&c.value===X;return a(U,{to:T(v),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{g(r.query),O(v),Q()}},()=>[v.type==="text"?null:a(v.type==="title"?ue:v.type==="heading"?ie:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[v.type==="text"&&v.header?a("div",{class:"content-header"},v.header):null,a("div",W(v))])])})])})):u.value.emptyResult)}});export{we as default};
