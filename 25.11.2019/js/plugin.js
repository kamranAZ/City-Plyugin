$(function ($) {
    $.fn.searchDrop = function () {
        var AllList=[];
        var self=this
        let div = $("<div></div>")
        div.addClass("wrapDiv")
        for (var searchItem of arguments) {
            div.html(div.html() + "<p>" + searchItem + "</p>")
            AllList.push(searchItem)
        }
        let wrapDiv = $("<div></div>")
        wrapDiv.addClass("bottomWrap")
        this.wrap(wrapDiv)
        this.after(div)

        // Margin leftden
        let marginleft = this.css("margin-left")
        marginleft = ParsePx(marginleft)

        let margintop = this.css('marginTop')
        margintop = ParsePx(margintop)
        div.css({
            'left': marginleft + "px",
            'top': margintop + this.outerHeight() + 'px'
        })
        this.on("focus", function () {
            div.fadeIn()
        })
        this.on("keyup", function () {
            var letter = $(this).val()
            var newList=filterList(letter, AllList)
            $('.wrapDiv').empty()
            for(var searchItem of newList){
                div.html(div.html()+"<p>"+searchItem+"</p>")
            }
            $(".wrapDiv p").on("click", function(){
                var pText=$(this).text()
                $(self).val(pText)
                $(this).parent().fadeOut()
            })
        })
        $(".wrapDiv p").on("click", function(){
            var pText=$(this).text()
            $(self).val(pText)
            $(this).parent().fadeOut()
        })
    }
}(jQuery))

function ParsePx(mesafe) {
    return Number(mesafe.slice(0, mesafe, length - 2))
}

function filterList(letter, list) {
    var newList = [];
    for (var myList of list) {
        if (myList.toUpperCase().startsWith(letter.toUpperCase())) {
            newList.push(myList)
        }
    }
    return newList
}