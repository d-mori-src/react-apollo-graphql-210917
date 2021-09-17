import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';

// head情報
const title = 'GraphQL App';
const description = '';
document.title = title;
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}
// ここまでhead情報

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/react_sample" component={ Index } />
        <Route exact path="/react_sample/blogs" component={ Blogs } />
        <Route exact path="/react_sample/blog/:id" component={ Blog } />
      </Switch>
    </Router>
  );
}

export default App;
