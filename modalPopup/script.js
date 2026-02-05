const modalOverlay = document.querySelector("#modalOverlay");
const allModals = document.querySelectorAll(".modal");
const modalButtons = document.querySelectorAll("[data-modal]");
const openLoadingBtn = document.querySelector("#openLoading");

// Open specific modal
function openModal(modalId) {
  // Hide all modals first
  allModals.forEach((modal) => modal.style.display = "none");

  const modalToOpen = document.getElementById(modalId);
  modalToOpen.style.display = "block";

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close all modals
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Open modal buttons
modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal;
    openModal(modalId);
  });
});

// Close buttons inside modals
modalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-close")) {
    closeModal();
  }

  // Click outside modal
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Confirm buttons
document.querySelectorAll(".confirmBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Confirmed!");
    closeModal();
  });
});

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

// Loading modal logic
openLoadingBtn.addEventListener("click", () => {
  openModal("loadingModal");

  // Simulate API call / loading
  setTimeout(() => {
    closeModal();
    alert("Loading finished!");
  }, 3000);
});
