function Background({ children }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-pink-100 via-rose-50 to-pink-200">
      {children}
    </div>
  );
}

export default Background;
