(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{120:function(e,t,n){"use strict";var a=n(38),r=n(0),c=n.n(r),o=n(33),i=n.n(o),l=n(15),s=n(16);t.a=i()(Object(s.withStyles)(function(e){return{fullHeightMinusNavBar:Object(a.a)({minHeight:"calc(100vh - 56px)"},e.breakpoints.up("sm"),{minHeight:"calc(100vh - 64px)"}),fullHeight:{minHeight:"100vh"},containerCenter:{display:"flex",flexDirection:"column",justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},noPadding:{padding:0},marginTopNavBar:Object(a.a)({marginTop:"56px"},e.breakpoints.up("sm"),{marginTop:"64px"})}}),Object(l.L)())(function(e){return c.a.createElement("div",{className:"\n\t\t\t".concat(e.fluid?"container-fluid":"container","\n\t\t\t").concat(e.className?e.className:"","\n\t\t\t").concat(e.fullHeightMinusNavBar?e.classes.fullHeightMinusNavBar:"","\n\t\t\t").concat(e.fullHeight?e.classes.fullHeight:"","\n\t\t\t").concat(e.marginTopNavBar?e.classes.marginTopNavBar:"","\n\t\t\t").concat(e.noPadding?e.classes.noPadding:"","\n\t\t\t").concat(e.center?e.classes.containerCenter:"","\n\t\t")},e.children)})},121:function(e,t,n){"use strict";var a=n(53),r=n(0),c=n.n(r),o=n(198),i=n.n(o),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,a=n?"".concat(n,"/"):"";return"".concat("https://res.cloudinary.com/codestar/image/upload","/")+"f_auto/w_".concat(t,"/").concat(a)+"".concat("v1542784068","/")+"".concat("codestar.nl")+"".concat(e)};n.d(t,"b",function(){return l});var s=function(e,t,n){return t.map(function(t){return"".concat(l(e,t,n)," ").concat(t,"w")}).join(", ")},u="100w",m=[375,800,1280,1536,1920];t.a=function(e){var t=e.title,n=void 0===t?"":t,r=e.alt,o=void 0===r?"":r,l=e.path,h=e.sizes,p=void 0===h?u:h,f=e.versions,d=void 0===f?m:f,g=e.asBackgroundImage,b=void 0!==g&&g,v=e.effect,E=Object(a.a)(e,["title","alt","path","sizes","versions","asBackgroundImage","effect"]);return l&&c.a.createElement("img",Object.assign({},function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u,r=arguments.length>4?arguments[4]:void 0;return{src:"".concat("/codestar-website-react").concat(e),srcSet:s(e,n,r),sizes:a,alt:t}}(l,o,d,p,v),{alt:o,title:n,className:"\n\t\t\t\t  ".concat(b?i.a.asBackgroundImage:"","\n\t\t\t\t  ").concat(e.className?e.className:"","\n\t\t\t\t").trim()},E))}},176:function(e,t,n){"use strict";var a=n(38),r=n(0),c=n.n(r),o=n(33),i=n.n(o),l=n(15),s=n(16);t.a=i()(Object(s.withStyles)(function(e){return{halfHeightMinusHalfNavBar:Object(a.a)({minHeight:"calc(50vh - 28px)"},e.breakpoints.up("sm"),{minHeight:"calc(50vh - 32px)"})}}),Object(l.L)())(function(e){return c.a.createElement("iframe",{className:e.halfHeightMinusHalfNavBar?e.classes.halfHeightMinusHalfNavBar:"",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.212619226339!2d5.109273615790301!3d52.057652079729266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c665c3d22bd00b%3A0xdcea00cdfeb9dd58!2sCodestar!5e0!3m2!1sen!2snl!4v1519930704938",width:"100%",frameBorder:"0",style:{border:0,display:"block"},allowFullScreen:!0,title:"Map"})})},177:function(e,t,n){"use strict";t.a=[{name:"Senior Scala Developer",path:"scala",image:"/images/jobs/codestar_2.png"},{name:"Junior Scala Developer",path:"scala_jr",image:"/images/jobs/codestar_4.png"},{name:"Big Data Engineer",path:"big_data",image:"/images/jobs/codestar_6.png"},{name:"Front-End Developer",path:"front_end",image:"/images/jobs/codestar_3.png"}]},191:function(e,t,n){"use strict";n.d(t,"c",function(){return h}),n.d(t,"a",function(){return g}),n.d(t,"b",function(){return w});var a,r=n(19),c=n.n(r),o=n(31),i=[],l=[];function s(e){return"https://".concat("hjoutysc5k",".execute-api.eu-west-1.amazonaws.com/").concat("test","/").concat(e)}function u(){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=s("get-upcoming-events"),e.next=4,fetch(t).then(function(e){return e.json()});case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}},e,this,[[0,8]])}))).apply(this,arguments)}function h(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.length?i:u());case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=s("get-past-events"),e.next=4,fetch(t).then(function(e){return e.json()});case 4:return l=e.sent,e.abrupt("return",l);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}},e,this,[[0,8]])}))).apply(this,arguments)}function g(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.length?l:f());case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function v(){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=s("get-recent-tweets"),e.next=4,fetch(t).then(function(e){return e.json()});case 4:return a="string"===typeof(a=e.sent)?JSON.parse(a):a,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}},e,this,[[0,9]])}))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a||v());case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}},198:function(e,t,n){e.exports={asBackgroundImage:"ResponsiveImage_asBackgroundImage__2w6dh"}},37:function(e,t,n){"use strict";var a=n(118),r=n(196),c=n.n(r),o=n(197),i=n.n(o),l=n(44);a.a.use(c.a).use(i.a).use(l.a).init({fallbackLng:"nl",whitelist:["nl","en"],ns:["translations"],defaultNS:"translations",debug:!1,interpolation:{escapeValue:!1},react:{wait:!0},backend:{loadPath:"".concat("/codestar-website-react","/locales/{{lng}}/{{ns}}.json")}}),t.a=a.a},41:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),c=n(15),o=function(e){return r.a.createElement(c.c,e)}},5463:function(e,t,n){e.exports=n(5649)},5469:function(e,t,n){},5649:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=(n(5468),n(5469),n(25)),l=n(26),s=n(28),u=n(27),m=n(29),h=n(5656),p=n(5655),f=n(5653),d=n(5654),g=n(192),b=n.n(g),v=n(15),E=n(16),w=Object(E.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0,fontSize:16}}),y=n(194),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component),j=Object(y.a)(x),k=n(120),O=n(176),N=n(42),S=n(43),H=n(5651),B=Object(H.a)(function(e){return r.a.createElement("footer",null,r.a.createElement(k.a,{fluid:!0},r.a.createElement("div",{className:"row bg-dark"},r.a.createElement("div",{className:"col-12 col-sm-6 mt-auto pt-3"},r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:codestar@ordina.nl",className:"text-white"},"codestar@ordina.nl")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"tel:+31306637000",className:"text-white"},"+31 30 6637000")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://maps.google.com/maps?ll=52.057652,5.111462&z=16&t=m&hl=en-GB&gl=NL&mapclient=embed&cid=15918536717636328792",target:"_blank",rel:"noopener noreferrer",className:"text-white"},"Ringwade 1, 3439 LM Nieuwegein")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://twitter.com/codestar_nl",className:"text-white","aria-label":"Twitter"},r.a.createElement(N.a,{icon:S.f,size:"3x",className:"px-2"})),r.a.createElement("a",{href:"https://github.com/code-star",className:"text-white","aria-label":"Github"},r.a.createElement(N.a,{icon:S.b,size:"3x",className:"px-2"})),r.a.createElement("a",{href:"https://medium.com/codestar-blog",className:"text-white","aria-label":"Medium"},r.a.createElement(N.a,{icon:S.d,size:"3x",className:"px-2"})),r.a.createElement("a",{href:"https://www.linkedin.com/company/codestar-powered-by-ordina/",className:"text-white","aria-label":"Linkedin"},r.a.createElement(N.a,{icon:S.c,size:"3x",className:"px-2"})),r.a.createElement("a",{href:"https://www.youtube.com/channel/UCqwHhJNEUe7D-HGsX4zvKzQ",className:"text-white","aria-label":"Youtube"},r.a.createElement(N.a,{icon:S.g,size:"3x",className:"px-2"})),r.a.createElement("a",{href:"https://www.meetup.com/Code-Star-Night",className:"text-white","aria-label":"Meetup.com"},r.a.createElement(N.a,{icon:S.e,size:"3x",className:"px-2"})))),r.a.createElement("div",{className:"col-12 col-sm-6 p-0"},"/contact"!==e.location.pathname&&r.a.createElement(O.a,{halfHeightMinusHalfNavBar:!0})))))}),M=n(177),C=n(19),z=n.n(C),T=n(31),L=n(53),D=n(38),P=n(5652),_=n(33),I=n.n(_),U=n(44),A=n(41),J=n(32),W=n(122),F=n(83),R=n.n(F),G=n(37),K=I()(Object(W.c)({isHovering:!1},{handleMouseOver:function(){return function(){return{isHovering:!0}}},handleMouseOut:function(){return function(){return{isHovering:!1}}}}),Object(E.withStyles)(function(e){return{newEventIcon:{color:"red",display:"inline-block",fontSize:"1.3rem",marginLeft:.5*e.spacing.unit},newEventIconHover:{color:"inherit"},bigTooltip:{fontSize:20}}}))(function(e){var t=e.classes,n=e.label,a=e.nextEvent,c=e.isHovering,o=e.handleMouseOver,i=e.handleMouseOut,l="".concat(t.newEventIcon," ").concat(c?t.newEventIconHover:null),s=null,u="";if(a){s=r.a.createElement("span",{className:l}," \u25cf");var m="nl"===G.a.language?"nl-NL":"en-US",h=new Date(a.time).toLocaleDateString(m,{month:"long",day:"numeric"});u="".concat(h," \ud83c\udf89Meetup\ud83c\udf89 ").concat(a.name)}return r.a.createElement(R.a,{title:u,placement:"bottom",classes:{tooltip:t.bigTooltip}},r.a.createElement(A.a,{component:P.a,to:"/events",color:"inherit",onMouseOver:o,onMouseOut:i},n,s))}),Q=n(121),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.t,n=Object(L.a)(e,["t"]),r=a.createElement(v.c,{onClick:function(){return"nl"===G.a.language?G.a.changeLanguage("en"):G.a.changeLanguage("nl")},color:"inherit",className:"".concat(n.classes.langButton," ").concat(n.classes.button)},a.createElement(J.g,{className:"mr-2"}),G.a.language),c=this.props.nextEvent?a.createElement("span",{style:{color:"red"}}," \u25cf"):null;return a.createElement(v.a,{position:"fixed",className:n.classes.appBar},a.createElement(v.I,null,a.createElement(v.v,{mdUp:!0},a.createElement(v.w,{onClick:n.toggle,className:"".concat(n.classes.menuButton," ").concat(n.classes.button),color:"inherit","aria-label":"Menu"},a.createElement(J.h,null),c)),a.createElement(v.K,{className:n.classes.flex,variant:"h6",color:"inherit"},a.createElement(P.a,{to:"/"},a.createElement(Q.a,{path:"/images/codestar_logo_dark.svg",alt:"Codestar Logo",className:n.classes.logo})),a.createElement(v.v,{smDown:!0},r),null,a.createElement("div",{className:n.classes.envTag},"[TEST]")),a.createElement(v.v,{mdUp:!0},r),a.createElement(v.v,{smDown:!0},a.createElement(A.a,{component:P.a,to:"/",color:"inherit",className:n.classes.button},"Home"),a.createElement(K,{label:"Events",nextEvent:this.props.nextEvent}),a.createElement(A.a,{component:P.a,to:"/about",color:"inherit",className:n.classes.button},t("ABOUT")),a.createElement(A.a,{component:P.a,to:"/jobs",color:"inherit",className:n.classes.button},"Jobs"),a.createElement(A.a,{component:P.a,to:"/contact",color:"inherit",className:n.classes.button},"Contact"))))}}]),t}(a.Component),Y=I()(Object(E.withStyles)(function(e){return{flex:{flex:1},menuButton:{marginLeft:-12,marginRight:20},logo:Object(D.a)({marginRight:"1em",width:"100px"},e.breakpoints.up("md"),{width:"140px"}),appBar:{backgroundColor:"rgba(0,0,0,0.75)"},langButton:{margin:0,padding:0,minWidth:"70px","&:focus":{outline:0}},button:{"&:hover":{color:"white",background:"rgba(200, 200, 255, 0.2)"}},envTag:{display:"inline-block",fontFamily:"monospace",marginLeft:"1em"}}}),Object(v.L)(),Object(U.b)(["nav"],{wait:!0}))(V),q=[{text:"Home",icon:a.createElement(J.c,null),link:"/"},{text:"Events",icon:a.createElement(J.f,null),link:"/events",canHaveNotification:!0},{text:"ABOUT",icon:a.createElement(J.l,null),link:"/about"},{text:"Jobs",icon:a.createElement(J.b,null),link:"/jobs"},{text:"Contact",icon:a.createElement(J.e,null),link:"/contact"}],X=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={location:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.history.listen(function(t){return e.setLocation(t.pathname)}),this.setLocation(this.props.history.location.pathname)}},{key:"setLocation",value:function(e){this.setState({location:"/".concat(e.split("/")[1])})}},{key:"render",value:function(){var e=this,t=this.props,n=t.t,r=Object(L.a)(t,["t"]);return a.createElement(v.n,{open:r.open,onClose:r.toggle},a.createElement("div",{tabIndex:0,role:"button",onClick:r.toggle,onKeyDown:r.toggle},a.createElement(v.z,null,q.map(function(t){return a.createElement(P.a,{to:t.link,key:n(t.text),style:{textDecoration:"none"}},a.createElement(v.A,{button:!0},a.createElement(v.B,null,t.icon),a.createElement(v.C,{primary:e.getPrimaryText(t),primaryTypographyProps:e.state.location===t.link?{color:"primary",style:{fontWeight:500}}:void 0})))}))))}},{key:"getPrimaryText",value:function(e){var t=this.props.t,n=this.props.nextEvent?a.createElement("span",{style:{color:"red"}}," \u25cf"):null;return e.canHaveNotification?a.createElement(a.Fragment,null,t(e.text),n):t(e.text)}}]),t}(a.Component),$=Object(U.b)(["nav"],{wait:!0})(X),Z=n(191),ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={drawerMenu:!1,nextEvent:null},n.toggleDrawer=function(){n.setState(function(e){return{drawerMenu:!e.drawerMenu}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchUpcomingEvent.call(this)}},{key:"fetchUpcomingEvent",value:function(){var e=Object(T.a)(z.a.mark(function e(){var t,n;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)();case 3:t=e.sent,(n=t&&t.length>0?t[0]:null)&&this.setState({nextEvent:n}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(Y,{toggle:this.toggleDrawer,nextEvent:this.state.nextEvent}),r.a.createElement($,{open:this.state.drawerMenu,toggle:this.toggleDrawer,history:this.props.history,nextEvent:this.state.nextEvent}))}}]),t}(a.Component),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(){return"serviceWorker"in navigator?new URL("/codestar-website-react",window.location.origin).origin!==window.location.origin?Promise.resolve():new Promise(function(e){window.addEventListener("load",function(){var t="".concat("/codestar-website-react","/service-worker.js");if(te){var n=function(e){return fetch(e).then(function(t){var n=t.headers,a=n&&n.get("content-type");return 404===t.status||a&&-1===a.indexOf("javascript")?(navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}),Promise.resolve()):re(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t);navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}),e(n)}else e(re(t))})}):Promise.resolve()}var ae=function(e){return function(t){t&&(t.onupdatefound=function(){var n=t.installing;n&&(n.onstatechange=function(){if("installed"===n.state)if(navigator.serviceWorker.controller){var t="New content is available, restart the tab to refresh";console.log(t),e(t)}else{var a="Parts of this site are available for offline use";console.log(a),e(a)}})})}};function re(e){return navigator.serviceWorker.register(e)}var ce=n(84),oe=n.n(ce),ie=function(e){var t=e.showMessage,n=e.message,a=e.handleCloseSnackbar,c=e.handleExitedSnackbar;return r.a.createElement(v.F,{open:t,autoHideDuration:6e3,onClose:a,onExited:c},r.a.createElement(v.G,{message:r.a.createElement("span",null,n),action:[r.a.createElement(v.w,{key:"close","aria-label":"Close",color:"inherit",onClick:a},r.a.createElement(oe.a,null))]}))},le=function(){return r.a.createElement("div",{style:{display:"flex",flex:1,minHeight:"inherit",height:"100%",justifyContent:"center",alignItems:"center"}},r.a.createElement("span",{style:{color:"white",fontSize:"20px"}},"Loading..."))},se=function(e){return r.a.createElement("div",{style:{minHeight:"100vh"}},e.children)},ue=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,5821))}),me=Object(a.lazy)(function(){return n.e(9).then(n.bind(null,5819))}),he=Object(a.lazy)(function(){return n.e(14).then(n.bind(null,5814))}),pe=Object(a.lazy)(function(){return Promise.all([n.e(2),n.e(12)]).then(n.bind(null,5815))}),fe=Object(a.lazy)(function(){return n.e(11).then(n.bind(null,5816))}),de=Object(a.lazy)(function(){return n.e(13).then(n.bind(null,5818))}),ge=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(6),n.e(7)]).then(n.bind(null,5817))}),be=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,5820))}),ve=["","events","cases","about","jobs","contact","publications"],Ee=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).history=void 0,n.handleCloseSnackbar=function(){n.setState({showMessage:!1})},n.handleExitedSnackbar=function(){n.setState({message:null})},n.history=b()({basename:"/codestar-website-react"}),n.history.listen(function(e){return n.updateBackgroundColor(e.pathname)}),n.updateBackgroundColor(n.history.location.pathname),n.state={showMessage:!1,message:null},ne().then(ae(function(e){n.setState({showMessage:!0,message:e})})).catch(function(e){console.error("Error during service worker registration:",e)}),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{history:this.history},r.a.createElement(E.MuiThemeProvider,{theme:w},r.a.createElement(v.j,null),r.a.createElement(ie,{showMessage:this.state.showMessage,message:this.state.message,handleCloseSnackbar:this.handleCloseSnackbar,handleExitedSnackbar:this.handleExitedSnackbar}),r.a.createElement(ee,{history:this.history}),r.a.createElement(se,null,r.a.createElement(j,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(le,null)},r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(be,null)),r.a.createElement(f.a,{exact:!0,path:"/jobs"},r.a.createElement(me,null)),M.a.map(function(e){return r.a.createElement(f.a,{exact:!0,path:"/jobs/".concat(e.path),key:e.path},r.a.createElement(he,e))}),r.a.createElement(f.a,{path:"/about"},r.a.createElement(ue,null)),r.a.createElement(f.a,{path:"/contact"},r.a.createElement(pe,null)),r.a.createElement(f.a,{path:"/events"},r.a.createElement(ge,null)),r.a.createElement(f.a,{path:"/code-challenge"},r.a.createElement(fe,null)),r.a.createElement(f.a,{path:"/404"},r.a.createElement(de,null)),r.a.createElement(d.a,{to:"/404"}))))),r.a.createElement(B,null)))}},{key:"updateBackgroundColor",value:function(e){var t=e.split("/")[1],n=ve.indexOf(t),a=100*-(n>=0?n:0);document.body.style.backgroundPositionY="".concat(a,"vh, 0")}}]),t}(a.Component),we=n(119);we.a.initialize("UA-100358098-1"),we.a.pageview(window.location.pathname+window.location.search),o.a.render(a.createElement(Ee,null),document.getElementById("root"))}},[[5463,4,5]]]);
//# sourceMappingURL=main.497d86b6.chunk.js.map