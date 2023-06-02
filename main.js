console.log("script start");

// variale declarations
const courses = [];
const main_form = document.querySelector(".main-form");
const form_preview = document.querySelector(".form-preview");

const first_name = document.querySelector("[data-first_name");
const preview_first_name = document.querySelector("[data-preview_first_name");
const last_name = document.querySelector("[data-last_name");
const preview_last_name = document.querySelector("[data-preview_last_name");
const middle_name = document.querySelector("[data-middle_name");
const preview_middle_name = document.querySelector("[data-preview_middle_name");
const dob = document.querySelector("[data-dob");
const preview_dob = document.querySelector("[data-preview_dob");
const student_id = document.querySelector("[data-student_id");
const preview_student_id = document.querySelector("[data-preview_student_id");
const preview_address = document.querySelector("[data-preview_address");
const address = document.querySelector("[data-address");
const preview_state = document.querySelector("[data-preview_state");
const state = document.querySelector("[data-state");
const country = document.querySelector("[data-country");
const preview_country = document.querySelector("[data-preview_country");
const preview_city = document.querySelector("[data-preview_city");
const city = document.querySelector("[data-city");
const preview_zip = document.querySelector("[data-preview_zip");
const zip = document.querySelector("[data-zip");
const preview_email = document.querySelector("[data-preview_email");
const email = document.querySelector("[data-email");
const preview_phone = document.querySelector("[data-preview_phone");
const phone = document.querySelector("[data-phone");
const preview_comment = document.querySelector("[data-preview_comment");
const comment = document.querySelector("[data-comment");

const preview_tbody = document.querySelector("[data-preview_tbody");

const course = document.querySelector("[data-course]");
const level = document.querySelector("[data-level]");
const language = document.querySelector("[data-language]");
const start_date = document.querySelector("[data-start_date]");

const send_btn = document.querySelector(".btn-send button");
const back_btn = document.querySelector("[data-back]");
const add_record_btn = document.querySelector("[data-add_record]");
const add_action = document.querySelector("[data-add_action]");

const last_row = document.querySelector(".courses table tbody tr:last-of-type");
const t_body = document.querySelector(".courses table tbody");

console.log(last_row);
// Event listeners
send_btn.addEventListener("click", () => {
  preview_first_name.textContent = first_name.value;
  console.log(first_name.value);
  preview_middle_name.textContent = middle_name.value;
  preview_last_name.textContent = last_name.value;
  preview_dob.textContent = dob.value;
  preview_student_id.textContent = student_id.value;
  preview_address.textContent = address.value;
  preview_city.textContent = city.value;
  preview_state.textContent = state.value;
  preview_country.textContent = country.value;
  preview_zip.textContent = zip.value;
  preview_email.textContent = email.value;
  preview_phone.textContent = phone.value;
  preview_comment.textContent = comment.value;

  courses.map((course, idx) => {
    const tr = document.createElement("tr");

    //   Create the td and put contents inside
    const course_td = document.createElement("td");
    course_td.textContent = course.course;
    const level_td = document.createElement("td");
    level_td.textContent = course.level;
    const language_td = document.createElement("td");
    language_td.textContent = course.language;
    const start_date_td = document.createElement("td");
    start_date_td.textContent = course.start_date;

    //   Apppend each td into the tr
    tr.appendChild(course_td);
    tr.appendChild(level_td);
    tr.appendChild(language_td);
    tr.appendChild(start_date_td);
  });

  main_form.classList.add("hide");
  form_preview.classList.remove("hide");
});
add_record_btn.addEventListener("click", () => {
  last_row.classList.remove("hide");
});

add_action.addEventListener("click", () => {
  console.log("perform action here");
  const tr = document.createElement("tr");

  //   Create the td and put contents inside
  const course_td = document.createElement("td");
  course_td.textContent = course.value;
  const level_td = document.createElement("td");
  level_td.textContent = level.value;
  const language_td = document.createElement("td");
  language_td.textContent = language.value;
  const start_date_td = document.createElement("td");
  start_date_td.textContent = start_date.value;

  //   Apppend each td into the tr
  tr.appendChild(course_td);
  tr.appendChild(level_td);
  tr.appendChild(language_td);
  tr.appendChild(start_date_td);

  const new_course = {
    course: course.value,
    level: level.value,
    language: language.value,
    start_date: start_date.value,
  };

  // also push to course array.
  courses.push(new_course);
  console.log(courses);
  //   finnally append the tr into the tbody
  t_body.prepend(tr);

  last_row.classList.add("hide");
});

back_btn.addEventListener("click", () => {
  main_form.classList.remove("hide");
  form_preview.classList.add("hide");
});

// functions
console.log("script end");
