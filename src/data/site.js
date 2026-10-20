import campusImg from '../assets/aatu campus.jpg'
import logoImg from '../assets/aatu logo.jpg'
import flierImg from '../assets/AATU-729x1024.jpg'
import vcImg from '../assets/vc-olaniyi.jpeg'
import greenChemistryCertificateImg from '../assets/green-chemistry-certificate.jpeg'
import beyondBenignLetterImg from '../assets/beyond-benign-letter.jpeg'
import vcVisitationCircularImg from '../assets/vc-visitation-circular.jpeg'

export const images = {
  campus: campusImg,
  logo: logoImg,
  flier: flierImg,
  viceChancellor: vcImg,
  greenChemistryCertificate: greenChemistryCertificateImg,
  beyondBenignLetter: beyondBenignLetterImg,
  vcVisitationCircular: vcVisitationCircularImg,
}

export const university = {
  name: 'AbdulRasaq Abubakar Toyin University',
  shortName: 'AAT University',
  abbreviation: 'AATU',
  motto: 'Advancing Generational Development',
  tagline: 'A private not-for-profit university for global citizenship',
  address: 'Oke-Ogba, Ganmo, Ilorin, Kwara State, Nigeria',
  phones: ['+234 816 839 8395', '+234 901 979 1412'],
  email: 'info.aatu@gmail.com',
  website: 'www.aatu.edu.ng',
  socials: [
    { label: 'Facebook', handle: 'AbdulRasaq Abubakar Toyin University', href: 'https://www.facebook.com/' },
    { label: 'Instagram', handle: '@aatu_ng', href: 'https://www.instagram.com/' },
    { label: 'X', handle: '@aatu_ng', href: 'https://x.com/' },
  ],
}

export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'University Overview', to: '/about' },
      { label: 'Vision & Mission', to: '/about#vision' },
      { label: 'Leadership', to: '/management' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Faculties', to: '/academics' },
      { label: 'Undergraduate Programmes', to: '/academics#programmes' },
      { label: '2026/2027 Approvals', to: '/academics#new-programmes' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    children: [
      { label: 'Entry Requirements', to: '/admissions#requirements' },
      { label: 'How to Apply', to: '/admissions#apply' },
      { label: 'Admission FAQs', to: '/admissions#faqs' },
    ],
  },
  {
    label: 'News & Media',
    to: '/news',
    children: [
      { label: 'News & Announcements', to: '/news' },
      { label: 'Campus Gallery', to: '/gallery' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const faculties = [
  {
    id: 'science',
    name: 'Faculty of Science and Computing',
    shortName: 'Science & Computing',
    code: 'FSC',
    accent: '#2563eb',
    tint: '#eff6ff',
    blurb:
      'Building the scientific, digital and analytical capability required for a knowledge-driven economy.',
    programmes: [
      'biochemistry',
      'biotechnology',
      'computer-science',
      'cyber-security',
      'information-technology',
      'software-engineering',
    ],
  },
  {
    id: 'arts',
    name: 'Faculty of Arts, Management and Social Sciences',
    shortName: 'Arts, Management & Social Sciences',
    code: 'FAMSS',
    accent: '#c8102e',
    tint: '#fff1f3',
    blurb:
      'Developing thoughtful leaders, entrepreneurs and communicators with a strong sense of civic responsibility.',
    programmes: ['accounting', 'business-administration', 'economics', 'history-diplomatic-studies'],
  },
  {
    id: 'environment',
    name: 'Faculty of Architecture and Environmental Sciences',
    shortName: 'Architecture & Environmental Sciences',
    code: 'FAES',
    accent: '#0f766e',
    tint: '#effcf9',
    blurb:
      'Shaping the built environment through design excellence, sustainability and professional practice.',
    programmes: ['architecture', 'estate-management', 'quantity-surveying', 'urban-regional-planning'],
  },
]

export const programmes = [
  {
    slug: 'biochemistry',
    name: 'Biochemistry',
    award: 'B.Sc. Biochemistry',
    facultyId: 'science',
    summary:
      'Study the molecular foundations of life and develop laboratory skills for health, agriculture and industrial research.',
  },
  {
    slug: 'biotechnology',
    name: 'Biotechnology',
    award: 'B.Sc. Biotechnology',
    facultyId: 'science',
    summary:
      'Apply biological systems and modern laboratory techniques to solve problems in health, food and industry.',
  },
  {
    slug: 'computer-science',
    name: 'Computer Science',
    award: 'B.Sc. Computer Science',
    facultyId: 'science',
    summary:
      'Build a strong foundation in algorithms, software development, systems and the science behind modern computing.',
  },
  {
    slug: 'cyber-security',
    name: 'Cyber Security',
    award: 'B.Sc. Cyber Security',
    facultyId: 'science',
    summary:
      'Learn to protect systems, networks and data through secure design, ethical practice and applied defence techniques.',
  },
  {
    slug: 'information-technology',
    name: 'Information Technology',
    award: 'B.Sc. Information Technology',
    facultyId: 'science',
    summary:
      'Develop practical skills in networking, data management and enterprise technology for the modern workplace.',
  },
  {
    slug: 'software-engineering',
    name: 'Software Engineering',
    award: 'B.Sc. Software Engineering',
    facultyId: 'science',
    summary:
      'Design, build and maintain reliable software through disciplined engineering methods and collaborative practice.',
  },
  {
    slug: 'accounting',
    name: 'Accounting',
    award: 'B.Sc. Accounting',
    facultyId: 'arts',
    summary:
      'Master financial reporting, auditing and management accounting for careers in practice, industry and the public sector.',
  },
  {
    slug: 'business-administration',
    name: 'Business Administration',
    award: 'B.Sc. Business Administration',
    facultyId: 'arts',
    summary:
      'Understand how organisations are led, financed and grown in a competitive and changing business environment.',
  },
  {
    slug: 'economics',
    name: 'Economics',
    award: 'B.Sc. Economics',
    facultyId: 'arts',
    summary:
      'Analyse how individuals, markets and institutions allocate resources, with training in economic reasoning and data.',
  },
  {
    slug: 'history-diplomatic-studies',
    name: 'History and Diplomatic Studies',
    award: 'B.A. History and Diplomatic Studies',
    facultyId: 'arts',
    summary:
      'Explore the forces that shape societies, states and international relations, with a focus on evidence and interpretation.',
  },
  {
    slug: 'architecture',
    name: 'Architecture',
    award: 'B.Sc. Architecture',
    facultyId: 'environment',
    summary:
      'Combine creative design, technology and environmental awareness to shape buildings and spaces that serve people.',
  },
  {
    slug: 'estate-management',
    name: 'Estate Management',
    award: 'B.Sc. Estate Management',
    facultyId: 'environment',
    summary:
      'Study the management, valuation and development of land and property within a professional practice framework.',
  },
  {
    slug: 'quantity-surveying',
    name: 'Quantity Surveying',
    award: 'B.Sc. Quantity Surveying',
    facultyId: 'environment',
    summary:
      'Learn to manage construction costs, contracts and project value from concept through to delivery.',
  },
  {
    slug: 'urban-regional-planning',
    name: 'Urban and Regional Planning',
    award: 'B.Sc. Urban and Regional Planning',
    facultyId: 'environment',
    summary:
      'Plan sustainable, liveable places with an understanding of land use, infrastructure, communities and policy.',
  },
]

export const newProgrammes = [
  { slug: 'common-law', name: 'Common Law', award: 'LL.B. Common Law', summary: 'Professional legal education grounded in Nigerian law, advocacy and legal reasoning.' },
  { slug: 'common-islamic-law', name: 'Common and Islamic Law', award: 'LL.B. Common and Islamic Law', summary: 'A combined study of common law and Islamic jurisprudence for a broad legal career.' },
  { slug: 'nursing-science', name: 'Nursing Science', award: 'B.NSc. Nursing Science', summary: 'Evidence-based nursing education focused on compassionate, safe and effective patient care.' },
  { slug: 'medical-laboratory-science', name: 'Medical Laboratory Science', award: 'B.MLS Medical Laboratory Science', summary: 'Laboratory diagnostics and biomedical analysis for informed clinical decision-making.' },
  { slug: 'chemistry', name: 'Chemistry', award: 'B.Sc. Chemistry', summary: 'Chemical principles, laboratory practice and their application to industry and society.' },
  { slug: 'medical-physics', name: 'Medical Physics', award: 'B.Sc. Medical Physics', summary: 'The application of physics to medicine, imaging and radiation-based healthcare.' },
  { slug: 'industrial-chemistry', name: 'Industrial Chemistry', award: 'B.Sc. Industrial Chemistry', summary: 'Chemistry for manufacturing, materials, quality control and industrial processes.' },
  { slug: 'public-health', name: 'Public Health', award: 'B.Sc. Public Health', summary: 'Population health, disease prevention and the systems that protect communities.' },
  { slug: 'political-science', name: 'Political Science', award: 'B.Sc. Political Science', summary: 'Government, power and public life studied through theory, institutions and comparative analysis.' },
  { slug: 'public-administration', name: 'Public Administration', award: 'B.Sc. Public Administration', summary: 'The management of public organisations, policy delivery and public service effectiveness.' },
  { slug: 'artificial-intelligence', name: 'Artificial Intelligence', award: 'B.Sc. Artificial Intelligence', summary: 'Machine learning, intelligent systems and the responsible application of AI technology.' },
  { slug: 'community-health', name: 'Community Health', award: 'B.Sc. Community Health', summary: 'Community-based health promotion, primary care and public health practice.' },
  { slug: 'intelligence-security-studies', name: 'Intelligence and Security Studies', award: 'B.Sc. Intelligence and Security Studies', summary: 'Security analysis, intelligence practice and the study of contemporary threats.' },
  { slug: 'microbiology', name: 'Microbiology', award: 'B.Sc. Microbiology', summary: 'The study of microorganisms and their roles in health, environment, food and industry.' },
  { slug: 'mass-communication', name: 'Mass Communication', award: 'B.Sc. Mass Communication', summary: 'Journalism, media production and strategic communication in a digital age.' },
]

export const getProgramme = (slug) => {
  const current = programmes.find((programme) => programme.slug === slug)
  if (current) {
    const faculty = faculties.find((item) => item.id === current.facultyId)
    return { ...current, faculty, isNew: false }
  }

  const upcoming = newProgrammes.find((programme) => programme.slug === slug)
  if (upcoming) {
    return {
      ...upcoming,
      faculty: null,
      isNew: true,
    }
  }

  return null
}

export const getFaculty = (id) => faculties.find((faculty) => faculty.id === id)

export const stats = [
  { value: 3, suffix: '', label: 'Founding faculties', accent: '#2563eb' },
  { value: 14, suffix: '', label: 'Programmes at take-off', accent: '#c8102e' },
  { value: 15, suffix: '', label: 'New approvals for 2026/2027', accent: '#0f766e' },
  { value: 2026, suffix: '/27', label: 'Admission session', accent: '#c9942f', static: true },
]

export const news = [
  {
    slug: 'green-chemistry-commitment',
    category: 'Academic Development',
    title: 'AATU signs Beyond Benign Green Chemistry Commitment',
    date: '2026-09-07',
    displayDate: '7 September 2026',
    readTime: '5 min read',
    image: greenChemistryCertificateImg,
    imagePosition: 'center',
    imageFit: 'contain',
    imageAspect: 'aspect-[4/3]',
    imageAlt:
      'Green Chemistry Commitment certificate presented to AbdulRasaq Abubakar Toyin University',
    imageCaption: 'Certificate of Leadership, Green Chemistry Commitment, awarded 7 September 2026.',
    excerpt:
      'The commitment places the University among more than 300 institutions worldwide advancing safer, more sustainable chemistry education.',
    featured: true,
    content: [
      'AbdulRasaq Abubakar Toyin University has signed the Beyond Benign Green Chemistry Commitment, formalising its commitment to preparing scientists and citizens to address sustainability challenges through chemistry.',
      'The certificate of leadership was awarded on 7 September 2026, following correspondence from Beyond Benign dated 28 August 2026 congratulating the University’s Physical Sciences Department on the milestone.',
      'AATU now joins more than 300 academic institutions worldwide working to advance green chemistry in higher education and better prepare students to address sustainability through chemistry.',
      'Beyond Benign noted that the growing demand for sustainable chemical products requires graduates to acquire 21st-century green chemistry competencies that can be applied in laboratories, research institutions and the chemical industry.',
      'The organisation highlighted the enormous environmental benefits that can result from the application of green chemistry, noting, for instance, that the adoption of a biobased solvent in an industrial setting could potentially achieve a 97 per cent reduction in greenhouse gas emissions.',
      'Beyond Benign also pointed to projections that the global chemicals market could double between 2017 and 2030, stressing that scientists trained in green chemistry would be critical to achieving sound chemicals management and reducing adverse environmental impacts.',
      'AATU’s participation in the Green Chemistry Commitment therefore strengthens the University’s contribution to the United Nations Sustainable Development Goals and reinforces its commitment to producing graduates equipped to provide innovative solutions to global challenges.',
      'The organisation expressed its readiness to continue collaborating with AATU and sharing best practices on the integration of green chemistry into courses and academic programmes.',
      'In his reaction, the Vice-Chancellor, Professor Olayemi Mikail Olaniyi, said the milestone further demonstrates AATU’s commitment to its vision of developing an excellent academic and research environment that meets world-class standards while advancing generational development, innovation and global citizenship.',
      'For AATU, the Green Chemistry Commitment is not merely a recognition; it is a declaration of intent to educate a new generation of scientists capable of building a safer, cleaner and more sustainable world.',
    ],
    documents: [
      {
        src: beyondBenignLetterImg,
        alt:
          'Letter from Beyond Benign dated 28 August 2026 congratulating AATU on signing the Green Chemistry Commitment',
        label: 'Supporting document',
        title: 'Letter from Beyond Benign',
        caption:
          'Correspondence dated 28 August 2026 from Dr Amy Cannon, Executive Director of Beyond Benign, congratulating the University on signing the commitment.',
      },
    ],
  },
  {
    slug: 'vice-chancellor-faculty-visitation',
    category: 'Notice',
    title: 'Vice-Chancellor schedules visits to faculties, directorates and units',
    date: '2026-10-19',
    displayDate: '19 October 2026',
    readTime: '2 min read',
    image: campusImg,
    imagePosition: 'center',
    excerpt:
      'The two-day schedule covers the University’s faculties on 20 October and directorates and service units on 21 October 2026.',
    featured: false,
    content: [
      'The Vice-Chancellor, Professor Olayemi Mikail Olaniyi, will visit the University’s faculties, directorates and units on 20 and 21 October 2026, according to a circular issued by the Registrar’s Office.',
      'The visits begin on 20 October with the Faculty of Arts, Management and Social Sciences (10:00–11:00 a.m.), the Faculty of Architecture and Environmental Sciences (11:00 a.m.–12:00 p.m.) and the Faculty of Science and Computing (12:00–1:00 p.m.).',
      'On 21 October, the schedule covers the Directorate of Academic Planning, Registry, Bursary, Audit, Library, Student Affairs, Bookshop, Water Production, Clinic, Security, Cleaners, Hostels, CBT, ICT and University Relations. The visits begin at 10:00 a.m. and conclude at 2:15 p.m.',
      'Deans, directors and heads of departments and units have been notified of the schedule through the circular, referenced AATU/RO/062 and dated 19 October 2026.',
      'The circular was issued by the Registrar, Emmanuel Dada Obafemi. The full itinerary is reproduced in the official circular below.',
    ],
    documents: [
      {
        src: vcVisitationCircularImg,
        alt:
          'Internal memorandum dated 19 October 2026 outlining the Vice-Chancellor’s visitation schedule',
        label: 'Official circular',
        title: 'Vice-Chancellor’s visitation schedule',
        caption:
          'Circular AATU/RO/062, dated 19 October 2026, issued by the Registrar, Emmanuel Dada Obafemi.',
      },
    ],
  },
  {
    slug: 'vice-chancellor-appointment',
    category: 'University News',
    title: 'Professor Olayemi Mikail Olaniyi appointed first substantive Vice-Chancellor',
    date: '2026-09-08',
    displayDate: '8 September 2026',
    readTime: '3 min read',
    image: campusImg,
    imagePosition: 'center',
    excerpt:
      'The appointment takes effect from 4 September 2026 and marks a new chapter in the university’s academic development.',
    featured: true,
    content: [
      'AbdulRasaq Abubakar Toyin University has announced the appointment of Professor Olayemi Mikail Olaniyi as its first substantive Vice-Chancellor, effective from 4 September 2026.',
      'The Vice-Chancellor leads the academic and administrative affairs of the university and works with the Governing Council to advance the institution’s mission, academic standards and long-term development.',
      'The university community is invited to follow official channels for further information on the leadership and academic direction of the institution.',
      'His full profile, including academic qualifications, research record and institutional responsibilities, is available on the Leadership page.',
    ],
  },
  {
    slug: '2026-2027-admissions-open',
    category: 'Announcement',
    title: '2026/2027 undergraduate admission exercise now open',
    date: '2026-10-01',
    displayDate: '1 October 2026',
    readTime: '2 min read',
    image: campusImg,
    imagePosition: '70% 40%',
    excerpt:
      'Prospective candidates can now review entry requirements, available programmes and the application guidance for the new session.',
    featured: true,
    content: [
      'The university has opened its 2026/2027 undergraduate admission exercise across its approved faculties and programmes.',
      'Candidates applying through UTME are expected to meet the university and JAMB-approved cut-off marks, and must possess a minimum of five O’Level credits including English Language and Mathematics, obtained in not more than two sittings from recognised examination bodies.',
      'Direct Entry candidates must hold relevant qualifications from accredited institutions, including A-Level qualifications or equivalents, university degrees, ND, HND or NCE, in addition to the approved JAMB and JUPEB requirements.',
      'Prospective students should review the full entry requirements on the Admissions page and contact the Admissions Office directly for guidance on their specific qualifications.',
    ],
  },
  {
    slug: 'nuc-approves-fifteen-programmes',
    category: 'Academic Development',
    title: 'Additional 15 undergraduate programmes approved for 2026/2027',
    date: '2026-06-18',
    displayDate: '18 June 2026',
    readTime: '4 min read',
    image: campusImg,
    imagePosition: '30% center',
    excerpt:
      'The newly approved programmes expand AATU’s academic portfolio across law, health sciences, computing and the social sciences.',
    featured: false,
    content: [
      'Public reporting in June 2026 announced the approval of 15 additional undergraduate programmes at AbdulRasaq Abubakar Toyin University, with commencement approved for the 2026/2027 academic session.',
      'The reported programmes include Common Law, Common and Islamic Law, Nursing Science, Medical Laboratory Science, Chemistry, Medical Physics, Industrial Chemistry, Public Health, Political Science, Public Administration, Artificial Intelligence, Community Health, Intelligence and Security Studies, Microbiology and Mass Communication.',
      'The approvals build on the university’s initial academic offering and broaden opportunities for students across the sciences, health, law, computing and social sciences.',
      'Programme availability is subject to the university’s official admission process. Prospective candidates should confirm current admission status with the Admissions Office before applying.',
    ],
  },
  {
    slug: 'admission-requirements-released',
    category: 'Admission',
    title: 'Admission requirements for the 2026/2027 session',
    date: '2026-09-24',
    displayDate: '24 September 2026',
    readTime: '3 min read',
    image: flierImg,
    imagePosition: 'center',
    excerpt:
      'A summary of UTME and Direct Entry requirements, alongside the full list of programmes available across the university.',
    featured: false,
    content: [
      'The university has published its admission requirements for the 2026/2027 academic session.',
      'UTME candidates must meet the JAMB and university-approved cut-off marks and possess a minimum of five O’Level credits, including English Language and Mathematics, obtained in not more than two sittings from recognised examination bodies.',
      'Direct Entry candidates must hold relevant A-Level qualifications or equivalents, including university degrees from accredited institutions and bodies. Candidates may also be considered with a minimum of Upper Credit at ND, Lower Credit at HND, or Merit in NCE, alongside the university’s approved JAMB and JUPEB cut-off points.',
      'Candidates are advised to review the full requirements and confirm their specific qualifications with the Admissions Office before completing an application.',
    ],
  },
  {
    slug: 'campus-ready-for-academic-take-off',
    category: 'Campus',
    title: 'Campus facilities take shape ahead of academic take-off',
    date: '2025-11-18',
    displayDate: '18 November 2025',
    readTime: '3 min read',
    image: campusImg,
    imagePosition: 'left center',
    excerpt:
      'Teaching spaces, library resources, laboratories and computing facilities have been developed to support the university’s academic programmes.',
    featured: false,
    content: [
      'Ahead of its academic take-off, AbdulRasaq Abubakar Toyin University has developed core facilities to support teaching, learning and research.',
      'Public reporting has described the development of academic facilities, library resources, laboratories and computing facilities on the university’s campus in Oke-Ogba, Ganmo, Ilorin, Kwara State.',
      'The campus environment is designed to provide students with a focused setting for study and academic engagement.',
      'Further information on facilities and student services will be published as it is confirmed by the university.',
    ],
  },
  {
    slug: 'admissions-office-guidance',
    category: 'Notice',
    title: 'Guidance for candidates on verifying admission information',
    date: '2026-10-12',
    displayDate: '12 October 2026',
    readTime: '2 min read',
    image: campusImg,
    imagePosition: 'right center',
    excerpt:
      'Candidates are encouraged to confirm programme availability, requirements and application details directly with the Admissions Office.',
    featured: false,
    content: [
      'As the 2026/2027 admission exercise continues, prospective candidates are advised to rely on official university information when preparing their applications.',
      'Programme availability, entry qualifications and admission timelines should be confirmed directly with the Admissions Office before any payment or submission.',
      'Candidates can reach the university through the official telephone numbers and email address published on the website.',
      'The university will continue to update this website with verified admission information for the benefit of all applicants.',
    ],
  },
]

export const getArticle = (slug) => news.find((item) => item.slug === slug)

export const admissionRequirements = {
  utme: {
    title: 'UTME Candidates',
    points: [
      'Meet the JAMB and university-approved cut-off marks.',
      'Possess a minimum of five (5) O’Level credits, including English Language and Mathematics.',
      'Results must be obtained from recognised examination bodies.',
      'Credits must be obtained in not more than two sittings.',
    ],
  },
  directEntry: {
    title: 'Direct Entry Candidates',
    points: [
      'Hold relevant A-Level qualifications or equivalent qualifications from accredited institutions and bodies.',
      'University degrees from accredited institutions are also considered.',
      'Minimum of Upper Credit at ND, Lower Credit at HND, or Merit in NCE.',
      'Meet AATU’s approved JAMB and JUPEB cut-off points.',
      'All qualifications are subject to verification by the Admissions Office.',
    ],
  },
}

export const admissionSteps = [
  {
    step: '01',
    title: 'Review your eligibility',
    description:
      'Check the entry requirements for your preferred programme and confirm that your O’Level or Direct Entry qualifications meet the minimum standard.',
  },
  {
    step: '02',
    title: 'Select AAT University through JAMB',
    description:
      'UTME and Direct Entry candidates should indicate AbdulRasaq Abubakar Toyin University as their institution of choice through the appropriate JAMB process.',
  },
  {
    step: '03',
    title: 'Prepare your documents',
    description:
      'Gather your O’Level results, UTME or Direct Entry documents, birth certificate, state of origin certificate and recent passport photographs.',
  },
  {
    step: '04',
    title: 'Contact the Admissions Office',
    description:
      'Reach the Admissions Office to confirm screening arrangements, programme availability and the next steps for your application.',
  },
]

export const admissionFaqs = [
  {
    question: 'What are the general UTME entry requirements?',
    answer:
      'Candidates must meet the JAMB and university-approved cut-off marks and possess a minimum of five O’Level credits, including English Language and Mathematics, obtained in not more than two sittings from recognised examination bodies.',
  },
  {
    question: 'Can I combine results from two sittings?',
    answer:
      'Yes. The admission requirements allow O’Level credits obtained in not more than two sittings. Candidates should confirm that their subject combination meets the specific programme requirement.',
  },
  {
    question: 'What qualifications are accepted for Direct Entry?',
    answer:
      'Relevant A-Level qualifications or equivalents, university degrees from accredited institutions, ND with a minimum of Upper Credit, HND with a minimum of Lower Credit, or NCE with a minimum of Merit. Candidates must also meet the approved JAMB and JUPEB requirements.',
  },
  {
    question: 'Are the newly approved programmes open for admission?',
    answer:
      'The additional programmes were reported as approved for commencement in the 2026/2027 session. Candidates should confirm the admission status of a specific programme directly with the Admissions Office before applying.',
  },
  {
    question: 'How do I confirm my admission status?',
    answer:
      'Contact the Admissions Office using the official telephone numbers or email address published on the Contact page. Always rely on official university communication for admission decisions.',
  },
  {
    question: 'Where is the university located?',
    answer:
      'The university is located at Oke-Ogba, Ganmo, Ilorin, Kwara State, Nigeria. Prospective students and visitors are advised to confirm arrangements before travelling to the campus.',
  },
]

export const leadership = {
  viceChancellor: {
    name: 'Professor Olayemi Mikail Olaniyi',
    shortName: 'Professor Olaniyi',
    role: 'Vice-Chancellor',
    title: 'First Substantive Vice-Chancellor',
    institution: 'AbdulRasaq Abubakar Toyin University (AATU)',
    campus: 'Ganmo, Kwara State, Nigeria',
    effective: 'Appointed 4 September 2026',
    appointmentDate: '2026-09-04',
    birthDate: '1979-09-14',
    birthPlace: 'Ibadan, Oyo State, Nigeria',
    nationality: 'Nigerian',
    initials: 'OO',
    image: vcImg,
    imagePosition: 'center top',
    summary:
      'A Professor of Computer Engineering and former Dean of the Faculty of Computing at the National Open University of Nigeria, Professor Olaniyi brings two decades of academic distinction, research leadership and institutional experience to AATU.',
    bio: [
      'Professor Olayemi Mikail Olaniyi is a Professor of Computer Engineering and the first substantive Vice-Chancellor of AbdulRasaq Abubakar Toyin University (AATU), Ganmo, Kwara State. He was appointed to the office in September 2026.',
      'A former Dean of the Faculty of Computing at the National Open University of Nigeria (NOUN), he brings to the office two decades of academic distinction across Computer Security, Intelligent and Embedded Systems, Applied Medical Informatics, and Open and Distance Learning, together with extensive institutional and administrative experience.',
    ],
    stats: [
      { value: '20+', label: 'Years in academia' },
      { value: '195+', label: 'Publications' },
      { value: '₦350m+', label: 'Research grants secured' },
      { value: '1,844', label: 'Google Scholar citations' },
    ],
    quickFacts: [
      { label: 'Full name', value: 'Olayemi Mikail Olaniyi' },
      { label: 'Date of birth', value: '14 September 1979' },
      { label: 'Age', value: '47 years (2026)' },
      { label: 'Place of birth', value: 'Ibadan, Oyo State, Nigeria' },
      { label: 'Nationality', value: 'Nigerian' },
      { label: 'Profession', value: 'Academic and Engineer' },
      { label: 'Current position', value: 'Vice-Chancellor, AATU' },
      { label: 'Previous role', value: 'Dean, Faculty of Computing, NOUN' },
      { label: 'Appointment', value: '4 September 2026' },
      { label: 'Marital status', value: 'Married' },
    ],
    specialisations: [
      'Computer Security',
      'Intelligent and Embedded Systems',
      'Applied Medical Informatics',
      'Open and Distance Learning',
    ],
    memberships: [
      'Nigerian Computer Society (NCS)',
      'Institute of Electrical and Electronics Engineers (IEEE)',
      'Association for Computing Machinery (ACM)',
      'International Association of Engineers (IAENG)',
      'Institute of Research Engineers and Doctors (IRED)',
      'Cyber Security Experts Association of Nigeria (CSEAN)',
      'National Institute of Professional Engineers and Scientists (NIPES)',
      'Registered Computer Engineer, Council for the Regulation of Engineering in Nigeria (COREN)',
    ],
    education: [
      {
        year: '1999',
        qualification: 'National Diploma in Computer Technology',
        institution: 'Federal Polytechnic, Offa, Kwara State',
        note: 'Upper Credit',
      },
      {
        year: '2005',
        qualification: 'B.Tech in Computer Engineering',
        institution: 'Ladoke Akintola University of Technology (LAUTECH), Ogbomoso',
      },
      {
        year: '2011',
        qualification: 'M.Sc. in Electronic and Computer Engineering',
        institution: 'Lagos State University (LASU), Ojo, Lagos',
        note: 'Distinction',
      },
      {
        year: '2015',
        qualification: 'Ph.D. in Computer Science and Engineering',
        institution: 'Ladoke Akintola University of Technology (LAUTECH), Ogbomoso',
        note: 'Specialisation: Computer Security',
      },
    ],
    career: [
      {
        period: '2007',
        role: 'Graduate Assistant',
        organisation: 'Bells University of Technology, Ota, Ogun State',
        detail:
          'Began his academic career in the Department of Computer Science, and later in Electrical and Electronics Engineering.',
      },
      {
        period: '2021',
        role: 'Professor of Computer Engineering',
        organisation: 'Federal University of Technology, Minna (FUTMINNA)',
        detail:
          'Rose through the academic ranks to a professorship in the Department of Computer Engineering.',
      },
      {
        period: 'Aug 2025 – Sept 2026',
        role: 'Dean, Faculty of Computing',
        organisation: 'National Open University of Nigeria (NOUN), Abuja',
        detail:
          'Provided academic and administrative leadership for the Faculty of Computing.',
      },
      {
        period: '4 Sept 2026',
        role: 'Vice-Chancellor',
        organisation: 'AbdulRasaq Abubakar Toyin University (AATU)',
        detail:
          'Appointed the university’s first substantive Vice-Chancellor.',
      },
    ],
    administrativeRoles: [
      {
        period: 'Aug 2025 – Sept 2026',
        role: 'Dean, Faculty of Computing',
        organisation: 'National Open University of Nigeria (NOUN), Abuja',
      },
      {
        period: 'Mar 2026 – Sept 2026',
        role: 'Chairman, Ad-hoc Committee on Cybersecurity Capacity Building',
        organisation: 'NOUN IT Board',
      },
      {
        period: '2024 – 2025',
        role: 'Head of Department, Cybersecurity',
        organisation: 'Faculty of Computing, NOUN, Abuja',
      },
      {
        period: 'Apr 2024 – Jan 2025',
        role: 'Chairman, Postgraduate Committee',
        organisation: 'Faculty of Computing, NOUN, Abuja',
      },
      {
        period: 'May 2021 – Oct 2023',
        role: 'Deputy Dean, School of Electrical and Electronics Engineering',
        organisation: 'FUTMINNA, Niger State',
      },
      {
        period: 'May 2021 – Oct 2023',
        role: 'Chairman, Postgraduate Board',
        organisation: 'School of Electrical Engineering and Technology (SEET), FUTMINNA',
      },
      {
        period: 'Apr 2023',
        role: 'Co-Chairman, International Engineering Conference (IEC)',
        organisation: 'School of Electrical Engineering and Technology, FUTMINNA',
      },
      {
        period: '2016/2017',
        role: 'Chairman, Information Technology Sub-Committee',
        organisation: 'School of Engineering and Engineering Technology, IEC',
      },
      {
        period: 'Oct 2012 – Sept 2014',
        role: 'Head of Department, Computer Engineering',
        organisation: 'FUTMINNA, Niger State',
      },
    ],
    research: {
      summary:
        'Professor Olaniyi has authored or co-authored over 195 publications across national and international book chapters and journals, and has been an active participant at conferences worldwide. He has secured several academic development grants valued at over ₦350 million.',
      highlight:
        'His research spans Computer Security, Intelligent and Embedded Systems, Applied Medical Informatics, and Open and Distance Learning.',
      scholar: {
        citations: '1,844',
        hIndex: '21',
      },
    },
    accreditation: [
      'As Acting Head of the Department of Computer Engineering at FUTMINNA, he led the department to full accreditation by the Council for the Regulation of Engineering in Nigeria (COREN).',
      'As the pioneer substantive Head of the Department of Cybersecurity at NOUN, he led the department to full accreditation by the National Universities Commission (NUC).',
      'He has served as chairman and member of NUC accreditation panels across several Nigerian universities.',
      'He has served as an external examiner for undergraduate programmes in Computing and Engineering, and as an external assessor for the promotion of Associate Professors and Professors at universities in Nigeria and the diaspora.',
    ],
    awards: [
      {
        title: 'Best Graduating M.Sc. Student',
        detail:
          'Department of Electronic and Computer Engineering, Lagos State University, Ojo, Lagos.',
      },
      {
        title: 'Bronze, Silver and Gold Medals',
        detail:
          'Coach, National ACM/ICPC Programming Contest, Bells University of Technology, Ota (2009, 2010, 2011).',
      },
      {
        title: 'Award of Commitment and Dedication to Service',
        detail:
          'SERVICOM Unit, Federal University of Technology, Minna, Niger State (2014).',
      },
      {
        title: 'Award of Recognition for Research Support',
        detail:
          'International Conference on Science, Technology, Education, Arts, Management and Social Sciences (ISTEAMS), SMART Africa / University of Benin (2015).',
      },
    ],
    personalLife: [
      'Professor Olaniyi advocates discipline, synergy and resilience as essential ingredients for achieving institutional goals.',
      'He is known for his selflessness, kindness, collaborative spirit and humility, and holds firmly to the belief that determination and commitment make set objectives achievable. He places great value on self-discipline and on mentoring others toward excellence.',
      'He is married and blessed with children.',
    ],
  },
  offices: [
    {
      role: 'Registrar',
      description:
        'Custodian of university records and secretary to the Governing Council, supporting governance and academic administration.',
    },
    {
      role: 'Bursar',
      description:
        'Responsible for the university’s financial management, budgeting, accounting and financial controls.',
    },
    {
      role: 'University Librarian',
      description:
        'Leads library services, academic resources and information support for teaching, learning and research.',
    },
  ],
  governance: [
    {
      title: 'Governing Council',
      description:
        'Provides strategic oversight for the university, including institutional policy, financial stewardship and the appointment of principal officers.',
    },
    {
      title: 'University Management',
      description:
        'Coordinates the day-to-day academic and administrative operations of the university under the leadership of the Vice-Chancellor.',
    },
    {
      title: 'Academic Board',
      description:
        'Oversees academic standards, curriculum development, examinations and the quality of teaching and learning.',
    },
  ],
}

export const gallery = [
  {
    title: 'The main campus',
    caption: 'A view across the university’s campus in Oke-Ogba, Ganmo, Ilorin.',
    image: campusImg,
    position: 'center',
    span: 'wide',
  },
  {
    title: 'Academic complex',
    caption: 'Teaching and learning spaces prepared for the university’s academic programmes.',
    image: campusImg,
    position: '30% 60%',
    span: '',
  },
  {
    title: 'Administration',
    caption: 'The administrative heart of the university campus.',
    image: campusImg,
    position: '75% 55%',
    span: '',
  },
  {
    title: 'Campus drive',
    caption: 'Access roads and landscaping across the university environment.',
    image: campusImg,
    position: '50% 90%',
    span: '',
  },
  {
    title: 'The university crest',
    caption: 'The AAT University identity and its motto: Advancing Generational Development.',
    image: logoImg,
    position: 'center',
    span: '',
    contain: true,
  },
  {
    title: 'A campus built for focus',
    caption: 'A calm environment designed to support study, research and community.',
    image: campusImg,
    position: '20% 20%',
    span: 'wide',
  },
]

export const campuses = [
  {
    title: 'Oke-Ogba Campus',
    location: 'Ganmo, Ilorin, Kwara State',
    description:
      'The university’s campus provides academic facilities, library resources, laboratories and computing infrastructure in a focused learning environment.',
  },
]

export const quickLinks = [
  { label: 'About the University', to: '/about' },
  { label: 'Academic Programmes', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'University Management', to: '/management' },
  { label: 'News & Announcements', to: '/news' },
  { label: 'Campus Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]
