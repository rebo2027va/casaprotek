document.addEventListener("DOMContentLoaded", function() {
  console.log("Página de Casaprotek cargada correctamente.");

  const leadForm = document.getElementById("lead-form");
  if (!(leadForm instanceof HTMLFormElement)) {
    return;
  }

  leadForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = formData.get("name");
    const service = formData.get("service");
    const location = formData.get("location");
    const details = formData.get("details");

    if (typeof name !== "string" || typeof service !== "string" || typeof location !== "string") {
      return;
    }

    const message = [
      `Hola, soy ${name.trim()}.`,
      `Quiero consultar por: ${service}.`,
      `Comuna del proyecto: ${location.trim()}.`,
      typeof details === "string" && details.trim() ? `Más detalles: ${details.trim()}` : ""
    ].filter(Boolean).join("\n");

    window.location.assign(`https://wa.me/56997177217?text=${encodeURIComponent(message)}`);
  });
});