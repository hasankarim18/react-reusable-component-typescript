import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="">
      <h1 className="w-full py-2 text-3xl bg-rose-400 text-white text-center">
        Admin Navbar
      </h1>
      <div className="grid grid-cols-[1fr,3fr]  min-h-screen">
        <div className="bg-purple-400">Side bar</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
