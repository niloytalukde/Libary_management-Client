import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
//import logoPic from "@/assets/logo.png"; // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 transition-colors duration-500">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3">
            
               
              <h2 className="text-3xl font-bold text-orange-400">BookCafe</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Discover books, fuel your curiosity, and empower your mind with knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/books" className="hover:text-orange-400 transition-colors">Books</a></li>
              <li><a href="/blogs" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <div className="flex gap-3 mt-2">
              <a href="#" className="bg-gray-800 hover:bg-orange-400 transition p-3 rounded-full text-white text-sm"><FaFacebookF /></a>
              <a href="#" className="bg-gray-800 hover:bg-orange-400 transition p-3 rounded-full text-white text-sm"><FaTwitter /></a>
              <a href="#" className="bg-gray-800 hover:bg-orange-400 transition p-3 rounded-full text-white text-sm"><FaLinkedinIn /></a>
              <a href="#" className="bg-gray-800 hover:bg-orange-400 transition p-3 rounded-full text-white text-sm"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-orange-400 font-semibold">BookBase</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
