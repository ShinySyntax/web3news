import { useState } from "react";
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
      <div class="row">
        <form class="col s12" onSubmit={onSubmit}>
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Title"
                id="article-title"
                type="text"
                class="validate"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="article-title"></label>
            </div>
            <div class="input-field col s6">
              <input
                id=""
                type="text"
                class="validate"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <label for="last_name"></label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea
                id="textarea1"
                class="materialize-textarea"
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

