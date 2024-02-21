// import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";

import { usersRolesData } from "../data/roles";
import UserCard from "../components/UserCard";
import { UserType } from "../../types";
import { useEffect, useState } from "react";

export default function UsersList() {
  // const [searchParams] = useSearchParams();
  // const selectedRole = searchParams.get('rid');
  const [users, setUsers] = useState<UserType[]>([]);
  const fetchUser = async () => {
    try {
      const userResponse = await axios.get(`https://randomuser.me/api/`);
      const userData = userResponse.data.results[0];
      console.log(userData.picture.medium);
      const user: UserType = {
        id: userResponse.data.info.results,
        imageUrl: userData.picture.large,
        name: userData.name.first,
        email: userData.email,
        role_id: (Math.random() * (3 - 1) + 1),
      };
      setUsers(users => [...users, user]);
    } catch (error) {
      console.error('Error fetching fake user:', error);
    }
  };
  // make it stop
  useEffect(() => {
    for (let i = 1; i <= 5; i++) {
      fetchUser();
    }
  });

  return (
    <section className="md:container m-auto pt-5" >
      <CategoriesWrapper>
        <CategoryBtn id={null} name={"Все"} />
        {usersRolesData.map((category) => { return (<CategoryBtn id={category.id} name={category.name} />) })}
      </CategoriesWrapper>
      <div className="grid grid-cols-3 gap-x-5 gap-y-5 mt-12">
        {users.map((user) => { return (<UserCard id={user.id} imageUrl={user.imageUrl} name={user.name} email={user.email} />) })}
      </div>
    </section >
  )
}