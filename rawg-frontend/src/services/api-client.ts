import axios from "axios";

const apiClient = axios.create({

    baseURL: "https//api.rawg.io/api",
    params: {
        key: "e2ecd592b2374fbab4aae80704da1ba4"
    }
});

export default apiClient