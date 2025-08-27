import About from "@/components/About/About";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import MeetOurCEO from "@/components/About/MeetOurCEO";
import MissionStatement from "@/components/About/MissionStatement";
import StatsSection from "@/components/About/StatsSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import ViewportAware from "@/components/Common/ViewportAware";
import Contact from "@/components/Contact";
import ContactSection from "@/components/Contact/ContactSection";
import NewsLetter from "@/components/Contact/NewsLetter";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PricingSection from "@/components/Pricing/PricingSection";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub Stats - Jiu-Jitsu Evolved",
  description:
    "Sub Stats is a performance analytics platform designed for Brazilian Jiu-Jitsu (BJJ) competitors and coaches.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />

      {/* Hero - no viewport aware since it's above fold */}
      <Hero />

      {/* Viewport aware sections */}
      <ViewportAware delay={0.4}>
        <StatsSection />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <About />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <MeetOurCEO />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <MissionStatement />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <Services />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <ContactSection />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <PricingSection />
      </ViewportAware>

      <ViewportAware delay={0.2}>
        <Testimonials />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <NewsLetter />
      </ViewportAware>

      {/* <ViewportAware delay={0.4}>
        <AboutSectionOne />
      </ViewportAware>

      <ViewportAware delay={0.4}>
        <AboutSectionTwo />
      </ViewportAware>

      

      <ViewportAware delay={0.2}>
        <Pricing />
      </ViewportAware>

      <ViewportAware delay={0.2}>
        <Blog />
      </ViewportAware>

      <ViewportAware delay={0.2}>
        <Contact />
      </ViewportAware> */}
    </>
  );
}
