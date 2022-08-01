$("h1").addClass("big-title margin-50");

console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
console.log($("h1").hasClass("margin-50"));

$("h1").text("Bye");
$("button").text("Don't Click Me");
$("button").html("<em>Click Me</em>");
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
  console.log("I Got Clicked");
  $("h1").fadeOut();
});

$("button").click(function() {
  $("h1").addClass("purple");
  $("h1").fadeIn();
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$("input").keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").addClass("purple");
})

$("h1").before("<button>beforeNew</button>");

$("h1").after("<button>afterNew</button>");

$("h1").prepend("<button>prependNew</button>");

$("h1").append("<button>appendNew</button>");
