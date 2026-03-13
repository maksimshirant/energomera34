import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { PLACEHOLDERS } from '@/lib/placeholders';
import { services } from '@/lib/services';

const HEADER_TEXT = {
  about: 'О компании',
  services: 'Услуги',
  price: 'Прайс',
  contacts: 'Контакты',
  request: 'Оставить заявку',
  openMenu: 'Открыть меню',
  closeMenu: 'Закрыть меню',
  callAria: (phone: string) => `Позвонить ${phone}`,
  mobileNav: [
    { to: '/about', label: 'О компании' },
    { to: '/services', label: 'Услуги' },
    { to: '/price', label: 'Прайс' },
    { to: '/contacts', label: 'Контакты' },
  ],
};

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');

  const handleLogoClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileNavClick = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestClick = () => {
    setMobileOpen(false);
    onOpenModal();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white shadow-[0_10px_40px_-28px_rgba(15,23,42,0.18)] xl:bg-white/99 xl:backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between md:h-[72px]">
        <Link to="/" onClick={handleLogoClick} className="cursor-pointer">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'
            }`}
          >
            {HEADER_TEXT.about}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isServicesActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
            >
              {HEADER_TEXT.services}
              <ChevronDown className="h-4 w-4" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                <div className="rounded-2xl border border-border/70 bg-white py-2 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/price"
            className={`text-sm font-medium transition-colors ${
              isActive('/price') ? 'text-primary' : 'text-gray-700 hover:text-primary'
            }`}
          >
            {HEADER_TEXT.price}
          </Link>
          <Link
            to="/contacts"
            className={`text-sm font-medium transition-colors ${
              isActive('/contacts') ? 'text-primary' : 'text-gray-700 hover:text-primary'
            }`}
          >
            {HEADER_TEXT.contacts}
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`mailto:${PLACEHOLDERS.email}`}
            className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-primary"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-primary/8 text-primary">
              <Mail className="h-4 w-4" />
            </div>
            {PLACEHOLDERS.email}
          </a>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PLACEHOLDERS.phoneLink}`}
              aria-label={HEADER_TEXT.callAria(PLACEHOLDERS.phoneDisplay)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-primary/8 text-primary transition-colors hover:border-primary/30 hover:bg-primary/12"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PLACEHOLDERS.phoneLink}`}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {PLACEHOLDERS.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${PLACEHOLDERS.phoneLink}`}
            aria-label={HEADER_TEXT.callAria(PLACEHOLDERS.phoneDisplay)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-primary/15 bg-primary/8 text-primary shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/12"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? HEADER_TEXT.closeMenu : HEADER_TEXT.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-white text-foreground shadow-sm"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-white md:hidden">
          <div className="section-shell flex flex-col gap-3 py-4">
            {HEADER_TEXT.mobileNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleMobileNavClick}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive(item.to) ? 'bg-primary/12 text-foreground' : 'bg-secondary/40 text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleRequestClick}
              className="rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {HEADER_TEXT.request}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
