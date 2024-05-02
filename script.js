function displayTime() {
  var currentTime = new Date();
  var timeString = currentTime.toLocaleTimeString();
  document.getElementById("time").innerHTML = timeString;
}

setInterval(displayTime, 1000);

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

var formattedDate = day + "/" + month + "/" + year;
document.getElementById("date").innerHTML = formattedDate;

function home_btn() {
  window.location.href = "./home.html";
}

function tanks_btn() {
  window.location.href = "./tanks.html";
}

function sap_reports_btn() {
  window.location.href = "./sap-reports.html";
}

function reports_btn() {
  window.location.href = "./reports.html";
}

let tank1_params = [
  "primary_level",
  "secondary_level",
  "liqt_level",
  "vapt_level",
  "pressure_level",
];
let tank2_params = [
  "primary_level",
  "secondary_level",
  "liqt_level",
  "vapt_level",
  "pressure_level",
];
let tank3_params = [
  "primary_level",
  "secondary_level",
  "liqt_level",
  "vapt_level",
  "pressure_level",
];
let tank4_params = [
  "primary_level",
  "secondary_level",
  "liqt_level",
  "vapt_level",
  "pressure_level",
];

// Notification.requestPermission()
//         .then(permission =>{
//             if (permission === 'granted') {
//                 new Notification('Online')
//             }
//         })

const ws = new WebSocket("ws://localhost:8082");
let tankdata;

ws.onmessage = function (event) {
  const data = JSON.parse(event.data);
  tankdata = data;
  data.forEach((tankData, tankIndex) => {
    tankData.forEach((value, valueIndex) => {
      const elementId = `tank${tankIndex + 1}_params[${valueIndex}]`;
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = value;
      }
    });
  });
};

function soapsend_tk1() {
  const url =
    "http://podev.corp.bharatpetroleum.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_LPG_TAS&receiverParty=&receiverService=&interface=Tank_Closing_Data_Input_Sync_OB_SI&interfaceNamespace=http://Tank_Closing_Data_WS"; // replace with your SOAP service URL
  const headers = {
    "Content-Type": "text/xml; charset=utf-8",
    Authorization: "Basic " + btoa("PIUOTECH" + ":" + "JwU6Yza4BY"),
  };

  const body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tank="http://Tank_Closing_Data_WS">
      <soapenv:Header/>
      <soapenv:Body>
          <tank:Tank_Closing_Data_Input_MT>
              <Input_Data>
                  <CLOSING_DATE>${formattedDate}</CLOSING_DATE>
                  <CLOSING_TIME>${timeString}</CLOSING_TIME>
                  <PLANT_CODE>3102</PLANT_CODE>
                  <TANK_NO>S001</TANK_NO>
                  <MATERIAL> </MATERIAL>
                  <TANK_DIP>  9546</TANK_DIP>
                  <WATER_DIP>0</WATER_DIP>
                  <DENSITY>545</DENSITY>
                  <MATERIAL_TEMP>  28</MATERIAL_TEMP>
                  <VAPOUR_TEMP>  37</VAPOUR_TEMP>
                  <VAPOUR_PRESSURE>5.16</VAPOUR_PRESSURE>
                  <EVENT_ID>3102200016</EVENT_ID>
                  <USERNAME>PIDOTECH</USERNAME>
              </Input_Data>
          </tank:Tank_Closing_Data_Input_MT>
      </soapenv:Body>
  </soapenv:Envelope>`;

  fetch(url, { method: "POST", headers, body })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
}

function soapsend_tk2() {
  const url =
    "http://podev.corp.bharatpetroleum.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_LPG_TAS&receiverParty=&receiverService=&interface=Tank_Closing_Data_Input_Sync_OB_SI&interfaceNamespace=http://Tank_Closing_Data_WS"; // replace with your SOAP service URL
  const headers = {
    "Content-Type": "text/xml; charset=utf-8",
    Authorization: "Basic " + btoa("PIUOTECH" + ":" + "JwU6Yza4BY"),
  };

  const body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tank="http://Tank_Closing_Data_WS">
        <soapenv:Header/>
        <soapenv:Body>
            <tank:Tank_Closing_Data_Input_MT>
                <Input_Data>
                    <CLOSING_DATE>${formattedDate}</CLOSING_DATE>
                    <CLOSING_TIME>${timeString}</CLOSING_TIME>
                    <PLANT_CODE>3102</PLANT_CODE>
                    <TANK_NO>S007</TANK_NO>
                    <MATERIAL> </MATERIAL>
                    <TANK_DIP>  9546</TANK_DIP>
                    <WATER_DIP>0</WATER_DIP>
                    <DENSITY>545</DENSITY>
                    <MATERIAL_TEMP>  28</MATERIAL_TEMP>
                    <VAPOUR_TEMP>  37</VAPOUR_TEMP>
                    <VAPOUR_PRESSURE>5.16</VAPOUR_PRESSURE>
                    <EVENT_ID>3102200016</EVENT_ID>
                    <USERNAME>PIDOTECH</USERNAME>
                </Input_Data>
            </tank:Tank_Closing_Data_Input_MT>
        </soapenv:Body>
    </soapenv:Envelope>`;

  fetch(url, { method: "POST", headers, body })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
}

function soapsend_tk3() {
  const url =
    "http://podev.corp.bharatpetroleum.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_LPG_TAS&receiverParty=&receiverService=&interface=Tank_Closing_Data_Input_Sync_OB_SI&interfaceNamespace=http://Tank_Closing_Data_WS"; // replace with your SOAP service URL
  const headers = {
    "Content-Type": "text/xml; charset=utf-8",
    Authorization: "Basic " + btoa("PIUOTECH" + ":" + "JwU6Yza4BY"),
  };

  const body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tank="http://Tank_Closing_Data_WS">
          <soapenv:Header/>
          <soapenv:Body>
              <tank:Tank_Closing_Data_Input_MT>
                  <Input_Data>
                      <CLOSING_DATE>${formattedDate}</CLOSING_DATE>
                      <CLOSING_TIME>${timeString}</CLOSING_TIME>
                      <PLANT_CODE>3102</PLANT_CODE>
                      <TANK_NO>S007</TANK_NO>
                      <MATERIAL> </MATERIAL>
                      <TANK_DIP>  9546</TANK_DIP>
                      <WATER_DIP>0</WATER_DIP>
                      <DENSITY>545</DENSITY>
                      <MATERIAL_TEMP>  28</MATERIAL_TEMP>
                      <VAPOUR_TEMP>  37</VAPOUR_TEMP>
                      <VAPOUR_PRESSURE>5.16</VAPOUR_PRESSURE>
                      <EVENT_ID>3102200016</EVENT_ID>
                      <USERNAME>PIDOTECH</USERNAME>
                  </Input_Data>
              </tank:Tank_Closing_Data_Input_MT>
          </soapenv:Body>
      </soapenv:Envelope>`;

  fetch(url, { method: "POST", headers, body })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
}

function soapsend_tk4() {
  const url =
    "http://podev.corp.bharatpetroleum.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_LPG_TAS&receiverParty=&receiverService=&interface=Tank_Closing_Data_Input_Sync_OB_SI&interfaceNamespace=http://Tank_Closing_Data_WS"; // replace with your SOAP service URL
  const headers = {
    "Content-Type": "text/xml; charset=utf-8",
    Authorization: "Basic " + btoa("PIUOTECH" + ":" + "JwU6Yza4BY"),
  };

  const body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tank="http://Tank_Closing_Data_WS">
          <soapenv:Header/>
          <soapenv:Body>
              <tank:Tank_Closing_Data_Input_MT>
                  <Input_Data>
                      <CLOSING_DATE>${formattedDate}</CLOSING_DATE>
                      <CLOSING_TIME>${timeString}</CLOSING_TIME>
                      <PLANT_CODE>3102</PLANT_CODE>
                      <TANK_NO>S007</TANK_NO>
                      <MATERIAL> </MATERIAL>
                      <TANK_DIP>  9546</TANK_DIP>
                      <WATER_DIP>0</WATER_DIP>
                      <DENSITY>545</DENSITY>
                      <MATERIAL_TEMP>  28</MATERIAL_TEMP>
                      <VAPOUR_TEMP>  37</VAPOUR_TEMP>
                      <VAPOUR_PRESSURE>5.16</VAPOUR_PRESSURE>
                      <EVENT_ID>3102200016</EVENT_ID>
                      <USERNAME>PIDOTECH</USERNAME>
                  </Input_Data>
              </tank:Tank_Closing_Data_Input_MT>
          </soapenv:Body>
      </soapenv:Envelope>`;

  fetch(url, { method: "POST", headers, body })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
}

ws.onerror = function (event) {
  console.error("WebSocket error:", event);
};

ws.onopen = function (event) {
  console.log("Connected to WebSocket server");
};

ws.onclose = function (event) {
  console.log("Disconnected from WebSocket server");
};
