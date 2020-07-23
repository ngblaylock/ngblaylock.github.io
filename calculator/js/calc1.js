$(document).ready(function () {

    let calculation = [];
    let temp = 0;
    let needsClear = true;
    let lastClickFunc = false;

    function clearCell() {
        $('#answer').html('');
    }

    function runFunction(name, fullName) {
        if (lastClickFunc) {
            calculation.pop();
            calculation.pop();
        }
        calculation.push(temp);
        calculation.push(name);
        $('#' + fullName + '').addClass('selected');
        needsClear = true;
        console.log(calculation);
        lastClickFunc = true;
    }

    $('#clear').click(function () {
        $('#answer').html('0');
        calculation = [];
        temp = 0;
        $('.selected').removeClass('selected');
        lastClickFunc = false;
    });

    $('.num').click(function () {
        $('.selected').removeClass('selected');
        if (needsClear) {
            $('#answer').html('');
            needsClear = false;
        }
        $('#answer').append($(this).text().trim());
        temp = parseFloat($('#answer').text());
        lastClickFunc = false;
    });

    $('#add').click(function () {
        runFunction("+", "add");
    });
    $('#subtract').click(function () {
        runFunction("-", "subtract");
    });
    $('#multiply').click(function () {
        runFunction("*", "multiply");
    });
    $('#divide').click(function () {
        runFunction("/", "divide");
    });

    $('#equals').click(function () {
        let finalAns = '';
        calculation.push(temp);
        $.each(calculation, function (index, value) {
            finalAns = finalAns + value;
        });
        console.log(calculation);
        clearCell();
        calculation = [];
        //console.log(finalAns);
        temp = parseFloat(eval(finalAns));
        $('#answer').html(temp);
        needsClear = true;
        lastClickFunc = false;
    });

});
