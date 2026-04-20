import { useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Accordion — Carbon style : lignes fines, pas de fond coloré, chevron rotatif.
 */

export default function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <div className={cn('border-t border-[#E0E0E0]', className)}>
      {items.map((item, index) => {
        const open = openIndex === index
        return (
          <div key={index} className={cn('border-b border-[#E0E0E0] transition-colors', open && 'bg-[#F4F4F4]')}>
            <button
              onClick={() => toggle(index)}
              className={cn(
                'flex w-full items-center justify-between gap-6 py-5 text-left cursor-pointer',
                'transition-colors hover:bg-[#F4F4F4]',
                'focus-visible:outline-2 focus-visible:outline-[#194296] focus-visible:outline-offset-[-2px]',
                'px-0 sm:px-2',
              )}
              aria-expanded={open}
            >
              <span className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] text-[#6F6F6F] tabular-nums tracking-[0.08em]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={cn(
                  'text-[15px] font-semibold leading-[1.4] transition-colors',
                  open ? 'text-[#194296]' : 'text-[#161616]',
                )}>
                  {item.question}
                </span>
              </span>
              <span
                aria-hidden
                className={cn(
                  'relative h-5 w-5 shrink-0 mt-1',
                  'before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-px before:bg-[#194296]',
                  'after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-4 after:w-px after:bg-[#194296]',
                  'after:transition-transform after:duration-200',
                  open && 'after:scale-y-0',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-[grid-template-rows,padding] duration-300 ease-out',
                open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] leading-[1.65] text-[#525252] sm:pl-[3.125rem] pr-8">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
