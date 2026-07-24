
import React from "react";
import * as Icons from "lucide-react";
export const Icon=({name,size=20,className=""})=>{const C=Icons[name]||Icons.Circle;return <C size={size} className={className}/>};
export const Button=({children,variant="primary",className="",...p})=><button className={`btn ${variant} ${className}`} {...p}>{children}</button>;
export const Card=({children,className=""})=><div className={`card ${className}`}>{children}</div>;
export const Badge=({children})=><span className="badge">{children}</span>;
export const Stat=({icon,title,value,sub})=><Card className="stat"><span className="iconbox"><Icon name={icon}/></span><div><b>{value}</b><span>{title}</span>{sub&&<small>{sub}</small>}</div></Card>;
export const Empty=({title="Nothing here yet",text="Try changing your filters."})=><div className="empty"><Icon name="SearchX" size={34}/><h3>{title}</h3><p>{text}</p></div>;
