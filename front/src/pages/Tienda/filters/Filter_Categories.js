import React from 'react'

const Filter_Categories = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="filter-cards">
          <form>
            <label>Filtrar por categoría:</label>
            <select value={selectedCategory} onChange={onCategoryChange}>
              <option value="">Todos</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </form>
        </div>
      );
};
    


export default Filter_Categories
