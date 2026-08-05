import { cn } from '@/lib/utils'

/**
 * Input — style institutionnel DSFR-like.
 * Fond alt-grey, bordure bas, focus bleu Certipac + ring focus accessible.
 */
export default function Input({ label, id, helper, error, required, className, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-[0.875rem] font-bold text-[#161616]"
        >
          {label}
          {required && <span className="text-[#CE0500] ml-0.5" aria-hidden>*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        className={cn(
          'block w-full bg-[#EEEEEE] px-4 min-h-10 text-[1rem] text-[#161616] placeholder:text-[#929292]',
          'border-0 border-b-2 border-[#666666] rounded-none',
          'transition-[border-color,background-color] duration-100',
          'hover:bg-[#E5E5E5]',
          'focus:outline-none focus:bg-white focus:border-[#194296]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A76F6]',
          error && 'border-[#CE0500] focus:border-[#CE0500]',
          className,
        )}
        {...props}
      />
      {error ? (
        <p className="text-[0.875rem] text-[#CE0500]">{error}</p>
      ) : helper ? (
        <p className="text-[0.875rem] text-[#666666]">{helper}</p>
      ) : null}
    </div>
  )
}
