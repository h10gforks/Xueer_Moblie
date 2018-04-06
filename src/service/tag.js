import Fetch from "./fetch.js";

let TagService = {
  getTags() {
    return Fetch("/api/v1.0/tags/");
  }
};

export default TagService;
