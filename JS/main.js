document.addEventListener("DOMContentLoaded", function () {
  // Load trang -------------------------------------------------
  repeatApp();

  // Lấy thời gian ---------------------------------------------------
  // Gọi hàm cập nhật thời gian mỗi giây
  setInterval(updateClock, 1000);

  // Gọi hàm cập nhật thời gian một lần ngay khi trang được tải
  updateClock();

  // Nạp html--------------------------------------------------------
  addHTML();

  // Form dang ky dang nhap -----------------------------------------
  acount();

  // Cộng trừ số lượng---------------------

  num();

  // Cuộn ngang----------------------------------
  scrollX();

  // Các chức năng khác
  // other();

  // FUNCTION -------------------------------------------------

  function repeatApp() {
    const app = document.querySelectorAll(".body");
    app.forEach((element) => {
      setTimeout(() => {
        element.classList.add("opacity-100");
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
    fetch("../HTML/--header.html")
      .then((response) => response.text())
      .then((data) => {
        const headerElements = document.querySelectorAll(".header");
        headerElements.forEach((element) => {
          element.innerHTML = data;
        });
      });
    console.log("add html");
    fetch("../HTML/--footer.html")
      .then((response) => response.text())
      .then((data) => {
        const footerElements = document.querySelectorAll(".footer");
        footerElements.forEach((element) => {
          element.innerHTML = data;
        });
      });

    fetch("../HTML/--item.html")
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
    const formGroup = document.querySelectorAll(".dangnhap-dangky");

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
      fetch("../HTML/--login.html")
        .then((response) => response.text())
        .then((data) => {
          formGroup.forEach((element) => {
            // Thêm lớp "hidden" để ẩn nội dung
            setTimeout(() => {
              element.classList.add("transition-opacity");
            }, 10);
            element.classList.add("opacity-0");

            // Đặt nội dung mới
            element.innerHTML = data;

            // Loại bỏ lớp "hidden" để hiển thị nội dung với hiệu ứng mượt
            setTimeout(() => {
              element.classList.remove("opacity-0");
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
      fetch("../HTML/--register.html")
        .then((response) => response.text())
        .then((data) => {
          formGroup.forEach((element) => {
            // Thêm lớp "hidden" để ẩn nội dung
            setTimeout(() => {
              element.classList.add("transition-opacity");
            }, 10);
            element.classList.add("opacity-0");

            // Đặt nội dung mới
            element.innerHTML = data;

            // Loại bỏ lớp "hidden" để hiển thị nội dung với hiệu ứng mượt
            setTimeout(() => {
              element.classList.remove("opacity-0");
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

  function scrollX() {
    let isDragging = false;
    let startX, scrollLeft;

    const draggableRow = document.querySelector(".draggable-row");

    draggableRow.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - draggableRow.offsetLeft;
      scrollLeft = draggableRow.scrollLeft;
    });

    draggableRow.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - draggableRow.offsetLeft;
      scrollLeft = draggableRow.scrollLeft;
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    document.addEventListener("touchend", () => {
      isDragging = false;
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - draggableRow.offsetLeft;
      const walk = (x - startX) * 3; // Tùy chỉnh độ nhạy
      draggableRow.scrollLeft = scrollLeft - walk;
    });

    document.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - draggableRow.offsetLeft;
      const walk = (x - startX) * 3; // Tùy chỉnh độ nhạy
      draggableRow.scrollLeft = scrollLeft - walk;
    });
  }

  function num() {
    const numInput = document.getElementById("num");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", () => {
      let num = parseInt(numInput.value);
      num = isNaN(num) ? 0 : num;
      numInput.value = num + 1;
    });

    decrementButton.addEventListener("click", () => {
      let num = parseInt(numInput.value);
      num = isNaN(num) ? 0 : num;
      if (num > 0) {
        numInput.value = num - 1;
      }
    });
  }

  function other() {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const pathname = url.pathname;
  }
});
