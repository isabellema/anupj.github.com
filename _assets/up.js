$(document).ready(function() {
    $('.content-table td').toggle();
    $('.content-table th').click(function() {
	    $(this).parents('table').find('td').toggle();
    });
});
// TODO: workaround toggle jquery block element (display none / display inline)
