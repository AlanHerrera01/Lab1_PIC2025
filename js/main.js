document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
  
    const style = document.createElement("style");
    style.textContent = `
      body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 40px;
        background-color:rgb(212, 229, 245);
      }
      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 30px;
      }
      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .gallery-item {
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        overflow: hidden;
        transition: transform 0.3s;
      }
      .gallery-item:hover {
        transform: translateY(-5px);
      }
      .gallery-item img {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }
      .gallery-item p {
        margin: 0;
        padding: 15px;
        font-size: 14px;
        color: #555;
      }
      .add-button {
        display: block;
        text-align: center;
        margin: 30px auto;
        padding: 12px 24px;
        background-color: #4facfe;
        color: white;
        font-weight: bold;
        text-decoration: none;
        border-radius: 8px;
        width: fit-content;
        transition: background-color 0.3s;
      }
      .add-button:hover {
        background-color: #379efd;
      }
    `;
    document.head.appendChild(style);
  
    const h1 = document.createElement("h1");
    h1.textContent = "Galería de Imágenes";
  
    const gallery = document.createElement("div");
    gallery.className = "gallery";
  
    const images = JSON.parse(localStorage.getItem("gallery")) || [];
    images.forEach(({ url, descripcion }) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
  
      const img = document.createElement("img");
      img.src = url;
      img.alt = descripcion;
  
      const text = document.createElement("p");
      text.textContent = descripcion;
  
      item.appendChild(img);
      item.appendChild(text);
      gallery.appendChild(item);
    });
  
    const addLink = document.createElement("a");
    addLink.className = "add-button";
    addLink.href = "registro.html";
    addLink.textContent = "Agregar Nueva Imagen";
  
    body.appendChild(h1);
    body.appendChild(gallery);
    body.appendChild(addLink);
  });
  