"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
var Pool = /** @class */ (function () {
    function Pool() {
        var guild = Math.random() * 10;
        this.id = parseInt(((Math.random() * 10000) / 100).toString());
        this.users = [];
        this.capacity = 2;
        this.endsIn = addMinutes(new Date(), 15);
    }
    Pool.prototype.canAddMore = function () {
        return this.capacity > this.users.length;
    };
    Pool.prototype.addUser = function (userID) {
        if (this.canAddMore()) {
            this.users.push({ id: userID, score: 0 });
        }
    };
    Pool.prototype.updateUser = function (users) {
        this.users = users;
    };
    return Pool;
}());
exports.default = Pool;
