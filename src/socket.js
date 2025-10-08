import { io } from "socket.io-client";

const URL = 'https://j-doodleserver-production.up.railway.app/'
export const socket = io(URL);