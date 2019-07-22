(function() {

    function isObject(data) {

        return typeof data === 'object';

    }

    function isArray(data) {

        return Object.prototype.toString.call(data) === '[object Array]';
    }
   
    function clone(data) {

        var copied;

        if (!isObject(data) || data === null) {

            copied = data;
            return copied;

        }

        if (isArray(data)) {

            copied = [];

            for (var i = 0; i < data.length; i++) {
                copied[i] =  clone(data[i]);
            }
          
            return copied;
        }

        copied = {};

        // data must be an object
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (!isObject(data[key])) {
                    copied[key] =  data[key];
                } else {
                    copied[key] = clone(data[key]);
                }
            }

        }

        return copied;

    }

    //var test = {
    //    name: 'jon', age: 34, address: {
    //        city: "New York",
    //        population: '20 million'
    //    },
    //    grades: [70, 88, 99, 100, 'you are the best']
    //};
    var persons = [
        {
            name: "john",
            age: 33
        },
        {
            name: "mary",
            age: 27
        }
    ];

    var result = clone(persons);

    console.dir(result);


} ());
