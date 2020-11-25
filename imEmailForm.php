<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Ingrese su correo electrónico', $_POST['imObjectForm_1_1'], '', false);
	$form->setField('Ingrese su nombre completo', $_POST['imObjectForm_1_2'], '', false);
	$form->setField('Numero de teléfono', $_POST['imObjectForm_1_3'], '', false);
	$form->setField('', $_POST['imObjectForm_1_4'], '', false);
	$form->setField('Zapatos', $_POST['imObjectForm_1_5'], '', false);
	$form->setField('Tallas', $_POST['imObjectForm_1_6'], '', false);
	$form->setField('Ropa ', $_POST['imObjectForm_1_7'], '', false);
	$form->setField('TALLAS', $_POST['imObjectForm_1_8'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != 'jsactive' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('abigailvillacorta12@gmail.com', 'abigailvillacorta12@gmail.com', '', 'Encargada de la página web ', false);
		@header('Location: ../index.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file