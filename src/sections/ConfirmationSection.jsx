function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
