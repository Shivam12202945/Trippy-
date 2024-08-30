import "../components/ContactFormStyles.css";
function Signup(){
    return (
        <div className="form-container">
        <h1>Register</h1>
        <form>
          <input placeholder="Name"/>
          <input placeholder="Email"/>
          <input placeholder="Password"/>
          <input placeholder="Conform Password"/>
          
          <button>Submit</button>
  
        </form>
         </div>
    )
}
export default Signup;