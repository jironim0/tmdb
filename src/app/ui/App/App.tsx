import { useAppSelector } from "@/app/model/hooks/stateHooks";
import { Header } from "@/widgets/header/ui/Header";
import { useEffect } from "react";
import { AppRouter } from "./AppRouter";
import s from "./App.module.css";
import { Footer } from "@/widgets/footer";
import { Toaster } from "react-hot-toast";

// Оптимизация ререндера, React подписан под useAppSelector который меняет state из-за этого вызывается re-render всех компонент приложения
const ThemeManager = () => {
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
};

function App() {
  return (
    <div className={s.layout}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <ThemeManager />
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
