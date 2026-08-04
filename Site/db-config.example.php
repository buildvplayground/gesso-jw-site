<?php
// Template de configuração — copie para db-config.php e preencha (NUNCA versionar o real)
define('PROJETO_PREFIX', 'gesso_jw');
if (!defined('PROJETO_DB_HOST'))     define('PROJETO_DB_HOST',     'localhost');
if (!defined('PROJETO_DB_NAME'))     define('PROJETO_DB_NAME',     'u000000_gessojw');
if (!defined('PROJETO_DB_USER'))     define('PROJETO_DB_USER',     'u000000_user');
if (!defined('PROJETO_DB_PASSWORD')) define('PROJETO_DB_PASSWORD', '');
if (!defined('PROJETO_NOTIFY'))      define('PROJETO_NOTIFY',      'contato@gessojw.com.br');
if (!defined('PROJETO_ADMIN_PASS'))  define('PROJETO_ADMIN_PASS',  'TROCAR_ANTES_DO_DEPLOY');
if (!defined('PROJETO_UPLOAD_DIR'))  define('PROJETO_UPLOAD_DIR',  __DIR__ . '/uploads/arquivos/');
if (!defined('PROJETO_UPLOAD_URL'))  define('PROJETO_UPLOAD_URL',  '/uploads/arquivos/');
