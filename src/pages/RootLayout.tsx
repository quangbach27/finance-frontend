import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="text-dark-100">
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
