import React from 'react'
import Service from '../../Component/pages/Service'

export const metadata = {
    title: "Service | Welcome to Ai Green Bubble",
    description: "Ai Green Bubble  we are at the forefront of revolutionary business operations driving the evolution of blockchain technology Web3 solutions and Islamic Fintech decentralized applications",
    openGraph: {
      images: [
        "https://bafybeiakakrxwdxfinrm44hroirafmubz3xwlekcdm5v7pyxbvocqibpfy.ipfs.nftstorage.link/",
      ],
    },
  };

function page() {
  return (
    <div>
      <Service />
    </div>
  )
}

export default page
