import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Posts = () => {
  const [postData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try{
        setLoading(true)
        const response = await axios.get(
            " https://wp.newborntoolkit.org/wp-json/nest360/v1/news"
          );
          if (response.data) {
            setPostsData(response.data.data.posts);
          }     
    }catch(e){
        console.log(e)
    }finally{
        setLoading(false)
    }
   
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section>
      <h1>Blog Posts</h1>
        {
            loading && <p>Data loading....</p>
        }
      <div className="post-grid">
        {postData.map((post) => (
          <div key={post.id} className={"post-card"}>
            <div>
              <Link to={`post/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <img src={post.image} alt={post.title} />
            </div>
            <div>
              <p>{post.summary}</p>
              <p>Date Updated: {post.date}</p>
              <p>Category: {post.category && post.category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
