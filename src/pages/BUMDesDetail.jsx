import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  FileText,
  Filter,
  Link2,
  Search,
  ShieldCheck,
  Tag,
  Wallet,
} from "lucide-react";

const bumdesDetails = [
  {
    id: "1",
    name: "BUMDes Sejahtera Mandiri",
    village: "Desa Sukamaju",
    plans: [
      {
        id: "PLAN001",
        title: "Pembelian Bibit Padi untuk Program Pertanian",
        amount: "Rp 5.000.000",
        category: "Operasional",
        date: "8 Des 2025",
        creator: "Budi Santoso",
        status: "Menunggu",
      },
      {
        id: "PLAN002",
        title: "Pembelian Peralatan Pertanian",
        amount: "Rp 2.500.000",
        category: "Operasional",
        date: "9 Des 2025",
        creator: "Ani Wulandari",
        status: "Menunggu",
      },
    ],
    transactions: [
      {
        id: "TX003",
        planId: "PLAN005",
        title: "Pembelian Inventaris Warung",
        amount: "Rp 6.200.000",
        category: "Modal Usaha",
        date: "6 Des 2025",
        time: "09:00",
        creator: "Budi Santoso",
        status: "Terverifikasi",
        indication: true,
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
        status: "Terverifikasi",
        indication: false,
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
        status: "Terverifikasi",
        indication: false,
      },
    ],
  },
  {
    id: "2",
    name: "BUMDes Maju Bersama",
    village: "Desa Mekarjaya",
    plans: [
      {
        id: "PLAN101",
        title: "Pengadaan Rak Produk UMKM Desa",
        amount: "Rp 4.000.000",
        category: "Operasional",
        date: "10 Des 2025",
        creator: "Rina Marlina",
        status: "Menunggu",
      },
      {
        id: "PLAN102",
        title: "Pembelian Mesin Pengemas Produk",
        amount: "Rp 7.750.000",
        category: "Modal Usaha",
        date: "11 Des 2025",
        creator: "Dedi Kurniawan",
        status: "Menunggu",
      },
    ],
    transactions: [
      {
        id: "TX101",
        planId: "PLAN099",
        title: "Pembelian Bahan Baku Keripik",
        amount: "Rp 2.850.000",
        category: "Operasional",
        date: "7 Des 2025",
        time: "08:30",
        creator: "Rina Marlina",
        status: "Terverifikasi",
        indication: false,
      },
      {
        id: "TX102",
        planId: "PLAN098",
        title: "Perbaikan Etalase Toko BUMDes",
        amount: "Rp 1.900.000",
        category: "Infrastruktur",
        date: "8 Des 2025",
        time: "13:20",
        creator: "Dedi Kurniawan",
        status: "Terverifikasi",
        indication: true,
      },
    ],
  },
  {
    id: "3",
    name: "BUMDes Karya Tani",
    village: "Desa Tanjungsari",
    plans: [
      {
        id: "PLAN201",
        title: "Pembelian Pupuk untuk Kelompok Tani",
        amount: "Rp 6.400.000",
        category: "Pertanian",
        date: "10 Des 2025",
        creator: "Slamet Riyadi",
        status: "Menunggu",
      },
      {
        id: "PLAN202",
        title: "Sewa Alat Panen Padi",
        amount: "Rp 3.200.000",
        category: "Operasional",
        date: "12 Des 2025",
        creator: "Neni Lestari",
        status: "Menunggu",
      },
    ],
    transactions: [
      {
        id: "TX201",
        planId: "PLAN199",
        title: "Pembelian Benih Jagung Hibrida",
        amount: "Rp 4.100.000",
        category: "Pertanian",
        date: "6 Des 2025",
        time: "11:00",
        creator: "Slamet Riyadi",
        status: "Terverifikasi",
        indication: false,
      },
      {
        id: "TX202",
        planId: "PLAN198",
        title: "Perawatan Pompa Air Sawah",
        amount: "Rp 2.300.000",
        category: "Infrastruktur",
        date: "7 Des 2025",
        time: "15:10",
        creator: "Neni Lestari",
        status: "Terverifikasi",
        indication: false,
      },
      {
        id: "TX203",
        planId: "PLAN197",
        title: "Pembelian Solar Traktor",
        amount: "Rp 1.450.000",
        category: "Operasional",
        date: "8 Des 2025",
        time: "09:25",
        creator: "Slamet Riyadi",
        status: "Terverifikasi",
        indication: true,
      },
    ],
  },
  {
    id: "4",
    name: "BUMDes Usaha Rakyat",
    village: "Desa Cimanggis",
    plans: [
      {
        id: "PLAN301",
        title: "Pengadaan Stok Warung Desa",
        amount: "Rp 5.600.000",
        category: "Modal Usaha",
        date: "10 Des 2025",
        creator: "Yusuf Hidayat",
        status: "Menunggu",
      },
      {
        id: "PLAN302",
        title: "Perbaikan Gudang Barang",
        amount: "Rp 2.950.000",
        category: "Infrastruktur",
        date: "13 Des 2025",
        creator: "Maya Safitri",
        status: "Menunggu",
      },
    ],
    transactions: [
      {
        id: "TX301",
        planId: "PLAN299",
        title: "Pembelian Sembako untuk Unit Usaha",
        amount: "Rp 3.700.000",
        category: "Modal Usaha",
        date: "5 Des 2025",
        time: "14:00",
        creator: "Yusuf Hidayat",
        status: "Terverifikasi",
        indication: false,
      },
      {
        id: "TX302",
        planId: "PLAN298",
        title: "Biaya Distribusi Produk Desa",
        amount: "Rp 850.000",
        category: "Operasional",
        date: "8 Des 2025",
        time: "10:40",
        creator: "Maya Safitri",
        status: "Terverifikasi",
        indication: false,
      },
    ],
  },
  {
    id: "5",
    name: "BUMDes Berkah Jaya",
    village: "Desa Cipanas",
    plans: [
      {
        id: "PLAN401",
        title: "Pengembangan Wisata Air Panas Desa",
        amount: "Rp 9.000.000",
        category: "Pariwisata",
        date: "12 Des 2025",
        creator: "Fitri Handayani",
        status: "Menunggu",
      },
      {
        id: "PLAN402",
        title: "Pembuatan Papan Informasi Wisata",
        amount: "Rp 1.800.000",
        category: "Infrastruktur",
        date: "14 Des 2025",
        creator: "Agus Pratama",
        status: "Menunggu",
      },
    ],
    transactions: [
      {
        id: "TX401",
        planId: "PLAN399",
        title: "Perawatan Area Wisata Desa",
        amount: "Rp 2.650.000",
        category: "Pariwisata",
        date: "6 Des 2025",
        time: "08:15",
        creator: "Fitri Handayani",
        status: "Terverifikasi",
        indication: true,
      },
      {
        id: "TX402",
        planId: "PLAN398",
        title: "Pembelian Tiket Gelang Pengunjung",
        amount: "Rp 1.050.000",
        category: "Operasional",
        date: "8 Des 2025",
        time: "12:30",
        creator: "Agus Pratama",
        status: "Terverifikasi",
        indication: false,
      },
    ],
  },
];

function StatCard({ icon: Icon, value, label, variant }) {
  const variants = {
    pending: "bg-amber-50 text-amber-600 ring-amber-100",
    done: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    alert: "bg-rose-50 text-rose-600 ring-rose-100",
  };

  return (
    <article className={`rounded-2xl p-4 ring-1 ${variants[variant]}`}>
      <Icon size={17} />
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{value}</h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
    </article>
  );
}

function SearchBar({ value, onChange }) {
  return (
    <div className="flex gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Cari transaksi..."
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>
      <button
        type="button"
        className="flex h-12 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white"
        aria-label="Filter transaksi"
      >
        <Filter size={22} />
      </button>
    </div>
  );
}

function TabButton({ active, icon: Icon, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold transition sm:text-base ${
        active
          ? "bg-blue-100 text-blue-600 shadow-sm"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
      }`}
    >
      <Icon size={17} />
      {children}
    </button>
  );
}

function ComparisonCard({ item }) {
  const isAlert = item.indication;
  const comparison = item.comparison ?? {
    planId: item.planId,
    planAmount: isAlert ? "Rp 4.500.000" : item.amount,
    planPurpose: isAlert ? "Modal Usaha Warung Desa" : item.title,
    proofAmount: item.amount,
    difference: isAlert ? "+Rp 1.700.000 (+37.8%)" : "Rp 0",
    proofPurpose: item.title,
    matchLevel: isAlert ? "45%" : "100%",
  };

  return (
    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
      <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-100">
        <h4 className="font-medium text-slate-600">
          Data Rencana ({comparison.planId}):
        </h4>

        <div className="mt-3 space-y-2 text-sm sm:text-base">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500">Nominal:</span>
            <span className="font-medium text-slate-900">{comparison.planAmount}</span>
          </div>

          <div>
            <span className="text-slate-500">Tujuan:</span>
            <p className="mt-1 italic text-slate-900">{comparison.planPurpose}</p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-2xl p-4 ring-1 ${
          isAlert
            ? "bg-rose-50 ring-rose-200"
            : "bg-emerald-50 ring-emerald-200"
        }`}
      >
        <h4 className={`font-medium ${isAlert ? "text-rose-700" : "text-emerald-700"}`}>
          Data dari Verifikasi Bukti:
        </h4>

        <div className="mt-3 space-y-2 text-sm sm:text-base">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-600">Nominal:</span>
            <span className={`font-medium ${isAlert ? "text-red-600" : "text-emerald-700"}`}>
              {comparison.proofAmount}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-600">Selisih:</span>
            <span className={`font-medium ${isAlert ? "text-red-600" : "text-emerald-700"}`}>
              {comparison.difference}
            </span>
          </div>

          <div>
            <span className="text-slate-600">Tujuan:</span>
            <p className={`mt-1 italic ${isAlert ? "text-red-700" : "text-emerald-700"}`}>
              {comparison.proofPurpose}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-2">
            <span className="text-slate-600">Tingkat Kecocokan:</span>
            <span className={`font-semibold ${isAlert ? "text-red-600" : "text-emerald-700"}`}>
              {comparison.matchLevel}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`flex items-start gap-2 rounded-2xl p-4 text-sm font-medium sm:text-base ${
          isAlert
            ? "bg-red-100 text-red-600"
            : "bg-emerald-100 text-emerald-700"
        }`}
      >
        {isAlert ? <AlertTriangle size={19} className="mt-0.5 shrink-0" /> : <CheckCircle2 size={19} className="mt-0.5 shrink-0" />}
        <span>
          {isAlert
            ? "Data tidak sesuai - Perlu investigasi"
            : "Data sesuai dengan rencana transaksi"}
        </span>
      </div>
    </div>
  );
}

function TransactionCard({ item }) {
  const [showComparison, setShowComparison] = useState(false);
  const isAlert = item.indication;

  return (
    <article
      className={`rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-5 ${
        isAlert
          ? "border-rose-300 shadow-rose-100"
          : "border-emerald-300 shadow-emerald-100"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className={isAlert ? "h-2 w-2 rounded-full bg-rose-500" : "h-2 w-2 rounded-full bg-emerald-500"} />
          <h3 className="font-semibold text-slate-900">{item.id}</h3>
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
            <Link2 size={12} />
            {item.planId}
          </span>
        </div>

        {isAlert && <AlertTriangle size={18} className="shrink-0 text-rose-500" />}
      </div>

      {isAlert && (
        <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-600">
          <div className="flex gap-2">
            <AlertTriangle size={19} className="mt-0.5 shrink-0" />
            <div>
              <h4 className="font-semibold">Indikasi Kecurangan Terdeteksi</h4>
              <p className="mt-1 text-sm leading-6">
                Data bukti tidak sesuai dengan rencana transaksi.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-600">
          {item.status}
        </span>
        <span className="text-sm text-slate-500">{item.date}</span>
      </div>

      <h4 className="mt-4 text-base font-medium leading-6 text-slate-900">
        {item.title}
      </h4>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="font-semibold text-blue-600">{item.amount}</p>
        <span className="rounded-xl bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
          {item.category}
        </span>
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

function PlanCard({ item }) {
  return (
    <article className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm shadow-amber-100 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900">{item.id}</h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-700">
          <Clock3 size={15} />
          {item.status}
        </span>
      </div>

      <h4 className="mt-5 text-base font-medium leading-7 text-slate-900">
        {item.title}
      </h4>

      <p className="mt-4 flex items-center gap-2 text-lg font-semibold text-blue-600">
        <Wallet size={20} />
        {item.amount}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-slate-100 py-4 text-sm text-slate-500">
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

export default function BUMDesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("history");
  const [search, setSearch] = useState("");

  const bumdes = bumdesDetails.find((item) => item.id === id) ?? bumdesDetails[0];

  const filteredTransactions = useMemo(() => {
    const keyword = search.toLowerCase();
    return bumdes.transactions.filter((item) =>
      [item.id, item.planId, item.title, item.category, item.creator]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [bumdes.transactions, search]);

  const filteredPlans = useMemo(() => {
    const keyword = search.toLowerCase();
    return bumdes.plans.filter((item) =>
      [item.id, item.title, item.category, item.creator]
        .join(" ")
        .toLowerCase()
        .includes(keyword),
    );
  }, [bumdes.plans, search]);

  const indicationCount = bumdes.transactions.filter((item) => item.indication).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
            aria-label="Kembali"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
              {bumdes.name}
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">Laporan Transaksi</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white shadow-xl shadow-blue-600/20">
              <p className="text-sm text-blue-100">BUMDes terpilih</p>
              <h2 className="mt-2 text-2xl font-bold leading-tight">{bumdes.name}</h2>
              <p className="mt-2 text-sm text-blue-50">{bumdes.village}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
              <StatCard icon={Clock3} value={bumdes.plans.length} label="Menunggu" variant="pending" />
              <StatCard icon={CheckCircle2} value={bumdes.transactions.length} label="Selesai" variant="done" />
              <StatCard icon={AlertTriangle} value={indicationCount} label="Indikasi" variant="alert" />
            </div>
          </aside>

          <div className="space-y-5">
            <div className="flex gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
              <TabButton
                active={activeTab === "history"}
                icon={FileText}
                onClick={() => setActiveTab("history")}
              >
                Riwayat Transaksi
              </TabButton>
              <TabButton
                active={activeTab === "plans"}
                icon={CalendarDays}
                onClick={() => setActiveTab("plans")}
              >
                Rencana Transaksi
              </TabButton>
            </div>

            <SearchBar value={search} onChange={setSearch} />

            {activeTab === "history" ? (
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900">Rencana Selesai</h2>
                  <span className="text-sm text-slate-500">{filteredTransactions.length} data</span>
                </div>

                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {filteredTransactions.map((item) => (
                    <TransactionCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ) : (
              <section>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900">Menunggu Eksekusi</h2>
                  <span className="text-sm text-slate-500">{filteredPlans.length} data</span>
                </div>

                <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                  {filteredPlans.map((item) => (
                    <PlanCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}

            <Link
              to="/pilih-bumdes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Pilih BUMDes lain
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
