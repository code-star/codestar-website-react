(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{5660:function(e,t,a){"use strict";var n=a(26),c=a(27),l=a(29),o=a(28),r=a(30),i=a(0),s=a.n(i),d=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dark,a=e.small;return s.a.createElement("img",{src:"".concat("","/images/codestar_logo_").concat(t?"dark":"light",".svg"),alt:"Codestar",style:a?{height:"0.8em",marginBottom:"0.2em"}:{height:"0.8em",marginBottom:"0.12em"}})}}]),t}(i.Component),m=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(c.a)(t,[{key:"replaceWithLogo",value:function(e){var t=this;return e.split("Codestar").reduce(function(e,a,n){return 0===n?[a]:e.concat(s.a.createElement(d,{dark:t.props.dark,small:t.props.small}),a)},[])}},{key:"injectLogo",value:function(e){var t=this;return s.a.Children.map(e,function(e,a){return e.props?e.props.children?s.a.cloneElement(e,{children:t.injectLogo(e.props.children)}):s.a.cloneElement(e):t.replaceWithLogo(e)})}},{key:"render",value:function(){return this.injectLogo(this.props.children)}}]),t}(i.Component);t.a=m},5709:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(34),o=a.n(l),r=a(15),i=a(16),s=a(66),d=a.n(s),m=a(121),h=[{name:"ING",logo:"/images/clients/ing.png",color:"#ee6f33"},{name:"Port of Rotterdam",logo:"/images/clients/port_of_rotterdam.svg",featured:!0,background:"/images/clients/harbor.jpg"},{name:"SKG",logo:"/images/clients/skg.svg",color:"#9D1535"},{name:"Rabobank",logo:"/images/clients/rabobank-2.svg",color:"#001090"},{name:"Gracenote",logo:"/images/clients/gracenote.svg",featured:!0,background:"/images/clients/winter_olympics.jpg"},{name:"42 Education",logo:"/images/clients/42_education.png",color:"#222"}],g=[0,2,1,4,3,5].map(function(e){return h[e]});t.a=o()(Object(i.withStyles)({gridList:{transform:"translateZ(0)"},background:{position:"absolute",width:"100%",height:"100%",top:0,left:0},faded:{background:"linear-gradient( rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))"}}),d()())(function(e){var t=!Object(s.isWidthUp)("md",e.width);return c.a.createElement("div",{className:"mt-3"},c.a.createElement(r.s,{cellHeight:200,cols:t?2:4,className:e.classes.gridList},(t?g:h).map(function(t){return c.a.createElement(r.t,{key:t.name,cols:t.featured?2:1},t.featured?c.a.createElement("div",{className:"row justify-content-center align-items-center mx-0",style:{width:"100%",height:"100%"}},c.a.createElement("div",{className:e.classes.background},c.a.createElement(m.a,{path:t.background,alt:t.name,width:"100%",height:"100%",style:{objectFit:"cover"}})),c.a.createElement("div",{className:"".concat(e.classes.faded," ").concat(e.classes.background)}),c.a.createElement("div",{className:"col-8 col-md-6"},c.a.createElement(m.a,{path:t.logo,alt:t.name,width:"100%"}))):c.a.createElement("div",{className:"row justify-content-center align-items-center ml-0 mr-0",style:{backgroundColor:t.color?t.color:"transparent",width:"100%",height:"100%"}},c.a.createElement("div",{className:"col-10"},c.a.createElement(m.a,{path:t.logo,alt:t.name,width:"100%"}))))})))})},5737:function(e,t,a){e.exports={logoOrange:"AnimatedLogo_logoOrange__2o_gW",logoWhite:"AnimatedLogo_logoWhite__2rdQQ"}},5738:function(e,t,a){e.exports={delayedFadeIn:"DelayedFade_delayedFadeIn__JAJYX",fadeIn:"DelayedFade_fadeIn__1hU_C",delayedFadeInPanLeft:"DelayedFade_delayedFadeInPanLeft__13TF0",panLeft:"DelayedFade_panLeft__3i__h",delayedFadeInPanRight:"DelayedFade_delayedFadeInPanRight__1MS7O",panRight:"DelayedFade_panRight__1bTki",delayedFadeInPanUp:"DelayedFade_delayedFadeInPanUp__2dEvy",panUp:"DelayedFade_panUp__3fkDH",delayedFadeInPanDown:"DelayedFade_delayedFadeInPanDown__23eJw",panDown:"DelayedFade_panDown__34hSS"}},5830:function(e,t,a){"use strict";a.r(t);var n=a(26),c=a(27),l=a(29),o=a(28),r=a(30),i=a(5706),s=a(5658),d=a(0),m=a.n(d),h=a(44);var g,u,p=a(15),v=a(16),E=a(34),f=a.n(E),y=a(120),_=a(5709),b=a(5734),w=a.n(b),N=a(5735),O=a.n(N),k=a(5737),j=a.n(k),F=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;new w.a("logo",{duration:e.props.lineDuration,type:"sync",file:""},function(){document.getElementById("logo")&&O()(document.getElementById("logo")).animate({"fill-opacity":1,"stroke-opacity":0},e.props.fadeDuration)})}},{key:"render",value:function(){return m.a.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 216.2 43.3017",xmlSpace:"preserve",fillOpacity:0,strokeOpacity:1},m.a.createElement("g",null,m.a.createElement("g",null,m.a.createElement("circle",{className:j.a.logoOrange,cx:"110.5",cy:"38",r:"2.9"}),m.a.createElement("path",{className:j.a.logoOrange,d:"M176.4,31.8l-2.3-1.2l2.3-1.2c0.4-0.2,0.5-0.6,0.3-1l-0.5-0.9c-0.2-0.4-0.6-0.5-1-0.3l-2.7,1.4v-3    c0-0.4-0.3-0.7-0.7-0.7h-1.1c-0.4,0-0.7,0.3-0.7,0.7v3l-2.7-1.4c-0.4-0.2-0.8,0-1,0.3l-0.5,0.9c-0.2,0.4,0,0.8,0.3,1l2.3,1.2    l-2.3,1.2c-0.4,0.2-0.5,0.6-0.3,1l0.5,0.9c0.2,0.4,0.6,0.5,1,0.3l2.7-1.4v3c0,0.4,0.3,0.7,0.7,0.7h1.1c0.4,0,0.7-0.3,0.7-0.7v-3    l2.7,1.4c0.4,0.2,0.8,0,1-0.3l0.5-0.9C176.9,32.4,176.7,32,176.4,31.8z"}),m.a.createElement("path",{className:j.a.logoOrange,d:"M13.8,5.5h1.9c2.1,0,4,1,5.6,3c0.3,0.5,1,0.5,1.5,0.3L24.3,8c0.4-0.2,0.6-0.5,0.7-0.8c0.1-0.3,0-0.7-0.2-1    c-0.6-1-1.5-1.8-2.4-2.4c-1.8-1.3-4.1-2-6.8-2h-1.9c-6.4,0-10.6,4-10.6,10.1v19.6c0,6.1,4.3,10.1,10.6,10.1h1.9    c2.9,0,5.3-0.7,7.1-2.2c0.8-0.6,1.5-1.4,2.1-2.3c0.2-0.3,0.3-0.6,0.2-1c-0.1-0.4-0.4-0.7-0.8-0.9l-1.5-0.7    c-0.6-0.3-1.1-0.2-1.5,0.3c-1.4,2-3.3,3-5.5,3h-1.9c-3.5,0-6.3-2.8-6.3-6.4V11.8C7.5,8.2,10.1,5.5,13.8,5.5z"}),m.a.createElement("path",{className:j.a.logoWhite,d:"M151.3,8.7h-1.8c-0.8,0-1.3,0.5-1.3,1.3v29.7c0,0.8,0.5,1.3,1.3,1.3h1.8c0.8,0,1.3-0.5,1.3-1.3V9.9    C152.6,9.1,152.1,8.7,151.3,8.7z"}),m.a.createElement("path",{className:j.a.logoWhite,d:"M161.1,4.8V3.7c0-0.8-0.5-1.3-1.3-1.3h-19c-0.8,0-1.3,0.5-1.3,1.3v1.1c0,0.8,0.5,1.3,1.3,1.3h19    C160.7,6.1,161.1,5.6,161.1,4.8z"}),m.a.createElement("path",{className:j.a.logoOrange,d:"M91.3,19.5c-0.8,0-1.3,0.5-1.3,1.3v1.1c0,0.8,0.5,1.3,1.3,1.3h9c0.8,0,1.3-0.5,1.3-1.3v-1.1    c0-0.8-0.5-1.3-1.3-1.3H91.3z"}),m.a.createElement("path",{className:j.a.logoWhite,d:"M128.4,19.3l-1.2-0.5c-3.1-1.5-6.6-3.1-6.6-6.9c0-3.8,2.4-6.3,6.2-6.3h0.9c2.1,0,4.2,1.1,5.6,3    c0.3,0.5,0.9,0.6,1.6,0.3l1.5-0.8c0.4-0.2,0.6-0.5,0.7-0.8c0.1-0.2,0.1-0.6-0.2-1c-0.8-1.1-1.8-2.1-2.8-2.7    c-1.7-1.1-3.9-1.7-6.3-1.7h-0.9c-6.3,0-10.6,4-10.6,10.1c0,6.8,4.8,9,9.9,11.4l0.6,0.3c3.7,1.7,7.5,3.5,7.5,7.9    c0,3.7-2.7,6.4-6.4,6.4h-2.5c-2.1,0-4-1-5.6-3c-0.4-0.5-0.9-0.6-1.5-0.4l-1.6,0.9c-0.4,0.2-0.6,0.5-0.7,0.9c-0.1,0.4,0,0.7,0.2,1    c0.7,1,1.7,1.9,2.7,2.6c1.8,1.2,4,1.8,6.4,1.8h2.5c6.5,0,10.9-4.1,10.9-10.1C138.6,24.1,133.9,21.9,128.4,19.3z"}),m.a.createElement("path",{className:j.a.logoOrange,d:"M69.2,2.4H57.9c-0.8,0-1.3,0.5-1.3,1.3v36c0,0.8,0.5,1.3,1.3,1.3h11.2c6.6,0,10.8-4.2,10.8-10.8V13    C80,6.6,75.7,2.4,69.2,2.4z M75.6,30.8c0,3.7-2.8,6.4-6.4,6.4h-7.3c-0.5,0-0.8-0.3-0.8-0.8V6.9c0-0.5,0.3-0.8,0.8-0.8h7.3    c3.6,0,6.4,2.8,6.4,6.3V30.8z"}),m.a.createElement("path",{className:j.a.logoOrange,d:"M88.2,6.1h15c0.8,0,1.3-0.5,1.3-1.3V3.7c0-0.8-0.5-1.3-1.3-1.3H84.3c-0.8,0-1.3,0.5-1.3,1.3v36    c0,0.8,0.5,1.3,1.3,1.3h18.9c0.8,0,1.3-0.5,1.3-1.3v-1.2c0-0.8-0.5-1.3-1.3-1.3h-15c-0.5,0-0.8-0.3-0.8-0.8V6.9    C87.4,6.4,87.7,6.1,88.2,6.1z"}),m.a.createElement("path",{className:j.a.logoWhite,d:"M213.3,13.6v-1c0-6.3-4.2-10.1-10.8-10.1h-11.2c-0.8,0-1.3,0.5-1.3,1.3v36c0,0.8,0.5,1.3,1.3,1.3h1.8    c0.8,0,1.3-0.5,1.3-1.3V6.9c0-0.5,0.3-0.8,0.8-0.8h7.3c3.8,0,6.4,2.5,6.4,6.3V13c0,3.7-2.8,6.6-6.4,6.6h-4.2    c-0.8,0-1.3,0.5-1.3,1.3v1.1c0,1.3,1.3,1.3,1.3,1.3h4.5l5.8,16.8c0.1,0.5,0.6,0.9,1.2,0.9h2.1c0.6,0,1-0.3,1.1-0.5    c0.1-0.2,0.3-0.6,0.1-1.2l-5.9-17.1C210.7,20.7,213.3,17.2,213.3,13.6z"}),m.a.createElement("g",null,m.a.createElement("path",{className:j.a.logoWhite,d:"M186.9,39.3L186.9,39.3l-13.6-36c-0.2-0.6-0.6-0.9-1.2-0.9h-1.5c-0.6,0-1,0.4-1.2,0.9l-13.6,36l0,0     c-0.1,0.6,0,0.9,0.2,1.1c0.2,0.2,0.5,0.5,1.1,0.5h1.9c0.6,0,1-0.4,1.2-0.9c0,0,0-0.1,0.1-0.1c0.9-2.2,10.4-27.5,10.5-27.8     c0.1-0.4,0.3-0.5,0.6-0.5s0.5,0.1,0.7,0.5c0.2,0.4,10.2,27.1,10.5,28c0.2,0.6,0.6,0.9,1.2,0.9h2c0.6,0,0.9-0.2,1.1-0.5     C186.9,40.2,187,39.8,186.9,39.3z"})),m.a.createElement("g",null,m.a.createElement("path",{className:j.a.logoOrange,d:"M38.2,1.8L38.2,1.8c-6.4,0-10.7,4-10.7,10.1v8l-1.2,1.5l1.2,1.5v8.5c0,6.1,4.3,10.1,10.7,10.1     c0.6,0,1-0.4,1-1.1v-1.6c0-0.6-0.4-1.1-1-1.1h-0.1c-3.4,0-6.3-3-6.3-6.4v-8.8l-1-1.2l1-1.2v-8.3c0-3.5,2.8-6.3,6.4-6.3     c0,0,0,0,0,0c0,0,1,0,1-1.1V2.8C39.2,2.2,38.8,1.8,38.2,1.8z"}),m.a.createElement("path",{className:j.a.logoOrange,d:"M53.6,19.8v-8c0-6-4.3-10.1-10.7-10.1h0c-0.6,0-1,0.5-1,1.1v1.6c0,1.1,1,1.1,1,1.1c0,0,0,0,0,0     c3.6,0,6.4,2.8,6.4,6.3v8.3l1,1.2l-1,1.2v8.8c0,3.4-2.9,6.4-6.3,6.4h-0.1c-0.6,0-1,0.5-1,1.1v1.6c0,0.6,0.4,1.1,1,1.1     c6.4,0,10.7-4.1,10.7-10.1v-8.5l1.2-1.5L53.6,19.8z"})))))}}]),t}(d.Component),I=a(5738),T=a.n(I),C=function(e){return m.a.createElement("div",{className:D(e)},e.children)},D=function(e){var t=e.panLeft,a=e.panRight,n=e.panUp,c=e.panDown;return t?T.a.delayedFadeInPanLeft:a?T.a.delayedFadeInPanRight:n?T.a.delayedFadeInPanUp:c?T.a.delayedFadeInPanDown:T.a.delayedFadeIn},L=a(5653),x=a(121),M=a(5660),P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.split(".").map(function(e){return e.trim()}).filter(function(e){return e}).map(function(t,n){return d.createElement(p.K,{key:"intro-".concat(n),variant:"subtitle1",className:"".concat(e.whiteText," ").concat(a&&0===n?a:"")},(c=t.split("~").map(function(t,a){return d.createElement("span",{key:a,className:e.line},d.createElement(M.a,{dark:!0,small:!0},t))}),l=" ",c.reduce(function(e,t,a){return[].concat(Object(i.a)(e),[t,d.createElement("span",{key:"sep-".concat(a)},l)])},[]).slice(0,-1)));var c,l})},z=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.t,a=e.classes;return d.createElement("div",null,d.createElement("section",{id:"intro",className:a.section},d.createElement(y.a,{fullHeightMinusNavBar:!0,center:!0,marginTopNavBar:!0},d.createElement("div",{className:"row justify-content-center"},d.createElement("div",{className:"col-12 col-md-8 col-lg-6 mb-3"},d.createElement(F,{lineDuration:200,fadeDuration:3e3})),d.createElement("div",{className:"col-12"},d.createElement(C,null,P(a,t("INTRO_TEXT")),P(a,t("INTRO_TEXT_SUBLINE"),"mt-3")))))),d.createElement("section",{id:"next-step",className:"py-5 bg-white"},d.createElement(y.a,{center:!0},d.createElement("div",{className:"row"},d.createElement("div",{className:"col-12 col-md-6"},d.createElement(M.a,null,d.createElement(p.K,{variant:"h4",gutterBottom:!0},t("NEXT_STEP_TITLE")),d.createElement(p.K,{variant:"subtitle1",gutterBottom:!0},t("NEXT_STEP_CONTENT_1")),d.createElement(p.K,{variant:"subtitle1",gutterBottom:!0},t("NEXT_STEP_CONTENT_2")))),d.createElement("div",{className:"col-12 col-md-6"},d.createElement(x.a,{width:"100%",path:"/images/bucket_waterfall.png",alt:"What to do?"}))))),d.createElement("section",{id:"clients",className:"py-5",style:{backgroundColor:"#eeeeee"}},d.createElement(y.a,{center:!0},d.createElement(L.a,{to:"/cases"},d.createElement(_.a,null)))))}}]),t}(d.Component);t.default=f()(Object(v.withStyles)(function(e){return{section:{position:"relative",overflow:"hidden"},fullVideo:{position:"absolute",width:"100vw",height:"100%",minWidth:"650px",top:"0",left:"50%",transform:"translateX(-50%)",zIndex:-1},whiteText:{color:"white",textAlign:"center",fontFamily:"Conduit",fontSize:"120%"},paper:Object(s.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),line:{display:"inline-block"}}}),Object(p.M)())((g=["intro"],u={wait:!0},function(e){return Object(h.b)(g,u)(e)})(z))}}]);
//# sourceMappingURL=11.09f015b2.chunk.js.map