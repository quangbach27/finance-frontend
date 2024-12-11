import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="bg-dark-200">
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default ProtectedLayout;
