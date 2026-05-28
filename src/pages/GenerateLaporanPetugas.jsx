import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  CalendarDays,
  ClipboardList,
  Download,
  Eye,
  FileSpreadsheet,
  FileText,
  History,
  Home,
  Info,
  Lightbulb,
  LogOut,
  Menu,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard-petugas", active: false },
  { label: "Rencana Transaksi", icon: ClipboardList, path: "/petugas/rencana-transaksi", active: false },
  { label: "Riwayat Transaksi", icon: History, path: "/petugas/riwayat-transaksi", active: false },
  { label: "Laporan", icon: FileText, path: "/petugas/generate-laporan", active: true },
];

const summaryCards = [
  {
    label: "Total Transaksi",
    value: "7",
    className: "bg-blue-50 text-blue-600",
  },
  {
    label: "Total Nominal",
    value: "Rp 21.350.000",
    className: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Terverifikasi",
    value: "6",
    className: "bg-purple-50 text-purple-600",
  },
  {
    label: "Pending",
    value: "1",
    className: "bg-amber-50 text-amber-600",
  },
];

const categoryBreakdown = [
  { category: "Operasional", transactions: "2 transaksi", nominal: "Rp 7.800.000" },
  { category: "Infrastruktur", transactions: "1 transaksi", nominal: "Rp 3.500.000" },
  { category: "Modal Usaha", transactions: "1 transaksi", nominal: "Rp 4.500.000" },
  { category: "Gaji", transactions: "1 transaksi", nominal: "Rp 1.200.000" },
  { category: "Pengembangan", transactions: "2 transaksi", nominal: "Rp 4.350.000" },
];

function formatDateIndonesia(dateValue) {
  if (!dateValue) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}

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
              Generate Laporan
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Untuk laporan periode tertentu
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

function FormCard({ title, children }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:p-6">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function DateInput({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-500">{label}</label>
      <div className="relative mt-3">
        <CalendarDays
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
    </div>
  );
}

function PreviewReport({ startDate, endDate }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:p-6">
      <h2 className="text-xl font-bold text-slate-900">Preview Laporan</h2>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {summaryCards.map((item) => (
          <article key={item.label} className={`rounded-2xl p-4 ${item.className}`}>
            <p className="text-sm font-semibold">{item.label}</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">{item.value}</h3>
          </article>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="text-lg font-semibold text-slate-900">Breakdown per Kategori</h3>
        <div className="mt-4 space-y-2">
          {categoryBreakdown.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4"
            >
              <div>
                <p className="font-medium text-slate-900">{item.category}</p>
                <p className="mt-1 text-sm text-slate-500">{item.transactions}</p>
              </div>
              <p className="text-right font-semibold text-blue-600">{item.nominal}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-medium text-slate-500">Periode</p>
        <p className="mt-2 font-semibold leading-7 text-slate-900">
          {startDate} - {endDate}
        </p>
      </div>
    </section>
  );
}

function ExportReport() {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:p-6">
      <h2 className="text-lg font-semibold text-slate-900">Export Laporan</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
        <button className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 text-base font-semibold text-rose-600 transition hover:bg-rose-100">
          <FileText size={20} />
          Download PDF
        </button>
        <button className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 text-base font-semibold text-emerald-600 transition hover:bg-emerald-100">
          <FileSpreadsheet size={20} />
          Download Excel
        </button>
      </div>
    </section>
  );
}

function InfoCard() {
  return (
    <section className="rounded-3xl bg-blue-50 p-5 text-slate-700 ring-1 ring-blue-100 lg:p-6">
      <div className="flex gap-3">
        <Lightbulb size={22} className="mt-0.5 shrink-0 text-amber-400" />
        <p className="leading-7">
          <span className="font-semibold text-blue-600">Info:</span> Laporan dapat diexport dalam format PDF atau Excel untuk memudahkan dokumentasi dan analisis.
        </p>
      </div>
    </section>
  );
}

function DesktopHint() {
//   return (
//     <section className="hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-xl shadow-blue-600/20 lg:block">
//       <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
//         <Info size={26} />
//       </div>
//       <h2 className="mt-5 text-xl font-bold">Preview Tanpa Pindah Halaman</h2>
//       <p className="mt-3 text-sm leading-7 text-blue-50">
//         Klik tombol Preview Laporan untuk menampilkan ringkasan laporan langsung pada halaman ini. Data preview dapat ditutup dan ditampilkan kembali tanpa membuka route baru.
//       </p>
//     </section>
//   );
}

export default function GenerateLaporanPetugas() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [form, setForm] = useState({
    reportType: "Ringkasan Keuangan",
    startDate: "2025-12-01",
    endDate: "2025-12-12",
  });

  const handleLogout = () => {
    navigate("/login-petugas");
  };

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
          <section className="grid gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(420px,1fr)]">
            <div className="space-y-6">
              <FormCard title="Jenis Laporan">
                <select
                  value={form.reportType}
                  onChange={(event) => setForm({ ...form, reportType: event.target.value })}
                  className="h-14 w-full appearance-none rounded-2xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option>Ringkasan Keuangan</option>
                  <option>Laporan Transaksi</option>
                  <option>Laporan Indikasi Kecurangan</option>
                  <option>Laporan Rencana Pending</option>
                </select>
              </FormCard>

              <FormCard title="Periode Laporan">
                <div className="space-y-5">
                  <DateInput
                    label="Tanggal Mulai"
                    value={form.startDate}
                    onChange={(value) => setForm({ ...form, startDate: value })}
                  />
                  <DateInput
                    label="Tanggal Akhir"
                    value={form.endDate}
                    onChange={(value) => setForm({ ...form, endDate: value })}
                  />
                </div>
              </FormCard>

              <button
                type="button"
                onClick={() => setShowPreview((current) => !current)}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <Eye size={20} />
                {showPreview ? "Tutup Preview Laporan" : "Preview Laporan"}
              </button>

              <DesktopHint />
            </div>

            <div className="space-y-6">
              {showPreview ? (
                <>
                  <PreviewReport
                    startDate={formatDateIndonesia(form.startDate)}
                    endDate={formatDateIndonesia(form.endDate)}
                  />
                  <ExportReport />
                </>
              ) : (
                <section className="hidden rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 xl:block">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                    <Eye size={30} />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-slate-900">Preview belum ditampilkan</h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                    Atur jenis dan periode laporan, lalu klik tombol Preview Laporan untuk melihat ringkasan laporan di area ini.
                  </p>
                </section>
              )}

              <InfoCard />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
