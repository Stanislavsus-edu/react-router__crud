import Posts from './Components/Posts.jsx';
import PostId from './Components/PostId.jsx';
import Create from './Components/Create.jsx';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="crud">
      <BrowserRouter>
        <nav className="menu">
          <Link to="/posts/new">Новый пост</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Posts />}/>
          <Route path="/posts/:postId" element={<PostId />}/>
          <Route path="/posts/new" element={<Create />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
