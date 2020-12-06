import api from "/api";
import store from "/store";

const addStudent = async ({ name, score }) => {
  const { id } = await api.create({ name, score });
  store.setData({ id, name, score });
  return true;
};

const processForm = (form) => Object.fromEntries(new FormData(form));

// Handler will run any cb necessary after it's done.
export default () =>
  new Promise((resolve, reject) => {
    document.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (await addStudent(processForm(event.target))) {
        resolve();
      }
      reject(new Error("Error adding student!"));
    });
  });
