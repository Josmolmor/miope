function createBlurOverlay() {
  // Create overlay element
  const overlay = document.createElement("div");

  // Set unique id for later reference
  overlay.id = "privacy-blur-overlay";

  // Apply styles
  Object.assign(overlay.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100dvw",
    height: "100dvh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: "9999",
    transition: "opacity 0.3s ease",
  });

  // Add overlay and button to DOM
  document.body.appendChild(overlay);

  // Return remove function
  return {
    remove: () => {
      const element = document.getElementById("privacy-blur-overlay");
      if (element) element.remove();
    },
  };
}

exists = document.getElementById("privacy-blur-overlay");
if (exists) {
  blurOverlay.remove();
  false;
} else {
  blurOverlay = createBlurOverlay();
  true;
}
