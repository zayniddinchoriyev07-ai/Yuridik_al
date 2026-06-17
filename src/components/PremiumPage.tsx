import { useState } from 'react';
import { Crown, Check, Zap, MessageCircle, Users, Sparkles, Star } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'monthly',
    name: 'Oylik',
    price: 99900,
    duration: 'oy',
    features: [
      "Cheksiz AI suhbatlar",
      "Qonunlarga tezkor kirish",
      "Yuristlar bilan bog'lanish",
      "Email qo'llab-quvvatlash",
    ],
  },
  {
    id: 'quarterly',
    name: '3 oylik',
    price: 269900,
    duration: '3 oy',
    features: [
      "Barcha oylik funksiyalar",
      "10% tejash",
      "Telefon qo'llab-quvvatlash",
      "Shaxsiy kabinet",
    ],
    popular: true,
  },
  {
    id: 'yearly',
    name: 'Yillik',
    price: 899900,
    duration: 'yil',
    features: [
      "Barcha 3 oylik funksiyalar",
      "25% tejash",
      "Maksimal tezlik",
      "Aloqa menejer",
      "Shaxsiy maslahatchi",
    ],
  },
];

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('quarterly');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Premium obuna tez orada ishga tushadi!');
    }, 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uz-UZ').format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent" />
        <div className="relative px-4 pt-16 pb-12">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 mb-6">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">
              Premium
            </h1>
            <p className="text-slate-400 text-lg">
              Qo'shimcha imkoniyatlarga ega bo'ling
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-4 mb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4">Imkoniyatlar</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: MessageCircle, text: "Cheksiz AI suhbatlar", desc: "AI bot bilan cheksiz savollar bering" },
              { icon: Users, text: "Tezkor yuristlar", desc: "Yuristlar bilan tezkor bog'lanish" },
              { icon: Zap, text: "Maksimal tezlik", desc: "Yuqori tezlikda javoblar oling" },
              { icon: Sparkles, text: "Aloqa menejer", desc: "Maxsus aloqa menejeringiz" },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-4"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 mb-3">
                  <benefit.icon className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-medium text-white text-sm mb-1">{benefit.text}</h3>
                <p className="text-xs text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 mb-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4">Tariflar</h2>
          <div className="space-y-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative w-full rounded-xl border-2 ${
                  selectedPlan === plan.id
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-slate-700/50 bg-slate-800/50'
                } p-4 text-left transition-all hover:border-amber-500/50`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500 text-xs font-semibold text-white">
                      <Star className="w-3 h-3" />
                      Ommabop
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{plan.name}</h3>
                      {plan.popular && (
                        <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                          {Math.round((1 - plan.price / (plan.price * (plan.duration === '3 oy' ? 3 : 12))) * 100)}% tejash
                        </span>
                      )}
                    </div>
                    <ul className="space-y-1 mt-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">
                      {formatPrice(plan.price)}
                    </p>
                    <p className="text-xs text-slate-400">so'm/{plan.duration}</p>
                  </div>
                </div>

                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === plan.id
                    ? 'border-amber-500 bg-amber-500'
                    : 'border-slate-600'
                }`}>
                  {selectedPlan === plan.id && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe Button */}
      <div className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSubscribe}
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
              isLoading
                ? 'bg-slate-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:shadow-lg hover:shadow-amber-500/30 active:scale-[0.98]'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Yuklanmoqda...</span>
              </span>
            ) : (
              <span>Obuna bo'lish</span>
            )}
          </button>

          <p className="text-center text-xs text-slate-500 mt-3">
            Hech qanday yashirin to'lovlar yo'q
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 pb-8">
        <div className="max-w-md mx-auto">
          <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
            <h3 className="font-semibold text-white mb-4">Tez-tez beriladigan savollar</h3>
            <div className="space-y-3 text-sm">
              {[
                { q: "Qanday to'lashim mumkin?", a: "Naqd pul, plastik karta yoki mobil to'lov orqali" },
                { q: "Obunani bekor qilishim munkinmi?", a: "Ha, har qanday vaqtda bekor qilish munkin" },
                { q: "Premium nimada yaxshiroq?", a: "Tezroq javoblar, cheksiz savollar va shaxsiy yordam" },
              ].map((faq, idx) => (
                <div key={idx} className="pb-3 border-b border-slate-700/30 last:border-0 last:pb-0">
                  <p className="font-medium text-white mb-1">{faq.q}</p>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
