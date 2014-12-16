---
layout: post
title: Jekyll + minimalistic design
language: en
---
While browsing [github](https://github.com) for blogging platforms, I stumbled upon **[jekyll](https://github.com/jekyll/jekyll#jekyll)**.

My search criteria were:

* **editing**: 1 blog post = 1 text file, using [emacs](http://www.gnu.org/software/emacs/)
* **versioning**: blog source on git: command line diffing/committing/reverting of configuration and content
* **continuous integration**: fast build of local running instance to test configuration or content changes before releasing on production
* **releasing**: one-line ftp mirroring
* **performance**: fast page load
* **design**: minimalistic design, promoting the key content: no commenting or social network sharing (URL copy-pasting is fast and email works great), no ads

Their list of [jekyll-powered blogs](https://github.com/jekyll/jekyll/wiki/sites) is huge, it's a nice to-read pull-list. My favorite in design is **[Anup Jadhav's blog](http://anupjadhav.com/)**, so my blog looks very much like his. [@anupj](https://github.com/anupj/): thanks for making your personal blog open source!

You can find the [source code](https://github.com/isabellema/isabellema.github.com/) of my blog on github.com.

I started with some reverse engineering via Anup Jadhav's index page's source code, got a minimal jekyll install working with his design, and that was an excellent exercise. Forking his [github project](https://github.com/anupj/anupj.github.com), I then git cloned it, removed the copyrighted content, and patched the [_layouts](https://github.com/isabellema/isabellema.github.com/tree/master/_layouts) and [_config.yml](https://github.com/isabellema/isabellema.github.com/blob/master/_config.yml) with my changes.

**isabellema.github.com** now points to [isabellema.free.fr](http://isabellema.free.fr) thanks to [CNAME](https://github.com/isabellema/isabellema.github.com/blob/master/CNAME) file.

Hereunder are articles that helped me fix issues I faced while configuring this blog on Mac OS X, in the order I used them:

* [Jekyll Usage](http://jekyllrb.com/docs/usage/)
* [Jekyll Configuration](http://jekyllrb.com/docs/configuration/)
* [Jekyll Front Matter](http://jekyllrb.com/docs/frontmatter/)

* [Ruby Installation on Mac OS X](https://www.ruby-lang.org/en/documentation/installation/#homebrew)
* [Ruby Gems Installation](http://rubygems.org/pages/download)
* [XCode, Homebrew, Ruby Installation on Mac OS X](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/)

* [Font Awesome Get started](http://fortawesome.github.io/Font-Awesome/3.2.1/get-started/)
* **[Font Awesome Cheatsheet](http://fontawesome.io/cheatsheet/)**
* [Font Awesome Examples](http://fontawesome.io/examples/)

* [Listing Blog Posts on Jekyll](http://stackoverflow.com/questions/9794699/listing-all-the-blog-posts-with-content-with-jekyll)
* [Jekyll Basic Example](https://github.com/danielmcgraw/Jekyll-Base)
* **[How to deploy a jekyll site locally with css js and background images included](http://stackoverflow.com/questions/7985081/how-to-deploy-a-jekyll-site-locally-with-css-js-and-background-images-included/14254928#14254928)**
* **[Jekyll site root, base url](http://stackoverflow.com/questions/14322329/site-root-github-pages-vs-jekyll-server)**

* [Lftp Cheatsheet](http://www.russbrooks.com/2010/11/19/lftp-cheetsheet)

* **[Renaming a repository on github](https://help.github.com/articles/renaming-a-repository/)**

* **[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)**

Here are other jekyll-powered blogs whose minimalistic designs I enjoyed:

* [Writings by Miha Hribar](http://miha.hribar.info/) - MIT Licensed
* [Jigar Patel](http://jigarpatel.in/) - all rights reserved
* [Brett Hardin's Blog](http://bretthard.in/) - MIT Licensed
* [Derek Myers](http://derekmyers.com/) - MIT Licensed

This task was fun.

Documenting took the same time as installing and configuring. Next step will be automated testing :)
