import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const User = (getPostId) => {
    console.log(getPostId);
    const Query = useMemo(
        () => gql`
        {
            users {
                id
                name
                email
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
                        {postId === getPostId.getPostId &&
                            <>
                                <h3>{title}</h3>
                                <a href={url}>{url}</a>
                                <p>by {name}</p>
                            </>
                        }
                    </div>
                ))}
            </div>
            ))}
            <Link to="/react_sample/blogs">一覧に戻る</Link>
        </>
    );
};