import { Outlet } from "react-router-dom";
import Header from "./Header";

function RootLayout() {
  return (
    <main className="container mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default RootLayout;