document.addEventListener("DOMContentLoaded", () => {
  renderRegisterLayout();
});

function renderRegisterLayout() {
  document.body.innerHTML = ""; // Limpiar el body

  injectStylesRegister();

  const container = document.createElement("div");
  container.className = "container";

  const header = document.createElement("header");
  header.textContent = "Registrar Nueva Imagen";
  header.className = "header";

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const form = document.createElement("form");
  form.className = "form";

  const urlField = createField("URL de la imagen", "url", "text", "url");
  const descField = createField("Descripción", "descripcion", "text", "descripcion");

  form.appendChild(urlField);
  form.appendChild(descField);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Registrar Imagen";
  submitBtn.type = "submit";
  submitBtn.className = "btn";
  form.appendChild(submitBtn);

  form.addEventListener("submit", handleSubmit);

  formContainer.appendChild(form);

  container.appendChild(header);
  container.appendChild(formContainer);

  document.body.appendChild(container);
}

function createField(labelText, name, type, id) {
  const fieldWrapper = document.createElement("div");
  fieldWrapper.className = "form-field";

  const label = document.createElement("label");
  label.textContent = labelText;
  label.setAttribute("for", id);

  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.id = id;
  input.required = true;

  fieldWrapper.appendChild(label);
  fieldWrapper.appendChild(input);

  return fieldWrapper;
}

function handleSubmit(event) {
  event.preventDefault();

  const url = document.querySelector("#url").value;
  const descripcion = document.querySelector("#descripcion").value;

  if (url.trim() === "" || descripcion.trim().length < 3) {
      alert("Por favor, ingrese una URL válida y una descripción de al menos 3 caracteres.");
      return;
  }

  const imagen = { url, descripcion };

  let images = JSON.parse(localStorage.getItem("imagenes")) || [];
  images.push(imagen);
  localStorage.setItem("imagenes", JSON.stringify(images));

  window.location.href = "index.html";
}

function injectStylesRegister() {
  const style = document.createElement("style");
  style.textContent = `
      body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #f0f0f0;
      }
      .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          padding: 20px;
      }
      header {
          background-color: #333;
          color: white;
          padding: 20px;
          width: 100%;
          text-align: center;
      }
      .form-container {
          background-color: white;
          padding: 25px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 100%;
          max-width: 400px;
      }
      .form-field {
          margin-bottom: 20px;
      }
      .form-field label {
          display: block;
          margin-bottom: 8px;
          font-size: 1rem;
          color: #333;
      }
      .form-field input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
      }
      .form-field input:focus {
          border-color: #00bcd4;
          outline: none;
          background-color: #f0f0f0;
      }
      .btn {
          background-color: #00bcd4;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 5px;
          width: 100%;
          font-size: 1.2rem;
          cursor: pointer;
      }
      .btn:hover {
          background-color: #0097a7;
      }
  `;
  document.head.appendChild(style);
}
