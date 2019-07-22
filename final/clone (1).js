(function () {

    function isObject(data) {
        return typeof data === 'object';
    }

    console.log(isObject([]))

    function isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]';
    }

    function clone(data) {
        let copied;

        if (!isObject(data) || data === null) {
            copied = data;
            return copied;
        }

        if (isArray(data)) {
            copied = [];

            for (var i = 0; i < data.length; i++) {
                copied[i] = clone(data[i]);
            }

            return copied;
        }

        copied = {};

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (!isObject(data)) {
                    copied[key] = data[key];
                } else {
                    copied[key] = clone(data[key]);
                }
            }
        }

        return copied;
    }

}());
