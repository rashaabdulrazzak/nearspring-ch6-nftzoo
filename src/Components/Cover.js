import React from "react";
import PropTypes from "prop-types";

const Cover = ({ name, login, coverImg }) => {
  if ((name, login, coverImg)) {
    return (
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h1> NEAR Spring Challenge #6</h1>
        <h4 style={{ marginTop: "30px" }}>
          Ukrainian zoos are in severe need of help now and will be in need
          after the war ends. There are no visitors in the zoos, which results
          in no budgeting.
        </h4>
        <h4 style={{ marginTop: "25px" }}>
          You need to create an NFT project which will aid in attracting funds
          that will be allocated to buy food for animals or help zoos restore
          their work after the war is over.
        </h4>
        <div
          className="d-flex justify-content-center text-center"
          style={{ marginTop: "20px" }}
        >
          <div
            className=" ratio ratio-1x1 mx-auto mb-2"
            style={{ textAlign: "center", width: "300" }}
          >
            <img src={coverImg} alt="" style={{ height: "250px" }} />
          </div>
          <h1 style={{ marginTop: "20px" }}>{name}</h1>
          <p style={{ marginTop: "10px", marginBottom: "10px" }}>
            Please connect your wallet to continue.
          </p>
          <button onClick={login} variant="outline-light">
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
