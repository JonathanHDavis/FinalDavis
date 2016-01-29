$(document).ready(function() {

  $(".menuItem").click(function() {
    $(".lightbox .description").html($(this).attr("data-description"));
    $(".lightbox").show();
  });

  $(".close").click(function() {
    $(".lightbox .description").attr("data-description", "");
    $(".lightbox").hide();
  });
});