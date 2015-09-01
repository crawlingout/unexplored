// end date 12-31-2015
var travelation = '<a href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=353984.231&type=4&subid=0"><img alt="Travelation Brand Logo" border="0" src="http://www.travelation.com/Sites/3/Linkshare/TLLogo/TLLogo_250X100.jpg" /></a><img border="0" width="1" height="1" src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=353984.231&type=4&subid=0" /><br><a id="ad_txt" href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=353984.142&type=3&subid=0" >Fastest way to compare and book over 500 special airlines flights! Get extra $15 off.</a><img border=0 width=1 height=1 src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=353984.142&type=3&subid=0" />';

// end date 09-30-2015
var onetravel = '<a href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=222795.10000254&type=4&subid=0&LSNSUBSITE=LSNSUBSITE"><img style="margin: 10px 0 5px;" alt="ONETRAVEL.COM" border="0" src="http://www.onetravel.com/travel/affiliate/logo/images/200x50.gif"></a><img border="0" width="1" height="1" src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=222795.10000254&type=4&subid=0"><br><a id="ad_txt" href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=222795.10000185&type=3&subid=0&LSNSUBSITE=LSNSUBSITE" >Fly and Stay Cheap with OneTravel.com. Low Fare Promise. Book Now!</a><img border=0 width=1 height=1 src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=222795.10000185&type=3&subid=0" >';


var insert_ad = document.getElementById('insert_ad');

var d = new Date();
var day = d.getDay();

if (day % 2) {
    insert_ad.innerHTML = travelation;
}
else {
    insert_ad.innerHTML = onetravel;
}