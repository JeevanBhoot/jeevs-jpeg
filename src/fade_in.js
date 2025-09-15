document.addEventListener("DOMContentLoaded", function () {
  // Keep page paint immediate; only fade images individually
  const photos = document.querySelectorAll("img");
  photos.forEach((photo) => {
    const onLoad = () => {
      photo.classList.remove("opacity-0");
      photo.classList.add("opacity-100");
      photo.removeEventListener("load", onLoad);
    };
    if (photo.complete) {
      onLoad();
    } else {
      photo.addEventListener("load", onLoad);
    }
  });
});
