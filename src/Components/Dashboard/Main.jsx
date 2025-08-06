import { Outlet } from "react-router-dom";
import SideDrawer from "./Components/SideDrawer";

function Main() {
  return (
    <div className="flex h-screen bg-gray-900">
      <SideDrawer />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
