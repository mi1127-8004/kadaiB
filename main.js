function setUserName() {
  let myName = prompt('名前を入力してください');
  //promptは組み込みの関数。promptウインドウを表示してユーザ入力をさせる
  
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを特別な場所（変数ではない、ファイルに相当するもの）に保存する
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  //以前に特別な場所に保存していた名前があれば、それを使う
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'さようなら, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
