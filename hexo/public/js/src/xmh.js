function httpTohttps() {
    var host = "localhost:4000";
    if ((host == window.location.host) && (window.location.protocol != "https:")){
      window.location.protocol = "https";
    }

}
function shareDemo() {
	$('.demo-link').click(function(){ 
		$(this).next('iframe.demo-iframe').slideToggle("slow");		
	});
}

$(document).ready(function() {
  httpTohttps();
  shareDemo();
});
