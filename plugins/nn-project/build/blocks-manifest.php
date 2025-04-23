<?php
// This file is generated. Do not modify it manually.
return array(
	'nn-project' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/nn-project',
		'version' => '0.1.0',
		'title' => 'NN Project',
		'category' => 'nn-blocks',
		'icon' => 'html',
		'description' => 'Project info for my personal portfolio',
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
		'textdomain' => 'nn-project',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
