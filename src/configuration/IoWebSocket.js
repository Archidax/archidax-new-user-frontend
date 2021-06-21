import Io from "socket.io-client";

import { baseUrlTrade, baseUserSocketUrl, baseUrlTradeSocket , baseUrlCronjob } from "../stores/index";

export let IoWebSocketTrade=Io(baseUrlTrade,{
    path:"/realtime",
});

export let IoWebSocketCronjob=Io(baseUrlCronjob,{
    path:"/realtime",
});

export const IoUserWebSocket = (email) => Io(baseUserSocketUrl, { query: `data=${email}`})
export const IoTradeWebSocket = (email) => Io(baseUrlTrade, { query: `data=${email}`, path:"/realtime"})