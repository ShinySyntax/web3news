import { LIST_ALL, POST } from "../actions/actionTypes";

const initalState = {
    title: '',
    url: '',
    description: ''
}

const ArticleReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case POST:
            return {
              ...state,
              article: payload,
            };
        case LIST_ALL:
            return {
                ...state,
                articles: payload
            }
        default:
            return state;
    }

}

export default ArticleReducer;