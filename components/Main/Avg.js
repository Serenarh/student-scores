import store from "/store";

const calcAvg = (studentData) =>
  studentData.reduce((total, { score }) => {
    let ret = total;
    ret += Number(score);
    return ret;
  }, 0) / studentData.length;

export default () => `<p id="avg">${calcAvg(store.data).toFixed(1)}</p>`;
