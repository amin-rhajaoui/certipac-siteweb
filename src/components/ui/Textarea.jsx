import { cn } from '@/lib/utils'

export default function Textarea({ label, id, helper, required, className, ...props }) {
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
      <textarea
        id={id}
        required={required}
        rows={5}
        className={cn(
          'block w-full bg-[#F4F4F4] px-4 py-3 text-[14px] text-[#161616] placeholder:text-[#8D8D8D]',
          'border-0 border-b border-[#8D8D8D] rounded-none',
          'transition-[border-color,background-color,box-shadow] duration-150 ease-out',
          'hover:bg-[#ECECEC]',
          'focus:outline-none focus:bg-white focus:border-[#194296] focus:shadow-[inset_0_-1px_0_0_#194296]',
          'resize-y',
          className,
        )}
        {...props}
      />
      {helper && <p className="text-[12px] text-[#6F6F6F]">{helper}</p>}
    </div>
  )
}
