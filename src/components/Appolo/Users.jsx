import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const Users = () => {
  const Query = useMemo(
    () => gql`
    {
      users {
        id
        name
        posts {
          postId
          title
          url
        }
      }
    }
    `,
    []
  );

  const { loading, error, data } = useQuery(Query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
    {data.users.map(({ id, name, posts }, index) => (
      <div className="items" key={index}>
        {posts.map(({ postId, title, url }, index) => (
            <div className="item" key={index}>
              <Link to={`/react_sample/blog/${postId}`}>{title}</Link>
              <p>by {name}</p>
            </div>
        ))}
      </div>
    ))}
    <Link to="/react_sample">トップに戻る</Link>
    </>
  );
};