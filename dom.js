$(document).ready(function(){
	var theOperator;

$('#add').click(function(){
	var arg1=$('#firstNumber_arg1').val()
	var arg2=$('#secondNumber_arg2').val()
	theOperator="add";
	$('#display').text(calc.operate(theOperator,Number(arg1),Number(arg2)))
	

})
$('#subtract').click(function(){
	var arg1=$('#firstNumber_arg1').val()
	var arg2=$('#secondNumber_arg2').val()
	theOperator="subtract";
	$('#display').text(calc.operate(theOperator,Number(arg1),Number(arg2)))
})
$('#multiply').click(function(){
	var arg1=$('#firstNumber_arg1').val()
	var arg2=$('#secondNumber_arg2').val()
	theOperator="multiply";
	$('#display').text(calc.operate(theOperator,Number(arg1),Number(arg2)))
})
$('#divide').click(function(){
	var arg1=$('#firstNumber_arg1').val()
	var arg2=$('#secondNumber_arg2').val()
	theOperator="divide";
	$('#display').text(calc.operate(theOperator,Number(arg1),Number(arg2)))
})


});