import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './css/blog.css';

// const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });
const client = new ApolloClient({ uri: "https://apollo-server.vercel.app" });

const Layout = ({ children }) => {
    return (
        <div className="container">
            <ApolloProvider client={client}>
                <header>header</header>
                { children }
                <footer>footer</footer>
            </ApolloProvider>
        </div>
    );
}

export default Layout;