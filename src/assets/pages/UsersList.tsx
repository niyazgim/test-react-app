import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
// import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
// import { usersRolesData } from "../data/roles";
import useWindowDimensions from '../hooks/useWindowDimensions';
import UserCard from "../components/UserCard";
import { UserType } from "../../types";

export default function UsersList() {
  const [users, setUsers] = useState<UserType[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowDimensions();
  const [isFetching, setIsFetching] = useState(false);
  // const [fetchChunkSize, setFetchChunkSize] = useState(0);

  const [scrollTop, setScrollTop] = useState(0);

  const fetchUser = async () => {
    try {
      const userResponse = await axios.get('https://randomuser.me/api/');
      const userData = userResponse.data.results[0];
      const user: UserType = {
        id: userResponse.data.info.results,
        imageUrl: (Math.floor(Math.random() * 2) + 1 === 1 ? userData.picture.large : null),
        name: {
          first: userData.name.first,
          last: userData.name.last,
        },
        username: userData.login.username,
        email: userData.email,
        role_id: Math.floor(Math.random() * 3) + 1,
      };
      setUsers(users => [...users, user]);
    } catch (error) {
      console.error('Error fetching fake user:', error);
    }
  };

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 100px 0px",
    threshold: 1,
  });

  useEffect(() => {
    if (contentRef.current!.clientHeight < windowHeight) {
      for (let i = 0; i < 6; i++)
        fetchUser();
      if (contentRef.current!.clientHeight < windowHeight) {
        for (let i = 0; i < 6; i++)
          fetchUser();
      }
    }
    const handleScroll = (e: Event) => {
      const target = e.target as Document;
      setScrollTop(target.documentElement.scrollTop);
      if (inView && !isFetching) {
        setIsFetching(true);
        for (let i = 0; i < 6; i++) {
          fetchUser();
          if (i === 6 - 1) setIsFetching(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop, inView, windowHeight, isFetching]);

  return (
    <section className="md:container m-auto pt-5">
      {/* <CategoriesWrapper>
        <CategoryBtn id={null} name={"Все"} />
        {usersRolesData.map((category, key) => (
          <CategoryBtn key={key} id={category.id} name={category.name} />
        ))}
      </CategoriesWrapper> */}
      <h1 className='mt-4 text-5xl font-semibold'>Пользователи</h1>
      <div ref={contentRef} className="grid grid-cols-3 gap-x-5 gap-y-5 mt-12">
        {users.map((user, key) => (
          <UserCard key={key} id={user.id} imageUrl={user.imageUrl} name={{
            first: user.name.first,
            last: user.name.last
          }} email={user.email} username={user.username} />
        ))}
      </div>
      <div ref={ref}></div>
      <div className="flex items-center justify-center mt-12">
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center"><div className="lds-ring h-5 w-5"><div></div><div></div><div></div><div></div></div></div>
      </div>
    </section>
  );
}
