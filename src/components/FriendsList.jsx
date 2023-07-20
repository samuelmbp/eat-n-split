import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends, selectedFriend, onSelection }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
