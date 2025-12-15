
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");

  const mImg = document.getElementById("mImg");
  const mName = document.getElementById("mName");
  const mPrice = document.getElementById("mPrice");
  const mDesc = document.getElementById("mDesc");

  document.querySelectorAll(".openLink").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      mName.textContent  = link.dataset.name || "";
      mPrice.textContent = link.dataset.price || "";
      mDesc.textContent  = link.dataset.desc || "";

      const img = link.dataset.img || "";
      mImg.src = img;
      mImg.alt = link.dataset.name || "Ảnh";

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.style.display = "none"; });

