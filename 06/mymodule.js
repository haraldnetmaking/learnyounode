var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext, callback) {
    var reader = fs.readdir(folder, function(err, list) {
        if(err) {
            return callback(err);
        }
        var data = [];
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == '.' + ext) {
                data.push(list[i]);
            }
        };
        callback(null, data);
    });
}
