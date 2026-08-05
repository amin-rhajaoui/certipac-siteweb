import { cn } from '@/lib/utils'

/**
 * Callout — bandeau d'information type fr-callout DSFR.
 * Filet vertical 4px (background-image), fond contrasté, titre dense.
 */

const tones = {
  info: 'ctp-callout--info',
  success: 'ctp-callout--success',
  warning: 'ctp-callout--warning',
  error: 'ctp-callout--error',
  neutral: 'ctp-callout--neutral',
}

export default function Callout({ children, title, tone = 'info', reference, icon: Icon, className }) {
  return (
    <aside
      className={cn(
        'ctp-callout text-[1rem] leading-[1.5]',
        tones[tone] || tones.info,
        className,
      )}
    >
      {(title || reference) && (
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
          <p className="inline-flex items-center gap-2 text-[1.125rem] font-bold leading-snug text-[#161616]">
            {Icon && <Icon className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />}
            {title}
          </p>
          {reference && (
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.06em] text-[#666666] shrink-0 tabular-nums">
              {reference}
            </span>
          )}
        </div>
      )}
      <div className="text-[#3A3A3A] text-[1rem] leading-[1.5]">{children}</div>
    </aside>
  )
}
