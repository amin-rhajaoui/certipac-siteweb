import { motion } from 'motion/react'

const statCards = [
  { value: '156', label: 'Chantiers en cours', accent: '#194296' },
  { value: '94,7%', label: 'Dossiers conformes', accent: '#43AA43' },
  { value: '89K€', label: 'Primes à encaisser', accent: '#D4A017' },
  { value: '52', label: 'Artisans actifs', accent: '#1A8A7D' },
]

const tableRows = [
  { ref: 'CTP-2026-0847', client: 'Martin Durand', type: 'Air/Eau — 12kW', etape: 'Primes versées', status: 'Terminé', statusColor: 'bg-[#43AA43]/15 text-[#43AA43]' },
  { ref: 'CTP-2026-0846', client: 'Sophie Laurent', type: 'Air/Eau — 8kW', etape: 'Dossier déposé', status: 'En cours', statusColor: 'bg-[#D4A017]/15 text-[#D4A017]' },
  { ref: 'CTP-2026-0845', client: 'Pierre Bernard', type: 'Air/Air — 6kW', etape: 'Devis signé', status: 'Chantier', statusColor: 'bg-[#194296]/15 text-[#7EB0E6]' },
]

export default function DashboardMockup() {
  return (
    <div className="rounded-xl bg-[#0B1628] shadow-elevated overflow-hidden">
      {/* Dashboard header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
        <div className="flex items-center gap-3">
          <img src="/CertiPac-icon-white.svg" alt="" className="h-6 w-auto" />
          <span className="text-xs font-bold tracking-[0.1em] text-white/90 uppercase">Certipac</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-xs text-white/40">
          <span className="text-white/80 font-medium">Tableau de bord</span>
          <span>Chantiers</span>
          <span>Dimensionnement</span>
          <span>Clients</span>
        </div>
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#194296] to-[#43AA43]" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4">
        {statCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="rounded-lg bg-[#0F1D33] px-3 py-3"
            style={{ borderLeft: `2px solid ${card.accent}` }}
          >
            <div className="text-xl font-bold text-white">{card.value}</div>
            <div className="text-[11px] text-white/40 mt-0.5">{card.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className="px-4 pb-4">
        <div className="rounded-lg bg-[#0F1D33] overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/6 text-white/40">
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px]">Référence</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px] hidden sm:table-cell">Client</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px] hidden sm:table-cell">PAC</th>
                <th className="text-left px-3 py-2 font-medium tracking-wider uppercase text-[10px] hidden md:table-cell">Étape</th>
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
                  className="border-b border-white/4 last:border-0"
                >
                  <td className="px-3 py-2.5 text-[#43AA43] font-medium">{row.ref}</td>
                  <td className="px-3 py-2.5 text-white/80 hidden sm:table-cell">{row.client}</td>
                  <td className="px-3 py-2.5 text-white/50 hidden sm:table-cell">{row.type}</td>
                  <td className="px-3 py-2.5 text-white/50 hidden md:table-cell">{row.etape}</td>
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
