const Article = (props) => {
  const { title, url, description } = props;
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="card-large">
          <h5 className="card-title">{title}</h5>
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div className="card-action waves-effect waves-light btn red-text text-darken-2">
            <a href="{url}">LINK</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
