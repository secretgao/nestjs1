var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

   
var raw = JSON.stringify({
    "guid": "0e71409b-551e-3e3f-8898-dbb5ac1a6f15",
   "start_index": 0,
   "limit": 10
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
};

fetch("http://8.134.165.117:8899/room/get_room_list", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
/*

{"error_code": 0, "error_message": "ok", "data": {"roomdata": {"datas": [{"id": "7439614420241150348", "roomid": "10902259192639572", "owner_vid": "1688854301656514", "createts": 1732170211, "updatets": 1732186487, "member_count": 4, "flag": 0, "roomname": "1111", "roomurl": "https://wework.qpic.cn/wwpic3az/212418_3JBzzhAmSTCwg68_1732186489/0", "infoticket": "EE74A7A82EDDBD9ED3ED5882575EEDCF3DC99FF60102C6542D27E167AB95FDDDCBCA6E2F7A8FAC72FA03D12BD3517F980F6A17B5A141EEF5E7F640D016946D9A", "shift_time": 0, "old_owner_vid": "0"}]}, "next_start": -1, "total": 1}}
*/