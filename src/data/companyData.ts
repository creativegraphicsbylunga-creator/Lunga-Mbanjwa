import { ServiceItem, ProjectCaseStudy, Pillar } from '../types';

export const COMPANY_INFO = {
  name: 'M&I Africa Holdings',
  tagline: 'Your Trusted Air Conditioning Solutions Partner',
  slogan: 'Cooling Today • Comfort Tomorrow',
  phone: '079 597 1574',
  phoneClean: '27795971574',
  address: 'No. 73 Kyalami Boulevard Estate, 1 Robin Road, Kyalami Hills, 1685',
  city: 'Kyalami Hills, Midrand',
  postalCode: '1685',
  region: 'Gauteng, South Africa',
  hours: 'Monday – Friday: 07:30 – 17:30 | Saturday: 08:00 – 13:00 | Emergency Repairs on Call',
  email: 'info@miafricaholdings.co.za',
  aboutSnippet:
    'At M&I Africa Holdings, we are committed to delivering reliable and professional air conditioning solutions for businesses and commercial properties. Our services cover air conditioning installation, maintenance and repair, helping clients maintain comfortable, efficient and reliable environments throughout the year.',
  provenExperienceSnippet:
    'With proven experience completing air conditioning installations in various shopping centres and malls across the region, we understand the importance of quality workmanship, dependable service and minimal disruption to your business.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'installation',
    number: '01',
    title: 'Air Conditioning Installation',
    subtitle: 'Engineered Precision for Commercial Facilities & Retail Centres',
    description:
      'Our professional team provides efficient installation of different types of air conditioning systems. We focus on reliable installation and quality workmanship to ensure your system operates effectively and provides the comfort your premises require.',
    benefits: [
      'Comprehensive heat load calculations & airflow zoning',
      'Minimal operational disruption to shopping mall tenants',
      'Integration with modern Building Management Systems (BMS)',
      'Certified commercial electrical & refrigerant pipework',
    ],
    features: [
      'Professional installation',
      'Efficient system setup',
      'Installation of various air conditioning systems',
      'Quality workmanship',
      'VRF/VRV multi-split & central ducted systems',
      'Rooftop package units & chiller water systems',
    ],
    recommendedFor: 'Shopping centres, malls, office parks, supermarket chains, and new commercial developments.',
    image: '/src/assets/images/commercial_ductwork_installation_1791297127528.jpg',
  },
  {
    id: 'maintenance',
    number: '02',
    title: 'Air Conditioning Maintenance',
    subtitle: 'Preventative Care for Peak Energy Efficiency & Equipment Lifespan',
    description:
      'Regular maintenance helps keep your air conditioning system performing at its best. Our maintenance services are designed to support optimal performance, energy efficiency and a longer system lifespan.',
    benefits: [
      'Reduces electricity costs through peak thermodynamic efficiency',
      'Prevents costly catastrophic compressor and coil breakdowns',
      'Maintains clean indoor air quality and sanitization for visitors',
      'Custom SLA maintenance contracts (quarterly & biannual visits)',
    ],
    features: [
      'Improved system performance',
      'Better energy efficiency',
      'Preventative servicing',
      'Extended equipment lifespan',
      'Reliable operation',
      'Chemical coil washing & filter sanitization',
    ],
    recommendedFor: 'Existing shopping malls, retail chains, medical suites, and corporate headquarters.',
    image: '/src/assets/images/hvac_technician_maintenance_1791297104287.jpg',
  },
  {
    id: 'repairs',
    number: '03',
    title: 'Air Conditioning Repairs',
    subtitle: 'Fast Response Diagnostics & Guaranteed Workmanship',
    description:
      'When your air conditioning system stops working properly, you need a reliable solution. Our repair services are focused on getting your system back to working condition and restoring comfort to your premises as quickly as possible.',
    benefits: [
      'Rapid diagnostic response to minimize trading downtime',
      'Experienced fault-finding for inverter PCBs, compressors, and fans',
      'Original OEM replacement components and parts warranty',
      'Emergency technician dispatch for critical retail zones',
    ],
    features: [
      'Fast response',
      'Reliable repairs',
      'Professional workmanship',
      'Solutions for air conditioning problems',
      'Restored comfort',
      'Refrigerant leak detection & re-gassing',
    ],
    recommendedFor: 'Emergency malfunctions, warm airflow complaints, noisy compressors, or sudden commercial HVAC failures.',
    image: '/src/assets/images/retail_air_conditioning_1791297116381.jpg',
  },
];

export const BRAND_PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Reliable Service',
    subtitle: 'Dependability When You Need It Most',
    description:
      'We are committed to providing dependable air conditioning services that our clients can rely on. Transparent scheduling, proactive communication, and dedicated account support ensure smooth facility operations.',
    metric: '99.4% On-Time SLA',
  },
  {
    number: '02',
    title: 'Quality Workmanship',
    subtitle: 'Standards That Stand the Test of Time',
    description:
      'Our focus is on professional service and quality workmanship across every project. From precision braze joints to clean electrical routing, our technicians build for long-term durability.',
    metric: '100% Code Compliant',
  },
  {
    number: '03',
    title: 'On-Time Delivery',
    subtitle: 'Respecting Your Business Timelines',
    description:
      'We understand the importance of completing projects efficiently and on schedule. We coordinate after-hours installations and phased retrofits to prevent retail disruptions.',
    metric: 'Zero Store Downtime',
  },
  {
    number: '04',
    title: 'Your Comfort, Our Priority',
    subtitle: 'Optimal Climate for Customers & Staff',
    description:
      'Our goal is to create comfortable environments through reliable air conditioning solutions. When customers feel comfortable, they dwell longer and businesses thrive.',
    metric: 'Year-Round Comfort',
  },
];

export const PROJECT_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    title: 'Regional Mall Central Galleria Cooling Retrofit',
    category: 'shopping-centre',
    location: 'Midrand, Gauteng',
    scope: 'Complete installation of central VRF multi-zone units across 3 retail wings with low-decibel linear diffusers.',
    systemType: 'Commercial VRF Multi-Split & Linear Vents',
    highlight: 'Completed without trading interruption during night shifts',
    image: '/src/assets/images/hero_commercial_hvac_1791297090663.jpg',
  },
  {
    id: 'proj-2',
    title: 'Commercial Boulevard Corporate Head Office',
    category: 'commercial',
    location: 'Kyalami, Midrand',
    scope: 'Turnkey HVAC setup including 40+ concealed ceiling cassette air conditioners and smart zone thermostats.',
    systemType: 'Inverter Ceiling Cassettes & BMS Control',
    highlight: '28% reduction in seasonal cooling energy consumption',
    image: '/src/assets/images/retail_air_conditioning_1791297116381.jpg',
  },
  {
    id: 'proj-3',
    title: 'Shopping Centre Food Court Extraction & AC',
    category: 'shopping-centre',
    location: 'Johannesburg North',
    scope: 'High heat-load cooling integration with dedicated make-up air ventilation and heavy-duty rooftop condensers.',
    systemType: 'Rooftop Package & Heavy Ducting',
    highlight: 'Optimized airflow for high-density customer footfall',
    image: '/src/assets/images/commercial_ductwork_installation_1791297127528.jpg',
  },
  {
    id: 'proj-4',
    title: 'Anchor Department Store Planned Maintenance',
    category: 'maintenance',
    location: 'Centurion Mall Precinct',
    scope: 'Quarterly preventative servicing agreement across 2,400m² retail floor area, including coil sanitization and pressure tests.',
    systemType: 'Preventative Maintenance Contract',
    highlight: 'Zero equipment downtime throughout peak holiday shopping season',
    image: '/src/assets/images/hvac_technician_maintenance_1791297104287.jpg',
  },
];

export const FLYER_MEDIA = [
  {
    title: 'Official Marketing Flyer - Cover',
    subtitle: 'Air Conditioning Solutions Partner & Core Services',
    url: 'https://images.openai.com/static-rsc-4/wi87c7faNL6Ba00Mve7O5E0mbmTjWVACBHoJNgx6DZA0o9aqljjU2yM4qjd178Sw_j3qseey1aBbxuCihaBNCV6_fQEoxSbs4lu44l3oa4hYNKwBWAfh0ImE5zP2VqDV48cSmjyfe7xued_Nmxn0R8kfPc6KEYpRfHntZFxgxHAYbVG6KXGvS3tXbicT4_bt?purpose=fullsize',
  },
  {
    title: 'Service Showcase - Installation & Maintenance',
    subtitle: 'Shopping Centres and Malls Experience',
    url: 'https://images.openai.com/static-rsc-4/fAhJ8mb9XbvPNnKAyPArpdCeK1Gz_E9Y36cAs9V8tiCbQcssFF2dZOpgLcuH2sFWkm4BWTbb2VVlmrJusw5O3wX6KFixfKnmEZ8oo65RXx2Ru5kFceUiAGwKhtmjG7yGO4FIar3rrK3yfId8HnIVGmsRhbltw6zNHbgCoOhvYcpSisuOUX8hOXA0gf46MBCW?purpose=fullsize',
  },
  {
    title: 'Commercial Solutions & Brand Pillars',
    subtitle: 'Reliable Service, Quality Workmanship, On-Time Delivery',
    url: 'https://images.openai.com/static-rsc-4/JRnYqO3qY1GpL5tibVKhk6Yq4mDz6zSX_Ea-JmBIrCXvTt3uYhw_YGVTHcudEjkrwpNLXr65OxkyZKmwT8eP64mSV5dGaXfbzW5u19r5nGu4s42aFKpee8MplGonVR4QY5AiCygACCh8x19uc7UXHM2rLeyME0mntYmRCbpkWkokExsd9KlXQxMLOxw6swN-?purpose=fullsize',
  },
  {
    title: 'Quotation Request & Kyalami Boulevard Office',
    subtitle: 'Contact Details: 079 597 1574 & Physical Premises',
    url: 'https://images.openai.com/static-rsc-4/5ivZ_ZsmY1iG3VWjwL3UXh8wz5LmitfIJKfs9JrZxI3dDdv5-Rh6u9ST_np_pkoBhRdRNKwvnYMBikNYzuqYVp_iGu4UkqoArgkqI-qvSo9rI96Q0-7q2NAV1GR8-cHQrG-Lc-Ywj96C-PNJCS5fovVJRyNsPjVjyZhEoyAFDoBE9XacwLTK0PWYEpWaViZM?purpose=fullsize',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What types of commercial properties do you service?',
    answer:
      'M&I Africa Holdings specializes in shopping centres, retail malls, supermarkets, office complexes, financial institutions, and corporate campuses. We also service light industrial warehouses and high-end residential estates.',
  },
  {
    question: 'How do you handle air conditioning installations in active shopping malls?',
    answer:
      'We understand that shopping centres cannot afford noise, dust, or customer disruptions during trading hours. We coordinate phased installations, overnight structural ductwork, and clean-as-we-go protocols so retail stores continue trade without interruption.',
  },
  {
    question: 'How often should commercial air conditioners be serviced?',
    answer:
      'For high-footfall commercial environments like shopping malls and busy offices, we recommend quarterly (every 3 months) preventative servicing. This keeps filters sanitized, coils free of grease/dirt, refrigerant pressure calibrated, and prevents unexpected mid-summer compressor breakdowns.',
  },
  {
    question: 'How quickly can your technicians respond to air conditioning breakdowns?',
    answer:
      'Our dedicated mobile teams operate out of Kyalami Boulevard Estate, Midrand, allowing us to respond swiftly across Midrand, Johannesburg, Centurion, and Pretoria. For contract maintenance clients, we provide prioritized emergency dispatch.',
  },
];
