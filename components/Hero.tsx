import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Fort AI Agency Logo */}
        <div className="mb-8">
          <Image
            src="/fort-ai-agency-logo-wide-truly-transparent.png"
            alt="Fort AI Agency"
            width={400}
            height={100}
            className="mx-auto"
            priority
          />
        </div>
        
        {/* "We Are The Future" Graphic */}
        <div className="mb-8">
          <Image
            src="/we-are-future.svg"
            alt="We Are The Future"
            width={800}
            height={300}
            className="mx-auto"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            1-Shot Platform Creation
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
          This website was created with a <span className="font-bold text-cyan-400">single prompt</span> including OpenAI graphics, GitHub repository, Vercel deployment, and DNS configuration
        </p>
        
        {/* Revolutionary Features */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <span className="text-2xl">🚀</span>
            <span>GitHub repository created automatically</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <span className="text-2xl">⚡</span>
            <span>Deployed to Vercel in seconds</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <span className="text-2xl">🌐</span>
            <span>DNS configured automatically</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <span className="text-2xl">🔒</span>
            <span>SSL certificate provisioned</span>
          </div>
        </div>
        
        {/* Timer Display */}
        <div className="mb-8">
          <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">Total Creation Time</p>
            <p className="text-4xl md:text-5xl font-mono font-bold text-white">
              <span className="text-cyan-400">00</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">76</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">seconds</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all shadow-xl">
            Experience The Future
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
            Learn More
          </button>
        </div>
        
        {/* Demo Notice */}
        <div className="mt-12 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <p className="text-lg text-blue-200 font-semibold mb-2">
            🎯 Demo Platform Created in 76 Seconds
          </p>
          <p className="text-sm text-blue-300">
            URL: https://1shot.thefortaiagency.ai • Powered by Fort AI Agency Platform Automation
          </p>
        </div>
      </div>
    </section>
  )
}