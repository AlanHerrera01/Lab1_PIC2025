document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
  
    // Estilos
    const style = document.createElement("style");
    style.textContent = `
      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(to right, #4facfe, #00f2fe);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .form-container {
        background-color: white;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        padding: 30px;
        width: 350px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .form-container h2 {
        text-align: center;
        margin-bottom: 10px;
        color: #333;
      }
      .form-group label {
        font-weight: 600;
        margin-bottom: 5px;
        display: block;
        color: #444;
      }
      .form-group input {
        width: 100%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 14px;
        transition: 0.3s;
      }
      .form-group input:focus {
        border-color: #4facfe;
        outline: none;
        box-shadow: 0 0 5px rgba(79, 172, 254, 0.5);
      }
      .submit-btn {
        background-color: #4facfe;
        color: white;
        padding: 12px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .submit-btn:hover {
        background-color: #379efd;
      }
    `;
    document.head.appendChild(style);
  
    // Contenedor del formulario
    const container = document.createElement("div");
    container.className = "form-container";
  
    const title = document.createElement("h2");
    title.textContent = "Agregar Imagen";
  
    const form = document.createElement("form");
  
    const createField = (labelText, inputType, name) => {
      const wrapper = document.createElement("div");
      wrapper.className = "form-group";
  
      const label = document.createElement("label");
      label.htmlFor = name;
      label.textContent = labelText;
  
      const input = document.createElement("input");
      input.type = inputType;
      input.id = name;
      input.name = name;
      input.required = true;
  
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      return wrapper;
    };
  
    const urlField = createField("URL de la Imagen", "url", "url");
    const descField = createField("Descripción", "text", "descripcion");
  
    const submit = document.createElement("button");
    submit.className = "submit-btn";
    submit.type = "submit";
    submit.textContent = "Guardar";
  
    form.appendChild(urlField);
    form.appendChild(descField);
    form.appendChild(submit);
    container.appendChild(title);
    container.appendChild(form);
    body.appendChild(container);
  
    // Evento de envío
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const url = form.url.value.trim();
      const descripcion = form.descripcion.value.trim();
  
      if (!url || descripcion.length < 3) {
        alert("La URL no puede estar vacía y la descripción debe tener al menos 3 caracteres.");
        return;
      }
  
      const galeria = JSON.parse(localStorage.getItem("gallery")) || [];
      galeria.push({ url, descripcion });
      localStorage.setItem("gallery", JSON.stringify(galeria));
  
      location.href = "index.html"; // Redirigir a la página principal
    });
  });
  