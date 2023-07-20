import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";
import { useState } from "react";

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button handleClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
