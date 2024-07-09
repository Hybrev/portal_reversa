$('li>a[data-toggle="tab"]').on('click', function (e) {
    var bodyBgClass = $(this).attr("href").replace("#", "") + "-BgBackground";
    $("body").removeClass().addClass(bodyBgClass);
    console.log(bodyBgClass);

    $(function () {
    $('#myNav a:first').tab('show');
});