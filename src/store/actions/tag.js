import TagService from "../../services/tags";

export const getAllTags = () => {
  return TagService.getAll()
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
