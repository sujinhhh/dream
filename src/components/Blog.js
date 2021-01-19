import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Blog = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading ... </div>}
      {blogs && <BlogList blogs={blogs} title="Please Think!!" />}
    </div>
  );
};

export default Blog;
