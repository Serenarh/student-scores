const loader = document.querySelector(".loader");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

// 'default' means only export 1 thing and do not give it a name
export const createTable = (data) => {
  data.forEach(({ name, score, id }) => {
    const newStudentRow = template.content.cloneNode(true); // The true is making sure that it goes in and gets the contents of the row
    const newStudentTDs = newStudentRow.querySelectorAll("td");

    newStudentTDs[0].textContent = id;
    newStudentTDs[1].textContent = name;
    newStudentTDs[2].textContent = score;
    tbody.appendChild(newStudentRow);
  });
};

export const displayTable = () => {
  loader.classList.add("is-hidden");
  table.classList.remove("is-hidden");
};
