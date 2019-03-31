import $ from "jquery";
import "what-input";

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();
require("owl.carousel");

$(".membercard").on("click", "a", function(e) {
    e.preventDefault();
    $(".membercard").removeClass("details-is-shown");
    $(this)
        .closest(".membercard")
        .toggleClass("details-is-shown");
});

$(".membercard__details").on("click", function(e) {
    $(this)
        .closest(".membercard")
        .removeClass("details-is-shown");
});

$(document).ready(function() {
    var tabletbp = Foundation.MediaQuery.get("tablet"),
        xlargebp = Foundation.MediaQuery.get("xlarge");

    $(".owl-slider").owlCarousel({
        autoWidth: true,
        loop: true,
        nav: true,
        navText: ["‹", "›"],
        // navContainer: "#slidernav",
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            tabletbp: {
                items: 2
            },
            xlargebp: {
                items: 3
            }
        }
    });
});
