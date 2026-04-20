import { cn } from '@/lib/utils'

/**
 * Input — style Carbon : fond gris-10, ligne basse de focus, pas d'arrondis marqués.
 */
export default function Input({ label, id, helper, error, required, className, ...props }) {
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
      <input
        id={id}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        className={cn(
          'block w-full bg-[#F4F4F4] px-4 h-11 text-[14px] text-[#161616] placeholder:text-[#8D8D8D]',
          'border-0 border-b border-[#8D8D8D] rounded-none',
          'transition-[border-color,background-color,box-shadow] duration-150 ease-out',
          'hover:bg-[#ECECEC]',
          'focus:outline-none focus:bg-white focus:border-[#194296] focus:shadow-[inset_0_-1px_0_0_#194296]',
          error && 'border-[#DA1E28] focus:border-[#DA1E28] focus:shadow-[inset_0_-1px_0_0_#DA1E28]',
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-[12px] text-[#DA1E28] flex items-center gap-1">
          <span aria-hidden className="inline-block h-1 w-1 bg-[#DA1E28] rounded-full" />
          {error}
        </p>
      ) : helper ? (
        <p className="text-[12px] text-[#6F6F6F]">{helper}</p>
      ) : null}
    </div>
  )
}
