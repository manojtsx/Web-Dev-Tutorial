var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance.");
        }
    };
    return BankAccount;
}());
var account = new BankAccount();
console.log(account.balance);
account.deposit(100);
console.log(account.balance);
account.withdraw(50);
console.log(account.balance);
account.withdraw(100);
console.log(account.balance);
