$(document).ready(function () {
  getWeatherData();
  getWeatherLongData();
  getWeatherLong2Data();
});

setInterval(function () {
  getWeatherData();
  getWeatherLongData();
  getWeatherLong2Data();
}, 1800000);

function getWeatherData(params) {
  const now = new Date();

  let timeIn0 = now.getHours();
  let timeIn1 = now.getMinutes();

  if (timeIn0 < 10) {
    timeIn0 = "0" + timeIn0.toString();
  }
  if (timeIn1 < 10) {
    timeIn1 = "0" + timeIn1.toString();
  }

  const timeIn = timeIn0.toString() + timeIn1.toString();

  let time = 0;

  if (parseInt(timeIn) < 45) {
    time = "2330";
  } else if (45 <= parseInt(timeIn) && parseInt(timeIn) < 145) {
    time = "0030";
  } else if (145 <= parseInt(timeIn) && parseInt(timeIn) < 245) {
    time = "0130";
  } else if (245 <= parseInt(timeIn) && parseInt(timeIn) < 345) {
    time = "0230";
  } else if (345 <= parseInt(timeIn) && parseInt(timeIn) < 445) {
    time = "0330";
  } else if (445 <= parseInt(timeIn) && parseInt(timeIn) < 545) {
    time = "0430";
  } else if (545 <= parseInt(timeIn) && parseInt(timeIn) < 645) {
    time = "0530";
  } else if (645 <= parseInt(timeIn) && parseInt(timeIn) < 745) {
    time = "0630";
  } else if (745 <= parseInt(timeIn) && parseInt(timeIn) < 845) {
    time = "0730";
  } else if (845 <= parseInt(timeIn) && parseInt(timeIn) < 945) {
    time = "1830";
  } else if (945 <= parseInt(timeIn) && parseInt(timeIn) < 1045) {
    time = "1930";
  } else if (1045 <= parseInt(timeIn) && parseInt(timeIn) < 1145) {
    time = "1030";
  } else if (1145 <= parseInt(timeIn) && parseInt(timeIn) < 1245) {
    time = "1130";
  } else if (1245 <= parseInt(timeIn) && parseInt(timeIn) < 1345) {
    time = "1230";
  } else if (1345 <= parseInt(timeIn) && parseInt(timeIn) < 1445) {
    time = "1330";
  } else if (1445 <= parseInt(timeIn) && parseInt(timeIn) < 1545) {
    time = "1430";
  } else if (1545 <= parseInt(timeIn) && parseInt(timeIn) < 1645) {
    time = "1530";
  } else if (1645 <= parseInt(timeIn) && parseInt(timeIn) < 1745) {
    time = "1630";
  } else if (1745 <= parseInt(timeIn) && parseInt(timeIn) < 1845) {
    time = "1730";
  } else if (1845 <= parseInt(timeIn) && parseInt(timeIn) < 1945) {
    time = "1830";
  } else if (1945 <= parseInt(timeIn) && parseInt(timeIn) < 2045) {
    time = "1930";
  } else if (2045 <= parseInt(timeIn) && parseInt(timeIn) < 2145) {
    time = "2030";
  } else if (2145 <= parseInt(timeIn) && parseInt(timeIn) < 2245) {
    time = "2130";
  } else if (2245 <= parseInt(timeIn) && parseInt(timeIn) < 2345) {
    time = "2230";
  }

  const dateIn0 = now.getFullYear();
  let dateIn1 = now.getMonth() + 1;
  let dateIn2 = now.getDate();
  if (parseInt(timeIn) < 45) {
    dateIn2 = now.getDate() - 1;
  }

  if (dateIn1 < 10) {
    dateIn1 = "0" + dateIn1.toString();
  }
  if (dateIn2 < 10) {
    dateIn2 = "0" + dateIn2.toString();
  }

  const dateIn = dateIn0.toString() + dateIn1.toString() + dateIn2.toString();
  // if (parseInt(timeIn) < 40) {
  //   time = "2300";
  // } else if (40 <= parseInt(timeIn) && parseInt(timeIn) < 140) {
  //   time = "0000";
  // } else if (140 <= parseInt(timeIn) && parseInt(timeIn) < 240) {
  //   time = "0100";
  // } else if (240 <= parseInt(timeIn) && parseInt(timeIn) < 340) {
  //   time = "0200";
  // } else if (340 <= parseInt(timeIn) && parseInt(timeIn) < 440) {
  //   time = "0300";
  // } else if (440 <= parseInt(timeIn) && parseInt(timeIn) < 540) {
  //   time = "0400";
  // } else if (540 <= parseInt(timeIn) && parseInt(timeIn) < 640) {
  //   time = "0500";
  // } else if (640 <= parseInt(timeIn) && parseInt(timeIn) < 740) {
  //   time = "0600";
  // } else if (740 <= parseInt(timeIn) && parseInt(timeIn) < 840) {
  //   time = "0700";
  // } else if (840 <= parseInt(timeIn) && parseInt(timeIn) < 940) {
  //   time = "1800";
  // } else if (940 <= parseInt(timeIn) && parseInt(timeIn) < 1040) {
  //   time = "1900";
  // } else if (1040 <= parseInt(timeIn) && parseInt(timeIn) < 1140) {
  //   time = "1000";
  // } else if (1140 <= parseInt(timeIn) && parseInt(timeIn) < 1240) {
  //   time = "1100";
  // } else if (1240 <= parseInt(timeIn) && parseInt(timeIn) < 1340) {
  //   time = "1200";
  // } else if (1340 <= parseInt(timeIn) && parseInt(timeIn) < 1440) {
  //   time = "1300";
  // } else if (1440 <= parseInt(timeIn) && parseInt(timeIn) < 1540) {
  //   time = "1400";
  // } else if (1540 <= parseInt(timeIn) && parseInt(timeIn) < 1640) {
  //   time = "1500";
  // } else if (1640 <= parseInt(timeIn) && parseInt(timeIn) < 1740) {
  //   time = "1600";
  // } else if (1740 <= parseInt(timeIn) && parseInt(timeIn) < 1840) {
  //   time = "1700";
  // } else if (1840 <= parseInt(timeIn) && parseInt(timeIn) < 1940) {
  //   time = "1800";
  // } else if (1940 <= parseInt(timeIn) && parseInt(timeIn) < 2040) {
  //   time = "1900";
  // } else if (2040 <= parseInt(timeIn) && parseInt(timeIn) < 2140) {
  //   time = "2000";
  // } else if (2140 <= parseInt(timeIn) && parseInt(timeIn) < 2240) {
  //   time = "2100";
  // } else if (2240 <= parseInt(timeIn) && parseInt(timeIn) < 2340) {
  //   time = "2200";
  // }

  var url =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst"; /*URL*/
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "8OLkgocEpXrd98Ej5mh0ka6H178gKgSyDrSCj8LT0hJBRUnn63NC4CLlngYmjGWik0Kfv6JKb0UXBm2G04n9Qw%3D%3D"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("1000"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("dataType") +
    "=" +
    encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("base_date") +
    "=" +
    encodeURIComponent(dateIn); /**/
  queryParams +=
    "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent(time); /**/
  queryParams +=
    "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("90"); /**/
  queryParams +=
    "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("90"); /**/

  $.getJSON(url + queryParams, function (data) {
    for (let i = 0; i < 6; i++) {
      let t1h_0 = data.response.body.items.item[24 + i].fcstValue;
      let rn1_0 = data.response.body.items.item[12 + i].fcstValue;
      let sky_0 = data.response.body.items.item[18 + i].fcstValue;
      let pty_0 = data.response.body.items.item[6 + i].fcstValue;
      let lgt_0 = data.response.body.items.item[0 + i].fcstValue;
      let wsd_0 = data.response.body.items.item[54 + i].fcstValue;

      let time_0 = data.response.body.items.item[i].fcstTime;
      time_0 = time_0.substring("0", "2") + ":" + time_0.substring("2");

      let skyReal01 = "";
      let skyReal01Dan = "";
      switch (parseInt(sky_0)) {
        case 1:
          skyReal01Dan = "맑음";
          if ((600 < parseInt(timeIn)) & (parseInt(timeIn) <= 1800)) {
            skyReal01 = "sunny.png";
          } else {
            skyReal01 = "nightsunny.png";
          }
          break;
        case 3:
          skyReal01Dan = "흐림";
          if ((600 < parseInt(timeIn)) & (parseInt(timeIn) <= 1800)) {
            skyReal01 = "sunnurain.png";
          } else {
            skyReal01 = "nightsunnyclou.png";
          }

          break;
        case 4:
          skyReal01Dan = "흐림";
          skyReal01 = "cloud.png";
          break;
      }

      switch (parseInt(pty_0)) {
        case 1:
        case 5:
          skyReal01Dan = "비";
          if (0.2 < parseFloat(lgt_0)) {
            skyReal01 = "thuderrain.png";
          } else {
            skyReal01 = "rain.png";
          }
          break;
        case 2:
        case 3:
        case 6:
        case 7:
          skyReal01Dan = "눈";
          skyReal01 = "snow.png";
          break;
      }

      let id001 = "#today0" + (i + 1) + "1";
      let id002 = "#today0" + (i + 1) + "2";
      let id003 = "#today0" + (i + 1) + "3";
      let id004 = "#today0" + (i + 1) + "4";

      $(id001).attr("src", skyReal01);
      $(id002).text(skyReal01Dan);
      $(id003).text(t1h_0);
      $(id004).text(time_0);
    }
  });
}
function getWeatherLongData(params) {
  const now = new Date();

  const dateIn0 = now.getFullYear();
  let dateIn1 = now.getMonth() + 1;
  let dateIn2 = now.getDate();

  if (dateIn1 < 10) {
    dateIn1 = "0" + dateIn1.toString();
  }
  if (dateIn2 < 10) {
    dateIn2 = "0" + dateIn2.toString();
  }

  const dateIn = dateIn0.toString() + dateIn1.toString() + dateIn2.toString();

  let timeIn0 = now.getHours();
  let timeIn1 = now.getMinutes();

  if (timeIn0 < 10) {
    timeIn0 = "0" + timeIn0.toString();
  }
  if (timeIn1 < 10) {
    timeIn1 = "0" + timeIn1.toString();
  }

  const timeIn = timeIn0.toString() + timeIn1.toString();

  let time = 0;

  if (parseInt(timeIn) < 210) {
    time = "2300";
  } else if (210 <= parseInt(timeIn) && parseInt(timeIn) < 510) {
    time = "0200";
  } else if (510 <= parseInt(timeIn) && parseInt(timeIn) < 810) {
    time = "0500";
  } else if (810 <= parseInt(timeIn) && parseInt(timeIn) < 1110) {
    time = "0800";
  } else if (1110 <= parseInt(timeIn) && parseInt(timeIn) < 1410) {
    time = "1100";
  } else if (1410 <= parseInt(timeIn) && parseInt(timeIn) < 1710) {
    time = "1400";
  } else if (1710 <= parseInt(timeIn) && parseInt(timeIn) < 2010) {
    time = "1700";
  } else if (2010 <= parseInt(timeIn) && parseInt(timeIn) < 2310) {
    time = "2000";
  }

  var url =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"; /*URL*/
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "8OLkgocEpXrd98Ej5mh0ka6H178gKgSyDrSCj8LT0hJBRUnn63NC4CLlngYmjGWik0Kfv6JKb0UXBm2G04n9Qw%3D%3D"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("1000"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("dataType") +
    "=" +
    encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("base_date") +
    "=" +
    encodeURIComponent(dateIn); /**/
  queryParams +=
    "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent(time); /**/
  queryParams +=
    "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("90"); /**/
  queryParams +=
    "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("90"); /**/

  $.getJSON(url + queryParams, function (data) {});
}
function getWeatherLong2Data(params) {
  const now = new Date();

  let timeIn0 = now.getHours();
  let timeIn1 = now.getMinutes();

  if (timeIn0 < 10) {
    timeIn0 = "0" + timeIn0.toString();
  }
  if (timeIn1 < 10) {
    timeIn1 = "0" + timeIn1.toString();
  }

  const timeIn = timeIn0.toString() + timeIn1.toString();

  let time = 0;

  const dateIn0 = now.getFullYear();
  let dateIn1 = now.getMonth() + 1;

  let dateIn2 = now.getDate();
  if (0 <= parseInt(timeIn) && parseInt(timeIn) < 630) {
    dateIn2 = now.getDate() - 1;
  }

  if (dateIn1 < 10) {
    dateIn1 = "0" + dateIn1.toString();
  }
  if (dateIn2 < 10) {
    dateIn2 = "0" + dateIn2.toString();
  }

  const dateIn = dateIn0.toString() + dateIn1.toString() + dateIn2.toString();

  if (630 <= parseInt(timeIn) && parseInt(timeIn) < 1830) {
    time = dateIn + "0600";
  } else if (0 <= parseInt(timeIn) && parseInt(timeIn) < 630) {
    time = dateIn + "1800";
  } else {
    time = dateIn + "1800";
  }

  console.log(dateIn);
  console.log(time);

  var url =
    "http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst"; /*URL*/
  var queryParams =
    "?" +
    encodeURIComponent("serviceKey") +
    "=" +
    "8OLkgocEpXrd98Ej5mh0ka6H178gKgSyDrSCj8LT0hJBRUnn63NC4CLlngYmjGWik0Kfv6JKb0UXBm2G04n9Qw%3D%3D"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("1000"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("dataType") +
    "=" +
    encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" + encodeURIComponent("stnId") + "=" + encodeURIComponent("143"); /**/
  queryParams +=
    "&" + encodeURIComponent("tmFc") + "=" + encodeURIComponent(time); /**/

  $.getJSON(url + queryParams, function (data) {
    let conttyp = data.response.body.items.item[0].wfSv;

    $("#contwether").html(conttyp);
  });
}
