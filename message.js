var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "guid": "0e71409b-551e-3e3f-8898-dbb5ac1a6f15",
   "conversation_id": "R:10902259192639572",
   "content": "nihao"
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
};

fetch("http://8.134.165.117:8899/msg/send_text", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));