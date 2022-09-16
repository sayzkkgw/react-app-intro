import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("begin");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const changeFaceShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // console.log("Effect!");
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <ColorfulMessage color="blue">Goog morning!</ColorfulMessage>
      <ColorfulMessage color="pink">Good night!</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="Good night" /> */}
      <button onClick={onClickCountUp}>Count up!</button>
      <p>{num}</p>
      <br />
      <button onClick={changeFaceShow}>On/Off</button>
      {faceShowFlag && <p>(^^)</p>}
    </>
  );
};

export default App;
