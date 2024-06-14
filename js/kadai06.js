{

  // element
  const doc = document;
  const todoList = doc.querySelector('#todo_list');
  const listText = doc.querySelector('#list_text');
  const addButton  = doc.querySelector('#btn_add');

  // setting
  const listElementTagName = 'tr';
  const itemElementTagName = 'td';
  const buttonElementTagName = 'button';
  const listItemTemplate = doc.createElement(listElementTagName);
  console.log(listItemTemplate);

  // #btn_add click event
  // リスト項目の追加
  addButton.addEventListener('click', (e)=>{
    let text = listText.value;
    if( text ) {
      // listItemTemplateをappendすると１回しか追加できない。
      // const listItem = doc.createElement(listElementTagName);
      const listItem = listItemTemplate.cloneNode(true);
      console.log(listItem);
      const listItemText = doc.createElement(itemElementTagName);
      listItemText.setAttribute("class","comment");
      listItemText.innerText = text;

      const listItemButton = doc.createElement(itemElementTagName);
      listItemButton.setAttribute("class","control");
      const removeButton = doc.createElement(buttonElementTagName);
      removeButton.setAttribute("type","button");
      removeButton.setAttribute("class","remove");
      removeButton.innerHTML="削除";
      listItemButton.append(removeButton);

      listItem.append(listItemText);
      listItem.append(listItemButton);
      todoList.append(listItem);
    }
      //listItemTemplate.insertAdjacentElement("beforeend", `
      //   <td class="comment">${listText.value}</td>
      //   <td class="control"><button class="remove">削除</button></td>
      //   `
      // );
      // todoList.append(listItemTemplate);
    
  });


 document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON' && target.classList.contains('remove')) {
    const listItem = target.closest('tr');
    if (listItem) {
      listItem.remove();
    }
  }
});
}

