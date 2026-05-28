import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

          <Link
            to="/petugas/rencana-transaksi"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-blue-600 hover:text-white"
            aria-label="Kembali ke rencana transaksi"
          >
            <ArrowLeft size={22} />
          </Link>

          <div className="min-w-0">
            <p className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 lg:block">
              Dashboard Petugas
            </p>
            <h1 className="truncate text-xl font-bold text-slate-900 sm:text-2xl">
              Buat Rencana Transaksi
            </h1>
            <p className="mt-1 hidden text-sm text-slate-500 sm:block">
              Rencanakan transaksi sebelum eksekusi
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

function InfoCard() {
  return (
    <section className="rounded-3xl bg-blue-50 p-5 text-blue-700 ring-1 ring-blue-100 lg:p-6">
      <div className="flex gap-4">
        <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white sm:flex">
          <ReceiptText size={24} />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Tentang Rencana Transaksi</h2>
          <p className="mt-3 text-base leading-8">
            Buat rencana transaksi terlebih dahulu. Ketika Anda upload bukti transaksi nanti,
            sistem OCR akan membandingkan bukti dengan rencana ini untuk validasi otomatis.
          </p>
        </div>
      </div>
    </section>
  );
}

function InputCard({ label, required, icon: Icon, children }) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:p-6">
      <label className="block text-base font-semibold text-slate-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
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
    <section className="rounded-3xl bg-slate-50 p-5 text-center text-slate-700 ring-1 ring-slate-100 lg:text-left">
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
        <Lightbulb size={22} className="shrink-0 text-amber-400" />
        <p className="leading-7">
          <span className="font-semibold text-slate-900">Tips:</span> Pastikan nominal dan tujuan penggunaan sesuai dengan yang akan tertera di bukti transaksi untuk hasil validasi OCR yang optimal.
        </p>
      </div>
    </section>
  );
}

export default function BuatRencanaTransaksiPetugas() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [form, setForm] = useState({
    nominal: "",
    category: "",
    purpose: "",
  });

  const handleLogout = () => {
    navigate("/login-petugas");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/petugas/rencana-transaksi");
  };

  const canSubmit = form.nominal && form.category && form.purpose;

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

        <div className="mx-auto max-w-7xl space-y-6 px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_410px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <InfoCard />

              <div className="grid gap-6 lg:grid-cols-2">
                <InputCard label="Nominal yang Direncanakan" required icon={Wallet}>
                  <input
                    value={form.nominal}
                    onChange={(event) => setForm({ ...form, nominal: event.target.value })}
                    placeholder="0"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </InputCard>

                <InputCard label="Kategori Transaksi" icon={Tag}>
                  <select
                    value={form.category}
                    onChange={(event) => setForm({ ...form, category: event.target.value })}
                    className="h-14 w-full appearance-none rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option value="">Pilih Kategori</option>
                    <option value="Operasional">Operasional</option>
                    <option value="Infrastruktur">Infrastruktur</option>
                    <option value="Modal Usaha">Modal Usaha</option>
                    <option value="Gaji">Gaji</option>
                    <option value="Pertanian">Pertanian</option>
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
                    placeholder="Jelaskan tujuan penggunaan dana yang direncanakan..."
                    className="min-h-[170px] w-full resize-none rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-base leading-7 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </section>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-base font-semibold text-white shadow-lg transition ${
                  canSubmit
                    ? "bg-blue-600 shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-blue-700"
                    : "bg-blue-600/70 shadow-blue-600/10"
                }`}
              >
                <Save size={20} />
                Simpan Rencana Transaksi
              </button>
            </form>

            <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
              <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-xl font-bold text-slate-900">Ringkasan Rencana</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Data rencana ini akan menjadi acuan saat bukti transaksi diverifikasi oleh sistem OCR.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Nominal</span>
                    <span className="font-semibold text-slate-900">
                      {form.nominal ? `Rp ${form.nominal}` : "Belum diisi"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Kategori</span>
                    <span className="font-semibold text-slate-900">
                      {form.category || "Belum dipilih"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">Tujuan</span>
                    <p className="mt-2 rounded-2xl bg-slate-50 p-3 leading-6 text-slate-700">
                      {form.purpose || "Tujuan penggunaan belum diisi."}
                    </p>
                  </div>
                </div>
              </section>

              <TipsCard />

              <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-xl shadow-blue-600/20">
                <h2 className="text-xl font-bold">Validasi Otomatis</h2>
                <p className="mt-3 text-sm leading-7 text-blue-50">
                  Setelah bukti transaksi diunggah pada tahap eksekusi, sistem akan membandingkan nominal dan tujuan transaksi dengan data rencana ini.
                </p>
              </section>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
