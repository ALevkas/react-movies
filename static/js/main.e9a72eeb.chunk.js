(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{104:function(e,t,a){e.exports={meta:"movie_meta__1Fx2k",description:"movie_description__2j5ky"}},128:function(e,t,a){e.exports={container:"home_container__d8_oq"}},129:function(e,t,a){e.exports={container:"favourites_container__1u1uQ"}},130:function(e,t,a){e.exports={mainLayout:"main_mainLayout__mSe0i"}},143:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),i=a.n(r),s=(a(143),a(55)),o=a(44),u=a(83),j=a(50),l=a(133),b=a(131),d=function(e){window.localStorage.setItem("favourites",JSON.stringify(e))},O={favourites:function(){var e=window.localStorage.getItem("favourites");return JSON.parse(e)||[]}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if("ADD_FAVOURITE"===t.type){var a=e.favourites.find((function(e){return e.imdbID===t.payload.imdbID}));if(a)return b.b.error("".concat(t.payload.Title," has already been added")),e;b.b.success("".concat(t.payload.Title," added to favourites films"));var n=[].concat(Object(l.a)(e.favourites),[t.payload]);return d(n),Object(j.a)(Object(j.a)({},e),{},{favourites:n})}if("REMOVE_FAVOURITE"===t.type){var c=e.favourites.filter((function(e){return e.imdbID!==t.payload}));return d(c),Object(j.a)(Object(j.a)({},e),{},{favourites:c})}return e},h={items:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return"SET_MOVIES"===t.type?Object(j.a)(Object(j.a)({},e),{},{items:t.payload,isLoaded:!0}):e},v=Object(u.a)({favourites:f,movies:p}),x=Object(u.b)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=a(189),g=a(181),y=a(65),_=a(42),w=a(184),E=a(190),S=a(74),T=a.n(S),k=a(6),I=function(){return Object(k.jsx)(m.a.Header,{className:T.a.header,children:Object(k.jsxs)(y.a,{gutter:[16,16],align:"center",justify:"space-between",children:[Object(k.jsx)(_.a,{xs:24,sm:12,className:T.a.logo,children:Object(k.jsx)(w.a.Title,{className:T.a.title,children:Object(k.jsx)("a",{href:"https://allevchenko.ru/react-movies",children:"React Movies"})})}),Object(k.jsx)(_.a,{xs:24,sm:12,className:T.a.social,children:Object(k.jsx)("a",{href:"https://github.com/ALevkas",target:"_blank",rel:"noreferrer",title:"go to github alevkas page",children:Object(k.jsx)(E.a,{})})})]})})},D=a(132),N=a(23),M=[{id:0,title:"Main",path:"/"},{id:1,title:"Favourites",path:"/favourites"}],V=function(){var e=Object(N.g)();return Object(k.jsx)(y.a,{gutter:[16,16],children:M.map((function(t){var a=t.id,n=t.title,c=t.path;return Object(k.jsx)(_.a,{children:Object(k.jsx)(D.a,{type:e.pathname===c?"primary":"secondary",children:Object(k.jsx)(s.b,{to:c,children:n})})},a)}))})},F=a(64),R=a.n(F),A=a(91),L=a(41),U=a(188),C=function(e){return{type:"SET_MOVIES",payload:e}},J=a(123),X=a(124),q="ac509aa1",B=function(){function e(){Object(J.a)(this,e)}return Object(X.a)(e,null,[{key:"getUrlMovies",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"https://www.omdbapi.com/?s=".concat(e||"wars","&type=").concat(t||"","&apikey=").concat(q)}}]),e}(),P=a(125),Q=a.n(P),Y=function(e){var t=Object(n.useState)(null),a=Object(L.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(L.a)(i,2),o=s[0],u=s[1],j=Object(n.useState)(null),l=Object(L.a)(j,2),b=l[0],d=l[1],O=function(){var t=Object(A.a)(R.a.mark((function t(){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),r(null),d(null),t.next=4,Q.a.get(e);case 4:a=t.sent,r(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),d(t.t0.message);case 11:return t.prev=11,u(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[e]),{data:c,isLoading:o,error:b}},z=a(186),G=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){e.current=!1}),[]),e.current},H=a(187),K=["","movie","series"],W=function(e){var t=e.getFilterValue,a=Object(n.useState)(""),c=Object(L.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){t(r)}),[r]),Object(k.jsx)(H.a.Group,{onChange:function(e){i(e.target.value)},value:r,children:K.map((function(e){return Object(k.jsx)(H.a,{value:e,children:Object(k.jsx)(w.a.Text,{type:"secondary",children:e?"".concat(e," only"):"all"})},e)}))})},Z=function(e){var t=e.getMovies,a=G(),c=Object(n.useState)(""),r=Object(L.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(""),u=Object(L.a)(o,2),j=u[0],l=u[1],b=function(){t(i,j)};return Object(n.useEffect)((function(){a||b()}),[j]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z.a.Search,{placeholder:"input search movies",allowClear:!0,enterButton:"Search",size:"large",value:i,onChange:function(e){return s(e.target.value)},onSearch:b}),Object(k.jsx)(W,{getFilterValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";l(e)}})]})},$=a(182),ee=a(185),te=a(183),ae=a(191),ne=a(192),ce=a(193),re=a(194),ie=a(104),se=a.n(ie),oe=function(e){var t=e.title,a=e.year,n=e.poster,c=e.imdbID,r=e.type,i=Object(o.b)(),s=Object(N.g)();return Object(k.jsx)(_.a,{xs:24,sm:12,lg:8,xl:6,children:Object(k.jsx)($.a,{id:c,cover:"N/A"===n?Object(k.jsx)(ee.a.Image,{style:{height:"450px",width:"300px"}}):Object(k.jsx)(te.a,{alt:"poster",src:n,style:{height:"450px"}}),actions:"game"===r?[Object(k.jsx)(ae.a,{title:"It's game"},"question")]:[Object(k.jsx)(ne.a,{onClick:function(){window.open("https://www.kinopoisk.ru/index.php?kp_query=".concat(t))},title:"Find at kinopoisk"},"play"),"/favourites"!==s.pathname?Object(k.jsx)(ce.a,{onClick:function(){i({type:"ADD_FAVOURITE",payload:{Title:t,Year:a,Poster:n,imdbID:c,Type:r}})},title:"Add to favourites"},"add"):Object(k.jsx)(re.a,{onClick:function(){i({type:"REMOVE_FAVOURITE",payload:c}),b.b.success("".concat(t," removed from favourites films"))},title:"Remove from favourites"},"add")],children:Object(k.jsxs)("div",{className:se.a.meta,children:[Object(k.jsx)("div",{children:Object(k.jsx)(w.a.Title,{level:5,children:t})}),Object(k.jsxs)("div",{className:se.a.description,children:[Object(k.jsx)(w.a.Text,{type:"secondary",children:a}),Object(k.jsx)(w.a.Text,{type:"secondary",children:r})]})]})})})},ue=function(){return Object(k.jsx)(w.a.Title,{type:"secondary",level:2,children:"Movies not found"})},je=function(e){var t=e.movies;return Object(k.jsx)(y.a,{gutter:[16,16],children:(null===t||void 0===t?void 0:t.length)?null===t||void 0===t?void 0:t.map((function(e){return Object(k.jsx)(oe,{title:e.Title,year:e.Year,poster:e.Poster,imdbID:e.imdbID,type:e.Type},e.imdbID)})):Object(k.jsx)(_.a,{span:24,children:Object(k.jsx)(ue,{})})})},le=a(180),be=function(){return Object(k.jsx)(le.a,{tip:"Loading..."})},de=a(128),Oe=a.n(de),fe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return{items:e.movies.items}})).items,a=Object(n.useState)(B.getUrlMovies()),c=Object(L.a)(a,2),r=c[0],i=c[1],s=Y(r),u=s.data,j=s.isLoading,l=s.error,b=function(){var e=Object(A.a)(R.a.mark((function e(t,a){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(B.getUrlMovies(t,a));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u&&e(C(u.Search))}),[u]),Object(k.jsxs)(m.a.Content,{className:Oe.a.container,children:[Object(k.jsx)(Z,{getMovies:b}),j?Object(k.jsx)(be,{}):l?Object(k.jsx)(w.a.Title,{level:2,type:"danger",children:"Attetion: ".concat(l)}):Object(k.jsx)(je,{movies:t}),Object(k.jsx)(U.a,{})]})},he=a(129),pe=a.n(he),ve=function(){var e=Object(o.c)((function(e){return{items:e.favourites.favourites}})).items;return Object(k.jsxs)(m.a.Content,{className:pe.a.container,children:[Object(k.jsx)(je,{movies:e}),Object(k.jsx)(U.a,{})]})},xe=function(){return Object(k.jsx)(w.a.Title,{level:2,children:"\u0423\u043f\u0441, \u0432\u044b \u043f\u0435\u0440\u0435\u0448\u043b\u0438 \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u043d\u0430\u0437\u0430\u0434."})},me=function(){return Object(k.jsxs)(N.d,{children:[Object(k.jsx)(N.b,{path:"/",exact:!0,children:Object(k.jsx)(fe,{})}),Object(k.jsx)(N.b,{path:"/favourites",exact:!0,children:Object(k.jsx)(ve,{})}),Object(k.jsx)(N.b,{path:"/error",children:Object(k.jsx)(xe,{})}),Object(k.jsx)(N.a,{to:"/error"})]})},ge=a(130),ye=a.n(ge),_e=function(){return Object(k.jsxs)(m.a,{children:[Object(k.jsx)(I,{}),Object(k.jsxs)(m.a,{className:ye.a.mainLayout,children:[Object(k.jsx)(V,{}),Object(k.jsx)(g.a,{}),Object(k.jsx)(me,{})]})]})},we=(a(177),function(){return Object(k.jsx)(s.a,{children:Object(k.jsx)(o.a,{store:x,children:Object(k.jsx)(_e,{})})})});i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(we,{})}),document.getElementById("root"))},74:function(e,t,a){e.exports={header:"header_header__1uyEF",logo:"header_logo__21kg2",social:"header_social__2prnw",wrapper:"header_wrapper__3i4xy",github:"header_github__1Q4dj"}}},[[178,1,2]]]);
//# sourceMappingURL=main.e9a72eeb.chunk.js.map