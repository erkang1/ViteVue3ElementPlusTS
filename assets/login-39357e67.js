import{r as e,d as s,o as a,c as l,w as r,a as o,b as i,e as t,p as d,f as n,g as u,h as m,_ as g,i as p,u as c}from"./index-40642552.js";const f=e({email:"",password:""}),_=e({email:[{type:"email",message:"邮箱格式有误",required:!0,trigger:"blur"}],password:[{message:"密码为空",required:!0,trigger:"blur"},{min:6,max:30,message:"密码长度范围必须在 6~30 字符内",trigger:"blur"}]}),b=(e=>(d("data-v-a7463c37"),e=e(),n(),e))((()=>u("div",{class:"titletext"},"登录Demo",-1))),v=g(s({__name:"LoginForm",props:{loginUser:{type:Object,required:!0},rules:{type:Object,required:!0}},setup(e){const{ctx:s}=m();return(d,n)=>{const u=o("el-input"),m=o("el-form-item"),g=o("el-button"),p=o("RouterLink"),c=o("el-form");return a(),l(c,{ref:"loginForm",model:e.loginUser,rules:e.rules,class:"loginForm sign-in-form"},{default:r((()=>[b,i(m,{prop:"email"},{default:r((()=>[i(u,{modelValue:e.loginUser.email,"onUpdate:modelValue":n[0]||(n[0]=s=>e.loginUser.email=s),placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),i(m,{prop:"password"},{default:r((()=>[i(u,{type:"password",modelValue:e.loginUser.password,"onUpdate:modelValue":n[1]||(n[1]=s=>e.loginUser.password=s),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),i(m,null,{default:r((()=>[i(g,{type:"primary",onClick:n[2]||(n[2]=e=>{return a="loginForm",void s.$refs[a].validate((e=>{if(!e)return!1;alert("submit!")}));var a}),class:"submit-btn"},{default:r((()=>[t("登陆")])),_:1})])),_:1}),i(p,{to:"Register",class:"register-btn"},{default:r((()=>[t("立即注册")])),_:1})])),_:1},8,["model","rules"])}}}),[["__scopeId","data-v-a7463c37"]]),U={class:"container"},w={class:"forms-container"},x=(e=>(d("data-v-7daad863"),e=e(),n(),e))((()=>u("div",{class:"loginbgicon"},null,-1))),y={class:"signin-signup"},V={class:"signbox"},q=g(s({__name:"login",setup:e=>(e,s)=>(a(),p("div",U,[u("div",w,[x,u("div",y,[u("div",V,[i(v,{loginUser:c(f),rules:c(_)},null,8,["loginUser","rules"])])])])]))}),[["__scopeId","data-v-7daad863"]]);export{q as default};
