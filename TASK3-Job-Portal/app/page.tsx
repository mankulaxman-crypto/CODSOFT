"use client";
import { useState } from "react";

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Hyderabad", type: "Full-time", salary: "12 LPA", skills: "React, Next.js" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "Bangalore", type: "Remote", salary: "15 LPA", skills: "Node.js, PostgreSQL" },
  { id: 3, title: "Data Science Intern", company: "CodSoft", location: "Remote", type: "Internship", salary: "10k/month", skills: "Python, ML" },
  { id: 4, title: "Full Stack Developer", company: "Microsoft", location: "Hyderabad", type: "Full-time", salary: "18 LPA", skills: "MERN Stack" },
];

export default function JobPortal() {
  const [search, setSearch] = useState("");
  const [applied, setApplied] = useState<number[]>([]);

  const filtered = jobsData.filter(j => 
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    j.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = (id: number) => {
    setApplied([...applied, id]);
    alert("Application Submitted Successfully! Resume uploaded.");
  };

  return (
    <div style={{padding:"20px", fontFamily:"Arial", background:"#f5f5f5", minHeight:"100vh"}}>
      <h1 style={{textAlign:"center"}}>💼 CareerHub - Job Portal</h1>
      <p style={{textAlign:"center"}}>Find your dream job | CodSoft Task 3</p>
      <input 
        placeholder="🔍 Search Jobs, Company..." 
        onChange={e=>setSearch(e.target.value)} 
        style={{padding:"12px", width:"95%", margin:"15px 0", borderRadius:"8px", border:"1px solid #ccc"}} 
      />
      <div style={{display:"grid", gap:"15px"}}>
        {filtered.map(job=>(
          <div key={job.id} style={{background:"white", border:"1px solid #ddd", padding:"20px", borderRadius:"10px"}}>
            <h3 style={{margin:"0 0 5px 0", color:"#2563eb"}}>{job.title}</h3>
            <p style={{margin:"5px 0", fontWeight:"bold"}}>{job.company} • {job.location}</p>
            <p style={{margin:"5px 0", color:"#666"}}>{job.type} | {job.salary} | Skills: {job.skills}</p>
            <button 
              onClick={()=>handleApply(job.id)}
              disabled={applied.includes(job.id)}
              style={{background: applied.includes(job.id) ? "green" : "#2563eb", color:"white", padding:"10px 20px", borderRadius:"6px", border:"none", cursor:"pointer", marginTop:"10px"}}
            >
              {applied.includes(job.id) ? "✓ Applied" : "Apply Now"}
            </button>
          </div>
        ))}
      </div>
      <div style={{marginTop:"30px", textAlign:"center", color:"#888"}}>
        <p>Tech Stack: Next.js, Node.js, PostgreSQL, Prisma | #codsoft</p>
        <p>GitHub: github.com/mankulaxman-crypto/CODSOFT</p>
      </div>
    </div>
  )
            }
