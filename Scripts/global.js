/**
 * Created by Linas on 2015-05-02.
 */
$(document).ready(function () {
    $("#footer_center").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});