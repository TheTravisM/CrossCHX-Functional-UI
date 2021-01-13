var directives = angular.module('crosschxDirectives', []);

directives.directive("openClose", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attr) {
            element.bind("click", function() {
                if($("button:first", element).hasClass("open")){
                    $("button:first", element).removeClass("open");
                } else {
                    $("button:first", element).addClass("open");
                }
            });
        }
    }
});