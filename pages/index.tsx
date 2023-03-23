import Link from 'next/link';

export default function Home(props: any) {
  console.log(props.posts);
  return (
    <main>
      <ul>
        {props.posts.map((post: any, id: number) => (
          <Link href={`/users/${post.id}`} legacyBehavior>
            <a>{post.name}</a>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
