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
      "https://bafkreie7qpgrnsgl2dqfxliab3326p2ztdxq56rus4d7ksfczw7q3qh7am.ipfs.nftstorage.link/",
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
