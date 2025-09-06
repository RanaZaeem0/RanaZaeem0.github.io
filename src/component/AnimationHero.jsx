"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { avatarImg } from "../../public/index"; // adjust import path
import Link from "next/link";

function AnimatedHero() {
  const words = ["Website", "AI Solution", "Apps", "Software", "Product"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    const id = setInterval(
      () => setCurrentWordIndex((prev) => (prev + 1) % words.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <main
      className="min-h-screen mt-10 max-md:mt-0 bg-[#FAFAFA] flex flex-col items-center justify-center px-6 py-10 max-md:py-14 max-md:px-2 relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(156,163,175,0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(156,163,175,0.2) 1px, transparent 1px)
        `,
        backgroundSize: "86px 86px",
      }}
    >
      <div className="absolute inset-0 bg-gray-50/50 pointer-events-none" />

      <div className="w-full max-w-2xl rounded-full bg-gray-50 mx-auto text-center relative z-10">
        <div className="mb-8 flex items-center justify-center flex-col">
          <div className="mb-6">
            <Image
              src={avatarImg}
              width={140}
              height={140}
              alt="Portrait of Rana Zaeem"
              priority
              className="w-24 h-24 hover:w-28  hover:h-28 transition-all duration-300 rounded-full object-cover border-2 border-gray-100"
            />
          </div>

          <h1 className="text-[2rem] max-md:text-3xl  font-bold text-gray-900 leading-tight tracking-tight">
            Hi, I’m Zaeem <br />
            Engineer. Builder. Problem-solver
            <br />
            Your partner in creating{" "}
            <span className="inline-block bg-gray-200 align-baseline relative border-0 px-4 py-1 rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${currentWord}-${currentWordIndex}`}
                  className="inline-block"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>
      </div>
      <div className="pt-12 relative z-10 ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex bg-black cursor-pointer text-white rounded-2xl px-2 py-1 items-center justify-center "
        >
          <span className="  px-4 py-2 ">
            <Link href={"mailto:ranazaeem34@gmail.com"}>Work With Me</Link>
          </span>
          <motion.div
            className="w-6 h-6 flex items-center justify-center"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

export default AnimatedHero;
