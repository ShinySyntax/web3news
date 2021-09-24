import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import makeAnimated from "react-select/animated";

import { post } from "../../store/actions/post";
import { getAllTags } from "../../store/actions/tag";

const Post = () => {
  const auth = useSelector((state) => state.authReducer);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const animatedComponents = makeAnimated();

  useEffect(() => {
    const getTags = async () => {
      const tagList = await getAllTags();
      setTags(tagList);
      setLoading(false);
    };
    getTags();
  }, []);

  const onChangeHandler = (e) => {
    const val = e[0]?.id;
    setSelectedTag(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      post(
        { userID: auth.user.id, title, url, description, tagID: selectedTag },
        history
      )
    )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="container mt-12 mx-auto xl:w-1/2 2xl:w-1/2 rounded-xl shadow-lg bg-darkblue-900">
      <div className="p-12 h-1/4">
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
            className="border-1 rounded p-2 w-full focus:border-darkblue-200 focus:ring-2 focus:ring-darkborder-darkblue-200 focus:outline-none"
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
            className="border-1 rounded p-2 w-full focus:border-darkblue-200 focus:ring-2 focus:ring-darkborder-darkblue-200 focus:outline-none"
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
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "200px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
              className="h-1/2"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="post-tag" className="text-darkblue-400">
            Tags
          </label>
          <Select
            isDisabled={loading}
            isSearchable={true}
            isMulti={true}
            options={tags}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.value}
            onChange={onChangeHandler}
            placeholder={
              loading ? "Loading..." : "Select a tag for your web3 article"
            }
            components={animatedComponents}
          />
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
    </div>
  );
};

export default Post;
