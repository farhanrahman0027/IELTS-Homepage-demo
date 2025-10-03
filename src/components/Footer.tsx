import { Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-5xl font-bold mb-8">IELTS</div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white p-2 rounded">
                <div className="text-xs font-bold text-gray-700">BRITISH<br/>COUNCIL</div>
              </div>
              <div className="bg-white p-2 rounded">
                <div className="text-xs font-bold text-gray-700">IDP</div>
              </div>
            </div>
            <div className="bg-white p-2 rounded inline-block">
              <div className="text-xs font-bold text-gray-700">CAMBRIDGE<br/>English</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">About us</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Accessibility</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Complaints</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Legal & policies</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Test Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Book a test</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Prepare for IELTS</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Check your results</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">IELTS for organisations</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Test centres</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Connect with us</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-white text-red-600 p-3 hover:bg-gray-100 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white text-red-600 p-3 hover:bg-gray-100 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm leading-relaxed">
              IELTS Excellence Academy<br />
              123 Education Street<br />
              New Delhi, India 110001<br />
              <a href="mailto:info@ieltsexcellence.com" className="hover:text-gray-200">info@ieltsexcellence.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-red-700 pt-8">
          <p className="text-sm mb-4">
            © 2025. IELTS is jointly owned by the British Council; IDP IELTS; and Cambridge University Press & Assessment
          </p>
          <p className="text-sm leading-relaxed">
            IELTS, IELTS logos, and various other marks (雅思, ايلتس) and signs on this website are registered trade marks or trade marks of the IELTS Partners and are protected by relevant trade mark laws around the world. You must not use, copy, reproduce, modify, distribute, republish, display or communicate these trade marks in any way.
          </p>
        </div>
      </div>
    </footer>
  );
}
