import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import TechStack from "./components/TechStack";
import { Services } from "./components/Services";
import Footer from "./components/Footer";
import SoftSkills from "./components/softskills";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-white relative">
        {/* Background */}
        <div
          className="fixed inset-0 z-0"
          // style={{
          //   backgroundImage: `
          //     linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
          //     linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
          //     radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
          //     radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
          //   `,
          //   backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          // }}
          // style={{
          //   backgroundImage: `
          //     linear-gradient(to right, #f0f0f0 1px, transparent 1px),
          //     linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
          //     radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),     /* Left */
          //     radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent),  /* Right */
          //     radial-gradient(circle 600px at 50% 0px, #d5c5ff, transparent),     /* Top */
          //     radial-gradient(circle 600px at 50% 100%, #d5c5ff, transparent)     /* Bottom */
          //   `,
          //   backgroundSize: `
          //     96px 64px,
          //     96px 64px,
          //     100% 100%,
          //     100% 100%,
          //     100% 100%,
          //     100% 100%
          //   `,
          // }}
          // Colored blue
          // style={{
          //   backgroundImage: `
          //     linear-gradient(135deg,
          //       rgba(248,250,252,1) 0%,
          //       rgba(219,234,254,0.7) 30%,
          //       rgba(165,180,252,0.5) 60%,
          //       rgba(129,140,248,0.6) 100%
          //     ),
          //     radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
          //     radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
          //     radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)
          //   `,
          // }}
          // Carreau
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <TechStack />
          <SoftSkills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
