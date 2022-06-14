const scrollFunction = (selector = ".request-demo") => {
  const header = window.document.querySelector(".page-header");

  const headerHeight = header.offsetHeight;

  const element = document.querySelector(selector).offsetTop - headerHeight;

  window.scrollTo({ top: element, behavior: "smooth" });
};

export default scrollFunction;
