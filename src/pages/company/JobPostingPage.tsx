import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const JobPostingPage = () => {
  const { jobId } = useParams();
  
  const pageVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    out: { 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const jobDetails = {
    cbo: {
      title: 'Chief Business Officer',
      department: 'Executive',
      location: 'Frankenthal, Germany',
      type: 'Full-time',
      description: `
        As Chief Business Officer at HalGuard, you will play a crucial role in driving our business strategy 
        and growth initiatives. Working closely with the CEO and executive team, you will be responsible for 
        expanding our market presence and developing strategic partnerships.

        This is a unique opportunity to join a rapidly growing AI security company at the forefront of 
        synthetic media threat detection. You will help shape the future of digital security while building 
        and leading high-performing teams.
      `,
      responsibilities: [
        "Develop and execute comprehensive business strategies to drive company growth and market expansion",
        "Build and maintain strategic relationships with key enterprise clients and technology partners",
        "Identify and pursue new market opportunities in the AI security and synthetic media detection space",
        "Lead and scale our business development and sales teams across multiple regions",
        "Collaborate closely with product and engineering teams to align business goals with product roadmap",
        "Represent HalGuard at industry events, conferences, and media opportunities",
        "Drive strategic planning processes and set clear objectives for business units",
        "Oversee pricing strategies and business model evolution"
      ],
      requirements: [
        "10+ years of experience in business development or similar roles, with a focus on enterprise software/security",
        "Proven track record of driving significant business growth and building strategic partnerships",
        "Strong understanding of AI, cybersecurity, and enterprise software markets",
        "Experience in scaling B2B software companies and managing large teams",
        "Excellent leadership, communication, and presentation skills",
        "Strong analytical and strategic thinking capabilities",
        "MBA or equivalent business degree preferred",
        "International business experience and German language skills are a plus"
      ],
      benefits: [
        "Competitive base salary with significant equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible working arrangements with home office options",
        "Professional development budget and mentorship opportunities",
        "Regular team events and activities",
        "Modern office in Frankenthal with excellent amenities",
        "Relocation assistance if needed",
        "30 days paid vacation"
      ]
    }
  };

  const job = jobDetails[jobId as keyof typeof jobDetails];

  if (!job) {
    return (
      <div className="pt-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-8 py-10">
          <Link 
            to="/careers"
            className="flex items-center text-blue-800 font-medium mb-8 hover:text-blue-900 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to careers
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-8">The job posting you're looking for doesn't exist.</p>
            <Link
              to="/careers"
              className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors duration-200"
            >
              View All Positions
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="pt-24 bg-gray-50 min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 md:px-8 py-10">
        <Link 
          to="/careers"
          className="flex items-center text-blue-800 font-medium mb-8 hover:text-blue-900 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to careers
        </Link>

        <AnimatedSection className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span>{job.department}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
                <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                <ul className="space-y-2">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">Interested in this position?</h2>
            <p className="text-blue-100 mb-8">
              Send your resume and cover letter to careers@halguard.com with the subject line "{job.title} Application"
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default JobPostingPage;