'use strict'
// Please don't delete the 'use strict' line above


//コーヒー豆/////////////////////////////////////////////////////////////////////////////////////////
  
  const mocha = {
    bitterness: 2,
    acidity: 4,
    sweets: 4,
    richBody: 4,
    flavor: 5,
    highFrequently: false,
    beansName: "モカ（エチオピア）",
    about: "フルーティで華やかな香りのするやや小粒の豆が特徴です。嫌みの全くない酸味と軽い苦みが絶妙です。",
    yen: "税込 1,512円/200g",
    img: "img/beans.jpeg",
    url:`http://umapanera.com/?pid=50142269`,
    score: 0,
  };
  
  const toraja = {
    bitterness: 4,
    acidity: 2,
    sweets: 3,
    richBody: 4,
    flavor: 5,
    highFrequently: false,
    beansName: "トラジャ（アリオスト・カロシG-1）",
    about: "トラジャ王族の血を引くコーヒー。スパイシー、厚みのある酸味と丸みのボディ、長く続く余韻を楽しめます。",
    yen: "税込 1,728円/200g",
    img: "img/beans.jpeg",
    url:`http://umapanera.com/?pid=50142269`,
    score: 0,
  };
  
  const kilimanjaro = {
    bitterness: 3,
    acidity: 4,
    sweets: 2,
    richBody: 4,
    flavor: 5,
    highFrequently: false,
    beansName: "キリマンジャロ（エーデルワイスAA）",
    about: "エーデルワイス農園特有の柔らかな酸味を中心に、甘みと苦み、芳醇な香りを存分に楽しめます。",
    yen: "税込 1,620円/200g",
    img: "img/beans.jpeg",
    url:`http://umapanera.com/?pid=50142269`,
    score: 0,
  };
  
  const blendEn = {
    bitterness: 4,
    acidity: 1,
    sweets: 3,
    richBody: 4,
    flavor: 5,
    highFrequently: false,
    beansName: "縁（ブレンド）",
    about: "４種類のスペシャリティ豆を使用したプレミアムブレンド。深い旨味が特徴。",
    yen: "税込 1,793円/200g",
    img: "img/beans.jpeg",
    url:`http://umapanera.com/?pid=50142269`,
    score: 0,
  };
  
  const columbiaDecaf = {
    bitterness: 3,
    acidity: 3,
    sweets: 3,
    richBody: 3,
    flavor: 4,
    highFrequently: true,
    beansName: "コロンビア・デカフェ",
    about: "カフェイン残留率を0.1%以下に抑えた画期的な製法なので、妊産婦・授乳中の方、カフェインで眠れなくなる方、健康志向の方にお勧めできます。",
    yen: "税込 1,836円/200g",
    img: "img/beans.jpeg",
    url:`http://umapanera.com/?pid=50142269`,
    score: 0,
  };
  
  const BrazilDecaf = {
    bitterness: 3,
    acidity: 2,
    sweets: 2,
    richBody: 3,
    flavor: 4,
    highFrequently: true,
    beansName: "ブラジル・デカフェ",
    about: "カフェイン残留率を0.1%以下に抑えた画期的な製法なので、妊産婦・授乳中の方、カフェインで眠れなくなる方、健康志向の方にお勧めできます。",
    yen: "税込 1,836円/200g",
    img: "img/beans.jpeg",
    url:`http://umapanera.com/?pid=50142269`,
    score: 0,
  };
  
  const coffeeBeansList = [mocha,toraja,kilimanjaro,blendEn,columbiaDecaf,BrazilDecaf];


// // スライダーバーの値をリアルタイムに表示//////////////////////
// let elem = document.getElementsByClassName('range');
// let rangeValue = function (elem, target) {
//   return function(evt){
//     target.innerHTML = elem.value;
//   }
// }
// for(let i = 0, max = elem.length; i < max; i++){
//   bar = elem[i].getElementsByTagName('input')[0];
//   target = elem[i].getElementsByTagName('span')[0];
//   bar.addEventListener('input', rangeValue(bar, target));
// }

//お好み条件/////////////////////////////////////////////////////////////////////////////

const select = {
    bitterness: 3,
    acidity: 3,
    sweets: 3,
    richBody: 3,
    flavor: 3,
    highFrequently: false
}

function suggestClick(){
    const valueBitterness = document.getElementById("bitterness").valueAsNumber;
    const valueAcidity = document.getElementById("acidity").valueAsNumber;
    const valueSweets = document.getElementById("sweets").valueAsNumber;
    const valueRichBody = document.getElementById("richBody").valueAsNumber;
    const valueFlavor = document.getElementById("flavor").valueAsNumber;
    const checkNight = document.getElementById("night").checked;
    const checkFourCup = document.getElementById("fourCup").checked;
    select.bitterness = valueBitterness;
    select.acidity = valueAcidity;
    select.sweets = valueSweets;
    select.richBody = valueRichBody;
    select.flavor = valueFlavor;
    select.highFrequently = false;
    if ( checkNight === true || checkFourCup === true ){
        select.highFrequently = true;
    }

    document.getElementById("suggestArea").style.display = "block";

    selectBeans(select); //豆ごとにスコア付け&並び替え関数を実行  
    suggestBeans(coffeeBeansList);//１～３位のおすすめお豆関数実行
    no1BeansChart(coffeeBeansList)//１位のお豆のレーダーチャート作成関数実行
    console.log(coffeeBeansList);


// 豆ごとにスコア付け　////////////////////////////////////////////////////////////////
  
  function selectBeans( select ) {
    for ( const beans of coffeeBeansList ) {
      let score = 0;
      console.log(beans);
      if ( Math.abs(select.bitterness - beans.bitterness) <= 1 ){
        score++;   
      }
      if ( Math.abs(select.acidity - beans.acidity) <= 1 ){
        score++;
      }
      if ( Math.abs(select.sweets - beans.sweets) <= 1 ){
        score++;
      }
      if ( Math.abs(select.richBody - beans.richBody) <= 1 ){
        score++;
      }
      if ( Math.abs(select.flavor - beans.flavor) <= 1 ){
        score++;
      }
      if ( select.highFrequently === beans.highFrequently ){
        score++;
      }
    beans.score = score
    }
    
    coffeeBeansList.sort((a,b) => b.score -a.score);

  }
  


// １～３位のお豆紹介////////////////////////////////////////////////////

function suggestBeans(arrayOfObject) {
    document.getElementById("nameNo1").innerText = arrayOfObject[0].beansName;
    document.getElementById("aboutNo1").innerText = arrayOfObject[0].about;
    document.getElementById("priceNo1").innerText = arrayOfObject[0].yen;
    document.getElementById("imgNo1").src = arrayOfObject[0].img;
    document.getElementById("urlNo1").href = arrayOfObject[0].url;

    document.getElementById("nameNo2").innerText = arrayOfObject[1].beansName;
    document.getElementById("aboutNo2").innerText = arrayOfObject[1].about;
    document.getElementById("priceNo2").innerText = arrayOfObject[1].yen;
    document.getElementById("imgNo2").src = arrayOfObject[1].img;
    document.getElementById("urlNo2").href = arrayOfObject[1].url;

    document.getElementById("nameNo3").innerText = arrayOfObject[2].beansName;
    document.getElementById("aboutNo3").innerText = arrayOfObject[2].about;
    document.getElementById("priceNo3").innerText = arrayOfObject[2].yen;
    document.getElementById("imgNo3").src = arrayOfObject[2].img;
    document.getElementById("urlNo3").href = arrayOfObject[2].url;
}


// １位のお豆のレーダーチャート作成////////////////////////////////////////////////////
function no1BeansChart(arrayOfObject){
let ctx = $('#chart');
let mychart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            '苦味',
            '酸味',
            '甘味',
            'コク',
            '香り'
        ],
        datasets: [{
            label: 'あなたの好み',
            data: [
             select.bitterness,
             select.acidity,
             select.sweets,
             select.richBody,
             select.flavor
            ],
            backgroundColor: '#2222',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            // pointBackgroundColor: 'rgb(46,106,177)',
        },{
            label: 'オススメ 1位 のお豆',
            data: [
                arrayOfObject[0].bitterness,
                arrayOfObject[0].acidity,
                arrayOfObject[0].sweets,
                arrayOfObject[0].richBody,
                arrayOfObject[0].flavor
            ],
            backgroundColor: '#ad722f',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 1,
            // pointBackgroundColor: 'rgb(46,106,177)',
        }]
    },
    options: {
        title: {
            display: false,
            text: 'オススメお豆',
        },
        scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 5,
                stepSize: 1,
                callback: function(value, index, values){
                    return  value;
                }
            },
        }
    }
});

}
}