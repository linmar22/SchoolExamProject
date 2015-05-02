/**
 * Created by Linas on 2015-05-02.
 */
$(document).ready(function () {
    $(".result").click(function(){
        var link = $(this).find('a:first').attr('href');
        window.location.href=link;
    });
});