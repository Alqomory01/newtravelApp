import {Link} from "react-router-dom"

export default function Index () {
  return(
    <div>
      <h1>Welcome to the Travel List App!</h1>
      <div style={{display:"flex", justifyContent:"center"}}> <p>Start your journey by selecting a page from the navigation bar.</p></div>
      <div style={{display:"flex", justifyContent:"center"}}><Link to="/home" style={{marginTop:"20px",marginLeft:10, padding:"10px 20px", backgroundColor:"rgb(75, 0, 128)",color:"white", textDecoration:"none",borderRadius:10, display:"inline-block" }}>Go to travel App</Link></div>
    </div>
    )
}