import React from 'react'
import Contact from '../../Component/pages/Contact'

export const metadata = {
    title: "Contact | Welcome to Ai Green Bubble",
    description: "Ai Green Bubble  we are at the forefront of revolutionary business operations driving the evolution of blockchain technology Web3 solutions and Islamic Fintech decentralized applications",
    openGraph: {
      images: [
        "https://bafybeidhw5buzq55ajcbmiul7lpqawgzs6ysa6bx67jlwx3wux34zktvte.ipfs.nftstorage.link/",
      ],
    },
  };


function page() {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default page
