import axios from "axios";
import { domain } from "../constants";

const connector = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${domain}/api/`,
});

export default connector;
