const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // li生成
  const li = document.createElement('li');

  // div生成
  const div = document.createElement('div');
  div.className = 'flex list-disc items-center';

  // p生成
  const p = document.createElement('p');
  p.className = 'm-1.5';
  p.innerText = inputText;

  // buttonタグ生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.className =
    'bg-gray-100 py-1 px-4 mx-1 rounded-xl hover:bg-gray-200 hover:cursor-pointer';
  completeButton.addEventListener('click', () => {
    // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest('li');
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタンを生成してdivタグ配下に設定
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.className =
      'bg-gray-100 py-1 px-4 mx-1 rounded-xl hover:bg-gray-200 hover:cursor-pointer';
    moveTarget.firstElementChild.appendChild(backButton);

    // 完了リストに移動
    document.getElementById('complete-list').appendChild(moveTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '完了';
  deleteButton.className =
    'bg-gray-100 py-1 px-4 mx-1 rounded-xl hover:bg-gray-200 hover:cursor-pointer';
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest('li');
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById('incomplete-list').append(li);
};

document.getElementById('add-button').addEventListener('click', onClickAdd);
