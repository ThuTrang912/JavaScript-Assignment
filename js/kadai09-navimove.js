{
  const naviWrap     = document.querySelector( '#navi-wrap' );
  const categoryNavi = document.querySelector( '#category-navi' );
  const posY         = naviWrap.offsetTop;
  window.onscroll = ( e ) => {
    let scroollTop = document.documentElement.scrollTop;
    categoryNavi.style.top = ( scroollTop >= posY ) ? `${ scroollTop }px` : 0;
  }
}