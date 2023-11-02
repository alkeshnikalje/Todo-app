import { useEffect, useState } from "react";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  let [timer, setTimer] = useState(10);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(function () {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalId); // Stop the interval when count reaches 0
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <h1>{timer}</h1>
      <h1>{number}</h1>
      {timer > 0 && (
        <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
      )}
    </div>
  );
}

export default App;
