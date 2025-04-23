<?php
// This file is generated. Do not modify it manually.
return array(
	'nn-logo' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/nn-logo',
		'version' => '0.1.0',
		'title' => 'NN Logo',
		'category' => 'nn-blocks',
		'icon' => 'smiley',
		'description' => 'My NN logo with some animations.',
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
			'claim' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'nn-logo',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
