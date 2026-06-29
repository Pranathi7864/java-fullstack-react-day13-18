import React, { useState } from "react";

function Fullproject1() {
  const [msg, setMsg] = useState("");
  const [newMsg, setNewMsg] = useState("");
  const [searchId, setSearchId] = useState("");

  function getMessage() {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then((data) => setMsg(data));
  }

  function saveMessage() {
    fetch("http://localhost:8080/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newMsg }),
    })
      .then((res) => res.text())
      .then((data) => alert(data));
  }

  // Parses JSON array and converts it into one long plain text string
function getAllMessages() {
  fetch("http://localhost:8080/hello/all")
    .then((res) => res.json())
    .then((data) => {
      // Joins each message with a line break instead of a comma
      const plainText = data.map(item => `ID ${item.id}: ${item.text}`).join("\n");
      setMsg(plainText);
    });
}


  // Parses single JSON object and converts it into pure text
  function getMessageById() {
    fetch("http://localhost:8080/hello/" + searchId)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMsg(`ID ${data.id}: ${data.text}`);
        } else {
          setMsg("ID not found");
        }
      });
  }

  return (
    <div>
      <h1>This is "REACT FRONT END"</h1>
      <button onClick={getMessage}>Get Backend Message</button>
      <p style={{ whiteSpace: "pre-line" }}>Message from backend:<br/> {msg}</p>

      <input
        type="text"
        placeholder="New message"
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />
      <button onClick={saveMessage}>Save to DB</button>

      <br /><br />
      <button onClick={getAllMessages}>Display All Messages</button>
      
      <input
        type="number"
        placeholder="Enter ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={getMessageById}>Get by ID</button>
    </div>
  );
}

export default Fullproject1;
