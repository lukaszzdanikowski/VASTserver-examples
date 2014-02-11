var http = require('http'),
    VAST = require('vast-xml');

http.createServer(function (req, res) {
    var vast = new VAST(),
        ad = vast.attachAd({
            id: 1,
            structure: 'inline',
            sequence: 99,
            AdTitle: 'Common name of the ad',
            AdSystem: {
                name: 'Test Ad Server',
                version: '1.0'
            }
        });
    
    ad.attachImpression({
        id: "23",
        url: "http://impression.com"
    });
    
    ad.attachImpression({
        id: "sample-server",
        url: "http://sample-impression.com"
    });
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(vast.xml({ pretty : true, indent : '  ', newline : '\n' }));

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
