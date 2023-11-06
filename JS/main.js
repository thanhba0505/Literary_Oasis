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

document.addEventListener("mousedown", function (e) {
  if (e.target.nodeName === "HTML" || e.target.nodeName === "BODY") {
    e.preventDefault();
  }
});

// FUNCTION ----------------------------

function home() {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const btnLogin = document.getElementById("login");
      const btnRegister = document.getElementById("register");

      btnLogin.addEventListener("click", function () {
        sessionStorage.setItem("login_register", btnLogin.id);
        // alert(String(sessionStorage.getItem("login_register")))
      });
      btnRegister.addEventListener("click", function () {
        sessionStorage.setItem("login_register", btnRegister.id);
        // alert(String(sessionStorage.getItem("login_register")))
      });

      const btnNotification = document.getElementById("btn_notification");

      btnNotification.addEventListener("click", function () {
        sessionStorage.setItem("bienX", "f-tb");
        // alert(String(sessionStorage.getItem("login_register")))
      });
    }, 100);
  });
}

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
      const fLink = document.querySelectorAll(".f-link");

      fLink.forEach(function (element) {
        element.addEventListener("click", function () {
          sessionStorage.setItem("bienX", this.id);
        });
      });
    }, 500);
  });
}

function nhanBien_dichvu() {
  let x = String(sessionStorage.getItem("bienX"));
  // Lấy tất cả các button trong danh sách có id là 'nav-list'
  const buttons = document.querySelectorAll("#nav-list button");
  const tabPanes = document.querySelectorAll("#tab_content .tab-pane");

  document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra nếu x là null hoặc rỗng thì chọn button đầu tiên và tab pane đầu tiên
    if (x == null || x == "undefined" || x == "" || x == "null") {
      const firstButton = buttons[0];
      const firstTabPane = tabPanes[0];

      firstButton.classList.add("active");
      firstTabPane.classList.add("show", "active");

      sessionStorage.setItem("bienX", "");
      return;
    }

    buttons.forEach((button) => {
      // Lấy giá trị của thuộc tính data-bs-target
      const ariaControls = button.getAttribute("aria-controls");
      const tabPane = document.getElementById(ariaControls);

      button.addEventListener("click", () => {
        sessionStorage.setItem("bienX", "f-" + ariaControls);
      });

      if (x == "f-" + ariaControls) {
        button.classList.add("active");
        tabPane.classList.add("show", "active");
        // sessionStorage.setItem("bienX", "");
      } else {
        button.classList.remove("active");
        tabPane.classList.remove("show", "active");
      }
    });

    setTimeout(() => {
      const fLink = document.querySelectorAll(".f-link");

      fLink.forEach(function (element) {
        element.addEventListener("click", function (event) {
          if (
            this.id == "f-dksd" ||
            this.id == "f-csbmttcn" ||
            this.id == "f-csbmtt" ||
            this.id == "f-gtlo" ||
            this.id == "f-htttns"
          ) {
            event.preventDefault();
            buttons.forEach((button) => {
              const ariaControls = button.getAttribute("aria-controls");
              const tabPane = document.getElementById(ariaControls);
              if (this.id == "f-" + ariaControls) {
                button.classList.add("active");
                tabPane.classList.add("show", "active");
                // sessionStorage.setItem("bienX", "");
              } else {
                button.classList.remove("active");
                tabPane.classList.remove("show", "active");
              }
            });

            setTimeout(() => {
              scrollToElement("header");
            }, 10);
          }
          sessionStorage.setItem("bienX", this.id);
        });
      });
    }, 500);
  });
}

function nhanBien_hotro() {
  let x = String(sessionStorage.getItem("bienX"));
  // Lấy tất cả các button trong danh sách có id là 'nav-list'
  const buttons = document.querySelectorAll("#nav-list button");
  const tabPanes = document.querySelectorAll("#tab_content .tab-pane");

  document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra nếu x là null hoặc rỗng thì chọn button đầu tiên và tab pane đầu tiên
    if (x == null || x == "undefined" || x == "" || x == "null") {
      const firstButton = buttons[0];
      const firstTabPane = tabPanes[0];

      firstButton.classList.add("active");
      firstTabPane.classList.add("show", "active");

      sessionStorage.setItem("bienX", "");
      return;
    }

    buttons.forEach((button) => {
      // Lấy giá trị của thuộc tính data-bs-target
      const ariaControls = button.getAttribute("aria-controls");
      const tabPane = document.getElementById(ariaControls);

      button.addEventListener("click", () => {
        sessionStorage.setItem("bienX", "f-" + ariaControls);
      });

      if (x == "f-" + ariaControls) {
        button.classList.add("active");
        tabPane.classList.add("show", "active");
        // sessionStorage.setItem("bienX", "");
      } else {
        button.classList.remove("active");
        tabPane.classList.remove("show", "active");
      }
    });

    setTimeout(() => {
      const fLink = document.querySelectorAll(".f-link");

      fLink.forEach(function (element) {
        element.addEventListener("click", function (event) {
          if (
            this.id == "f-csdtht" ||
            this.id == "f-csbhbh" ||
            this.id == "f-csvc" ||
            this.id == "f-csks" ||
            this.id == "f-ptttvxhd"
          ) {
            event.preventDefault();
            buttons.forEach((button) => {
              const ariaControls = button.getAttribute("aria-controls");
              const tabPane = document.getElementById(ariaControls);
              if (this.id == "f-" + ariaControls) {
                button.classList.add("active");
                tabPane.classList.add("show", "active");
                // sessionStorage.setItem("bienX", "");
              } else {
                button.classList.remove("active");
                tabPane.classList.remove("show", "active");
              }
            });

            setTimeout(() => {
              scrollToElement("header");
            }, 10);
          }
          sessionStorage.setItem("bienX", this.id);
        });
      });
    }, 500);
  });
}

function nhanBien_taikhoan() {
  let x = String(sessionStorage.getItem("bienX"));
  // alert(x)
  // Lấy tất cả các button trong danh sách có id là 'nav-list'
  const buttons = document.querySelectorAll("#nav-list button");
  const tabPanes = document.querySelectorAll("#tab_content .tab-pane");

  document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra nếu x là null hoặc rỗng thì chọn button đầu tiên và tab pane đầu tiên
    if (x == null || x == "undefined" || x == "" || x == "null") {
      const firstButton = buttons[0];
      const firstTabPane = tabPanes[0];

      firstButton.classList.add("active");
      firstTabPane.classList.add("show", "active");

      sessionStorage.setItem("bienX", "");
      return;
    }

    buttons.forEach((button) => {
      // Lấy giá trị của thuộc tính data-bs-target
      const ariaControls = button.getAttribute("aria-controls");
      const tabPane = document.getElementById(ariaControls);

      button.addEventListener("click", () => {
        sessionStorage.setItem("bienX", "f-" + ariaControls);
      });

      if (x == "f-" + ariaControls) {
        button.classList.add("active");
        tabPane.classList.add("show", "active");
        // sessionStorage.setItem("bienX", "");
      } else {
        button.classList.remove("active");
        tabPane.classList.remove("show", "active");
      }
    });

    setTimeout(() => {
      const fLink = document.querySelectorAll(".f-link");

      fLink.forEach(function (element) {
        element.addEventListener("click", function (event) {
          if (
            this.id == "f-bdktk" ||
            this.id == "f-tttk" ||
            this.id == "f-sdc" ||
            this.id == "f-dhct" ||
            this.id == "f-vv" ||
            this.id == "f-tkl" ||
            this.id == "f-tb"
          ) {
            event.preventDefault();
            buttons.forEach((button) => {
              const ariaControls = button.getAttribute("aria-controls");
              const tabPane = document.getElementById(ariaControls);
              if (this.id == "f-" + ariaControls) {
                button.classList.add("active");
                tabPane.classList.add("show", "active");
                // sessionStorage.setItem("bienX", "");
              } else {
                button.classList.remove("active");
                tabPane.classList.remove("show", "active");
              }
            });

            setTimeout(() => {
              scrollToElement("header");
            }, 10);
          }
          sessionStorage.setItem("bienX", this.id);
        });
      });
    }, 500);
  });
}

function login_register() {
  let x = String(sessionStorage.getItem("login_register"));

  const buttons = document.querySelectorAll("#nav-login-register button");
  const tabPanes = document.querySelectorAll("#tab_content .tab-pane");

  document.addEventListener("DOMContentLoaded", function () {
    if (x == null || x == "undefined" || x == "" || x == "null") {
      const firstButton = buttons[0];
      const firstTabPane = tabPanes[0];

      firstButton.classList.add("active");
      firstTabPane.classList.add("show", "active");

      sessionStorage.setItem("login_register", "");
      return;
    }

    buttons.forEach((button) => {
      // Lấy giá trị của thuộc tính data-bs-target
      const ariaControls = button.getAttribute("aria-controls");
      const tabPane = document.getElementById(ariaControls);

      button.addEventListener("click", () => {
        sessionStorage.setItem("login_register", ariaControls);
      });

      if ("tab_" + x == ariaControls || x == ariaControls) {
        button.classList.add("active");
        tabPane.classList.add("show", "active");
      } else {
        button.classList.remove("active");
        tabPane.classList.remove("show", "active");
      }
    });
  });
}

function slideScroll() {
  document.addEventListener("DOMContentLoaded", function () {
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
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            swipeToSlide: true,
          },
        },
      ],
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    $(".slide-navbar").slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      variableWidth: true,
      swipeToSlide: true,
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    $(".slide-item").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            swipeToSlide: true,
          },
        },
      ],
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    $(".slide-menu-card").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
          },
        },
      ],
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    $(".autoplay").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: inline-block;"><i class="fa-solid fa-chevron-right"></i></button>`,
      prevArrow: `<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: inline-block;"><i class="fa-solid fa-chevron-left"></i></button>`,
    });
  });
}

function btnGo() {
  const html = `<div class="btn-go position-fixed" id="btn-go">
  <div id="btn-go-up"><i class="fa-solid fa-chevron-up"></i></div>
  <div id="btn-go-down"><i class="fa-solid fa-chevron-down"></i></div>
</div>`;
  innerHTML(html, "container", null);

  const btnUp = document.getElementById("btn-go-up");
  const btnDown = document.getElementById("btn-go-down");

  btnUp.setAttribute("onclick", "scrollToElement('header')");
  btnDown.setAttribute("onclick", "scrollToElement('footer')");

  const backToTopBtn = document.getElementById("btn-go");
  let isHidden = true; // Biến để kiểm tra xem nút đã ẩn hay chưa
  let timeoutId = null; // Biến để lưu ID của setTimeout
  let lastScrollY = window.scrollY;
  // Lắng nghe sự kiện cuộn trang
  window.addEventListener("scroll", () => {
    // Kiểm tra hướng cuộn: cuộn lên (scrollY giảm) hoặc cuộn xuống (scrollY tăng)
    const currentScrollY = window.scrollY;
    // alert(currentScrollY.toString() + "----" + lastScrollY.toString())

    if (currentScrollY < lastScrollY) {
      if (isHidden) {
        // Hiển thị nút khi cuộn lên và nút đang ẩn
        backToTopBtn.style.opacity = "1";
        isHidden = false;
      }

      // Reset timeout để ẩn nút sau 3 giây
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        backToTopBtn.style.opacity = "0";
        isHidden = true;
      }, 1000); // Thời gian ẩn sau 3 giây (3000ms)
    } else {
      backToTopBtn.style.opacity = "0";
      isHidden = true;
    }

    lastScrollY = currentScrollY;
  });
}

function innerHTML(html, contentID, contentClass) {
  if (contentID) {
    const content = document.getElementById(contentID);
    if (content) {
      content.innerHTML += html;
    }
  }

  if (contentClass) {
    const contents = document.querySelectorAll("." + contentClass);
    contents.forEach((element) => {
      element.innerHTML += html;
    });
  }
}

function inputCheckText(check, text) {
  const enableInputCheckbox = document.getElementById(check);
  const textInput = document.getElementById(text);
  textInput.disabled = !this.checked;
  enableInputCheckbox.addEventListener("change", function () {
    textInput.disabled = !this.checked;
  });
}

function setX(x) {
  sessionStorage.setItem("bienX", x);
}

$(document).ready(function () {
  const input1 = $("#loginEmailPhone");
  const input2 = $("#loginPassword");
  const btn = $("#dangNhap");

  $(input1).keypress(function (e) {
    if (e.which === 13) {
      $(input2).focus();
    }
  });

  $(input2).keypress(function (e) {
    if (e.which === 13) {
      $(input2).blur();
      $(btn).click();
    }
  });

  btn.click(function (e) {
    const regexSDTEmail = /^(?:0[0-9]{9,10}|[A-Za-z0-9.]+@gmail\.com)$/;
    const regexMatKhau = /^[A-Za-z0-9!@#$%^&*()_+]{6,15}$/;
    let check = 0;

    if (regexSDTEmail.test(input1.val())) {
      $("#error_dangNhap1").css("display", "none");
      check += 1;
    } else {
      $("#error_dangNhap1").css("display", "inline-block");
      e.preventDefault();
    }

    if (regexMatKhau.test(input2.val())) {
      $("#error_dangNhap2").css("display", "none");
      check += 1;
    } else {
      $("#error_dangNhap2").css("display", "inline-block");
      e.preventDefault();
    }

    if (check === 2) {
      setX("f-tttk");
    }
  });
});

$(document).ready(function () {
  const input1 = $("#registerPhoneNumber");
  const input2 = $("#registerOTP");
  const input3 = $("#registerNewPassword");
  const input4 = $("#registerRepeatPassword");
  const input5 = $("#agreeCheckbox");
  const btn = $("#dangKy");

  $(input1).keypress(function (e) {
    if (e.which === 13) {
      $(input2).focus();
    }
  });

  $(input2).keypress(function (e) {
    if (e.which === 13) {
      $(input3).focus();
    }
  });

  $(input3).keypress(function (e) {
    if (e.which === 13) {
      $(input4).focus();
    }
  });

  $(input4).keypress(function (e) {
    if (e.which === 13) {
      $(input4).blur();
      $(btn).click();
    }
  });

  btn.click(function (e) {
    const regexSDT = /^0[0-9]{9,10}$/;
    const regexOTP = /^[0-9]{6,6}$/;
    const regexMatKhau = /^[A-Za-z0-9!@#$%^&*()_+]{6,15}$/;
    let check = 0;

    if (regexSDT.test(input1.val())) {
      $("#error_dangky1").css("display", "none");
      check += 1;
    } else {
      $("#error_dangky1").css("display", "inline-block");
      e.preventDefault();
    }

    const OTP_test = 123456; // giả sử
    if (regexOTP.test(input2.val()) && input2.val() == "123456") {
      $("#error_dangky2").css("display", "none");
      check += 1;
    } else {
      $("#error_dangky2").css("display", "inline-block");
      e.preventDefault();
    }

    if (regexMatKhau.test(input3.val())) {
      $("#error_dangky3").css("display", "none");
      check += 1;
    } else {
      $("#error_dangky3").css("display", "inline-block");
      e.preventDefault();
    }

    if (regexMatKhau.test(input4.val()) && input3.val() == input4.val()) {
      $("#error_dangky4").css("display", "none");
      check += 1;
    } else {
      $("#error_dangky4").css("display", "inline-block");
      e.preventDefault();
    }

    if (input5.is(":checked")) {
      $("#error_dangky5").css("display", "none");
      check += 1;
    } else {
      $("#error_dangky5").css("display", "inline-block");
      e.preventDefault();
    }
    if (check === 5) {
      setX("f-tttk");
    }
  });
});

