"use client";

export default function AmountSetter({ amount, setAmount }) {
    const increment = () => setAmount((prev) => prev + 1);
    const decrement = () => setAmount((prev) => prev - 1);
    const min = 1;

    return (
        <div className="amount-setter-container">
        <button
            type="button"
            onClick={decrement}
            disabled={amount <= min}
            className="amount-btn decrement-btn"
            aria-label="Decrease amount"
        >
            −
        </button>

        <input
            type="number"
            value={amount}
            readOnly
            min={min}
            className="amount-input"
        />

        <button
            type="button"
            onClick={increment}
            className="amount-btn increment-btn"
            aria-label="Increase amount"
        >
            +
        </button>
        </div>
    );
}