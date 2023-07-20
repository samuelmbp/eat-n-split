import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form action="" className="form-add-friend">
      <label>👫 Friend Name</label>
      <input value="text" />

      <label>🏞️ Image URL</label>
      <input value="text" />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
