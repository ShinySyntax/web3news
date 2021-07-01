import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { post } from "../../store/actions/post";
import TagDropdown from "./TagDropdown";

const Post = (props) => {
  const auth = useSelector((state) => state.authReducer);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("DEFAULT");
  const dispatch = useDispatch();
  const history = useHistory();

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
        <label htmlFor="post-title" className="text-darkblue-400">
          Post Title
        </label>
        <input
          placeholder="Title"
          id="post-title"
          type="text"
          autoFocus={true}
          autoComplete="off"
          className="border-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="post-url" className="text-darkblue-400">
          Post URL
        </label>
        <input
          id="post-url"
          type="text"
          autoComplete="off"
          className="border-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="post-description" className="text-darkblue-400">
          Post Description
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
        <label htmlFor="post-tag" className="text-darkblue-400">
          Tags
        </label>
        {/* <select
          id={"post-tag"}
          onChange={handleChange}
          className="border-1 rounded p-2 w-full focus:outline-none focus:border-blue-400 cursor-pointer"
        >
          <option value="DEFAULT"> ⬇️ Select a tag ⬇️ </option>
          {tags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select> */}
        <TagDropdown callback={handleChange} />
      </div>

      <div className="flex justify-end font-bold">
        <button
          className="hover-transition text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-600 hover:text-darkblue-300"
          onClick={onSubmit}
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default Post;
