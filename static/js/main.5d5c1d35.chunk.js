(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),c=(a(13),a(1)),i=a(2),d=a(4),m=a(3),l=a(5),p=(a(14),a(15),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleKeyDown=function(e){e.keyCode===a.props.letter.charCodeAt()&&(a.audio.play(),a.audio.currentTime=0,a.props.handleDisplay(a.props.id))},a.handleClick=function(){a.audio.play(),a.audio.currentTime=0,a.props.handleDisplay(a.props.id)},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick},r.a.createElement("h1",null,this.props.letter),r.a.createElement("audio",{ref:function(t){return e.audio=t},className:"clip",src:this.props.sound,id:this.props.letter}))}}]),t}(n.Component)),u=[{id:"Heater-1",letter:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:"Heater-2",letter:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:"Heater-3",letter:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:"Heater-4",letter:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{id:"Clap",letter:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:"Open-HH",letter:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Kick-n-Hat",letter:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:"Kick",letter:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:"Closed-HH",letter:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleDisplay=function(e){return a.setState({display:e})},a.state={display:"Click or Press the Key to show the name of the sound"},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"drum-machine"},r.a.createElement("h1",null,"Drum Machine"),r.a.createElement("div",{id:"display"},this.state.display),r.a.createElement("div",{id:"drum-pads"},u.map((function(t){return r.a.createElement(p,{id:t.id,letter:t.letter,sound:t.src,handleDisplay:e.handleDisplay})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5d5c1d35.chunk.js.map