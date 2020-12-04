import TBody from "./TBody";
import THead from "./THead";

export default () => `
  <table>
    ${THead()}
    ${TBody()}
  </table>
`;
