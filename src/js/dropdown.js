var json = (function () {
    var json = null;
    $.ajax({
        'async': true,
        'global': false,
        'url': '../../json/color.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

var $select = $('#firstSelect');
//$select.find('option').remove();
$.each(json,function(key, value)
{
    $select.append('<option value=' + key + '>' + value + '</option>');
});


//$('#firstSelect').
