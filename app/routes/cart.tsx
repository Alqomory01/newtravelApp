import { useNavigate } from "react-router-dom"
export default function Cart(){
    const navigate = useNavigate();
    const handlecheckout: (e: React.MouseEvent<HTMLButtonElement>)=>void =(e) => {
        e.preventDefault
        navigate("/checkout")
    }
    return(
        <div>
            <h3>Your Shopping cart</h3>
            <p>items: 3</p>
            <p>welcome to cart page</p>
            <button onClick={handlecheckout} >proceed to checkout</button></div>
    )
}