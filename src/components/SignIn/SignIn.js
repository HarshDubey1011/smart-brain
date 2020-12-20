import React,{Component} from 'react';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state={
     emailenter:'',
     passwordenter:''
    }
  }
    onEmailenter=(event)=>{
     this.setState({emailenter:event.target.value});
    }
    onPasswordenter=(event)=>{
          this.setState({passwordenter:event.target.value});
    }
    onSubmitsignin=() =>{
      fetch('http://localhost:3000/signin',{
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          email:this.state.emailenter,
          password:this.state.passwordenter
        })

      })
      .then(response =>response.json())
      .then(user =>{
        if(user.id){
          this.props.loaduser(user);
          this.props.routechange('home');
        }else{
          alert('username or password is incorrect');
        }
      })

    }

  render(){
  const {routechange}=this.props;
    return(
<article className="br4 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center">
<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailenter} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onPasswordenter} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div className="center">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onSubmitsignin} type="submit" value="SignIn" />
    </div>
    <div className="lh-copy mt3 ">
      <button  className=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center" onClick={()=>routechange('register')}>Register</button>
    </div>
  </div>
</main>
</article>
);
  }
}

export default SignIn;