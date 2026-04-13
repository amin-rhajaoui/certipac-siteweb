import { motion } from 'motion/react'

const statCards = [
  { value: '847', label: 'Dossiers actifs', color: 'border-l-primary-500' },
  { value: '94,7%', label: 'Taux de conformité', color: 'border-l-accent-500' },
  { value: '89K€', label: 'Primes validées', color: 'border-l-amber-500' },
  { value: '52', label: 'Artisans actifs', color: 'border-l-primary-400' },
]

const tableRows = [
  { ref: 'PCZ-2026-0847', artisan: 'Martin Durand', type: 'Air/Eau', sub: 'CEE + MPR', status: 'Validé', statusColor: 'bg-primary-500/20 text-primary-400' },
  { ref: 'PCZ-2026-0846', artisan: 'Sophie Laurent', type: 'Air/Air', sub: 'CEE', status: 'En cours', statusColor: 'bg-amber-500/20 text-amber-400' },
  { ref: 'PCZ-2026-0845', artisan: 'Pierre Bernard', type: 'Eau/Eau', sub: 'MPR', status: 'Audit', statusColor: 'bg-accent-500/20 text-accent-400' },
]

export default function DashboardMockup() {
  return (
    <div className="rounded-xl bg-surface-100 border border-surface-200/80 shadow-elevated overflow-hidden glow-emerald">
      {/* Dashboard header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-surface-200/50">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="" className="h-6 w-6" />
          <span className="text-xs font-bold tracking-[0.1em] text-surface-700 uppercase">PACIZZY</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-xs text-surface-400">
          <span className="text-surface-700 font-medium">Tableau de bord</span>
          <span>Dossiers PAC</span>
          <span>Subventions</span>
          <span>Clients</span>
        </div>
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-500" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4">
        {statCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`rounded-lg bg-surface-50 border-l-2 ${card.color} px-3 py-3`}
          >
            <div className="text-xl font-bold text-surface-950">{card.value}</div>
            <div className="text-[11px] text-surface-400 mt-0.5">{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className="px-4 pb-4">
        <div className="rounded-lg bg-surface-50 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-surface-200/50 text-surface-400">
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px]">Référence</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px] hidden sm:table-cell">Artisan</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px] hidden sm:table-cell">Type PAC</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px] hidden md:table-cell">Subvention</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px]">Statut</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="border-b border-surface-200/30 last:border-0"
                >
                  <td className="px-3 py-2.5 text-primary-400 font-medium">{row.ref}</td>
                  <td className="px-3 py-2.5 text-surface-700 hidden sm:table-cell">{row.artisan}</td>
                  <td className="px-3 py-2.5 text-surface-500 hidden sm:table-cell">{row.type}</td>
                  <td className="px-3 py-2.5 text-surface-500 hidden md:table-cell">{row.sub}</td>
                  <td className="px-3 py-2.5">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-semibold ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
