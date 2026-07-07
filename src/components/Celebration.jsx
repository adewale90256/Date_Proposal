import Confetti from "react-confetti";
import { useEffect, useState } from "react";

function Celebration() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={250}
      recycle={false}
    />
  );
}

export default Celebration;
