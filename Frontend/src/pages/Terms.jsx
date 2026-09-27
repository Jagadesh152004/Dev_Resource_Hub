import { ShieldCheck, Info, FileText, AlertTriangle, Scale, MonitorPlay, Copyright, Mail } from 'lucide-react';
import NavRouter from "../components/NavRouter"

// Import your navigation and footer components
// import LandingNavbar from '../components/LandingNavbar';
// import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans selection:bg-sky-500/30">
      {/* <LandingNavbar /> */}
<NavRouter />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-sky-500/10 text-sky-400 rounded-full mb-6">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Terms and <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-500">Conditions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Welcome to DevResource Hub. We are dedicated to helping developers and students discover high-quality programming tutorials. By using our platform, you agree to the following terms, which are designed to keep our community safe, respect content creators, and ensure the platform runs smoothly.
          </p>
          <div className="mt-6 text-sm font-medium text-sky-400/80">
            Last Updated: September 24, 2026
          </div>
        </div>

        {/* Document Container */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="text-sky-400" size={24} />
              1. Introduction and Acceptance of Terms
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Welcome to DevResource Hub ("we," "our," or "the Platform"). These Terms and Conditions govern your access to and use of the DevResource Hub website and services. By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using the Platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Info className="text-sky-400" size={24} />
              2. Platform Purpose and Educational Disclaimer
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              DevResource Hub is a curation and discovery platform designed to help students and software developers find useful programming and technology learning resources.
            </p>
            <p className="text-gray-400 leading-relaxed">
              All curated resources are provided for educational and informational purposes only. We do not guarantee that any specific tutorial or resource will meet your individual learning needs, career goals, or technical requirements. You are responsible for independently evaluating the suitability, safety, and relevance of any resource you choose to follow.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <MonitorPlay className="text-sky-400" size={24} />
              3. Third-Party Content and External Links
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The core functionality of DevResource Hub involves organizing and displaying educational resources, primarily YouTube videos, created by third parties.
            </p>
            <ul className="space-y-3 text-gray-400 list-disc list-inside ml-2">
              <li><strong className="text-gray-300">No Ownership:</strong> DevResource Hub does not create, host, or own the YouTube videos featured on the Platform. All video content belongs to its respective creators and is hosted by YouTube.</li>
              <li><strong className="text-gray-300">No Affiliation:</strong> DevResource Hub is an independent platform. We are not affiliated with, endorsed by, or sponsored by YouTube, Google, or any of the individual content creators featured on our site unless explicitly stated.</li>
              <li><strong className="text-gray-300">Embedded Content:</strong> Videos are displayed using standard embedded players. By viewing this content, you are also subject to YouTube’s Terms of Service and applicable privacy policies.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="text-sky-400" size={24} />
              4. Acceptable Use and Prohibited Activities
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You agree to use DevResource Hub respectfully and lawfully. You are strictly prohibited from:
            </p>
            <ul className="space-y-3 text-gray-400 list-disc list-inside ml-2">
              <li>Attempting to disrupt, damage, or interfere with the proper functioning of the Platform, its servers, or its networks.</li>
              <li>Abusing, reverse-engineering, or improperly accessing our REST APIs.</li>
              <li>Using automated scripts, bots, or scrapers to extract data from the Platform where prohibited.</li>
              <li>Introducing viruses, malware, or any other malicious code.</li>
              <li>Bypassing security measures or attempting to gain unauthorized access to the admin dashboard or database.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Copyright className="text-sky-400" size={24} />
              5. Intellectual Property
            </h2>
            <p className="text-gray-400 leading-relaxed">
              While the curated videos belong to their respective creators, the original assets of DevResource Hub belong exclusively to us. This includes, but is not limited to, the platform's custom source code, database structure, UI/UX design, original text, branding, and logos. You may not copy, reproduce, or distribute our original platform assets without prior written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Scale className="text-sky-400" size={24} />
              6. Limitation of Liability & Governing Law
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To the maximum extent permitted by law, DevResource Hub and its administrators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Platform. This includes data loss, application errors, or issues arising from following technical advice provided in third-party tutorials. The service is provided on an "as is" and "as available" basis.
            </p>
            <p className="text-gray-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of <strong>[Applicable Jurisdiction]</strong>, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="text-sky-400" size={24} />
              7. Contact Information
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions, suggestions, or concerns regarding these Terms or the Platform, please contact us:
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:support@yourdomain.com" className="text-sky-400 hover:underline">support@yourdomain.com</a></p>
              <p className="text-gray-300"><strong>Website:</strong> <a href="https://www.yourdomain.com" className="text-sky-400 hover:underline">https://www.yourdomain.com</a></p>
            </div>
          </section>

        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Terms;