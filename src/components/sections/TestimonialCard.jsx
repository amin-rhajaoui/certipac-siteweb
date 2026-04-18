import { cn } from '@/lib/utils'

/**
 * TestimonialCard institutionnel — sobre, citation longue, signature en bas.
 */

export default function TestimonialCard({ name, role, company, content, rating, featured = false, reference }) {
  return (
    <article
      className={cn(
        'flex flex-col p-6 sm:p-7 h-full rounded-[2px]',
        featured
          ? 'bg-[#194296] text-white'
          : 'bg-[#F4F4F4] text-[#161616]',
      )}
      style={{ borderLeft: featured ? '3px solid #43AA43' : '3px solid #194296' }}
    >
      {reference && (
        <span
          className={cn(
            'font-mono text-[10px] uppercase tracking-[0.12em] mb-4',
            featured ? 'text-[#75D593]' : 'text-[#525252]',
          )}
        >
          {reference}
        </span>
      )}

      <blockquote
        className={cn(
          'text-[15px] leading-[1.7] flex-1',
          featured ? 'text-[#E0E0E0]' : 'text-[#393939]',
        )}
      >
        <span aria-hidden className={cn('block text-[28px] leading-none mb-2 font-bold', featured ? 'text-[#43AA43]' : 'text-[#194296]')}>
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
          <p className="text-[14px] font-semibold">{name}</p>
          <p
            className={cn(
              'text-[12px] mt-0.5',
              featured ? 'text-[#A8A8A8]' : 'text-[#6F6F6F]',
            )}
          >
            {role}
            {company && ` · ${company}`}
          </p>
        </div>
      </footer>
    </article>
  )
}
