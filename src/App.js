import { useState } from "react";
import {
  googleAuthentication,
  useAuth,
  handleSignOut,
} from "./Firebase/firebase.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAuth();

  const handleGoogleClick = async () => {
    setIsLoading(true);
    console.log(isLoading);
    try {
      await googleAuthentication();
    } catch {}
    setIsLoading(false);
  };

  const signOut = () => {
    handleSignOut();
  };

  return (
    <div className="App">
      <>
        {isLoading ? "yönlendirildi" : "döndü"}
        {!currentUser?.email ? (
          <button onClick={handleGoogleClick}>Google</button>
        ) : (
          <button onClick={signOut}>Çıkış yap</button>
        )}
      </>
    </div>
  );
};

export default App;
