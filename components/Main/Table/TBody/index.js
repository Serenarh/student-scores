import TRow from "./TRow";
import store from "/store";

const renderRows = (students) =>
  students.map((student) => TRow(student)).join("");

export default () => `
  <tbody>
    ${renderRows(store.data)}
  </tbody>
`;
