// ========== SquadClarity Loader (SC) v1.0 ==========

(function () {
  const script = document.currentScript;
  const client = script?.getAttribute("data-sc-client");

  if (!client) return;

  const sc = document.createElement("script");
  sc.src = "https://cdn.jsdelivr.net/gh/squadclarity/sc-attributor@v1.1.5/sc-attributor-v1.1.5.js";
  sc.defer = true;
  sc.setAttribute("data-sc-client", client);

  document.head.appendChild(sc);
})();

