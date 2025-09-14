import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4">
      <div className="backdrop-blur-2xl bg-black/30 p-10 rounded-3xl shadow-2xl max-w-3xl w-full border border-violet-400/20">
        <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-violet-400">Praveena</span> Kurukuladithya
        </h1>

        <div className="space-y-6 text-gray-300">
          {/* Professional Profile */}
          <div className="bg-white/5 p-6 rounded-2xl border border-violet-400/10">
            <h2 className="text-2xl font-semibold text-violet-400 mb-3">🎓 About Me</h2>
            <p className="leading-relaxed">
              I am an enthusiastic undergraduate student pursuing a{" "}
              <strong>BSc (Hons) in Computer Systems Engineering</strong> at{" "}
              <strong>SLIIT – Sri Lanka Institute of Information Technology</strong>, 
              under the <strong>Faculty of Computing (FoC)</strong>,{" "}
              <strong>Department of Computer Systems Engineering</strong>. 
              Currently in <strong>Year 2, Semester 2</strong>, I am passionate about 
              exploring both hardware and software domains to create impactful, 
              real-world technological solutions.
            </p>
            <p className="leading-relaxed mt-3">
              My academic journey and projects have strengthened my skills in 
              **IoT, Embedded Systems, Web Development, and Computer Vision**. 
              I enjoy working on innovative solutions that merge electronics, 
              programming, and design to solve problems and enhance user experiences. 
              I believe in continuous learning, teamwork, and applying theoretical 
              knowledge to hands-on practical projects.
            </p>
          </div>

          {/* Expertise & Projects */}
          <div className="bg-white/5 p-6 rounded-2xl border border-violet-400/10">
            <h2 className="text-2xl font-semibold text-violet-400 mb-3">💡 Expertise & Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-violet-300">IoT & Automation</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Home automation with web interface</li>
                  <li>Blynk-based wireless monitoring & control</li>
                  <li>IoT radar system with Arduino & sensors</li>
                  <li>Wireless relay control using ESP32</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-violet-300">Computer Vision & AI</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Hand gesture recognition (LED control)</li>
                  <li>Eye-lid detection for automation</li>
                  <li>Virtual switches using OpenCV</li>
                  <li>Python + OpenCV object tracking</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-violet-300">Web Development</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Safari boat trip management system</li>
                  <li>CRUD-enabled online shopping site</li>
                  <li>Frontend with HTML, CSS, JS & Tailwind</li>
                  <li>Backend with PHP & MySQL</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-violet-300">Electronics & Embedded</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Arduino projects with sensors & LEDs</li>
                  <li>ESP32 wireless sensor integration</li>
                  <li>NE555 timer-based LED circuits</li>
                  <li>Potentiometer-controlled systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white/5 p-6 rounded-2xl border border-violet-400/10">
            <h2 className="text-2xl font-semibold text-violet-400 mb-3">🛠️ Technologies & Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Python", icon: "python/python-original.svg" },
                { name: "Arduino", icon: "arduino/arduino-original.svg" },
                { name: "JavaScript", icon: "javascript/javascript-original.svg" },
                { name: "PHP", icon: "php/php-original.svg" },
                { name: "HTML5", icon: "html5/html5-original.svg" },
                { name: "CSS3", icon: "css3/css3-original.svg" },
                { name: "MySQL", icon: "mysql/mysql-original.svg" },
                { name: "OpenCV", icon: "opencv/opencv-original.svg" },
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-violet-900/30 rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <img
                    src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${tech.icon}`}
                    className="w-6 h-6"
                    alt={tech.name}
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white/5 p-6 rounded-2xl border border-violet-400/10">
            <h2 className="text-2xl font-semibold text-violet-400 mb-3">📫 Contact</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                📧{" "}
                <a
                  href="mailto:kurukuladithyapraveena@gmail.com"
                  className="hover:text-violet-400 transition-colors"
                >
                  kurukuladithyapraveena@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
                  className="w-5 h-5"
                  alt="GitHub"
                />
                <a
                  href="https://github.com/pkurukuladithya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400 transition-colors"
                >
                  github.com/pkurukuladithya
                </a>
              </p>
              <p>📍 Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate('/secret')}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition-all"
          >
            ← Back to Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
