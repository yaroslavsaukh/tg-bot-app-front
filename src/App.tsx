import { useEffect } from "react";

    // @ts-ignore
const tg = window?.Telegram.WebApp;

function App() {
  const onClose = () => tg.close();

  useEffect(() => {
    tg.ready();
  },[])

  return (
    <div className="App">
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
