var writeusOpen = document.querySelector(".write-us-open");
var writeusForm =  document.querySelector(".modal-write-us");
var writeusClose =  document.querySelector(".modal-write-us-close");

if (writeusOpen) {
  if (writeusForm) {
    writeusForm.classList.add("modal-hide");
  };

  writeusOpen.addEventListener("click", function (event) {
    event.preventDefault();
    writeusForm.classList.remove("modal-hide");
  });

  writeusClose.addEventListener("click", function (event) {
    event.preventDefault();
    writeusForm.classList.add("modal-hide");
  });
};


var mapOpen = document.querySelector(".map-open");
var map =  document.querySelector(".modal-map");
var mapClose =  document.querySelector(".modal-map-close");

if (mapOpen) {
  if (map) {
    writeusForm.classList.add("modal-hide");
  };

  mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.remove("modal-hide");
  });

  mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.add("modal-hide");
  });
};
