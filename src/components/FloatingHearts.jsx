import { FaHeart } from "react-icons/fa";

const hearts = [
  {
    left: "8%",
    size: "text-2xl",
    delay: "0s",
    duration: "12s",
    color: "text-pink-300",
  },
  {
    left: "22%",
    size: "text-4xl",
    delay: "2s",
    duration: "15s",
    color: "text-rose-300",
  },
  {
    left: "38%",
    size: "text-xl",
    delay: "5s",
    duration: "10s",
    color: "text-pink-400",
  },
  {
    left: "56%",
    size: "text-3xl",
    delay: "1s",
    duration: "14s",
    color: "text-rose-400",
  },
  {
    left: "72%",
    size: "text-5xl",
    delay: "4s",
    duration: "18s",
    color: "text-pink-300",
  },
  {
    left: "88%",
    size: "text-2xl",
    delay: "7s",
    duration: "13s",
    color: "text-rose-300",
  },
];

function FloatingHearts() {
  return (
    <>
      {hearts.map((heart, index) => (
        <FaHeart
          key={index}
          className={`floating-heart ${heart.size} ${heart.color}`}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: 0.3,
          }}
        />
      ))}
    </>
  );
}

export default FloatingHearts;
