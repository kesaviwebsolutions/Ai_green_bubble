// "use client";

import { Button, Dropdown, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Tooltip } from "antd";
import { Rating } from "@mui/material";
import Navbar from "../component/pages/Navbar";

// export const config = { runtime: 'client' };

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container-kws m-t-7">
        <h1 className="">Welcome to My Next.js App</h1>
      </div>
    </div>
  );
}
