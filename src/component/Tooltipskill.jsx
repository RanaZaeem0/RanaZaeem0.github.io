export default function TooltipSkill({ label, children }) {
  return (
    <span className="relative inline-flex group">
      {/* trigger */}
      <span tabIndex={0} aria-label={label} className="inline-flex">
        {children}
      </span>

      {/* pill tooltip */}
      <span
        className="
          pointer-events-none select-none
          absolute top-[-60px] left-1/2 -translate-x-1/2
          z-50 whitespace-nowrap rounded-xl px-6 py-2
          text-[22px] font-semibold text-white

          /* look & feel */
          bg-gradient-to-b from-[#131212] to-[#0f0f0f]
          ring-1 ring-black/10
          

          /* glossy top highlight */
          before:content-[''] before:absolute before:inset-x-1 before:top-1
          before:h-1/2 before:rounded-[inherit] before:bg-white/5
          before:pointer-events-none

          /* motion */
          opacity-0 scale-95 translate-y-1
          transition-[opacity,transform,filter] duration-200 ease-out
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
          group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:translate-y-0
        "
      >
        {label}
      </span>
    </span>
  );
}
