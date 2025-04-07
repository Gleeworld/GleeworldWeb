import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#ff9933] text-[#fff] py-10">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-bold mb-3">Need Help?</h2>
            <p className="text-sm">Call or WhatsApp: <span className="font-semibold">08035787654</span></p>
            <p className="text-sm">Email: <a href="mailto:hello@gleeworld.com.ng" className="underline">hello@gleeworld.com.ng</a></p>
            <p className="text-sm">
              Address: Centigrade Mall, 7, Fola Osibo, Lekki Phase 1, Lagos, Nigeria.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GleeworldCares/" className="hover:opacity-75">
                <Image src="/ic_sharp-facebook.png" alt="Facebook" width={30} height={30} />
              </a>
              <a href="https://www.twitter.com/GleeworldCares/" className="hover:opacity-75">
                <Image src="/ri_twitter-x-line.png" alt="Twitter" width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/GleeworldCares/" className="hover:opacity-75">
                <Image src="/ri_instagram-fill.png" alt="Instagram" width={30} height={30} />
              </a>
              <a href="https://www.linkedin.com/company/gleeworld-pharmacy/" className="hover:opacity-75">
                <Image src="/formkit_linkedin.png" alt="linkedIn" width={30} height={30} />
              </a>

            </div>
          </div>

          {/* MedFinder App Download */}
          <div>
            <h2 className="text-lg font-bold mb-3">Download the MedFinder App</h2>
            <a href="#">
              <Image src="/GooglePlay.png" alt="Google Play" width={150} height={45} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Gleeworld Pharmacy. All rights reserved.</p>
          <p>
            <a href="#" className="underline">Terms of Service</a> |{" "}
            <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
