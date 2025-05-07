import { PieChart, Shield, LineChart, Share2, BarChart3, Users } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <PieChart className="h-8 w-8 text-blue-800" />,
      title: 'Comprehensive Dashboard',
      description: 'Intuitive dashboard with detailed analytics, real-time monitoring, and customizable reporting for all security services.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: 'Multi-Channel Protection',
      description: 'Unified security across voice, video, and text channels for comprehensive synthetic media attack prevention.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-800" />,
      title: 'Advanced Analytics',
      description: 'Track attack patterns, security incidents, and detection rates with sophisticated data visualization tools.'
    },
    {
      icon: <Share2 className="h-8 w-8 text-blue-800" />,
      title: 'API Integration',
      description: 'Seamlessly integrate HalGuard\'s protection capabilities into your existing software and security infrastructure.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-800" />,
      title: 'Compliance Reporting',
      description: 'Automated compliance reports for GDPR, BaFin, FINRA, and other regulatory requirements specific to your industry.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800" />,
      title: 'Role-Based Access',
      description: 'Configure access levels and permissions for different team members based on their security responsibilities.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The HalGuard platform provides powerful tools and insights to protect your organization from synthetic media threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Platform Dashboard</h3>
              <p className="text-blue-100 mb-8">
                The HalGuard Platform Dashboard provides a comprehensive view of your organization's synthetic media 
                security posture, with detailed reports and charts for each service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs">✓</span>
                  </div>
                  <p className="text-blue-100">Real-time threat monitoring across all channels</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs">✓</span>
                  </div>
                  <p className="text-blue-100">Customizable alert thresholds and notification systems</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs">✓</span>
                  </div>
                  <p className="text-blue-100">Historical data analysis and trend identification</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs">✓</span>
                  </div>
                  <p className="text-blue-100">Automated compliance documentation and reporting</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-auto">
              <img 
                src="/images/dashboard-overview.png"  
                alt="Platform Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;