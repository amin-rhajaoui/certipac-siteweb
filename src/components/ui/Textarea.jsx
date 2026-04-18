import { cn } from '@/lib/utils'

export default function Textarea({ label, id, helper, required, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-[13px] font-medium text-[#262626]">
          {label}
          {required && <span className="text-[#DA1E28] ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={id}
        required={required}
        rows={5}
        className={cn(
          'block w-full bg-[#F4F4F4] px-4 py-3 text-[14px] text-[#161616] placeholder:text-[#8D8D8D]',
          'border-0 border-b border-[#8D8D8D] rounded-none',
          'transition-colors focus:outline-none focus:border-b-2 focus:border-[#194296] resize-y',
          className,
        )}
        {...props}
      />
      {helper && <p className="text-[12px] text-[#6F6F6F]">{helper}</p>}
    </div>
  )
}
