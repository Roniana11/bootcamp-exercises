const Bank = function () {
  let _money = 500;

  const depositeCash = function (cash) {
    _money += cash;
  };

  const checkBalance = function () {
    console.log(_money);
  };

  return {
    deposit: depositeCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
