<?php

$errors = array();
$data = array();

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';

	if (empty())
		$errors['email'] = 'eMail is required.';

	if (empty())
		$errors['comment'] = 'Comment is required';


	if (! empty($errors)){
		$data['success'] = false;
		$data['errors'] = $errors;
	} else {
		$data['success'] = true;
		$data['message'] = 'Success!';
	}

	echo json_encode($data);