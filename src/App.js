import React from "react";

// * components
import { Home } from "pages/Home/Home";

// * contexts
import { FirebaseContextProvider } from "features/firebase/firebase.context";

function App() {
  return (
    <>
      <FirebaseContextProvider>
        <Home />
      </FirebaseContextProvider>
    </>
  );
}

export default App;
