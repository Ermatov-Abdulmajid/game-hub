import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f17f281bbb6a43f987876a5b61d2b86c",
  },
});
