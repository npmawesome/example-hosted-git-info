/**
 * example-hosted-git-info
 * http://npmawesome.com/posts/hosted-git-info
 *
 * Copyright(c) 2014 npmawesome.com
 *
 * MIT Licensed
 */

'use strict';

var hostedGitInfo = require('hosted-git-info');

function prettyPrint(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

prettyPrint(hostedGitInfo.fromUrl('git@github.com:npmawesome/example-hosted-git-info.git'));
prettyPrint(hostedGitInfo.fromUrl('git@bitbucket.org:npmawesome/example-hosted-git-info.git'));
