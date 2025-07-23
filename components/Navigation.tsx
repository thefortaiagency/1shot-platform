export default function Navigation() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];
  
  return (
    <nav className="relative z-30 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <div className="flex gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}