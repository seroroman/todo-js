import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // button(完了)タグ作成

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグdivを未完了リストから削除
    deleteFromImcompleteList(completeButton.parentNode);

    // 完了リストに追加する処理
    const addTarget = completeButton.parentNode;

    // TOTO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // div タグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

// 未完了リストから指定の要素を削除

const deleteFromImcompleteList = (target) => {
  // 押された削除ボタンの親タグdivを未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
