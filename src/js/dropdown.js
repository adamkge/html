var $select = $('#firstSelect');
$(function () {
    $.ajax({
        url: '../../data.json',
        success: function (result) {
            $($.parseJSON(result)).map(function () {
                return $('<option>').val(this.value).text(this.label);
            }).appendTo('#firstSelect');;
        },
        async: true
    });
    alert("Done");
});