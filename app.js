var harvester = require('harvesterjs'),
    joi = require('joi'),
    options = {
        adapter: 'mongodb',
        connectionString: 'mongodb://db:27017/mydb',
        inflect: true
    };

var app = harvester(options);

app.resource('artist', {
    name: joi.string()
});

app.resource('album', {
    title: joi.string(),
    links: {
        artist: 'artist'
    }
});

app.listen(8000);
