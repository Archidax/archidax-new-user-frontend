import Io from "socket.io-client";

import { baseUrlTrade, baseUrl } from "../stores/index";

export let IoWebSocketTrade=Io(baseUrlTrade,{
    path:"/realtime",
    autoConnect:true,
    reconnection:1000,
    withCredentials: true,
    secure:true,
});

export const IoWebSocket = (email) => Io(baseUrl, { query: `data=${email}`})