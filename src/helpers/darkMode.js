export function darkMode() {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  return html.classList.contains("dark");
}
