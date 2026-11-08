'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans">
      
      {/* ХЕДЕР / ШАПКА */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-900 text-amber-400 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">RealEstate Copilot</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Увійти
          </Link>
          <Link
            href="/login"
            className="bg-blue-900 hover:bg-blue-950 text-amber-300 font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            Спробувати 7 днів безкоштовно
          </Link>
        </div>
      </header>

      {/* ГОЛОВНИЙ БАНЕР (HERO SECTION) */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-16 pb-20 space-y-6">
        <div className="inline-flex items-center gap-2 bg-amber-100/60 border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-900">
          <Globe2 className="w-3.5 h-3.5 text-amber-700" />
          Підтримує мови: English, Español (LATAM), Português (Brasil)
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
          Перетворюйте фото та нотатки об’єкта у <span className="text-blue-900 underline decoration-amber-400 decoration-4">готові продажі</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          AI-асистент для рієлторів: генеруйте професійні описи для MLS, пости в Instagram, сценарії Reels та відповіді покупцям за 30 секунд.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/login"
            className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-amber-300 font-semibold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-md hover:shadow-lg"
          >
            Спробувати 7 днів безкоштовно <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-xs text-slate-400">Без кредитної картки • Скасування в 1 клік</p>
      </section>

      {/* ПЕРЕВАГИ (FEATURES) */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="p-3 bg-amber-50 text-amber-700 rounded-xl w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-slate-900">Економія 3+ годин</h3>
          <p className="text-sm text-slate-600">Забудьте про довготривалий набір текстів. Просто скиньте голосові нотатки або фото.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="p-3 bg-blue-50 text-blue-900 rounded-xl w-fit">
            <Globe2 className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-slate-900">Регіональна адаптація</h3>
          <p className="text-sm text-slate-600">Точна мова та терміни для ринків США (MLS), Аргентини (ZonaProp) та Бразилії (VivaReal).</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-slate-900">Все в 1 клік</h3>
          <p className="text-sm text-slate-600">Опис, пости для Instagram/LinkedIn, повідомлення у WhatsApp та вірусні Reels-сценарії.</p>
        </div>
      </section>

    </div>
  );
}
