import React,{Component} from 'react';


class Register extends Component {
  constructor(){
    super();
    this.state={
    onnametype:'',
    onemailtype:'',
    onpasswordtype:''
    }
  }
  onemailentered =(event) =>{
    this.setState({onemailtype:event.target.value});
  }
  onnameentered=(event) =>{
    this.setState({onnametype:event.target.value});
  }
  onpasswordentered=(event) =>{
    this.setState({onpasswordtype:event.target.value});
  }


      onSubmitsignin=() =>{
      fetch('http://localhost:3000/register',{
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          email:this.state.onemailtype,
          password:this.state.onpasswordtype,
          name:this.state.onnametype

        })

      })
      .then(response =>response.json())
      .then(user =>{
        if(user){
          this.props.loaduser(user);
          this.props.routechange('home');
        }
        }
      )

    }


  render(){
	return(
       <article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center">

<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0 center">Register</legend>
       <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
        <input onChange={this.onnameentered} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Register-name" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onemailentered} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onpasswordentered} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div className="lh-copy mt3 ">
      <button  className=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" onClick={this.onSubmitsignin}>SignUp</button>
    </div>
  </div>
</main>
</article>
		);

}
}
export default Register;