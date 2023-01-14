// some really shitty script for a suprem.io tournament overlay
// written by ascent_

//we begin with functions designed to make my life slightly easier
function textSet(aa, bb) {
  document.getElementById(aa).innerHTML=bb
}
function opacitySet(aa, bb) {
  document.getElementById(aa).style.fillOpacity=bb
  document.getElementById(aa).style.strokeOpacity=bb
}

//next we give those functions a reason to exist
textSet('p1Name', localStorage[0]);
textSet('p2Name', localStorage[1]);
textSet('roundTypeText', localStorage[2]);
textSet('p1S1', localStorage[3]);
textSet('p2S1', localStorage[4]);
textSet('p1S2', localStorage[5]);
textSet('p2S2', localStorage[6]);
textSet('p1S3', localStorage[7]);
textSet('p2S3', localStorage[8]);
textSet('nextGame1', localStorage[9]);
textSet('nextGame2', localStorage[10]);
textSet('nextGame3', localStorage[11]);
textSet('nextGame4', localStorage[12]);
textSet('prevGame1Result', localStorage[15]);
textSet('prevGame1Score', localStorage[16]);
textSet('prevGame2Result', localStorage[13]);
textSet('prevGame2Score', localStorage[14]);
opacitySet('prevGame2Box', localStorage[17]);
opacitySet('prevGame1Box', localStorage[18]);
opacitySet('prevGameText', localStorage[18])
opacitySet('prevGameTitle', localStorage[18])
opacitySet('nextGame4Box', localStorage[19])
opacitySet('nextGame3Box', localStorage[20])
opacitySet('nextGame2Box', localStorage[21])
opacitySet('nextGame1Box', localStorage[22])
opacitySet('nextGameText', localStorage[22])
opacitySet('nextGameTitle', localStorage[22])
textSet('nextGameText', localStorage[23])
textSet('prevGameText', localStorage[24])

//this stuff gets stuff from google sheets
const params = new URLSearchParams(window.location.search);
key = params.get("key")
urlPart = "https://sheets.googleapis.com/v4/spreadsheets/1rI1f7s0MmXKaksf_ii1mug-XtkBtbxcXaGT-C0K71lo/values/dataRaw?key=";
urlFull = urlPart.concat(key)

async function fetchAsync (url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
data = fetchAsync(urlFull);

//now we start displaying the current game's scores
data.then(fulfill, reject);
function fulfill(answer) {
  textSet('p1Name', answer.values[0][0]);
  textSet('p2Name', answer.values[1][0]);
  textSet('roundTypeText', answer.values[2][0]);
  textSet('p1S1', answer.values[3][0]);
  textSet('p2S1', answer.values[4][0]);
  textSet('p1S2', answer.values[5][0]);
  textSet('p2S2', answer.values[6][0]);
  textSet('p1S3', answer.values[7][0]);
  textSet('p2S3', answer.values[8][0]);
  textSet('nextGame1', answer.values[10][0]);
  textSet('nextGame2', answer.values[11][0]);
  textSet('nextGame3', answer.values[12][0]);
  textSet('nextGame4', answer.values[13][0]);
  textSet('prevGame1Result', answer.values[18][0]);
  textSet('prevGame1Score', answer.values[19][0]);
  textSet('prevGame2Result', answer.values[14][0]);
  textSet('prevGame2Score', answer.values[15][0]);
  if (answer.values[13][0] == " ") {
    opacitySet('nextGame4Box', 0)
    localStorage[19] = 0
  } else {
    opacitySet('nextGame4Box', 1)
    localStorage[19] = 1
  }
  if (answer.values[12][0] == " ") {
    opacitySet('nextGame3Box', 0)
    localStorage[20] = 0
  } else {
    opacitySet('nextGame3Box', 1)
    localStorage[20] = 1
  }
  if (answer.values[11][0] == " ") {
    opacitySet('nextGame2Box', 0)
    textSet('nextGameText', 'Next game')
    localStorage[21] = 0
    localStorage[23] = "Next game"
  } else {
    opacitySet('nextGame2Box', 1)
    textSet('nextGameText', 'Next games')
    localStorage[21] = 1
    localStorage[23] = "Next games"
  }
  if (answer.values[10][0] == " ") {
    opacitySet('nextGame1Box', 0)
    opacitySet('nextGameTitle', 0)
    opacitySet('nextGameText', 0)
    localStorage[22] = 0
  } else {
    opacitySet('nextGame1Box', 1)
    opacitySet('nextGameTitle', 1)
    opacitySet('nextGameText', 1)
    localStorage[22] = 1
  }
  if (answer.values[14][0] == " ") {
    opacitySet('prevGame2Box', 0)
    textSet('prevGameText', 'Previous game')
    localStorage[17] = 0
    localStorage[24] = "Previous game"
  } else {
    opacitySet('prevGame2Box', 1)
    textSet('prevGameText', 'Previous games')
    localStorage[17] = 1
    localStorage[24] = "Previous games"
  }
  if (answer.values[18][0] == " ") {
    opacitySet('prevGame1Box', 0)
    opacitySet('prevGameText', 0)
    opacitySet('prevGameTitle', 0)
    localStorage[18] = 0
  } else {
    opacitySet('prevGame1Box', 1)
    opacitySet('prevGameText', 1)
    opacitySet('prevGameTitle', 1)
    localStorage[18] = 1
  }
  localStorage[0] = answer.values[0][0];
  localStorage[1] = answer.values[1][0];
  localStorage[2] = answer.values[2][0];
  localStorage[3] = answer.values[3][0];
  localStorage[4] = answer.values[4][0];
  localStorage[5] = answer.values[5][0];
  localStorage[6] = answer.values[6][0];
  localStorage[7] = answer.values[7][0];
  localStorage[8] = answer.values[8][0];
  localStorage[9] = answer.values[10][0];
  localStorage[10] = answer.values[11][0];
  localStorage[11] = answer.values[12][0];
  localStorage[12] = answer.values[13][0];
  localStorage[13] = answer.values[14][0];
  localStorage[14] = answer.values[15][0];
  localStorage[15] = answer.values[18][0];
  localStorage[16] = answer.values[19][0];
}
function reject(reason) {
  console.log(reason);
}

//finally we set themes
const theme = params.get("theme");
function fillSet(aa, bb) {
  document.getElementById(aa).style.fill=bb
}

if (theme == "amethyst") {
  document.getElementById('page').style.backgroundColor = "#200325"
  fillSet('roundType', '#45156b')
  fillSet('nextGameTitle', '#45156b')
  fillSet('prevGameTitle', '#45156b')
  fillSet('p1NameBox', '#7847ae')
  fillSet('p2NameBox', '#7847ae')
  fillSet('p1S1Box', '#cfbdff')
  fillSet('p2S1Box', '#cfbdff')
  fillSet('p1S2Box', '#cfbdff')
  fillSet('p2S2Box', '#cfbdff')
  fillSet('p1S3Box', '#cfbdff')
  fillSet('p2S3Box', '#cfbdff')
  fillSet('nextGame4Box', '#cfbdff')
  fillSet('nextGame2Box', '#cfbdff')
  fillSet('prevGame2Box', '#cfbdff')
  fillSet('nextGame3Box', '#b99cec')
  fillSet('nextGame1Box', '#b99cec')
  fillSet('prevGame1Box', '#b99cec')
} else if (theme == "sapphire") {
  document.getElementById('page').style.backgroundColor = "#1e2838"
  fillSet('roundType', '#1c4587')
  fillSet('nextGameTitle', '#1c4587')
  fillSet('prevGameTitle', '#1c4587')
  fillSet('p1NameBox', '#3c78d8')
  fillSet('p2NameBox', '#3c78d8')
  fillSet('p1S1Box', '#c9daf8')
  fillSet('p2S1Box', '#c9daf8')
  fillSet('p1S2Box', '#c9daf8')
  fillSet('p2S2Box', '#c9daf8')
  fillSet('p1S3Box', '#c9daf8')
  fillSet('p2S3Box', '#c9daf8')
  fillSet('nextGame4Box', '#c9daf8')
  fillSet('nextGame2Box', '#c9daf8')
  fillSet('prevGame2Box', '#c9daf8')
  fillSet('nextGame3Box', '#a4c2f4')
  fillSet('nextGame1Box', '#a4c2f4')
  fillSet('prevGame1Box', '#a4c2f4')
} else if (theme == "ruby") {
  document.getElementById('page').style.backgroundColor = "#360102"
  fillSet('roundType', '#8e0009')
  fillSet('nextGameTitle', '#8e0009')
  fillSet('prevGameTitle', '#8e0009')
  fillSet('p1NameBox', '#db1a22')
  fillSet('p2NameBox', '#db1a22')
  fillSet('p1S1Box', '#ffbdbd')
  fillSet('p2S1Box', '#ffbdbd')
  fillSet('p1S2Box', '#ffbdbd')
  fillSet('p2S2Box', '#ffbdbd')
  fillSet('p1S3Box', '#ffbdbd')
  fillSet('p2S3Box', '#ffbdbd')
  fillSet('nextGame4Box', '#ffbdbd')
  fillSet('nextGame2Box', '#ffbdbd')
  fillSet('prevGame2Box', '#ffbdbd')
  fillSet('nextGame3Box', '#ec9c9c')
  fillSet('nextGame1Box', '#ec9c9c')
  fillSet('prevGame1Box', '#ec9c9c')
} else if (theme == "emerald") {
  document.getElementById('page').style.backgroundColor = "#011100"
  fillSet('roundType', '#026100')
  fillSet('nextGameTitle', '#026100')
  fillSet('prevGameTitle', '#026100')
  fillSet('p1NameBox', '#119810')
  fillSet('p2NameBox', '#119810')
  fillSet('p1S1Box', '#b4eab2')
  fillSet('p2S1Box', '#b4eab2')
  fillSet('p1S2Box', '#b4eab2')
  fillSet('p2S2Box', '#b4eab2')
  fillSet('p1S3Box', '#b4eab2')
  fillSet('p2S3Box', '#b4eab2')
  fillSet('nextGame4Box', '#b4eab2')
  fillSet('nextGame2Box', '#b4eab2')
  fillSet('prevGame2Box', '#b4eab2')
  fillSet('nextGame3Box', '#7ed67a')
  fillSet('nextGame1Box', '#7ed67a')
  fillSet('prevGame1Box', '#7ed67a')
} else {
  document.getElementById('page').style.backgroundColor = "#000000"

}
