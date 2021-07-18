import axios from "axios";

const fetchCards = async () => {
  const config = {
    method: "get",
    url: "https://api.pokemontcg.io/v2/cards/?q=name:charizard",
    headers: {
      "API-Key": "593b141e-7f25-4c0c-adb8-4ad5c8583fd1",
    },
  };

  const data = await axios.get(config);

  console.log(data);
};

export default fetchCards;
