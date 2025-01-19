import React, { useEffect, useState } from "react";

const LiveFeed = () => {
  const [label, setLabel] = useState("No detection");
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000/ws");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLabel(data.label);
      setFrame(data.frame);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Live YOLO Detection</h1>
      <p>Label: {label}</p>
      {frame && (
        <img
          src={`data:image/jpeg;base64,${frame}`}
          alt="Live Feed"
          style={{ width: 640, height: 480 }}
        />
      )}
    </div>
  );
};

export default LiveFeed;
