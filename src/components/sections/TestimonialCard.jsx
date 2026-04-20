import { cn } from '@/lib/utils'

/**
 * TestimonialCard institutionnel — citation longue, signature en bas.
 * Rail 3px à gauche (vert sur variante featured, bleu sur variante standard).
 */

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  featured = false,
  reference,
}) {
  return (
    <article
      className={cn(
        'flex flex-col p-6 sm:p-7 h-full rounded-[2px] transition-colors duration-200',
        featured ? 'bg-[#194296] text-white' : 'bg-[#F4F4F4] text-[#161616] hover:bg-[#EFEFEF]',
      )}
      style={{ borderLeft: featured ? '3px solid #43AA43' : '3px solid #194296' }}
    >
      {reference && (
        <div
          className={cn(
            'flex items-center justify-between gap-4 mb-4 pb-3 border-b',
            featured ? 'border-white/15' : 'border-[#E0E0E0]',
          )}
        >
          <span
            className={cn(
              'font-mono text-[10px] uppercase tracking-[0.12em] tabular-nums',
              featured ? 'text-[#A3E3B7]' : 'text-[#525252]',
            )}
          >
            {reference}
          </span>
          <span
            className={cn(
              'font-mono text-[10px] uppercase tracking-[0.08em]',
              featured ? 'text-[#CDD8EB]' : 'text-[#6F6F6F]',
            )}
          >
            Témoignage
          </span>
        </div>
      )}

      <blockquote
        className={cn(
          'relative text-[15px] leading-[1.7] flex-1',
          featured ? 'text-[#E6EBF5]' : 'text-[#393939]',
        )}
      >
        <span
          aria-hidden
          className={cn(
            'block font-bold leading-none mb-3 text-[32px]',
            featured ? 'text-[#43AA43]' : 'text-[#194296]',
          )}
        >
          «
        </span>
        {content}
      </blockquote>

      <footer
        className={cn(
          'mt-6 pt-5 border-t flex items-center justify-between gap-3',
          featured ? 'border-white/15' : 'border-[#C6C6C6]',
        )}
      >
        <div>
          <p className="text-[14px] font-semibold tracking-tight">{name}</p>
          <p
            className={cn(
              'text-[12px] mt-0.5',
              featured ? 'text-[#CDD8EB]' : 'text-[#6F6F6F]',
            )}
          >
            {role}
            {company && (
              <span aria-hidden className="mx-1.5 opacity-60">·</span>
            )}
            {company && <span className="font-mono tracking-[0.02em]">{company}</span>}
          </p>
        </div>
      </footer>
    </article>
  )
}
