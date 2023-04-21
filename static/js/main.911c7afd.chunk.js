(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(24),a=n(26),r=n.n(a),i=n(6),o=n(38),l=n(3),u=n(5),j=s.c,b=s.b,d=n(13),g=n(15),m=n(4),O=n.n(m),p=n(7),h="https://api.wisey.app",x="api/v1",f="".concat(h,"/").concat(x,"/auth/anonymous?platform=subscriptions"),v="".concat(h,"/").concat(x,"/core/preview-courses"),_=function(){return fetch(f).then((function(e){return e.json()}))};function N(){return(N=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_().then((function(e){return fetch(t?"".concat(v,"/").concat(t):v,{headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(e.token)}})})).then((function(e){if(!e.ok)throw new Error;return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){return function(e){return N.apply(this,arguments)}(e)},y=function(){var e=Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(""));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(g.b)("courses/fetch",(function(){return y()})),P=Object(g.c)({name:"courses",initialState:{courses:[],loading:!1,error:""},reducers:{},extraReducers:function(e){e.addCase(w.pending,(function(e){return Object(d.a)(Object(d.a)({},e),{},{loading:!0})})),e.addCase(w.fulfilled,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{courses:t.payload.courses,loading:!1,error:""})})),e.addCase(w.rejected,(function(e){return Object(d.a)(Object(d.a)({},e),{},{error:"Error",loading:!1})}))}}),L=P.reducer,I=(P.actions,n(10)),S=n.n(I),A=Object(g.c)({name:"actaulCourse",initialState:"",reducers:{setActualCourse:function(e,t){return t.payload}}}),F=A.reducer,E=A.actions,T=(n(53),n(1)),B=function(e){var t=e.course,n=j((function(e){return e.actualCourse})),c=b();return Object(T.jsxs)("div",{className:"courseItem",children:[Object(T.jsx)("img",{className:"courseItem__image",src:"".concat(t.previewImageLink,"/cover.webp"),alt:"product"}),Object(T.jsx)("h4",{className:"courseItem__name",children:t.title}),Object(T.jsxs)("div",{className:"courseItem__info",children:[Object(T.jsx)("p",{children:"Lessons: ".concat(t.lessonsCount)}),Object(T.jsx)("p",{children:"Rating: ".concat(t.rating,"/5")})]}),t.meta.skills?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("p",{className:"courseItem__skills",children:"Skills:"}),Object(T.jsx)("ul",{className:"courseItem__skillsList",children:t.meta.skills.map((function(e){return Object(T.jsx)("li",{className:"courseItem__skillItem",children:e},e)}))})]}):"",Object(T.jsx)(i.b,{className:S()("courseItem__button",{"courseItem__button--added":t.id===n}),to:"/courses/".concat(t.meta.slug),onClick:function(){return c(E.setActualCourse(t.id))},children:t.id===n?"Continue":"Start Course"})]})},R=(n(55),function(){return Object(T.jsxs)("div",{className:"error",children:[Object(T.jsx)("h2",{className:"error__title",children:"Ooops!"}),Object(T.jsx)("p",{className:"error__message",children:"Something went wrong!"})]})}),D=(n(56),function(){return Object(T.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(T.jsx)("div",{className:"Loader__content"})})});function H(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),c=t[0],s=t[1];null===s?n.delete(c):Array.isArray(s)?(n.delete(c),s.forEach((function(e){n.append(c,e)}))):n.set(c,s)})),n.toString()}n(57);var U=function(e){var t=e.pages,n=Object(i.d)(),c=Object(u.a)(n,2),s=c[0],a=c[1],r=s.get("page");return Object(T.jsx)("div",{className:"paginationPages",children:t.length<5?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("button",{type:"button",className:S()("paginationPages__page",{"paginationPages__page--isActive":!r||"1"===r}),onClick:function(){a(H(s,{page:"1"}))},children:"1"}),t.slice(1).map((function(e){return Object(T.jsx)("button",{type:"button",className:S()("paginationPages__page",{"paginationPages__page--isActive":r&&+r===e}),onClick:function(){a(H(s,{page:String(e)}))},children:e},e)}))]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("button",{type:"button",className:S()("paginationPages__page",{"paginationPages__page--isActive":!r||r&&"1"===r}),onClick:function(){a(H(s,{page:"1"}))},children:"1"}),r&&"1"!==r&&"2"!==r&&Object(T.jsx)("div",{className:"paginationPages__dots",children:"..."}),Object(T.jsxs)("button",{type:"button",className:S()("paginationPages__page",{"paginationPages__page--isActive":r&&"1"!==r&&+r!==t.length}),onClick:function(e){a(H(s,{page:e.currentTarget.innerText}))},children:[(!r||"1"===r)&&2,r&&+r===t.length&&t.length-1,r&&r&&"1"!==r&&+r!==t.length&&+r]}),(!r||r&&+r!==t.length&&+r!==t.length-1)&&Object(T.jsx)("div",{className:"paginationPages__dots",children:"..."}),Object(T.jsx)("button",{type:"button",className:S()("paginationPages__page",{"paginationPages__page--isActive":r&&+r===t.length}),onClick:function(){a(H(s,{page:String(t.length)}))},children:t.length})]})})},G=(n(58),function(e){var t=e.pages,n=Object(i.d)(),c=Object(u.a)(n,2),s=c[0],a=c[1],r=s.get("page"),o=function(e){return a(H(s,{page:e}))};return Object(T.jsxs)("div",{"data-cy":"pagination",className:"pagination",children:[Object(T.jsx)("button",{className:S()("pagination__button",{"pagination__button--disabled":!r||r&&"1"===r}),type:"button",onClick:function(){return o(r&&String(+r-1))},disabled:!r||"1"===r,"data-cy":"paginationLeft",children:r&&"1"!==r?Object(T.jsx)("img",{src:"./img/arrowLeft.svg",alt:"prevPage"}):Object(T.jsx)("img",{src:"./img/arrowLeftDisabled.svg",alt:"prevPageDisabled"})}),Object(T.jsx)(U,{pages:t}),Object(T.jsx)("button",{className:S()("pagination__button",{"pagination__button--disabled":r&&+r===t.length}),type:"button",onClick:function(){return o(r?String(+r+1):"2")},disabled:null!==r&&+r===t.length,"data-cy":"paginationRight",children:r&&+r===t.length?Object(T.jsx)("img",{src:"./img/arrowRightDisabled.svg",alt:"nextPageDisabled"}):Object(T.jsx)("img",{src:"./img/arrowRight.svg",alt:"nextPage"})})]})}),M=(n(59),function(){var e=Object(i.d)(),t=Object(u.a)(e,1)[0].get("page"),n=j((function(e){return e.courses})),s=n.courses,a=n.loading,r=n.error,o=b();Object(c.useEffect)((function(){o(w())}),[]);var l=Array.from(Array(Math.ceil(s.length/10)+1).keys()).slice(1);return Object(T.jsx)("div",{className:"courses",children:a?Object(T.jsx)(D,{}):Object(T.jsx)(T.Fragment,{children:!a&&r?Object(T.jsx)(R,{}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h1",{className:"courses__title",children:"Courses"}),Object(T.jsx)("div",{className:"courses__main",children:Object(T.jsx)("ul",{className:"courses__list",children:s.slice(t?10*(+t-1):0,10*(t?+t:1)).map((function(e){return Object(T.jsx)("li",{children:Object(T.jsx)(B,{course:e})},e.id)}))})}),Object(T.jsx)(G,{pages:l})]})})})}),q=function(){return Object(T.jsx)("div",{className:"container",children:Object(T.jsx)(M,{})})},z=(n(60),function(){return Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"notImplementedPage",children:[Object(T.jsx)("h2",{className:"notImplementedPage__title",children:"Ooops!"}),Object(T.jsx)("p",{className:"notImplementedPage__message",children:"We are sorry, but this feature is not implemented yet!"}),Object(T.jsx)(i.b,{className:"notImplementedPage__button",to:"/",children:"Back to courses page"})]})})}),J=function(){return Object(T.jsx)(z,{})},W=function(){return Object(T.jsx)(z,{})},K=(n(61),function(){return Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"notFoundPage",children:[Object(T.jsx)("h2",{className:"notFoundPage__title",children:"Ooops!"}),Object(T.jsx)("p",{className:"notFoundPage__message",children:"Page not found"}),Object(T.jsx)(i.b,{className:"notFoundPage__button",to:"/",children:"Back to courses page"})]})})}),Q=(n(62),function(){var e=Object(l.n)();return Object(T.jsxs)("button",{className:"backButton",type:"button",onClick:function(){return e(-1)},"data-cy":"backButton",children:[Object(T.jsx)("img",{src:"./img/arrowLeft.svg",alt:"back"}),"Back"]})}),V=n(39),X=n.n(V),Y=Object(g.c)({name:"actaulLesson",initialState:{actualLesson:null},reducers:{setActualLesson:function(e,t){return Object(d.a)(Object(d.a)({},e),{},{actualLesson:t.payload})}}}),Z=Y.reducer,$=Y.actions,ee=(n(63),function(e){var t,n,s=e.activeCourse,a=Object(c.useState)(!1),r=Object(u.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)(""),d=Object(u.a)(l,2),g=d[0],m=d[1],O=j((function(e){return e.actualLesson})).actualLesson,p=b();if(!s)return null;var h=function(){return s.lessons.some((function(e){return e.link===(null===O||void 0===O?void 0:O.link)}))?null===O||void 0===O?void 0:O.link:null},x=null===(t=s.lessons.find((function(e){return 1===e.order})))||void 0===t?void 0:t.link;return Object(T.jsxs)("div",{className:"activeCourse",children:[h()||x?Object(T.jsx)(X.a,{url:h()||x}):Object(T.jsx)("img",{className:"activeCourse__image",src:O&&"".concat(null===O||void 0===O?void 0:O.previewImageLink,"/lesson-").concat(null===O||void 0===O?void 0:O.order,".webp")||"".concat(null===(n=s.lessons.find((function(e){return 1===e.order})))||void 0===n?void 0:n.previewImageLink,"/lesson-1.webp"),alt:"previewImage"}),Object(T.jsxs)("div",{className:"activeCourse__info",children:[Object(T.jsx)("h1",{children:s.title}),Object(T.jsx)("p",{children:s.description}),Object(T.jsx)("p",{children:"Lessons:"}),Object(T.jsx)("ul",{className:"activeCourse__lessons",children:s.lessons.sort((function(e,t){return e.order-t.order})).map((function(e){return Object(T.jsxs)("li",{className:"activeCourse__lesson",children:[Object(T.jsxs)("button",{className:S()("activeCourse__button",{"activeCourse__button--locked":"locked"===e.status}),type:"button",onClick:function(){return"locked"===e.status?(t=e.id,o(!0),m(t),void setTimeout((function(){m(""),o(!1)}),5e3)):p($.setActualLesson(e));var t},children:["".concat(e.order,". ").concat(e.title),i&&g===e.id&&Object(T.jsx)("div",{className:"activeCourse__lockedMessage",children:Object(T.jsx)("p",{children:"Complete all required and all optional quests on the topic to unlock video."})})]}),!h()&&1===e.order&&e.link&&Object(T.jsx)("img",{className:"activeCourse__isPlaying",src:"./img/play-button.svg",alt:"play"}),(null===O||void 0===O?void 0:O.link)&&h()===e.link&&Object(T.jsx)("img",{className:"activeCourse__isPlaying",src:"./img/play-button.svg",alt:"play"}),!e.link&&(null===O||void 0===O?void 0:O.previewImageLink)===e.previewImageLink&&Object(T.jsx)("img",{className:"activeCourse__isPlaying",src:"./img/play-button.svg",alt:"play"}),(null===O||void 0===O?void 0:O.link)&&(null===O||void 0===O?void 0:O.link)===e.link&&Object(T.jsx)("p",{className:"activeCourse__activeLesson",children:"Last video"})]},e.id)}))})]})]})}),te=(n(64),function(e){var t=e.activeCourse;return t&&Object(T.jsxs)("div",{className:"breadcrumbs","data-cy":"breadCrumbs",children:[Object(T.jsx)(i.b,{to:"/",className:"breadcrumbs__link",children:Object(T.jsx)("img",{src:"./img/home.svg",alt:"home",className:"icon"})}),Object(T.jsx)("img",{src:"./img/arrowRightDisabled.svg",alt:"arrowLeft"}),Object(T.jsx)("p",{className:"breadcrumbs__activeProduct",children:t.title})]})}),ne=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],o=r[1],b=Object(l.l)(),d=j((function(e){return e.courses})).courses.find((function(e){return e.meta.slug===b.pathname.slice(9)}));return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!d){e.next=6;break}return e.next=4,C(d.id);case 4:t=e.sent,s(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o("We can not load data.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(T.jsx)("div",{className:"container",children:Object(T.jsx)(T.Fragment,{children:n||i?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(te,{activeCourse:n}),Object(T.jsx)(Q,{}),i&&Object(T.jsx)(R,{}),n&&Object(T.jsx)(ee,{activeCourse:n})]}):Object(T.jsx)(D,{})})})},ce=(n(65),function(){var e=Object(l.l)();return Object(T.jsx)("div",{className:"footer",children:Object(T.jsxs)("div",{className:"footer__content",children:[Object(T.jsx)(i.b,{to:"/courses",className:"footer__logo",children:Object(T.jsx)("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})}),Object(T.jsxs)("div",{className:"footer__list",children:[Object(T.jsx)("a",{href:"https://github.com/",target:"_blank",className:"footer__item",rel:"noreferrer",children:"GITHUB"}),Object(T.jsx)(i.b,{to:"/contacts",className:"footer__item",children:"CONTACTS"}),Object(T.jsx)(i.b,{to:"/rights",className:"footer__item",children:"RIGHTS"})]}),Object(T.jsxs)("div",{className:"footer__up",children:[Object(T.jsx)(i.b,{className:"footer__text",onClick:function(){return window.scrollTo(0,0)},to:"".concat(e.pathname),children:"Back to top"}),Object(T.jsx)("button",{type:"button",className:"footer__button",onClick:function(){return window.scrollTo(0,0)},children:Object(T.jsx)("img",{src:"./img/arrowUp.svg",alt:"up"})})]})]})})}),se=function(e){var t=e.to,n=e.text;return Object(T.jsx)(i.c,{to:t,className:function(e){var t=e.isActive;return S()("navbar__item",{"is-active":t})},children:n})},ae=(n(66),function(){return Object(T.jsxs)("nav",{className:"navbar",children:[Object(T.jsx)(i.b,{to:"/courses",className:"navbar__logo",children:Object(T.jsx)("img",{src:"./img/logo.svg",alt:"logo",className:"logo"})}),Object(T.jsxs)("div",{className:"navbar__list",children:[Object(T.jsx)(se,{to:"/courses",text:"COURSES"}),Object(T.jsx)(se,{to:"/english",text:"ENGLISH"}),Object(T.jsx)(se,{to:"/hometask",text:"HOMETASK"})]})]})}),re=(n(67),function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(ae,{}),Object(T.jsxs)(l.d,{children:[Object(T.jsx)(l.b,{path:"*",element:Object(T.jsx)(K,{})}),Object(T.jsxs)(l.b,{path:"/courses",children:[Object(T.jsx)(l.b,{index:!0,element:Object(T.jsx)(q,{})}),Object(T.jsx)(l.b,{path:":slug",element:Object(T.jsx)(ne,{})})]}),Object(T.jsx)(l.b,{path:"/",element:Object(T.jsx)(l.a,{to:"/courses",replace:!0})}),Object(T.jsx)(l.b,{path:"/english",element:Object(T.jsx)(J,{})}),Object(T.jsx)(l.b,{path:"/hometask",element:Object(T.jsx)(W,{})}),Object(T.jsx)(l.b,{path:"/notImplementedPage",element:Object(T.jsx)(z,{})})]}),Object(T.jsx)(ce,{})]})}),ie=n(12),oe=n(16),le=n(40),ue=n.n(le),je=Object(ie.b)({actualCourse:F,courses:L,actualLesson:Z}),be={key:"root",storage:ue.a},de=Object(oe.g)(be,je),ge=Object(g.a)({reducer:de,middleware:function(e){return e({serializableCheck:{ignoredActions:[oe.a,oe.f,oe.b,oe.c,oe.d,oe.e]}})}}),me=Object(oe.h)(ge),Oe=ge;r.a.render(Object(T.jsx)(i.a,{children:Object(T.jsx)(s.a,{store:Oe,children:Object(T.jsx)(o.a,{loading:null,persistor:me,children:Object(T.jsx)(re,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.911c7afd.chunk.js.map