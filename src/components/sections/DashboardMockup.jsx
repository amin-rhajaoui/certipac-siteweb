/**
 * DashboardMockup — version institutionnelle claire.
 * Fond blanc cassé, typo mono, données tabulaires compactes (type gouv.fr / Carbon).
 */

const statCards = [
  { value: '156',  label: 'Dossiers actifs',     rail: '#194296' },
  { value: '94,7', suffix: '%', label: 'Conformes', rail: '#43AA43' },
  { value: '89',   suffix: 'K€', label: 'Primes à encaisser', rail: '#161616' },
  { value: '52',   label: 'Artisans RGE',       rail: '#6F6F6F' },
]

const tableRows = [
  { ref: 'CTP-2026-0847', client: 'M. Durand',    type: 'PAC Air/Eau — 12 kW', status: 'Conforme',     tone: 'success' },
  { ref: 'CTP-2026-0846', client: 'Mme Laurent',  type: 'PAC Air/Eau — 8 kW',  status: 'En contrôle',  tone: 'warning', pulse: true },
  { ref: 'CTP-2026-0845', client: 'M. Bernard',   type: 'PAC Air/Air — 6 kW',  status: 'Signé',        tone: 'info' },
  { ref: 'CTP-2026-0844', client: 'SCI Provence', type: 'PAC Air/Eau — 14 kW', status: 'Prime versée', tone: 'success' },
]

const statusStyles = {
  success: 'bg-[#DEFBE6] text-[#0E6027]',
  warning: 'bg-[#FCF4D6] text-[#8E6A00]',
  info:    'bg-[#E6EBF5] text-[#194296]',
}

export default function DashboardMockup() {
  return (
    <div className="bg-white border border-[#E0E0E0] overflow-hidden rounded-[2px] shadow-[0_1px_2px_0_rgba(22,22,22,0.04),0_12px_32px_-12px_rgba(22,22,22,0.12)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-[#E0E0E0] px-4 py-2.5 bg-[#F4F4F4]">
        <div className="flex items-center gap-2.5">
          <img src="/CertiPac-icon.svg" alt="" className="h-5 w-auto" />
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#393939]">
            certipac · console
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#6F6F6F] hidden sm:inline-flex items-center gap-1.5">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[#43AA43] pulse-soft" />
            Live
          </span>
          <span className="font-mono text-[11px] text-[#6F6F6F] tabular-nums hidden sm:block">
            /dashboard · 2026
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#E0E0E0]">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white px-4 py-4"
            style={{ borderTop: `2px solid ${card.rail}` }}
          >
            <div className="text-[22px] font-bold text-[#161616] tabular-nums leading-none tracking-tight">
              {card.value}
              {card.suffix && <span className="text-[#43AA43]">{card.suffix}</span>}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#525252]">
              {card.label}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[12.5px]">
          <thead>
            <tr className="bg-[#F4F4F4] border-y border-[#E0E0E0]">
              <th className="text-left px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#525252]">
                Référence
              </th>
              <th className="text-left px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#525252] hidden sm:table-cell">
                Bénéficiaire
              </th>
              <th className="text-left px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#525252] hidden md:table-cell">
                Opération
              </th>
              <th className="text-left px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#525252]">
                Statut
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <tr
                key={row.ref}
                className={
                  (i < tableRows.length - 1 ? 'border-b border-[#E0E0E0] ' : '') +
                  'transition-colors hover:bg-[#FAFAFA]'
                }
              >
                <td className="px-4 py-3 font-mono text-[12px] text-[#194296] tabular-nums">
                  {row.ref}
                </td>
                <td className="px-4 py-3 text-[#262626] hidden sm:table-cell">{row.client}</td>
                <td className="px-4 py-3 text-[#525252] hidden md:table-cell">{row.type}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] text-[10.5px] font-mono uppercase tracking-[0.06em] ${statusStyles[row.tone]}`}
                  >
                    {row.pulse && (
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full bg-current pulse-soft"
                      />
                    )}
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-[#E0E0E0] bg-[#F4F4F4] px-4 py-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-[#525252]">
        <span className="tabular-nums">4 / 156 dossiers</span>
        <span>Édition 2026</span>
      </div>
    </div>
  )
}
