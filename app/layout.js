import { Inter } from "next/font/google";
import "../Component/scss/Main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbars from "../Component/pages/Navbars";

import Footer from "../Component/pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Ai Green Bubble",
  description: "Ai Green Bubble  we are at the forefront of revolutionary business operations driving the evolution of blockchain technology Web3 solutions and Islamic Fintech decentralized applications",
  openGraph: {
    images: [
      "https://bafybeifjskb7y66xamk47ewaal2acosamifyjx46ljbytgysefhumzj3wm.ipfs.nftstorage.link/",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbars />
        <div className="min-h-90vh">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
