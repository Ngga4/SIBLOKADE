import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileText,
  Filter,
  History,
  Home,
  Link2,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  Tag,
  UserRound,
  Wallet,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard-petugas", active: false },
  { label: "Rencana Transaksi", icon: ClipboardList, path: "/petugas/rencana-transaksi", active: false },
  { label: "Riwayat Transaksi", icon: History, path: "/petugas/riwayat-transaksi", active: true },
  { label: "Laporan", icon: FileText, path: "/petugas/generate-laporan", active: false },
];

const completedTransactions = [
  {
    id: "TX003",
    planId: "PLAN005",
    title: "Pembelian Inventaris Warung",
    amount: "Rp 6.200.000",
    category: "Modal Usaha",
    date: "6 Des 2025",
    time: "09:00",
    creator: "Budi Santoso",
    isFraud: true,
    comparison: {
      planAmount: "Rp 4.500.000",
      planPurpose: "Modal Usaha Warung Desa",
      proofAmount: "Rp 6.200.000",
      difference: "+Rp 1.700.000 (37.8%)",
      proofPurpose: "Pembelian Inventaris Warung",
      matchLevel: "45%",
      note: "Data tidak sesuai - Perlu investigasi",
    },
  },
  {
    id: "TX006",
    planId: "PLAN003",
    title: "Renovasi Gudang Penyimpanan",
    amount: "Rp 3.500.000",
    category: "Infrastruktur",
    date: "9 Des 2025",
    time: "10:15",
    creator: "Ani Wulandari",
    isFraud: false,
    comparison: {
      planAmount: "Rp 3.500.000",
      planPurpose: "Renovasi Gudang Penyimpanan",
      proofAmount: "Rp 3.500.000",
      difference: "Rp 0",
      proofPurpose: "Renovasi Gudang Penyimpanan",
      matchLevel: "100%",
      note: "Data sesuai dengan rencana transaksi",
    },
  },
  {
    id: "TX005",
    planId: "PLAN004",
    title: "Gaji Pegawai Bulan Desember",
    amount: "Rp 1.200.000",
    category: "Gaji",
    date: "8 Des 2025",
    time: "16:45",
    creator: "Budi Santoso",
    isFraud: false,
    comparison: {
      planAmount: "Rp 1.200.000",
      planPurpose: "Gaji Pegawai Bulan Desember",
      proofAmount: "Rp 1.200.000",
      difference: "Rp 0",
      proofPurpose: "Gaji Pegawai Bulan Desember",
      matchLevel: "100%",
      note: "Data sesuai dengan rencana transaksi",
    },
  },
];

const pendingPlans = [
  {
    id: "PLAN001",
    title: "Pembelian Bibit Padi untuk Program Pertanian",
    amount: "Rp 5.000.000",
    category: "Operasional",
    date: "8 Des 2025",
    creator: "Budi Santoso",
  },
  {
    id: "PLAN002",
    title: "Pembelian Peralatan Pertanian",
    amount: "Rp 2.500.000",
    category: "Operasional",
    date: "9 Des 2025",
    creator: "Ani Wulandari",
  },
];

function SidebarContent({ onLogout, onClose }) {
  return (
    <div className="flex h-dvh min-h-0 flex-col overflow-hidden bg-slate-950 text-white">
      <div className="flex items-center justify-between px-6 pb-6 pt-7">
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
          aria-label="Tutup sidebar"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="mt-8 flex-1 space-y-2 overflow-y-auto px-6 pb-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
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

      <div className="shrink-0 space-y-4 border-t border-white/10 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4">
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

function Topbar({ onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8 lg:py-5">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white lg:hidden"
            aria-label="Buka sidebar"
          >
            <Menu size={22} />
          </button>

          <div className="min-w-0">
            <p className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 lg:block">
              Dashboard Petugas
            </p>
            <h1 className="truncate text-xl font-bold text-slate-900 sm:text-2xl">
              Riwayat Transaksi
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              {completedTransactions.length + pendingPlans.length} transaksi
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white">
            <Bell size={20} />
          </button>

          <div className="hidden items-center gap-3 rounded-2xl bg-slate-100 px-4 py-2 sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <UserRound size={20} />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">Petugas</p>
              <p className="text-xs text-slate-500">BUMDes Operator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SummaryCard({ icon: Icon, label, value, variant }) {
  const variants = {
    total: "bg-blue-50 text-blue-600 ring-blue-100",
    done: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    pending: "bg-amber-50 text-amber-600 ring-amber-100",
    alert: "bg-rose-50 text-rose-600 ring-rose-100",
  };

  return (
    <article className={`rounded-3xl p-5 ring-1 ${variants[variant]}`}>
      <div className="flex items-center justify-between gap-3">
        <Icon size={20} />
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold">
          {label}
        </span>
      </div>
      <h3 className="mt-4 text-3xl font-bold text-slate-900">{value}</h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{label.toLowerCase()}</p>
    </article>
  );
}

function Toolbar({ search, setSearch }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Cari ID atau tujuan transaksi..."
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:flex">
        <button className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-100 px-5 text-sm font-semibold text-slate-600 transition hover:bg-blue-600 hover:text-white">
          <Filter size={20} />
          <span className="sm:hidden lg:inline">Filter</span>
        </button>
        {/* <button className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
          <Download size={20} />
          <span className="sm:hidden lg:inline">Download</span>
        </button> */}
      </div>
    </div>
  );
}

function ComparisonCard({ item }) {
  const isFraud = item.isFraud;

  return (
    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
      <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
        <h4 className="font-medium text-slate-600">Data Rencana ({item.planId}):</h4>
        <div className="mt-3 space-y-2 text-sm sm:text-base">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Nominal:</span>
            <span className="font-medium text-slate-900">{item.comparison.planAmount}</span>
          </div>
          <div>
            <span className="text-slate-500">Tujuan:</span>
            <p className="mt-1 italic text-slate-900">{item.comparison.planPurpose}</p>
          </div>
        </div>
      </div>

      <div className={`rounded-2xl p-4 ring-1 ${isFraud ? "bg-rose-50 ring-rose-200" : "bg-emerald-50 ring-emerald-200"}`}>
        <h4 className={`font-medium ${isFraud ? "text-rose-700" : "text-emerald-700"}`}>
          Data dari Verifikasi Bukti:
        </h4>

        <div className="mt-3 space-y-2 text-sm sm:text-base">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-600">Nominal:</span>
            <span className={`font-medium ${isFraud ? "text-red-600" : "text-emerald-700"}`}>
              {item.comparison.proofAmount}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-600">Selisih:</span>
            <span className={`font-medium ${isFraud ? "text-red-600" : "text-emerald-700"}`}>
              {item.comparison.difference}
            </span>
          </div>
          <div>
            <span className="text-slate-600">Tujuan:</span>
            <p className={`mt-1 italic ${isFraud ? "text-red-700" : "text-emerald-700"}`}>
              {item.comparison.proofPurpose}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-2">
            <span className="text-slate-600">Tingkat Kecocokan:</span>
            <span className={`font-semibold ${isFraud ? "text-red-600" : "text-emerald-700"}`}>
              {item.comparison.matchLevel}
            </span>
          </div>
        </div>
      </div>

      <div className={`flex items-start gap-2 rounded-2xl p-4 text-sm font-medium sm:text-base ${isFraud ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-700"}`}>
        {isFraud ? <AlertTriangle size={19} className="mt-0.5 shrink-0" /> : <CheckCircle2 size={19} className="mt-0.5 shrink-0" />}
        <span>{item.comparison.note}</span>
      </div>
    </div>
  );
}

function TransactionCard({ item }) {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <article className={`rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${item.isFraud ? "border-rose-300 shadow-rose-100" : "border-emerald-300 shadow-emerald-100"}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.isFraud ? "bg-rose-500" : "bg-emerald-500"}`} />
          <h3 className="font-semibold text-slate-900">{item.id}</h3>
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
            <Link2 size={12} />
            {item.planId}
          </span>
        </div>
        {item.isFraud && <AlertTriangle size={18} className="shrink-0 text-rose-500" />}
      </div>

      {item.isFraud && (
        <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-600">
          <div className="flex gap-2">
            <AlertTriangle size={19} className="mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold">Indikasi Kecurangan Terdeteksi</h4>
              <p className="mt-1 text-sm leading-6">Data bukti tidak sesuai dengan rencana transaksi.</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-600">
          Terverifikasi
        </span>
        <span className="text-sm text-slate-500">{item.date}</span>
      </div>

      <h4 className="mt-4 text-base font-medium leading-6 text-slate-900">{item.title}</h4>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="font-semibold text-blue-600">{item.amount}</p>
        <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-sm text-slate-600">{item.category}</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
        <div>
          <p className="text-sm text-slate-500">Waktu</p>
          <p className="mt-1 font-medium text-slate-900">{item.time}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">Dibuat oleh</p>
          <p className="mt-1 font-medium text-slate-900">{item.creator}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowComparison((current) => !current)}
        className="mt-4 flex w-full items-center justify-center gap-2 border-b border-slate-100 pb-4 text-center text-sm font-semibold leading-6 text-blue-600 transition hover:text-blue-700"
      >
        <Eye size={17} />
        {showComparison ? "Tutup Perbandingan" : "Lihat Perbandingan dengan Rencana"}
      </button>

      {showComparison && <ComparisonCard item={item} />}

      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
        <ShieldCheck size={16} />
        Tersimpan di Blockchain
      </div>
    </article>
  );
}

function PendingPlanCard({ item }) {
  return (
    <article className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm shadow-amber-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900">{item.id}</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-700">
          <CalendarDays size={15} />
          Menunggu
        </span>
      </div>

      <h4 className="mt-5 text-base font-medium leading-7 text-slate-900">{item.title}</h4>
      <p className="mt-4 flex items-center gap-2 text-lg font-semibold text-blue-600">
        <Wallet size={20} />
        {item.amount}
      </p>

      <div className="mt-4 grid gap-3 border-y border-slate-100 py-4 text-sm text-slate-500 sm:grid-cols-2">
        <span className="flex items-center gap-2">
          <Tag size={17} />
          {item.category}
        </span>
        <span className="flex items-center gap-2">
          <CalendarDays size={17} />
          {item.date}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Dibuat oleh: <span className="font-medium text-slate-600">{item.creator}</span>
      </p>
    </article>
  );
}

export default function RiwayatTransaksiPetugas() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    navigate("/login-petugas");
  };

  const filteredTransactions = useMemo(() => {
    const keyword = search.toLowerCase();
    return completedTransactions.filter((item) =>
      [item.id, item.planId, item.title, item.amount, item.category, item.creator]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [search]);

  const filteredPendingPlans = useMemo(() => {
    const keyword = search.toLowerCase();
    return pendingPlans.filter((item) =>
      [item.id, item.title, item.amount, item.category, item.creator]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [search]);

  const fraudCount = completedTransactions.filter((item) => item.isFraud).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-80 shadow-2xl">
            <SidebarContent onLogout={handleLogout} onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 hidden w-80 lg:block">
        <SidebarContent onLogout={handleLogout} onClose={() => {}} />
      </aside>

      <div className="lg:ml-80">
        <Topbar onOpenSidebar={() => setSidebarOpen(true)} />

        <div className="mx-auto max-w-7xl space-y-6 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryCard icon={History} label="Total" value={completedTransactions.length + pendingPlans.length} variant="total" />
            <SummaryCard icon={CheckCircle2} label="Selesai" value={completedTransactions.length} variant="done" />
            <SummaryCard icon={CalendarDays} label="Menunggu" value={pendingPlans.length} variant="pending" />
            <SummaryCard icon={AlertTriangle} label="Indikasi" value={fraudCount} variant="alert" />
          </section>

          <Toolbar search={search} setSearch={setSearch} />

          <section>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Rencana Selesai</h2>
                <p className="mt-1 text-sm text-slate-500">Transaksi yang sudah dieksekusi dan diverifikasi.</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                {filteredTransactions.length} data
              </span>
            </div>

            <div className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
              {filteredTransactions.map((item) => (
                <TransactionCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Menunggu Eksekusi</h2>
                <p className="mt-1 text-sm text-slate-500">Rencana yang belum memiliki bukti transaksi.</p>
              </div>
              <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                {filteredPendingPlans.length} data
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredPendingPlans.map((item) => (
                <PendingPlanCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
