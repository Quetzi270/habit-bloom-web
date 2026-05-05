function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>Habit Bloom</h2>
          <p className="muted">Pequeños hábitos, grandes cambios.</p>
        </div>
        <div>
          <h3>Navegación</h3>
          <a href="#inicio">Inicio</a>
          <a href="#habitos">Mis hábitos</a>
          <a href="#crear">Crear hábito</a>
        </div>
        <div>
          <h3>Recursos</h3>
          <a href="#objetivos">Objetivos</a>
          <a href="#estadisticas">Estadísticas</a>
        </div>
        <div>
          <h3>Legal</h3>
          <p className="muted">© Habit Bloom</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;