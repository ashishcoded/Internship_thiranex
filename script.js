document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = [
    { id: "name", message: "Please enter your full name." },
    { id: "email", message: "Please enter a valid email address." },
    { id: "subject", message: "Please enter a subject." },
    { id: "message", message: "Please enter a message of at least 10 characters." }
  ];

  const status = document.querySelector("#form-status");

  function validateField(field, message) {
    const error = document.querySelector(`#${field.id}-error`);
    const valid = field.checkValidity();

    field.setAttribute("aria-invalid", String(!valid));
    error.textContent = valid ? "" : message;
    return valid;
  }

  fields.forEach(({ id, message }) => {
    const field = document.getElementById(id);
    field.addEventListener("blur", () => validateField(field, message));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        validateField(field, message);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;
    let formIsValid = true;

    fields.forEach(({ id, message }) => {
      const field = document.getElementById(id);
      const valid = validateField(field, message);
      if (!valid && !firstInvalid) firstInvalid = field;
      formIsValid = formIsValid && valid;
    });

    if (!formIsValid) {
      status.textContent = "Please correct the highlighted fields and try again.";
      firstInvalid.focus();
      return;
    }

    status.textContent = "Thank you! Your message has been validated successfully. Connect a backend or form service to receive submissions.";
    form.reset();

    fields.forEach(({ id }) => {
      const field = document.getElementById(id);
      field.removeAttribute("aria-invalid");
    });
  });
});
