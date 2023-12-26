const getEl = (el) => document.querySelector(el);
const bodyElement = getEl("body");
const mainSectionElement = getEl("#main__section");
const displaySectionElement = getEl("#display-section");
const topSectionElement = getEl("#top-section");
const loadMoreButton = getEl("#load-more");
const companySearchInput = getEl("#company-search");
const locationSearchInput = getEl("#location-search");
const searchButton = getEl("#search-button");
const smallSearchButton = getEl(".small-search");
const errorMsgElement = getEl(".error-msg");
const checkbox = getEl("#checkbox");
const checkFullTime = getEl(".check-box");
const fullTImeText = getEl(".check-text");
const inputSectionElement = getEl(".input-section");
const popUp = getEl(".pop-up");
const filterIconElement = getEl(".filter");
const overlayElement = getEl(".overlay");
const smallBoxElement = getEl(".boxx");

const displayPopup = function () {
  popUp.classList.remove("mid:opacity-0");
  popUp.classList.remove("mid:invisible");
  overlayElement.classList.remove("hidden");
};

const closePopup = function () {
  popUp.classList.add("mid:opacity-0");
  popUp.classList.add("mid:invisible");
  overlayElement.classList.add("hidden");
};

const generateJobHtml = function (data) {
  const html = `
      <div class="bg-white rounded-0.6rem flex flex-col items-start gap-6 p-6 job-box transition-all duration-300 dark:bg-very-dark-blue">
      <div class="w-20 h-20  rounded-3xl -mt-16 flex items-center justify-center" 
      style="background-color: ${data.logoBackground}">
        <img
        src="${data.logo}"
        alt="${data.company}"
        class=""   
        />
      </div>
        <div class="flex items-center gap-4">
          <p class="text-dark-grey text-1.6rem leading-norm">${data.postedAt}</p>
          <div class="h-2 w-2 bg-dark-grey rounded-full"></div>
          <p class="text-dark-grey text-1.6rem leading-norm">${data.contract}</p>
        </div>
        <h2
          class="text-very-dark-blue text-2rem font-700 leading-norm hover:text-dark-grey cursor-pointer transition-all duration-300 job-title dark:text-white"
        >
          ${data.position}
        </h2>
        <p class="text-dark-grey text-1.6rem leading-norm">${data.company}</p>
        <p class="text-violet text-1.4rem font-700 leading-norm mt-12">
          ${data.location}
        </p>
      </div>
  `;

  mainSectionElement.insertAdjacentHTML("beforeend", html);
};

const generateMoreInfoHtml = function (data) {
  const displayRequirements = data.requirements.items
    .map((item) => {
      return `<li class=" items-start gap-12 text-violet text-1.6rem leading-2.6rem pl-12">
      <span class="text-dark-grey text-1.6rem leading-2.6rem grey-text dark:text-grey">${item}</span>
      </li>`;
    })
    .join("");
  const displayRole = data.role.items
    .map((item) => {
      return `<li class="text-violet font-700 text-1.6rem leading-2.6rem pl-12">
      <span class="text-dark-grey font-400 grey-text dark:text-grey"
        >${item}</span
      >
    </li>`;
    })
    .join("");

  const html = `
    <section class="pb-32">
      <section class="pb-16">
        <section
          class="flex items-center bg-white max-w-73 mx-auto -mt-16 rounded-0.6rem white-bg transition-all duration-300 mid:flex-col mid:gap-10 dark:bg-very-dark-blue"
        >
          <div
            class="h-56 w-56 flex items-center justify-center shrink-0 mid:h-24 mid:w-24 mid:-mt-12 mid:rounded-3xl"
            style="background-color: ${data.logoBackground}"
          >
            <img src="${data.logo}" alt="${data.company}" class="w-32 mid:w-20" />
          </div>
          <div class="flex items-center justify-between w-full px-16 mid:flex-col mid:gap-11 mid:pb-12">
            <div class="flex flex-col">
              <h3
                class="text-2.4rem font-700 leading-norm text-very-dark-blue dark-blue transition-all duration-300 dark:text-white"
              >
              ${data.company}
              </h3>
              <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.company}.com
              </p>
            </div>
            <a
              href="${data.website}"
              class="text-violet text-1.6rem font-700 leading-norm bg-violet bg-opacity-10 rounded-0.5rem py-6 px-8 transition-all duration-300 hover:bg-opacity-40"
              >Company Site</a
            >
          </div>
        </section>
      </section>

      <section class="max-w-73 mx-auto p-20 bg-white rounded-0.6rem white-bg transition-all duration-300 mid:px-9 sma:px-8 dark:bg-very-dark-blue">
        <div class="flex items-center justify-between pb-20 mid:flex-col mid:items-stretch mid:gap-20">
          <div class="flex flex-col">
            <div class="flex items-center gap-4">
              <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.postedAt}
              </p>
              <div class="h-2 w-2 bg-dark-grey rounded-full"></div>
              <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.contract}
              </p>
            </div>
            <h2
              class="text-very-dark-blue text-2.8rem font-700 leading-norm dark-blue transition-all duration-300 mid:text-2rem dark:text-white"
            >
            ${data.position}
            </h2>
            <p class="text-violet text-1.4rem font-700 leading-norm">
            ${data.location}
            </p>
          </div>
          <a
            href="${data.apply}"
            class="text-white text-1.6rem font-700 leading-norm py-6 px-11 bg-violet rounded-0.6rem transition-all duration-300 hover:bg-light-violet text-center"
            >Apply Now</a
          >
        </div>
        <div class="pb-16">
          <p class="text-dark-grey text-1.6rem leading-2.6rem grey-text transition-all duration-300 dark:text-grey">
            ${data.description}
          </p>
        </div>
        <div class="flex flex-col gap-11 pb-20">
          <h4 class="text-very-dark-blue text-2rem font-700 leading-norm dark-blue transition-all duration-300 dark:text-white">
            Requirements
          </h4>
          <p class="text-dark-grey text-1.6rem leading-2.6rem grey-text transition-all duration-300 dark:text-grey">
           ${data.requirements.content}
          </p>
          <ul class="list-disc flex flex-col gap-2">
          ${displayRequirements}
          </ul>
        </div>
        <div class="flex flex-col gap-11">
          <h4 class="text-very-dark-blue text-2rem font-700 leading-norm dark-blue transition-all duration-300 dark:text-white">
            What You Will Do
          </h4>
          <p class="text-dark-grey text-1.6rem leading-2.6rem grey-text transition-all duration-300 dark:text-grey">
            ${data.role.content}
          </p>
          <ol class="list-decimal flex flex-col gap-2">
            ${displayRole}
          </ol>
        </div>
      </section>
    </section>
    <section class="bg-white p-10 white-bg transition-all duration-300 dark:bg-very-dark-blue">
      <div class="max-w-73 mx-auto">
        <div class="flex items-center justify-between smid:items-stretch">
          <div class="flex flex-col smid:hidden">
            <h2
              class="text-very-dark-blue text-2rem font-700 leading-norm dark-blue transition-all duration-300 dark:text-white"
            >
            ${data.position}
            </h2>
            <p class="text-dark-grey text-1.6rem leading-norm">
              ${data.company} Digital Inc.
            </p>
          </div>
          <a
            href="${data.apply}"
            class="text-white text-1.6rem font-700 leading-norm py-6 px-11 bg-violet rounded-0.6rem transition-all duration-300 hover:bg-light-violet text-center smid:w-full"
            >Apply Now</a
          >
        </div>
      </div>
    </section>
  `;

  displaySectionElement.innerHTML = html;
};

let data = [];

const fetchJobs = async function () {
  const res = await fetch("data.json");
  data = await res.json();

  loadInitialItems();
};

let startIndex = 0;
const initialItemsToShow = 9;
const additionalItemsToShow = 3;

const loadInitialItems = function () {
  mainSectionElement.innerHTML = "";

  for (let i = 0; i < startIndex + initialItemsToShow; i++) {
    if (i >= data.length) {
      loadMoreButton.style.display = "none";
      break;
    }

    const item = data[i];
    generateJobHtml(item);
  }
  startIndex += additionalItemsToShow;

  if (startIndex >= 9) {
    loadMoreButton.style.opacity = "0";
    loadMoreButton.style.visibility = "hidden";
  }

  attachJobTitleClickHandlers();
};

const attachJobTitleClickHandlers = function () {
  const jobTitles = document.querySelectorAll(".job-title");

  jobTitles.forEach((jobTitle) => {
    jobTitle.addEventListener("click", function (event) {
      const clickedJobTitle = event.target.textContent.trim();
      const matchingJob = data.find((job) =>
        job.position.includes(clickedJobTitle)
      );
      displaySectionElement.classList.remove("hidden");
      topSectionElement.classList.add("hidden");
      generateMoreInfoHtml(matchingJob);
    });
  });
};

const getSearchResult = function (e) {
  e.preventDefault();
  const name = companySearchInput.value.trim().toLowerCase();
  const location = locationSearchInput.value.trim().toLowerCase();
  const isChecked = checkbox.checked;

  let filteredData = data;

  if (isChecked) {
    filteredData = filteredData.filter((info) =>
      info.contract.toLowerCase().includes("full")
    );
  }

  if (name !== "") {
    filteredData = filteredData.filter(
      (info) =>
        info.company.toLowerCase().includes(name) ||
        info.position.toLowerCase().includes(name)
    );
  }

  if (location !== "") {
    filteredData = filteredData.filter((info) =>
      info.location.toLowerCase().includes(location)
    );
  }

  if (name === "" && location === "" && !isChecked) {
    // If both search fields are empty, display all data
    mainSectionElement.innerHTML = "";
    for (let i = 0; i < initialItemsToShow; i++) {
      const item = filteredData[i];
      generateJobHtml(item);
    }

    topSectionElement.classList.remove("hidden");
    errorMsgElement.classList.add("hidden");
    loadMoreButton.classList.remove("opacity-0");
    loadMoreButton.classList.remove("invisible");
    return;
  }
  companySearchInput.value = "";
  locationSearchInput.value = "";
  closePopup();
  displayFilteredResults(filteredData);
  attachJobTitleClickHandlers();
};

const displayFilteredResults = function (filteredResults) {
  mainSectionElement.innerHTML = "";
  if (filteredResults.length === 0) {
    errorMsgElement.classList.remove("hidden");
    topSectionElement.classList.add("hidden");
  } else {
    errorMsgElement.classList.add("hidden");
    topSectionElement.classList.remove("hidden");
  }

  if (filteredResults.length < 9) {
    loadMoreButton.classList.add("opacity-0");
    loadMoreButton.classList.add("invisible");
  }

  filteredResults.forEach((data) => generateJobHtml(data));
};

fetchJobs();

searchButton.addEventListener("click", getSearchResult);
smallSearchButton.addEventListener("click", getSearchResult);
overlayElement.addEventListener("click", closePopup);
filterIconElement.addEventListener("click", displayPopup);
loadMoreButton.addEventListener("click", loadInitialItems);
