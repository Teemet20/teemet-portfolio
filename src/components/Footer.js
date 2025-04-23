import config from "../config/config";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;