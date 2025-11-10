import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="section-padding bg-dark-bg">
      <div className="container mx-auto">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-[360px_auto_auto_auto_auto] justify-content-between items-start gap-5">
          {/* <!-- column-1  --> */}
          <div>
            <div>
              <Image
                src="/logo/logo-white.svg"
                alt="logo"
                width={160}
                height={40}
                className="w-fit h-10"
              />
            </div>
            <h4 className="text-2xl leading-[140%] text-primary-text-dark my-8">
              Chattogram, Bangladesh
            </h4>
            <p className="leading-[140%] flex justify-start items-center gap-2.5 mb-4">
              <Image
                src="/icons/phone-in-talk.svg"
                alt="icon"
                width={16}
                height={16}
              />
              <span className="text-secondary-text-dark"> +8801834255112</span>
            </p>
            <p className="text-secondary-text-dark leading-[140%] flex justify-start items-center gap-2.5">
              <Image src="/icons/mail.svg" alt="icon" width={16} height={16} />
              <span className="text-secondary-text-dark">
                {" "}
                info@nexrover.com
              </span>
            </p>
          </div>
          {/* <!-- column-2 --> */}
          <div>
            <h5 className="footer-col-title">Company</h5>
            <ul className="footer-col-link">
              <li className="text-secondary-text-dark text-sm hover:underline">
                <a href="#">How we work</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">About us</a>
              </li>
              {/* <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Success Stories</a>
              </li> */}
              {/* <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Blog</a>
              </li> */}
            </ul>
          </div>
          {/* <!-- column-3 --> */}
          <div>
            <h5 className="footer-col-title">Engagement Models</h5>
            <ul className="footer-col-link">
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Dedicated Development Team</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Product Strategy and Design</a>
              </li>
            </ul>
          </div>
          {/* <!-- column-4 --> */}
          <div>
            <h5 className="footer-col-title">Services</h5>
            <ul className="footer-col-link">
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">SaaS App Development</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Mobile App Development</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Web App Development</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Custom Software</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">MVP Development</a>
              </li>
            </ul>
          </div>
          {/* <!-- column-5 --> */}
          <div>
            <h5 className="footer-col-title">Technologies</h5>
            <ul className="footer-col-link">
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Laravel</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Next.js</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">React</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">Flutter</a>
              </li>
              <li className="text-sm text-secondary-text-dark hover:underline">
                <a href="#">React Native</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-sm text-secondary-text-dark mt-8 pt-6 border-t border-border">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
