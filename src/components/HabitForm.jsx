import { categories, colorOptions, trackingTypes } from '../data/habitOptions.js';

function HabitForm() {
  return (
    <section className="surface-card form-card" aria-labelledby="habit-form-title">
      <div className="section-heading compact">
        <span className="eyebrow">Crear hábito</span>
        <h2 id="habit-form-title">Diseña un nuevo hábito</h2>
        <p className="muted">En la fase 3 conectaremos este formulario con useState.</p>
      </div>

      <form className="habit-form">
        <label>
          Nombre
          <input type="text" name="name" placeholder="Ej: Leer 20 páginas" />
        </label>

        <div className="form-grid">
          <label>
            Categoría
            <select name="category" defaultValue={categories[0]}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tipo
            <select name="trackingType" defaultValue={trackingTypes[0].value}>
              {trackingTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-grid">
          <label>
            Meta diaria
            <input type="number" name="goal" min="1" placeholder="Ej: 8" />
          </label>

          <label>
            Unidad
            <input type="text" name="unit" placeholder="vasos, minutos, veces..." />
          </label>
        </div>

        <fieldset className="color-fieldset">
          <legend>Color visual</legend>
          <div className="color-options">
            {colorOptions.map((color, index) => (
              <button
                key={color.value}
                className={`color-chip${index === 0 ? ' is-selected' : ''}`}
                style={{ '--chip-color': color.value }}
                type="button"
                aria-label={`Seleccionar color ${color.label}`}
              />
            ))}
          </div>
        </fieldset>

        <button className="button button-primary form-submit" type="button">
          Guardar hábito
        </button>
      </form>
    </section>
  );
}

export default HabitForm;