function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 py-24 flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg">Welcome to Elyx Proj</h2>
      <p className="text-xl text-gray-700 mb-10 max-w-xl text-center">A modern UI website powered by React and Tailwind CSS. Experience fast development and beautiful design.</p>
      <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition text-lg font-semibold">Get Started</a>
    </section>
  );
}

export default Hero;
