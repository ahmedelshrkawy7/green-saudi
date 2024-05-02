// import axios from "axios";

// export const getData = async (url) => {
//   const { data, error } = await axios.get(url);
//   console.log("🚀 ~ getData ~ data:", data);

//   if (error) {
//     return console.error(error);
//   }

//   return data;
// };

import axios from "axios";

const Axios = axios.create({
  baseURL: "https://new.tge.sa/api",
});

export const getData = async (url) => {
  try {
    const response = await Axios.get(url);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be handled by React Query
  }
};
export const postData = async ([endpoint, data]) => {
  try {
    const response = await Axios.post(endpoint, data);
    return response;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be handled by React Query
  }
};
