import { React, useState } from "react";
import { useDispatch } from "react-redux"

import { post } from '../../store/actions/article'

const Article = (props, history) => {
    // const auth = useSelector(state => state.authReducer);    // add created by field to submitted articles
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(post({ title, url, description }))
          .then((data) => {
            alert(data);
          })
          .catch((err) => console.error(err.message));
    }

    return (
      <div className="row">
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Title"
                id="article-title"
                type="text"
                className="validate"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="article-title"></label>
            </div>
            <div className="input-field col s6">
              <input
                id=""
                type="text"
                className="validate"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <label for="last_name"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <label for="textarea1"></label>
            </div>
          </div>
        </form>
      </div>
    );
                                        
}

export default Article;

