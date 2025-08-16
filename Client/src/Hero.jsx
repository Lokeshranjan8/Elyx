import Auth from "./Auth";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 py-24 flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg">Welcome to Elyx Proj</h2>
      <p className="text-xl text-gray-700 mb-10 max-w-xl text-center">A modern UI website powered by React and Tailwind CSS. Experience fast development and beautiful design.</p>
      <div className="mt-6">
        <Auth />
      </div>
    </section>
  );
}


export default Hero;
