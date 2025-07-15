import React from 'react';


function Categories() {
  return (
    <section className="categories">
      <h2>Popular Categories</h2>
      <div className="category-buttons">
        <button>Aptitude</button>
        <button>Technical</button>
        <button>Interview</button>
      </div>
      
      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 Prepverse. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Categories;
