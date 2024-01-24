export function lightbox(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const dialog = createLightbox()
  document.body.append(dialog);

  img.addEventListener("click", () => {
    openDialog(img.cloneNode(true))
  })

  return img;
}

function createLightbox() {
  const dialog = document.createElement("dialog");
  const button = document.createElement("button");
  button.autofocus = true;
  button.innerText = "Close";

  const content = document.createElement("div");
  content.classList.add("content");

  dialog.append(button, content);
  button.addEventListener("click", () => {
    dialog.close();
  })
  return dialog
}

function openDialog(element) {
  const dialog = document.querySelector("dialog");
  const content = dialog.querySelector(".content");
  content.innerHTML = "";
  content.append(element);

  dialog.showModal();
}