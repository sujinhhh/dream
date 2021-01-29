import "./Create.css";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuther] = useState("");
  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuther(e.target.value)}>
          <option value="sujin">Sujin</option>
          <option value="kevin">Kevin</option>
        </select>
        <button>add blog</button>
      </form>
    </div>
  );
};

export default Create;
