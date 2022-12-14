import { Component } from "react";

class Profil extends Component {
  state = {
    fullname: 'Tlijani Hachem',
    profession: 'Manager',
    imgprofil: './hachem.jpg',
    
}
    render(){ 
     return <div className="container mt-5 ">
      <div className="card p-3">
        <div className="d-flex ">
          <div className="image">
          <img src={this.state.imgprofil} alt="" width={150} />
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{this.state.fullname}</h4>
            <span>{this.state.profession}</span>
            
              <div className="d-flex ">
                <span className="number1">{this.state.counter}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    
   
  }}

  export default Profil 