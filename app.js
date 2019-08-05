console.log(window.localStorage);

// アイコン
let removeIcon = '<i class="fas fa-trash"></i>'
let morningIcon = '<i class="fas fa-sun"></i>'

// データの箱指定
let data = { 
    // img: [],
    memo:[],
    date:[],
    time:[]
}

// ストレージ設定
if (localStorage.getItem('dataList')){

  data = JSON.parse(localStorage.getItem('dataList'));

}

// console.log(data);
// クリックイベント
// document.addEventListener(
//   'DOMContentLoaded',
//   function(){
  document.getElementById('record').addEventListener('click',

   function(){
    // data.img.push(document.getElementById('input-img').src);
    data.memo.push(document.getElementById('memo').value);
    data.date.push(document.getElementById('date').value);
    createDOM();
    radioInput();
    dataUpdated()
    memo.value="";
    // imgFileInput();
  }, false);
  // });

  // 出力
function createDOM(){
  // let image = document.createElement('img');
  let card = document.createElement('div');
  let memoText = document.createElement('div');
  let dateText = document.createElement('p');
  let button = document.createElement('button');
  document.getElementById('list').appendChild(card).classList.add('meal-list');
  card.appendChild(memoText).classList.add('memo-content');
  memoText.textContent = memo.value;
  memoText.appendChild(dateText).classList.add('date-text');
  dateText.textContent = date.value;
  card.appendChild(button);
  button.innerHTML = removeIcon;
  button.addEventListener('click',remove);
}
// ラジオボタン
function radioInput(){
  let mealList = document.getElementsByClassName
  ('meal-list');
  let radioName = document.getElementsByName('radio');
    if ( radioName[0].checked ){
      data.time.push(radioName[0]);
      mealList[0].style.backgroundColor = 'yellow';
    }else if(radioName[1].checked){
      data.time.push(radioName[1]);
      mealList[0].style.backgroundColor = 'orange';
    }else if(radioName[2].checked){
      data.time.push(radioName[2]);
      mealList[0].style.backgroundColor = 'purple';
    }else if(radioName[3].checked){
      data.time.push(radioName[3]);
      mealList[0].style.backgroundColor = 'pink';
      
    }else{
      alert('チェックボックスを選択してください');
    }
    return;
    // console.log(radioName[0]);
  }
function remove(){
  this.parentNode.remove();
  data.splice(data.indexOf(this.parentNode.textContent,1));
  dataUpdated()
}

// 画像サムネ

// document.getElementById('input-img')
// .addEventListener('change',function(){
//     let file = document.getElementById('input-img').files;
//     // let result = document.getElementById('img-file');
//     let reader = new FileReader();
//     reader.addEventListener('load', function(e){
//       document.result.src = reader.result;
//     }, true);
//     reader.readAsDataURL(file[0]);
//   }, true);

// console.log(data);
function dataUpdated(){
  // ローカルストレージへ保存の関数
  localStorage.setItem('dataList', JSON.stringify(data));

}
// localStorage.clear()