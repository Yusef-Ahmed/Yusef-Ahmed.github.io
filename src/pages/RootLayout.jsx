import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.load("1em Geist").then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return;
  }

  return (
    <main className="container mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default RootLayout;
