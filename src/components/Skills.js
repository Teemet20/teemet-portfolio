import { motion } from 'framer-motion';
import config from '../config/config';

const skills = [
  {
    name: 'React',
    icon: '⚛️',
  },
  {
    name: 'JavaScript',
    icon: '📜',
  },
  {
    name: 'HTML',
    icon: '🌐',
  },
  {
    name: 'CSS',
    icon: '🎨',
  },
  {
    name: 'Node.js',
    icon: '🟢',
  },
  {
    name: 'Git',
    icon: '📦',
  },
  {
    name: 'Python',
    icon: '🐍',
  },
  {
    name: 'AWS',
    icon: '☁️',
  },
  {
    name: 'Power BI',
    icon: '📊',
  },
  {
    name: 'Power Automate',
    icon: '⚡',
  },
  {
    name: 'Linux',
    icon: '🐧',
  },
  {
    name: 'SharePoint',
    icon: '📑',
  },
  {
    name: 'Ansible',
    icon: '🤖',
  },
  {
    name: 'Terraform',
    icon: '🏗️',
  },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-orange-300/10 hover:border-orange-300/30 transition-colors duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-5xl mb-4"
          >
            {skill.icon}
          </motion.div>
          <h3 className="text-lg font-semibold font-orbitron text-center text-gray-300">{skill.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills; 