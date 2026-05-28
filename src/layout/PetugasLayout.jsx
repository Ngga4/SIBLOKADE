import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  ClipboardList,
  FileText,
  History,
  Home,
  LogOut,
  Menu,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/dashboard-petugas",
    key: "dashboard",
  },
  {
    label: "Rencana Transaksi",
    icon: ClipboardList,
    path: "/petugas/rencana-transaksi",
    key: "rencana",
  },
  {
    label: "Riwayat Transaksi",
    icon: History,
    path: "/petugas/riwayat-transaksi",
    key: "riwayat",
  },
  {
    label: "Laporan",
    icon: FileText,
    path: "/petugas/generate-laporan",
    key: "laporan",
  },
];

function SidebarContent({ activeMenu, onLogout, onClose }) {
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
          const isActive = activeMenu === item.key;

          return (
            <Link
              key={item.key}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
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

export default function PetugasLayout({
  activeMenu = "dashboard",
  title,
  subtitle,
  children,
}) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <SidebarContent
              activeMenu={activeMenu}
              onLogout={handleLogout}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 hidden w-80 lg:block">
        <SidebarContent
          activeMenu={activeMenu}
          onLogout={handleLogout}
          onClose={() => {}}
        />
      </aside>

      <div className="lg:ml-80">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8 lg:py-5">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
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
                  {title}
                </h1>

                {subtitle && (
                  <p className="mt-1 hidden text-sm text-slate-500 sm:block">
                    {subtitle}
                  </p>
                )}
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
                  <p className="text-sm font-semibold text-slate-900">
                    Petugas
                  </p>
                  <p className="text-xs text-slate-500">BUMDes Operator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </div>
    </main>
  );
}