// ==UserScript==
// @name           User canonical URL
// @namespace      http://d.hatena.ne.jp/Yuichirou/
// @include        http://*
// @include        https://*
// ==/UserScript==

var re = location.href.match(/^(http:\/\/www.yomiuri.co.jp\/.*)\?/);
if (re) {
    var link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", re[1]);
    document.getElementsByTagName("head")[0].appendChild(link);
}
