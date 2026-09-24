
import { Shield, Database, Eye, MonitorPlay, Cookie, Lock, Mail, FileText } from 'lucide-react';
import NavRouter from "../components/NavRouter"
// Import your navigation and footer components
// import LandingNavbar from '../components/LandingNavbar';
// import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans selection:bg-sky-500/30">
      {/* <LandingNavbar /> */}

      <NavRouter />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-sky-500/10 text-sky-400 rounded-full mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-500">Policy</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At DevResource Hub, your privacy is important to us. This policy outlines what information we collect, how it is used, and how third-party services like YouTube operate when you use our educational curation platform.
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
              1. Introduction
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Welcome to DevResource Hub. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. Because our platform is designed primarily to help you discover third-party educational content, we limit the amount of personal data we collect directly from you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="text-sky-400" size={24} />
              2. Information We Collect
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We collect minimal information to ensure the platform functions smoothly:
            </p>
            <ul className="space-y-3 text-gray-400 list-disc list-inside ml-2">
              <li><strong className="text-gray-300">Information you provide voluntarily:</strong> If you use our Contact form, we collect your name, email address, and the contents of your message.</li>
              <li><strong className="text-gray-300">Automatically collected data:</strong> Like most websites, our servers automatically record basic information when you visit. This may include your IP address, browser type, device type, operating system, and the pages you view on our site.</li>
              <li><strong className="text-gray-300">Account Data:</strong> DevResource Hub currently operates without requiring user registration. We do not collect passwords or create user profiles for public visitors.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="text-sky-400" size={24} />
              3. How We Use Your Information
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The information we collect is used strictly for the following purposes:
            </p>
            <ul className="space-y-3 text-gray-400 list-disc list-inside ml-2">
              <li>To maintain, improve, and secure the DevResource Hub platform.</li>
              <li>To analyze platform usage trends (e.g., which technologies or tutorials are most popular) to curate better content.</li>
              <li>To respond directly to your inquiries, feedback, or support requests.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <MonitorPlay className="text-sky-400" size={24} />
              4. Third-Party Content and YouTube Integration
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              DevResource Hub curates and embeds educational videos hosted by YouTube. It is important to understand how interacting with this content affects your privacy:
            </p>
            <ul className="space-y-3 text-gray-400 list-disc list-inside ml-2">
              <li>When you watch an embedded YouTube video on our platform, YouTube (Google) may collect data about your interaction, set cookies on your device, and track your viewing behavior, especially if you are logged into a Google account.</li>
              <li>DevResource Hub does not have access to, nor do we control, the data collected by YouTube.</li>
              <li>We encourage you to review Google's Privacy Policy to understand how they handle your data when you interact with embedded YouTube players.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Cookie className="text-sky-400" size={24} />
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We may use standard cookies or similar local storage technologies to enhance your browsing experience (such as remembering your theme preferences or search filters). You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of the platform may not function optimally.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-sky-400" size={24} />
              6. Data Security
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We value your trust in providing us your information, and we strive to use commercially acceptable means of protecting it. We secure our APIs and database against unauthorized access. However, please remember that no method of transmission over the internet, or method of electronic storage, is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="text-sky-400" size={24} />
              7. Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
            </p>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:privacy@yourdomain.com" className="text-sky-400 hover:underline">privacy@yourdomain.com</a></p>
              <p className="text-gray-300"><strong>Website:</strong> <a href="https://www.yourdomain.com" className="text-sky-400 hover:underline">https://www.yourdomain.com</a></p>
            </div>
          </section>

        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default PrivacyPolicy;