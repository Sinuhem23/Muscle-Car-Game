(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"name":"Ford Mustang Eleanor","image":"https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2017/07/09162729/Eleanor-Mustang-5-1000x666.jpg"},{"id":2,"name":"Dodge Challenger","image":"https://data.whicdn.com/images/297932989/original.jpg"},{"id":3,"name":"Shelby Mustang GT350","image":"https://mocah.org/uploads/posts/5000557-ford-mustang-shelby-ford-2019-cars-hd-behance.jpg"},{"id":4,"name":"Ford Mustang BOSS 302","image":"https://cdn.motor1.com/images/mgl/eX07K/s1/check-out-robert-downey-jr-s-1970-ford-mustang-boss-302.jpg"},{"id":5,"name":"Dodge Challenger Classic","image":"https://c4.wallpaperflare.com/wallpaper/273/755/675/fast-and-furious-dodge-charger-car-muscle-cars-wallpaper-preview.jpg"},{"id":6,"name":"Pontiac Firebird 1970","image":"https://images7.alphacoders.com/298/thumb-1920-298002.jpg"},{"id":7,"name":"Dodge Challenger Demon","image":"https://s3.amazonaws.com/ntbrand-wp/topspeedmotors/wp-content/uploads/2018/04/15143427/Top_Speed_American_Muscle_Cars_5a7de5e843dc0ee1383d83d1.jpeg"},{"id":8,"name":"Ford Mustang Classic","image":"https://wallup.net/wp-content/uploads/2016/01/111557-muscle_cars-Ford_Mustang-red-car-748x421.jpg"},{"id":9,"name":"Equus Bass 770","image":"https://mensgear.net/wp-content/uploads/2017/03/Equus-Bass-770-Muscle-Car-7.jpg"},{"id":10,"name":"Plymouth Barracuda 1969","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrIp5KscKmrSw96LkfNJBIZAbIbExQZEVXqTiKdIwBzAgyxWe&s"},{"id":11,"name":"Cherolet Camaro SS 1973","image":"https://cimg1.ibsrv.net/cimg/www.ls1tech.com/1600x900_85-1/905/camaro-4-489905.png"},{"id":12,"name":"Chevrolet Camaro ZL1","image":"https://specials-images.forbesimg.com/imageserve/5d112209142c500008c71504/960x0.jpg?fit=scale"}]')},24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),i=a(5),l=a(16),o=a(9),m=a(17),u=a(18),p=a(21),d=(a(29),function(e){var t=e.id,a=e.name,n=e.image,c=e.handlePicked;return r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:t,"data-id":t,name:a,style:{backgroundImage:"url(".concat(n,")")},onClick:c}))}),g=a(53),h=function(e){return r.a.createElement(g.a,e,e.children," ")},f=a(38),b=function(e){return r.a.createElement(f.a,null,e.children)},E=(a(33),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),y=(a(34),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",null," Click an image to begin!"))}),O=a(20),k=a(54),C=a(55),j=a(56),w=function(e){return r.a.createElement("div",null,r.a.createElement(k.a,Object.assign({position:"static"},e),r.a.createElement(C.a,null,r.a.createElement(j.a,{variant:"headline",color:"inherit",align:"center"},"Clicky | Muscle Car Game"))))},v=a(57),S=(a(35),function(e){return r.a.createElement(v.a,e,e.children)});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cars:O,pickedCars:[],topScore:0,alertMessage:""},a.handlePicked=function(e){var t=e.target.attributes.getNamedItem("name").value;a.shuffleCars(),a.checkGuess(t,a.updateTopScore)},a.shuffleCars=function(){a.setState(a.state.cars=a.shuffleArray(a.state.cars))},a.shuffleArray=function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},a.checkGuess=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state);n.pickedCars.includes(e)?(n.alertMessage='YOU LOSE, ALREDY PICKED "'.concat(e.toUpperCase(),'"!'),n.pickedCars=[],a.setState(a.state=n)):(n.pickedCars.push(e),n.alertMessage="GOOD CHOICE",a.setState(a.state=n)),t(n,a.alertWinner)},a.updateTopScore=function(e,t){e.pickedCars.length>e.topScore&&(e.topScore++,a.setState(a.state=e)),t(e)},a.alertWinner=function(e){6===e.pickedCars.length&&(e.alertMessage="YOU WIN!",e.pickedCars=[],a.setState(a.state=e))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w,{style:{background:"#313133",marginBottom:"5px"}}),r.a.createElement(h,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(h,{item:!0,lg:12},r.a.createElement(b,null,"GOOD CHOICE!"===this.state.alertMessage?r.a.createElement(y,{message:this.state.alertMessage,style:{color:"red "}}):r.a.createElement(y,{message:this.state.alertMessage,style:{color:"green"}}))),r.a.createElement(h,{container:!0,justify:"space-between"},r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(b,null,r.a.createElement(E,{type:"Score",score:this.state.pickedCars.length}))),r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(b,null,r.a.createElement(E,{type:"Top Score",score:this.state.topScore}))))),r.a.createElement(h,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.cars.map((function(t){return r.a.createElement(h,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(d,{id:t.id,name:t.name,image:t.image,key:t.id,handlePicked:e.handlePicked}))}))),r.a.createElement(S,{style:{background:"#313133",marginTop:"17.5px",paddingTop:"15px",borderTop:"2.5px solid slategray"}},r.a.createElement("a",{href:"https://github.com/Sinuhem23",target:"_blank",rel:"noopener noreferrer",className:"link",alt:"github-link"},r.a.createElement("i",{className:"fab fa-github fa-2x"}))))}}]),t}(n.Component);a(36);s.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.10b9c872.chunk.js.map