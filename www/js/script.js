$.mobile.allowCrossDomainPages = true;
_debug = false;


$(document).on("pageinit", "#intro", function() {
    var page = "#" + $(this).attr("id"),
            // Get the filename of the next page that we stored in the data-next attribute
            next = $(this).jqmData("next"),
            // Get the filename of the previous page that we stored in the data-prev attribute
            prev = $(this).jqmData("prev");
    // Check if we did set the data-next attribute
    if (next) {
        // Navigate to next page on swipe left
        $(document).on("swipeleft", page, function() {
            console.log("localStorageHERE" + localStorage);
           /* if (localStorage.getItem("usernamekul") == null || localStorage.getItem("usernamekul") == '')
            {
                $.mobile.changePage('#login-reg');
            }
            else
            {*/
                $.mobile.changePage('#' + next);
            //}
        });
        $(document).on("tap", page, function() {
            //if((localStorage.length>0) && (localStorage.getItem("usernamekul")!=''))
            console.log("localStorage.getItem" + localStorage.getItem("usernamekul"));
           /* if (localStorage.getItem("usernamekul") == null || localStorage.getItem("usernamekul") == '')
            {
               $.mobile.changePage('#login-reg');
            }
            else
            {*/
                $.mobile.changePage('#' + next);
            //}
        });
        // Navigate to next page when the "next" button is clicked
        $(".control .next", page).on("click", function() {
            if (localStorage.getItem("usernamekul") == null || localStorage.getItem("usernamekul") == '')
            {
                $.mobile.changePage('#login-reg');
            }
            else
            {
                $.mobile.changePage('#' + next);
            }
        });
    }
    // Disable the "next" button if there is no next page
    else {
        $(".control .next", page).addClass("ui-disabled");
    }
    // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
    if (prev) {
        $(document).on("swiperight", page, function() {
            $.mobile.changePage('#' + prev, {reverse: true});
        });
        $(".control .prev", page).on("click", function() {
            $.mobile.changePage('#' + prev, {reverse: true});
        });
    }
    else {
        $(".control .prev", page).addClass("ui-disabled");
    }
});

