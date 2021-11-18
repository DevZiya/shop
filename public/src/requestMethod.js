import axios from "axios";

const BASE_URL ="http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI5NTdjY2FiZjU0ZjQ4MGE4N2VlYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzA4MTg4NiwiZXhwIjoxNjM3MzQxMDg2fQ.oCvqm9d3LP-WTnsugrIN--yL6nv_YAkCEZ7BkYphF0w";

  export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });