import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../LandingPage/Header';

const Blog = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeBlogItem, setActiveBlogItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  const toggleBlogItem = (id) => {
    setActiveBlogItem(id === activeBlogItem ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const faqs = [
    {
      id: 'what-are-ferroalloys',
      question: 'What are ferroalloys?',
      answer: 'Ferroalloys are alloys of iron with a high proportion of other elements like silicon, manganese, or chromium, used in steelmaking.',
    },
    {
      id: 'products-offered',
      question: 'What products does BB Minerals & Metals offer?',
      answer: 'We offer ferroalloys such as Ferro Manganese, Silico Manganese, and other essential metal alloys.',
    },
    {
      id: 'customer-support',
      question: 'How to contact customer support?',
      answer: 'You can reach us via our website contact form, email, or support phone number.',
    },
  ];

  const blogArticles = [
    {
      id: 'ferroalloys-steelmaking',
      title: 'The Role of Ferroalloys in Modern Steelmaking',
      content: 'Ferroalloys are the backbone of the steelmaking industry. They enhance the strength, ductility, and corrosion resistance of steel by infusing it with crucial elements such as manganese, silicon and chromium. In this article, we explore how ferroalloys contribute to creating high-performance steel for various applications.',
    },
    {
      id: 'quality-control',
      title: 'How BB Minerals Ensures Quality in Every Batch',
      content: 'Quality is the foundation of trust. At BB Minerals & Metals, we implement strict quality control protocols, certified lab testing, and continuous batch monitoring. Learn how we maintain product consistency, meet industrial standards, and deliver excellence in every product we offer.',
    },
    {
      id: 'sourcing-challenges',
      title: 'Common Challenges in Sourcing Industrial Alloys',
      content: 'Sourcing industrial alloys can be complex. From fluctuating market prices to inconsistent product quality and delayed deliveries companies face many hurdles. In this post, we discuss the major challenges buyers face and how to overcome them by partnering with a reliable supplier like BB Minerals.',
    },
    {
      id: 'custom-grade-ferroalloys',
      title: 'Why Custom-Grade Ferroalloys Matter',
      content: 'One size doesn\'t fit all in metallurgy. Different industries require specific compositions of alloys to match their production needs. Discover how custom-grade ferroalloys improve process efficiency, reduce waste, and lead to superior end products tailored to your application.',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Back button - now positioned inside container for better alignment */}
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="pt-6 sm:pt-8 hidden sm:block"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button 
            className="group flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-white
                    shadow-lg hover:shadow-amber-500/20 transition-all duration-300
                    hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => navigate(-1)}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} className="text-amber-500 group-hover:animate-pulse" />
            <span className="font-medium text-sm">Back</span>
          </motion.button>
        </motion.div>
      
        {/* FAQs Section */}
        <motion.div 
          className="pt-8 pb-12 sm:pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-center"
            variants={itemVariants}
          >
            FAQs
          </motion.h2>
          <motion.div 
            className="h-1 w-16 sm:w-24 bg-amber-500 mx-auto mb-6 sm:mb-10"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <motion.div 
            className="bg-gray-800/50 rounded-lg p-4 sm:p-6 md:p-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              <motion.div 
                className="md:col-span-5"
                variants={itemVariants}
              >
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">FREQUENTLY</h3>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">ASKED</h3>
                <h3 className="text-5xl sm:text-6xl md:text-8xl font-bold text-amber-500 mb-3 sm:mb-4">QUESTIONS</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
                  Your Questions, Clearly Answered. Get Quick Help on Common Queries.
                </p>
              </motion.div>

              <motion.div 
                className="md:col-span-7"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-gray-800/70 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.1)" }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">FAQs</h3>
                  <div className="relative mb-6 sm:mb-8">
                    <input
                      type="text"
                      placeholder="Search question here"
                      className="w-full py-2 sm:py-3 px-4 sm:px-5 bg-gray-700/70 rounded-full text-white text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-amber-500/50 focus:outline-none"
                    />
                    <button className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <div className="flex-shrink-0 mr-2 sm:mr-3">
                        <img 
                          src="/icons/faq.png" 
                          alt="FAQ Icon" 
                          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                        />
                      </div>
                      <p className="text-white font-medium text-xl sm:text-lg md:text-xl">Genereal Questions</p>
                    </div>

                    {faqs.map((faq) => (
                      <div 
                        key={faq.id} 
                        className="mb-3 border-b border-gray-700 pb-3 last:border-b-0 last:pb-0 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                      >
                        <button
                          className="flex justify-between items-center w-full py-2 sm:py-3 px-2 text-left"
                          onClick={() => toggleAccordion(faq.id)}
                        >
                          <span className="font-medium text-base sm:text-lg md:text-xl">{faq.question}</span>
                          <div
                            className="transition-transform duration-300 ease-in-out flex-shrink-0 ml-2"
                            style={{ transform: activeAccordion === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          >
                            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                          </div>
                        </button>
                        <motion.div 
                          className="overflow-hidden"
                          initial={false}
                          animate={{ 
                            height: activeAccordion === faq.id ? 'auto' : 0,
                            opacity: activeAccordion === faq.id ? 1 : 0 
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.3
                          }}
                        >
                          <div className="py-2 pl-2">
                            <p className="text-gray-300 text-sm sm:text-base md:text-xl">{faq.answer}</p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pb-16 sm:pb-20 md:pb-24" 
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-center"
            variants={itemVariants}
          >
            BLOG
          </motion.h2>
          <motion.div 
            className="h-1 w-16 sm:w-24 bg-amber-500 mx-auto mb-6 sm:mb-10"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <motion.div 
            className="bg-gray-800/30 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-amber-500/5 transition-all duration-500"
            variants={itemVariants}
            whileHover={{ boxShadow: "0 10px 50px -12px rgba(251, 191, 36, 0.1)" }}
          >
            <motion.div 
              className="mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <h3 className="text-4xl sm:text-4xl md:text-6xl font-bold">OUR INDUSTRY</h3>
                <h3 className="text-5xl sm:text-5xl md:text-7xl font-bold text-amber-500 mb-3 sm:mb-4">
            <span className="block sm:inline">INSIGHTS</span>
            <span className="block sm:hidden"></span>
            <span className="block sm:inline">&amp; UPDATES</span>
                </h3>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl" >
                Stay informed with the latest trends, tips, and news in minerals and ferroalloys.
              </p>
            </motion.div>

            <motion.div 
              className="relative mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <input
                type="text"
                placeholder="Search question here"
                className="w-full py-2 sm:py-3 px-4 bg-gray-700/70 rounded-full text-white text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-amber-500/50 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </motion.div>

            <motion.div 
              className="space-y-3"
              variants={containerVariants}
            >
              {blogArticles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="border-b border-gray-700 last:border-b-0 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                >
                  <button
                    className="flex justify-between items-center w-full py-3 sm:py-4 px-2 text-left"
                    onClick={() => toggleBlogItem(article.id)}
                  >
                    <div className="flex items-center">
                      <span className="h-2 w-2 bg-amber-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                      <span className="font-medium text-base sm:text-lg md:text-xl">{article.title}</span>
                    </div>
                    <div
                      className="transition-transform duration-300 ease-in-out flex-shrink-0 ml-2"
                      style={{ transform: activeBlogItem === article.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                    </div>
                  </button>
                  <motion.div 
                    className="overflow-hidden"
                    initial={false}
                    animate={{ 
                      height: activeBlogItem === article.id ? 'auto' : 0,
                      opacity: activeBlogItem === article.id ? 1 : 0 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.3
                    }}
                  >
                    <div className="pl-4 sm:pl-5 pb-3 sm:pb-4">
                      <p className="text-gray-300 text-sm sm:text-base md:text-xl">{article.content}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Back button - mobile only - kept outside main container for fixed positioning */}
      <motion.div 
        className="fixed bottom-6 left-6 z-50 sm:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <motion.button 
          className="group flex items-center justify-center p-3 rounded-full bg-gray-800 text-white
                   shadow-lg border border-amber-500/30 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          onClick={() => navigate(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={20} className="text-amber-500" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Blog;
