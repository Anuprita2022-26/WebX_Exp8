app.service('AuthService', function () {
    var hardcodedUsername = "anuprita";
    var hardcodedPassword = "123456";

    this.authenticate = function (username, password) {
        return username === hardcodedUsername && password === hardcodedPassword;
    };
});
