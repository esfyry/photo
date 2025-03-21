document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const reloadBtn = document.getElementById("reloadAlbum");

    const loadImages = () => {
        gallery.innerHTML = "";
        const images = ["images/photo1.jpg.JPG", "images/photo2.jpg.JPG",  "images/photo5.jpg", "images/photo6.jpg",  "images/photo9.jpg", "images/photo11.jpg", "images/photo13.jpg"];

        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Fotografie";
            img.classList.add("thumbnail");
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
            gallery.appendChild(img);
        });
    };

    loadImages();

    reloadBtn.addEventListener("click", loadImages);

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
