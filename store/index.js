export default {
  data: [],
  setData(newData) {
    // 'concat' is 'non-mutating'
    this.data = this.data.concat(newData);
  },
  sortData(prop, order) {
    this.data = this.data.sort((a, b) =>
      order === "desc" ? b[prop] - a[prop] : a[prop] - b[prop]
    );
  },
};
