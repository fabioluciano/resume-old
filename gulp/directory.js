module.exports = (function () {
        var source = (function () {
            var root = 'source/',
                assets = function () {
                    return root + 'assets/';
                },
                javascript = function () {
                    return assets() + 'javascript/';
                },
                less = function () {
                    return assets() + 'less/';
                },
                jade = function () {
                    return root + 'jade/';
                },
                image = function () {
                    return assets() + 'image/'
                };

            return {
                root : root,
                assets : assets(),
                javascript :  javascript(),
                less :  less(),
                jade : jade(),
                image : image()
            };
        }()),
            target = (function () {
                var root = 'target/',
                    assets = function () {
                        return root + 'assets/';
                    },
                    javascript = function () {
                        return assets() + 'javascript/';
                    },
                    stylesheet = function () {
                        return assets() + 'stylesheet/';
                    },
                    image = function () {
                        return assets() + 'image/';
                    };

                return {
                    root :  root,
                    assets :  assets(),
                    javascript : javascript(),
                    stylesheet : stylesheet(),
                    image : image()
                };
            }());

        return {
            source : source,
            target : target
        };
}());
