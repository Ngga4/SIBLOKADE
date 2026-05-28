import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  History,
  Home,
  Lightbulb,
  LogOut,
  Menu,
  ReceiptText,
  Save,
  ShieldCheck,
  Tag,
  Upload,
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

const plans = {
  PLAN001: {
    id: "PLAN001",
    title: "Pembelian Bibit Padi untuk Program Pertanian",
    amount: "Rp 5.000.000",
    rawAmount: "5.000.000",
    category: "Operasional",
    creator: "Budi Santoso",
    date: "8 Des 2025",
  },
  PLAN002: {
    id: "PLAN002",
    title: "Pembelian Peralatan Pertanian",
    amount: "Rp 2.500.000",
    rawAmount: "2.500.000",
    category: "Operasional",
    creator: "Ani Wulandari",
    date: "9 Des 2025",
  },
};

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

function Topbar({ onOpenSidebar, title, subtitle }) {
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

          <Link
            to="/petugas/rencana-transaksi"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white"
            aria-label="Kembali"
          >
            <ArrowLeft size={22} />
          </Link>

          <div className="min-w-0">
            <p className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 lg:block">
              Dashboard Petugas
            </p>
            <h1 className="truncate text-xl font-bold text-slate-900 sm:text-2xl">
              {title}
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">{subtitle}</p>
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

function PlanSummaryCard({ plan }) {
  return (
    <section className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-sm shadow-orange-100 lg:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
          <ReceiptText size={25} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-orange-700">Rencana Transaksi</h2>
          <p className="mt-2 text-base font-medium leading-7 text-orange-600">
            {plan.title}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 border-t border-orange-200 pt-5 sm:grid-cols-3">
        <div>
          <p className="text-sm text-orange-600">Nominal Rencana</p>
          <p className="mt-1 text-lg font-semibold text-orange-900">{plan.amount}</p>
        </div>
        <div>
          <p className="text-sm text-orange-600">Kategori</p>
          <p className="mt-1 text-lg font-semibold text-orange-900">{plan.category}</p>
        </div>
        <div>
          <p className="text-sm text-orange-600">Dibuat oleh</p>
          <p className="mt-1 text-lg font-semibold text-orange-900">{plan.creator}</p>
        </div>
      </div>
    </section>
  );
}

function FileUploadBox({ fileName, onFileChange }) {
  return (
    <label className="block cursor-pointer rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:ring-blue-200 lg:p-6">
      <span className="text-base font-semibold text-slate-900">
        Upload Bukti Transaksi <span className="text-red-500">*</span>
      </span>

      <div className="mt-5 flex min-h-[170px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-7 text-center transition hover:border-blue-400 hover:bg-blue-50/40">
        <Upload size={54} className="text-slate-400" />
        <p className="mt-4 text-base font-medium text-slate-700">
          {fileName || "Pilih file atau foto"}
        </p>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          PNG, JPG, PDF (max 5MB)
        </p>
      </div>

      <input
        type="file"
        accept="image/png,image/jpeg,application/pdf"
        className="hidden"
        onChange={onFileChange}
      />
    </label>
  );
}

function InputCard({ label, icon: Icon, children }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:p-6">
      <label className="block text-base font-semibold text-slate-900">{label}</label>
      <div className="relative mt-4">
        {Icon && (
          <Icon
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}
        {children}
      </div>
    </section>
  );
}

function TipsCard() {
  return (
    <section className="rounded-3xl bg-blue-50 p-5 text-slate-700 ring-1 ring-blue-100 lg:p-6">
      <div className="flex gap-3">
        <Lightbulb size={22} className="mt-0.5 shrink-0 text-amber-400" />
        <div>
          <h3 className="font-semibold text-blue-600">Tips:</h3>
          <p className="mt-2 leading-7">
            Upload bukti transaksi yang jelas. Sistem OCR akan membandingkan data bukti dengan rencana transaksi untuk validasi otomatis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function EksekusiTransaksiPetugas() {
  const navigate = useNavigate();
  const { planId = "PLAN001" } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    nominal: "5.000.000",
    category: "Operasional",
    purpose: "",
  });

  const plan = plans[planId] ?? plans.PLAN001;

  const handleLogout = () => {
    navigate("/login-petugas");
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/petugas/rencana-transaksi");
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
        <Topbar
          onOpenSidebar={() => setSidebarOpen(true)}
          title="Eksekusi Transaksi"
          subtitle={`Rencana : ${plan.id}`}
        />

        <div className="mx-auto max-w-7xl space-y-6 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          <PlanSummaryCard plan={plan} />

          <form onSubmit={handleSubmit} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="space-y-6">
              <FileUploadBox fileName={fileName} onFileChange={handleFileChange} />

              <div className="grid gap-6 md:grid-cols-2">
                <InputCard label="Nominal Transaksi" icon={Wallet}>
                  <input
                    value={form.nominal}
                    onChange={(event) => setForm({ ...form, nominal: event.target.value })}
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    placeholder="5.000.000"
                  />
                </InputCard>

                <InputCard label="Kategori" icon={Tag}>
                  <select
                    value={form.category}
                    onChange={(event) => setForm({ ...form, category: event.target.value })}
                    className="h-14 w-full appearance-none rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option>Operasional</option>
                    <option>Infrastruktur</option>
                    <option>Modal Usaha</option>
                    <option>Gaji</option>
                  </select>
                </InputCard>
              </div>

              <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:p-6">
                <label className="block text-base font-semibold text-slate-900">
                  Tujuan Penggunaan
                </label>
                <div className="relative mt-4">
                  <FileText size={20} className="absolute left-4 top-5 text-slate-400" />
                  <textarea
                    value={form.purpose}
                    onChange={(event) => setForm({ ...form, purpose: event.target.value })}
                    placeholder="Jelaskan tujuan penggunaan dana..."
                    className="min-h-[145px] w-full resize-none rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-base leading-7 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </section>
            </div>

            <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-xl font-bold text-slate-900">Ringkasan Eksekusi</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Pastikan nominal, kategori, dan bukti transaksi sesuai dengan rencana sebelum disimpan.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Kode Rencana</span>
                    <span className="font-semibold text-slate-900">{plan.id}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Nominal</span>
                    <span className="font-semibold text-slate-900">{plan.amount}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Kategori</span>
                    <span className="font-semibold text-slate-900">{plan.category}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-500">Status</span>
                    <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-700">
                      Menunggu Bukti
                    </span>
                  </div>
                </div>
              </section>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-400 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                <Save size={20} />
                Simpan & Selesaikan Rencana
              </button>

              <TipsCard />
            </aside>
          </form>
        </div>
      </div>
    </main>
  );
}
