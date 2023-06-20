<?php
namespace Deployer;

require 'recipe/craftcms.php';

// Config

set('repository', 'git@github.com:emmavanderhaeghen/hannahvanderhaeghen-grephic-craft.git');

set('keep_releases', 2);

add('shared_files', [
    '.env'
]);

set('shared_dirs', [
    'storage',
    'web/assets',
    'web/uploads',
]);

add('writable_dirs', []);

// Hosts

host('staging.hannahvanderhaeghen.com')
    ->set('remote_user', 'hannahvanderhaeghen-l738y')
    ->set('deploy_path', '~/staging.hannahvanderhaeghen.com');

// Hooks

task('npm-assets', function () {
    //run('cd {{release_path}} && npm install && npm run build');
});

after('deploy:vendors', 'npm-assets');
after('deploy:failed', 'deploy:unlock');
