(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{5659:function(t,e,n){"use strict";var a=n(39),r=n(0),c=n.n(r),i=n(34),o=n.n(i),l=n(16),u=n(15),s=n(5661);e.a=o()(Object(l.withStyles)(function(t){var e=t.breakpoints;return Object(l.createStyles)({section:Object(a.a)({position:"relative",padding:"".concat(28,"px 0")},e.up("sm"),{padding:"".concat(32,"px 0")}),element:Object(a.a)({position:"absolute",top:-56,width:"100%",height:"100%",visibility:"hidden",pointerEvents:"none"},e.up("sm"),{top:-64})})}),Object(u.M)())(function(t){var e=t.scrollname,n=t.className,a=t.classes,r=t.children;return c.a.createElement("section",{name:e||null,className:"\n\t\t\t".concat(n||null,"\n\t\t\t").concat(e?a.section:null)},e&&c.a.createElement(s.Element,{name:e,className:a.element}),r)})},5694:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n(16),r=n(203),c=n.n(r),i=n(5666),o=n.n(i),l=function(t){return Object(a.createStyles)({text:{color:"white","&& h2":{fontSize:"2rem",fontWeight:500}},teamSection:{backgroundColor:c.a[200]},siteSection:{backgroundColor:o.a[900],color:c.a[200]},link:{color:t.palette.primary.main}})}},5695:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(0),r=n.n(a),c=n(42),i=n(43),o=n(15),l={twitter:{name:"Twitter",icon:i.f,makeUrl:function(t,e,n){return"https://twitter.com/home?status=".concat(encodeURI("".concat(n,"\n").concat(t)))}},linkedin:{name:"Linkedin",icon:i.c,makeUrl:function(t,e,n){return"https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURI(t),"&title=").concat(encodeURI(e),"&summary=").concat(encodeURI(n))}},facebook:{name:"Facebook",icon:i.a,makeUrl:function(t,e,n){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(t))}}},u=function(t){var e=t.twitter,n=t.linkedin,a=t.facebook,i=t.color,u=t.size,s=t.link,m=t.title,p=t.text,h=[];e&&h.push(l.twitter),n&&h.push(l.linkedin),a&&h.push(l.facebook);var f=h.map(function(t,e){return r.a.createElement(o.c,{key:e,color:i,size:u,component:"a",target:"_blank",rel:"noopener noreferrer","aria-label":t.name,href:t.makeUrl(s,m||"",p||""),style:{minWidth:32}},r.a.createElement(c.a,{icon:t.icon,size:"lg"}))});return r.a.createElement(r.a.Fragment,null,f)}},5708:function(t,e,n){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return a})},5829:function(t,e,n){"use strict";n.r(e);var a=n(5708),r=n(0),c=n.n(r),i=n(44),o=n(15),l=n(34),u=n.n(l),s=n(120),m=n(5659),p=n(16),h=n(21),f=n.n(h),d=n(32),b=n(122),v=n(38),w=n(5695),E=Object(p.withStyles)({root:{marginBottom:"20px"}})(o.d),y=u()(Object(p.withStyles)(function(){return Object(p.createStyles)({media:{height:0,paddingTop:"15%"},title:{fontSize:"2rem",fontWeight:500}})}),Object(i.b)(["publications"],{wait:!0}))(function(t){var e=t.t,n=t.classes,a=t.publication,r=a.latestPublishedAt,i=a.author,l=a.authorImg,u=a.title,s=a.paragraphs,m=a.uniqueSlug,p=a.previewImgId,h="nl"===v.a.language?"nl-NL":"en-US",f=new Date(r).toLocaleDateString(h,{year:"numeric",month:"long",day:"numeric"}),d="https://medium.com/codestar-blog/".concat(m),b=p&&c.a.createElement(o.h,{className:n.media,image:"https://cdn-images-1.medium.com/fit/t/800/240/".concat(p),title:u});return c.a.createElement(E,null,c.a.createElement(o.g,{avatar:c.a.createElement(o.b,{"aria-label":"Author",src:"https://cdn-images-1.medium.com/fit/c/50/50/".concat(l),className:n.avatar},"A"),title:i,subheader:f}),b,c.a.createElement(o.f,null,c.a.createElement(o.K,{variant:"h3",className:n.title},u),c.a.createElement(o.K,null,s)),c.a.createElement(o.e,null,c.a.createElement(o.c,{size:"small",color:"primary",href:d},e("READ_MORE")),c.a.createElement(w.a,{twitter:!0,linkedin:!0,facebook:!0,size:"small",color:"primary",title:u,text:'Codestar article "'.concat(u,'" by ').concat(i),link:d})))}),g=[];function k(t){return"https://".concat("hjoutysc5k",".execute-api.eu-west-1.amazonaws.com/").concat("test","/").concat(t)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(f.a.mark(function t(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=k("get-publications"),t.next=4,fetch(e).then(function(t){return t.json()});case 4:return g=t.sent,t.abrupt("return",g);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}},t,this,[[0,8]])}))).apply(this,arguments)}function S(){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.length?g:j());case 1:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var I=Object(b.b)({componentDidMount:function(){var t=Object(d.a)(f.a.mark(function t(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S();case 3:e=t.sent,this.setState({publications:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn("Can't set publications, failing silently.");case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()}),N=u()(I)(function(t){var e=t.publications,n=(void 0===e?[]:e).map(function(t){return c.a.createElement(y,{key:t.id,publication:t})});return c.a.createElement(c.a.Fragment,null,n)}),U=n(5694);n.d(e,"PublicationsPage",function(){return T});var T=function(t){var e=t.t,n=t.classes,r=e("PUBLICATIONS_TEXTS",{returnObjects:!0}),i=Object(a.a)(r,2),l=i[0],u=i[1];return c.a.createElement(m.a,{scrollname:"publications"},c.a.createElement(s.a,{marginTopNavBar:!0},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-8 ".concat(n.text)},c.a.createElement(o.p,{in:!0,timeout:2e3},c.a.createElement("div",{className:"mb-4"},c.a.createElement(o.K,{variant:"h2",color:"inherit",gutterBottom:!0},e("PUBLICATIONS_TITLE")),c.a.createElement(o.K,{variant:"body1",color:"inherit",gutterBottom:!0},l,c.a.createElement("a",{href:"https://youtube.com/codestar",className:n.link},"Codestar YouTube"),u))),c.a.createElement(o.E,{in:!0,timeout:1e3,direction:"up"},c.a.createElement("div",null,c.a.createElement(N,null)))))))};e.default=u()(Object(p.withStyles)(U.a),Object(i.b)(["about"],{wait:!0}))(T)}}]);
//# sourceMappingURL=13.ee2a0e71.chunk.js.map