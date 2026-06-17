import { useState } from 'react';
import { Search, Phone, Mail, MapPin, Star, Briefcase, Clock, Filter, ChevronDown } from 'lucide-react';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  reviews: number;
  experience: number;
  location: string;
  phone: string;
  email: string;
  available: boolean;
}

const lawyers: Lawyer[] = [
  {
    id: 1,
    name: 'Alisher Karimov',
    specialization: 'Fuqarolik huquqi',
    rating: 4.9,
    reviews: 127,
    experience: 15,
    location: 'Toshkent, Chilonzor tumani',
    phone: '+998 90 123 45 67',
    email: 'alisher.karimov@gmail.com',
    available: true,
  },
  {
    id: 2,
    name: 'Malika Abdullaeva',
    specialization: 'Jinoyat huquqi',
    rating: 4.8,
    reviews: 95,
    experience: 12,
    location: 'Toshkent, Yunusobod tumani',
    phone: '+998 91 234 56 78',
    email: 'malika.abdullaeva@gmail.com',
    available: true,
  },
  {
    id: 3,
    name: 'Bobur Rahmonov',
    specialization: 'Mehnat huquqi',
    rating: 4.7,
    reviews: 84,
    experience: 8,
    location: "Toshkent, Mirzo Ulug'bek tumani",
    phone: '+998 93 345 67 89',
    email: 'bobur.rahmonov@gmail.com',
    available: false,
  },
  {
    id: 4,
    name: 'Nigora Sattarova',
    specialization: 'Oilaviy huquqi',
    rating: 4.9,
    reviews: 156,
    experience: 18,
    location: 'Toshkent, Yashnobod tumani',
    phone: '+998 94 456 78 90',
    email: 'nigora.sattarova@gmail.com',
    available: true,
  },
  {
    id: 5,
    name: 'Jasur Toshmatov',
    specialization: 'Tijorat huquqi',
    rating: 4.6,
    reviews: 72,
    experience: 10,
    location: 'Toshkent, Shayxontoxur tumani',
    phone: '+998 95 567 89 01',
    email: 'jasur.toshmatov@gmail.com',
    available: true,
  },
];

const specializations = [
  'Barchasi',
  'Fuqarolik huquqi',
  'Jinoyat huquqi',
  'Mehnat huquqi',
  'Oilaviy huquqi',
  'Tijorat huquqi',
];

export default function LawyersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpec, setSelectedSpec] = useState('Barchasi');
  const [showFilters, setShowFilters] = useState(false);

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpec = selectedSpec === 'Barchasi' || lawyer.specialization === selectedSpec;
    return matchesSearch && matchesSpec;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50">
        <div className="px-4 py-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">Yuristlar</h1>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  showFilters ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-800 text-slate-300'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filtrlar</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Yuristlarni qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>

            {showFilters && (
              <div className="flex flex-wrap gap-2 pt-2 animate-in slide-in-from-top-2">
                {specializations.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpec(spec)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedSpec === spec
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lawyers List */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto space-y-3">
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-bold text-lg">
                    {lawyer.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-white">{lawyer.name}</h3>
                        <p className="text-sm text-amber-500 mt-0.5">{lawyer.specialization}</p>
                      </div>
                      {lawyer.available && (
                        <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                          Faol
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm text-white font-medium">{lawyer.rating}</span>
                        <span className="text-xs text-slate-400">({lawyer.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{lawyer.experience} yil</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-700/50 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{lawyer.location}</span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-slate-700/30 flex gap-2">
                <a
                  href={`tel:${lawyer.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Qo'ng'iroq</span>
                </a>
                <a
                  href={`mailto:${lawyer.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>
          ))}

          {filteredLawyers.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
              <p className="text-slate-400">Hech qanday yurist topilmadi</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 pb-6">
        <div className="max-w-md mx-auto">
          <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-slate-700/50 p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-300 font-medium mb-1">
                  Tez kunningiz uchun
                </p>
                <p className="text-xs text-slate-400">
                  Premium obunaga ega bo'lsangiz, yuristlar bilan tezkor bog'lana olasiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
