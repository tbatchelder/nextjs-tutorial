import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const users: User[] = await response.json();

  const users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
    },
  ];

  return (
    <>
      <h1>Users</h1>
      <ul>
        {/* {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
        <li>hi</li>
        <li>bye</li>
        <li>why</li>
      </ul>
    </>
  );
};

export default UsersPage;
