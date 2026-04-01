import { LabPanelIcon, NodesIcon, PulseBadgeIcon, TeamGridIcon } from '@/components/icons/AboutFeatureIcons';
import partner1 from '../../партнеры/1.png';
import partner2 from '../../партнеры/2.png';
import partner3 from '../../партнеры/3.png';
import partner5 from '../../партнеры/5.png';
import partner6 from '../../партнеры/6.png';
import partner7 from '../../партнеры/Снимок экрана 2026-03-13 в 14.24.56.png';

export const ABOUT_ACHIEVEMENTS = [
  {
    icon: PulseBadgeIcon,
    title: 'Работаем более 20 лет',
    description: 'За это время сформировали устойчивую практику и выстроили понятные, надежные процессы работы с заказчиками.',
  },
  {
    icon: TeamGridIcon,
    title: 'В штате — квалифицированные инженеры и метрологи',
    description: 'Команда специалистов обеспечивает технически грамотный подход, точность выполнения работ и соблюдение профильных требований.',
  },
  {
    icon: LabPanelIcon,
    title: 'Собственный сервисный центр с аккредитованной лабораторией',
    description: 'Это позволяет оперативно выполнять поверку, диагностику и ремонт оборудования с контролем качества на каждом этапе.',
  },
  {
    icon: NodesIcon,
    title: 'Более 600 обслуживаемых узлов учета',
    description: 'Накопленный опыт работы с большим количеством объектов позволяет уверенно решать задачи различной сложности.',
  },
];

export const ABOUT_HISTORY_TEXT = {
  title: 'Наша история',
  paragraphs: [
    'Наша компания начала свой путь в 1997 году и работает на рынке товаров и услуг в области энергосбережения. За это время организация зарекомендовала себя как надежная и стабильная компания.',
    'Все это позволяет в полной мере реализовывать свои обязательства перед клиентами и партнерами.',
  ],
  resultTitle:
    'За эти годы нами выполнена работа по установке, обслуживанию и поверке узлов коммерческого учета различных ресурсов в Волжском и Волгограде:',
  results: [
    'Многоквартирные жилые дома',
    'Муниципальные учреждения Управления здравоохранения',
    'Муниципальные учреждения Управления образования',
    'Здания администрации',
    'Объекты соцкультбыта',
    'Различные организации',
  ],
};

export const ABOUT_CLIENTS_TEXT = {
  title: 'Мы являемся официальным сервисным центром компаний',
};

export const ABOUT_CLIENTS = [
  { id: 1, image: partner1 },
  { id: 2, image: partner2 },
  { id: 3, image: partner3 },
  { id: 4, image: partner5 },
  { id: 5, image: partner6 },
  { id: 6, image: partner7 },
];

export const ABOUT_CERTIFICATES_TEXT = {
  title: 'Лицензии и сертификаты',
  open: 'Открыть',
  prev: 'Назад',
  next: 'Вперёд',
};

export const ABOUT_CERTIFICATES = [
  {
    id: 1,
    name: 'Сертификат 01',
    gradientClass: 'from-slate-950 via-slate-800 to-cyan-600',
  },
  {
    id: 2,
    name: 'Сертификат 02',
    gradientClass: 'from-slate-900 via-cyan-700 to-sky-400',
  },
  {
    id: 3,
    name: 'Сертификат 03',
    gradientClass: 'from-slate-900 via-slate-700 to-cyan-500',
  },
  {
    id: 4,
    name: 'Сертификат 04',
    gradientClass: 'from-slate-950 via-sky-700 to-cyan-500',
  },
  {
    id: 5,
    name: 'Сертификат 05',
    gradientClass: 'from-slate-900 via-slate-600 to-sky-400',
  },
  {
    id: 6,
    name: 'Сертификат 06',
    gradientClass: 'from-slate-950 via-cyan-800 to-teal-500',
  },
];
