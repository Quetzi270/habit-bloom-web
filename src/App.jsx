import { Quote, Sparkles, Target } from 'lucide-react';
import Header from './components/Header.jsx';
import ProgressSummary from './components/ProgressSummary.jsx';
import HabitForm from './components/HabitForm.jsx';
import HabitList from './components/HabitList.jsx';
import Footer from './components/Footer.jsx';

const demoHabits = [];

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <section id="inicio" className="hero-section">
          <div className="container hero-layout">
            <article className="hero-card">
              <span className="eyebrow">Pequeños hábitos, grandes cambios</span>
              <h1>Construye hábitos diarios con claridad</h1>
              <p>Cada día es una nueva oportunidad para mejorar.</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#crear">
                  Crear hábito
                </a>
                <a className="button button-secondary" href="#habitos">
                  Ver hábitos
                </a>
              </div>
            </article>

            <aside className="floating-quote surface-card">
              <Quote size={22} />
              <p>No tienes que ser perfecto, solo constante.</p>
            </aside>
          </div>
        </section>

        <section className="section dashboard-section" aria-label="Panel principal de hábitos">
          <div className="container dashboard-layout">
            <div className="main-column">
              <HabitList habits={demoHabits} />
            </div>
            <div className="side-column">
              <ProgressSummary habits={demoHabits} />
            </div>
          </div>
        </section>

        <section id="crear" className="section">
          <div className="container">
            <HabitForm />
          </div>
        </section>

        <section id="objetivos" className="section goals-section">
          <div className="container goals-grid">
            <article className="surface-card goal-card">
              <Sparkles size={20} />
              <h3>Mejora tu disciplina</h3>
              <p className="muted">Convierte pequeñas acciones en una rutina sostenible.</p>
            </article>
            <article className="surface-card goal-card feature-card">
              <Target size={22} />
              <h3>Las pequeñas acciones crean grandes cambios</h3>
              <p className="muted">Diseña objetivos simples, visibles y medibles para cada día.</p>
            </article>
            <article className="surface-card goal-card quote-card">
              <Quote size={20} />
              <h3>“Constancia antes que perfección.”</h3>
              <p className="muted">Una frase breve para volver al camino cuando el día se complica.</p>
            </article>
          </div>
        </section>

        <section id="estadisticas" className="section stats-placeholder">
          <div className="container surface-card stats-card">
            <span className="eyebrow">Estadísticas</span>
            <h2>Estadísticas básicas</h2>
            <p className="muted">En las próximas fases conectaremos datos reales, tendencias y progreso semanal.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;