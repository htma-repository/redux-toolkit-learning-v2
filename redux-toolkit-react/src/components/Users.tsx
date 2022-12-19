import React, { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchUsers } from "../store/users-slice";

const Users = () => {
  const usersData = useAppSelector((state) => state.users.data);
  const loadingUsers = useAppSelector((state) => state.users.loading);
  const errorUsers = useAppSelector((state) => state.users.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // let usersContent: ReactNode;

  // if (loadingUsers) {
  //   usersContent = <p>Loading...</p>;
  // }

  // if (!!errorUsers) {
  //   usersContent = <p>{errorUsers}</p>;
  // }

  // if (usersData) {
  //   usersContent = (
  //     <ul>
  //       {usersData.map((user) => {
  //         return <li key={user.id}>{user.firstName}</li>;
  //       })}
  //     </ul>
  //   );
  // }

  return (
    <section>
      <h2>List of Users</h2>
      {/* {usersContent} */}
      {loadingUsers && <p>Loading...</p>}
      {!!errorUsers && <p>{errorUsers}</p>}
      {usersData && (
        <ul>
          {usersData.map((user) => {
            return <li key={user.id}>{user.firstName}</li>;
          })}
        </ul>
      )}
    </section>
  );
};

export default Users;
