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
            <br />
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.780025457239!2d101.70947747464868!3d3.15263009682277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d49996dfa7%3A0xce2572dd60fef422!2sWisma%20UOA%20Centre%20KLCC!5e0!3m2!1sen!2sin!4v1702961588126!5m2!1sen!2sin"
                width="600"
                height="450"
                className="w-100"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </div>
          </div>
          <div className="m-y-3">
            <div className="f-s-1_25 f-w-600 g_c m-b-1">Email :</div>
            <div className="">
              <a href="mailto:info@aigb.io">info@aigb.io</a>
            </div>
          </div>
          <div className="m-y-3">
            <div className="f-s-1_25 f-w-600 g_c m-b-1">Call us at :</div>
            <div className="m-b-5">
              <div className="">
                <a href="tel:+60397792326">+60 3 9779 2326</a>
              </div>
              {/* <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-100 bg_gray b-n "
              ></textarea> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
