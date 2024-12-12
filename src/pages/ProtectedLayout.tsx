import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="bg-dark-200">
      <Header />

      {/* Main content */}
      <main className="flex gap-4 p-6">
        <Sidebar />
        <div className="flex-1">
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default ProtectedLayout;
