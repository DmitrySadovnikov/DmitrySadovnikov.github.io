$(function () {
    $.scrollify({
        section:     ".panel",
        scrollbars:  true,
        before:      function (i, panels) {
            var ref = panels[i].attr("data-section-name");
            $(".panel.actived").removeClass("actived");
            $("[data-section-name=" + ref + "]").addClass("actived");

            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination  = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\">" +
                    "<span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() +
                    $(this).attr("data-section-name").slice(1).replace("_", "&nbsp;") + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);
        }
    });
    $(".pagination a").on("click", $.scrollify.move);
});
