import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  LockKeyhole,
  ShieldCheck,
  Eye,
  EyeOff,
  User,
  Lock,
  BadgeCheck,
  FileText,
  BarChart3,
} from "lucide-react";

export default function LoginPetugas() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.username === "petugas" && form.password === "bumdes2025") {
      navigate("/dashboard-petugas");
      return;
    }

    alert("Username atau password belum sesuai.");
  };

  return (
    <main className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
      {/* KIRI - DESKTOP */}
      <section className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative z-10 px-10 py-10 xl:px-16 xl:py-14">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                SI-BLOKADE
              </p>
              <h1 className="text-lg font-bold text-white">
                Sistem Integrasi Blockchain dan Akuntabilitas Desa
              </h1>
            </div>
          </div>

          <div className="mt-14 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
              Login Petugas BUMDes
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white xl:text-5xl">
              Kelola transaksi desa dengan lebih aman, transparan, dan mudah.
            </h2>
            <p className="mt-6 text-base leading-8 text-blue-50">
              Halaman ini digunakan oleh petugas BUMDes untuk mengakses dashboard,
              membuat rencana transaksi, mengunggah bukti transaksi, dan melihat
              hasil verifikasi secara real-time.
            </p>
          </div>

          {/* <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-5 text-white ring-1 ring-white/20 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <FileText size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Rencana Transaksi</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Buat dan kelola rencana transaksi sebelum proses realisasi dilakukan.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 text-white ring-1 ring-white/20 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <BadgeCheck size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Verifikasi Bukti</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Bukti transaksi dapat dicek dan dibandingkan dengan rencana secara otomatis.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 text-white ring-1 ring-white/20 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <ShieldCheck size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Aman & Transparan</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Data transaksi tersimpan rapi dan mendukung akuntabilitas keuangan desa.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-5 text-white ring-1 ring-white/20 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <BarChart3 size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Dashboard Laporan</h3>
              <p className="mt-2 text-sm leading-6 text-blue-50">
                Pantau laporan transaksi, status verifikasi, dan indikasi kecurangan.
              </p>
            </div>
          </div> */}
        </div>

        <div className="relative z-10 px-10 pb-10 xl:px-16 xl:pb-14">
          <div className="rounded-3xl bg-white/10 px-5 py-4 text-sm text-blue-50 ring-1 ring-white/20 backdrop-blur-md">
            Sistem ini dirancang untuk membantu petugas BUMDes mengelola transaksi
            secara profesional serta memudahkan masyarakat dalam memantau transparansi dana desa.
          </div>
        </div>
      </section>

      {/* KANAN - FORM LOGIN */}
      <section className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-6 lg:px-10">
        <div className="w-full max-w-md">
          {/* Header Mobile */}
          <div className="mb-8 lg:hidden">
            <Link
              to="/"
              className="mb-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100"
              aria-label="Kembali"
            >
              <ArrowLeft size={24} />
            </Link>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <LockKeyhole size={30} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-slate-900">
                Login Petugas
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-base leading-8 text-slate-500">
                Masukkan kredensial Anda untuk mengakses dashboard
              </p>
            </div>
          </div>

          {/* Header Desktop */}
          <div className="mb-8 hidden lg:block">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft size={18} />
              Kembali ke halaman utama
            </Link>

            <div className="flex items-center gap-4 flex-wrap justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <LockKeyhole size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Login Petugas
                </h2>
                <p className="mt-1 text-slate-500">
                  Masukkan kredensial untuk mengakses dashboard SI-BLOKADE
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-blue-500 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-7"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-3 block text-lg font-medium text-slate-700">
                  Username
                </label>
                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Masukkan username"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-lg font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Masukkan password"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-14 text-base text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                    aria-label="Tampilkan password"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 h-14 w-full rounded-2xl bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Masuk ke Dashboard
            </button>
          </form>

          <div className="mt-6 rounded-3xl bg-slate-100 p-5 text-slate-600">
            <h3 className="text-lg font-medium text-slate-700">Demo Kredensial:</h3>
            <div className="mt-3 space-y-2 text-base">
              <p>
                Username: <span className="font-medium text-blue-600">petugas</span>
              </p>
              <p>
                Password: <span className="font-medium text-blue-600">bumdes2025</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}