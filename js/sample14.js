fetch('https://click.ecc.ac.jp/ecc/sakakura/ajax/selector-list.php')
.then((response) => {return response.json()})
.then((data) => {
    console.log(data);
    document.querySelector(".displayData").insertAdjacentHTML("beforeend",
        `<div>${data.categories[3]}</div>`);
});

const test = document.querySelector(".displayData");
console.log(test);
