import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Posts from './Posts'
import Post from './Post'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="post/:slug" element={<Post />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
