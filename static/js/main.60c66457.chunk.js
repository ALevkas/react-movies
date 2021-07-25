(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{115:function(e,t,n){e.exports={container:"main_container__RRDWi"}},116:function(e,t,n){e.exports={mainLayout:"app_mainLayout__3bqqS"}},126:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(24),s=n.n(i),r=(n(126),n(172)),o=n(79),j=n(22),l=n(167),u=n(173),b=n(89),d=n.n(b),x=n(7),O=function(){return Object(x.jsx)(r.a.Header,{children:Object(x.jsxs)("nav",{className:d.a.nav,children:[Object(x.jsx)(l.a.Title,{className:d.a.title,children:Object(x.jsx)(o.b,{to:"/",children:"React Movies"})}),Object(x.jsx)("a",{href:"https://github.com/ALevkas",target:"_blank",rel:"noreferrer",title:"go to github alevkas page",children:Object(x.jsx)(u.a,{style:{fontSize:"32px",color:"#fff"}})})]})})},h=n(46),p=n(112),f=n.n(p),v=n(171),m=n(168),g=n(170),y=["","movie","series"],_=function(e){var t=e.getFilterValue,n=Object(c.useState)(""),a=Object(h.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){t(i)}),[i]),Object(x.jsx)(g.a.Group,{onChange:function(e){s(e.target.value)},value:i,children:y.map((function(e){return Object(x.jsx)(g.a,{value:e,children:Object(x.jsx)(l.a.Text,{type:"secondary",children:e?"".concat(e," only"):"all"})},e)}))})},k=function(e){var t=e.getMovies,n=Object(c.useState)(""),a=Object(h.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)(""),o=Object(h.a)(r,2),j=o[0],l=o[1],u=function(){t(i,j)};return Object(c.useEffect)((function(){u()}),[j]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a.Search,{placeholder:"input search movies",allowClear:!0,enterButton:"Search",size:"large",value:i,onChange:function(e){return s(e.target.value)},onSearch:u}),Object(x.jsx)(_,{getFilterValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";l(e)}})]})},w=n(59),S=n(39),N=n(165),T=n(169),I=n(166),C=n(174),L=n(175),D=n(93),F=n.n(D),M=function(e){var t=e.title,n=e.year,c=e.poster,a=e.imdbID,i=e.type;return Object(x.jsx)(S.a,{xs:{span:24},lg:{span:6},children:Object(x.jsx)(N.a,{id:a,cover:"N/A"===c?Object(x.jsx)(T.a.Image,{style:{height:"450px",width:"300px"}}):Object(x.jsx)(I.a,{alt:"poster",src:c,style:{height:"450px"}}),actions:"game"===i?[Object(x.jsx)(C.a,{title:"It's game"},"question")]:[Object(x.jsx)(L.a,{onClick:function(){window.open("https://www.kinopoisk.ru/index.php?kp_query=".concat(t))},title:"Find at kinopoisk"},"play")],children:Object(x.jsxs)("div",{className:F.a.meta,children:[Object(x.jsx)("div",{children:Object(x.jsx)(l.a.Title,{level:5,children:t})}),Object(x.jsxs)("div",{className:F.a.description,children:[Object(x.jsx)(l.a.Text,{type:"secondary",children:n}),Object(x.jsx)(l.a.Text,{type:"secondary",children:i})]})]})})})},q=function(){return Object(x.jsx)(l.a.Title,{type:"secondary",level:2,children:"Movies not found"})},E=function(e){var t=e.movies;return Object(x.jsx)(w.a,{gutter:[16,16],children:(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(e){return Object(x.jsx)(M,{title:e.Title,year:e.Year,poster:e.Poster,imdbID:e.imdbID,type:e.Type},e.imdbID)})):Object(x.jsx)(S.a,{span:24,children:Object(x.jsx)(q,{})})})},R=n(164),V=function(){return Object(x.jsx)(R.a,{tip:"Loading..."})},z=n(115),A=n.n(z),B="ac509aa1",J=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!0),s=Object(h.a)(i,2),o=s[0],j=s[1],l=function(e,t){j(!0),f.a.get("https://www.omdbapi.com/?s=".concat(e||"wars","&type=").concat(t||"","&apikey=").concat(B)).then((function(e){var t=e.data.Search;a(t),j(!1)}))};return Object(c.useEffect)((function(){l()}),[]),Object(x.jsxs)(r.a.Content,{className:A.a.container,children:[Object(x.jsx)(k,{getMovies:l}),o?Object(x.jsx)(V,{}):Object(x.jsx)(E,{movies:n}),Object(x.jsx)(v.a,{})]})},G=(n(161),n(116)),H=n.n(G),P=function(){return Object(x.jsx)(o.a,{children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(O,{}),Object(x.jsx)(r.a,{className:H.a.mainLayout,children:Object(x.jsx)(j.c,{children:Object(x.jsx)(j.a,{path:"/",children:Object(x.jsx)(J,{})})})})]})})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root"))},89:function(e,t,n){e.exports={nav:"header_nav__1LNSj",title:"header_title__3C9Vk"}},93:function(e,t,n){e.exports={meta:"movie_meta__1Fx2k",description:"movie_description__2j5ky"}}},[[162,1,2]]]);
//# sourceMappingURL=main.60c66457.chunk.js.map