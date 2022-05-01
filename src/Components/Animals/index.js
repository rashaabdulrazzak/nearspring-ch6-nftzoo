import React, { useEffect, useState } from "react";
import { nft_mint, nft_tokens_for_owner } from "../../utils/nftMint";
import "./Animal.css";
const { providers } = require("near-api-js");
const provider = new providers.JsonRpcProvider(
  "https://archival-rpc.testnet.near.org"
);
const animals = [
  {
    name: "Raccoon",
    title: "Feed Raccoon",
    description: "Help the Raccoon to Survive",
    media:
      "https://bafybeih24ll5x67hmottlksvjglbr5ybxp37cx3t6vlp2vyytsn5ehd2ie.ipfs.dweb.link/",
  },
  {
    name: "Bear",
    title: "Feed Bear",
    description: "Help the Bear to Survive",
    media:
      "https://bafybeidiu56l44kszq3uyshm3o74e23vn4si2ytehwxbrtff3kwut23ple.ipfs.dweb.link/",
  },
  {
    name: "Monkey",
    title: "Feed Monkey",
    description: "Help the Monkey to Survive",
    media:
      "https://bafybeifs6jwdlpkka4f36sdweipux7z5w5dpefp3fgehdcgvzbpkhnhyki.ipfs.dweb.link/",
  },
  {
    name: "Elephant",
    title: "Feed Elephant",
    description: "Help the Elephant to Survive",
    media:
      "https://bafybeib7343od7lhlzel3xunmqo67v7qa42edtijkofm46jofpnak7w2sy.ipfs.dweb.link/",
  },
  {
    name: "Dog",
    title: "Feed Dog",
    description: "Help the Dog to Survive",
    media:
      "https://bafybeifc2ozavqtzepx5dolxor4xdzfreho6opqitv6vdgd2hwzn4f54ru.ipfs.dweb.link/",
  },
  {
    name: "Lion",
    title: "Feed Lion",
    description: "Help the Lion to Survive",
    media:
      "https://bafybeicnujgoykipu67liqtyw5lkos2pkfymyfccjctwcb6b2xkywkxfay.ipfs.dweb.link/",
  },
];
const Animals = ({ accountId, logout }) => {
  const [nftMint, setNftMnt] = useState(false);

  async function mintandFeed(name, title, description, media) {
    const result = await nft_mint(name, title, description, media);
    console.log({ result });
  }
  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const transactionHashes = urlParams.get("transactionHashes");
  //   console.log(transactionHashes);

  //   async function getState(txHash, accountId) {
  //     const result = await provider.txStatus(txHash, accountId);
  //     console.log("Result: ", result);
  //     if (result) {
  //       setNftMnt(true);
  //     }
  //   }
  //   getState(transactionHashes, accountId);
  // }, []);
  return (
    <div>
      {nftMint ? (
        <h2 className="main-head">
          Thanks for your generousity &#129505; <br /> Let's help other animal{" "}
        </h2>
      ) : (
        <h2 className="main-head">Animals in Need</h2>
      )}

      <ul class="cards">
        {animals.map((animal, index) => (
          <li key={index}>
            <a href="#" class="card">
              <img src={animal.media} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img class="card__thumb" src={animal.media} alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">{animal.name}</h3>
                    <span class="card__status">{animal.description}</span>
                    <button
                      class="card__button"
                      onClick={() =>
                        mintandFeed(
                          accountId,
                          animal.title,
                          animal.description,
                          animal.media
                        )
                      }
                    >
                      {" "}
                      Mint & Feed Me{" "}
                    </button>
                  </div>
                </div>
                <p class="card__description">
                  When you mint your nft, the donation with 3 Near will sent to
                  feed the Animal
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p
        style={{ margin: "30px", color: "#000" }}
        className={`{nftMint? "":hidden}`}
      >
        <a href={"https://wallet.testnet.near.org/"}>
          Always, you can check your NFTs from your wallet in the collectibles
          tab!
        </a>
      </p>
    </div>
  );
};
export default Animals;
