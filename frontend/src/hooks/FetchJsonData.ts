import axios from 'axios';


const FetchJsonData = async (type: string) => {

  let url = "";
  switch (type) {
    case "events":
      url = "https://my.api.mockaroo.com/getEvents?key=7307be50";
      break;
    case "electronics":
      url = "../data/electronics.json";
      break;
    case "shirts":
      url = "../data/shirts.json";
      break;
    default:
      break;
  }

  try {
    const response = await axios.get(url);
    return response.data;

  } catch (err) {
    return err;
  }

};

export default FetchJsonData;
