import { cn } from '@/lib/utils'

/**
 * Tag — pill Carbon compacte pour listes de critères (artisans RGE, installateurs PAC…).
 * Mode "active" : fond ink + texte blanc, comme dans le brand book "Artisans RGE" (page 3).
 */

export default function Tag({ children, active = false, className, as: Tag = 'span' }) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center rounded-[2px] px-2.5 py-1 text-[12px] font-medium',
        active
          ? 'bg-[#161616] text-white'
          : 'bg-white text-[#393939] border border-[#C6C6C6]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
