import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  History,
  Home,
  LogOut,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Tag,
  UploadCloud,
  UserRound,
  Wallet,
  X,
} from "lucide-react";


const navItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard-petugas", active: false },
  { label: "Rencana Transaksi", icon: ClipboardList, path: "/petugas/rencana-transaksi", active: true },
  { label: "Riwayat Transaksi", icon: History, path: "/petugas/riwayat-transaksi", active: false },
  { label: "Laporan", icon: FileText, path: "/petugas/generate-laporan", active: false },
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

const completedPlans = [
  {
    id: "PLAN003",
    title: "Renovasi Gudang Penyimpanan",
    planAmount: "Rp 3.500.000",
    proofAmount: "Rp 3.500.000",
    difference: "Rp 0",
    proofPurpose: "Renovasi Gudang Penyimpanan",
    matchLevel: "100%",
    planDate: "5 Des 2025",
    executionDate: "9 Des 2025",
    category: "Infrastruktur",
    creator: "Budi Santoso",
    status: "Terverifikasi",
    isFraud: false,
  },
  {
    id: "PLAN004",
    title: "Gaji Pegawai Bulan Desember",
    planAmount: "Rp 1.200.000",
    proofAmount: "Rp 1.200.000",
    difference: "Rp 0",
    proofPurpose: "Gaji Pegawai Bulan Desember",
    matchLevel: "100%",
    planDate: "3 Des 2025",
    executionDate: "8 Des 2025",
    category: "Gaji",
    creator: "Ani Wulandari",
    status: "Terverifikasi",
    isFraud: false,
  },
  {
    id: "PLAN005",
    title: "Modal Usaha Warung Desa",
    planAmount: "Rp 4.500.000",
    proofAmount: "Rp 6.200.000",
    difference: "+Rp 1.700.000 (37.8%)",
    proofPurpose: "Pembelian Inventaris Warung",
    matchLevel: "45%",
    planDate: "1 Des 2025",
    executionDate: "6 Des 2025",
    category: "Modal Usaha",
    creator: "Budi Santoso",
    status: "Indikasi Kecurangan",
    isFraud: true,
  },
];

function SidebarContent({ onLogout, onClose }) {
  return (
    <div className="flex h-full flex-col bg-slate-950 text-white">
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

      <nav className="mt-8 space-y-2 px-6">
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
              Rencana Transaksi
            </h1>
            <p className="mt-1 hidden text-sm text-slate-500 sm:block">
              Kelola rencana dan bukti transaksi BUMDes
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
    pending: "bg-amber-50 text-amber-600 ring-amber-100",
    done: "bg-emerald-50 text-emerald-600 ring-emerald-100",
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

function SearchAndAction({ search, setSearch }) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Cari rencana transaksi..."
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <Link
        to="/petugas/buat-rencana-transaksi"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
        <Plus size={18} />
        Buat Rencana Transaksi Baru
        </Link>
    </div>
  );
}

function PendingPlanCard({ item }) {
  return (
    <article className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm shadow-amber-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900">{item.id}</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-700">
          <Clock3 size={15} />
          Menunggu
        </span>
      </div>

      <h4 className="mt-5 text-base font-medium leading-7 text-slate-900">
        {item.title}
      </h4>

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

      <Link
            to={`/petugas/eksekusi-transaksi/${item.id}`}
            className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-blue-50 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
            <UploadCloud size={17} />
            Klik untuk input bukti transaksi
            </Link>
    </article>
  );
}

function VerificationBox({ item }) {
  const variantClass = item.isFraud
    ? "border-rose-200 bg-rose-50 text-rose-700"
    : "border-emerald-200 bg-emerald-50 text-emerald-700";

  return (
    <div className={`rounded-2xl border p-4 ${variantClass}`}>
      <p className="text-sm font-semibold">Hasil OCR dari Bukti:</p>

      <div className="mt-3 space-y-2 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span>Nominal Bukti:</span>
          <span className="font-semibold">{item.proofAmount}</span>
        </div>

        {item.isFraud && (
          <div className="flex items-center justify-between gap-4">
            <span>Selisih:</span>
            <span className="font-semibold">{item.difference}</span>
          </div>
        )}

        <div>
          <span>Tujuan di Bukti:</span>
          <p className="mt-1 italic font-medium">{item.proofPurpose}</p>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-current/15 pt-2">
          <span>Kecocokan:</span>
          <span className="font-semibold">{item.matchLevel}</span>
        </div>
      </div>
    </div>
  );
}

function CompletedPlanCard({ item }) {
  return (
    <article
      className={`rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        item.isFraud
          ? "border-rose-300 shadow-rose-100"
          : "border-emerald-300 shadow-emerald-100"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900">{item.id}</h3>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold ${
            item.isFraud
              ? "bg-rose-100 text-rose-700"
              : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {item.isFraud ? <AlertTriangle size={15} /> : <CheckCircle2 size={15} />}
          {item.status}
        </span>
      </div>

      <h4 className="mt-5 text-base font-medium leading-7 text-slate-900">
        {item.title}
      </h4>

      <div className="mt-4 rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm text-slate-500">Rencana:</p>
        <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-900">
          <Wallet size={19} />
          {item.planAmount}
        </p>
      </div>

      <div className="mt-3">
        <VerificationBox item={item} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 text-sm">
        <div>
          <p className="text-slate-500">Tanggal Rencana</p>
          <p className="mt-1 font-medium text-slate-900">{item.planDate}</p>
        </div>
        <div>
          <p className="text-slate-500">Tanggal Eksekusi</p>
          <p className="mt-1 font-medium text-slate-900">{item.executionDate}</p>
        </div>
        <div>
          <p className="text-slate-500">Kategori</p>
          <p className="mt-1 font-medium text-slate-900">{item.category}</p>
        </div>
        <div>
          <p className="text-slate-500">Dibuat oleh</p>
          <p className="mt-1 font-medium text-slate-900">{item.creator}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600">
        <ShieldCheck size={16} />
        Tersimpan di Blockchain
      </div>
    </article>
  );
}

export default function RencanaTransaksiPetugas() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    navigate("/login-petugas");
  };

  const filteredPendingPlans = useMemo(() => {
    const keyword = search.toLowerCase();
    return pendingPlans.filter((item) =>
      [item.id, item.title, item.category, item.creator]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [search]);

  const filteredCompletedPlans = useMemo(() => {
    const keyword = search.toLowerCase();
    return completedPlans.filter((item) =>
      [item.id, item.title, item.category, item.creator, item.status]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-80 shadow-2xl">
            <SidebarContent
              onLogout={handleLogout}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 hidden w-80 lg:block">
        <SidebarContent onLogout={handleLogout} onClose={() => {}} />
      </aside>

      <div className="lg:ml-80">
        <Topbar onOpenSidebar={() => setSidebarOpen(true)} />

        <div className="mx-auto max-w-7xl space-y-7 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <SummaryCard icon={Clock3} label="Menunggu" value={pendingPlans.length} variant="pending" />
            <SummaryCard icon={CheckCircle2} label="Selesai" value={completedPlans.filter((item) => !item.isFraud).length} variant="done" />
            <SummaryCard icon={AlertTriangle} label="Indikasi" value={completedPlans.filter((item) => item.isFraud).length} variant="alert" />
          </section>

          <SearchAndAction search={search} setSearch={setSearch} />

          <section>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Menunggu Eksekusi</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Rencana yang belum memiliki bukti transaksi.
                </p>
              </div>
              <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                {filteredPendingPlans.length} rencana
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredPendingPlans.map((item) => (
                <PendingPlanCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Rencana Selesai</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Rencana yang sudah dieksekusi dan diverifikasi.
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                {filteredCompletedPlans.length} rencana
              </span>
            </div>

            <div className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
              {filteredCompletedPlans.map((item) => (
                <CompletedPlanCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
