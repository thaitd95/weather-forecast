import axios from "axios";
import { domain } from "../constants";

const cors1 = "https://thingproxy.freeboard.io/fetch";
const cors2 = "https://cors-anywhere.herokuapp.com";
//Free CORS list

const connector = axios.create({
  baseURL: `${cors1}/${domain}/api/`,
});

export default connector;
