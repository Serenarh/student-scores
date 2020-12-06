export default () => `<form>
  <span>
    <label for="name">Student's Name</label
    ><input type="text" id="name" placeholder="Student's Name" required />
  </span>

  <span>
    <label for="score">Test Score</label
    ><input
      type="number"
      id="score"
      min="0"
      max="100"
      placeholder="Test Score"
      name="score"
      required
    />
  </span>
  <button type="submit">Add Student</button>
</form>
`;
