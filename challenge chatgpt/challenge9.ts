class BankAccount{
    balance : number = 0;
    deposit (amount : number):void{
        this.balance += amount;
    }
    withdraw (amount : number):void{
        if(this.balance >= amount){
            this.balance -= amount;
        }else{
            console.log("Insufficient balance.")
        }
    }
}

var account = new BankAccount();
console.log(account.balance);
account.deposit(100);
console.log(account.balance);
account.withdraw(50);
console.log(account.balance);
account.withdraw(100);
console.log(account.balance);
