import { Mail, Phone, Linkedin, FileText, Flower2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white py-16 relative overflow-hidden">
      {/* Decorative flower */}
      <Flower2 className="absolute -bottom-10 -left-10 text-white/5 w-64 h-64 rotate-12" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-primary" />
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I am currently accepting inquiries for nursing opportunities and interviews. 
              Please feel free to reach out regarding my application or portfolio.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/isabelkaudani" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kaudanit@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>kaudanit@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <span>+260 77 217 3601</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Documents</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <FileText size={16} />
                    <span>Download Resume</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Isabel Kaudani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
