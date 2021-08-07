(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{100:function(e,t,a){e.exports={meta:"movie_meta__1Fx2k",description:"movie_description__2j5ky"}},123:function(e,t,a){e.exports={container:"main_container__2lU3V"}},124:function(e,t,a){e.exports={container:"favourites_container__1u1uQ"}},125:function(e,t,a){e.exports={mainLayout:"app_mainLayout__3bqqS"}},138:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(21),r=a.n(i),s=(a(138),a(185)),o=a(177),j=a(64),l=a(23),u=a(44),d=a(82),b=a(43),O=a(128),f=a(126),h=function(e){window.localStorage.setItem("favourites",JSON.stringify(e))},p={favourites:function(){var e=window.localStorage.getItem("favourites");return JSON.parse(e)||[]}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if("ADD_FAVOURITE"===t.type){var a=e.favourites.find((function(e){return e.imdbID===t.payload.imdbID}));if(a)return f.b.error("".concat(t.payload.Title," has already been added")),e;f.b.success("".concat(t.payload.Title," added to favourites films"));var n=[].concat(Object(O.a)(e.favourites),[t.payload]);return h(n),Object(b.a)(Object(b.a)({},e),{},{favourites:n})}if("REMOVE_FAVOURITE"===t.type){var c=e.favourites.filter((function(e){return e.imdbID!==t.payload}));return h(c),Object(b.a)(Object(b.a)({},e),{},{favourites:c})}return e},x={items:[],isLoaded:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return"SET_MOVIES"===t.type?Object(b.a)(Object(b.a)({},e),{},{items:t.payload,isLoaded:!0}):"SET_LOADED"===t.type?Object(b.a)(Object(b.a)({},e),{},{isLoaded:t.payload}):e},y=Object(d.a)({favourites:v,movies:m}),_=Object(d.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=a(63),E=a(41),w=a(180),S=a(186),T=a(73),I=a.n(T),D=a(6),k=function(){return Object(D.jsx)(s.a.Header,{className:I.a.header,children:Object(D.jsxs)(g.a,{gutter:[16,16],align:"center",justify:"space-between",children:[Object(D.jsx)(E.a,{xs:24,sm:12,className:I.a.logo,children:Object(D.jsx)(w.a.Title,{className:I.a.title,children:Object(D.jsx)("a",{href:"https://allevchenko.ru/react-movies",children:"React Movies"})})}),Object(D.jsx)(E.a,{xs:24,sm:12,className:I.a.social,children:Object(D.jsx)("a",{href:"https://github.com/ALevkas",target:"_blank",rel:"noreferrer",title:"go to github alevkas page",children:Object(D.jsx)(S.a,{})})})]})})},N=a(51),L=a(120),V=a.n(L),A=a(184),F=function(e){return{type:"SET_MOVIES",payload:e}},R=function(e){return{type:"SET_LOADED",payload:e}},M=a(182),C=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){e.current=!1}),[]),e.current},U=a(183),q=["","movie","series"],J=function(e){var t=e.getFilterValue,a=Object(n.useState)(""),c=Object(N.a)(a,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){t(i)}),[i]),Object(D.jsx)(U.a.Group,{onChange:function(e){r(e.target.value)},value:i,children:q.map((function(e){return Object(D.jsx)(U.a,{value:e,children:Object(D.jsx)(w.a.Text,{type:"secondary",children:e?"".concat(e," only"):"all"})},e)}))})},X=function(e){var t=e.getMovies,a=C(),c=Object(n.useState)(""),i=Object(N.a)(c,2),r=i[0],s=i[1],o=Object(n.useState)(""),j=Object(N.a)(o,2),l=j[0],u=j[1],d=function(){t(r,l)};return Object(n.useEffect)((function(){a||d()}),[l]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(M.a.Search,{placeholder:"input search movies",allowClear:!0,enterButton:"Search",size:"large",value:r,onChange:function(e){return s(e.target.value)},onSearch:d}),Object(D.jsx)(J,{getFilterValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";u(e)}})]})},B=a(178),P=a(181),Q=a(179),Y=a(187),z=a(188),G=a(189),H=a(190),K=a(100),W=a.n(K),Z=function(e){var t=e.title,a=e.year,n=e.poster,c=e.imdbID,i=e.type,r=Object(u.b)(),s=Object(l.f)();return Object(D.jsx)(E.a,{xs:24,sm:12,lg:8,xl:6,children:Object(D.jsx)(B.a,{id:c,cover:"N/A"===n?Object(D.jsx)(P.a.Image,{style:{height:"450px",width:"300px"}}):Object(D.jsx)(Q.a,{alt:"poster",src:n,style:{height:"450px"}}),actions:"game"===i?[Object(D.jsx)(Y.a,{title:"It's game"},"question")]:[Object(D.jsx)(z.a,{onClick:function(){window.open("https://www.kinopoisk.ru/index.php?kp_query=".concat(t))},title:"Find at kinopoisk"},"play"),"/favourites"!==s.pathname?Object(D.jsx)(G.a,{onClick:function(){r({type:"ADD_FAVOURITE",payload:{Title:t,Year:a,Poster:n,imdbID:c,Type:i}})},title:"Add to favourites"},"add"):Object(D.jsx)(H.a,{onClick:function(){r({type:"REMOVE_FAVOURITE",payload:c}),f.b.success("".concat(t," removed from favourites films"))},title:"Remove from favourites"},"add")],children:Object(D.jsxs)("div",{className:W.a.meta,children:[Object(D.jsx)("div",{children:Object(D.jsx)(w.a.Title,{level:5,children:t})}),Object(D.jsxs)("div",{className:W.a.description,children:[Object(D.jsx)(w.a.Text,{type:"secondary",children:a}),Object(D.jsx)(w.a.Text,{type:"secondary",children:i})]})]})})})},$=function(){return Object(D.jsx)(w.a.Title,{type:"secondary",level:2,children:"Movies not found"})},ee=function(e){var t=e.movies;return Object(D.jsx)(g.a,{gutter:[16,16],children:(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(e){return Object(D.jsx)(Z,{title:e.Title,year:e.Year,poster:e.Poster,imdbID:e.imdbID,type:e.Type},e.imdbID)})):Object(D.jsx)(E.a,{span:24,children:Object(D.jsx)($,{})})})},te=a(176),ae=function(){return Object(D.jsx)(te.a,{tip:"Loading..."})},ne=a(123),ce=a.n(ne),ie="ac509aa1",re=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){var t=e.movies;return{items:t.items,isLoaded:t.isLoaded}})),a=t.items,c=t.isLoaded,i=Object(n.useState)(""),r=Object(N.a)(i,2),o=r[0],j=r[1],l=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(null===a||void 0===a?void 0:a.length)&&o===n||(j(n),e(R(!1)),V.a.get("https://www.omdbapi.com/?s=".concat(t||"wars","&type=").concat(n||"","&apikey=").concat(ie)).then((function(t){var a=t.data.Search;e(F(a))})))};return Object(n.useEffect)((function(){l()}),[]),Object(D.jsxs)(s.a.Content,{className:ce.a.container,children:[Object(D.jsx)(X,{getMovies:l}),c?Object(D.jsx)(ee,{movies:a}):Object(D.jsx)(ae,{}),Object(D.jsx)(A.a,{})]})},se=a(124),oe=a.n(se),je=function(){var e=Object(u.c)((function(e){return{items:e.favourites.favourites}})).items;return Object(D.jsxs)(s.a.Content,{className:oe.a.container,children:[Object(D.jsx)(ee,{movies:e}),Object(D.jsx)(A.a,{})]})},le=a(127),ue=[{id:0,title:"Main",path:"/"},{id:1,title:"Favourites",path:"/favourites"}],de=function(){var e=Object(l.f)();return Object(D.jsx)(g.a,{gutter:[16,16],children:ue.map((function(t){var a=t.id,n=t.title,c=t.path;return Object(D.jsx)(E.a,{children:Object(D.jsx)(le.a,{type:e.pathname===c?"primary":"secondary",children:Object(D.jsx)(j.b,{to:c,children:n})})},a)}))})},be=(a(173),a(125)),Oe=a.n(be),fe=function(){return Object(D.jsx)(j.a,{children:Object(D.jsx)(u.a,{store:_,children:Object(D.jsxs)(s.a,{children:[Object(D.jsx)(k,{}),Object(D.jsxs)(s.a,{className:Oe.a.mainLayout,children:[Object(D.jsx)(de,{}),Object(D.jsx)(o.a,{}),Object(D.jsxs)(l.c,{children:[Object(D.jsx)(l.a,{path:"/favourites",exact:!0,children:Object(D.jsx)(je,{})}),Object(D.jsx)(l.a,{path:"/",children:Object(D.jsx)(re,{})})]})]})]})})})};r.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(fe,{})}),document.getElementById("root"))},73:function(e,t,a){e.exports={header:"header_header__1uyEF",logo:"header_logo__21kg2",social:"header_social__2prnw",wrapper:"header_wrapper__3i4xy",github:"header_github__1Q4dj"}}},[[174,1,2]]]);
//# sourceMappingURL=main.7b03f841.chunk.js.map