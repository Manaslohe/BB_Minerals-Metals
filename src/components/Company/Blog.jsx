import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogArticles, renderBlogContent } from './data/BlogContent';
import { faqs } from './data/FAQContent';

const Blog = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeBlogItem, setActiveBlogItem] = useState(null);
  const [searchQueryFAQ, setSearchQueryFAQ] = useState('');
  const [searchQueryBlog, setSearchQueryBlog] = useState('');

  const toggleAccordion = (id) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
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

  // Updated blog filtering with safety checks
  const filteredBlogs = React.useMemo(() => {
    if (!searchQueryBlog) return blogArticles;
    
    const query = searchQueryBlog.toLowerCase();
    return blogArticles.filter(blog => {
      const titleMatch = blog.title?.toLowerCase().includes(query);
      const keywordMatch = blog.keywords?.some(keyword => 
        keyword?.toLowerCase().includes(query)
      );
      const contentMatch = blog.sections?.some(section => {
        const sectionContent = section.content?.toLowerCase().includes(query);
        const itemsMatch = section.items?.some(item => 
          typeof item === 'string' && item.toLowerCase().includes(query)
        );
        return sectionContent || itemsMatch;
      });
      
      return titleMatch || keywordMatch || contentMatch;
    });
  }, [searchQueryBlog]);

  // Updated FAQ filtering with safety checks
  const filteredFAQs = React.useMemo(() => {
    if (!searchQueryFAQ) return faqs;
    
    const query = searchQueryFAQ.toLowerCase();
    return faqs.filter(faq => 
      faq.question?.toLowerCase().includes(query) ||
      faq.answer?.toLowerCase().includes(query)
    );
  }, [searchQueryFAQ]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back button - now positioned inside container for better alignment */}
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
                      placeholder="Search FAQs"
                      value={searchQueryFAQ}
                      onChange={(e) => setSearchQueryFAQ(e.target.value)}
                      className="w-full py-2 sm:py-3 px-4 sm:px-5 bg-gray-700/70 rounded-full text-white text-sm sm:text-base"
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

                    <div className="max-h-[400px] overflow-y-auto 
                      pr-3 custom-scrollbar"
                      style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "rgba(251, 191, 36, 0.6) rgba(31, 41, 55, 0.3)"
                      }}
                    >
                      {filteredFAQs.map((faq) => (
                        <div 
                          key={faq.id} 
                          className="mb-3 border-b border-gray-700 pb-3 last:border-b-0 last:pb-0 hover:bg-gray-800/50 rounded-md transition-colors duration-200"
                        >
                          <button
                            className="flex justify-between items-center w-full py-2 sm:py-3 px-2 text-left"
                            onClick={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
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
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Section - remove outer scroll, keep scroll in list only */}
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
                placeholder="Search blogs"
                value={searchQueryBlog}
                onChange={(e) => setSearchQueryBlog(e.target.value)}
                className="w-full py-2 sm:py-3 px-4 bg-gray-700/70 rounded-full text-white text-sm sm:text-base"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </motion.div>

            {/* Blog list with scroll */}
            <motion.div 
              className="relative"
              variants={containerVariants}
            >
              <div
                 className="overflow-y-auto pr-3 custom-scrollbar transition-all duration-500 space-y-4"
                style={{
                  maxHeight: activeBlogItem
                    ? '1200px' // allow container to grow when expanded (adjust as needed)
                    : '560px', // 7 cards * ~80px each
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(251, 191, 36, 0.6) rgba(31, 41, 55, 0.3)",
                  transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {filteredBlogs.map((article) => (
                  <div 
                    key={article.id} 
                    className={`border-b border-gray-700 last:border-b-0 hover:bg-gray-800/50 rounded-md transition-all duration-300
                      ${activeBlogItem === article.id ? 'mb-6' : ''}`}
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
                        {renderBlogContent(article.sections)}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
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
