import { cn } from '@/lib/utils'

export default function Select({ label, id, options = [], required, helper, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-[13px] font-medium text-[#262626]">
          {label}
          {required && <span className="text-[#DA1E28] ml-0.5">*</span>}
        </label>
      )}
      <select
        id={id}
        required={required}
        className={cn(
          'block w-full bg-[#F4F4F4] px-4 h-11 text-[14px] text-[#161616]',
          'border-0 border-b border-[#8D8D8D] rounded-none',
          'transition-colors focus:outline-none focus:border-b-2 focus:border-[#194296] focus:-mb-px',
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
      {helper && <p className="text-[12px] text-[#6F6F6F]">{helper}</p>}
    </div>
  )
}
