import Button from "./Button";

const FormSplitBill = () => {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input value="text" />

      <label>🫰🏼 Your expense</label>
      <input value="text" />

      <label>👫 X's expense</label>
      <input value="text" disabled />

      <label>💸 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};
export default FormSplitBill;
