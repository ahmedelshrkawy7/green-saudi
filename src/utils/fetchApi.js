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

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log("🚀 ~ getData ~ data:", data);
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to be handled by React Query
  }
};
