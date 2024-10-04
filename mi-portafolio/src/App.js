import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Mi Portafolio</h1>
      <p>Un vistazo a mis habilidades y proyectos profesionales.</p>
    </header>
  );
}

function Main() {
  return (
    <main>
      <Information />
      <Skills />
      <GitSummary />
      <Projects />
    </main>
  );
}

function Information() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
    console.log('showInfo state:', !showInfo); // Verificar si el estado cambia
  };

  return (
    <section id="information">
      <h2>Información Personal</h2>
      <div className="information">
        <label onClick={toggleInfo}>Conoce más sobre mí</label>
        {showInfo && (
          <div className="information-content">
            <p>Estado del toggle: {showInfo.toString()}</p> {/* Muestra el estado para depuración */}
            <img src={process.env.PUBLIC_URL + '/Juan.jpg'} alt="Mi Foto" className="personal-image" />
            <p>Soy Juan David Egidio Montoya, Ingeniero Multimedia con años de experiencia en audio, video y diseño web.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Skills() {
  const [showSkill1, setShowSkill1] = useState(false);
  const [showSkill2, setShowSkill2] = useState(false);
  const [showSkill3, setShowSkill3] = useState(false);
  const [showSkill4, setShowSkill4] = useState(false);

  return (
    <section id="skills">
      <h2>Habilidades</h2>

      <div className="skill">
        <label onClick={() => setShowSkill1(!showSkill1)}>
          Manejo de diferentes lenguajes de programación
        </label>
        {showSkill1 && (
          <div className="skill-content">
            <p>Puedo trabajar con Python, HTML, CSS, y también cuento con bases en SQL y PHP.</p>
          </div>
        )}
      </div>

      <div className="skill">
        <label onClick={() => setShowSkill2(!showSkill2)}>Diseño multimedia</label>
        {showSkill2 && (
          <div className="skill-content">
            <p>Puedo diseñar sistemas multimedia para proyectos interactivos con el usuario.</p>
          </div>
        )}
      </div>

      <div className="skill">
        <label onClick={() => setShowSkill3(!showSkill3)}>Pensamiento creativo</label>
        {showSkill3 && (
          <div className="skill-content">
            <p>Expreso mis ideas y siempre estoy abierto a recibir retroalimentación.</p>
          </div>
        )}
      </div>

      <div className="skill">
        <label onClick={() => setShowSkill4(!showSkill4)}>Trabajo en equipo</label>
        {showSkill4 && (
          <div className="skill-content">
            <p>Me relaciono bien en un grupo de trabajo y me adapto fácilmente al ritmo de trabajo.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function GitSummary() {
  const [showGitSummary, setShowGitSummary] = useState(false);

  return (
    <section id="git-summary">
      <h2>Actividad 1</h2>
      <h2>Como eliminar archivos binarios de un repositorio de GitHub</h2>

      <div className="git-summary">
        <label onClick={() => setShowGitSummary(!showGitSummary)}>Ver resumen paso a paso</label>
        {showGitSummary && (
          <div className="git-summary-content">
            <h3>Paso 1: Eliminar el archivo del repositorio</h3>
            <p>Primero, si simplemente deseas eliminar el archivo de las próximas versiones, puedes eliminarlo de la siguiente manera:</p>
            <h4>Eliminar el archivo:</h4>
            <ol>
              <li>Navega a tu repositorio local en tu computadora.</li>
              <li>Elimina el archivo binario de tu directorio del proyecto:</li>
              <pre>
                <code>rm path/to/your/binary/file</code>
              </pre>
            </ol>
            <h4>Agregar el cambio al índice:</h4>
            <ol>
              <li>Usa <code>git add</code> para registrar la eliminación:</li>
              <pre>
                <code>git add path/to/your/binary/file</code>
              </pre>
            </ol>
            <h4>Hacer commit:</h4>
            <ol>
              <li>Haz commit de los cambios:</li>
              <pre>
                <code>git commit -m "Removed binary file"</code>
              </pre>
            </ol>
            <h4>Subir los cambios a GitHub:</h4>
            <ol>
              <li>Finalmente, sube los cambios a tu repositorio en GitHub:</li>
              <pre>
                <code>git push origin main</code>
              </pre>
            </ol>
            <p><em>Este método elimina el archivo del directorio actual y de las futuras versiones del repositorio.</em></p>
          </div>
        )}
      </div>
    </section>
  );
}

function Projects() {
  const [showProject1, setShowProject1] = useState(false);

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project">
        <label onClick={() => setShowProject1(!showProject1)}>Mis Proyectos</label>
        {showProject1 && (
          <div className="project-content">
            <p>Aquí puedes ver mis proyectos.</p>
            <p>
              Visita{' '}
              <a href="https://github.com/juanegi/ActividadW2.git" target="_blank" rel="noopener noreferrer">
                este enlace
              </a>{' '}
              para ver más detalles.
            </p>
            <p>
              Visita{' '}
              <a href="https://github.com/juanegi/Comparador.git" target="_blank" rel="noopener noreferrer">
                este enlace
              </a>{' '}
              para ver más detalles del comparador.
            </p>
          </div>

        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Portafolio. Todos los derechos reservados.</p>
    </footer>
  );
}

export default App;
