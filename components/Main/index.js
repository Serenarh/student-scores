import Avg from "./Avg";
import Form from "./Form";
import Table from "./Table";

export default () => `
  <main>
    ${Avg()}
    ${Table()}
    ${Form()}
  </main>
`;
