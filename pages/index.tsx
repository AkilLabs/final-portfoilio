"use client";
import React from "react";
import { useRouter } from "next/router";
import { WavyBackground } from "../components/ui/wavy-background";
import ShinyButton from "@/components/ui/shiny-button";

export default function WavyBackgroundDemo() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/about");
  };

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        AKIL A
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Welcome to my world of innovation and design
      </p>
      <div className="mt-8 flex justify-center">
        <ShinyButton onClick={handleNavigation} className="text-white">Get Started</ShinyButton>
      </div>
    </WavyBackground>
  );
}
