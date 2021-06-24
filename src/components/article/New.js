import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { post } from "../../store/actions/article";
import { getAllTags } from "../../store/actions/tag";

const Article = (props) => {
  const auth = useSelector((state) => state.authReducer);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("DEFAULT");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getTags = async () => {
      const tagList = await getAllTags();
      setTags(tagList);
    };
    getTags();
  }, []);

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      post(
        { userID: auth.user.id, title, url, description, tagID: tag },
        history
      )
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="container h-screen mx-auto">
      <div className="mb-2">
        <label htmlFor="article-title" className="text-darkblue-400">
          Article Title
        </label>
        <input
          placeholder="Title"
          id="article-title"
          type="text"
          autoFocus={true}
          autoComplete="off"
          className="border-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="article-url" className="text-darkblue-400">
          Article URL
        </label>
        <input
          id="article-url"
          type="text"
          autoComplete="off"
          className="border-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="article-description" className="text-darkblue-400">
          Article Description
        </label>
        <div className="border-1 rounded w-full focus:outline-none focus:border-blue-400 focus:shadow">
          <CKEditor
            id={"NEW_POST_EDITOR"}
            editor={ClassicEditor}
            data={description}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="article-tag" className="text-darkblue-400">
          Article Description
        </label>
        <select
          id={"article-tag"}
          onChange={handleChange}
          className="border-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 cursor-pointer"
        >
          <option value="DEFAULT"> ⬇️ Select a tag ⬇️ </option>
          {tags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end font-bold">
        <button
          className="hover-transition text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-600 hover:text-darkblue-300"
          onClick={onSubmit}
        >
          Submit Article
        </button>
      </div>
    </div>
  );
};

export default Article;
