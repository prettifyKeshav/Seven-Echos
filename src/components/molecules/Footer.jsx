import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bottom-sec">
          <div className="container">
            <div className="grid-box">

              <div className="grid-box-item">
                <figure>
                  <Image src="/assets/logo.svg" width={108} height={107} alt="footer logo"></Image>
                </figure>
                <p>Seven Echoes is a luxury villa/ flat short term rental management offering distinctive, elegant, and memorable guest experiences.</p>
              </div>

              <div className="grid-box-item">

                <div className="col-md">
                  <h6>COMPANY</h6>
                  <ul>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/">Legal Information</Link></li>
                    <li><Link href="/">Contact Us</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                  </ul>
                </div>

                <div className="col-md">
                  <h6>HELP CENTER</h6>
                  <ul>
                    <li><Link href="/">Find a Property</Link></li>
                    <li><Link href="/">How To Host?</Link></li>
                    <li><Link href="/">Why Us?</Link></li>
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/">Rental Guides</Link></li>
                  </ul>
                </div>

                <div className="col-md">
                  <h6>CONTACT INFO</h6>
                  <ul>
                    <li><Link href="tel:1234567890">Phone: 1234567890</Link></li>
                    <li><Link href="mailto:company@email.com">Email: company@email.com</Link></li>
                    <li><Link href="/">Location: 100 Smart Street, Goa</Link></li>
                  </ul>

                  <div className="social-icons">
                    <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#173254" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg>
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                    </Link>
                    <Link href="https://in.linkedin.com/company/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="flex-box">
            <p>© 2025 @Seven Echos | All rights raserved</p>
          </div>

          <ul>
            <p>Made by prettify creative</p>
          </ul>
        </div>

      </footer>
    </>
  );
};

export default Footer;