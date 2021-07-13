import axios from "axios";

const fetchData = async (URL, params) => {
  try {
    const data = await axios.get(`${URL} ${params}`);

    return { data: data.data };
  } catch (error) {
    return { error: "Failed to fetch data from PokeAPI" };
  }
};

export default fetchData;
