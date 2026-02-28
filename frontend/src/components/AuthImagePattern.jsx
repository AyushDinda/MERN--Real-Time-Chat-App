const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-80px]" />

      <div className="relative max-w-md text-center">

        {/* Animated Grid */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-lg
                transition-all duration-500
                hover:scale-110 hover:bg-white/10
                ${i % 2 === 0 ? "animate-pulse" : ""}
              `}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-slate-400 leading-relaxed text-lg">
          {subtitle}
        </p>

      </div>
    </div>
  );
};

export default AuthImagePattern;