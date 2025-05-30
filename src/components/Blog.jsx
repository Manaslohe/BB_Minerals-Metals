import React, { useState } from 'react';
import { searchBlogs } from './Company/data/BlogContent';
import { faqs } from './Company/data/FAQContent';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBlogs = searchBlogs(searchTerm);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <div key={blog.id || index} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-white">{blog.title}</h2>
            <p className="text-gray-300 mb-4">{blog.metaDescription}</p>
            <div className="flex flex-wrap gap-2">
              {blog.keywords && blog.keywords.map((keyword, kIndex) => (
                <span 
                  key={`${blog.id}-keyword-${kIndex}`}
                  className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <a 
              href={blog.slug} 
              className="inline-block mt-4 text-blue-400 hover:text-blue-300"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={`faq-${index}`} className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-white">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
