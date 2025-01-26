import Header from "./Header";

function HelloSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50 md:brightness-75"
        src="/İmages/bg-video4.mp4"
        autoPlay
        loop
        muted
      ></video>
      
      {/* Header */}
     
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12">
        {/* Welcome Badge */}
        <div className="mb-4 md:mb-6">
          <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white shadow-lg transition">
            <span className="text-lg mr-2 animate-wave">👋</span>
            <span className="text-sm md:text-base font-medium">TGL Elektriğe Hoş Geldiniz</span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="max-w-4xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Elektrik tesisatı ve tamiri konusunda{" "}
            <span className="block md:inline">
              <span className="text-blue-400">deneyimli</span> &{" "}
              <span className="text-blue-400">güvenilir</span>
            </span>{" "}
            bir hizmet sunuyoruz.
          </h1>
        </div>
        <div className="md:hidden pt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl">
            <a href="https://wa.me/+905510466110">Whatsapp</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelloSection;