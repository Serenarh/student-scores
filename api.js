export default {
  async index() {
    const res = await fetch(
      "http://my-json-server.typicode.com/manavm1990/test-scores-json/scores"
    );

    return res.json();
  },
};
