import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    solutions: [
      { label: "Push-to-Talk Systems", href: "#solutions" },
      { label: "GPS Fleet Tracking", href: "#solutions" },
      { label: "Body-Worn Cameras", href: "#solutions" },
      { label: "Dispatch Platforms", href: "#solutions" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Why EdgKonnect", href: "#why-us" },
      { label: "Industries", href: "#industries" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-[#02112a] border-t border-[#1a4a7a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/logo_full_white.png"
                alt="EdgKonnect"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-[#CAF0F8]/60 mb-6 max-w-sm leading-relaxed">
              Powering real-time communication and operational visibility for
              organizations that cannot afford communication failure.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#CAF0F8] font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {links.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#CAF0F8]/60 hover:text-[#45D6A8] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#CAF0F8] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#CAF0F8]/60 hover:text-[#45D6A8] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#CAF0F8]/60">
              <Mail className="w-4 h-4 text-[#45D6A8] shrink-0" />
              <span className="text-sm">info@edgkonnect.com</span>
            </div>
            <div className="flex items-start gap-3 text-[#CAF0F8]/60">
              <Phone className="w-4 h-4 text-[#45D6A8] shrink-0 mt-0.5" />
              <div className="text-sm">
                <p>09064045984</p>
                <p>07038605237</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-[#CAF0F8]/60">
              <MapPin className="w-4 h-4 text-[#45D6A8] shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-[#CAF0F8]/80">Abuja Office:</p>
                <p>101B Ebitu Ukiwe Street Jabi Abuja</p>
                <p className="font-medium text-[#CAF0F8]/80 mt-2">
                  Lagos Office:
                </p>
                <p>Legacy Place, Lekki, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#1a4a7a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#CAF0F8]/40 text-sm">
            © {currentYear} EdgKonnect. All rights reserved.
          </p>
          <p className="text-[#CAF0F8]/40 text-sm">
            Powered by Vintage Marketing Agency
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#CAF0F8]/40 hover:text-[#45D6A8] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#CAF0F8]/40 hover:text-[#45D6A8] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#CAF0F8]/40 hover:text-[#45D6A8] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
