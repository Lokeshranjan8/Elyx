
import { useState } from "react";
import Authform from "./Auth";

function Header() {
  const [showAuth, setShowAuth] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
  <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100 sticky top-0 shadow-lg z-50 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-8">
    <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg ml-0 text-gray-100">Elyx Project</h1>
          <nav>
            <ul className="flex gap-10 text-lg">
              <li><a href="#" className="hover:text-gray-300 transition font-semibold">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition font-semibold">About</a></li>
              <li>
                <button
                  className="hover:text-gray-300 transition font-semibold bg-transparent border-none outline-none"
                  onClick={() => setShowAuth(true)}
                >SignUp</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showAuth && (
        <Authform
          onClose={() => setShowAuth(false)}
          setSuccessMessage={setSuccessMessage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {successMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-700 text-gray-100 px-6 py-2 rounded-xl shadow-lg z-50">
          {successMessage}
        </div>
      )}
    </>
  );
}

export default Header;
