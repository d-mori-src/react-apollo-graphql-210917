import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Index = () => {
    return (
        <Layout>
            <main className="top">
            <h2>Top</h2>
            <Link to="/react_sample/blogs">Blog</Link>
            </main>
        </Layout>
    );
}

export default Index;
