
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-300 py-5 text-center shadow-lg w-full fixed bottom-0 left-0 flex items-center justify-center backdrop-blur-lg border-t border-gray-700">
      <span className="text-base font-semibold drop-shadow">&copy; {new Date().getFullYear()} Elyx Project. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
