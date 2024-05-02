const ModbusRTU = require("modbus-serial");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8082 });
const client = new ModbusRTU();
const modbusHost = "127.0.0.1";
const modbusPort = 502;
const reconnectInterval = 5000;

let connected = false;

const registerSets = [
  [0, 2, 4, 6, 8],
  [10, 12, 14, 16, 18],
  [20, 22, 24, 26, 28],
  [30, 32, 34, 36, 38],
];

function connectToPLC() {
  client
    .connectTCP(modbusHost, { port: modbusPort })
    .then(() => {
      console.log("Connected to Modbus PLC!");
      client.setID(1);
      client.setTimeout(5000);
      connected = true;
      pollData();
    })
    .catch((err) => {
      console.error("Connection error:", err.message);
      connected = false;
      setTimeout(connectToPLC, reconnectInterval);
    });
}

async function pollData() {
  if (!connected) {
    return;
  }

  try {
    let results = [];

    for (const set of registerSets) {
      let registerValues = [];
      for (const address of set) {
        let data = await client.readHoldingRegisters(address, 2);
        registerValues.push(convertRegistersToFloat(data.data));
      }
      results.push(registerValues);
    }

    wss.clients.forEach((ws) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(results));
      }
    });
  } catch (err) {
    console.error("Read error:", err.message);
    connected = false;
    client.close();
    setTimeout(connectToPLC, reconnectInterval);
  } finally {
    setTimeout(pollData, 1000);
  }
}

function convertRegistersToFloat(registers) {
  if (registers.length !== 2) {
    throw new Error("Invalid buffer size for converting to float");
  }
  let buffer = Buffer.alloc(4);
  buffer.writeInt16BE(registers[0], 0);
  buffer.writeInt16BE(registers[1], 2);
  return buffer.readFloatBE(0).toFixed(2);
}

wss.on("connection", (ws) => {
  ws.on("close", () => {});
});

connectToPLC();

client.on("close", () => {
  if (connected) {
    console.log("Connection to PLC was closed");
    connected = false;
    connectToPLC();
  }
});
