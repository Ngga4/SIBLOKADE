import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  Menu,
  X,
  ShieldCheck,
  UserRound,
  Home,
  ClipboardList,
  History,
  FileText,
  LogOut,
  TrendingUp,
  CalendarDays,
  Database,
  Wallet,
  ArrowRight,
  BarChart3,
  PlusCircle,
  UploadCloud,
} from "lucide-react";

const stats = [
  {
    label: "Hari Ini",
    value: "12",
    suffix: "transaksi",
    icon: TrendingUp,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "Bulan Ini",
    value: "156",
    suffix: "transaksi",
    icon: CalendarDays,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Total",
    value: "2,847",
    suffix: "transaksi",
    icon: Database,
    color: "bg-purple-50 text-purple-600",
  },
  {
    label: "Dana Tercatat",
    value: "Rp 8,5 M",
    suffix: "akumulasi",
    icon: Wallet,
    color: "bg-orange-50 text-orange-600",
  },
];

const navItems = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/dashboard-petugas",
    active: true,
  },
  {
    label: "Rencana Transaksi",
    icon: ClipboardList,
    path: "/petugas/rencana-transaksi",
    active: false,
  },
  {
    label: "Riwayat Transaksi",
    icon: History,
    path: "/petugas/riwayat-transaksi",
    active: false,
  },
  {
    label: "Laporan",
    icon: FileText,
    path: "/petugas/generate-laporan",
    active: false,
  },
];

const menuItems = [
  {
    title: "Rencana Transaksi",
    description: "Kelola rencana sebelum transaksi dilakukan.",
    icon: ClipboardList,
    iconClass: "bg-orange-50 text-orange-600",
    path: "/petugas/rencana-transaksi",
  },
  {
    title: "Lihat Riwayat",
    description: "Pantau semua transaksi dan status verifikasi.",
    icon: History,
    iconClass: "bg-emerald-50 text-emerald-600",
    path: "/petugas/riwayat-transaksi",
  },
  {
    title: "Generate Laporan",
    description: "Buat laporan keuangan berdasarkan periode.",
    icon: FileText,
    iconClass: "bg-purple-50 text-purple-600",
    path: "/petugas/generate-laporan",
  },
];

const activities = [
  {
    title: "Transaksi TX007 berhasil ditambahkan",
    time: "5 menit yang lalu",
    dotClass: "bg-emerald-500",
  },
  {
    title: "Laporan Desember 2025 diexport",
    time: "2 jam yang lalu",
    dotClass: "bg-blue-500",
  },
  {
    title: "OCR berhasil memproses 3 dokumen",
    time: "4 jam yang lalu",
    dotClass: "bg-purple-500",
  },
];

const chartData = [
  { label: "Jul", value: 40 },
  { label: "Agu", value: 52 },
  { label: "Sep", value: 48 },
  { label: "Okt", value: 68 },
  { label: "Nov", value: 82 },
  { label: "Des", value: 74 },
];

function SidebarContent({ onLogout, onClose }) {
  return (
    <div className="flex h-full flex-col bg-slate-950 text-white">
      <div className="flex items-center justify-between px-6 pb-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold">SI-BLOKADE</h1>
            <p className="text-sm text-slate-400">Panel Petugas</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 lg:hidden"
        >
          <X size={22} />
        </button>
      </div>

      

      <nav className="mt-8 space-y-2 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                item.active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4 px-6 pb-6">
        <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <UserRound size={24} />
            </div>
            <div>
              <h2 className="font-semibold">Petugas BUMDes</h2>
              <p className="text-sm text-slate-400">Dashboard Operator</p>
            </div>
          </div>
        </div>
      

        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-400/40 px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500 hover:text-white"
        >
          <LogOut size={18} />
          Keluar Dashboard
        </button>
      </div>
    </div>
  );
}

function MobileTopbar({ onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-lg font-bold text-slate-900">Dashboard Petugas</h1>
            <p className="text-sm text-slate-500">SI-BLOKADE</p>
          </div>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white"
        >
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}

function DesktopTopbar() {
  return (
    <header className="sticky top-0 z-30 hidden border-b border-slate-200 bg-white/90 backdrop-blur-md lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Dashboard Petugas
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Selamat datang, Petugas BUMDes
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white">
            <Bell size={20} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <UserRound size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Petugas</p>
              <p className="text-xs text-slate-500">BUMDes Operator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroDesktop() {
//   return (
//     <section className="hidden overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl shadow-blue-600/20 lg:block">
//       {/* <div className="grid items-center gap-8 xl:grid-cols-[1.2fr_0.8fr]">
//         <div>
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
//             SI-BLOKADE
//           </p>
//           <h2 className="mt-4 text-4xl font-bold leading-tight">
//             Kelola transaksi desa dengan tampilan yang jelas dan terarah.
//           </h2>
//           <p className="mt-4 max-w-2xl leading-8 text-blue-50">
//             Pantau rencana transaksi, riwayat verifikasi, laporan periode, dan
//             status blockchain dari satu halaman dashboard petugas.
//           </p>
//         </div>

//         <div className="rounded-3xl bg-white/15 p-5 ring-1 ring-white/20 backdrop-blur-md">
//           <div className="flex items-center gap-4">
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600">
//               <ShieldCheck size={28} />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Sistem Aktif</h3>
//               <p className="text-sm text-blue-50">Sinkronisasi terakhir 5 menit lalu</p>
//             </div>
//           </div>

//           <div className="mt-5 grid grid-cols-2 gap-3">
//             <div className="rounded-2xl bg-white/10 p-4">
//               <p className="text-sm text-blue-100">Verifikasi</p>
//               <p className="mt-1 text-2xl font-bold">98%</p>
//             </div>
//             <div className="rounded-2xl bg-white/10 p-4">
//               <p className="text-sm text-blue-100">Indikasi</p>
//               <p className="mt-1 text-2xl font-bold">3</p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
}

function HeroMobile() {
//   return (
//     <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-5 text-white shadow-xl shadow-blue-600/20 lg:hidden">
//       <div className="flex items-start gap-4">
//         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/10">
//           <UserRound size={28} />
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold leading-tight">Petugas BUMDes</h2>
//           <p className="mt-1 text-blue-50">Dashboard</p>
//         </div>
//       </div>

//       <p className="mt-5 text-sm leading-7 text-blue-50">
//         Kelola transaksi, riwayat verifikasi, dan laporan BUMDes dalam satu dashboard.
//       </p>
//     </section>
//   );
}

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>
          <Icon size={24} />
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          Aktif
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">{item.label}</p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900">{item.value}</h3>
      <p className="mt-1 text-sm text-slate-400">{item.suffix}</p>
    </article>
  );
}

function MenuCard({ item }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      className="group flex h-full min-h-[220px] flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10 hover:ring-blue-100"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconClass}`}
      >
        <Icon size={30} strokeWidth={2.2} />
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-semibold leading-tight text-slate-900">
          {item.title}
        </h3>
        <p className="mt-3 text-base leading-8 text-slate-500">{item.description}</p>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
        Buka Menu
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

function QuickActionCard() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-bold text-slate-900">Aksi Cepat</h2>
      <p className="mt-1 text-slate-500">
        Pilih tugas yang paling sering digunakan.
      </p>

      <div className="mt-6 grid gap-3">
        <Link
          to="/petugas/rencana-transaksi"
          className="flex items-center gap-4 rounded-2xl bg-blue-50 p-4 text-blue-700 transition hover:bg-blue-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <PlusCircle size={22} />
          </div>

          <div>
            <h3 className="font-semibold">Tambah Rencana</h3>
            <p className="text-sm text-blue-600/80">
              Buat rencana transaksi baru
            </p>
          </div>
        </Link>

        <Link
          to="/petugas/rencana-transaksi"
          className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 text-slate-700 transition hover:bg-slate-100"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
            <UploadCloud size={22} />
          </div>

          <div>
            <h3 className="font-semibold">Upload Bukti</h3>
            <p className="text-sm text-slate-500">
              Pilih rencana untuk input bukti transaksi
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

function ActivityCard() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Aktivitas Terakhir</h2>
          <p className="mt-1 text-slate-500">Update terbaru dari sistem petugas</p>
        </div>
        <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 sm:flex">
          <BarChart3 size={22} />
        </div>
      </div>

      <div className="space-y-5">
        {activities.map((item) => (
          <div key={item.title} className="flex gap-4">
            <span className={`mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.dotClass}`} />
            <div>
              <h3 className="text-lg font-medium leading-7 text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-base text-slate-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChartCard() {
//   return (
//     <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
//       {/* <div className="flex items-start justify-between gap-4">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-900">Grafik Transaksi</h2>
//           <p className="mt-1 text-slate-500">Perkembangan transaksi 6 bulan terakhir</p>
//         </div>
//         <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
//           2025
//         </span>
//       </div> */}

//       <div className="mt-8 flex h-60 items-end gap-4">
//         {chartData.map((item) => (
//           <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
//             <div className="flex h-48 w-full items-end rounded-full bg-slate-100 p-1.5">
//               <div
//                 className="w-full rounded-full bg-gradient-to-t from-blue-600 to-cyan-400 shadow-lg shadow-blue-600/20"
//                 style={{ height: `${item.value}%` }}
//               />
//             </div>
//             <span className="text-sm font-semibold text-slate-500">{item.label}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
}

export default function DashboardPetugas() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login-petugas");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Drawer Sidebar untuk HP & Tablet */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-[320px] shadow-2xl">
            <SidebarContent
              onLogout={handleLogout}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Sidebar Desktop */}
      <aside className="fixed inset-y-0 left-0 hidden w-80 lg:block">
        <SidebarContent onLogout={handleLogout} onClose={() => {}} />
      </aside>

      {/* Main Content */}
      <div className="lg:ml-80">
        <MobileTopbar onOpenSidebar={() => setSidebarOpen(true)} />
        <DesktopTopbar />

        <div className="mx-auto max-w-7xl space-y-6 px-5 py-5 sm:px-6 lg:px-8 lg:py-8">
          <HeroMobile />
          <HeroDesktop />

          {/* Statistik */}
          

          {/* Konten Utama */}
          <section className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_360px]">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Menu Utama</h2>
                  <p className="mt-1 text-slate-500">
                    Akses fitur utama yang sering digunakan petugas.
                  </p>
                </div>

                {/* <Link
                  to="/petugas/rencana-transaksi"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <PlusCircle size={18} />
                  Tambah Rencana
                </Link> */}
              </div>

              {/* Card tengah diperbaiki */}
              <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {menuItems.map((item) => (
                  <MenuCard key={item.title} item={item} />
                ))}
              </div>

              <ChartCard />
            </div>

            <div className="space-y-6">
              <QuickActionCard />
              <ActivityCard />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}