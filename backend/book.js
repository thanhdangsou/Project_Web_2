// const xmlhtml = new XMLHttpRequest();
// xmlhtml.onload = function () {
//     const data = this.responseText;
//     console.log(data);
//     const newdata = JSON.parse(this.responseText);
//     document.getElementById("demo").innerHTML = newdata[0];
// }

// xmlhtml.open("GET","./backend/book.json",true);
// xmlhtml.send();
// var data = `{
//     "listBook": [
//         {
//             "title": "Thanh Gươm Diệt Quỷ",
//             "author": "GOTOUGE Koyoharu",
//             "describe": "Tanjiro là con cả trong một gia đình không còn người cha. Một hôm, Tanjiro đi bán than. Khi Tanjiro đi về nhà vào ngày hôm sau, bi kịch đang chờ đón cậu.",
//             "picture": {
//                 "large": "https://storage-bravo.cuutruyen.net/file/cuutruyen/uploads/manga/534/cover/processed-0624dd2d44bdb868da0cb67914708c91.jpg",
//                 "picture-2": "https://znews-photo.zingcdn.me/w660/Uploaded/piqbzcvo/2021_02_19/Parliamo_Di_Videogiochi.jpg"
//             },
//             "so_chuong": 51,
//             "luot_xem": 10782
//         },
//         {
//             "title": "Solo Leveling",
//             "author": "JANG SUNG-LAK",
//             "describe": "Tanjiro là con cả trong một gia đình không còn người cha. Một hôm, Tanjiro đi bán than. Khi Tanjiro đi về nhà vào ngày hôm sau, bi kịch đang chờ đón cậu.",
//             "url": "https://thuvienanime.com/wp-content/uploads/2021/11/Portgas-D-Ace.jpg",
//             "so_chuong": 51,
//             "luot_xem": 10782
//         }
//     ]
// }`;

// const dbParam = JSON.stringify({ table: "customers", limit: 20 });
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function () {
//     data = JSON.parse(this.responseText);
//     let text = "<table border='1'>"
//     for (let x in data) {
//         text += "<tr><td>" + data[x].name + "</td></tr>";
//     }
//     text += "</table>"
//     document.getElementById("demo").innerHTML = text;
// }
// xmlhttp.open("POST", "./backend/book.json");
// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.send("x=" + dbParam);


// function display(data) {
//     console.log(data)
// }
// // display(data);

// function searchBook(arr, index, value) {
//     var search = arr.find(function (a) {
//       if (index === "title") {
//         return a.title == value;
//       } else if (index === "author") {
//         return a.author == value;
//       }
//     });
//     return search;
// }

// console.log(searchBook(data,"author","GOTOUGE Koyoharu"));


// const search = document.getElementById('search');
// const btn_search = document.getElementById('btn_search');
// const display = document.getElementById('display');




var data = `{
    "listBook": [
        {
            "title": "Thanh Gươm Diệt Quỷ",
            "author": "GOTOUGE Koyoharu",
            "describe": "Tanjiro là con cả trong một gia đình không còn người cha. Một hôm, Tanjiro đi bán than. Khi Tanjiro đi về nhà vào ngày hôm sau, bi kịch đang chờ đón cậu.",
            "picture": {
                "large": "https://storage-bravo.cuutruyen.net/file/cuutruyen/uploads/manga/534/cover/processed-0624dd2d44bdb868da0cb67914708c91.jpg",
                "picture_2": "https://znews-photo.zingcdn.me/w660/Uploaded/piqbzcvo/2021_02_19/Parliamo_Di_Videogiochi.jpg"
            },
            "so_chuong": 51,
            "luot_xem": 10782
        },
        {
            "title": "Solo Leveling",
            "author": "JANG SUNG-LAK",
            "describe": "Tanjiro là con cả trong một gia đình không còn người cha. Một hôm, Tanjiro đi bán than. Khi Tanjiro đi về nhà vào ngày hôm sau, bi kịch đang chờ đón cậu.",
            "url": "https://thuvienanime.com/wp-content/uploads/2021/11/Portgas-D-Ace.jpg",
            "so_chuong": 51,
            "luot_xem": 10782
        }
    ]
}`;

// 

var obj = JSON.parse(data);
// document.write(obj.listBook[1].title);
// document.getElementById("demo").innerHTML = obj.listBook[1].so_chuong;

newData = document.querySelector("#container");
newData.innerHTML = `<div id="container">

<img src="${obj.listBook[0].picture.picture_2}" alt="" class="highlight">

<div class="information">
  <img src="${obj.listBook[0].picture.large}" alt="" class="infor">
  <div class="detail">
    <p class="author"> Andrzej Sapkowski</p>
    <h3 class="name"> ${obj.listBook[1].title}</h3>
    <p class="last-time"> 
      <span class="material-symbols-outlined">
      schedule
      </span>
    12 giờ trước
    </p>
    <p class="review">${obj.listBook[1].describe} </button>
  </div>
</div>

<div class="read">
  <p class="danh-sach"> DANH SÁCH </p>
  <div class="row">
    <div class="col-8 list">
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element le">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element le">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element le">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element le">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element le">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element le">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
      <div class="element">
        <div class="chapter">
          QUYỂN 1
        </div>
        <div class="subtitle">
          <p class="name2"> The Witcher</p>
          <p class="update"> 12 giờ trước</p>
        </div>
      </div>
    </div>
    <div class="col-4 aside">
      <!-- <div class="more-information">
        <p class="more-infor">
          THÔNG TIN THÊM
        </p>
        <p class="in4"> 
          <span class="material-symbols-outlined">
            list
          </span>
          <b>13</b> chương đã đăng
        </p>
        <p class="view">
          <span class="material-symbols-outlined">
            visibility
          </span>
          <b>1000000</b> lượt xem
        </p>
      </div> -->
      <p class="truyen-lien-quan">
        CÁC TRUYỆN LIÊN QUAN 
      </p>
      <div class="related">
        <div class="card" style="width: 200px; margin-left: 10px;">
          <img src="${obj.listBook[1].url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Sherlock Holmes</h5>
            <a href="#" class="btn btn-primary">Thông tin</a>
          </div>
        </div>
        <div class="card" style="width: 200px; margin-left: 15px;">
          <img src="image/img26.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Harry Potters</h5>
            <a href="#" class="btn btn-primary">Thông tin</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>`;



