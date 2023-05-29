import { Technology } from '@/app/api/lib/models';

interface Category {
  id: Technology;
  icon: string;
  name: string;
}

const categories: Readonly<Category[]> = [
  {
    id: 'MySQL',
    icon: 'GrMysql',
    name: 'Mastering Database Management: Unlocking the Power of MySQL',
  },
  {
    id: 'NodeJS',
    icon: 'FaNodeJs',
    name: 'Mastering Node.js: Building Scalable and High-Performing Web Applications',
  },
  {
    id: 'HTML',
    icon: 'AiFillHtml5',
    name: 'Mastering Web Development: Harnessing the Power of HTML and CSS',
  },
  {
    id: 'JavaScript',
    icon: 'GrReactjs',
    name: 'JavaScript Mastery: Unleashing the Power of Modern Web Development',
  },
  {
    id: 'TypeScript',
    icon: 'SiTypescript',
    name: 'TypeScript Mastery: Unlocking the Potential of Strongly Typed JavaScript',
  },
  {
    id: 'React',
    icon: 'GrReactjs',
    name: 'React Mastery: Building Dynamic and Interactive User Interfaces',
  },
  {
    id: 'Redux',
    icon: 'SiRedux',
    name: 'Mastering Redux: State Management for Robust and Scalable JavaScript Applications',
  },
  {
    id: 'NestJS',
    icon: 'SiNestjs',
    name: 'Mastering NestJS: Building Scalable and Efficient Server-side Applications',
  },
  {
    id: 'Git',
    icon: 'BsGithub',
    name: 'Git Mastery: Version Control for Efficient and Collaborative Software Development',
  },
  {
    id: 'Docker',
    icon: 'GrDocker',
    name: 'Docker Mastery: Streamlining Application Deployment and Containerization',
  },
  {
    id: 'Java',
    icon: 'GrDocker',
    name: 'Java Journey: Exploring the Power of Object-Oriented Programming and Application Development',
  },
  {
    id: 'NextJS',
    icon: 'SiNextDotJs',
    name: 'Next.js Mastery: Building Dynamic and Scalable Web Applications',
  },
];
export default categories;
