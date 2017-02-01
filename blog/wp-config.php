<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hesinapa_wpdb');

/** MySQL database username */
define('DB_USER', 'hesinapa_admin');

/** MySQL database password */
define('DB_PASSWORD', 'sUn?4100sHARD');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '@}NSr&/NyH;|&5PX~{$ULl=qtt}kUuFGkd*<}Yg&%02(xko#g-kj!^(L*cAwT5oe');
define('SECURE_AUTH_KEY',  'm!Gi~-R6:aT.1X`gb3G)/ug9)2&IbY$5%aC~gRA%D,p_vLl9Q3(dy[z^G<%^}NrM');
define('LOGGED_IN_KEY',    '~fn)Nk5}:~y85RIW`yk4bOnI*)].F|5-A^dU0}eSNAx`)isby2EMTv[$72$4xf2*');
define('NONCE_KEY',        '^HX,lZn5Fquj9*?ua1*fR,s/yBP0Sd7on+hv31x_{,mZv4J `;[rGx;YzW5o&6:$');
define('AUTH_SALT',        '41FKAXy85%DegkRfXn+?:GzU%y=}Bar!*Pj|`AtzMRsn7S5E3q/Qs@eyUN44SMs2');
define('SECURE_AUTH_SALT', 'en$.BSwcZGdg&p%9D_e-V2mP$^+Wb-;n|M<M2#^vlS%|bL=4,K`W5H-AOVbmz&n$');
define('LOGGED_IN_SALT',   'lc[bow]H.vasKteOtGgTsx$eo=i=T[Xf(MNq2F7xF(ce,_u<8LZ{!u{u^cnz_JrM');
define('NONCE_SALT',       'P{q8-<~l<5h.G$w4}o>.n@,_j#i3Ux;+iM9onJRS#FPVwARQmc/e^vyRCtUKe[GR');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
