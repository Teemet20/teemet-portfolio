import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and collaborated with design and backend teams.',
    technologies: ['JavaScript', 'Vue.js', 'CSS'],
  },
  {
    title: 'Junior Developer',
    company: 'Startup',
    period: '2019 - 2020',
    description: 'Built and maintained client websites, implemented new features, and fixed bugs.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-20 bg-gradient-to-r from-emerald-950 to-black"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="experience-heading"
          className="text-3xl font-bold text-center mb-12 font-orbitron"
        >
          Work <span className="text-orange-300">Experience</span>
        </h2>
        <div className="relative" role="list" aria-label="Work experience timeline">
          {/* Timeline line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-300/30"
            role="presentation"
            aria-hidden="true"
          ></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'
              }`}
              role="listitem"
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-300 rounded-full"
                role="presentation"
                aria-hidden="true"
              ></div>
              
              <div 
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-orange-300/20"
                aria-labelledby={`exp-title-${index} exp-company-${index}`}
              >
                <h3 
                  id={`exp-title-${index}`}
                  className="text-xl font-bold mb-2 font-orbitron text-orange-300"
                >
                  {exp.title}
                </h3>
                <h4 
                  id={`exp-company-${index}`}
                  className="text-lg mb-2 font-orbitron text-white"
                >
                  {exp.company}
                </h4>
                <p className="text-gray-400 mb-2" aria-label={`Duration: ${exp.period}`}>
                  {exp.period}
                </p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div 
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`Technologies used at ${exp.company}`}
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-300/10 text-orange-300 rounded-full text-sm font-orbitron"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 