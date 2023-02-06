import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  const fetchPost = async (slug) => {
    const response = await axios.get(
      `https://wp.newborntoolkit.org/wp-json/nest360/v1/news/${slug}`
    );
    if(response.data){
        setPost(response.data.data)
    }
  };

  useEffect(() => {
    const { slug } = params;
    fetchPost(slug);
  }, [params]);

  return (
    <section className="post-page">
      <h1>{post.title}</h1>
      <p>Category: {post.category && post.category.title}</p>
      <p>Date Updated: {post.date}</p>
      <img src={post.image} alt={post.title} />
      <p dangerouslySetInnerHTML={{__html:post.content}} />
    </section>
  );
};

export default Post;
