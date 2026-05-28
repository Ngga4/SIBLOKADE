import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PilihBUMDes from "./pages/PilihBUMDes";
import BUMDesDetail from "./pages/BUMDesDetail";
import LoginPetugas from "./pages/LoginPetugas";
import DashboardPetugas from "./pages/DashboardPetugas"
import RencanaTransaksiPetugas from "./pages/RencanaTransaksiPetugas";
import EksekusiTransaksi from "./pages/EksekusiTransaksi";
import BuatRencanaTransaksiPetugas from "./pages/BuatRencanaTransaksiPetugas";
import RiwayatTransaksiPetugas from "./pages/RiwayatTransaksiPetugas";
import GenerateLaporanPetugas from "./pages/GenerateLaporanPetugas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path= 'login-petugas' element={<LoginPetugas />} />
        <Route path="/pilih-bumdes" element={<PilihBUMDes />} />
        <Route path="/bumdes/:id" element={<BUMDesDetail />} />
        <Route path="/dashboard-petugas" element={<DashboardPetugas />} />
        <Route path="/dashboard-petugas/petugas/rencana-transaksi/:planId" element={<DashboardPetugas />} />
        <Route path="/petugas/rencana-transaksi" element={<RencanaTransaksiPetugas />} />
        <Route path="/petugas/eksekusi-transaksi/:planId" element={<EksekusiTransaksi />}
        />
        <Route path="/petugas/buat-rencana-transaksi" element={<BuatRencanaTransaksiPetugas />}
        />
        <Route
          path="/petugas/riwayat-transaksi"
          element={<RiwayatTransaksiPetugas />}
        />
        <Route
          path="/petugas/generate-laporan"
          element={<GenerateLaporanPetugas />}
        />
       </Routes>

    </BrowserRouter>
  );
}

export default App;