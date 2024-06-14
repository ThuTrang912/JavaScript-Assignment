window.addEventListener('load', function () {
  var searchButton = document.getElementById('btn_search');
  searchButton.addEventListener('click', function () {
    var keyword = document.getElementById('keyword').value;
    var count = document.querySelector('input[name="count"]:checked').value;

    // var apiUrl =
    //   'http://localhost/js_%e8%aa%b2%e9%a1%8c%e7%94%a8/html/kadai10_api/gourmet.php';
    var apiUrl =
      'https://click.ecc.ac.jp/ecc/sakakura/javascript1/it/kadai10_api/gourmet/v1';
    apiUrl += '?keyword=' + encodeURIComponent(keyword);
    apiUrl += '&count=' + encodeURIComponent(count);

    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function (data) {
        updatePage(data.results.shop);
      })
      .catch(function (error) {
        console.error('Fetch request failed:', error);
      });
  });
});

function updatePage(shopData) {
  var searchResult = document.getElementById('search_result');
  searchResult.innerHTML = '';

  shopData.forEach(function (shop) {
    var shopElement = createShopElement(shop);
    searchResult.appendChild(shopElement);
  });
}

function createShopElement(shop) {
  var shopElement = document.createElement('div');
  shopElement.classList.add('shop', 'flex', 'flex-col', 'sm:flex-row', 'gap-5', 'bg-neutral-50', 'p-5', 'mx-5', 'mb-10', 'border', 'border-gray-200', 'border-solid');

  var figure = document.createElement('figure');
  figure.classList.add('bg-white', 'p-2', 'border', 'border-neutral-200', 'border-solid');

  var imgLink = document.createElement('a');
  imgLink.href = '#'; // Thay thế '#' bằng link thực của hình ảnh từ JSON nếu có
  figure.appendChild(imgLink);

  var img = document.createElement('img');
  img.src = shop.photo.mobile.l;
  img.classList.add('object-cover', 'w-full', 'h-full');
  imgLink.appendChild(img); // Đặt thẻ img vào trong thẻ a

  var content = document.createElement('div');
  content.classList.add('grow');

  var genre = document.createElement('p');
  genre.classList.add('text-sm', 'sm:text-base');
  genre.textContent = shop.genre.name + ' | ' + shop.genre.catch;
  content.appendChild(genre);

  var description = document.createElement('p');
  description.classList.add('text-sm', 'sm:text-base', 'my-2');
  description.textContent = shop.catch;
  content.appendChild(description);

  var shopName = document.createElement('h4');
  shopName.classList.add('text-lg', 'sm:text-2xl', 'my-3');
  var link = document.createElement('a');
  link.href = shop.urls.pc;
  link.textContent = shop.name;
  shopName.appendChild(link);
  content.appendChild(shopName);

  // Tạo phần tử cho địa chỉ
var address = document.createElement('p');
address.classList.add('text-sm', 'sm:text-base', 'mb-5');
address.textContent = shop.address;
content.appendChild(address);

// Tạo phần tử cho các tính năng
var features = document.createElement('div');
features.classList.add('mb-5');

// Kiểm tra và tạo phần tử cho "食べ放題あり"
if (shop.free_food === 'あり') {
  var eatAllYouCanInfo = document.createElement('p');
  eatAllYouCanInfo.classList.add('text-base', 'text-pink-400');
  eatAllYouCanInfo.textContent = '食べ放題' + shop.free_food;
  features.appendChild(eatAllYouCanInfo);

  // // Thêm nội dung chi tiết từ trường "free_food" trong JSON
  // var eatDetails = document.createElement('p');
  // eatDetails.classList.add('text-sm', 'text-gray-600');
  // eatDetails.textContent = shop.free_food.slice(3); // Bỏ đi "あり ：" ở đầu chuỗi
  // features.appendChild(eatDetails);
} else {
  // Hiển thị "なし" nếu không có thông tin "食べ放題あり"
  var eatNotAvailable = document.createElement('p');
  eatNotAvailable.classList.add('text-base', 'text-pink-400');
  eatNotAvailable.textContent = '食べ放題なし';
  features.appendChild(eatNotAvailable);
}

// Kiểm tra và tạo phần tử cho "飲み放題あり"
if (shop.free_drink === 'あり') {
  var drinkAllYouCanInfo = document.createElement('p');
  drinkAllYouCanInfo.classList.add('text-base', 'text-pink-400');
  drinkAllYouCanInfo.textContent = '飲み放題' + shop.free_drink;
  features.appendChild(drinkAllYouCanInfo);

  // // Thêm nội dung chi tiết từ trường "free_drink" trong JSON
  // var drinkDetails = document.createElement('p');
  // drinkDetails.classList.add('text-sm', 'text-gray-600');
  // drinkDetails.textContent = shop.free_drink.slice(3); // Bỏ đi "あり ：" ở đầu chuỗi
  // features.appendChild(drinkDetails);
} else {
  // Hiển thị "なし" nếu không có thông tin "飲み放題あり"
  var drinkNotAvailable = document.createElement('p');
  drinkNotAvailable.classList.add('text-base', 'text-pink-400');
  drinkNotAvailable.textContent = '飲み放題なし';
  features.appendChild(drinkNotAvailable);
}




// Thêm các phần tử tính năng vào phần nội dung
content.appendChild(features);

// Tạo phần tử cho link coupon
var couponLink = document.createElement('a');
couponLink.href = shop.coupon_urls.pc;
couponLink.textContent = 'このお店のお得なクーポン';
couponLink.classList.add('text-base', 'text-white', 'bg-yellow-300', 'px-3', 'py-2', 'border-2', 'border-solid', 'border-yellow-400', 'rounded-md');
content.appendChild(couponLink);

// Thêm figure và nội dung vào phần tử cửa hàng
shopElement.appendChild(figure);
shopElement.appendChild(content);


  return shopElement;
}
