import { Leaf, Moon, UserRound } from 'lucide-react';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de Habit Bloom">
          <span className="brand-mark" aria-hidden="true">
            <Leaf size={18} strokeWidth={2.4} />
          </span>
          <span>Habit Bloom</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#habitos">Mis hábitos</a>
          <a href="#crear">Crear hábito</a>
          <a href="#objetivos">Objetivos</a>
          <a href="#estadisticas">Estadísticas</a>
        </nav>

        <div className="header-actions" aria-label="Acciones de usuario">
          <button className="icon-button" type="button" aria-label="Cambiar tema">
            <Moon size={18} />
          </button>
          <button className="avatar-button" type="button" aria-label="Abrir perfil">
            <UserRound size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;