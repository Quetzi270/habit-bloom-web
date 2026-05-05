import { Sprout } from 'lucide-react';

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        <Sprout size={24} />
      </div>
      <h3>Aún no tienes hábitos creados</h3>
      <p>Crea tu primer hábito para comenzar a ver tarjetas, progreso diario y estadísticas reales.</p>
      <a className="button button-primary" href="#crear">Crear hábito</a>
    </div>
  );
}

export default EmptyState;