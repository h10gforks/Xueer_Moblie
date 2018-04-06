import Fetch from "./fetch.js";

let HomeService = {
  getTips() {
    return Fetch("/api/v1.0/tips/");
  }
};
export default HomeService;
