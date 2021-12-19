import { createContext } from "react";
import Io from "socket.io-client";

import { baseUrlTrade, baseUserSocketUrl, baseUrlTradeSocket , baseUrlCronjob } from "../stores/index";

export let IoWebSocketTrade=Io(baseUrlTrade,{
    path:"/realtime",
});

export let IoWebSocketCronjob=Io(baseUrlCronjob,{
    path:"/realtime",
});

const IoUserWebSocket = (email) => Io(baseUserSocketUrl, { query: `data=${email}`})
export const IoUserWebSocketContext = createContext({ IoUserWebSocket })
export const IoTradeWebSocket = (email) => Io(baseUrlTradeSocket, { query: `data=${email}`, path:"/realtime"})