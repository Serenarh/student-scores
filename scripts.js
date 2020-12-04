import api from "./api.js";
import { createTable, displayTable } from "./lib.js";

(async () => {
  const data = await api.index();
  createTable(data);
  displayTable();
})();
