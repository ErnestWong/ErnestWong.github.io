all: jade move download-resume

jade:
	@jade views/index.jade
	@echo compiled jade index file

move:
	@mv views/index.html index.html
	@echo moved index file

url = https://raw.githubusercontent.com/ErnestWong/resume/master/one-column-resume/ErnestWong.pdf
download-resume:
	@wget $(url) -O ernest-resume.pdf
	@echo downloaded resume from github

