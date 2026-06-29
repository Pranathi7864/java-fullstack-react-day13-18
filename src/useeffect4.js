import React, { useState, useEffect } from 'react';

function Effecthookeg() {
  const [message, setMessage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setMessage((img) =>
        img ===
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
          ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeEt_Z-BXS4vc2R-Ryg8iaqFYDuQKYZ0-qM5J2RMzzA&s=10&#39;
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
      );
    }, 2000); // change every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '0px' }}>
      <h1>Golden Retriever</h1>

      <img
        src={message}
        alt="Golden Retriever"
        style={{
          width: '600px',
          height: '600px'
        }}
      />
    </div>
  );
}

export default Effecthookeg;