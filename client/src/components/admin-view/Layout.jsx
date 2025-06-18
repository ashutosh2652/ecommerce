import { Outlet } from "react-router-dom";
import AdminSidebar from "./Sidebar";
import AdminHeader from "./Header";
import { useState } from "react";

function AdminLayout() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="min-h-screen w-full flex flex-1 ">
      {/* Admin Sidebar */}
      <AdminSidebar open={openSideBar} setOpen={setOpenSideBar} />
      <div className="flex flex-col flex-1">
        {/* Admin Header */}
        <AdminHeader setOpen={setOpenSideBar} />
        <main className="flex flex-1 flex-col bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;
