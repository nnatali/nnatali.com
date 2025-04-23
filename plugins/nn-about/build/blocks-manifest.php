<?php
// This file is generated. Do not modify it manually.
return array(
	'nn-about' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/nn-about',
		'version' => '0.1.0',
		'title' => 'NN About',
		'category' => 'nn-blocks',
		'icon' => 'id',
		'description' => 'My bio and some personal data.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'customClassName' => true,
			'inserter' => true,
			'reusable' => true
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'text' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'nn-about',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
