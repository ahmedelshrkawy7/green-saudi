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

export const Axios = axios.create({
  // baseURL: "https://new.tge.sa/api",
  baseURL: "http://216.219.83.182/Zatca/public/api",
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
