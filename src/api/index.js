import axios from "axios";
import { BASE_URL } from "../settings";

export default axios.create({
  baseURL: BASE_URL
});
