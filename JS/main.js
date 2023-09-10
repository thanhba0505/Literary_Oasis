document.addEventListener("DOMContentLoaded", function () {
  // Load trang -------------------------------------------------
  repeatApp();

  // Lấy thời gian ---------------------------------------------------
  // Gọi hàm cập nhật thời gian mỗi giây
  setInterval(updateClock, 1000);

  // Gọi hàm cập nhật thời gian một lần ngay khi trang được tải
  updateClock();

  // Nạp html---------------------------------------------------------
  addHTML();

  // Form dang ky dang nhap -----------------------------------------
  // acount();

  // Các chức năng khác
  // other();

  // FUNCTION ----------------------------------------------------

  function repeatApp() {
    const app = document.querySelectorAll(".app");
    app.forEach((element) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, 0);
      setTimeout(() => {
        element.classList.remove("transition-opacity");
      }, 1000);
    });
  }

  function updateClock() {
    const numHours = document.querySelectorAll(".number-h");
    const numMinutes = document.querySelectorAll(".number-m");
    const numSeconds = document.querySelectorAll(".number-s");
    const now = new Date();

    // Lấy giờ, phút và giây
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    // Cập nhật nội dung thời gian trên trang web
    numHours.forEach((element) => {
      element.textContent = hours;
    });

    numMinutes.forEach((element) => {
      element.textContent = minutes;
    });

    numSeconds.forEach((element) => {
      element.textContent = seconds;
    });
  }

  function addHTML() {
    fetch("../HTML-/--header.html")
      .then((response) => response.text())
      .then((data) => {
        const headerElements = document.querySelectorAll(".header");
        headerElements.forEach((element) => {
          element.innerHTML = data;
        });
      });
    console.log("add html");
    fetch("../HTML-/--footer.html")
      .then((response) => response.text())
      .then((data) => {
        const footerElements = document.querySelectorAll(".footer");
        footerElements.forEach((element) => {
          element.innerHTML = data;
        });
      });

    fetch("../HTML-/--item.html")
      .then((response) => response.text())
      .then((data) => {
        const itemElements = document.querySelectorAll(".product-item");
        itemElements.forEach((element) => {
          element.innerHTML = data;
        });
      });
  }

  function acount() {
    const formButtonsDangnhap = document.querySelectorAll(".dangnhap");
    const formButtonsDangky = document.querySelectorAll(".dangky");
    const formGroup = document.querySelectorAll(".form-group");

    formButtonsDangnhap.forEach((button) => {
      button.addEventListener("click", changeContentDangnhap);
    });

    formButtonsDangky.forEach((button) => {
      button.addEventListener("click", changeContentDangky);
    });

    // Lấy tham số từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");

    // Nếu tham số action là "login", thực hiện đăng nhập
    if (action === "login") {
      changeContentDangnhap();
    }

    // Nếu tham số action là "register", thực hiện đăng ký
    else if (action === "register") {
      changeContentDangky();
    }

    // Nếu tham số action là null thì mặc định Đăng nhập
    else if (action === null) {
      changeContentDangnhap();
    }

    function changeContentDangnhap() {
      fetch("../HTML/repeat/login.html")
        .then((response) => response.text())
        .then((data) => {
          formGroup.forEach((element) => {
            // Thêm lớp "hidden" để ẩn nội dung
            setTimeout(() => {
              element.classList.add("transition-opacity");
            }, 10);
            element.classList.add("hidden");

            // Đặt nội dung mới
            element.innerHTML = data;

            // Loại bỏ lớp "hidden" để hiển thị nội dung với hiệu ứng mượt
            setTimeout(() => {
              element.classList.remove("hidden");
            }, 10);
            element.classList.remove("transition-opacity");
          });

          formButtonsDangnhap.forEach((element) => {
            element.classList.add("form-active");
            element.classList.remove("form-disabled");
          });

          formButtonsDangky.forEach((element) => {
            element.classList.add("form-disabled");
            element.classList.remove("form-active");
          });
        });
    }

    function changeContentDangky() {
      fetch("../HTML/repeat/register.html")
        .then((response) => response.text())
        .then((data) => {
          formGroup.forEach((element) => {
            // Thêm lớp "hidden" để ẩn nội dung
            setTimeout(() => {
              element.classList.add("transition-opacity");
            }, 10);
            element.classList.add("hidden");

            // Đặt nội dung mới
            element.innerHTML = data;

            // Loại bỏ lớp "hidden" để hiển thị nội dung với hiệu ứng mượt
            setTimeout(() => {
              element.classList.remove("hidden");
            }, 10);
            element.classList.remove("transition-opacity");
          });

          formButtonsDangky.forEach((element) => {
            element.classList.add("form-active");
            element.classList.remove("form-disabled");
          });

          formButtonsDangnhap.forEach((element) => {
            element.classList.add("form-disabled");
            element.classList.remove("form-active");
          });
        });
    }
  }

  function other() {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const pathname = url.pathname;
  }

  let isMouseDown = false;
let isTouchStart = false;
let startX, scrollLeft;

const draggableRow = document.querySelector(".draggable-row");

// Sự kiện mousedown hoặc touchstart
draggableRow.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - draggableRow.offsetLeft;
  scrollLeft = draggableRow.scrollLeft;
});

draggableRow.addEventListener("touchstart", (e) => {
  isTouchStart = true;
  startX = e.touches[0].pageX - draggableRow.offsetLeft;
  scrollLeft = draggableRow.scrollLeft;
});

// Sự kiện mouseleave hoặc touchend
draggableRow.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

draggableRow.addEventListener("touchend", () => {
  isTouchStart = false;
});

// Sự kiện mouseup hoặc touchend
draggableRow.addEventListener("mouseup", () => {
  isMouseDown = false;
});

draggableRow.addEventListener("touchend", () => {
  isTouchStart = false;
});

// Sự kiện mousemove hoặc touchmove
draggableRow.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - draggableRow.offsetLeft;
  const walk = (x - startX) * 3; // Tùy chỉnh độ nhạy
  draggableRow.scrollLeft = scrollLeft - walk;
});

draggableRow.addEventListener("touchmove", (e) => {
  if (!isTouchStart) return;
  e.preventDefault();
  const x = e.touches[0].pageX - draggableRow.offsetLeft;
  const walk = (x - startX) * 3; // Tùy chỉnh độ nhạy
  draggableRow.scrollLeft = scrollLeft - walk;
});

});
