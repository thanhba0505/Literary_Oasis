document.addEventListener("DOMContentLoaded", function () {
  repeatApp();
  addHTML();

  // function------
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

  function addHTML() {
    fetch("../HTML/--header.html")
      .then((response) => response.text())
      .then((data) => {
        const headerElements = document.querySelectorAll(".header");
        headerElements.forEach((element) => {
          element.innerHTML = data;
        });
      });

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
});

// FUNCTION ----------------------------

function setupCounter() {
  document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll(".input-number");

    quantityInputs.forEach(function (input) {
      input.addEventListener("input", function () {
        // Đảm bảo giá trị luôn dương và là số nguyên
        const value = parseInt(this.value);
        if (isNaN(value) || value < 0) {
          this.value = 0;
        }
      });
    });

    const plusButtons = document.querySelectorAll(
      ".btn-number[data-type='plus']"
    );
    const minusButtons = document.querySelectorAll(
      ".btn-number[data-type='minus']"
    );

    plusButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const inputField =
          this.closest(".input-group").querySelector(".input-number");
        inputField.value = parseInt(inputField.value) + 1;
      });
    });

    minusButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const inputField =
          this.closest(".input-group").querySelector(".input-number");
        const value = parseInt(inputField.value);
        if (value > 0) {
          inputField.value = value - 1;
        }
      });
    });
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

function showSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (window.innerWidth < 768) {
    if (sidebar.style.right === "100%") {
      sidebar.style.right = "33.33%";
      sidebar.style.opacity = "1";
      setTimeout(() => {
        overlay.style.display = "block";
      }, 10);
      overlay.style.opacity = "1";
    } else {
      sidebar.style.right = "100%";
      sidebar.style.opacity = "0";
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    }
    overlay.addEventListener("click", () => {
      if (sidebar.style.right !== "100%") {
        sidebar.style.right = "100%";
        sidebar.style.opacity = "0";
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.style.display = "none";
        }, 300);
      }
    });
  }
}

function showContent(contentId) {
  // Lấy ra các element div chứa nội dung
  const contentElements = document.querySelectorAll(".show-content");

  // Ẩn tất cả các div chứa nội dung
  contentElements.forEach((element) => {
    element.classList.add("opacity-0");
    element.classList.add("d-none");
    // alert(element);
  });

  // Hiển thị div chứa nội dung tương ứng
  const selectedContent = document.getElementById(contentId);

  if (selectedContent) {
    selectedContent.classList.remove("d-none");
    setTimeout(() => {
      selectedContent.classList.remove("opacity-0");
    }, 100);
    // serviceName.innerText = selectedContent.textContent.trim();
    // alert(selectedContent.style.opacity);
  }
}

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    // Sử dụng phương thức scrollIntoView để cuộn trang đến phần tử
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function truyenBien() {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const dichvu = document.querySelectorAll(".f-link");

      dichvu.forEach(function (element) {
        element.addEventListener("click", function (event) {
          sessionStorage.setItem("bienX", this.id);
        });
      });
    }, 100);
  });
}

function nhanBien_dichvu() {
  const x = String(sessionStorage.getItem("bienX"));
  setTimeout(() => {
    if (x !== null && x !== "undefined" && x !== "" && x !== "null") {
      showContent(x);
      sessionStorage.setItem("bienX", "");
    }
  }, 100);

  showContent((contentId = "f-dksd"));

  // Sự kiện click
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const dichvu = document.querySelectorAll(".f-link");

      dichvu.forEach(function (element) {
        element.addEventListener("click", function (event) {
          if (
            this.id == "f-dksd" ||
            this.id == "f-csbmttcn" ||
            this.id == "f-csbmtt" ||
            this.id == "f-gtlo" ||
            this.id == "f-htttns"
          ) {
            event.preventDefault();
            showContent(this.id);
            setTimeout(() => {
              scrollToElement("page-top");
            }, 200);
          } else {
            sessionStorage.setItem("bienX", this.id);
          }
        });
      });
    }, 100);
  });
}

function nhanBien_hotro() {
  const x = String(sessionStorage.getItem("bienX"));
  setTimeout(() => {
    if (x !== null && x !== "undefined" && x !== "" && x !== "null") {
      showContent(x);
      sessionStorage.setItem("bienX", "");
    }
  }, 100);

  showContent((contentId = "f-csdtht"));

  // Sự kiện click
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const dichvu = document.querySelectorAll(".f-link");

      dichvu.forEach(function (element) {
        element.addEventListener("click", function (event) {
          if (
            this.id == "f-csdtht" ||
            this.id == "f-csbhbh" ||
            this.id == "f-csvc" ||
            this.id == "f-csks" ||
            this.id == "f-ptttvxhd"
          ) {
            event.preventDefault();
            showContent(this.id);
            setTimeout(() => {
              scrollToElement("page-top");
            }, 200);
          } else {
            sessionStorage.setItem("bienX", this.id);
          }
        });
      });
    }, 100);
  });
}

function nhanBien_taikhoan() {
  const x = String(sessionStorage.getItem("bienX"));
  setTimeout(() => {
    if (x !== null && x !== "undefined" && x !== "" && x !== "null") {
      showContent(x);
      sessionStorage.setItem("bienX", "");
    }
  }, 100);

  showContent((contentId = "f-dhct"));

  // Sự kiện click
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const dichvu = document.querySelectorAll(".f-link");

      dichvu.forEach(function (element) {
        element.addEventListener("click", function (event) {
          if (
            this.id == "f-bdktk" ||
            this.id == "f-tttk" ||
            this.id == "f-sdc" ||
            this.id == "f-dhct" ||
            this.id == "f-vv" ||
            this.id == "f-tkf" ||
            this.id == "f-nxct" ||
            this.id == "f-tb" ||
            this.id == "f-dkntdt"
          ) {
            event.preventDefault();
            showContent(this.id);
            setTimeout(() => {
              scrollToElement("page-top");
            }, 200);
          } else {
            sessionStorage.setItem("bienX", this.id);
          }
        });
      });
    }, 100);
  });
}

function slideScroll() {
  $(".slide-product").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: inline-block;"><i class="fa-solid fa-chevron-right"></i></button>`,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: inline-block;"><i class="fa-solid fa-chevron-left"></i></button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  $(".slide-navbar").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
  });
}
