import{r as e,d as s,a,o as l,c as r,w as o,b as i,e as t,f as n,u,p as d,g as m,h as p,i as g,_ as c,j as f,k as _}from"./index-ad6e0a2a.js";const b=e({email:"admin@vue.com",password:"123456"}),v=e({email:[{type:"email",message:"邮箱格式有误",required:!0,trigger:"blur"}],password:[{message:"密码为空",required:!0,trigger:"blur"},{min:6,max:30,message:"密码长度范围必须在 6~30 字符内",trigger:"blur"}]}),U=(e=>(d("data-v-5a411237"),e=e(),m(),e))((()=>p("div",{class:"titletext"},"登录Demo",-1))),V=c(s({__name:"LoginForm",props:{loginUser:{type:Object,required:!0},rules:{type:Object,required:!0}},setup(e){let{proxy:s}=g(),d=u();const m=e=>{s.$refs[e].validate((e=>{if(!e)return!1;d.push("/ViteVue3ElementPlusTS/dashboard")}))};return(s,u)=>{const d=a("el-input"),p=a("el-form-item"),g=a("el-button"),c=a("RouterLink"),f=a("el-form");return l(),r(f,{ref:"loginForm",model:e.loginUser,rules:e.rules,class:"loginForm sign-in-form"},{default:o((()=>[U,i(p,{prop:"email"},{default:o((()=>[i(d,{modelValue:e.loginUser.email,"onUpdate:modelValue":u[0]||(u[0]=s=>e.loginUser.email=s),onKeyup:u[1]||(u[1]=t((e=>m("loginForm")),["enter"])),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),i(p,{prop:"password"},{default:o((()=>[i(d,{type:"password",modelValue:e.loginUser.password,"onUpdate:modelValue":u[2]||(u[2]=s=>e.loginUser.password=s),onKeyup:u[3]||(u[3]=t((e=>m("loginForm")),["enter"])),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),i(p,null,{default:o((()=>[i(g,{type:"primary",onClick:u[4]||(u[4]=e=>m("loginForm")),class:"submit-btn"},{default:o((()=>[n("登陆")])),_:1})])),_:1}),i(c,{to:"/ViteVue3ElementPlusTS/Register",class:"register-btn"},{default:o((()=>[n("立即注册")])),_:1})])),_:1},8,["model","rules"])}}}),[["__scopeId","data-v-5a411237"]]),y={class:"container"},w={class:"forms-container"},x=(e=>(d("data-v-4a396e1a"),e=e(),m(),e))((()=>p("div",{class:"loginbgicon"},null,-1))),F={class:"signin-signup"},h={class:"signbox"},j=c(s({__name:"index",setup:e=>(e,s)=>(l(),f("div",y,[p("div",w,[x,p("div",F,[p("div",h,[i(V,{loginUser:_(b),rules:_(v)},null,8,["loginUser","rules"])])])])]))}),[["__scopeId","data-v-4a396e1a"]]);export{j as default};