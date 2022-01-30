import { useState } from "react";
import {
  googleAuthentication,
  useAuth,
  handleSignOut,
} from "./Firebase/firebase.js";
import "./app.css";
import { FcGoogle } from "react-icons/fc";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAuth();

  const handleGoogleClick = async () => {
    setIsLoading(true);
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
        {!isLoading ? (
          <div class="center">
            {!currentUser?.email ? (
              <button onClick={handleGoogleClick}>
                Sign In with{" "}
                <strong style={{ paddingLeft: "3px" }}>Google</strong>{" "}
                <FcGoogle />
              </button>
            ) : (
              <button onClick={signOut}>Çıkış yap</button>
            )}
          </div>
        ) : (
          <div className="center loading">
            <p>Google'a yönlendirildiniz..</p>
          </div>
        )}
      </>
    </div>
  );
};

export default App;
