import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Glowing orbs background */}
      <div className="absolute inset-0 z-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute left-[-100px] top-[100px] rounded-full blur-[150px] bg-custom-blue opacity-50"></div>
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] absolute right-[-150px] top-[0px] rounded-full blur-[200px] bg-custom-orange opacity-40"></div>
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute left-[20%] top-[400px] rounded-full blur-[150px] bg-custom-purple opacity-50"></div>
      </div>

      <div className="relative z-10 w-full">
        <Container className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-white md:text-7xl lg:text-[80px] font-nunito max-w-4xl">
            We Build Scalable Software Solutions 🚀
          </h1>
          <p className="py-8 text-lg leading-normal text-gray-300 md:text-xl lg:text-2xl font-inter max-w-2xl">
            From napkin sketch to launch-ready product. We design and build AI & MVPs that don&apos;t just demo well, but scale into full-fledged businesses.
          </p>

          <div className="flex flex-col items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-4">
            <a
              href="mailto:info@cypherridge.com"
              className="px-8 py-4 text-lg font-bold text-center text-white bg-custom-dark-red border border-custom-red rounded-full hover:bg-custom-red transition-all shadow-[0_0_20px_rgba(255,65,39,0.3)] hover:shadow-[0_0_30px_rgba(255,65,39,0.5)] font-nunito tracking-wide">
              Start Your Project
            </a>
          </div>
          
          {/* Stats section */}
          <div className="w-full mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-nunito">50+</h2>
              <p className="text-gray-400 font-inter text-sm md:text-base mt-2 uppercase tracking-widest text-center">Projects Delivered</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-nunito">100K+</h2>
              <p className="text-gray-400 font-inter text-sm md:text-base mt-2 uppercase tracking-widest text-center">Users Impacted</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-nunito">10+</h2>
              <p className="text-gray-400 font-inter text-sm md:text-base mt-2 uppercase tracking-widest text-center">Founders Empowered</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-nunito">Top 1%</h2>
              <p className="text-gray-400 font-inter text-sm md:text-base mt-2 uppercase tracking-widest text-center">Engineering Talent</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
