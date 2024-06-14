{
    const todoList = document.querySelector( '#todo_list' );
    const todoListItems = todoList.querySelectorAll( '.item' );
    const todoListItems2 = todoList.getElementsByClassName('item');
    console.log( todoListItems );
    console.log( todoListItems2 );
    todoListItems.forEach((value, key) => {
        console.log( `${ key } : ${ value }` );
        value.style.backgroundColor = 'red';
    });

    const object = {a: 1, b: 2,c: 3};
    for(const property in object){
        console.log(property + ":" + object[property]);
    }

    const link = document.querySelector('#link');
    link.addEventListener('click',(e) => {
        e.preventDefault();
        window.open(e.target.href, '_blank');
        console.log(e);
    })
}