"use client";

import HeroSection from "@/components/HeroSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="items-center justify-center px-8 lg:px-0"
        >
          <HeroSection />
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
