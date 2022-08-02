import {Link} from 'react-router-dom'
import '../App.css';

function Home(){
    return (
      
      <div id="homeCard">
        <div className="card" id="card1" style={{position: 'absolute', textAlign: 'center'}}>
        <h5 className="card-title"  style={{fontSize: 30 + "px", fontWeight: 'bold', color: "beige"}}>Welcome to Global Bank</h5>
          <p className="card-text" style={{fontSize: 12 + "px", fontStyle: 'italic', color: "beige" }}>Taking your money further. Instant worldwide connection.</p>
         
          <img src="https://www.wgtn.ac.nz/__data/assets/image/0008/718541/rsz-multi-cultural-face-nz.jpg" className="card-img-top" alt="globe" id="homeImg" style={{width: 500 + 'px', position: 'relative',}}/>
        <div className="card-body" id="homeBody">
    
          <Link to="/createaccount"><button type="submit" className="btn btn-primary" id="createAcctBtn" style={{fontSize: 20 + "px", fontWeight: 'bold', backgroundColor: "gold", opacity: .85}}>Sign up today!</button></Link>
        </div>
        </div>
      </div>
    
   
    );  
  }

  export default Home;
