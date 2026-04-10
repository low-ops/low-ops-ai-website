import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import FeaturesStrip from "@/components/FeaturesStrip";
import FeatureCards from "@/components/FeatureCards";
import ClaudePluginSection from "@/components/ClaudePluginSection";
import McpSection from "@/components/McpSection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: "var(--color-lo-bg)",
        color: "var(--color-lo-text)",
      }}
    >
      <Background />
      <Navbar />
      <Hero />
      <LogosBar />
      <FeaturesStrip />
      <FeatureCards />
      <ClaudePluginSection />
      <McpSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
