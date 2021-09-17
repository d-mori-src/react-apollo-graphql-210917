import { Users } from '../components/Appolo/Users';
import Layout from '../components/Layout/Layout';

const Blogs = () => {
  return (
    <Layout>
      <main className="blog">
        <h2>Blogs</h2>
        <Users />
      </main>
    </Layout>
  );
}

export default Blogs;
