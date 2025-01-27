import "./App.css";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
};

export default App;
