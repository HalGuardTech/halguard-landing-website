import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const blogs = [
  {
    id: 'voice-fraud-case-study',
    title: 'How a Fortune 500 Company Lost $3.2M to Voice Fraud',
    excerpt: 'Learn how sophisticated AI voice cloning was used to impersonate a CEO and authorize fraudulent wire transfers, and how HalGuard could have prevented it.',
    category: 'Voice Security',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'May 15, 2025',
    author: 'Dr. Maria Klein',
    authorRole: 'Head of Voice Security Research',
    content: `
      <h2>The Incident: A $3.2 Million Voice Fraud Attack</h2>
      
      <p>In March 2025, a Fortune 500 manufacturing company fell victim to one of the most sophisticated voice fraud attacks recorded to date. The attack resulted in a loss of $3.2 million through fraudulent wire transfers, authorized using the cloned voice of the company's Chief Financial Officer.</p>
      
      <p>The attackers used advanced AI voice synthesis technology to create a near-perfect replica of the CFO's voice, complete with his distinct accent and speech patterns. This synthetic voice was then used in a series of phone calls to the company's financial controller, requesting urgent wire transfers to what appeared to be legitimate supplier accounts but were in fact controlled by the attackers.</p>
      
      <h2>The Attack Methodology</h2>
      
      <p>The attack was carefully orchestrated and executed in several phases:</p>
      
      <ol>
        <li><strong>Voice Data Collection:</strong> The attackers gathered voice samples of the CFO from publicly available sources, including earnings calls, conference presentations, and media interviews.</li>
        <li><strong>Voice Model Training:</strong> Using advanced neural network technology, the attackers created a sophisticated voice model capable of replicating the CFO's unique speech patterns.</li>
        <li><strong>Social Engineering:</strong> The attackers researched the company's suppliers, ongoing projects, and financial workflows to craft a convincing narrative for the fraudulent transfers.</li>
        <li><strong>Execution:</strong> The attack was timed during the CFO's known vacation, when he would be difficult to reach for verification.</li>
      </ol>
      
      <h2>How It Could Have Been Prevented</h2>
      
      <p>HalGuard's VoiceShield technology is specifically designed to prevent this type of synthetic voice fraud. Here's how HalGuard could have prevented the attack:</p>
      
      <ul>
        <li><strong>Real-time Voice Authentication:</strong> VoiceShield's advanced authentication system would have detected the synthetic nature of the voice, even with high-quality cloning.</li>
        <li><strong>Behavioral Analysis:</strong> The system would have identified unusual patterns in the request, such as the urgency, timing during the CFO's vacation, and deviation from standard financial protocols.</li>
        <li><strong>Multi-factor Verification:</strong> VoiceShield would have triggered additional verification steps for high-value transactions, adding a layer of security beyond voice recognition.</li>
        <li><strong>Anomaly Detection:</strong> The platform would have flagged the unusual destination accounts and transaction patterns as potential fraud indicators.</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      
      <p>This incident highlights several critical vulnerabilities in traditional security systems when confronted with advanced synthetic media attacks:</p>
      
      <ul>
        <li>Traditional voice recognition systems are insufficient against modern AI voice cloning.</li>
        <li>Human verification alone cannot reliably detect sophisticated voice synthesis.</li>
        <li>Financial processes need technology-based safeguards specifically designed to counter synthetic media threats.</li>
        <li>Public-facing executives are particularly vulnerable to voice cloning due to the abundance of publicly available voice samples.</li>
      </ul>
      
      <h2>The Path Forward</h2>
      
      <p>As AI-generated synthetic media becomes increasingly sophisticated, organizations must implement specialized security measures to protect against these new threats. HalGuard's suite of security products provides comprehensive protection across voice, video, and text channels, ensuring that your organization is prepared for the next generation of security challenges.</p>
      
      <p>To learn more about how HalGuard can protect your organization from synthetic media attacks, contact our security experts today.</p>
    `
  },
  {
    id: 'deepfake-video-detection',
    title: 'The Rise of Deepfake Videos in Corporate Espionage',
    excerpt: 'Examining the growing threat of deepfake videos in corporate settings and how advanced detection systems can help organizations stay protected.',
    category: 'Video Security',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'April 28, 2025',
    author: 'Thomas Wagner',
    authorRole: 'Chief Security Analyst',
    content: `
      <h2>The Growing Threat of Deepfake Videos in Corporate Settings</h2>
      
      <p>In recent years, deepfake technology has evolved from a novelty to a serious security threat, particularly in corporate environments. The ability to create convincing fake videos of executives and employees has opened up new vectors for corporate espionage, market manipulation, and fraud.</p>
      
      <p>This article examines several recent high-profile cases of deepfake videos being used in corporate attacks, the techniques behind these sophisticated threats, and how organizations can protect themselves using advanced detection systems like HalGuard DeepShield.</p>
      
      <h2>Recent Case Studies</h2>
      
      <h3>Case 1: Market Manipulation via Fake Earnings Call</h3>
      
      <p>In January 2025, attackers created a deepfake video of a tech company's CEO announcing catastrophic quarterly losses and a major product recall before the official earnings call. The video was distributed through compromised financial news channels and resulted in a 12% stock drop within hours, allowing the perpetrators to profit from short positions.</p>
      
      <h3>Case 2: Corporate Espionage Through Falsified Internal Communications</h3>
      
      <p>A European manufacturing firm fell victim to deepfake-based espionage when realistic fake videos of their R&D director were sent to junior engineers, requesting detailed information about a proprietary new production process. The information was exfiltrated before the deception was discovered.</p>
      
      <h3>Case 3: Executive Impersonation for Data Access</h3>
      
      <p>Attackers created deepfake videos of a company's CTO for video conferences with IT staff, successfully engineering access to sensitive systems by requesting emergency credential resets due to a fictitious security incident.</p>
      
      <h2>The Technology Behind Sophisticated Deepfakes</h2>
      
      <p>Modern deepfake attacks leverage several advanced technologies working in concert:</p>
      
      <ul>
        <li><strong>Generative Adversarial Networks (GANs):</strong> Neural networks that can create remarkably realistic face swaps and motion emulation.</li>
        <li><strong>Voice Synthesis:</strong> AI systems that clone vocal patterns with high fidelity, matching the replaced face.</li>
        <li><strong>Movement Mapping:</strong> Technology that accurately replicates a person's unique mannerisms and micro-expressions.</li>
        <li><strong>Real-time Rendering:</strong> Latest attacks include the ability to generate deepfakes during live video calls.</li>
      </ul>
      
      <h2>How HalGuard DeepShield Detects Deepfakes</h2>
      
      <p>HalGuard DeepShield employs a multi-layered approach to detect even the most sophisticated deepfake videos:</p>
      
      <ol>
        <li><strong>Biometric Inconsistency Detection:</strong> Identifies subtle inconsistencies in facial movements, eye blinking patterns, and other physiological markers.</li>
        <li><strong>Digital Artifact Analysis:</strong> Detects compression artifacts, rendering anomalies, and other technical signatures that are present in synthesized content.</li>
        <li><strong>Behavioral Authentication:</strong> Verifies that speech patterns, mannerisms, and expressions match the known behavioral profile of the person being depicted.</li>
        <li><strong>Temporal Coherence Checking:</strong> Analyzes video over time to identify temporal inconsistencies that are common in synthesized media.</li>
        <li><strong>Contextual Verification:</strong> Cross-references content with known facts and scheduled communications to identify suspicious timing or content.</li>
      </ol>
      
      <h2>Implementation Strategies for Organizations</h2>
      
      <p>To protect against deepfake threats, organizations should consider implementing the following measures:</p>
      
      <ul>
        <li><strong>Automated Deepfake Detection:</strong> Deploy solutions like HalGuard DeepShield to automatically scan incoming video communications.</li>
        <li><strong>Multi-factor Authentication:</strong> Require additional verification for sensitive requests, especially those received through video channels.</li>
        <li><strong>Staff Training:</strong> Educate employees about deepfake threats and establish verification protocols for video-based communications.</li>
        <li><strong>Communication Watermarking:</strong> Implement digital watermarking for official communications to help verify authenticity.</li>
        <li><strong>Incident Response Planning:</strong> Develop specific response plans for deepfake incidents, including PR strategies and stakeholder communications.</li>
      </ul>
      
      <h2>The Future of Deepfake Threats and Detection</h2>
      
      <p>As deepfake technology continues to advance, we anticipate several developments in both attack and defense capabilities:</p>
      
      <ul>
        <li>Increased use of quantum-resistant verification for high-security communications</li>
        <li>Hardware-based authentication methods to supplement software detection</li>
        <li>Development of industry standards for verifiable video communications</li>
        <li>Growing regulatory frameworks requiring identity verification in sensitive industries</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Deepfake videos represent a significant and growing threat to corporate security. By implementing comprehensive detection systems like HalGuard DeepShield and adopting robust verification protocols, organizations can significantly reduce their vulnerability to these sophisticated attacks.</p>
      
      <p>Contact HalGuard today to learn how our DeepShield technology can protect your organization from the next generation of video-based threats.</p>
    `
  },
  {
    id: 'phishing-evolution-2025',
    title: 'The Evolution of Phishing: From Emails to AI-Generated Text',
    excerpt: 'How AI-generated phishing attempts have evolved to become nearly indistinguishable from legitimate communications, and what you can do about it.',
    category: 'Text Security',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'April 10, 2025',
    author: 'Sophia Chen',
    authorRole: 'Text Security Specialist',
    content: `
      <h2>The New Era of AI-Generated Phishing</h2>
      
      <p>Phishing attacks have evolved dramatically since their inception in the 1990s. What began as crude, error-filled emails has transformed into sophisticated, AI-generated communications that can be nearly indistinguishable from legitimate messages. This evolution represents one of the most significant cybersecurity challenges facing organizations today.</p>
      
      <p>In this article, we'll trace the evolution of phishing attacks, examine the current state of AI-generated text threats, and explore how HalGuard's TextShield technology is helping organizations defend against these advanced attacks.</p>
      
      <h2>The Evolution of Phishing Attacks</h2>
      
      <h3>Phase 1: Early Phishing (1990s-2000s)</h3>
      <p>The earliest phishing attacks were characterized by:</p>
      <ul>
        <li>Mass-distributed emails with minimal targeting</li>
        <li>Obvious grammatical errors and formatting issues</li>
        <li>Generic greetings and content</li>
        <li>Easily identifiable suspicious URLs</li>
      </ul>
      
      <h3>Phase 2: Spear Phishing (2010s)</h3>
      <p>As defenses improved, attackers adopted more targeted approaches:</p>
      <ul>
        <li>Research-based targeting of specific individuals</li>
        <li>Personalized content referencing real events or relationships</li>
        <li>Improved writing quality and brand impersonation</li>
        <li>More convincing domain spoofing techniques</li>
      </ul>
      
      <h3>Phase 3: AI-Generated Phishing (2020s-Present)</h3>
      <p>The current generation of phishing leverages advanced AI capabilities:</p>
      <ul>
        <li>Hyper-personalized content generated from social media analysis</li>
        <li>Perfect grammar and natural writing style matching the impersonated sender</li>
        <li>Content that references real-time events and organizational context</li>
        <li>Multi-channel attacks coordinated across email, messaging, and voice</li>
        <li>Adaptive tactics that respond to user behavior</li>
      </ul>
      
      <h2>Case Study: The 2024 Financial Services Attack</h2>
      
      <p>In late 2024, a sophisticated phishing campaign targeted employees at major financial institutions using AI-generated text personalized for each recipient. The attackers used the following techniques:</p>
      
      <ol>
        <li><strong>Data Harvesting:</strong> The attackers compiled comprehensive profiles on targets using publicly available information from professional networking sites, social media, and company websites.</li>
        <li><strong>Content Generation:</strong> Using advanced language models, they created personalized messages referencing real projects, colleagues, and upcoming events specific to each target.</li>
        <li><strong>Style Matching:</strong> The AI analyzed previous communications from impersonated executives to match writing style, vocabulary, and communication patterns.</li>
        <li><strong>Contextual Awareness:</strong> Messages referenced current news affecting the financial sector and specific organizational initiatives.</li>
      </ol>
      
      <p>The attack resulted in several successful credential harvesting incidents and at least two instances of fraudulent wire transfers before traditional security systems identified the campaign.</p>
      
      <h2>The Technical Evolution of Text Generation</h2>
      
      <p>The capabilities of text generation systems have evolved dramatically:</p>
      
      <ul>
        <li><strong>2020: Early Large Language Models</strong> - Capable of generating convincing general text but with limited personalization</li>
        <li><strong>2022: Context-Aware Models</strong> - Able to incorporate specific details and maintain stylistic consistency</li>
        <li><strong>2023: Personality Simulation</strong> - Systems that could mimic specific writing styles and personality traits</li>
        <li><strong>2024: Adaptive Generation</strong> - Models that adjust content based on recipient responses</li>
        <li><strong>2025: Multi-modal Integration</strong> - Text generation coordinated with voice and video synthesis for comprehensive impersonation</li>
      </ul>
      
      <h2>How HalGuard TextShield Detects AI-Generated Phishing</h2>
      
      <p>HalGuard's TextShield employs multiple detection methods to identify even the most sophisticated AI-generated phishing attempts:</p>
      
      <ol>
        <li><strong>Linguistic Forensics:</strong> Advanced analysis of text patterns that can identify synthetic content even when it appears perfect to human readers.</li>
        <li><strong>Behavioral Context Analysis:</strong> Evaluation of message context against established communication patterns within the organization.</li>
        <li><strong>Sender Verification Matrix:</strong> Multi-factor authentication of sender identity beyond traditional email headers.</li>
        <li><strong>Intent Analysis:</strong> Identification of requests or suggestions that deviate from normal operations.</li>
        <li><strong>Temporal Anomaly Detection:</strong> Recognition of unusual timing or urgency in communications.</li>
      </ol>
      
      <h2>Implementing Text Security in Your Organization</h2>
      
      <p>To protect against AI-generated phishing, organizations should:</p>
      
      <ul>
        <li>Deploy advanced text analysis tools like HalGuard TextShield</li>
        <li>Establish verification protocols for sensitive requests</li>
        <li>Implement continuous security awareness training focused on the latest threats</li>
        <li>Create clear communication policies, especially for financial transactions</li>
        <li>Develop incident response plans specific to synthetic text attacks</li>
      </ul>
      
      <h2>The Future of Phishing and Defense</h2>
      
      <p>As we look ahead, several trends are emerging:</p>
      
      <ul>
        <li>Integration of text, voice, and video in coordinated impersonation attacks</li>
        <li>Increased use of real-time personalization based on target responses</li>
        <li>Growth in defensive AI that can predict and prevent attacks before execution</li>
        <li>Development of industry-wide standards for communication authentication</li>
        <li>Regulatory frameworks requiring verification for sensitive communications</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The evolution of phishing from crude emails to sophisticated AI-generated text represents one of the most significant challenges in modern cybersecurity. As these attacks become increasingly difficult for humans to detect, organizations must implement specialized security solutions like HalGuard TextShield to protect their communications, data, and financial assets.</p>
      
      <p>Contact HalGuard today to learn how our TextShield technology can help defend your organization against the next generation of AI-powered phishing attacks.</p>
    `
  },
  {
    id: 'synthetic-media-landscape',
    title: 'The 2025 Synthetic Media Threat Landscape',
    excerpt: 'A comprehensive overview of the current synthetic media threat landscape and how organizations can build robust defense strategies.',
    category: 'General',
    image: 'https://images.pexels.com/photos/4068165/pexels-photo-4068165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'March 22, 2025',
    author: 'Dr. Michael Schmidt',
    authorRole: 'Chief Research Officer',
    content: `
      <h2>Introduction to the 2025 Synthetic Media Landscape</h2>
      
      <p>The synthetic media landscape has evolved dramatically in recent years, presenting organizations with unprecedented security challenges. This comprehensive analysis examines the current state of synthetic media threats in 2025, emerging attack vectors, and strategies for building robust defensive capabilities.</p>
      
      <h2>Key Trends in Synthetic Media Threats</h2>
      
      <h3>1. Multi-modal Attacks</h3>
      <p>The most sophisticated attacks now combine multiple synthetic media types:</p>
      <ul>
        <li>Coordinated deployment of voice, video, and text synthesis</li>
        <li>Cross-platform attacks that maintain consistency across multiple channels</li>
        <li>Sequential attack patterns that build credibility through multiple touchpoints</li>
      </ul>
      
      <h3>2. Real-time Generation</h3>
      <p>Advances in AI have enabled dynamic, real-time synthetic media generation:</p>
      <ul>
        <li>Live deepfake video during video conferences</li>
        <li>Adaptive voice synthesis that responds naturally in conversations</li>
        <li>Synthetic text generation that adjusts based on recipient responses</li>
      </ul>
      
      <h3>3. Identity-Specific Targeting</h3>
      <p>Attacks have become increasingly customized to specific individuals:</p>
      <ul>
        <li>Executive impersonation optimized for financial fraud</li>
        <li>IT personnel targeting for access to critical systems</li>
        <li>HR impersonation for sensitive data exfiltration</li>
      </ul>
      
      <h3>4. Infrastructure-level Deception</h3>
      <p>Beyond individual communications, attackers are targeting verification systems:</p>
      <ul>
        <li>Synthetic biometric data generation to defeat authentication systems</li>
        <li>Creation of entirely fictitious digital identities with consistent cross-platform presence</li>
        <li>Manipulation of digital evidence for regulatory or legal deception</li>
      </ul>
      
      <h2>Sector-Specific Threat Analysis</h2>
      
      <h3>Financial Services</h3>
      <p><strong>Primary Threats:</strong> Wire transfer fraud, investment manipulation, customer trust exploitation</p>
      <p><strong>Notable Attack Pattern:</strong> Multi-step attacks beginning with synthetic voice calls for information gathering, followed by deepfake video calls to authorize transactions</p>
      
      <h3>Healthcare</h3>
      <p><strong>Primary Threats:</strong> Insurance fraud, prescription abuse, patient data theft</p>
      <p><strong>Notable Attack Pattern:</strong> Synthetic media used to falsify patient interactions, manipulate diagnostic processes, or gain access to restricted pharmaceuticals</p>
      
      <h3>Government & Defense</h3>
      <p><strong>Primary Threats:</strong> Intelligence gathering, disinformation campaigns, credential theft</p>
      <p><strong>Notable Attack Pattern:</strong> Long-term synthetic personas used to build relationships with officials before executing targeted intelligence collection</p>
      
      <h3>Technology & Manufacturing</h3>
      <p><strong>Primary Threats:</strong> Intellectual property theft, supply chain compromise, competitive intelligence</p>
      <p><strong>Notable Attack Pattern:</strong> Convincing executive deepfakes used to direct R&D staff to share proprietary information with unauthorized parties</p>
      
      <h2>The HalGuard Approach to Synthetic Media Security</h2>
      
      <p>Effective defense against synthetic media attacks requires a comprehensive, multi-layered approach that addresses all aspects of the threat landscape:</p>
      
      <h3>The HalGuard Security Framework</h3>
      
      <ol>
        <li><strong>Detection Layer</strong>
          <ul>
            <li><strong>VoiceShield:</strong> Advanced voice authentication and synthesis detection</li>
            <li><strong>DeepShield:</strong> Real-time video analysis and deepfake detection</li>
            <li><strong>TextShield:</strong> AI-generated text identification and content verification</li>
          </ul>
        </li>
        <li><strong>Prevention Layer</strong>
          <ul>
            <li>Multi-factor authentication for sensitive actions</li>
            <li>Context-aware communication verification</li>
            <li>Out-of-band confirmation workflows</li>
          </ul>
        </li>
        <li><strong>Response Layer</strong>
          <ul>
            <li>Automated containment of suspected synthetic media</li>
            <li>Forensic analysis capabilities</li>
            <li>Structured incident response protocols</li>
          </ul>
        </li>
        <li><strong>Governance Layer</strong>
          <ul>
            <li>Synthetic media policies and procedures</li>
            <li>Staff training and awareness programs</li>
            <li>Regulatory compliance frameworks</li>
          </ul>
        </li>
      </ol>
      
      <h2>Building Organizational Resilience</h2>
      
      <p>Beyond technological solutions, organizations must develop comprehensive resilience strategies:</p>
      
      <h3>1. Technical Controls</h3>
      <ul>
        <li>Deploy multi-layered detection systems across all communications channels</li>
        <li>Implement verification protocols for sensitive communications and requests</li>
        <li>Establish secure out-of-band verification channels</li>
        <li>Develop continuous monitoring capabilities</li>
      </ul>
      
      <h3>2. Process Controls</h3>
      <ul>
        <li>Create clear authorization hierarchies for sensitive actions</li>
        <li>Implement mandatory verification steps for financial and data transactions</li>
        <li>Develop synthetic media incident response procedures</li>
        <li>Establish regular security testing including synthetic media simulations</li>
      </ul>
      
      <h3>3. People Controls</h3>
      <ul>
        <li>Conduct regular training on synthetic media recognition</li>
        <li>Develop a verification-oriented organizational culture</li>
        <li>Create clear guidelines for verifying unexpected communications</li>
        <li>Implement specific protocols for executive communications</li>
      </ul>
      
      <h2>Regulatory and Compliance Considerations</h2>
      
      <p>The regulatory landscape around synthetic media continues to evolve:</p>
      
      <ul>
        <li><strong>EU AI Act:</strong> Requires disclosure of synthetic media and verification systems for high-risk applications</li>
        <li><strong>US DEEPFAKES Accountability Act:</strong> Mandates watermarking and disclosure requirements</li>
        <li><strong>Financial Industry Requirements:</strong> Enhanced verification for financial transactions and communications</li>
        <li><strong>Industry Standards:</strong> Emerging frameworks for synthetic media detection and verification</li>
      </ul>
      
      <h2>Future Outlook: 2025-2030</h2>
      
      <p>Several trends will shape the future of synthetic media threats and defenses:</p>
      
      <ul>
        <li>Integration of quantum computing for both attack and defense capabilities</li>
        <li>Hardware-based verification technologies</li>
        <li>Development of industry-wide authentication standards</li>
        <li>Increased regulatory frameworks specifically addressing synthetic media</li>
        <li>Growing market for personal synthetic media protection</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The synthetic media threat landscape of 2025 presents significant challenges for organizations across all sectors. However, by implementing comprehensive detection systems like the HalGuard platform, developing robust verification processes, and fostering a security-conscious culture, organizations can effectively mitigate these emerging threats.</p>
      
      <p>Contact HalGuard today to learn how our integrated approach to synthetic media security can help protect your organization in this rapidly evolving threat landscape.</p>
    `
  },
  {
    id: 'voice-authentication-systems',
    title: 'Voice Authentication Systems: Strengths and Vulnerabilities',
    excerpt: 'Analyzing the effectiveness of current voice authentication systems and how they can be strengthened against synthetic voice attacks.',
    category: 'Voice Security',
    image: 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'March 5, 2025',
    author: 'Dr. Maria Klein',
    authorRole: 'Head of Voice Security Research',
    content: ''
  },
  {
    id: 'regulatory-compliance-eu',
    title: 'Synthetic Media & Regulatory Compliance in the EU',
    excerpt: 'How European regulations are evolving to address synthetic media threats and what this means for your organization&apos;s compliance strategy.',
    category: 'General',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    date: 'February 18, 2025',
    author: 'Anna Müller',
    authorRole: 'Legal Compliance Officer',
    content: ''
  }
];

const BlogPage = () => {
  const { blogId } = useParams();
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);
  
  useEffect(() => {
    if (blogId) {
      setSelectedBlog(blogId);
    } else {
      setSelectedBlog(null);
    }
  }, [blogId]);

  const blog = selectedBlog 
    ? blogs.find(b => b.id === selectedBlog) 
    : null;

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'Voice Security', label: 'Voice Security' },
    { id: 'Video Security', label: 'Video Security' },
    { id: 'Text Security', label: 'Text Security' },
    { id: 'General', label: 'General' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(post => post.category === activeCategory);

  return (
    <motion.div 
      className="pt-24 bg-gray-50 min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 md:px-8 py-10">
        {blog ? (
          <div>
            <Link 
              to="/blog"
              className="flex items-center text-blue-800 font-medium mb-8 hover:text-blue-900 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to all articles
            </Link>
            
            <AnimatedSection className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-96 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-10">
                <AnimatedSection delay={0.2} className="flex flex-wrap items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    blog.category === 'Voice Security' ? 'bg-blue-100 text-blue-800' :
                    blog.category === 'Video Security' ? 'bg-teal-100 text-teal-800' :
                    blog.category === 'Text Security' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {blog.category}
                  </span>
                  <span className="text-gray-500">{blog.date}</span>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4} className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
                    {blog.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{blog.author}</p>
                    <p className="text-sm text-gray-600">{blog.authorRole}</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.5}>
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        ) : (
          <div>
            <AnimatedSection className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HalGuard Blog</h1>
              <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Stay updated with the latest insights, case studies, and news on synthetic media security.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((blog, index) => (
                <AnimatedSection key={blog.id} delay={0.1 + (index * 0.1)}>
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 block h-full"
                  >
                    <motion.div 
                      className="h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          blog.category === 'Voice Security' ? 'bg-blue-100 text-blue-800' :
                          blog.category === 'Video Security' ? 'bg-teal-100 text-teal-800' :
                          blog.category === 'Text Security' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {blog.category}
                        </span>
                        <span className="text-sm text-gray-500 ml-auto">{blog.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                      <motion.div 
                        className="flex items-center text-blue-800 font-medium"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read article
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                      </motion.div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BlogPage;