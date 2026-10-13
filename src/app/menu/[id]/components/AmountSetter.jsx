export default function AmountSetter({amount , setAmount}){
    
    const increment = () => { setAmount( prev => prev + 1)}
    const decrement = () => { setAmount( prev => prev - 1)}

    let min = 1;
        

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '6px', overflow: 'hidden' }}>
            <button 
                type="button"
                onClick={decrement}
                disabled={amount <= min}
                style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
            >
                −
            </button>

            <input
                type="number"
                value={amount}
                // if i set a value then there should be onChange to allow the user to change the value
                readOnly
                // but I want the buttons to be the one changing the value
                min={min}
                style={{ width: '48px', height: '36px', textAlign: 'center', border: 'none', outline: 'none' }}
            />

            <button 
                type="button"
                onClick={increment}
                style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
            >
                +
            </button>
        </div>

    )
}