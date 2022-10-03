// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const tokenId = req.query.tokenId;
  
  const name = `Crypto Mania #${tokenId}`;
  const description = "Crypto Mania is NFT collection to Onboard web2 people to web3";
  const image = `https://raw.githubusercontent.com/smartychuks/debugNFT/master/hardhat-tutorial/my-app/public/cryptomania/${Number(tokenId) - 1}.svg`;

  return res.json({
    name: name,
    description: description,
    image: image,
  });
}
