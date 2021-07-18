import axios from "axios";

const fetchData = async (URL) => {
  try {
    const data = await axios.get(URL);

    return data;
  } catch (error) {
    return { error: "Failed to fetch data from API" };
  }
};

export default fetchData;
