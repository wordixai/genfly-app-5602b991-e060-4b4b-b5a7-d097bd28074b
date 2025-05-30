import { Job, Company } from '@/types';

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D',
    website: 'https://techcorp.com',
    location: 'San Francisco, CA',
    description: 'TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes. With a focus on cutting-edge technologies and user-friendly designs, we help organizations streamline their operations and achieve their digital transformation goals.',
    industry: 'Technology',
    size: '1000-5000 employees',
    founded: '2005',
  },
  {
    id: '2',
    name: 'DesignHub',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    website: 'https://designhub.io',
    location: 'New York, NY',
    description: 'DesignHub is a creative agency that combines strategic thinking with exceptional design to create memorable brand experiences. Our team of designers, developers, and strategists work together to deliver solutions that help our clients stand out in today\'s competitive market.',
    industry: 'Design & Creative',
    size: '50-200 employees',
    founded: '2012',
  },
  {
    id: '3',
    name: 'FinanceFlow',
    logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
    website: 'https://financeflow.com',
    location: 'Chicago, IL',
    description: 'FinanceFlow provides innovative financial technology solutions that empower businesses and individuals to make better financial decisions. Our platform combines advanced analytics with intuitive interfaces to simplify complex financial processes.',
    industry: 'FinTech',
    size: '200-500 employees',
    founded: '2010',
  },
  {
    id: '4',
    name: 'HealthPlus',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    website: 'https://healthplus.org',
    location: 'Boston, MA',
    description: 'HealthPlus is dedicated to improving healthcare outcomes through innovative technology solutions. We develop software that helps healthcare providers deliver better patient care while reducing administrative burdens and improving operational efficiency.',
    industry: 'Healthcare',
    size: '500-1000 employees',
    founded: '2008',
  },
  {
    id: '5',
    name: 'EcoSolutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBjb21wYW55JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D',
    website: 'https://ecosolutions.co',
    location: 'Portland, OR',
    description: 'EcoSolutions is committed to creating a sustainable future through environmentally friendly products and services. We work with businesses and communities to implement green initiatives that reduce environmental impact while promoting economic growth.',
    industry: 'Environmental Services',
    size: '100-500 employees',
    founded: '2015',
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    companyId: '1',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Frontend Developer to join our team and help build innovative web applications. The ideal candidate has strong experience with React, TypeScript, and modern frontend development practices.',
    requirements: [
      '5+ years of experience in frontend development',
      'Proficiency in React, TypeScript, and modern JavaScript',
      'Experience with state management solutions like Redux or Context API',
      'Knowledge of responsive design and cross-browser compatibility',
      'Strong problem-solving skills and attention to detail'
    ],
    postedDate: '2023-05-15',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    companyId: '2',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'DesignHub is seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients. You will work closely with our product and development teams to deliver exceptional user experiences.',
    requirements: [
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools like Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating user-centered design process',
      'Experience with design systems and component libraries',
      'Excellent communication and collaboration skills'
    ],
    postedDate: '2023-05-20',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'FinanceFlow',
    companyId: '3',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'FinanceFlow is looking for a Data Scientist to help us extract insights from financial data and develop predictive models. The ideal candidate has a strong background in statistics, machine learning, and financial analysis.',
    requirements: [
      'Advanced degree in Statistics, Computer Science, or related field',
      'Experience with Python, R, and data analysis libraries',
      'Knowledge of machine learning algorithms and statistical modeling',
      'Familiarity with financial data and metrics',
      'Strong analytical and problem-solving skills'
    ],
    postedDate: '2023-05-18',
    logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZSUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'TechCorp',
    companyId: '1',
    location: 'Remote',
    type: 'Remote',
    salary: '$110,000 - $140,000',
    description: 'TechCorp is seeking a Backend Developer to build scalable and maintainable server-side applications. You will work with our engineering team to design and implement APIs, database schemas, and server logic.',
    requirements: [
      '4+ years of experience in backend development',
      'Proficiency in Node.js, Python, or Java',
      'Experience with RESTful APIs and microservices architecture',
      'Knowledge of database systems like PostgreSQL, MongoDB, or MySQL',
      'Familiarity with cloud platforms (AWS, Azure, or GCP)'
    ],
    postedDate: '2023-05-22',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '5',
    title: 'Healthcare Software Engineer',
    company: 'HealthPlus',
    companyId: '4',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'HealthPlus is looking for a Software Engineer with healthcare industry experience to help develop our patient management platform. You will work on features that improve healthcare delivery and patient outcomes.',
    requirements: [
      '3+ years of software development experience',
      'Knowledge of healthcare systems and workflows',
      'Experience with HIPAA compliance and healthcare data security',
      'Proficiency in modern programming languages and frameworks',
      'Strong communication and teamwork skills'
    ],
    postedDate: '2023-05-25',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '6',
    title: 'Sustainability Consultant',
    company: 'EcoSolutions',
    companyId: '5',
    location: 'Portland, OR',
    type: 'Contract',
    salary: '$80,000 - $100,000',
    description: 'EcoSolutions is seeking a Sustainability Consultant to help our clients develop and implement environmental initiatives. You will conduct assessments, recommend solutions, and track the impact of sustainability programs.',
    requirements: [
      'Degree in Environmental Science, Sustainability, or related field',
      'Experience in environmental consulting or corporate sustainability',
      'Knowledge of environmental regulations and standards',
      'Strong analytical and project management skills',
      'Excellent client communication abilities'
    ],
    postedDate: '2023-05-28',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlZW4lMjBjb21wYW55JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '7',
    title: 'Product Manager',
    company: 'TechCorp',
    companyId: '1',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'TechCorp is looking for a Product Manager to lead the development of our enterprise software solutions. You will work with cross-functional teams to define product vision, gather requirements, and deliver features that meet customer needs.',
    requirements: [
      '5+ years of product management experience in software',
      'Strong understanding of software development lifecycle',
      'Experience with agile methodologies and product roadmapping',
      'Excellent stakeholder management and communication skills',
      'Ability to translate business requirements into technical specifications'
    ],
    postedDate: '2023-05-30',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '8',
    title: 'Graphic Designer',
    company: 'DesignHub',
    companyId: '2',
    location: 'Remote',
    type: 'Part-time',
    salary: '$60,000 - $80,000',
    description: 'DesignHub is seeking a creative Graphic Designer to join our team on a part-time basis. You will create visual concepts for various client projects, including branding, marketing materials, and digital assets.',
    requirements: [
      'Degree in Graphic Design or related field',
      'Strong portfolio demonstrating creative skills',
      'Proficiency in Adobe Creative Suite',
      'Experience with brand identity and visual design',
      'Ability to work independently and meet deadlines'
    ],
    postedDate: '2023-06-01',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: '9',
    title: 'Financial Analyst',
    company: 'FinanceFlow',
    companyId: '3',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$90,000 - $110,000',
    description: 'FinanceFlow is looking for a Financial Analyst to join our team and help with financial modeling, forecasting, and reporting. You will analyze financial data and provide insights to support business decisions.',
    requirements: [
      'Degree in Finance, Accounting, or related field',
      'Experience with financial analysis and modeling',
      'Proficiency in Excel and financial software',
      'Knowledge of financial statements and metrics',
      'Strong analytical and problem-solving skills'
    ],
    postedDate: '2023-06-05',
    logo: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZSUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '10',
    title: 'DevOps Engineer',
    company: 'TechCorp',
    companyId: '1',
    location: 'Remote',
    type: 'Remote',
    salary: '$120,000 - $150,000',
    description: 'TechCorp is seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines. You will work with our engineering team to automate deployments, monitor systems, and ensure reliability.',
    requirements: [
      '4+ years of experience in DevOps or Site Reliability Engineering',
      'Proficiency with cloud platforms (AWS, Azure, or GCP)',
      'Experience with containerization and orchestration (Docker, Kubernetes)',
      'Knowledge of infrastructure as code (Terraform, CloudFormation)',
      'Strong scripting and automation skills'
    ],
    postedDate: '2023-06-08',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D'
  }
];

export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(company => company.id === id);
};

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};

export const getJobsByCompany = (companyId: string): Job[] => {
  return jobs.filter(job => job.companyId === companyId);
};

export const getUniqueLocations = (): string[] => {
  const locations = jobs.map(job => job.location);
  return [...new Set(locations)];
};

export const getJobTypes = (): string[] => {
  const types = jobs.map(job => job.type);
  return [...new Set(types)];
};