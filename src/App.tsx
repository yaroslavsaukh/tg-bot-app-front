import { useEffect } from "react";

    // @ts-ignore
const tg = window?.Telegram.WebApp;

function App() {
  const onClose = () => tg.close();

  useEffect(() => {
    tg.ready();
    localStorage.setItem('text', 'local storage data')
    tg.sendData({val: 'data for bot'})
  },[])

  return (
    <div className="App">
      <div>
        Hello, {tg.initDataUnsafe?.user?.first_name}{' '}
        {tg.initDataUnsafe?.user?.last_name}
      </div>
      <div>
        Your username: {tg.initDataUnsafe?.user?.username}
      </div>
      <div>
       <img src={tg.initDataUnsafe?.user?.photo_url} alt='user'/>
       {tg.initDataUnsafe?.user?.photo_url}
      </div>
      <span>{localStorage.getItem('text')}</span>
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default App;
