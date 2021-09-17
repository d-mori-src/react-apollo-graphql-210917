import { User } from '../components/Appolo/User';
import Layout from '../components/Layout/Layout';

const Blog = (props) => {
    // eslint-disable-next-line
    const getPostId = props.match.params.id;

    return (
        <Layout>
            <main className="blog">
            <h2>Blog</h2>
            <User getPostId={getPostId} />
            </main>
        </Layout>
    );
}

export default Blog;
