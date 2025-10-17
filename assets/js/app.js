// !Swiper inits
const handleAllSwiperInit = () => {
  const swiperConfigs = {
    heroSwiper: {
      // grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      watchSlidesProgress: true,
      speed: 700,
      navigation: {
        nextEl: ".hero-swiper-button-next",
        prevEl: ".hero-swiper-button-prev",
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      },
    },
    coursesSwiper: {
      // grabCursor: true,
      // initialSlide: 2,
      slidesPerView: "auto",
      spaceBetween: 24,
      watchSlidesProgress: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      speed: 700,
      navigation: {
        nextEl: ".courses-swiper-button-next",
        prevEl: ".courses-swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 49,
      },
      breakpoints: {
        768: {
          spaceBetween: 40,
          scrollbar: {
            dragSize: 148,
          },
        },
      },
      on: {
        init: (swiper) => {
          swiper.wrapperEl.style.width = `${swiper.wrapperEl.scrollWidth}px`;

          const slideWidth = swiper.slides[0].offsetWidth;
          // if (window.innerWidth >= 1024) {
          //   // swiper.wrapperEl.style.marginLeft = `${slideWidth * 3}`;

          //   swiper.wrapperEl.style.marginLeft = "20px";
          //   if (swiper.activeIndex > 1) {
          //     swiper.wrapperEl.style.marginLeft = "62px";
          //   }
          // }
        },
        slideChange: (swiper) => {
          // swiper.wrapperEl.style.width = `${swiper.wrapperEl.scrollWidth}px`;

          if (window.innerWidth >= 1024) {
            swiper.wrapperEl.style.marginLeft = "20px";
            if (swiper.activeIndex > 1) {
              swiper.wrapperEl.style.marginLeft = "62px";
            }
            if (swiper.activeIndex === 0) {
              swiper.wrapperEl.style.marginLeft = "0";
            }
          } else {
            swiper.wrapperEl.style.marginLeft = "0";
          }
        },
      },
    },
    mayLikeSwiper: {
      slidesPerView: "auto",
      spaceBetween: 20,
      // centeredSlides: true,
      speed: 700,
      navigation: {
        nextEl: ".may-like-swiper-button-next",
        prevEl: ".may-like-swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 49,
      },
      breakpoints: {
        768: {
          spaceBetween: 40,
          scrollbar: {
            dragSize: 148,
          },
        },
      },
    },
    mayLikeSwiper2: {
      slidesPerView: "auto",
      spaceBetween: 20,
      // centeredSlides: true,
      speed: 700,
      navigation: {
        nextEl: ".may-like-swiper-button-next2",
        prevEl: ".may-like-swiper-button-prev2",
      },
      scrollbar: {
        el: ".may-like-swiper-scrollbar2",
        draggable: true,
        dragSize: 49,
      },
      breakpoints: {
        768: {
          spaceBetween: 40,
          scrollbar: {
            dragSize: 148,
          },
        },
      },
    },
    agendaDaysSwiper: {
      slidesPerView: "auto",
      spaceBetween: 20,
      direction: "horizontal",
      navigation: {
        nextEl: ".agenda-swiper-button-next",
        prevEl: ".agenda-swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 49,
      },
      breakpoints: {
        768: {
          direction: "vertical",

          // scrollbar: {
          //   dragSize: 148,
          // },
        },
      },
    },
  };

  for (swiperId in swiperConfigs) {
    // if (swiperConfigs.hasOwnProperty(swiperId)) {
    const swiperElement = document.getElementById(swiperId);
    const config = swiperConfigs[swiperId];

    if (swiperElement) {
      if (swiperElement.id === "coursesSwiper") {
        // We need this code to update swiper after the entire swiper ends transition to calculate overall width correctly. Without update on 'transitionend' swiper takes incorrect widths for the active and all the rest slides which widths should be different compared to non-active ones. Because in CSS we have added transition for the width changes for each slide and swiper takes those width sizes before the transition is ended, and we are getting 'Race Condition'.
        const coursesSwiper = new Swiper(swiperElement, config);
        let swiperInitialized = false;

        swiperElement.addEventListener("transitionend", () => {
          if (!swiperInitialized) {
            coursesSwiper.update();
            swiperInitialized = true;
          }
        });

        // window.addEventListener("resize", () => {
        //   coursesSwiper.update();
        // });
      } else {
        new Swiper(swiperElement, config);
      }
    }
    // }
  }
};
handleAllSwiperInit();

// !Mobile Menu
const handleMobileMenuBtn = () => {
  const headerContent = document.querySelector(".header-content");
  const menuBtn = document.querySelector(".menu-button");
  const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");

  menuBtn?.addEventListener("click", (e) => {
    menuBtn.classList.add("open");
    headerContent?.classList.toggle("mobile-menu-open");
    document.body.classList.toggle("prevent-scroll");
  });

  mobileMenuCloseBtn?.addEventListener("click", (e) => {
    menuBtn.classList.remove("open");
    headerContent?.classList.toggle("mobile-menu-open");
    document.body.classList.toggle("prevent-scroll");
  });
};
handleMobileMenuBtn();

const handleProfileBtnDropdown = () => {
  const profileBtn = document.querySelector(".header-profile");
  const profileDropdown = document.querySelector(
    ".header-profile-dropdown-list"
  );
  const btn = profileBtn?.querySelector(".header-profile-btn");

  btn &&
    document.addEventListener("click", (e) => {
      if (e.target === profileDropdown) return;

      if (e.target !== btn && !profileBtn.contains(e.target)) {
        profileBtn.classList.remove("active");
        return;
      }

      profileBtn.classList.toggle("active");
    });
};
handleProfileBtnDropdown();

const handleMobileProfileDropdown = () => {
  const profileDropdown = document.querySelector(
    ".mobile-menu-profile-wrapper"
  );
  const profileDropdownContent = profileDropdown.querySelector(
    ".mobile-menu-profile-list"
  );
  const chevron = document.querySelector(
    ".mobile-menu-profile-title-wrapper img"
  );

  profileDropdown?.addEventListener("click", (e) => {
    profileDropdown.classList.toggle("open");
    profileDropdownContent.style.height =
      profileDropdownContent.scrollHeight + "px";
    chevron.style.transform = "rotate(180deg)";

    if (!profileDropdown.classList.contains("open")) {
      profileDropdownContent.style.height = "0px";
      chevron.style.transform = "rotate(0deg)";
    }
  });
};
handleMobileProfileDropdown();

// !Footer Dropdowns
const handleFooterDropdowns = () => {
  const footerDropdowns = document.querySelectorAll(".footer-dropdown");
  // const footerDropdownContents = document.querySelectorAll(".footer-dropdown-content");

  if (footerDropdowns.length > 0) {
    footerDropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", () => {
        const chevronIcon = dropdown.querySelector("img");
        const dropdownContent = dropdown
          .closest(".footer-nav")
          .querySelector(".footer-dropdown-content");

        chevronIcon.classList.toggle("rotate-180");

        dropdown.classList.toggle("open");
        dropdown.classList.toggle("mb-20");

        dropdownContent &&
          (dropdownContent.style.height = dropdownContent.scrollHeight + "px");

        if (!dropdown.classList.contains("open")) {
          dropdownContent && (dropdownContent.style.height = "0px");
        }
      });
    });
  }
};
handleFooterDropdowns();

// !Theme switcher
function switchTheme() {
  const body = document.body;
  const themeToggles = document.querySelectorAll(".theme-toggle input");

  const savedTheme = localStorage.getItem("ctcu-theme") || "dark";
  applyTheme(savedTheme);

  syncToggleInputs();

  themeToggles.forEach((input) => {
    input.addEventListener("change", () => {
      const newTheme = input.checked ? "dark" : "light";
      applyTheme(newTheme);
      syncToggleInputs();
    });
  });

  function applyTheme(theme) {
    body.setAttribute("data-theme", theme);
    localStorage.setItem("ctcu-theme", theme);
  }

  function syncToggleInputs() {
    const currentTheme = localStorage.getItem("ctcu-theme");
    themeToggles.forEach((input) => {
      input.checked = currentTheme === "dark";
    });
  }
}
switchTheme();

// !Accordion
const items = document.querySelectorAll(".accordion-item");
items?.forEach((item) => {
  const button = item.querySelector(".accordion-button");
  const chevron = item.querySelector(".accordion-chevron");
  const chevronImg = item.querySelector(".accordion-chevron img");
  const content = item.querySelector(".accordion-content");

  button?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    content.style.height = isOpen ? content.scrollHeight + "px" : "0";
    chevronImg.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
  });
});

// ! Video Player
// const player = new Plyr("#player", {
//   quality: {
//     default: 1440,
//     options: [4320, 2880, 2160, 1440, 1080],
//   },
// });

const lightbox = GLightbox();

// !Registration Form Validation
const validationRules = {
  name: {
    required: true,
    regex: /^[a-zA-Z]{2,}$/,
    message: "Please enter your name (letters only, min 2 chars)",
  },
  lastname: {
    required: true,
    regex: /^[a-zA-Z]*$/,
    message: "Lastname must contain only letters",
  },
  phone: {
    required: true,
    regex: /^\+?\d{1,4}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    message: "Please enter a valid phone number",
  },
  email: {
    required: true,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  password: {
    required: true,
    regex: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    message: "Password must be min 8 chars, 1 uppercase, 1 number",
  },
  repeatPassword: {
    required: true,
    match: "password", // special rule
    message: "Passwords do not match",
  },
  newPassword: {
    required: true,
    regex: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
    message: "Password must be min 8 chars, 1 uppercase, 1 number",
  },
  repeatNewPassword: {
    required: true,
    match: "newPassword", // special rule
    message: "Passwords do not match",
  },
  terms: {
    required: true,
    type: "checkbox",
    message: "You must accept the terms",
  },
};

function validateField(field, rules, formEl) {
  const value = field.type === "checkbox" ? field.checked : field.value.trim();

  // required
  if (rules.required && !value) return rules.message;

  // regex
  if (rules.regex && value && !rules.regex.test(value)) return rules.message;

  // match for repeatPassword
  if (rules.match) {
    const matchField = formEl.querySelector(`#${rules.match}`);
    if (matchField && value !== matchField.value.trim()) return rules.message;
  }

  return ""; // no error
}

function showError(field, message) {
  const formGroup = field.closest(".form-group");
  const errorText = formGroup.querySelector(".form-error-text");
  if (message) {
    formGroup.classList.add("form-group-error");
    errorText.textContent = message;
    // errorText.style.display = "block";
    // field.classList.add("invalid");
  } else {
    formGroup.classList.remove("form-group-error");
    // errorText.style.display = "none";
    // field.classList.remove("invalid");
  }
}

function validateForm(formEl) {
  let isValid = true;
  Object.keys(validationRules).forEach((name) => {
    const field = formEl.querySelector(`[name=${name}]`);
    if (!field) return;

    const message = validateField(field, validationRules[name], formEl);
    showError(field, message);
    if (message) isValid = false;
  });
  return isValid;
}

// ********** Registration form submit *********
const validateRegistrationForm = () => {
  const registrationForm = document.querySelector(".registration-form");

  if (registrationForm) {
    // Validate on blur
    Object.keys(validationRules).forEach((name) => {
      const field = registrationForm.querySelector(`[name=${name}]`);
      if (!field) return;

      field.addEventListener("blur", () => {
        const message = validateField(
          field,
          validationRules[name],
          registrationForm
        );
        showError(field, message);
      });
    });

    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const isFormValid = validateForm(registrationForm);
      if (isFormValid) {
        console.log("Form is valid and ready to submit!");
        registrationForm.submit();
      } else {
        console.log("Form is invalid. Please fix the errors and try again.");
      }
    });
  }
};
validateRegistrationForm();

// ********** Password Recovery form submit *********
const validatePasswordRecoveryForm = () => {
  const recoveryForm = document.querySelector(".recovery-password-form");

  if (recoveryForm) {
    // Validate on blur
    Object.keys(validationRules).forEach((name) => {
      const field = recoveryForm.querySelector(`[name=${name}]`);
      if (!field) return;

      field.addEventListener("blur", () => {
        const message = validateField(
          field,
          validationRules[name],
          recoveryForm
        );
        showError(field, message);
      });
    });

    recoveryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const isFormValid = validateForm(recoveryForm);
      if (isFormValid) {
        console.log("Form is valid and ready to submit!");
        registrationForm.submit();
      } else {
        console.log("Form is invalid. Please fix the errors and try again.");
      }
    });
  }
};
validatePasswordRecoveryForm();

// !Agenda Tabs
const handleAgendaTabs = () => {
  const agendaDays = document.querySelectorAll(".agenda-day");
  const agendaContents = document.querySelectorAll(".agenda-details-content");

  if (agendaDays.length && agendaContents.length) {
    agendaDays.forEach((day, index) => {
      day.addEventListener("click", () => {
        // Remove active class from all days
        agendaDays.forEach((d) => d.classList.remove("active"));
        day.classList.add("active");

        // Hide all contents
        agendaContents.forEach((content) => content.classList.remove("active"));
        const activeContent = agendaContents[index];
        if (activeContent) activeContent.classList.add("active");
      });
    });
  }
};
handleAgendaTabs();

// Toastify({
//   text: "This is a toast",
//   duration: 3000,
//   className: "toast-default",
//   // destination: "https://github.com/apvarun/toastify-js",
//   // newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "center", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   onClick: function () {}, // Callback after click
// }).showToast();

// !Checkout Page

const checkoutRadioSwitch = () => {
  const invoiceRadioInputs = document.querySelectorAll(".payment-radio-input");
  const downloadInvoiceBtn = document.querySelector(".download-invoice-btn");
  const sendInvoiceBtn = document.querySelector(".send-invoice-btn");
  const payBtn = document.querySelector(".pay-btn");

  if (invoiceRadioInputs.length) {
    invoiceRadioInputs.forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked && input.classList.contains("invoice-radio-input")) {
          downloadInvoiceBtn.classList.add("active");
          sendInvoiceBtn.classList.add("active");
          payBtn.classList.remove("active");
        }
        if (
          input.checked &&
          input.classList.contains("credit-card-radio-input")
        ) {
          downloadInvoiceBtn.classList.remove("active");
          sendInvoiceBtn.classList.remove("active");
          payBtn.classList.add("active");
        }
      });
    });
  }
};
checkoutRadioSwitch();

// !Contact Page

const helpCenterSelect = () => {
  const hiddenInput = document.querySelector(".topic-select-input");
  const customSelect = document.querySelector(".custom-select");
  const selectTrigger = customSelect?.querySelector(".custom-select-trigger");
  const customSelectTitle = selectTrigger?.querySelector("h4");
  const optionsContainer = customSelect?.querySelector(
    ".custom-select-options"
  );
  const optionsList = optionsContainer?.querySelectorAll("li");

  selectTrigger?.addEventListener("click", () => {
    customSelect.classList.toggle("open");
    optionsContainer.style.height = optionsContainer.scrollHeight + "px";
    if (!customSelect.classList.contains("open")) {
      optionsContainer.style.height = "0px";
    }
  });

  optionsList?.forEach((option) => {
    option.addEventListener("click", () => {
      customSelectTitle.textContent = option.textContent;
      hiddenInput.value = option.dataset.value;
      customSelect.classList.remove("open");
      optionsContainer.style.height = "0px";
    });
  });
};
helpCenterSelect();

// !Event Inner Page
const handleModals = () => {
  let mouseDownTarget = null;

  document.addEventListener("mousedown", (e) => {
    mouseDownTarget = e.target;
  });

  // document.addEventListener("touchstart", (e) => {
  //   mouseDownTarget = e.target;
  // });

  document.addEventListener("click", (e) => {
    const modalOpenTrigger = e.target.closest("[data-modal-open]");

    if (modalOpenTrigger) {
      const targetId = modalOpenTrigger.getAttribute("data-modal-open");
      const modalEl = document.getElementById(targetId);
      if (modalEl) modalEl.classList.add("open");
      document.body.classList.add("prevent-scroll");
      return;
    }

    if (e.target.matches("[data-modal-close]")) {
      const modalEl = e.target.closest(".modal");
      if (modalEl) modalEl.classList.remove("open");
      document.body.classList.remove("prevent-scroll");
      return;
    }

    if (e.target.classList.contains("modal") && mouseDownTarget === e.target) {
      e.target.classList.remove("open");
      document.body.classList.remove("prevent-scroll");
    }
  });
};
handleModals();

const handleFileUpload = (file, fileInput, uploadedFileDiv) => {
  const fileNameEl = uploadedFileDiv.querySelector(".uploaded-file-name");
  const removeBtn = uploadedFileDiv.querySelector(".remove-uploaded-file");
  if (!fileNameEl || !removeBtn) return;

  fileNameEl.textContent = file.name;

  removeBtn.addEventListener("click", () => {
    uploadedFileDiv.classList.remove("active");
    fileNameEl.textContent = "";
    fileInput.value = "";
  });
};

const handleFileSelectAndDrop = () => {
  const fileInput = document.querySelector("#fileUpload");
  const selectBtn = document.querySelector(".select-file-btn");
  const dropzone = document.querySelector(".file-dropzone");
  const uploadedFileDiv = document.querySelector(".uploaded-file");

  if (!fileInput || !selectBtn || !dropzone || !uploadedFileDiv) return;

  selectBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    uploadedFileDiv.classList.add("active");
    if (file) handleFileUpload(file, fileInput, uploadedFileDiv);
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("drag-over");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("drag-over");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0];
    if (file) {
      fileInput.files = e.dataTransfer.files;
      uploadedFileDiv.classList.add("active");
      handleFileUpload(file, fileInput, uploadedFileDiv);
    }
  });
};
handleFileSelectAndDrop();
