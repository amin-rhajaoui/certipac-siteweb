import { cn } from '@/lib/utils'

/**
 * Callout — bandeau d'information institutionnel (Article 1 du brand book).
 * Filet vertical coloré, fond légèrement teinté, texte dense.
 */

const tones = {
  info:    'bg-[#EDF5FF] border-[#194296]',
  success: 'bg-[#DEFBE6] border-[#24A148]',
  warning: 'bg-[#FCF4D6] border-[#F1C21B]',
  error:   'bg-[#FFF1F1] border-[#DA1E28]',
  neutral: 'bg-[#F4F4F4] border-[#161616]',
}

const titleTones = {
  info:    'text-[#0F285A]',
  success: 'text-[#0E6027]',
  warning: 'text-[#6C4B00]',
  error:   'text-[#8D0910]',
  neutral: 'text-[#161616]',
}

export default function Callout({ children, title, tone = 'info', reference, icon: Icon, className }) {
  return (
    <aside
      className={cn(
        'relative border-l-[3px] pl-5 pr-5 py-4 text-[14px] leading-[1.65]',
        tones[tone] || tones.info,
        className,
      )}
    >
      {(title || reference) && (
        <div className="flex items-baseline justify-between gap-4 mb-1.5">
          <span className={cn('inline-flex items-center gap-2 font-semibold', titleTones[tone] || titleTones.info)}>
            {Icon && <Icon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />}
            {title}
          </span>
          {reference && (
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#6F6F6F] shrink-0 tabular-nums">
              {reference}
            </span>
          )}
        </div>
      )}
      <div className="text-[#393939]">{children}</div>
    </aside>
  )
}
