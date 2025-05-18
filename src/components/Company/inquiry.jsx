import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageCircle, ArrowLeft, CheckCircle, XCircle, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Inquiry = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const url = "https://script.google.com/macros/s/AKfycbzs4UUCPpoRF_LhKvj791I3fPDP_2PF2P1LuQmjQH0zw_0Ux6HEG3Qr4dpUm34pSsrE/exec";

    const userData = {
      Name: e.target.name.value,
      Email: e.target.email.value,
      Product: e.target.product.value,
      Quantity: e.target.quantity.value,
      DeliveryTimeline: e.target.deliveryTimeline.value,
      Message: e.target.message.value,
      Timestamp: new Date().toISOString()
    };

    console.log("Sending data:", userData);

    const params = new URLSearchParams();
    for (const key in userData) {
      params.append(key, userData[key]);
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString()
    })
      .then(res => {
        console.log("Response status:", res.status);
        return res.text();
      })
      .then(data => {
        console.log("Response data:", data);
        setToast({
          visible: true,
          type: 'success',
          message: 'Message sent successfully!'
        });
        e.target.reset();

        setTimeout(() => {
          setToast(prev => ({ ...prev, visible: false }));
        }, 5000);
      })
      .catch(error => {
        console.error("Submission error:", error);
        setToast({
          visible: true,
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });

        setTimeout(() => {
          setToast(prev => ({ ...prev, visible: false }));
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const answerVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-2, 2, -2],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hoverTextVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const pulseVariants = {
    visible: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen relative bg-gray-100 overflow-hidden"
      >
        {/* Back button - desktop */}
        <motion.div
          className="p-4 sm:p-6 hidden sm:block relative z-30"
          variants={itemVariants}
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

        {/* Back button - mobile only */}
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

        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/inquiry.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 pt-4">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
            {/* Left Section - Text */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 text-white pt-12"
            >
              <motion.div
                variants={titleVariants}
                className="relative z-10 text-center sm:text-left"
              >
                <div className="absolute -left-4 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <motion.h2
                  whileHover="hover"
                  variants={hoverTextVariants}
                  className="text-5xl lg:text-8xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent cursor-default"
                >
                  Have Questions?
                </motion.h2>
                <div className="text-5xl lg:text-7xl font-bold">
                  We Have
                  <motion.div
                    variants={answerVariants}
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-block ml-3 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] cursor-default text-7xl lg:text-7xl"
                  >
                    Answers!
                    <motion.div
                      className="absolute -bottom-2 left-0 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl lg:text-2xl mt-8 text-white/90 max-w-xl leading-relaxed font-light mx-auto sm:mx-0 text-center sm:text-left"
              >
                Reach out to us with any questions or inquiries.
                Our team is ready to provide the information you need.
              </motion.p>
            </motion.div>

            {/* Right Section - Form - Starting from same line as back button */}
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 w-full lg:mt-0 mt-8"
            >
              <motion.div
                variants={itemVariants}
                className="relative backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/5 rounded-3xl p-6 lg:p-8 border border-white/20 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]"
                whileHover={{ boxShadow: "0 0 80px -15px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>

                <h3 className="text-3xl font-bold text-white mb-6 text-center">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      variants={itemVariants}
                      className="relative group"
                    >
                      <User size={20} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-300 text-lg shadow-inner shadow-black/5"
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="relative group"
                    >
                      <Mail size={20} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-300 text-lg shadow-inner shadow-black/5"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200">
                      <path d="M21 8H10a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z"></path>
                      <path d="M8 2h8"></path>
                      <path d="M9 15v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1"></path>
                    </svg>
                    <input
                      type="text"
                      name="product"
                      placeholder="Product Required"
                      className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-300 text-lg shadow-inner shadow-black/5"
                      required
                    />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      variants={itemVariants}
                      className="relative group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200">
                        <rect width="16" height="16" x="4" y="4"></rect>
                        <path d="M4 8h16"></path>
                        <path d="M12 4v16"></path>
                      </svg>
                      <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        min="1"
                        className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-300 text-lg shadow-inner shadow-black/5"
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="relative group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white transition-colors duration-300 group-hover:text-amber-200">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <input
                        type="text"
                        name="deliveryTimeline"
                        placeholder="Delivery Timeline"
                        className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-300 text-lg shadow-inner shadow-black/5"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <MessageCircle size={20} className="absolute left-5 top-5 text-white transition-colors duration-300 group-hover:text-amber-200" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="3"
                      className="w-full px-6 py-4 pl-14 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-transparent transition-all duration-300 resize-none text-lg shadow-inner shadow-black/5"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg ${
                      isSubmitting
                        ? 'bg-white/70 text-amber-500/70 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader size={20} />
                        </motion.div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-lg">Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {toast.visible && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-6 left-1/2 z-50 py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 ${
                toast.type === 'success'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
              }`}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: toast.type === 'error' ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.4 }}
              >
                {toast.type === 'success' ? (
                  <CheckCircle size={20} className="text-white" />
                ) : (
                  <XCircle size={20} className="text-white" />
                )}
              </motion.div>
              <span className="font-medium">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Inquiry;