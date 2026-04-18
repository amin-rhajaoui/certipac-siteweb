import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
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
          <div key={index} className="border-b border-[#E0E0E0]">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer transition-colors hover:bg-[#F4F4F4] focus-visible:outline-2 focus-visible:outline-[#194296] focus-visible:outline-offset-[-2px] px-0 sm:px-2"
              aria-expanded={open}
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-[#6F6F6F] tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] font-semibold text-[#161616]">
                  {item.question}
                </span>
              </span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-[#194296] transition-transform duration-200',
                  open && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300',
                open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[14px] leading-[1.6] text-[#525252] sm:pl-[3.125rem] pr-8">
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
