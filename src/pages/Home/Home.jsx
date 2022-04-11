import React, { useContext } from "react";
// import { connect } from "react-redux";

// * components
// import { Nav } from "components/Nav";

// * contexts
import { FirebaseContext } from "features/firebase/firebase.context";

// * MUI
import { Button } from "@mui/material";

export const Home = () => {
  const login = useContext(FirebaseContext);

  return (
    <>
      {/* <Nav /> */}
      <Button onClick={login}>Login</Button>
    </>
  );
};

// const mapStateToProps = (state) => ({state});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
