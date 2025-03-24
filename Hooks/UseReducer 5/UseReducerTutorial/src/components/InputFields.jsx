import { useId, useReducer, useState } from "react";

/**
 * Reducer function to manage the balance state
 * @param {Object} state - The current state object (e.g., { balance: 0 })
 * @param {Object} action - The action object containing the type and amount
 * @returns {Object} - The updated state after applying the action
 */
function reducer(state, action) {
    switch (action.type) {
        case "addMoney":
            return { balance: state.balance + action.amount }; // Increase balance  and (  return the new value for the balance object of useReducer  )
        case "withdraw":
            return { balance: state.balance - action.amount }; // Decrease balance and (  return the new value for the balance object of useReducer  )
        default:
            return state; // Return current state if action is unknown
    }
}

export default function Form() {

    const username  = useId();
    console.log(username);


    const username2  = useId();
    console.log(username);
    
    // useState to track the input amount
    const [amount, setAmount] = useState();

    // useReducer to manage the balance state
    const [state, dispatch] = useReducer(reducer, { balance: 0 });

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Balance Tracker</h1>

            {/* Display current balance */}
            <h2>Current Balance: ₹{state.balance}</h2>

            {/* Input field to enter the amount */}
            <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))} 
                placeholder="Enter amount"
                style={{ padding: "8px", marginRight: "10px" }}
            />

            {/* Button to add money to the balance */}
            <button 
                onClick={() => dispatch({ type: "addMoney", amount })} 
                style={{ padding: "8px 15px", marginRight: "5px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}
            >
                ADD
            </button>

            {/* Button to withdraw money from the balance */}
            <button 
                onClick={() => dispatch({ type: "withdraw", amount })} 
                style={{ padding: "8px 15px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}
            >
                Withdraw
            </button>
        </div>
    );
}
