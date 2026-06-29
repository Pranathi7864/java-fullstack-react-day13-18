import React, { useState } from "react";

export const Taskpage = () => {
  const [taskn, settask] = useState("");
  const [namen, setname] = useState("");
  const [duedaten, setdue] = useState("");
  const [msg, setMsg] = useState("");

  function handleClick() {
    fetch("http://localhost:8080/loginadd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: taskn, name: namen, duedate: duedaten }),
    });
  }

  function handleClick2() {
    fetch("http://localhost:8080/login")
      .then((res) => res.json())
      .then((data) => {
       
        const txt = data.map((item) => `${item.task}`).join("\n");
        setMsg(txt);
      });
  }

  return (
    <div>
      <input type="text" value={taskn} onChange={(e) => settask(e.target.value)} placeholder="Task" />
      <input type="text" value={namen} onChange={(e) => setname(e.target.value)} placeholder="Name" />
      <input type="text" value={duedaten} onChange={(e) => setdue(e.target.value)} placeholder="Duedate" />
      <button onClick={handleClick}>ADD TASK</button>
      <br />
      <button onClick={handleClick2}>DISPLAY TASK</button>
      
      <pre>{msg}</pre> 
    </div>
  );
};
