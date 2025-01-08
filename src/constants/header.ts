import {
  APIDevelopmentIcon,
  BlockChainIcon,
  CloudComputingIcon,
  DevelopmentIcon,
  IntegrationIcon,
  QATestingIcon,
  UXDesignIcon,
} from '../assets/icons';

// import ASIAllianceIcon from '../assets/png/asi-alliance.png';
import PlexusIcon from '../assets/png/plexus.png';
import SentimentIcon from '../assets/png/sentiment.png';
import XneeloIcon from '../assets/png/xneelo.png';
import FetchAIIcon from '../assets/png/fetch-ai.png';
import Agile from '../assets/png/agile.png';
import Devops from '../assets/png/dev-ops.png';
import Lean from '../assets/png/lean.png';

export const HEADERS = [
  {
    label: 'Work',
    link: '/',
    id: 'work',
  },
  {
    label: 'About',
    link: '/',
    id: 'services',
  },
  // {
  //   label: 'Career',
  //   link: '/',
  //   id: 'career',
  // },
  {
    label: 'Contact',
    link: '/contact',
    id: 'contact',
  },
];

export const CLIENTS = [
  {
    title: 'Plexus',
    icon: PlexusIcon,
  },
  {
    title: 'ASI Alliance',
    icon: FetchAIIcon,
  },
  {
    title: 'Xneelo',
    icon: XneeloIcon,
  },
  {
    title: 'Sentiment',
    icon: SentimentIcon,
  },
];

export const CARDS_DATA = [
  {
    title: 'Custom Web Development',
    icon: DevelopmentIcon,
    description:
      'Transform your ideas into reality with our bespoke web development services. Designed to streamline workflows, boost profitability, and enhance operations, we deliver tailored solutions from concept inception to deployment.',
  },
  {
    title: 'Blockchain',
    icon: BlockChainIcon,
    description:
      'Empowering industries with the future of transparency and security, our blockchain solutions revolutionize processes—from cryptocurrency applications to supply chain management—leveraging a decentralized and public ledger for unparalleled traceability.',
  },
  {
    title: 'QA & Testing',
    icon: QATestingIcon,
    description:
      'We do more than test—we elevate. By uncovering hidden issues and mitigating risks, we deliver products that perform flawlessly in the real world.',
  },
  {
    title: 'API Development',
    icon: APIDevelopmentIcon,
    description:
      'Seamlessly integrate and customize your systems with our reliable, well-documented APIs. We empower your ecosystem to adapt, scale, and perform.',
  },
  {
    title: 'UI/UX Design',
    icon: UXDesignIcon,
    description:
      'Our designs are where form meets function. Combining aesthetics and usability, we create interfaces that delight users and elevate brands.',
  },
  {
    title: 'Cloud Computing',
    icon: CloudComputingIcon,
    description:
      'Revolutionize your business with cloud solutions that enhance agility, scalability, and efficiency. Together, we build infrastructures ready for tomorrow.',
  },
  {
    title: 'Application Maintainance',
    icon: DevelopmentIcon,
    description:
      'From modernizing legacy systems to ensuring seamless performance, our services keep your applications robust, secure, and future-proof.',
  },
  {
    title: 'System Integrations',
    icon: IntegrationIcon,
    description:
      'Seamlessly unify your technological ecosystem with our expert integration services. From architectural design to execution, we overcome complex challenges, ensuring your systems work harmoniously to achieve your goals.',
  },
];

export const WORKFLOW_DATA = [
  {
    heading: 'Agile',
    subheading: {
      title: 'Innovation, Adaptability, Excellence',
      description:
        'Agile is not just a process -- its a mindset. At Quantek, we embrace flexibility and collaboration to create solutions that evolve with your needs. Together we craft exceptional outcomes through iterative planning, teamwork, and cutting-edge technology.',
      steps: [
        {
          name: 'Plan:',
          task: 'Prioritize objectives with precision.',
        },
        {
          name: 'Design:',
          task: 'Sketch creative, user-centric concepts.',
        },
        {
          name: 'Develop:',
          task: 'Build scalable, future-proof applications.',
        },
        {
          name: 'Test:',
          task: 'Guarantee quality through rigorous checks.',
        },
        {
          name: 'Launch:',
          task: 'Deliver excellence with confidence.',
        },
        {
          name: 'Deploy:',
          task: 'Innovate continuously in real time.',
        },
      ],
      conclusion: 'Your success is a journey. Agile ensures every step counts.',
    },
    image: Agile,
  },
  {
    heading: 'DevOps',
    subheading: {
      title: 'Where Development Meets Operational Excellence',
      description:
        'Say goodbye to silos! DevOps combines innovation and reliability into a seamless workflow that accelerates delivery while ensuring peak performance.',
      // steps:[{
      //     name: "Collaborate:",
      //     task: "Foster synergy between teams.",
      //   },
      //   {
      //     name: "Automate:",
      //     task: "Optimize pipelines for consistent results.",
      //   },
      //   {
      //     name: "Monitor:",
      //     task: "Keep a pulse on progress, always.",
      //   },
      //   {
      //     name: "Deliver:",
      //     task: "Ship faster, smarter, and better.",
      //   },
      // ],
      // conclusion: "With DevOps, we turn every challenge into an opportunity for growth.",
    },
    image: Devops,
  },
  {
    heading: 'Learn',
    subheading: {
      title: 'Simplify. Refine. Deliver Value.',
      description:
        'Lean isn’t just about efficiency—it’s about making every moment, resource, and effort count. By focusing on what matters most, we cut through complexity to deliver meaningful results.',
      steps: [
        {
          name: 'Value Stream:',
          task: 'Map what truly adds value.',
        },
        {
          name: 'Iterate:',
          task: 'Continuously improve processes.',
        },
        {
          name: 'Deliver Value:',
          task: 'Design experiences that inspire.',
        },
      ],
      conclusion:
        'Efficiency isn’t the end goal; delivering unparalleled value is.',
    },
    image: Lean,
  },
];
