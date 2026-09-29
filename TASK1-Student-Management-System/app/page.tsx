"use client";
import { useState } from "react";
export default function StudentSystem() {
  const [role, setRole] = useState("Student");
  const students = [
    { id: 1, name: "Laxman", class: "B.Tech 4th Year", fees: "Paid", attendance: "92%" },
    { id: 2, name: "Rahul", class: "B.Tech 3rd Year", fees: "Pending", attendance: "85%" },
  ];
  return (
    <div style={{padding:"20px", fontFamily:"Arial", background:"#f5f5f5", minHeight:"100vh"}}>
      <h1>🎓 Student Management System | CodSoft Task 1</h1>
      <div style={{display:"flex", gap:"10px", margin:"15px 0"}}>
        {["Admin","Teacher","Student"].map(r=>(
          <button key={r} onClick={()=>setRole(r)} style={{padding:"8px 15px", background: role===r ? "#2563eb":"#e5e7eb", color: role===r ? "white":"black", borderRadius:"5px", border:"none"}}>{r}</button>
        ))}
      </div>
      <h2>{role} Dashboard</h2>
      {students.map(s=>(
        <div key={s.id} style={{border:"1px solid #ddd", padding:"15px", margin:"10px 0", borderRadius:"8px", background:"white"}}>
          <h3>{s.name} - {s.class}</h3>
          <p>Fees: {s.fees} | Attendance: {s.attendance}</p>
          <button style={{background:"green", color:"white", padding:"5px 10px", borderRadius:"5px", border:"none"}}>View Details</button>
        </div>
      ))}
      <p style={{marginTop:"20px", color:"#888"}}>Tech: Next.js, PostgreSQL | #codsoft</p>
    </div>
  )
        }
