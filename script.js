const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

toggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
});
