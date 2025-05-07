import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 'voice-fraud-case-study',
      title: 'How a Fortune 500 Company Lost $3.2M to Voice Fraud',
      excerpt: 'Learn how sophisticated AI voice cloning was used to impersonate a CEO and authorize fraudulent wire transfers, and how HalGuard could have prevented it.',
      category: 'voice',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'May 15, 2025'
    },
    {
      id: 'deepfake-video-detection',
      title: 'The Rise of Deepfake Videos in Corporate Espionage',
      excerpt: 'Examining the growing threat of deepfake videos in corporate settings and how advanced detection systems can help organizations stay protected.',
      category: 'video',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'April 28, 2025'
    },
    {
      id: 'phishing-evolution-2025',
      title: 'The Evolution of Phishing: From Emails to AI-Generated Text',
      excerpt: 'How AI-generated phishing attempts have evolved to become nearly indistinguishable from legitimate communications, and what you can do about it.',
      category: 'text',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'April 10, 2025'
    },
    {
      id: 'synthetic-media-landscape',
      title: 'The 2025 Synthetic Media Threat Landscape',
      excerpt: 'A comprehensive overview of the current synthetic media threat landscape and how organizations can build robust defense strategies.',
      category: 'general',
      image: 'https://images.pexels.com/photos/4068165/pexels-photo-4068165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'March 22, 2025'
    },
    {
      id: 'voice-authentication-systems',
      title: 'Voice Authentication Systems: Strengths and Vulnerabilities',
      excerpt: 'Analyzing the effectiveness of current voice authentication systems and how they can be strengthened against synthetic voice attacks.',
      category: 'voice',
      image: 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'March 5, 2025'
    },
    {
      id: 'regulatory-compliance-eu',
      title: 'Synthetic Media & Regulatory Compliance in the EU',
      excerpt: 'How European regulations are evolving to address synthetic media threats and what this means for your organization&apos;s compliance strategy.',
      category: 'general',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      date: 'February 18, 2025'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'voice', label: 'Voice Security' },
    { id: 'video', label: 'Video Security' },
    { id: 'text', label: 'Text Security' },
    { id: 'general', label: 'General' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest trends, case studies, and insights on synthetic media security.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === 'voice' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'video' ? 'bg-teal-100 text-teal-800' :
                      post.category === 'text' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {
                      post.category === 'voice' ? 'Voice Security' :
                      post.category === 'video' ? 'Video Security' :
                      post.category === 'text' ? 'Text Security' :
                      'General'
                    }
                  </span>
                  <span className="text-sm text-gray-500 ml-auto">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-blue-800 font-medium">
                  Read more
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-800 font-medium hover:text-blue-900 transition-colors duration-200"
          >
            View all blog posts
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;