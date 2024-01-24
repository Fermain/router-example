
function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  alert(name);
}

export function setupContactPage() {
  document.forms.contact.addEventListener("submit", onSubmit)
}