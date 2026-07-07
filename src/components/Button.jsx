function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
