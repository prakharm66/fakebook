(this["webpackJsonpreact-complete-guide1"]=this["webpackJsonpreact-complete-guide1"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(4),d=n.n(c),l=(n(13),n(5)),r=n(6),o=n(8),j=n(7),u=(n(14),n(15),n(3),n(0)),b=function(e){return Object(u.jsxs)("div",{className:"field",children:[e.children," ---",Object(u.jsx)("input",{type:e.type})]})},a=function(){document.getElementById("Signin").style.visibility="visible",document.getElementById("Signup").style.visibility="hidden",alert("Account has been created successfully")},h=function(e){return Object(u.jsxs)("div",{id:"Signup",children:[Object(u.jsx)("h1",{className:"heading",children:"SIGN UP"}),Object(u.jsx)("p",{children:"You can create your new profile here . Please enter your details so that we can create your new profile"}),Object(u.jsx)(b,{type:"text",children:"Name"}),Object(u.jsx)(b,{type:"text",children:"Nick Name"}),Object(u.jsx)(b,{type:"email",children:"Email ID"}),Object(u.jsx)(b,{type:"phone",children:"Phone Number"}),Object(u.jsx)(b,{type:"password",children:"Set your password"}),Object(u.jsx)(b,{type:"password",children:"Confirm your password"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:a,children:"Confirm and Go to Login"})]})},y=function(){document.getElementById("Signup").style.visibility="hidden",document.getElementById("Signin").style.visibility="hidden",alert("Sign In Successfull")},O=function(){document.getElementById("Signup").style.visibility="visible",document.getElementById("Signin").style.visibility="hidden"},p=function(e){return Object(u.jsxs)("div",{id:"Signin",children:[Object(u.jsx)("h1",{className:"heading",children:"SIGN IN / LOGIN"}),Object(u.jsx)("p",{children:"You may login with your credentials. Please enter your email ID and password"}),Object(u.jsx)(b,{type:"email",children:"Email ID"}),Object(u.jsx)(b,{type:"password",children:"Password"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:y,children:"Sign In / Login in"}),"OR",Object(u.jsx)("button",{onClick:O,children:"SIGN UP"})]})},m=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:Object(u.jsx)("a",{onClick:e.src,children:e.children})})})},x=(n(17),function(){document.getElementById("Signup").style.visibility="visible",document.getElementById("Signin").style.visibility="hidden"}),g=function(){document.getElementById("Signin").style.visibility="visible",document.getElementById("Signup").style.visibility="hidden"},v=function(){document.getElementById("Signup").style.visibility="hidden",document.getElementById("Signin").style.visibility="hidden"},f=function(e){return Object(u.jsxs)("div",{className:"Navbar",children:[Object(u.jsx)(m,{src:x,children:"Sign Up"}),Object(u.jsx)(m,{src:g,children:"Sign In"}),Object(u.jsx)(m,{src:v,children:"Dashboard"})]})},I=function(e){return Object(u.jsxs)("div",{id:"input",children:[Object(u.jsx)("input",{type:"text",placeholder:"Type your Post",id:"inpbox"}),Object(u.jsx)("button",{onClick:e.funct,id:"inpbtn",children:"Submit"})]})},S=function(e){return Object(u.jsxs)("div",{className:"post",children:[Object(u.jsxs)("h2",{children:[" ",e.user]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("div",{className:"btn",children:"Edit"}),Object(u.jsx)("div",{className:"btn",children:"Delete"})]}),Object(u.jsxs)("p",{children:[" ",e.children]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{id:"like"}),Object(u.jsx)("div",{id:"dislike"})]})]})},k=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={posts:[{user:"Fakebook Team",message:"Thank You for using fakebbok , now You can share your posts here",like:0,dislike:0}]},e.postAddHandler=function(){var t=e.state.posts;console.log(t),t.splice(0,0,{user:"Anonymous User",message:document.getElementById("inpbox").value,like:1,dislike:1}),document.getElementById("inpbox").value="",e.setState({posts:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(u.jsx)("div",{children:this.state.posts.map((function(e){return Object(u.jsx)(S,{user:e.user,children:e.message})}))});return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)(h,{}),Object(u.jsx)(p,{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"FAKEBOOK"}),Object(u.jsxs)("div",{className:"Dashboard",children:[Object(u.jsx)(I,{funct:this.postAddHandler}),e]})]})}}]),n}(i.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,d=t.getTTFB;n(e),i(e),s(e),c(e),d(e)}))};d.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),N()}],[[18,1,2]]]);
//# sourceMappingURL=main.a58225fd.chunk.js.map