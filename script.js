document.addEventListener("DOMContentLoaded", function () {
    const images_1 = document.querySelectorAll(".changing_images:first-child img");
    const images_2 = document.querySelectorAll(".changing_images:last-child img");

    let index = 0;

    function changeImages() {
        images_1.forEach(img => img.classList.remove("active"));
        images_2.forEach(img => img.classList.remove("active"));

        images_1[index].classList.add("active");
        images_2[index].classList.add("active");

        index = (index + 1) % images_1.length;
    }

    setInterval(changeImages, 2000); // Change images every 2 seconds
});
