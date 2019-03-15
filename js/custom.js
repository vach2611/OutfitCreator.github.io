
// Start of functions to Control Document Scroll
var keys = [32,33,34,35,36,37,38,39,40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
  disable_scroll_mobile();
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
  	enable_scroll_mobile();
}

// My improvement

// MOBILE
function disable_scroll_mobile(){
  document.addEventListener('touchmove',preventDefault, false);
}
function enable_scroll_mobile(){
  document.removeEventListener('touchmove',preventDefault, false);
}


// End Of functions to control the scroll 

// disable the scroll for preloader 
disable_scroll();


$(function() {

	// show the more filters    //input range , colors
	$('.moreFilters').click(function(){
		$(".more-filters-block").slideToggle();
	});




	// removing all elements in creator board
	$('.resetBoard').click(function(){
		$('.creator-head').css('background-image','url(img/creator-bg.jpg)');
		// $('#theDiv').find('*').not('.className').remove();
		$('.creatorManipulationProd').remove();
	});



	// do not open the modal of deleting products in board, when not any product on board 
	$("div[data-target='#myModal3']").click(function(){
			if ($('.creatorManipulationProd').length == 0 || $('.creatorManipulationProd') == undefined){
				$(this).attr('data-target','');
			}else{
				$(this).attr('data-target','#myModal3');
			}
	});




	// products Constructor
	function Products(name,price,prev_price,color,image,saled,category_name,gender='null') {
			this.name=name;
			this.price=price;
			this.prev_price=prev_price;
			this.color=color;
			this.image=image;
			this.saled=saled;
			this.category_name=category_name;
			this.gender=gender;
	}


	// Start of my product list
	var bag1 = new Products('Bag',3800,4500,'pink','img/bags/1.jpg',4500,'bags'),
		bag2 = new Products('Black Bag',2500,4500,'black','img/bags/2.jpg',5140,'bags'),
		bag3 = new Products('Brown Bag',250,450,'brown','img/bags/3.jpg',565,'bags'),
		bag4 = new Products('Black Bag',1850,4540,'black','img/bags/4.jpg',8745,'bags'),
		bag5 = new Products('Red Bag',1250,4455,'red','img/bags/5.jpg',8645,'bags'),
		bag6 = new Products('Black Bag',540,855,'black','img/bags/6.jpg',15,'bags'),
		bag7 = new Products('Yellow Bag',740,855,'yellow','img/bags/7.jpg',145,'bags'),
		bag8 = new Products('Black Bag',850,855,'black','img/bags/8.jpg',1045,'bags'),
		bag9 = new Products('Khaki Bag',1150,8155,'darkgreen','img/bags/9.jpg',1145,'bags'),
		bag10 = new Products('Black Bag',1250,8155,'black','img/bags/10.jpg',8145,'bags'),
		bag11 = new Products('Orange Bag',11250,18155,'orange','img/bags/11.jpg',9111,'bags'),
		bag12 = new Products('Black Bag',1440,1815,'black','img/bags/12.jpg',9151,'bags'),
		bag13 = new Products('Gray Bag',4440,5815,'gray','img/bags/13.jpg',9155,'bags'),

		glas1 = new Products('Glass',2500,4500,'black','img/glasses/1.jpg',5540,'glasses'),
		glas2 = new Products('Glass',1780,4500,'black','img/glasses/2.jpg',540,'glasses'),
		glas3 = new Products('Glass',2780,4500,'black','img/glasses/3.jpg',1540,'glasses'),
		glas4 = new Products('Glass',570,1500,'black','img/glasses/4.jpg',9540,'glasses'),
		glas5 = new Products('Glass',1570,2500,'black','img/glasses/5.jpg',9841,'glasses'),
		glas6 = new Products('Red_Glass',2570,3500,'red','img/glasses/6.jpg',19840,'glasses'),
		glas7 = new Products('Red Glass',21570,35100,'pink','img/glasses/7.jpg',1440,'glasses'),
		glas8 = new Products('Red Glass',5570,5800,'pink','img/glasses/8.jpg',1640,'glasses'),
		glas9 = new Products('Sup Glass',15570,15800,'techno','img/glasses/9.png',11640,'glasses'),
		glas10 = new Products('Glass',1550,1580,'blue','img/glasses/10.png',1160,'glasses'),
		glas11 = new Products('Glass',1556,1620,'blue','img/glasses/11.jpg',1176,'glasses'),
		glas12 = new Products('Glass',1573,1620,'black','img/glasses/12.jpg',1215,'glasses'),

	    hat1 = new Products('Hat',1500,2500,'black','img/hats/1.jpg',6544,'hats'),
		hat2 = new Products('Hat',1519,2508,'black','img/hats/2.jpg',6560,'hats'),
		hat3 = new Products('Hat',1519,2470,'brown','img/hats/3.jpg',6573,'hats'),
		hat4 = new Products('Hat',1519,2470,'gray','img/hats/4.jpg',6581,'hats'),
		hat5 = new Products('Hat',1590,2486,'gray','img/hats/5.jpg',6601,'hats'),
		hat6 = new Products('Hat',1598,2489,'gray','img/hats/6.jpg',6639,'hats'),
		hat7 = new Products('Hat',1617,2489,'red','img/hats/7.png',6648,'hats'),
		hat8 = new Products('Hat',1623,2489,'gray','img/hats/8.jpg',6660,'hats'),
		hat9 = new Products('Hat',1638,2489,'black','img/hats/9.jpg',6677,'hats'),
		hat10 = new Products('Hat',1651,2489,'black','img/hats/10.jpg',6686,'hats'),
		hat11 = new Products('Hat',1665,2489,'grey','img/hats/11.jpg',6707,'hats'),
		hat12 = new Products('Hat',1696,2489,'grey','img/hats/12.jpg',6731,'hats'),
		hat13 = new Products('Hat',1720,2489,'red','img/hats/13.jpg',6758,'hats'),
		hat14 = new Products('Hat',1727,2489,'red','img/hats/14.jpg',6768,'hats'),
		hat15 = new Products('Hat',1775,2489,'white','img/hats/15.jpg',6794,'hats'),

		coat1 = new Products('Coat',1584,1845,'black','img/coats/for-man/1.jpg',651,'coats','male'),
		coat2 = new Products('Coat',1607,1884,'brown','img/coats/for-man/2.jpg',685,'coats','male'),
		coat3 = new Products('Coat',1611,1897,'black','img/coats/for-man/3.jpg',631,'coats','male'),
		coat4 = new Products('Coat',1611,1897,'gray','img/coats/for-man/4.jpg',591,'coats','male'),
		coat5 = new Products('Coat',1644,1897,'black','img/coats/for-man/5.jpg',591,'coats','male'),
		coat6 = new Products('Coat',1708,1897,'gray','img/coats/for-man/6.jpg',614,'coats','male'),
		coat7 = new Products('Coat',1728,1897,'blue','img/coats/for-man/7.jpg',638,'coats','male'),
		coat8 = new Products('Coat',1756,1897,'red','img/coats/for-man/8.jpg',660,'coats','male'),
		coat9 = new Products('Coat',1787,1897,'red','img/coats/for-man/9.jpg',693,'coats','male'),
		coat10 = new Products('Coat',1795,1916,'white','img/coats/for-man/10.jpg',709,'coats','male'),
		coat11 = new Products('Coat',1805,1932,'white','img/coats/for-man/11.jpg',718,'coats','male'),
		coat12 = new Products('Coat',1817,1939,'black','img/coats/for-man/12.jpg',730,'coats','male'),
		coat13 = new Products('Coat',1836,1948,'blue','img/coats/for-man/13.jpg',748,'coats','male'),
		coat14 = new Products('Coat',1850,1962,'red','img/coats/for-man/14.jpg',776,'coats','male'),
		coat15 = new Products('Coat',1858,1962,'red','img/coats/for-man/15.jpg',776,'coats','male'),
		
		coat16 = new Products('Coat',1865,1972,'gray','img/coats/for-women/1.jpg',776,'coats','female'),
		coat17 = new Products('Coat',1875,1985,'red','img/coats/for-women/2.jpg',797,'coats','female'),
		coat18 = new Products('Coat',1880,1998,'grey','img/coats/for-women/3.jpg',808,'coats','female'),
		coat19 = new Products('Coat',1896,2008,'red','img/coats/for-women/4.jpg',824,'coats','female'),
		coat20 = new Products('Coat',1904,2023,'black','img/coats/for-women/5.jpg',837,'coats','female'),
		coat21 = new Products('Coat',1919,2029,'red','img/coats/for-women/6.jpg',844,'coats','female'),
		coat22 = new Products('Coat',1926,2033,'red','img/coats/for-women/7.jpg',854,'coats','female'),
		coat23 = new Products('Coat',1934,2039,'red','img/coats/for-women/8.jpg',862,'coats','female'),
		coat24 = new Products('Coat',1945,2048,'white','img/coats/for-women/9.jpg',876,'coats','female'),
		coat25 = new Products('Coat',1953,2054,'white','img/coats/for-women/10.jpg',876,'coats','female'),
		coat26 = new Products('Coat',1961,2064,'white','img/coats/for-women/11.jpg',876,'coats','female'),
		coat27 = new Products('Coat',1974,2079,'white','img/coats/for-women/12.jpg',882,'coats','female'),
		coat28 = new Products('Coat',1998,2086,'black','img/coats/for-women/13.jpg',899,'coats','female'),
		coat29 = new Products('Coat',2024,2114,'black','img/coats/for-women/14.jpg',903,'coats','female'),
		coat30 = new Products('Coat',2001,2109,'black','img/coats/for-women/15.jpg',907,'coats','female'),
		coat31 = new Products('Coat',2008,2101,'black','img/coats/for-women/16.jpg',912,'coats','female'),
		coat32 = new Products('Coat',2031,2112,'black','img/coats/for-women/17.jpg',932,'coats','female'),

		shirt1 = new Products('Shirt',2031,2150,'white','img/shirts/for-men/1.jpg',940,'shirts','male'),
		shirt2 = new Products('Shirt',2031,2150,'pink','img/shirts/for-men/2.jpg',9411,'shirts','male'),
		shirt3 = new Products('Shirt',2031,2150,'blue','img/shirts/for-men/3.jpg',9412,'shirts','male'),
		shirt4 = new Products('Shirt',2031,2150,'gray','img/shirts/for-men/4.jpg',9413,'shirts','male'),
		shirt5 = new Products('Shirt',2031,2150,'red','img/shirts/for-men/5.jpg',9450,'shirts','male'),
		shirt6 = new Products('Shirt',2031,2150,'blue','img/shirts/for-men/6.jpg',9641,'shirts','male'),
		shirt7 = new Products('Shirt',2031,2150,'brown','img/shirts/for-men/7.jpg',9642,'shirts','male'),
		shirt8 = new Products('Shirt',2031,2150,'black','img/shirts/for-men/8.jpg',9643,'shirts','male'),
		shirt9 = new Products('Shirt',2031,2150,'red','img/shirts/for-men/9.jpeg',9410,'shirts','male'),
		shirt10 = new Products('Shirt',2031,2150,'blue','img/shirts/for-men/9.jpg',9139,'shirts','male'),
		shirt11 = new Products('Shirt',2031,2150,'red','img/shirts/for-men/10.jpg',9403,'shirts','male'),
		shirt12 = new Products('Shirt',2031,2150,'blue','img/shirts/for-men/11.jpeg',9430,'shirts','male'),
		shirt13 = new Products('Shirt',2031,2150,'brown','img/shirts/for-men/12.jpg',9140,'shirts','male'),
		shirt14 = new Products('Shirt',2031,2150,'black','img/shirts/for-men/13.jpg',9840,'shirts','male'),
		shirt15 = new Products('Shirt',2031,2150,'black','img/shirts/for-men/14.jpg',9460,'shirts','male'),
		shirt16 = new Products('Shirt',2031,2150,'gray','img/shirts/for-men/15.jpg',2657,'shirts','male'),
		shirt17 = new Products('Shirt',2031,2150,'red','img/shirts/for-men/16.jpg',2657,'shirts','male'),

		shirt18 = new Products('Shirt',2031,2150,'red','img/shirts/for-girl/1.jpg',2657,'shirts','female'),
		shirt19 = new Products('Shirt',2031,2150,'red','img/shirts/for-girl/2.jpg',2657,'shirts','female'),
		shirt20 = new Products('Shirt',2031,2150,'white','img/shirts/for-girl/3.jpg',2657,'shirts','female'),
		shirt21 = new Products('Shirt',2031,2150,'brown','img/shirts/for-girl/4.jpg',2657,'shirts','female'),
		shirt22 = new Products('Shirt',2031,2150,'red','img/shirts/for-girl/5.jpg',2657,'shirts','female'),
		shirt23 = new Products('Shirt',2031,2150,'blue','img/shirts/for-girl/6.jpg',2657,'shirts','female'),
		shirt24 = new Products('Shirt',2031,2150,'white','img/shirts/for-girl/7.jpg',2657,'shirts','female'),
		shirt25 = new Products('Shirt',2031,2150,'red','img/shirts/for-girl/8.jpg',2657,'shirts','female'),
		shirt26 = new Products('Shirt',2031,2150,'red','img/shirts/for-girl/9.jpg',2657,'shirts','female'),
		shirt27 = new Products('Shirt',2031,2150,'white','img/shirts/for-girl/10.jpg',2657,'shirts','female'),
		shirt28 = new Products('Shirt',2031,2150,'black','img/shirts/for-girl/11.jpg',2657,'shirts','female'),
		shirt29 = new Products('Shirt',2031,2150,'black','img/shirts/for-girl/12.jpg',2657,'shirts','female'),
		shirt30 = new Products('Shirt',2031,2150,'blue','img/shirts/for-girl/13.jpg',2657,'shirts','female'),
		shirt31 = new Products('Shirt',2031,2150,'blue','img/shirts/for-girl/14.jpg',2657,'shirts','female'),
		shirt32 = new Products('Shirt',2031,2150,'pink','img/shirts/for-girl/15.jpg',2657,'shirts','female'),

		shoe1 = new Products('Shoe',2031,2150,'black','img/shoes/for_men/1.jpg',2657,'shoes','male'),
		shoe2 = new Products('Shoe',2031,2150,'black','img/shoes/for_men/2.jpg',2657,'shoes','male'),
		shoe3 = new Products('Shoe',2031,2150,'gray','img/shoes/for_men/3.jpg',2657,'shoes','male'),
		shoe4 = new Products('Shoe',2031,2150,'gray','img/shoes/for_men/4.jpg',2657,'shoes','male'),
		shoe5 = new Products('Shoe',2031,2150,'red','img/shoes/for_men/5.jpg',2657,'shoes','male'),
		shoe6 = new Products('Shoe',2031,2150,'gray','img/shoes/for_men/6.jpg',2657,'shoes','male'),
		shoe7 = new Products('Shoe',2031,2150,'gray','img/shoes/for_men/7.jpeg',2657,'shoes','male'),
		shoe8 = new Products('Shoe',2031,2150,'white','img/shoes/for_men/7.jpg',2657,'shoes','male'),
		shoe9 = new Products('Shoe',2031,2150,'blue','img/shoes/for_men/8.jpg',2657,'shoes','male'),
		shoe10 = new Products('Shoe',2031,2150,'brown','img/shoes/for_men/9.jpg',2657,'shoes','male'),
		shoe11 = new Products('Shoe',2031,2150,'blue','img/shoes/for_men/10.jpg',2657,'shoes','male'),
		shoe12 = new Products('Shoe',2031,2150,'brown','img/shoes/for_men/11.jpg',2657,'shoes','male'),
		shoe13 = new Products('Shoe',2031,2150,'black','img/shoes/for_men/12.jpg',2657,'shoes','male'),
		shoe14 = new Products('Shoe',2031,2150,'white','img/shoes/for_men/13.jpg',2657,'shoes','male'),
		shoe15 = new Products('Shoe',2031,2150,'brown','img/shoes/for_men/14.jpg',2657,'shoes','male'),
		shoe16 = new Products('Shoe',2031,2150,'red','img/shoes/for_men/15.jpg',2657,'shoes','male'),
		shoe17 = new Products('Shoe',2031,2150,'red','img/shoes/for_men/16.jpg',2657,'shoes','male'),
		shoe18 = new Products('Shoe',2031,2150,'brown','img/shoes/for_men/17.jpg',2657,'shoes','male'),
		shoe19 = new Products('Shoe',2031,2150,'blue','img/shoes/for_men/18.jpg',2657,'shoes','male'),

		shoe20 = new Products('Shoe',2031,2150,'white','img/shoes/for_girls/1.jpg',2657,'shoes','female'),
		shoe21 = new Products('Shoe',2031,2150,'pink','img/shoes/for_girls/2.jpg',2657,'shoes','female'),
		shoe22 = new Products('Shoe',2031,2150,'black','img/shoes/for_girls/3.jpg',2657,'shoes','female'),
		shoe23 = new Products('Shoe',2031,2150,'white','img/shoes/for_girls/4.jpg',2657,'shoes','female'),
		shoe24 = new Products('Shoe',2031,2150,'pink','img/shoes/for_girls/5.jpg',2657,'shoes','female'),
		shoe25 = new Products('Shoe',2031,2150,'blue','img/shoes/for_girls/6.jpg',2657,'shoes','female'),
		shoe26 = new Products('Shoe',2031,2150,'pink','img/shoes/for_girls/7.jpg',2657,'shoes','female'),
		shoe27 = new Products('Shoe',2031,2150,'white','img/shoes/for_girls/8.jpg',2657,'shoes','female'),
		shoe28 = new Products('Shoe',2031,2150,'gray','img/shoes/for_girls/9.jpg',2657,'shoes','female'),
		shoe29 = new Products('Shoe',2031,2150,'gray','img/shoes/for_girls/10.jpg',2657,'shoes','female'),
		shoe30 = new Products('Shoe',2031,2150,'black','img/shoes/for_girls/11.jpg',2657,'shoes','female'),
		shoe31 = new Products('Shoe',2031,2150,'gray','img/shoes/for_girls/12.jpg',2657,'shoes','female'),
		shoe32 = new Products('Shoe',2031,2150,'red','img/shoes/for_girls/13.jpg',2657,'shoes','female'),
		shoe33 = new Products('Shoe',2031,2150,'black','img/shoes/for_girls/14.jpg',2657,'shoes','female'),
		shoe34 = new Products('Shoe',2031,2150,'pink','img/shoes/for_girls/15.jpg',2657,'shoes','female'),
		shoe35 = new Products('Shoe',2031,2150,'pink','img/shoes/for_girls/15.jpg',2657,'shoes','female'),
		shoe36 = new Products('Shoe',2031,2150,'red','img/shoes/for_girls/16.jpg',2657,'shoes','female'),

		short1 = new Products('Short',2031,2150,'gray','img/shorts/for-men/1.png',2657,'shorts','male'),
		short2 = new Products('Short',2031,2150,'gray','img/shorts/for-men/2.png',2657,'shorts','male'),
		short3 = new Products('Short',2031,2150,'black','img/shorts/for-men/3.jpg',2657,'shorts','male'),
		short4 = new Products('Short',2031,2150,'black','img/shorts/for-men/4.jpg',2657,'shorts','male'),
		short5 = new Products('Short',2031,2150,'red','img/shorts/for-men/5.jpg',2657,'shorts','male'),
		short6 = new Products('Short',2031,2150,'gray','img/shorts/for-men/6.png',2657,'shorts','male'),
		short7 = new Products('Short',2031,2150,'gray','img/shorts/for-men/7.jpg',2657,'shorts','male'),
		short8 = new Products('Short',2031,2150,'black','img/shorts/for-men/8.jpg',2657,'shorts','male'),
		short9 = new Products('Short',2031,2150,'white','img/shorts/for-men/9.jpg',2657,'shorts','male'),
		short10 = new Products('Short',2031,2150,'blue','img/shorts/for-men/10.jpg',2657,'shorts','male'),
		short11 = new Products('Short',2031,2150,'white','img/shorts/for-men/11.jpg',2657,'shorts','male'),
		short12 = new Products('Short',2031,2150,'red','img/shorts/for-men/12.jpg',2657,'shorts','male'),
		short13 = new Products('Short',2031,2150,'black','img/shorts/for-men/13.jpg',2657,'shorts','male'),
		short14 = new Products('Short',2031,2150,'white','img/shorts/for-men/14.jpg',2657,'shorts','male'),
		short15 = new Products('Short',2031,2150,'black','img/shorts/for-men/15.jpg',2657,'shorts','male'),
		
		short16 = new Products('Short',2031,2150,'blue','img/shorts/for-girl/0.jpg',2657,'shorts','female'),
		short17 = new Products('Short',2031,2150,'blue','img/shorts/for-girl/1.jpg',2657,'shorts','female'),
		short18 = new Products('Short',2031,2150,'blue','img/shorts/for-girl/2.jpg',2657,'shorts','female'),
		short19 = new Products('Short',2031,2150,'pink','img/shorts/for-girl/3.jpg',2657,'shorts','female'),
		short20 = new Products('Short',2031,2150,'gray','img/shorts/for-girl/4.jpg',2657,'shorts','female'),
		short21 = new Products('Short',2031,2150,'white','img/shorts/for-girl/5.jpg',2657,'shorts','female'),
		short22 = new Products('Short',2031,2150,'black','img/shorts/for-girl/6.jpg',2657,'shorts','female'),
		short23 = new Products('Short',2031,2150,'gray','img/shorts/for-girl/7.jpg',2657,'shorts','female'),
		short24 = new Products('Short',2031,2150,'red','img/shorts/for-girl/8.jpg',2657,'shorts','female'),
		short25 = new Products('Short',2031,2150,'black','img/shorts/for-girl/9.jpg',2657,'shorts','female'),
		short26 = new Products('Short',2031,2150,'pink','img/shorts/for-girl/10.jpg',2657,'shorts','female'),
		short27 = new Products('Short',2031,2150,'red','img/shorts/for-girl/11.jpg',2657,'shorts','female'),
		short28 = new Products('Short',2031,2150,'pink','img/shorts/for-girl/12.jpg',2657,'shorts','female'),
		short29 = new Products('Short',2031,2150,'black','img/shorts/for-girl/13.jpg',2657,'shorts','female'),

		sock1 = new Products('Sock',2031,2150,'gray','img/socks/for-man/1.jpg',2657,'socks','male'),
		sock2 = new Products('Sock',2031,2150,'gray','img/socks/for-man/2.jpg',2657,'socks','male'),
		sock3 = new Products('Sock',2031,2150,'black','img/socks/for-man/3.png',2657,'socks','male'),
		sock4 = new Products('Sock',2031,2150,'black','img/socks/for-man/4.jpg',2657,'socks','male'),
		sock5 = new Products('Sock',2031,2150,'black','img/socks/for-man/5.jpg',2657,'socks','male'),
		sock6 = new Products('Sock',2031,2150,'black','img/socks/for-man/6.jpg',2657,'socks','male'),
		sock7 = new Products('Sock',2031,2150,'black','img/socks/for-man/7.jpg',2657,'socks','male'),
		sock8 = new Products('Sock',2031,2150,'gray','img/socks/for-man/8.jpg',2657,'socks','male'),
		sock9 = new Products('Sock',2031,2150,'gray','img/socks/for-man/9.jpg',2657,'socks','male'),
		sock10 = new Products('Sock',2031,2150,'black','img/socks/for-man/10.jpg',2657,'socks','male'),
		sock11 = new Products('Sock',2031,2150,'blue','img/socks/for-man/11.jpg',2657,'socks','male'),
		sock12 = new Products('Sock',2031,2150,'blue','img/socks/for-man/12.jpeg',2657,'socks','male'),
		sock13 = new Products('Sock',2031,2150,'gray','img/socks/for-man/12.jpeg',2657,'socks','male'),
		sock14 = new Products('Sock',2031,2150,'red','img/socks/for-man/13.jpg',2657,'socks','male'),
		sock15 = new Products('Sock',2031,2150,'red','img/socks/for-man/14.jpg',2657,'socks','male'),

		sock16 = new Products('Sock',2031,2150,'pink','img/socks/for-girl/1.jpg',2657,'socks','female'),
		sock17 = new Products('Sock',2031,2150,'red','img/socks/for-girl/2.png',2657,'socks','female'),
		sock18 = new Products('Sock',2031,2150,'red','img/socks/for-girl/3.jpg',2657,'socks','female'),
		sock19 = new Products('Sock',2031,2150,'black','img/socks/for-girl/4.jpg',2657,'socks','female'),
		sock20 = new Products('Sock',2031,2150,'red','img/socks/for-girl/5.jpg',2657,'socks','female'),
		sock21 = new Products('Sock',2031,2150,'black','img/socks/for-girl/6.jpg',2657,'socks','female'),
		sock22 = new Products('Sock',2031,2150,'pink','img/socks/for-girl/7.jpg',2657,'socks','female'),
		sock23 = new Products('Sock',2031,2150,'white','img/socks/for-girl/8.jpg',2657,'socks','female'),
		sock24 = new Products('Sock',2031,2150,'white','img/socks/for-girl/9.jpg',2657,'socks','female'),
		sock25 = new Products('Sock',2031,2150,'red','img/socks/for-girl/10.jpg',2657,'socks','female'),
		sock26 = new Products('Sock',2031,2150,'red','img/socks/for-girl/11.jpg',2657,'socks','female'),
		sock27 = new Products('Sock',2031,2150,'gray','img/socks/for-girl/12.jpg',2657,'socks','female'),

		trouser1 = new Products('Trouser',2451,5421,'brown','img/trousers/for-men/1.jpg',5156,'trousurs','male'),
		trouser2 = new Products('Trouser',2451,5421,'black','img/trousers/for-men/2.jpg',5156,'trousurs','male'),
		trouser3 = new Products('Trouser',2451,5421,'gray','img/trousers/for-men/3.jpg',5156,'trousurs','male'),
		trouser4 = new Products('Trouser',2451,5421,'black','img/trousers/for-men/4.jpg',5156,'trousurs','male'),
		trouser5 = new Products('Trouser',2451,5421,'brown','img/trousers/for-men/5.jpeg',5156,'trousurs','male'),
		trouser6 = new Products('Trouser',2451,5421,'gray','img/trousers/for-men/5.jpg',5156,'trousurs','male'),
		trouser7 = new Products('Trouser',2451,5421,'brown','img/trousers/for-men/6.jpg',5156,'trousurs','male'),
		trouser8 = new Products('Trouser',2451,5421,'white','img/trousers/for-men/7.jpg',5156,'trousurs','male'),
		trouser9 = new Products('Trouser',2451,5421,'gray','img/trousers/for-men/8.jpg',5156,'trousurs','male'),
		trouser10 = new Products('Trouser',2451,5421,'gray','img/trousers/for-men/9.jpg',5156,'trousurs','male'),
		trouser11 = new Products('Trouser',2451,5421,'black','img/trousers/for-men/10.jpg',5156,'trousurs','male'),
		trouser12 = new Products('Trouser',2451,5421,'white','img/trousers/for-men/11.jpg',5156,'trousurs','male'),
		trouser13 = new Products('Trouser',2451,5421,'gray','img/trousers/for-men/12.jpg',5156,'trousurs','male'),
		trouser14 = new Products('Trouser',2451,5421,'black','img/trousers/for-men/13.jpg',5156,'trousurs','male'),
		trouser15 = new Products('Trouser',2451,5421,'brown','img/trousers/for-men/14.jpg',5156,'trousurs','male'),
		trouser16 = new Products('Trouser',2451,5421,'brown','img/trousers/for-men/15.jpg',5156,'trousurs','male'),
		trouser17 = new Products('Trouser',2451,5421,'pink','img/trousers/for-men/16.jpg',5156,'trousurs','male'),

		trouser18 = new Products('Trouser',2451,5421,'red','img/trousers/for-girl/1.jpg',5156,'trousurs','female'),
		trouser19 = new Products('Trouser',2451,5421,'black','img/trousers/for-girl/2.jpg',5156,'trousurs','female'),
		trouser20 = new Products('Trouser',2451,5421,'gray','img/trousers/for-girl/3.jpg',5156,'trousurs','female'),
		trouser21 = new Products('Trouser',2451,5421,'black','img/trousers/for-girl/5.jpg',5156,'trousurs','female'),
		trouser22 = new Products('Trouser',2451,5421,'darkgreen','img/trousers/for-girl/6.jpg',5156,'trousurs','female'),
		trouser23 = new Products('Trouser',2451,5421,'black','img/trousers/for-girl/7.jpg',5156,'trousurs','female'),
		trouser24 = new Products('Trouser',2451,5421,'pink','img/trousers/for-girl/8.jpg',5156,'trousurs','female'),
		trouser25 = new Products('Trouser',2451,5421,'gray','img/trousers/for-girl/9.jpg',5156,'trousurs','female'),
		trouser26 = new Products('Trouser',2451,5421,'black','img/trousers/for-girl/11.jpg',5156,'trousurs','female'),
		trouser27 = new Products('Trouser',2451,5421,'black','img/trousers/for-girl/12.jpg',5156,'trousurs','female'),
		trouser28 = new Products('Trouser',2451,5421,'black','img/trousers/for-girl/13.jpg',5156,'trousurs','female'),
		trouser29 = new Products('Trouser',2451,5421,'blue','img/trousers/for-girl/14.jpg',5156,'trousurs','female'),
		trouser30 = new Products('Trouser',2451,5421,'red','img/trousers/for-girl/15.jpeg',5156,'trousurs','female'),
		trouser31 = new Products('Trouser',2451,5421,'red','img/trousers/for-girl/16.jpg',5156,'trousurs','female'),
		trouser32 = new Products('Trouser',2451,5421,'brown','img/trousers/for-girl/17.jpg',5156,'trousurs','female'),
		trouser33 = new Products('Trouser',2451,5421,'gray','img/trousers/for-girl/18.jpg',5156,'trousurs','female'),
		trouser34 = new Products('Trouser',2451,5421,'red','img/trousers/for-girl/19.jpg',5156,'trousurs','female'),
		trouser35 = new Products('Trouser',2451,5421,'pink','img/trousers/for-girl/20.jpg',5156,'trousurs','female');

		// End of my Products list 



	// Create the array of all products inside
	var products = [bag1,bag2,bag3,bag4,bag5,bag6,bag7,bag8,bag9,bag10,bag11,bag12,bag13,glas1,glas2,glas3,glas4,glas5,glas6,glas7,glas8,glas9,glas10,glas11,glas12,hat1,hat2,hat3,hat4,hat5,hat6,hat7,hat8,hat9,hat10,hat11,hat12,hat13,hat14,hat15,coat1,coat2,coat3,coat4,coat5,coat6,coat7,coat8,coat9,coat10,coat11,coat12,coat13,coat14,coat15,coat16,coat17,coat18,coat19,coat20,coat21,coat22,coat23,coat24,coat25,coat26,coat27,coat28,coat29,coat30,coat31,coat32,shirt1,shirt2,shirt3,shirt4,shirt5,shirt6,shirt7,shirt8,shirt9,shirt10,shirt11,shirt12,shirt13,shirt14,shirt15,shirt16,shirt17,shirt18,shirt19,shirt20,shirt21,shirt22,shirt23,shirt24,shirt25,shirt26,shirt27,shirt28,shirt29,shirt30,shirt31,shirt32,shoe1,shoe2,shoe3,shoe4,shoe5,shoe6,shoe7,shoe8,shoe9,shoe10,shoe11,shoe12,shoe13,shoe14,shoe15,shoe16,shoe17,shoe18,shoe19,shoe20,shoe21,shoe22,shoe23,shoe24,shoe25,shoe26,shoe27,shoe28,shoe29,shoe30,shoe31,shoe32,shoe33,shoe34,shoe35,shoe36,short1,short2,short3,short4,short5,short6,short7,short8,short9,short10,short11,short12,short13,short14,short15,short16,short17,short18,short19,short20,short21,short22,short23,short24,short25,short26,short27,short28,short29,sock1,sock2,sock3,sock4,sock5,sock6,sock7,sock8,sock9,sock10,sock11,sock12,sock13,sock14,sock15,sock16,sock17,sock18,sock19,sock20,sock21,sock22,sock23,sock24,sock25,sock26,sock27,trouser1,trouser2,trouser3,trouser4,trouser5,trouser6,trouser7,trouser8,trouser9,trouser10,trouser11,trouser12,trouser13,trouser14,trouser15,trouser16,trouser17,trouser18,trouser19,trouser20,trouser21,trouser22,trouser23,trouser24,trouser25,trouser26,trouser27,trouser28,trouser29,trouser30,trouser31,trouser32,trouser33,trouser34,trouser35];




	// Category Constructor
	function Category(name,image,gender='null') {
			this.name=name;
			this.image=image;
			this.gender=gender;
	}
	
	// start my categories list
	var cat1 = new Category('glasses','img/categories_icons/5.png'),
		cat2 = new Category('bags','img/categories_icons/3.png'),
		cat3 = new Category('hats','img/categories_icons/6.png'),
		cat4 = new Category('coats','img/categories_icons/4.png'),
		cat5 = new Category('shoes','img/categories_icons/1.png'),
		cat6 = new Category('shirts','img/categories_icons/2.png'),
		cat7 = new Category('shorts','img/categories_icons/7.png'),
		cat8 = new Category('socks','img/categories_icons/8.png'),
		cat9 = new Category('trousurs','img/categories_icons/9.png');
	// End my categories list


	// Create the array of all categories inside
	var allCategories  = [cat3,cat2,cat1,cat9,cat8,cat7,cat6,cat5,cat4];








	// when clicking to the category block this func. show us the all categories
	$('.category').click(function(){
		// cleaning the gender field
		$('#tempGender').val("");

		//Any styles 
		$('.categories').empty().slideDown();
		$('.CreatorTitles').removeClass('active');
		$(this).addClass('active');
		//Styles end


		// show all categories in categories block
		for(i=0;i<allCategories.length;i++){
			var html = "<div class='prod-container categoryBlock' data-name="+allCategories[i].name+">";
				html += "<div class='prod-img category-img'>";
				html +="<div class='prod-img category-img'>";
				html +="<img src="+allCategories[i].image+" alt=''>";
				html += "</div></div>";
				$('.categories').append(html);
		}
	});
















	// when clicking to the (.forMen,.forWomen) block this func. show us the Mens or Womens categories
	$('.forMen,.forWomen').click(function(){

		//any styles
		$('.categories').empty().slideDown();
		$('.CreatorTitles').removeClass('active');
		$(this).addClass('active');
		//end of styles

		//slice the hats,glasses and bags (for difference)
		var gendersCategory = allCategories.slice(3);

		// show the categories for men and women
		for(i=0;i<gendersCategory.length;i++){
			var html = "<div class='prod-container categoryBlock' data-name="+gendersCategory[i].name+">";
				html += "<div class='prod-img category-img'>";
				html +="<div class='prod-img category-img'>";
				html +="<img src="+gendersCategory[i].image+" alt=''>";
				html += "</div></div>";
				$('.categories').append(html);
		}
	});

















	// show us most saled products 
	$('.mostSaled').click(function(){

		//any styles
		$('.categories').slideUp();
		$('.creator-items').empty();
		$('.creator-items').append("<img class='prodLoader' src='img/prodLoader.gif'>");
		$('#tempGender').val("");
		$('.CreatorTitles').removeClass('active');
		$(this).addClass('active');
		//end styles


		var saledValues = [];
		var mostSaledProds = [];
		// all prods length
		var arrLength = products.length;



		for(i=0;i<arrLength;i++){
			//bring all values
			saledValues.push(products[i].saled);
		}

		// sorting the values and bring 15 to most saled
		var bigValues = saledValues.sort(function(a, b){return b - a}).splice(0,15);

		for(i=0;i<arrLength;i++){
			for(j=0;j<bigValues.length;j++){
				if (products[i].saled == bigValues[j]) {

					//brings most saled prods
					mostSaledProds.push(products[i]);
				}
			}
		}
		

		//show the most saled products
		for(i=0;i<mostSaledProds.length;i++){
			var html = "<div class='prod-container productBlock' data-name="+mostSaledProds[i].category_name+" data-price="+mostSaledProds[i].price+" data-oldPrice="+mostSaledProds[i].prev_price+" data-prodName="+mostSaledProds[i].name+" data-color="+mostSaledProds[i].color+" data-sale="+mostSaledProds[i].saled+" >";
				html +="<div class='prod-img'>";
				html +="<img src="+mostSaledProds[i].image+" alt=''>";
				html +="</div>";
				html +="<p class='prod-price'>"+mostSaledProds[i].price+" $</p>";
				html +="</div";
				$('.creator-items').append(html);						
		}

		//end of product block preloader
		setTimeout(function(){
			$('.prodLoader').remove();

		},1000);
	});

	//call the func. in page start
	$('.mostSaled').click();













	// on click any category block this func. show us the selected categories products
	$(document).on('click','.categoryBlock',function(){

		//any styles
		$('.categoryBlock').removeClass('checkedCategory');
		$('#tempPrice').val("");
		$(this).addClass('checkedCategory');
		$('.creator-items').empty();
		$('.creator-items').append("<img class='prodLoader' src='img/prodLoader.gif'>");
		//end styles


		$('#tempName').val();
		var alias = $(this).data('name');

		//save the category name in hidden input :)
		$('#tempName').val(alias);
	

		// show the selected category products
		 for(i=0;i<products.length;i++){

		 	// if we do not selected the categoryBlock for man and women, he show us all products
		 	if ($('#tempGender').val() == '') {

			 	if (products[i].category_name == alias) {

			 		var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" >";
			 			html +="<div class='prod-img'>";
			 			html +="<img src="+products[i].image+" alt=''>";
			 			html +="</div>";
			 			html +="<p class='prod-price'>"+products[i].price+" $</p>";
			 			html +="</div";
			 			$('.creator-items').append(html);
			 	}

		 	}
		 	// show us the products for man or women
		 	else{
		 		if (products[i].category_name == alias && products[i].gender == $('#tempGender').val()) {

		 			var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" >";
		 				html +="<div class='prod-img'>";
		 				html +="<img src="+products[i].image+" alt=''>";
		 				html +="</div>";
		 				html +="<p class='prod-price'>"+products[i].price+" $</p>";
		 				html +="</div";
		 				$('.creator-items').append(html);
		 		}
		 	}
		 }

		//end of product block preloader
		 setTimeout(function(){
		 	$('.prodLoader').remove();

		 },1000);

	});

















	// filter the products in selected color
	$('.colors').click(function(){
		//style for another block which show us the selected color
		$('.choosedColor').css('background-color',$(this).css('background-color'));
		//bring the category block name for filter products inside it
		var tempName = $('#tempName').val();

		// it works when we have a selected category block
		if (tempName != '') {
			//bring the color name for search
			var currentColor = $(this).data('color');

			//any styles
			$('.creator-items').empty();
			$('.creator-items').append("<img class='prodLoader' src='img/prodLoader.gif'>");
			$('.creator-items').append("<h4 class='prodNotFound'>Sorry Product Not Found :(</h4>");
			//end styles

			for(i=0;i<products.length;i++){

				// if we have not a selected gender
				if ($('#tempGender').val() == '') {

					// if we have not a selected price(input type range)
					if ($('#tempPrice').val() == '') {

						// show the filtered products 
				 		if (products[i].category_name == tempName && products[i].color == currentColor) {
							$('.prodNotFound').css('display','none');

				 			var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+"  >";
				 				html +="<div class='prod-img'>";
				 				html +="<img src="+products[i].image+" alt=''>";
				 				html +="</div>";
				 				html +="<p class='prod-price'>"+products[i].price+" $</p>";
				 				html +="</div";
				 				$('.creator-items').append(html);
				 		}
					}
					// if we have a selected price(input type range)
					else{

						// show the filtered products 
						if (products[i].category_name == tempName && products[i].color == currentColor && products[i].price < $('#tempPrice').val()) {
							$('.prodNotFound').css('display','none');

							var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+"  >";
								html +="<div class='prod-img'>";
								html +="<img src="+products[i].image+" alt=''>";
								html +="</div>";
								html +="<p class='prod-price'>"+products[i].price+" $</p>";
								html +="</div";
								$('.creator-items').append(html);
						}
					}
				}
				// if we have a selected gender
				if ($('#tempGender').val() != ''){

					// if we have not a selected price(input type range)
					if ($('#tempPrice').val() == '') {

						// show the filtered products 
						if (products[i].category_name == tempName && products[i].color == currentColor && products[i].gender == $('#tempGender').val()) {
							$('.prodNotFound').css('display','none');

							var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+"  >";
								html +="<div class='prod-img'>";
								html +="<img src="+products[i].image+" alt=''>";
								html +="</div>";
								html +="<p class='prod-price'>"+products[i].price+" $</p>";
								html +="</div";
								$('.creator-items').append(html);
						}
					}

					// if we have a selected price(input type range)
					else{

						// show the filtered products 
						if (products[i].category_name == tempName && products[i].color == currentColor && products[i].gender == $('#tempGender').val() && products[i].price < $('#tempPrice').val()) {
							$('.prodNotFound').css('display','none');

							var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+"  >";
								html +="<div class='prod-img'>";
								html +="<img src="+products[i].image+" alt=''>";
								html +="</div>";
								html +="<p class='prod-price'>"+products[i].price+" $</p>";
								html +="</div";
								$('.creator-items').append(html);
						}
					}

				}

		 	}
		 
			//end of product block preloader
		 	setTimeout(function(){
		 		$('.prodLoader').remove();

		 	},1000);
		}
	});










	// saveing the selected gender in hiddened input :)
	$('.forMen,.forWomen').click(function(){
		var tempGender = $(this).data('gender');
		$('#tempGender').val("");
		$('#tempGender').val(tempGender);
	});













	// filter the products until the selected price
	$("input[type='range']").on('input' ,function(){

			//start the showing count of price in document element
			var tempName = $('#tempName').val();
			$("#priceUntil>i").text($(this).val() + '$');
			$('#tempPrice').val($(this).val());
			//end of showing count of price 


		// it works when we have a selected category block
		if (tempName != '') {

			//any styles
			$('.creator-items').empty();
			$('.creator-items').append("<img class='prodLoader' src='img/prodLoader.gif'>");
			$('.creator-items').append("<h4 class='prodNotFound'>Sorry Product Not Found :(</h4>");
			// end of styles

			for(i=0;i<products.length;i++){

				// if we have not a selected gender
				if ($('#tempGender').val() == '') {

						// show the filtered products 
						if (products[i].category_name == tempName && products[i].price < $(this).val()) {
							$('.prodNotFound').css('display','none');

							var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+"  >";
								html +="<div class='prod-img'>";
								html +="<img src="+products[i].image+" alt=''>";
								html +="</div>";
								html +="<p class='prod-price'>"+products[i].price+" $</p>";
								html +="</div";
								$('.creator-items').append(html);
						}
				}

				// if we have a selected gender
				else{
					
					// show the filtered products 
					if (products[i].category_name == tempName && products[i].gender == $('#tempGender').val() && products[i].price < $(this).val()) {
						$('.prodNotFound').css('display','none');

						var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+" data-price="+products[i].price+" data-oldPrice="+products[i].prev_price+" data-prodName="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+"  >";
							html +="<div class='prod-img'>";
							html +="<img src="+products[i].image+" alt=''>";
							html +="</div>";
							html +="<p class='prod-price'>"+products[i].price+" $</p>";
							html +="</div";
							$('.creator-items').append(html);
					}

				}

			}

			//end of product block preloader
			setTimeout(function(){
				$('.prodLoader').remove();

			},1000);
		}


	});












	// start the function of search products
	$('#Searcher').on('input' , function(){

		//any styles
		$('.creator-items').empty();
		$('.creator-items').append("<img class='prodLoader' src='img/prodLoader.gif'>");
		$('.creator-items').append("<h4 class='prodNotFound'>Sorry Product Not Found :(</h4>");
		// end of styles

		// bring the values in LowerCase
		var text = $(this).val().toLowerCase();

			for(i=0;i<products.length;i++){

				// if search field value exists in any products name it show us the founded Products
				if (products[i].name.toLowerCase().indexOf(text) != -1) {
					$('.prodNotFound').css('display','none');

					var html = "<div class='prod-container productBlock' data-name="+products[i].category_name+" data-price="+products[i].price+" data-oldprice="+products[i].prev_price+" data-prodname="+products[i].name+" data-color="+products[i].color+" data-sale="+products[i].saled+">";
						html +="<div class='prod-img'>";
						html +="<img src="+products[i].image+" alt=''>";
						html +="</div>";
						html +="<p class='prod-price'>"+products[i].price+" $</p>";
						html +="</div";
						$('.creator-items').append(html);
				}
				
			}
			
			//end of product block preloader
			setTimeout(function(){
				$('.prodLoader').remove();

			},1000);


	});
	// end of Searcher function









	// start function of adding the product in board 
	$(document).on('click' , '.productBlock' , function(){


			// in the board can be only 3 products
			if($('.creatorManipulationProd').length <= 2){


				//any styles for the selected product block
				$(this).css('background','moccasin');
				var __this = $(this);
				setTimeout(function(){
					__this.css('background','white');
				},500);
				// end of styles


				//remove the background pic of board
				$('.creator-head').css('background-image','none');

				//start bringing all information 
				var imgSrc = $(this).find('img').attr('src'),
					prodName = $(this).data('prodname'),
					price = $(this).data('price'),
					oldPrice = $(this).data('oldprice'),
					saled = $(this).data('sale'),
					color = $(this).data('color');
				//end bringing the information


				// start creating the element for board

				//start element container
				var html = $("<div></div>");
				html.addClass('creatorManipulationProd');
				html.attr('data-name',prodName);
				html.attr('data-price',price);
				html.attr('data-oldprice',oldPrice);
				html.attr('data-sale',saled);
				html.attr('data-color',color);
				// end of element container

				// make the pic 
				var img = $("<img>");
				img.attr('src',imgSrc);

				// start of creating the control buttons in element
				var flipXicon = $("<i class='fas fa-exchange-alt'></i>");
				var flipYicon = $("<i class='fas fa-exchange-alt'></i>").css('transform','rotate(90deg)');
				var clonePicon = $("<i class='far fa-copy'></i>");

				var flipX = $("<p></p>");
				flipX.addClass('flipX');
				
				var flipY = $("<p></p>");
				flipY.addClass('flipY');

				var cloneP = $("<p></p>");
				cloneP.addClass('cloneP');


				flipX.append(flipXicon);
				flipY.append(flipYicon);
				cloneP.append(clonePicon);
				// end of creating control buttons in element

				// start adding all maked elements to container
				html.append(img);
				html.append(flipY);
				html.append(flipX);
				html.append(cloneP);
				// end adding to container


				// makeing the container to draggable,rotatable and resizable
				html.draggable({
					containment: '.creator-head'
				});
				html.rotatable();
				html.resizable({
					handles: 'e, s, w, se',
					ghost: true,
					maxHeight: 300,
				    maxWidth: 300,
				    minHeight: 100,
				    minWidth: 100
				});

				// end of creating element for the board


					// adding the finished container in board
					$('.creator-head').prepend(html);				
			}

			// if board have a 3 products
			else{

				//any styles for it 
				$(this).css('background','red');
				var __this = $(this);
				setTimeout(function(){
					__this.css('background','white');
				},500);
				//end styles
			}
	});
	// end the func. to adding products to board













//start  function for any board element
$(document).on('mousedown' , '.creatorManipulationProd' , function(){

		// any styles for selected element
			$('.creatorManipulationProd').css('z-index','1').removeClass('choosedManProd');
			$(this).css('z-index','55').addClass('choosedManProd');
		// end of styles

		//show the controls bar in bottom
		$('.creator-controls').removeClass('hide');

		// any styles for element control buttons
			$('.ui-rotatable-handle').css({
				'opacity':'0',
			});
			$('.ui-resizable-se').css({
				'right':' 5px',
				'bottom': '6px',
				'opacity' : '0',
				'transform' : 'translate(-100%,-90%)'

			});
			$(this).find('.ui-rotatable-handle').css({
				'opacity':'1',
				'transform':'translate(-50%)'
			});
			$(this).find('.ui-resizable-se').css({
				'right':' -15px',
				'bottom': '-13px',
				'opacity' : '1',
				'transform' : 'translate(-50%,-50%)'
			});

			$('.flipX,.flipY,.cloneP').css({
				'opacity' : '0',
			});
			$(this).find('.flipX,.flipY,.cloneP').css({
				'opacity':'1',
			});
		//end of styles


});
//end function for any board element













//start function to forward and back the element(Z-index)
$('.forward').click(function(){
	$('.choosedManProd').css('z-index','55');
});

$('.back').click(function(){
	$('.choosedManProd').css('z-index','0');
});

//end function to forward and back the element(Z-index)















// start the function to cloneing the element
$(document).on('click','.clone,.cloneP',function(){

	// checks to the numbers of elements in board (can be only 3)
	if ($('.creatorManipulationProd').length <= 2) {

	// cloneing the element
	var clonedElem = $('.creatorManipulationProd.choosedManProd').clone();

	//giveing any styles to cloning element
	clonedElem.removeClass('choosedManProd');
	clonedElem.css({
		'width':'120px',
		'height':'120px'
	});
	clonedElem.find('.ui-rotatable-handle,.flipX,.flipY,.cloneP').css({
		'opacity':'0',
	});
	// end of styles


	// deleting prev elements class for resizable (Its important)
	clonedElem.find('.ui-resizable-handle').remove()

	// giveing the manipulation functions to clonned element
	clonedElem.draggable({containment: '.creator-head'});
	clonedElem.resizable({
						handles: 'e, s, w, se',
						ghost: true,
						maxHeight: 300,
				    	maxWidth: 300,
				    	minHeight: 150,
				    	minWidth: 200
					});
	clonedElem.rotatable();

	// adding cloned element to the board
	clonedElem.prependTo('.creator-head');

	}

	else{
	// if count of elements in board equal the 3
		alert('To many Products are Seleced :(')
	}
});
// end the function to cloneing the element









// fliping the image of element (in bottom menu controls button)
$('.flip').click(function(){
	$('.choosedManProd').find('img').toggleClass('flipProd');
});








// remove the selected element in board
$('.remove').click(function(){
	$('.choosedManProd').remove();
	if ($('.creatorManipulationProd').length == 0) {
		$('.creator-head').css('background-image','url(img/creator-bg.jpg)');
	}
});











// showing the selected element in board More information
$('.info').click(function(){
	$('.creator-controls').css('z-index','0');
	var img = $('.choosedManProd').find('img').attr('src'),
		prodName = $('.choosedManProd').data('name'),
		price = $('.choosedManProd').data('price'),
		oldPrice = $('.choosedManProd').data('oldprice'),
		sale = $('.choosedManProd').data('sale');
	$('.creatorProdContainer').find('img').attr('src',img);
	$('.creatorProdName').text(prodName);
	$('.creatorProdPrice').text(price);
	$('.creatorProdOldPrice').text(oldPrice);
	$('.creatorSaledCount').text(sale);
});










//style for modal correct working
$("button[data-dismiss='modal']").click(function(){
	$('.creator-controls').css('z-index','9999');
});










// start fliping function to X and Y (in element buttons)
$(document).on('click','.flipX', function(){
	$(this).parents('.choosedManProd').find('img').toggleClass('flipProd');
});
$(document).on('click','.flipY', function(){
	$(this).parents('.choosedManProd').find('img').toggleClass('flipProdY');
});
// end of fliping function













//start buying imitation 
$(".saveBoard").click(function(){
		var totalPricec = 0;
		$("#boardFinally").empty();
	$('.creatorManipulationProd').each(function(){

		// sum the all prices to one variable 
		totalPricec += $(this).data('price');

		var html  = "<div class='buyingProds'>";
			html += "<div class='buyProdImg'>";
			html += "<img src="+$(this).find('img').attr('src')+" alt=''>";
			html += "</div>";
			html += "<div class='buyProdNameAndPrice'>";
			html += "<div class='buyProdName'>"+$(this).data('name')+"</div>";
			html += "<div class='buyProdPrice'>"+$(this).data('price')+"$</div></div></div>";
			$("#boardFinally").append(html);
	});
		//show the total price
		$('.totalBuyingPrice>span').text(totalPricec + ' $');	
});
// end buying imitation








// board styles when Products are buying 
$('.buyBTN').click(function(){
	$('.creatorManipulationProd').remove();
	$('.creator-head').css('background-image','url(img/creator-bg.jpg)');
});









//main page preloader function
setTimeout(function(){
	$('.preloader').fadeOut();
	enable_scroll();
},1500);









});


