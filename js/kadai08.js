// element
const doc = document;
const todoList = doc.querySelector('#todo_list');
const listText = doc.querySelector('#list_text');
const addButton = doc.querySelector('#btn_add');
const clearButton = doc.querySelector('#btn_clear');

// setting
const listElementTagName = 'tr';
const itemElementTagName = 'td';
const buttonElementTagName = 'button';
const listItemTemplate = doc.createElement(listElementTagName);

// Load data from local storage and restore ToDo list
const storedData = localStorage.getItem('Web2_kadai08');
if (storedData) {
  todoList.innerHTML = JSON.parse(storedData);
}

// #btn_add click event
// リスト項目の追加
addButton.addEventListener('click', (e) => {
  let text = listText.value;
  if (text) {
    const listItem = listItemTemplate.cloneNode(false);
    listItem.insertAdjacentHTML(
      'beforeend',
      `
      <td class="comment">${text}</td>
      <td class="control"><button class="remove">削除</button></td>
    `
    );
    todoList.appendChild(listItem);
    listText.value = '';

    // Update local storage with the latest ToDo list
    localStorage.setItem('Web2_kadai08', JSON.stringify(todoList.innerHTML));
  }
});

// #btn_clear click event
// リスト項目のクリアとローカルストレージの削除
clearButton.addEventListener('click', (e) => {
  todoList.innerHTML = '';
  localStorage.removeItem('Web2_kadai08');
  
});

doc.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON' && target.classList.contains('remove')) {
    const listItem = target.closest('tr');
    if (listItem) {
      listItem.remove();

      // Update local storage with the latest ToDo list
      localStorage.setItem('Web2_kadai08', JSON.stringify(todoList.innerHTML));
    }
  }
});

