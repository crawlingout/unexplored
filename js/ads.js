var ads = [
// end date 12-31-2015
//'<a href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=353984.231&type=4&subid=0"><img alt="Travelation Brand Logo" border="0" src="http://www.travelation.com/Sites/3/Linkshare/TLLogo/TLLogo_250X100.jpg" /></a><img border="0" width="1" height="1" src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=353984.231&type=4&subid=0" /><br><a id="ad_txt" href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=353984.142&type=3&subid=0" ><strong>Fastest way to compare and book flights!</strong></a><img border=0 width=1 height=1 src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=353984.142&type=3&subid=0" />',

// end date 09-30-2015
//'<a href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=222795.10000254&type=4&subid=0&LSNSUBSITE=LSNSUBSITE"><img style="margin: 10px 0 5px;" alt="ONETRAVEL.COM" border="0" src="http://www.onetravel.com/travel/affiliate/logo/images/200x50.gif"></a><img border="0" width="1" height="1" src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=222795.10000254&type=4&subid=0"><br><a id="ad_txt" href="http://click.linksynergy.com/fs-bin/click?id=hMT*QUxbGMY&offerid=222795.10000185&type=3&subid=0&LSNSUBSITE=LSNSUBSITE" ><strong>Fly and stay cheap with onetravel.com.</strong></a><img border=0 width=1 height=1 src="http://ad.linksynergy.com/fs-bin/show?id=hMT*QUxbGMY&bids=222795.10000185&type=3&subid=0" >',

/*
amazon link template
http://amzn.com/ASIN/?tag=simplyeasy-20
*/

// Canon EOS 5D Mark III at amazon.com
'<a href="http://amzn.com/B007FGZ1V0/?tag=simplyeasy-20"><img style="padding-left: 20px;width: 130px;" src="/i/ads/canon-eos.jpg" alt="Canon EOS" /></a><br><br><span style="font-size: 14px;font-weight: bold;line-height: 20px;">Buy <a href="http://amzn.com/B007FGZ1V0/?tag=simplyeasy-20">Canon EOS 5D Mark III</a></span>',

// Sony DSCRX10/B Cybershot at amazon.com
'<a href="http://amzn.com/B00FRHTSMW/?tag=simplyeasy-20"><img style="padding-left: 10px;width: 180px;" src="/i/ads/sony-cybershot.jpg" alt="Sony DSCRX10/B Cybershot" /></a><br><br><span style="font-size: 14px;font-weight: bold;line-height: 20px;">Buy <a href="http://amzn.com/B00FRHTSMW/?tag=simplyeasy-20">Sony DSCRX10/B Cybershot</a></span>',

// Nikon D4S at amazon.com
'<a href="http://amzn.com/B00IMOB5SW/?tag=simplyeasy-20"><img style="padding-left: 30px;width: 160px;" src="/i/ads/nikon-d4s.jpg" alt="Nikon D4S" /></a><br><br><span style="font-size: 13px;font-weight: bold;line-height: 20px;">Buy <a href="http://amzn.com/B00IMOB5SW/?tag=simplyeasy-20">Nikon D4S (Full 1080p HD Video)</a></span>',

// GoPro HERO4 Session
'<a style="display: block; height: 140px;" href="http://amzn.com/B010H05JMQ/?tag=simplyeasy-20"><img style="width: 175px;" src="/i/ads/gopro-hero4.jpg" alt="GoPro HERO4 Session" /></a><br><span style="font-size: 14px;font-weight: bold;">Buy <a href="http://amzn.com/B010H05JMQ/?tag=simplyeasy-20">GoPro HERO4 Session</a></span>'


];

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * based on http://stackoverflow.com/a/1527820/716001
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var number_of_ads = ads.length;
var ad = getRandomInt(0, number_of_ads-1);
var insert_ad = document.getElementById('insert_ad');

insert_ad.innerHTML = ads[ad];