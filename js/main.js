document.addEventListener("DOMContentLoaded", () => {
  renderMainLayout();
});

function renderMainLayout() {
  document.body.innerHTML = ""; // Limpiar el body

  injectStyles();

  const container = document.createElement("div");
  container.className = "container";

  const header = document.createElement("header");
  header.textContent = "Galería de Imágenes";
  header.className = "header";

  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  const addImageBtn = document.createElement("button");
  addImageBtn.textContent = "Agregar Nueva Imagen";
  addImageBtn.className = "btn";
  addImageBtn.addEventListener("click", () => {
      window.location.href = "registro.html";
  });

  sidebar.appendChild(addImageBtn);

  const main = document.createElement("main");
  main.className = "gallery";
  renderGallery(main);

  const footer = document.createElement("footer");
  footer.textContent = "© 2025 Alan Herrera";
  footer.className = "footer";

  container.appendChild(header);
  container.appendChild(sidebar);
  container.appendChild(main);
  container.appendChild(footer);

  document.body.appendChild(container);
}

function renderGallery(container) {
  const images = JSON.parse(localStorage.getItem("imagenes")) || [];

  if (images.length === 0) {
      const empty = document.createElement("p");
      empty.textContent = "No hay imágenes registradas.";
      container.appendChild(empty);
      return;
  }

  images.forEach(img => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const image = document.createElement("img");
      image.src = img.url;
      image.alt = img.descripcion;

      const desc = document.createElement("p");
      desc.textContent = img.descripcion;

      item.appendChild(image);
      item.appendChild(desc);

      container.appendChild(item);
  });
}

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
      body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f0f0f0;
      }
      .container {
          display: grid;
          grid-template-areas:
              "header header"
              "sidebar main"
              "footer footer";
          grid-template-columns: 200px 1fr;
          grid-template-rows: 70px 1fr 50px;
          height: 100vh;
      }
      header {
          grid-area: header;
          background-color: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
      }
      .sidebar {
          grid-area: sidebar;
          background-color: #444;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      .btn {
          padding: 10px 15px;
          background-color: #00bcd4;
          border: none;
          color: white;
          border-radius: 5px;
          cursor: pointer;
      }
      .btn:hover {
          background-color: #0097a7;
      }
      .gallery {
          grid-area: main;
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
          overflow-y: auto;
      }
      .gallery-item {
          background-color: white;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          text-align: center;
      }
      .gallery-item img {
          max-width: 100%;
          border-radius: 4px;
      }
      footer {
          grid-area: footer;
          background-color: #222;
          color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
      }
  `;
  document.head.appendChild(style);
}
