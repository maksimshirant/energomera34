import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Logo from './Logo';
import { PLACEHOLDERS } from '@/lib/placeholders';

const FOOTER_TEXT = {
  description:
    'Точный и исправный прибор учета — это уверенность в корректных показаниях и отсутствие лишних расходов. Обратитесь к нам, и мы поможем решить задачу быстро и профессионально.',
  navigationTitle: 'Навигация',
  navigation: [
    { to: '/about', label: 'О компании' },
    { to: '/services', label: 'Услуги' },
    { to: '/price', label: 'Прайс' },
    { to: '/contacts', label: 'Контакты' },
  ],
  contactsTitle: 'Контакты',
  privacy: 'Политика обработки персональных данных',
  consent: 'Согласие на обработку персональных данных',
};

export const Footer: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-10 border-t border-border/70 bg-white/80 backdrop-blur-sm">
      <div className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <div className="max-w-md">
            <Link to="/" onClick={handleLogoClick} className="inline-flex cursor-pointer">
              <Logo />
            </Link>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">{FOOTER_TEXT.description}</p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {FOOTER_TEXT.navigationTitle}
              </h4>
              <ul className="mt-5 space-y-3">
                {FOOTER_TEXT.navigation.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={handleNavClick} className="text-sm text-foreground hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {FOOTER_TEXT.contactsTitle}
              </h4>
              <div className="mt-5 space-y-4">
                <a
                  href={`tel:${PLACEHOLDERS.phoneLink}`}
                  className="block text-lg font-semibold tracking-tight text-foreground hover:text-primary"
                >
                  {PLACEHOLDERS.phoneDisplay}
                </a>
                <a
                  href={`mailto:${PLACEHOLDERS.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4" />
                  {PLACEHOLDERS.email}
                </a>
                <p className="text-sm leading-6 text-muted-foreground">{PLACEHOLDERS.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">{PLACEHOLDERS.companyName} © 2026</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <Link
              to="/privacy"
              onClick={handleNavClick}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {FOOTER_TEXT.privacy}
            </Link>
            <Link
              to="/consent"
              onClick={handleNavClick}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {FOOTER_TEXT.consent}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
