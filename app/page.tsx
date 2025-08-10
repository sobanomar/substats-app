import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import ViewportAware from "@/components/Common/ViewportAware";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
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
      <ViewportAware threshold={0.2}>
        <AboutSectionOne />
      </ViewportAware>

      {/* <ViewportAware threshold={0.2}>
        <AboutSectionTwo />
      </ViewportAware>

      <ViewportAware threshold={0.2}>
        <Testimonials />
      </ViewportAware>

      <ViewportAware threshold={0.2}>
        <Pricing />
      </ViewportAware>

      <ViewportAware threshold={0.2}>
        <Blog />
      </ViewportAware>

      <ViewportAware threshold={0.2}>
        <Contact />
      </ViewportAware> */}
    </>
  );
}
