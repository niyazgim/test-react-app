import axios from 'axios';
import { useState, useEffect, Suspense } from 'react';
// import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
// import { usersRolesData } from "../data/roles";
import UserCard from "../components/UserCard";
import { UserType } from "../../types";
import { useInView } from 'framer-motion';

export default function UsersList() {
  const [users, setUsers] = useState<UserType[]>([]);
  // const [fetching, setFetching] = useState(false);

  const fetchUserBatch = async (usersToFetch: number) => {
    // setFetching(true);
    try {
      for (let i = 0; i < usersToFetch; i++) {
        const userResponse = await axios.get('https://randomuser.me/api/');
        const userData = userResponse.data.results[0];

        const user: UserType = {
          id: userResponse.data.info.results,
          imageUrl: userData.picture.large,
          name: {
            first: userData.name.first,
            last: userData.name.last,
          },
          username: userData.login.username,
          email: userData.email,
          role_id: Math.floor(Math.random() * 3) + 1,
        };
        setUsers(users => [...users, user]);
      }
    } catch (error) {
      console.error('Error fetching fake user:', error);
    }
    // setFetching(false);
  };

  useEffect(() => {
    fetchUserBatch(12);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.0,
  })

  return (
    <section className="md:container m-auto pt-5">
      {/* <CategoriesWrapper>
        <CategoryBtn id={null} name={"Все"} />
        {usersRolesData.map((category, key) => (
          <CategoryBtn key={key} id={category.id} name={category.name} />
        ))}
      </CategoriesWrapper> */}
      <h1 className='mt-4 text-5xl font-semibold'>Пользователи</h1>
      <div className="grid grid-cols-3 gap-x-5 gap-y-5 mt-12">
        {users.map((user, key) => (
          <Suspense fallback="Loading...">
            {inView && (
              <div ref={ref}>
                <UserCard key={key} id={user.id} imageUrl={user.imageUrl} name={user.name} email={user.email} username={user.username} />
              </div>)}
          </Suspense>
        ))}
      </div>
    </section >
  );
}
