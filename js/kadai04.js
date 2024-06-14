{
    const wrapper = document.querySelector( '#wrapper' );
    const wrapperBlanks = wrapper.querySelectorAll( '.blank' );

    wrapperBlanks.forEach((value) => {
        value.addEventListener('click',(e) => {
            e.preventDefault();
            window.open(value.href, 'kadai04');
            console.log(this);
        })
    });
    

}