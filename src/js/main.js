$(document).ready(function () {
	$('.product-type').change(function () {
		if ($(this).prop('checked')) {
			$('.products').find('[data-type=' + $(this).val() + ']').show();
			return;
		}
		$('.products').find('[data-type=' + $(this).val() + ']').hide();
	});
});