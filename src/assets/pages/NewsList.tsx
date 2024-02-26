import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
// import { CategoriesWrapper, CategoryBtn } from "../components/CategoriesWrapper";
// import { usersRolesData } from "../data/roles";
import useWindowDimensions from '../hooks/useWindowDimensions';
import { NewsType } from "../../types";
import NewsCard from '../components/NewsCard';

export default function NewsList() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [nid, setNid] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowDimensions();
  const [isFetching, setIsFetching] = useState(false);
  // const [fetchChunkSize, setFetchChunkSize] = useState(0);

  const [scrollTop, setScrollTop] = useState(0);

  const fetchNews = async () => {
    try {
      const newsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${nid}`);
      setNid(nid => nid + 1);
      const newsData = newsResponse.data;
      const newNews: NewsType = {
        id: newsData.id,
        userId: newsData.userId,
        title: newsData.title,
        body: newsData.body,
      };
      setNews(news => [...news, newNews]);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 100px 0px",
    threshold: 1,
  });

  useEffect(() => {
    if (contentRef.current!.clientHeight < windowHeight) {
      for (let i = 0; i < 3; i++)
        fetchNews();
      if (contentRef.current!.clientHeight < windowHeight) {
        for (let i = 0; i < 3; i++)
          fetchNews();
      }
    }
    const handleScroll = (e: Event) => {
      if (nid <= 100) {
        const target = e.target as Document;
        setScrollTop(target.documentElement.scrollTop);
        if (inView && !isFetching) {
          setIsFetching(true);
          for (let i = 0; i < 3; i++) {
            fetchNews();
            if (i === 3 - 1) setIsFetching(false);
          }
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
      <h1 className='mt-4 text-5xl font-semibold'>Новости моды</h1>
      <div ref={contentRef} className="grid grid-cols-3 gap-x-5 gap-y-5 mt-12">
        {news.map((news, key) => (
          <NewsCard key={key} id={news.id} userId={news.userId} title={news.title} body={news.body} />
        ))}
      </div>
      <div ref={ref}></div>
      <div className="flex items-center justify-center mt-12">
        {nid <= 100 ? (
          <div className="w-full h-full flex flex-col gap-5 items-center justify-center"><div className="lds-ring h-5 w-5"><div></div><div></div><div></div><div></div></div></div>
        ) : null}
      </div>
    </section>
  );
}
