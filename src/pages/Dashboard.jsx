import React, { useEffect, useState } from "react";
import {
  LogIn,
  Users,
  FileText,
  TrendingUp,
  CheckCircle,
  Shield,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "BUMDes Terdaftar",
    value: "24",
    icon: Users,
    iconClass: "bg-blue-600 text-white",
  },
  {
    label: "Total Transaksi",
    value: "2,847",
    icon: FileText,
    iconClass: "bg-emerald-500 text-white",
  },
  {
    label: "Dana Tersalurkan",
    value: "Rp 8,5 M",
    icon: TrendingUp,
    iconClass: "bg-purple-500 text-white",
  },
  {
    label: "Terverifikasi",
    value: "98%",
    icon: CheckCircle,
    iconClass: "bg-orange-500 text-white",
  },
];

const features = [
  {
    title: "Blockchain Technology",
    description: "Semua transaksi tersimpan permanen dan aman di blockchain.",
    icon: Shield,
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Transparansi Penuh",
    description: "Warga dapat melihat detail setiap transaksi keuangan BUMDes.",
    icon: FileText,
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Deteksi Kecurangan",
    description: "Sistem OCR otomatis memverifikasi bukti transaksi.",
    icon: CalendarCheck,
    iconClass: "bg-purple-50 text-purple-600",
  },
  {
    title: "Laporan Real-time",
    description: "Akses laporan keuangan kapan saja dan di mana saja.",
    icon: TrendingUp,
    iconClass: "bg-orange-50 text-orange-600",
  },
];

const accessCards = [
  {
    title: "Untuk Warga Desa",
    description:
      "Pantau penggunaan dana BUMDes secara real-time. Lihat rencana transaksi, riwayat, dan deteksi kecurangan otomatis.",
    action: "Lihat Laporan",
    icon: Users,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Untuk Petugas BUMDes",
    description:
      "Kelola transaksi, buat rencana, upload bukti transaksi dengan OCR, dan generate laporan dengan mudah.",
    action: "Login Petugas",
    icon: Shield,
    iconClass: "bg-blue-100 text-blue-600",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="max-w-[210px] text-sm font-semibold leading-6 text-slate-900 sm:max-w-none sm:text-base lg:text-lg">
            Sistem Integrasi Blockchain dan Akuntabilitas Desa
          </h1>
          <p className="mt-0.5 text-xs font-medium tracking-wide text-slate-400">
            SI-BLOKADE
          </p>
        </div>

        <Link
        to="/login-petugas"
        className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-xs font-medium text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:text-sm"
      >
        <LogIn size={16} />
        <span>Login Petugas</span>
      </Link>
      </nav>
    </header>
  );
}

function HeroSection() {
  const slides = [
    {
      title: "Ekonomi Desa yang Kuat",
      description:
        "BUMDes mendukung pertumbuhan ekonomi lokal melalui sistem keuangan yang transparan dan akuntabel.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Transparansi Dana Desa",
      description:
        "Warga dapat melihat alur penggunaan dana BUMDes secara terbuka dan mudah dipahami.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Akuntabilitas Berbasis Teknologi",
      description:
        "Setiap transaksi tercatat, diverifikasi, dan disajikan melalui dashboard yang user friendly.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  const handleNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <section className="bg-slate-50 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-900/10 sm:rounded-3xl ">
        <div className="relative h-[280px] sm:h-[360px] lg:h-[430px]">
          {slides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                index === activeSlide
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* <button
            type="button"
            onClick={handlePrev}
            aria-label="Slide sebelumnya"
            className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 sm:flex"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Slide berikutnya"
            className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 sm:flex"
          >
            <ChevronRight size={22} />
          </button> */}

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-12">
            <div className="max-w-2xl text-white">
              {/* <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" /> */}
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {currentSlide.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-100 sm:text-base lg:text-lg">
                {currentSlide.description}
              </p>

              <div className="mt-6 flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Pilih slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === activeSlide
                        ? "w-9 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pt-6 sm:px-6 md:grid-cols-4 lg:px-8 lg:pt-8">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.label}
            className="rounded-2xl bg-white p-5 text-center shadow-lg shadow-slate-900/10 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconClass}`}
            >
              <Icon size={22} />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
              {item.value}
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              {item.label}
            </p>
          </article>
        );
      })}
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-3xl">
          Fitur Unggulan
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
          Teknologi modern untuk transparansi keuangan desa.
        </p>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/10 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconClass}`}
              >
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-sm font-semibold text-slate-900 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-9 text-center text-white shadow-2xl shadow-blue-600/25 md:px-10 lg:flex lg:items-center lg:justify-between lg:text-left">
        <div>
          <h2 className="text-base font-semibold sm:text-2xl">
            Lihat Laporan Keuangan BUMDes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-50 lg:mx-0">
            Akses transparansi penuh terhadap keuangan BUMDes di desa Anda.
          </p>
        </div>

        <Link
            to="/pilih-bumdes"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 lg:mt-0"
          >
            <FileText size={16} />
            Pilih BUMDes
          </Link>
      </div>
    </section>
  );
}

function AccessSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {accessCards.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/10 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconClass}`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:gap-2 hover:text-blue-700">
                    {item.action}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-8 text-center text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
          <Landmark size={18} className="text-blue-400" />
          SI-BLOKADE
        </div>
        <p className="mx-auto mt-3 max-w-md text-xs leading-5 sm:text-sm">
          Sistem Integrasi Blockchain dan Akuntabilitas Desa
        </p>
        <p className="mt-5 text-xs text-slate-500">
          © 2025 SIBLOKADE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <CtaSection />
      <AccessSection />
      <Footer />
    </main>
  );
}
