import { cn } from '@/lib/utils'

/**
 * Input — style Carbon : fond gris-10, ligne basse de focus, pas d'arrondis marqués.
 */
export default function Input({ label, id, helper, error, required, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-[13px] font-medium text-[#262626]">
          {label}
          {required && <span className="text-[#DA1E28] ml-0.5">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        className={cn(
          'block w-full bg-[#F4F4F4] px-4 h-11 text-[14px] text-[#161616] placeholder:text-[#8D8D8D]',
          'border-0 border-b border-[#8D8D8D] rounded-none',
          'transition-colors focus:outline-none focus:border-b-2 focus:border-[#194296] focus:-mb-px',
          error && 'border-[#DA1E28]',
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-[12px] text-[#DA1E28]">{error}</p>
      ) : helper ? (
        <p className="text-[12px] text-[#6F6F6F]">{helper}</p>
      ) : null}
    </div>
  )
}
