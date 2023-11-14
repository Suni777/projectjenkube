import { Button } from '@mui/material';
import React, { useState } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(localStorage.getItem('balance') || 0);
  const [transactionHistory, setTransactionHistory] = useState(
    JSON.parse(localStorage.getItem('transactionHistory')) || []
  );
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      const newBalance = +balance + depositAmount;
      setBalance(newBalance);
      updateTransactionHistory(`Deposit: +${depositAmount}`);
      setAmount('');
    } else {
      alert('Please enter a valid positive amount for deposit.');
    }
  };

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      if (+balance >= withdrawAmount) {
        const newBalance = +balance - withdrawAmount;
        setBalance(newBalance);
        updateTransactionHistory(`Withdraw: -${withdrawAmount}`);
        setAmount('');
      } else {
        alert('Insufficient funds');
      }
    } else {
      alert('Please enter a valid positive amount for withdrawal.');
    }
  };

  const updateTransactionHistory = (transaction) => {
    const newHistory = [...transactionHistory, transaction];
    setTransactionHistory(newHistory);
    localStorage.setItem('balance', balance);
    localStorage.setItem('transactionHistory', JSON.stringify(newHistory));
  };

  return (
    <div>
      <h2>Wallet Balance: {balance}</h2>
      <div>
        <label>
          Enter Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <Button onClick={handleDeposit}>Deposit</Button>
      <Button onClick={handleWithdraw}>Withdraw</Button>
    </div>
  );
};

export default Wallet;
