<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['is_system_on'] = 'y';
$config['multiple_sites_enabled'] = 'y';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '3.4.6';
$config['encryption_key'] = '8e28744053b1dc4d5c42bf7ba07ceabeca34c52a';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'hesinapa_exp',
		'username' => 'hesinapa_admin',
		'password' => 'sUn?4100sHARD',
		'dbprefix' => 'exp_',
		'port'     => ''
	),
);

// EOF