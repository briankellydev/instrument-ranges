(window["webpackJsonpinstrument-ranges"]=window["webpackJsonpinstrument-ranges"]||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(17),r=n.n(i),c=(n(23),n(2)),l=n(3),m=n(6),o=n(4),u=n(7),d=n(5),h=(n(24),n(25),n(26),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"ListSelection".concat(this.props.active?" active":"")},this.props.name,s.a.createElement("i",{className:"fa fa-caret-right"}))}}]),t}(s.a.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"List"},s.a.createElement("h2",null,this.props.name),this.props.listItems.map((function(t,n){return s.a.createElement("div",{key:n,onClick:function(){return e.props.itemSelected(t)}},s.a.createElement(h,{name:t,active:e.props.activeItem===t}))})))}}]),t}(s.a.Component),f=(n(27),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Instrument"},s.a.createElement("h2",null,this.props.instrument.name),s.a.createElement("div",null,s.a.createElement("img",{src:this.props.instrument.imgUrl})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"bold"},"Key")," ",this.props.instrument.key),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"bold"},"Range (written)")," ",this.props.instrument.rangeBottom,"-",this.props.instrument.rangeTop)))}}]),t}(s.a.Component)),v=n(28).default,y={families:[],lists:[],instrumentDisplayed:[],selectedInstrument:"",selectedFamily:"",instruments:[]},E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this,y,{}))).state=y,v.get("/api/families").then((function(t){e.setState({families:t.data,lists:[s.a.createElement("div",{key:"0",className:"col-3"},s.a.createElement(p,{name:"Families",listItems:t.data,activeItem:e.state.selectedFamily,itemSelected:e.selectFamily.bind(Object(u.a)(e))}))]})})),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("h1",null,"Common Instrument Ranges")),s.a.createElement("div",{className:"AppBody"},s.a.createElement("div",{className:"row"},this.state.lists,s.a.createElement("div",{className:"col-6",key:"2"},this.state.instrumentDisplayed))))}},{key:"selectFamily",value:function(e){var t=this;v.get("/api/instruments/?family=".concat(e)).then((function(n){t.setState({instrumentDisplayed:[],selectedInstrument:"",selectedFamily:e,instruments:n.data}),t.renderLists(e,"")}))}},{key:"selectInstrument",value:function(e){this.setState({instrumentDisplayed:[s.a.createElement(f,{instrument:this.chooseInstrument(e)})],selectedInstrument:e}),this.renderLists(this.state.selectedFamily,e)}},{key:"filterInstruments",value:function(e){return e.map((function(e){return e.name}))}},{key:"chooseInstrument",value:function(e){return this.state.instruments.find((function(t){return t.name===e}))||{name:"",key:"",imgUrl:"",family:"",rangeTop:"",rangeBottom:""}}},{key:"renderLists",value:function(e,t){this.setState({lists:[s.a.createElement("div",{key:"0",className:"col-3"},s.a.createElement(p,{name:"Families",listItems:this.state.families,activeItem:e,itemSelected:this.selectFamily.bind(this)})),s.a.createElement("div",{key:"1",className:"col-3"},s.a.createElement(p,{name:"Instruments",listItems:this.filterInstruments(this.state.instruments),activeItem:t,itemSelected:this.selectInstrument.bind(this)}))]})}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.cc6e5026.chunk.js.map