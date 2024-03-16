export const setRtlMode = () => {
  bodyStore.addBodyClassname("page-loading");
  var link = document.getElementById("main-css");
  link?.setAttribute("href", "/style.bundle.rtl.css");
  document.documentElement.setAttribute("dir", "rtl");
  document.documentElement.setAttribute("direction", "rtl");
  document.documentElement.setAttribute("style", "direction:rtl");
  setTimeout(() => {
    bodyStore.removeBodyClassName("page-loading");
  }, 1000);
};

// Define the function to switch to LTR mode
export const setLtrMode = () => {
  bodyStore.addBodyClassname("page-loading");
  var link = document.getElementById("main-css");
  document.documentElement.removeAttribute("dir");
  document.documentElement.removeAttribute("direction");
  document.documentElement.removeAttribute("style");
  link?.setAttribute("href", "/style.bundle.css");
  setTimeout(() => {
    bodyStore.removeBodyClassName("page-loading");
  }, 1000);
};
