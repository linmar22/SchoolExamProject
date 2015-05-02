/**
 * Created by Linas on 2015-05-02.
 */
$(document).ready(function () {
    $("#footer_center").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(function() {
        $("#search_box").keypress(function (e) {
            if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                window.location.href='SearchResults.html';
                return false;
            } else {
                return true;
            }
        });
    });
});