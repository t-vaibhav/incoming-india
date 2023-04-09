import { React, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c719qfc",
        "template_5l6fezz",
        form.current,
        "v0txexV6zNsPVbDmP"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <footer className="footer w-full p-10 font-semibold  bg-[#000] text-[#b9b4b4]">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
        </div>
        <div>
          <span className="footer-title text-[#ffffff]">Destinations</span>
          <a className="link link-hover">India</a>
          <a className="link link-hover">Bhutan</a>
          <a className="link link-hover">Nepal</a>
          <a className="link link-hover">Sri Lanka</a>
          <a className="link link-hover">Maldive</a>
        </div>
        <div>
          <span className="footer-title text-[#ffffff]">Quick Links</span>
          <a className="link link-hover">Home</a>
          {/* <a className="link link-hover">Destinations</a> */}
          <a className="link link-hover">Experiences</a>
          <a className="link link-hover">Presence</a>
          <a className="link link-hover">Insights</a>
        </div>
        {/* <form ref={form} onSubmit={sendEmail}>
          <span className="footer-title text-[#ffffff]">Contact Us</span>
          <input
            type="text"
            className="w-[200px] px-2 h-6 bg-[#fff] rounded-sm placeholder-gray-800 text-gray-900"
            placeholder="Name"
            name="user_name"
          />
          <input
            type="email"
            className="w-[200px] px-2 h-6 bg-[#fff] rounded-sm placeholder-gray-800 text-gray-900"
            placeholder="E-Mail Id"
            name="user_email"
          />
          <textarea
            name="message"
            className="w-[200px] px-2 py-1 h-10 bg-[#fff] rounded-sm placeholder-gray-900 text-gray-900 max-h-[60px]"
            placeholder="Query"
          />
          <input
            type="submit"
            value="Send"
            className="bg-slate-700 hover:bg-slate-800 hover:text-white px-2 py-1 rounded-lg hover:cursor-pointer"
          />
        </form> */}
        <div>
          <span className="footer-title text-[#ffffff] ">Address</span>
          <p className="w-[300px]">
            DSM-439, 4th Floor, DLF Towers, Shivaji Marg, New Delhi - 110015 (India)
          </p>
          <span className="footer-title text-[#ffffff] mt-3 mb-1 ">Email</span>

          {/* <p>+91 9891242028</p> */}
          {/* <p>+91 11 40196111/222/333</p> */}
          <p>info@incomingindia.co.in</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
