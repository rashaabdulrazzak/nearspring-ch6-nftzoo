import React from "react";

import { login, logout } from "./utils/near";

import Cover from "./Components/Cover";
import coverImg from "./assets/img/5508687.jpg";
import Animals from "./Components/Animals";
import "./App.css";

const App = () => {
  const account = window.walletConnection.account();

  return (
    <>
      {account.accountId ? (
        <div className="container ">
          <div>
            <h1 style={{ marginBottom: "25px" }}>
              hello {account.accountId} !
            </h1>
            <button onClick={logout}> logout </button>
          </div>

          <Animals logout={logout} accountId={account.accountId} />
        </div>
      ) : (
        <Cover
          name="Let's help them and Mint Your NFT"
          login={login}
          coverImg={coverImg}
        />
      )}
    </>
  );
};

export default App;
