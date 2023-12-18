import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg_b">
        <div className=" container-kws  c-w p-y-2">
          <div className="d-f j-c-s-b flex-wrap">
            <div className="m-b-2">
              <img src="/LOGO.png" className="w-3" alt="" />
            </div>
            <div className="m-b-2 d-f a-i-c flex-wrap">
              <div className="m-b-1 ">Home</div>
              <div className="m-b-1 m-l-2">About Us</div>
              <div className="m-b-1 m-l-2">Service</div>
              <div className="m-b-1 m-l-2">Contract</div>
            </div>
            <div className=""></div>
          </div>
          <div className="t-a-c m-b-2">
            Copyright 2023 MaalChain. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
