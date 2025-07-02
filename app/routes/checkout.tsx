// import { FormEvent } from "react";
export default function Checkout(){
        const handleSubmit= (e: React.FormEvent<HTMLFormElement>): void =>{
            e.preventDefault();
                    alert("Order Placed")
        }
    return(
        <div style={{padding:"1rem", margin:5}}><h1>Welcome to checkout page</h1>
        <form style={{padding:"2rem", margin:2}} className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" placeholder="ibrahjim qo" required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" placeholder="123 Akinrogba St" required />
        </div>
        <div>
          <label>Payment Method:</label>
          <select required>
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div>
        <button type="submit">place your order</button>
        </div>
        </form>
        </div>
    )
}