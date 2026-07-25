import { ArrowRight, Hexagon, Bitcoin, Activity, Coins, Users, Plane, Car, Building, Zap, Package, Building2, BookOpen, Twitter, Linkedin, Github } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] relative overflow-x-hidden font-sans select-none flex flex-col">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0EA5E9]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="w-full h-24 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto relative z-20 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="text-xl font-medium tracking-tight uppercase">Cryptox</span>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5">
          <a href="#" className="px-5 py-2 bg-[#0EA5E9] text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Home</a>
          <a href="#" className="px-5 py-2 text-white/60 hover:text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Features</a>
          <a href="#" className="px-5 py-2 text-white/60 hover:text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Why choose</a>
          <a href="#" className="px-5 py-2 text-white/60 hover:text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">Testimonials</a>
          <a href="#" className="px-5 py-2 text-white/60 hover:text-white rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors">FAQ</a>
        </div>

        {/* Right Button */}
        <button className="hidden lg:block px-6 py-2.5 text-[11px] uppercase tracking-widest border border-white/10 rounded-full hover:bg-white/20 transition-all duration-300 bg-white/5 backdrop-blur-md">
          Buy Template
        </button>
      </nav>

      {/* Hero Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto relative z-10 min-h-[calc(100vh-96px)] w-full">
        
        {/* Floating Tags - Left */}
        <div className="hidden md:flex absolute left-4 lg:left-12 top-[20%] items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors cursor-default">
          <span className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Bitora</span>
          <Activity className="w-3.5 h-3.5 text-white/40" />
        </div>
        <div className="hidden md:flex absolute left-12 lg:left-24 top-[60%] items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors cursor-default">
          <span className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Chainly</span>
          <Hexagon className="w-3.5 h-3.5 text-white/40" />
        </div>
        
        {/* Floating Tags - Right */}
        <div className="hidden md:flex absolute right-4 lg:right-12 top-[25%] items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors cursor-default">
          <Coins className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Coinza</span>
        </div>
        <div className="hidden md:flex absolute right-12 lg:right-24 top-[55%] items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors cursor-default">
          <Bitcoin className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Nexbit</span>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-block mb-8 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold border-l border-white/20 pl-4">
            AI-Optimized Trading
          </span>
          
          {/* Main Text */}
          <h1 className="text-5xl md:text-7xl lg:text-[110px] leading-tight md:leading-[1.1] font-light tracking-tighter mb-10 max-w-5xl">
            Step Into The Future <br className="hidden md:block" /> 
            <span className="italic font-serif opacity-90">Of Crypto Trading</span>.
          </h1>
          
          <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto mb-14 leading-relaxed font-light">
            AI-optimized sales teams with human-grade decision-making. Engineered for precision, designed for clarity, and built for those who define the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#0EA5E9] text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
              Get Started
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-colors hidden sm:block">
              View Markets
            </button>
          </div>
        </div>
      </main>

      {/* What's Included Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tighter">
            What's <span className="italic font-serif opacity-90">Included</span>.
          </h2>
          <div className="flex-grow h-[2px] bg-white/20 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-[#0EA5E9]" />
              <h3 className="text-xl font-semibold text-white">Guides</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              2 awesome guides who know everything about Japan!
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Plane className="w-6 h-6 text-[#0EA5E9]" />
              <h3 className="text-xl font-semibold text-white">Flights</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Routes:<br />Moscow — Osaka<br />Tokyo — Moscow
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Car className="w-6 h-6 text-[#0EA5E9]" />
              <h3 className="text-xl font-semibold text-white">Transfers</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              From the airport to the hotels
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Building className="w-6 h-6 text-[#0EA5E9]" />
              <h3 className="text-xl font-semibold text-white">Hotels</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Comfortable accommodation<br />2 people per room<br />(breakfasts included)
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10 flex flex-col gap-16">
        {/* Top Headings */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#0EA5E9] flex items-center justify-center text-[8px] text-white font-bold">+</div>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">Who we are</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter max-w-4xl leading-tight">
              We build search-first digital <br className="hidden md:block"/>
              systems to help category <span className="italic font-serif opacity-90">leaders</span> <br className="hidden md:block"/>
              <span className="italic font-serif opacity-90">lead their industries.</span>
            </h2>
            
            <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-[#0EA5E9] transition-colors group pb-2 border-b border-white/20 hover:border-[#0EA5E9] shrink-0">
              ABOUT THE STUDIO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Image Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
          <div className="bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
            <span className="text-white/20 text-sm">Portrait</span>
          </div>
          <div className="bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
            <span className="text-white/20 text-sm">Portrait</span>
          </div>
          <div className="bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
            <span className="text-white/20 text-sm">Portrait</span>
          </div>
          <div className="bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
            <span className="text-white/20 text-sm">Portrait</span>
          </div>
        </div>

        {/* By The Numbers */}
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#0EA5E9] flex items-center justify-center text-[8px] text-white font-bold">+</div>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">By the numbers</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-6xl font-light">1%</h3>
              <div className="w-full border-t border-dashed border-white/30"></div>
              <h4 className="text-sm font-semibold text-white">Expert-Vetted</h4>
              <p className="text-white/50 text-xs leading-relaxed">Recognized in the top 1% of freelancers for consistent quality, trust, and expertise.</p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-6xl font-light">30+</h3>
              <div className="w-full border-t border-dashed border-white/30"></div>
              <h4 className="text-sm font-semibold text-white">Clients served</h4>
              <p className="text-white/50 text-xs leading-relaxed">From startups to giants - each treated like our only one.</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-6xl font-light">100%</h3>
              <div className="w-full border-t border-dashed border-white/30"></div>
              <h4 className="text-sm font-semibold text-white">Success Score</h4>
              <p className="text-white/50 text-xs leading-relaxed">All 5-star reviews. No compromises. No "just okay."</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-6xl font-light">8+</h3>
              <div className="w-full border-t border-dashed border-white/30"></div>
              <h4 className="text-sm font-semibold text-white">Years of expertise</h4>
              <p className="text-white/50 text-xs leading-relaxed">Deep experience in UX, branding, and growth-driven design for real-world products.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10 border-t border-white/10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0EA5E9] rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white tracking-tight">TechFlow</span>
                <span className="text-[10px] text-white/50 tracking-widest uppercase">Innovation Hub</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge technology solutions that drive innovation and accelerate digital transformation.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#0EA5E9]">
              <Package className="w-4 h-4" />
              <h4 className="text-sm font-semibold">Products</h4>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Cloud Platform</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">AI Solutions</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Data Analytics</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Security Suite</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">API Gateway</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">DevOps Tools</a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#0EA5E9]">
              <Building2 className="w-4 h-4" />
              <h4 className="text-sm font-semibold">Company</h4>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">About Us</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Careers</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">News & Blog</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Press Kit</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Partners</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Contact</a>
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#0EA5E9]">
              <BookOpen className="w-4 h-4" />
              <h4 className="text-sm font-semibold">Resources</h4>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Documentation</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Help Center</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Community</a>
              <a href="#" className="text-white/60 text-sm hover:text-[#0EA5E9] transition-colors">Status Page</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs">© 2025 TechFlow. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <span className="text-white/40 text-xs">All systems operational</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
