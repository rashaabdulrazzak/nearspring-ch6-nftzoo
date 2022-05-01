import BN from "bn.js";
const gas = new BN("300000000000000");
const attachedDeposit = new BN("3000000000000000000000000");
let randNum = Math.floor(Math.random() * 100000000 + 1);
export function nft_mint(name, title, description, media) {
  return window.contract.nft_mint(
    {
      token_id: `${name}-${randNum}-nft-Zoo`,
      metadata: {
        title,
        description,
        media,
      },
      receiver_id: name,
    },
    gas,
    attachedDeposit
  );
}
export function nft_tokens_for_owner(name) {
  return window.contract.nft_tokens_for_owner({ account_id: name });
}
