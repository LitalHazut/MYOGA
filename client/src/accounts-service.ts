import axios from "axios";
import { IAccount } from "./types";

export const fetchTasks = () => axios.get('/api/get');

export async function createAccount(account: IAccount) {
  const response = await axios.post('/api/post', account);

}
