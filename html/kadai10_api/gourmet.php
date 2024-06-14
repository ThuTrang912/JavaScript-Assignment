<?php
//
// gourmet.php
// グルメサーチAPI
//

require_once __DIR__ . "/config.php";

// ホットペッパーAPI グルメサーチ検索クエリ
$searchItems = [
    "key"    => API_KEY,
    "format" => API_RESPONSE_FORMAT,
];

foreach ($_GET as $key => $param) {
    $searchItems[$key] = $param;
}

// 検索クエリの項目を作成
$searchParams = [];
foreach ($searchItems as $key => $item) {
    $searchParams[] = "{$key}={$item}";
}

// 検索クエリのGETパラメーターを作成
$searchParamString = implode("&", $searchParams);

// グルメサーチAPIのURLを作成
$searchURL = API_GOURMET_URL . "?{$searchParamString}";

// Gọi API và lấy dữ liệu JSON từ nguồn ngoài
$data = file_get_contents($searchURL);

if ($data !== false) {
    // Thiết lập các header để cho phép truy cập từ xa và định dạng JSON
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    // Giải mã dữ liệu JSON và in ra với định dạng đẹp hơn và không escape các ký tự Unicode
    echo json_encode(json_decode($data, true), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(array('error' => 'Failed to fetch data from the external API.'));
}
