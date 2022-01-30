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
          <div className="center">
            {!currentUser?.email ? (
              <button onClick={handleGoogleClick}>
                Sign in with{" "}
                <strong style={{ paddingLeft: "3px" }}>Google</strong>{" "}
                <FcGoogle />
              </button>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    paddingBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={currentUser.photoURL}
                    style={{
                      marginBottom: "9px",
                      width: "60px",
                      height: "60px",
                      borderRadius: "20px",
                    }}
                  />
                  {currentUser.displayName}
                </p>
                <button onClick={signOut}>Çıkış yap</button>
              </div>
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
