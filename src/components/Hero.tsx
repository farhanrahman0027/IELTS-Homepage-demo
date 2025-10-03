export default function Hero() {
  return (
    <section className="relative pt-20 pb-0 bg-gray-900 overflow-hidden min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            The world's
            <span className="block italic font-bold">most trusted</span>
            <span className="block">English test</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="bg-white text-gray-900 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center group">
              <span>IELTS for test takers</span>
              <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center group">
              <span>IELTS for your organisation</span>
              <span className="ml-2 text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
