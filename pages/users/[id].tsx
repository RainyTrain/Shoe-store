import { useRouter } from 'next/router';
import { useEffect } from 'react';

const User = ({ posts }: any) => {
  const query = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const posts = await res.json();
      console.log(posts);
    };
    fetchData();
  }, []);
  return <div>{posts.name}</div>;
};

export default User;

export const getServerSideProps = async (context: any) => {
  console.log(context);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
