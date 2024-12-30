import { onMessage } from "firebase/messaging";
import { useEffect } from "react";
import "./App.css";
import { generateToken, messaging } from "./firbase/firebase";

function App() {


  useEffect(() => {
    navigator.serviceWorker.ready.then(()=>{
      generateToken()
      onMessage(messaging, (payload) => {
         console.log({ payload });
       });
    })
   
 
  }, []);

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
