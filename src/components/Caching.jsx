import React, { useCallback, useMemo, useState } from "react";

function Caching() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    const myAns = useMemo(() => {
        console.log("hi");
        return number / 2;
    }, [number]);

    const myFnc = useCallback(() => {
         console.log(number2 / 2);
    }, [number2]);

    // myFnc();
    // const myAns2 = number2 / 2;
    

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
          />
          <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
          <h1>{myAns}</h1>
          <h2>{number2}</h2>

          <button onClick={myFnc}>Click</button>
    </div>
  );
}

export default Caching;
