import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('sobre-mi');
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const fullName = 'Bilal El Harmachi';
  const fullRole = 'Estudiante';

  // DATOS DE HABILIDADES
  // Usamos URLs de Devicon para asegurar que los iconos originales se vean perfectos sin instalar librerías.
  const skillsData = {
    lenguajes: [
      { name: 'HTML5', pct: 90, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', pct: 85, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', pct: 75, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', pct: 20, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', pct: 70, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    herramientas: [
      { name: 'Git', pct: 60, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', pct: 85, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true }, // Invertimos color porque el original es negro
      { name: 'VS Code', pct: 95, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Linux', pct: 65, img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ]
  };

  useEffect(() => {
    // ---- Animación Nombre ----
    let nameIndex = 0;
    let deletingName = false;
    let nameTimeout;

    const typeName = () => {
      if (!deletingName) {
        setNameText(fullName.slice(0, nameIndex + 1));
        nameIndex++;
        if (nameIndex === fullName.length) {
          deletingName = true;
          nameTimeout = setTimeout(typeName, 2000); 
          return;
        }
        nameTimeout = setTimeout(typeName, 120);
      } else {
        setNameText(fullName.slice(0, nameIndex - 1));
        nameIndex--;
        if (nameIndex === 0) {
          deletingName = false;
        }
        nameTimeout = setTimeout(typeName, 50);
      }
    };

    typeName();

    // ---- Animación Rol ----
    let roleIndex = 0;
    let deletingRole = false;
    let roleTimeout;

    const typeRole = () => {
      if (!deletingRole) {
        setRoleText(fullRole.slice(0, roleIndex + 1));
        roleIndex++;
        if (roleIndex === fullRole.length) {
          deletingRole = true;
          roleTimeout = setTimeout(typeRole, 2200);
          return;
        }
        roleTimeout = setTimeout(typeRole, 120);
      } else {
        setRoleText(fullRole.slice(0, roleIndex - 1));
        roleIndex--;
        if (roleIndex === 0) {
          deletingRole = false;
        }
        roleTimeout = setTimeout(typeRole, 60);
      }
    };

    roleTimeout = setTimeout(typeRole, 400);

    return () => {
      clearTimeout(nameTimeout);
      clearTimeout(roleTimeout);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const mailtoLink = `mailto:elharmachibilal@gmail.com?subject=Contacto de ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setFormStatus('sent');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;600;700&display=swap');
        
        .font-mono { font-family: 'Space Mono', monospace; }
        
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Inputs de alto contraste */
        input, textarea {
          background: #0a0a0a;
          border: 1px solid #333;
          color: white;
          transition: all 0.2s ease;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #ffffff;
          background: #000;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
        }

        /* Tarjetas con borde sutil */
        .card-contrast {
          background: #0a0a0a;
          border: 1px solid #262626;
          transition: all 0.3s ease;
        }
        
        .card-contrast:hover {
          border-color: #ffffff;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <img
                src=""
                alt="Bilal El Harmachi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-4 font-mono typing-cursor text-white tracking-tighter"
            >
              {nameText || '\u00A0'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-400 font-mono typing-cursor"
            >
              {roleText || '\u00A0'}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              <a href="mailto:elharmachibilal@gmail.com" className="p-3 border border-gray-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center gap-2 mb-16 border-b border-gray-800 pb-1">
          {['sobre-mi', 'habilidades', 'proyectos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium transition-all relative ${
                activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.replace('-', ' ').charAt(0).toUpperCase() + tab.replace('-', ' ').slice(1)}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {/* SOBRE MI */}
          {activeTab === 'sobre-mi' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-white pl-4">Sobre mí</h2>
              <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                <p> ¡Hola! Soy <strong className="text-white font-semibold">Bilal El Harmachi</strong> conocido en internet como <strong className="text-white font-semibold">xbilalO</strong>.
                Soy un estudiante apasionado por el desarrollo de software y montaje de equipos. Me encanta aprender nuevas tecnologías y crear 
                proyectos que resuelvan problemas reales. 
                </p> 
                <p> Actualmente estoy cursando el segundo año de <strong className="text-white font-semibold">Sistema Microinformáticos y Redes.</strong>. 
                Soy una persona que le gusta trabajar en equipo, soy una persona muy organizada, simpática y amable. 
                Me gusta participar en cosas nuevas y hacer cosas que no sé para aprenderlas y tener mas experiencia. </p>
                <p> Me gusta aprender cosas por mi cuenta, y aprendo rápido por ello he creado muchos proyectos personales 
                con la intención de mejorar y aprender, actualmente estoy trabajando en un prototipo de un juego multijugador para poder subirlo a Steam en un futuro.
                </p>
                <p>
                Cuento con un <strong className="text-white font-semibold">Certificado JavaScript</strong>.
                </p>
              </div>
            </motion.div>
          )}

          {/* HABILIDADES */}
          {activeTab === 'habilidades' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-white pl-4">Habilidades</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Lenguajes */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-400 uppercase tracking-widest text-sm">Lenguajes</h3>
                  <div className="space-y-4">
                    {skillsData.lenguajes.map((skill) => (
                      <div key={skill.name} className="card-contrast p-4 rounded-xl flex items-center gap-4 group">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg p-2">
                          <img src={skill.img} alt={skill.name} className="w-full h-full" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-bold text-white">{skill.name}</span>
                            <span className="text-sm font-mono text-gray-400">{skill.pct}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.pct}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Herramientas */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-400 uppercase tracking-widest text-sm">Herramientas</h3>
                  <div className="space-y-4">
                    {skillsData.herramientas.map((skill) => (
                      <div key={skill.name} className="card-contrast p-4 rounded-xl flex items-center gap-4 group">
                        <div className={`w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg p-2 ${skill.invert ? 'brightness-200 contrast-200 grayscale' : ''}`}>
                          <img src={skill.img} alt={skill.name} className="w-full h-full" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="font-bold text-white">{skill.name}</span>
                            <span className="text-sm font-mono text-gray-400">{skill.pct}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.pct}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PROYECTOS */}
          {/* PROYECTOS */}
          {/* PROYECTOS */}
          {activeTab === 'proyectos' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-white pl-4">Proyectos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Card 1: Portfolio */}
                <div className="card-contrast rounded-xl overflow-hidden flex flex-col h-full group">
                  {/* Contenedor de Imagen */}
                  <div className="w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800">
                    <img 
                      src="https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Captura+Portfolio" 
                      alt="Preview Portfolio" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">Portfolio Personal</h3>
                      <ExternalLink className="w-5 h-5 text-gray-500" />
                    </div>
                    <p className="text-gray-400 mb-8 flex-1">
                      Sitio web personal desarrollado con React. Animaciones fluidas, diseño de alto contraste y totalmente responsive.
                    </p>
                    <div className="flex items-center gap-4">
                      <img title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7 hover:scale-110 transition-transform" />
                      <img title="Tailwind CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-7 h-7 hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Card 2: Todo List */}
                <a href="https://todolist-app-indol-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-contrast rounded-xl overflow-hidden flex flex-col h-full group">
                  {/* Contenedor de Imagen */}
                  <div className="w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800">
                    <img 
                      src="\src\todolist.png" 
                      alt="Preview Todo List" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:underline decoration-white underline-offset-4">Todo List</h3>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-400 mb-8 flex-1">
                      Aplicación web para gestión de tareas diarias. Persistencia de datos local para máxima privacidad y rapidez.
                    </p>
                    <div className="flex items-center gap-4">
                      <img title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-7 h-7 hover:scale-110 transition-transform" />
                      <img title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-7 h-7 hover:scale-110 transition-transform" />
                      <img title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7 hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </a>

                {/* Card 3: Videojuego */}
                <a href="https://reikos.itch.io/" target="_blank" rel="noopener noreferrer" className="card-contrast rounded-xl overflow-hidden flex flex-col h-full group">
                  {/* Contenedor de Imagen */}
                  <div className="w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800">
                    <img 
                      src="\src\reiko.png" 
                      alt="Preview Videojuego" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:underline decoration-white underline-offset-4">Videojuego (Demo)</h3>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-400 mb-8 flex-1">
                      Demo técnica de "Oops! Mis Ojos!". Segundo puesto en torneo de desarrollo. Programación lógica avanzada.
                    </p>
                    <div className="flex items-center gap-4">
                      <img title="Godot Engine" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" alt="Godot" className="w-7 h-7 hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </a>

              </div>
            </motion.div>
          )}
        </div>

        {/* Contacto */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Contacto</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg resize-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
            >
              {formStatus === 'sending' ? 'Enviando...' : formStatus === 'sent' ? '¡Enviado!' : (
                <> <Send className="w-5 h-5" /> Enviar Mensaje </>
              )}
            </button>
            {formStatus === 'sent' && (
              <p className="text-center text-green-400 font-mono text-sm mt-4">Mensaje enviado correctamente.</p>
            )}
          </form>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
          <p>© 2026 Bilal El Harmachi. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;