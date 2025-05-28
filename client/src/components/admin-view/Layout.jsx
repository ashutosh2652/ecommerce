import { Outlet } from "react-router-dom";
import AdminSidebar from "./Sidebar";
import AdminHeader from "./Header";

function AdminLayout() {
  return (
    <div className="min-h-screen w-full flex flex-1 ">
      {/* Admin Sidebar */}
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        {/* Admin Header */}
        <AdminHeader />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default AdminLayout;
