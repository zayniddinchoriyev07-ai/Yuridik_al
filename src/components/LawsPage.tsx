import { useState } from 'react';
import { Search, Scale, BookOpen, ExternalLink, ChevronRight } from 'lucide-react';

const laws = [
  {
    id: 1,
    title: "O'zbekiston Respublikasi Konstitutsiyasi",
    category: 'Konstitutsiya',
    url: 'https://lex.uz/docs/-20596',
    icon: Scale,
  },
  {
    id: 2,
    title: 'Fuqarolik kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111025',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Jinoyat kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111467',
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Ma'muriy javobgarlik kodeksi",
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111427',
    icon: BookOpen,
  },
  {
    id: 5,
    title: 'Sud-huquq kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111093',
    icon: BookOpen,
  },
  {
    id: 6,
    title: 'Oila kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/110881',
    icon: BookOpen,
  },
  {
    id: 7,
    title: 'Mehnat kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111138',
    icon: BookOpen,
  },
  {
    id: 8,
    title: 'Yer kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/110259',
    icon: BookOpen,
  },
  {
    id: 9,
    title: 'Suv kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/110262',
    icon: BookOpen,
  },
  {
    id: 10,
    title: 'Iqtisodiyot kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/106077',
    icon: BookOpen,
  },
  {
    id: 11,
    title: 'Soliq kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/107986',
    icon: BookOpen,
  },
  {
    id: 12,
    title: 'Bojxona kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/109610',
    icon: BookOpen,
  },
  {
    id: 13,
    title: 'Budjet kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/104670',
    icon: BookOpen,
  },
  {
    id: 14,
    title: 'Arbitraj sud kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/107543',
    icon: BookOpen,
  },
  {
    id: 15,
    title: 'Fuqarolik protsessual kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111093',
    icon: BookOpen,
  },
  {
    id: 16,
    title: 'Jinoyat protsessual kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111467',
    icon: BookOpen,
  },
  {
    id: 17,
    title: 'Moliyaviy kodeksi',
    category: 'Kodeks',
    url: 'https://lex.uz/docs/104670',
    icon: BookOpen,
  },
  {
    id: 18,
    title: "Aeroportlar to'g'risidagi kodeks",
    category: 'Kodeks',
    url: 'https://lex.uz/docs/111711',
    icon: BookOpen,
  },
  {
    id: 19,
    title: "Davlat xizmati to'g'risidagi qonun",
    category: 'Kodeks',
    url: 'https://lex.uz/docs/107047',
    icon: BookOpen,
  },
];

export default function LawsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLaws = laws.filter((law) =>
    law.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50">
        <div className="px-4 py-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-white mb-4">
              Qonunlar
            </h1>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Qonunlarni qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Laws List */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-3">
          {filteredLaws.map((law) => (
            <a
              key={law.id}
              href={law.url} onClick={(e) => { e.preventDefault(); window.open(law.url, '_system'); }}
              
              
              className="group block rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 transition-all hover:border-amber-500/50 hover:bg-slate-800 active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  law.category === 'Konstitutsiya'
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600'
                    : 'bg-gradient-to-br from-blue-500 to-blue-600'
                }`}>
                  <law.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-white leading-snug group-hover:text-amber-400 transition-colors">
                      {law.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                    law.category === 'Konstitutsiya'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {law.category}
                  </span>
                </div>

                <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0 group-hover:text-amber-500 transition-colors" />
              </div>
            </a>
          ))}

          {filteredLaws.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
              <p className="text-slate-400">Hech narsa topilmadi</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 pb-6">
        <div className="max-w-md mx-auto">
          <div className="rounded-xl bg-gradient-to-r from-blue-500/10 to-amber-500/10 border border-slate-700/50 p-4">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  lex.uz - rasmiy huquqiy portal
                </p>
                <p className="text-xs text-slate-400">
                  Barcha qonunlar rasmiy manbadan olingan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
