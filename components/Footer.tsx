"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-white text-sm" style={{ backgroundImage: 'url(/your-image-path.jpg)' }}>
      <div className="bg-black/70 py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-3">Zussioberry</h2>
            <p className="leading-relaxed">
              Zussioberry brings you the finest range of natural juices, milkshakes,
              and more — made fresh with love and quality ingredients. Taste the
              difference in every sip!
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Working Hours</h3>
            <ul className="space-y-1">
              <li>Mon: 00:00AM To 00:00PM</li>
              <li>Tue: 00:00AM To 00:00PM</li>
              <li>Wed: 00:00AM To 00:00PM</li>
              <li>Thur: 00:00AM To 00:00PM</li>
              <li>Fri: 00:00AM To 00:00PM</li>
              <li>Sat: 00:00AM To 00:00PM</li>
              <li className="text-green-400">Sun: Closed</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Our Team</Link></li>
              <li><Link href="#">Franchise</Link></li>
              <li><Link href="#">Career</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <p className="mb-1">Address:</p>
            <p className="mb-1">Phone No.: +91 XXXXX XXXXX</p>
            <p>+91 XXXXX XXXXX</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="border p-2 rounded-full hover:bg-green-500">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="border p-2 rounded-full hover:bg-green-500">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="border p-2 rounded-full hover:bg-green-500">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-4 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <p>© Copyrights Zussioberry 2025. All Rights Reserved
          </p>
          <p className="mt-2 md:mt-0">
            Terms &amp; Condition | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
