$(document).ready(function () {

    let calc = '';
    let lastCalc;
    let numDisplay = '';
    let lastSelectFunc = false;
    let useLastAns = false;

    function clear() {
        calc = '';
        numDisplay = '';
        $('.selected').removeClass('selected');
        ansBox('0');
    }

    //what shows up in the answer box
    function ansBox(n) {
        $('#answer').html(n);
    }

    //when clicking a number or decimal
    $('.num').click(function () {
        lastSelectFunc = false;
        useLastAns = false;
        calc += $(this).text().trim();
        numDisplay += $(this).text().trim();
        ansBox(numDisplay);
        $('.selected').removeClass('selected');
    });

    //when clicking a "+" "-" "*" or "/"
    $('.func').click(function () {
        if (lastSelectFunc) {
            // pop off the last character in the calculation string
            calc = calc.slice(0, -1);
        }
        if (useLastAns) {
            // use the last answer if the first button clicked in the next set is a function button
            calc = lastCalc;
        }
        if ($(this).is("#add")) {
            calc = calc + "+";
        } else if ($(this).is("#subtract")) {
            calc = calc + "-";
        } else if ($(this).is("#multiply")) {
            calc = calc + "*";
        } else if ($(this).is("#divide")) {
            calc = calc + "/";
        }
        clearAns = true;
        numDisplay = '';
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        lastSelectFunc = true;
    });

    //when clicking "="
    $('#equals').click(function () {
        lastCalc = eval(calc);
        clear();
        ansBox(lastCalc);
        lastAns = lastCalc;
        useLastAns = true;
    });

    //when clicking "clear"
    $('#clear').click(function () {
        clear();
    });
});
