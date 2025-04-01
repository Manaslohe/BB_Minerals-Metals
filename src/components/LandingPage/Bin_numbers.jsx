import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function BBInNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const [counts, setCounts] = useState({ years: 0, tons: 0, employees: 0 });

  const stats = [
    {
      number: 15,
      label: "YEARS OF EXPERTISE",
      description: "Pioneering minerals, ferro alloys, and charcoal trading since 2007, delivering quality and reliability.",
      key: "years"
    },
    {
      number: 6000,
      label: "TONS PROCESSED",
      description: "With cutting-edge infrastructure, we ensure superior quality and unmatched value for our customers.",
      key: "tons"
    },
    {
      number: 40,
      label: "EMPLOYEES",
      description: "Empowering our workforce, supporting communities, and embracing sustainability for a better future.",
      key: "employees"
    }
  ];

  // Counter animation logic
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      stats.forEach(stat => {
        const increment = stat.number / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.floor(current)
          }));
        }, 16);
      });

      controls.start("visible");
    } else {
      setCounts({ years: 0, tons: 0, employees: 0 });
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
    
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="flex flex-row items-start px-14 py-30 bg-zinc-100 max-md:px-5 max-md:flex-col"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 
        className="text-6xl font-semibold text-sky-900 w-[311px] mr-10 max-md:text-4xl max-md:w-full max-md:mb-10"
        variants={itemVariants}
      >
        BB IN <br /> NUMBERS
      </motion.h2>

      <div className="flex flex-row flex-wrap gap-6 items-start">
        <motion.div 
          className="flex shrink-0 bg-amber-500 rounded-sm h-[148px] w-[30px] max-md:hidden"
          variants={itemVariants}
          whileHover={{ scaleY: 1.1 }}
        />

        <motion.article 
          className="flex flex-col items-start group w-[300px]"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-6xl font-semibold text-sky-900 transition-colors duration-300 group-hover:text-amber-500 max-md:text-4xl"
            animate={{ scale: isInView ? 1 : 0.95 }}
          >
            {counts.years}+
          </motion.h3>
          <p className="text-lg font-medium text-black mt-2 max-md:text-base">YEARS OF EXPERTISE</p>
          <p className="self-stretch mt-2 text-sm leading-relaxed text-neutral-700">
            Pioneering minerals, ferro alloys,
            and charcoal trading since 2007,
            delivering quality and reliability.
          </p>
        </motion.article>

        <motion.div 
          className="flex shrink-0 bg-amber-500 rounded-sm h-[148px] w-[30px] max-md:hidden"
          variants={itemVariants}
          whileHover={{ scaleY: 1.1 }}
        />

        <motion.article 
          className="flex flex-col group"
          variants={itemVariants}
        >
          <motion.h3 
            className="self-start text-6xl font-semibold text-sky-900 transition-colors duration-300 group-hover:text-amber-500 max-md:text-4xl"
            animate={{ scale: isInView ? 1 : 0.95 }}
          >
            {counts.tons.toLocaleString()}+
          </motion.h3>
          <p className="text-lg font-medium text-black mt-2 max-md:text-base">TONS PROCESSED</p>
          <p className="self-stretch mt-2 text-sm leading-relaxed text-neutral-700">
            With cutting-edge infrastructure for minerals, <br />
            ferro alloys, and charcoal processing, we ensure <br />
            superior quality and unmatched value for our customers.
          </p>
        </motion.article>

        <motion.div 
          className="flex shrink-0 bg-amber-500 rounded-sm h-[148px] w-[30px] max-md:hidden"
          variants={itemVariants}
          whileHover={{ scaleY: 1.1 }}
        />

        <motion.article 
          className="flex flex-col group"
          variants={itemVariants}
        >
          <motion.h3 
            className="self-start text-6xl font-semibold text-sky-900 transition-colors duration-300 group-hover:text-amber-500 max-md:text-4xl"
            animate={{ scale: isInView ? 1 : 0.95 }}
          >
            {counts.employees}+
          </motion.h3>
          <p className="text-lg font-medium text-black mt-2 max-md:text-base">EMPLOYEES</p>
          <p className="self-stretch mt-2 text-sm leading-relaxed text-neutral-700">
            Our strength lies in empowering our workforce, <br />
            supporting communities, and embracing <br />
            sustainability for a better future.
          </p>
        </motion.article>
      </div>
    </motion.section>
  );
}

export default BBInNumbers;