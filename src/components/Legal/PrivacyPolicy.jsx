import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Back button - desktop */}
      <motion.div 
        className="p-4 sm:p-6 hidden sm:block relative z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            PRIVACY POLICY
          </h1>
          <div className="w-32 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-700"
        >
          <div className="space-y-6 text-gray-200">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Introduction</h2>
              <p>
                FrameX ("we," "our," or "us") is the developer of this website for BB Minerals & Metals. This privacy policy 
                outlines how we collect, use, and protect information when you visit and interact with this website. By using this 
                website, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Information We Collect</h2>
              <p>As the website developer, we may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-amber-400">Technical Data</strong> - includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong className="text-amber-400">Usage Data</strong> - includes information about how you use our website, such as the pages you visit, the time you spent on those pages, and the links you clicked.</li>
                <li><strong className="text-amber-400">Analytics Data</strong> - we use tools like Google Analytics to collect anonymous data about website performance and user behavior to improve the website experience.</li>
              </ul>
              <p>
                Any personal data submitted through contact forms or other interactive features of the website is collected directly 
                by BB Minerals & Metals, not by FrameX. Please refer to BB Minerals & Metals' privacy policy for information on how 
                they handle your personal data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">How We Use Collected Information</h2>
              <p>As the developer of this website, FrameX may use the collected data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To monitor and analyze website usage and performance.</li>
                <li>To identify and fix technical issues.</li>
                <li>To improve the website's functionality and user experience.</li>
                <li>To prevent malicious activities and enhance website security.</li>
                <li>To generate anonymous statistical data about website usage.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on the website and hold certain information. 
                Cookies are files with a small amount of data that may include an anonymous unique identifier. These are sent to 
                your browser from a website and stored on your device.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our website development and maintenance, to provide 
                website-related services, or to assist us in analyzing how our website is used. These third parties have access to 
                only the technical data needed to perform these tasks on our behalf and are obligated not to disclose or use it for 
                any other purpose.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method 
                of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we 
                cannot guarantee its absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-amber-500">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-medium">
                FrameX<br />
                Email: <a href="mailto:contact@framex.dev" className="text-amber-400 hover:underline">contact@framex.dev</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
