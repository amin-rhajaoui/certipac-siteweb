import { cn } from '@/lib/utils'

export default function Select({ label, id, options = [], required, helper, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block font-mono text-[11px] uppercase tracking-[0.08em] font-medium text-[#525252]"
        >
          {label}
          {required && <span className="text-[#DA1E28] ml-0.5" aria-hidden>*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          required={required}
          className={cn(
            'block w-full bg-[#F4F4F4] px-4 pr-10 h-11 text-[14px] text-[#161616] appearance-none cursor-pointer',
            'border-0 border-b border-[#8D8D8D] rounded-none',
            'transition-[border-color,background-color,box-shadow] duration-150 ease-out',
            'hover:bg-[#ECECEC]',
            'focus:outline-none focus:bg-white focus:border-[#194296] focus:shadow-[inset_0_-1px_0_0_#194296]',
            className,
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#525252]"
          viewBox="0 0 14 14" fill="none"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </div>
      {helper && <p className="text-[12px] text-[#6F6F6F]">{helper}</p>}
    </div>
  )
}
