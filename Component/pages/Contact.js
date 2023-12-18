import React from "react";

function Contact() {
  return (
    <div>
      <div className="container-kws">
        <div className="m-q-a-w-75 d-b m-a">
          <div className="f-s-2 f-w-600 t-a-c g_c m-b-2">Contact</div>
          <div className="">
            <img src="/Pic4.png" className="b-r-10" alt="" />
          </div>
          <div className="m-y-3">
            <div className="f-s-1_25 f-w-600 g_c m-b-1">Address :</div>
            <div className="max-w-15">
              Office Suite, Level 18, UOA Central, Jalan Pinang, 50450, Kuala
              Lumpur, Wilayah Persekutuan
            </div>
          </div>
          <div className="m-y-3">
            <div className="f-s-1_25 f-w-600 g_c m-b-1">Email :</div>
            <div className="">info@aigb.io</div>
          </div>
          <div className="m-y-3">
            <div className="f-s-1_25 f-w-600 g_c m-b-1">Inquiry box :</div>
            <div className="m-b-5">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-100 bg_gray b-n "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
