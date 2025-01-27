import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { useEffect } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>

    </div>
  );
};

export default App;
