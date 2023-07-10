"use strict";

class Bankingsystem{
    constructor(){
        this.banks = [];
    }

    transfer(fromBankNr, toBankNr, fromAccountNr, toAccountNr, amount, text){
        let bankFrom = this.getBank(fromBankNr);
        let bankTo = this.getBank(toBankNr);
        let accountFrom = this.getAccount(fromAccountNr);
        let accountTo = this.getAccount(toAccountNr);
        if(bankFrom == false || bankTo == false || accountFrom == false || accountTo == false){
            console.error("Nope");
            return false;
        }
        accountFrom.addTransaction(amount, text, accountTo, new Date());
    }

    getBank(number){
        for(const bank of this.banks){
            if(bank.number == number)
                return bank;
        }
        return false;
    }

    getAccount(number){
        for(const bank of this.banks){
            for(const account of bank.accounts){
                if(account.accountNumber == number)
                    return account;
            }
        }
        return false;
    }
}

class Bank{
    constructor(number, name){
        this.number = number;
        this.name = name;
        this.accounts = [];
    }
}

class Account{
    constructor(accountNumber, creditInterestRate, borrowingRate, balance){
        this.accountNumber = accountNumber;
        this.creditInterestRate = creditInterestRate;
        this.borrowingRate = borrowingRate;
        this.balance = balance;
        this.transactions = [];
    }

    addTransaction(amount, text, receiver, date){
        if(this.balance >= amount){
            this.balance -= amount;
            this.transactions.push(new Transaction(amount, text, receiver, date));
        } else
            console.warn("Please be more rich.");
    }
}

class PremiumAccount extends Account{
    constructor(accountNumber, creditInterestRate, borrowingRate, balance, interestMarkup){
        super(accountNumber, creditInterestRate, borrowingRate, balance);
        this.interestMarkup = interestMarkup;
    }
}

class Customer{
    constructor(svnr, name) {
        this.svnr = svnr; //erfunden
        this.name = name; //erfunden
        this.accounts = [];
    }
}

class Transaction{
    constructor(amount, text, receiver, date){
        this.amount = amount;
        this.text = text;
        this.receiver = receiver;
        this.date = date;
    }
}

