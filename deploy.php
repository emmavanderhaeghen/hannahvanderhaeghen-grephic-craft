<?php
namespace Deployer;

require 'recipe/craftcms.php';

// Config

set('repository', 'git@github.com:astalpaert/hannahvanderhaeghen-grephic-craft.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('staging.hannahvanderhaeghen.com')
    ->set('remote_user', 'hannahvanderhaeghen-l738y')
    ->set('deploy_path', '~/staging.hannahvanderhaeghen.com');

// Hooks

after('deploy:failed', 'deploy:unlock');
