function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-600 text-white sticky top-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Elyx Proj</h1>
        <nav>
          <ul className="flex gap-8 text-lg">
            <li><a href="#" className="hover:text-blue-200 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-200 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-200 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
