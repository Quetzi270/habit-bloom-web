import { useState } from 'react';
import { categories, colorOptions, trackingTypes } from '../data/habitOptions.js';

const initialFormState = {
  name: '',
  category: categories[0],
  trackingType: trackingTypes[0].value,
  goal: '1',
  unit: '',
  color: colorOptions[0].value,
};

function HabitForm({ onCreateHabit }) {
  const [formData, setFormData] = useState(initialFormState);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  function handleColorSelect(color) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      color,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const habitToCreate = {
      ...formData,
      name: formData.name.trim(),
      unit: formData.unit.trim(),
      goal: Number(formData.goal),
    };

    if (!habitToCreate.name || !habitToCreate.unit || habitToCreate.goal < 1) {
      return;
    }

    onCreateHabit(habitToCreate);
    setFormData(initialFormState);
  }

  return (
    <section className="surface-card form-card" aria-labelledby="habit-form-title">
      <div className="section-heading compact">
        <span className="eyebrow">Crear hábito</span>
        <h2 id="habit-form-title">Diseña un nuevo hábito</h2>
        <p className="muted">En esta fase el formulario ya usa useState y crea hábitos en pantalla.</p>
      </div>

      <form className="habit-form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            name="name"
            placeholder="Ej: Leer 20 páginas"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <div className="form-grid">
          <label>
            Categoría
            <select name="category" value={formData.category} onChange={handleInputChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tipo
            <select name="trackingType" value={formData.trackingType} onChange={handleInputChange}>
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
            <input
              type="number"
              name="goal"
              min="1"
              placeholder="Ej: 8"
              value={formData.goal}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Unidad
            <input
              type="text"
              name="unit"
              placeholder="vasos, minutos, veces..."
              value={formData.unit}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <fieldset className="color-fieldset">
          <legend>Color visual</legend>
          <div className="color-options">
            {colorOptions.map((color) => {
              const isSelected = formData.color === color.value;

              return (
                <button
                  key={color.value}
                  className={`color-chip${isSelected ? ' is-selected' : ''}`}
                  style={{ '--chip-color': color.value }}
                  type="button"
                  aria-label={`Seleccionar color ${color.label}`}
                  aria-pressed={isSelected}
                  onClick={() => handleColorSelect(color.value)}
                />
              );
            })}
          </div>
        </fieldset>

        <button className="button button-primary form-submit" type="submit">
          Guardar hábito
        </button>
      </form>
    </section>
  );
}

export default HabitForm;