import BackgroundFx from "@/components/portfolio/BackgroundFx";
import Header from "@/components/portfolio/Header";
import ScrollShowcase from "@/components/portfolio/ScrollShowcase";
import Marquee from "@/components/portfolio/Marquee";
import Profile from "@/components/portfolio/Profile";
import Projects from "@/components/portfolio/Projects";
import Method from "@/components/portfolio/Method";
import Stack from "@/components/portfolio/Stack";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const ACCENT = "#E8A33D";

export default function Home() {
  return (
    <div
      className="edo-page"
      style={
        {
          "--accent": ACCENT,
          position: "relative",
          minHeight: "100vh",
          background: "#07070A",
        } as React.CSSProperties
      }
    >
      <BackgroundFx />
      <Header />
      <ScrollShowcase />
      <Marquee />
      <Profile />
      <Projects />
      <Method />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
