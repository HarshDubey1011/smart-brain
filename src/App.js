import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkform from './components/ImageLinkform/ImageLinkform';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import Facerecognition from './components/Facerecognition/Facerecognition';
import 'tachyons';
import Particles from 'react-particles-js';
import './App.css'




let app = new Clarifai.App({
 apiKey: '99a33c1940e44125a0817b943ee7de98'
});

const particlesoption ={
  
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 20
                    }
                  }
                }
              }
class App extends Component{
  constructor() {
    super();
    this.state = {
      input:'',
      imageurl:'',
      box:{},
      route:'signin',
      isSignedin:false,
      user:{
        id:'',
        name:'',
        password:'',
        email:'',
        entries:0,
        joined:''     
     }
    }
  }
onloaduser=(data)=>{
  this.setState({user:{
    id:data.id,
    name:data.name,
    password:data.password,
    email:data.email,
    entries:data.entries,
    joined:data.joined
  }})
}

onFacedetect=(data)=>{
var clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
var image=document.getElementById('imageinput');
var width= Number(image.width);
var height= Number(image.height);
return{
  leftcol:clarifaiface.left_col * width,
  toprow:clarifaiface.top_row * height,
  rightcol:width-(clarifaiface.right_col * width),
  bottomrow:height-(clarifaiface.bottom_row * height)
}

  }

displayface =(box) => {
  this.setState({box});
}

onInputurl =(event) =>{
this.setState({input: event.target.value});
}
onSubmitButton =() =>{
this.setState({imageurl: this.state.input});

app.models.predict
({id: Clarifai.FACE_DETECT_MODEL},
 this.state.input)
      .then(response =>{
      if(response){
              fetch('http://localhost:3000/image',{
        method:'put',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          id:this.state.user.id
        })
      })
        .then(response => response.json())
        .then(count =>{
         this.setState(Object.assign(this.state.user,{entries:count}))
        })
        }      
        this.displayface(this.onFacedetect(response))
      })
      .catch(err=>{
console.log(err);
      });
}

onroutechange =(route) =>{
  if(route==='signout'){
    this.setState({isSignedin:false})
  }else if(route==='home'){
    this.setState({isSignedin:true})
  }
  this.setState({route});
}


render(){
  return(
            
<div>
              <Particles className='particles' params={particlesoption}/>
              <Navigation isSignedin={this.state.isSignedin} navroute={this.onroutechange} />
              {this.state.route==='home'
                    ?<div>
                    <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkform Inputurl={this.onInputurl} ButtonSubmit={this.onSubmitButton}/>
          <Facerecognition box={this.state.box} Imageurl={this.state.imageurl} />
          </div>
          :(
       this.state.route==='signin'
?<SignIn loaduser={this.onloaduser} routechange={this.onroutechange}/>
:<Register loaduser={this.onloaduser} routechange={this.onroutechange} />
            )
              
         
        }
</div>

    );
}
}
export default App;



