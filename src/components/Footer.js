import config from "../config/config";

const Footer = () => {
  return (
    <footer className={`bg-gradient-to-r from-${config.theme.primaryColor} to-${config.theme.secondaryColor} text-white py-4 text-center`}>
      <p className="font-orbitron">© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;