import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Users,
  Clock3,
  ChevronRight,
  Search,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const bumdesList = [
  {
    id: 1,
    name: "BUMDes Sejahtera Mandiri",
    village: "Desa Sukamaju",
    members: 245,
    updatedAt: "2 jam yang lalu",
    status: "Aktif",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    name: "BUMDes Maju Bersama",
    village: "Desa Mekarjaya",
    members: 189,
    updatedAt: "5 jam yang lalu",
    status: "Aktif",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    name: "BUMDes Karya Tani",
    village: "Desa Tanjungsari",
    members: 312,
    updatedAt: "1 hari yang lalu",
    status: "Aktif",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    name: "BUMDes Usaha Rakyat",
    village: "Desa Cimanggis",
    members: 156,
    updatedAt: "3 jam yang lalu",
    status: "Aktif",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    name: "BUMDes Berkah Jaya",
    village: "Desa Cipanas",
    members: 203,
    updatedAt: "6 jam yang lalu",
    status: "Aktif",
    color: "from-rose-500 to-pink-500",
  },
];

// function SummaryCard({ icon: Icon, label, value }) {
//   return (
//     <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-white/70 backdrop-blur-md">
//       <div className="flex items-center gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//           <Icon size={20} />
//         </div>
//         <div>
//           <p className="text-xs font-medium text-slate-500">{label}</p>
//           <h3 className="text-lg font-bold text-slate-900">{value}</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

function BumdesCard({ item }) {
  return (
    <Link
        to={`/bumdes/${item.id}`}
        className="group relative block w-full overflow-hidden rounded-3xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10 hover:ring-blue-100 sm:p-6"
        >
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-blue-950/10 sm:h-16 sm:w-16`}
        >
          <Building2 size={28} strokeWidth={2.2} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-bold leading-6 text-slate-900 sm:text-lg">
              {item.name}
            </h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 ring-1 ring-emerald-100">
              {item.status}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={16} className="shrink-0 text-slate-400" />
            <span className="truncate">{item.village}</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Users size={15} />
              <span>
                <span className="font-semibold text-slate-600">{item.members}</span>{" "}
                anggota
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={15} />
              <span>{item.updatedAt}</span>
            </div>
          </div>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition group-hover:bg-blue-600 group-hover:text-white">
          <ChevronRight size={22} />
        </div>
      </div>
    </Link>
  );
}

export default function PilihBUMDes() {
  const [search, setSearch] = useState("");

  const filteredBumdes = useMemo(() => {
    return bumdesList.filter((item) => {
      const keyword = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.village.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  const totalMembers = bumdesList.reduce((total, item) => total + item.members, 0);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white ">
        <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl lg:left-[35%]" />
        <div className="absolute right-0 top-0 hidden h-64 w-64 rounded-full bg-cyan-100/70 blur-3xl md:block" />

        <div className="relative mx-auto max-w-6xl px-5 py-5 sm:px-6 lg:px-8 lg:py-8">
          <div className="flex items-start gap-4 black">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:-translate-x-0.5 hover:bg-blue-600 hover:text-white hover:ring-blue-600"
              aria-label="Kembali"
            >
              <ArrowLeft size={23} />
            </button>

            <div className="flex-1">
              <p className="mb-1 hidden text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 sm:block">
                SI-BLOKADE
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                Pilih BUMDes
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Pilih BUMDes untuk melihat laporan transaksi, riwayat dana, dan status verifikasi keuangan secara transparan.
              </p>
            </div>
          </div>

          {/* <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <SummaryCard icon={Building2} label="Total BUMDes" value={bumdesList.length} />
            <SummaryCard icon={Users} label="Total Anggota" value={totalMembers.toLocaleString("id-ID")} />
            <SummaryCard icon={ShieldCheck} label="Status Data" value="Terverifikasi" />
          </div> */}

          <div className="mt-5 flex flex-col gap-3 rounded-3xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-200 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Cari nama BUMDes atau desa..."
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* <div className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 sm:min-w-48">
              <BarChart3 size={18} />
              Laporan Terbaru
            </div> */}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Daftar BUMDes</h2>
            <p className="text-sm text-slate-500">
              {filteredBumdes.length} data tersedia
            </p>
          </div>
        </div>

        {filteredBumdes.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {filteredBumdes.map((item) => (
              <BumdesCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search size={24} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900">
              BUMDes tidak ditemukan
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Gunakan kata kunci lain untuk mencari data BUMDes.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
