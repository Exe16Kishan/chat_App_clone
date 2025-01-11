import { useCallback, useEffect, useRef, useState } from "react";

interface BaseMessage {
  type: string;
  timestamp: string;
}

export interface ChatMessage extends BaseMessage {
  type: "chat";
  content: string;
  senderId: string;
  to:string;
}

interface PingMessage extends BaseMessage {
  type: "ping";
}

interface SystemMessage extends BaseMessage {
  type: "system";
  content: string;
}

type WebSocketMessage = ChatMessage | PingMessage | SystemMessage;
const useWebSocket = (url: string) => {
  //websocket, status , message , error
  const ws = useRef<WebSocket | null>(null);
  const reconnectCount = useRef<number>(0);
  const [status, setStatus] = useState("disconnected");
  const [message, setMessage] = useState<WebSocketMessage[]>([]);
  const [error, setError] = useState<Error | null | string>(null);

  // function to connect to the websocket

  const connectToWebSocket = useCallback(() => {
    try {
      // check if already connected no need to connect again
      if (ws.current?.readyState == WebSocket.OPEN) return;

      // if not connected
      ws.current = new WebSocket(url);
      setStatus("connecting");

      // if connection is open
      ws.current.onopen = () => {
        setStatus("connected");
        setError(null);
      };

      // if there is some message
      ws.current.onmessage = (MessageEvent: MessageEvent) => {
        try {
          const msg = JSON.parse(MessageEvent.data); // fix the date structure
          setMessage(prev=>[...prev, msg]);
        } catch (err) {
          setError(new Error("Invalid message format"));
        }
      };

      // on any error
      ws.current.onerror = (e: Event) => {
        setStatus("error");
        setError(new Error("Websocket connection error"));
      };

      // onclosing the websocket
      ws.current.onclose = () => {
        setStatus("disconnected");
      };
    } catch (err) {
      setStatus("Error");
      setError(err instanceof Error ? err : new Error("failed to connect"));
    }
  }, [url]);

  // initialize the connection
  useEffect(() => {
    // connect to websocket
    connectToWebSocket();

    return () => {
        if (ws.current) {
          ws.current.close();
        }
      };
  }, [connectToWebSocket]);


  // logic to send message
  const sendMessage = (messageData: ChatMessage) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      const fullMessage = {
        ...messageData,
        timestamp: new Date().toISOString(),
        to: messageData.to  
      };
      setMessage(prev=>[...prev,fullMessage])
      ws.current.send(JSON.stringify(fullMessage));
    } else {
      setError(new Error('WebSocket is not connected'));
    }
  };

  // pending reconnect logic .......

  return{
    status,
    message,
    error,
    sendMessage,
  }


};

export default useWebSocket;




