{
    // RESAS API関連
    const APIKey      = "FP93jNInkB3RkUl94NzBYKMQoZLD3eORqDSZqd6s";
    const APIEndpoint = "https://opendata.resas-portal.go.jp";
    const prefAPI     = "api/v1/prefectures"; // 都道府県一覧API
    const citiesAPI   = "api/v1/cities";      // 市区町村一覧API
  
    // Element
    const selectPref  = document.querySelector( "#pref" );
  
    /**
     * 都道府県セレクトメニューの作成
     * 都道府県一覧API
     */
    fetch(
      `${ APIEndpoint }/${ prefAPI }`, // 非同期通信をおこなうURL
        {
            // リクエストヘッダーの設定
            headers: {
                'X-API-KEY': APIKey, // RESAS APIはheader情報としてAPI KEYを送信する必要がある
            }
        }
    )
    .then( ( response ) => { return response.json() } )
    .then(
        ( data )=>{
            console.log( data );
            const prefs = data.result;
            prefs.forEach(( pref ) => {
                console.log( pref );

                // elementの作成
                const item = document.createElement( "option" );
                // 作成したelementのプロパティ設定（value属性と表示）
                item.value     = pref.prefCode;
                item.innerText = pref.prefName;
                // selectに作成したelementを追加
                selectPref.append( item );
            }); // endforeach
        }
    );
}