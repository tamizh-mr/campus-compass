
import React,{useState} from "react";
import {Icon} from "./UI";
const nav=[["dashboard","LayoutDashboard","Overview"],["colleges","GraduationCap","Colleges"],["academics","BookOpen","Academics"],["career","BriefcaseBusiness","Career"],["scholarships","Award","Scholarships"],["events","CalendarDays","Events"],["network","Users","Network"],["assistant","Sparkles","AI Assistant"],["saved","Bookmark","Saved"],["profile","UserRound","Profile"]];
export default function Layout({page,setPage,dark,setDark,children}){
 const [mobile,setMobile]=useState(false);
 return <div className={dark?"app dark":"app"}>
  <aside className={mobile?"sidebar open":"sidebar"}>
   <button className="brand" onClick={()=>setPage("landing")}><span><Icon name="Compass" size={24}/></span><div>Campus<b>Compass</b></div></button>
   <nav>{nav.map(([id,ic,label])=><button key={id} className={page===id?"active":""} onClick={()=>{setPage(id);setMobile(false)}}><Icon name={ic}/>{label}</button>)}</nav>
   <div className="sidebottom"><button onClick={()=>setPage("admin")}><Icon name="ShieldCheck"/>Admin demo</button></div>
  </aside>
  <div className="shell">
   <header className="topbar"><button className="mobilemenu" onClick={()=>setMobile(!mobile)}><Icon name="Menu"/></button><div className="topsearch"><Icon name="Search"/><span>Search Campus Compass</span><kbd>⌘ K</kbd></div><div className="topactions"><button onClick={()=>setDark(!dark)}><Icon name={dark?"Sun":"Moon"}/></button><button><Icon name="Bell"/></button><button className="avatar">TM</button></div></header>
   <main>{children}</main>
  </div>
 </div>
}
