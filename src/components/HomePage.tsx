import { Scale, Briefcase, FileText, MessageCircle, Crown, Bot, ArrowRight } from 'lucide-react';

type Page = 'home' | 'laws' | 'chat' | 'lawyers' | 'premium';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: FileText,
      title: 'Qonunlar',
      description: "O'zbekiston Konstitutsiyasi va 18 ta huquqiy kodekslar",
      action: () => onNavigate('laws'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'AI Yordamchi',
      description: 'Huquqiy savollarga tezkor javoblar oling',
      action: () => onNavigate('chat'),
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Briefcase,
      title: 'Yuristlar',
      description: 'Malakali yuristlar bilan bog\'laning',
      action: () => onNavigate('lawyers'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Crown,
      title: 'Premium',
      description: 'Qo\'shimcha imkoniyatlarga ega bo\'ling',
      action: () => onNavigate('premium'),
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
        <div className="relative px-6 pt-16 pb-12">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">
              Yuridik Al O'zbekiston
            </h1>
            <p className="text-slate-400 text-lg">
              Huquqiy yordam platformasi
            </p>
          </div>
        </div>
      </div>

      {/* AI Bot Banner */}
      <div className="px-4 mb-8">
        <div className="max-w-md mx-auto">
          <a
            href="https://t.me/YuridikBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-6 shadow-xl shadow-blue-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Telegram Bot
                </h3>
                <p className="text-blue-100 text-sm">
                  Huquqiy savollarga javob olish uchun botga kiring
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4 px-2">Xizmatlar</h2>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={feature.action}
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 p-4 text-left transition-all hover:border-amber-500/50 hover:bg-slate-800 active:scale-[0.98]"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} mb-3`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-medium text-white mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/50 border border-slate-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Platform haqida
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Yuridik Al O'zbekiston - bu O'zbekiston Respublikasida huquqiy yordam olishning zamonaviy usuli.
              Biz sizga tezkor va ishonchli huquqiy ma'lumotlarni taklif qilamiz.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Barcha xizmatlar faol</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
