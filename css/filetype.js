app.get('*', function response(req, res) {
        var extension = path.extname(req.url);
        var name = req.url.split('/').pop();
        switch (extension) {
            case '.css':
                res.setHeader("Content-Type", 'text/css');
                res.write(fs.readFileSync(path.join(__dirname, 'dist' + req.url)));
                res.end();
                break;
            case '.png':
                res.setHeader("Content-Type", 'image/png');
                res.write(fs.readFileSync(path.join(__dirname, 'dist' + req.url)));
                res.end();
                break;
            case '.jpg':
                res.setHeader("Content-Type", 'image/jpeg');
                res.write(fs.readFileSync(path.join(__dirname, 'dist' + req.url)));
                res.end();
                break;
            default:
                res.setHeader("Content-Type", 'text/html');
                if (name == 'index.html') {
                    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
                    res.end();
                } else {
                    fs.exists(path.join(__dirname, 'dist' + req.url), function (exists) {
                        console.log(exists);
                        if (exists) {
                            res.write(fs.readFileSync(path.join(__dirname, 'dist' + req.url)));
                            res.end();
                        }
                    });
                }
                break;
        }
    });
