(function () {
  // Safety: ensure core tracker exists
  if (!window.scTrackEvent || !window.scContext) {
    console.warn("SC Custom Intents (Harters): core tracker not found");
    return;
  }

  const CLIENT_KEY = "harters_disposal";
  const INTENT_TYPE = "contract_step_reached";
  const INTENT_LABEL = "Reached Contract Step";
  const SELECTOR = "#salesstryke-contract-next-btn";

  // Prevent duplicate firing across SPA renders
  let intentFired = false;

  document.addEventListener("click", function (e) {
    if (intentFired) return;

    const btn = e.target.closest(SELECTOR);
    if (!btn) return;

    intentFired = true;

    window.scTrackEvent({
      event_type: "custom_intent",
      client: CLIENT_KEY,

      intent_type: INTENT_TYPE,
      intent_label: INTENT_LABEL,

      page_url: window.location.href,
      selector: SELECTOR,

      visitor_id: window.scContext.visitor_id || null,
      session_id: window.scContext.session_id || null
    });

    console.log("SC Custom Intent fired:", INTENT_LABEL);
  });
})();
