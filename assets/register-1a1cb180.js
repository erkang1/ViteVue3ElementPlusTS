import{r as e,d as r,o as s,c as l,w as a,a as t,b as o,e as d,p as i,f as u,g as m,h as p,_ as n,i as g,u as c}from"./index-7157b7b2.js";const b=e({name:"",email:"",password:"",password2:"",role:""}),f=e({name:[{message:"用户名不能为空",required:!0,trigger:"blur"},{min:2,max:30,message:"用户名长度在 2 到 30 字符",trigger:"blur"}],email:[{type:"email",message:"邮箱的格式有误",required:!0,trigger:"blur"}],password:[{message:"密码不能为空",required:!0,trigger:"blur"},{min:6,max:30,message:"密码长度范围必须在 6~30 字符内",trigger:"blur"}],password2:[{validator:(e,r,s)=>{""===r?s(new Error("请再次输入密码")):r!==b.password?s(new Error("请输入相同的密码")):s()},trigger:"blur"}]}),_=(e=>(i("data-v-eb0f6cb2"),e=e(),u(),e))((()=>m("div",{class:"titletext"},"注册Demo",-1))),U=n(r({__name:"RegisterForm",props:{registerUser:{type:Object,required:!0},registerRules:{type:Object,required:!0}},setup(e){const{ctx:r}=p();return(i,u)=>{const m=t("el-input"),p=t("el-form-item"),n=t("el-option"),g=t("el-select"),c=t("el-button"),b=t("RouterLink"),f=t("el-form");return s(),l(f,{ref:"registerForm",model:e.registerUser,rules:e.registerRules,class:"registerForm sign-up-form"},{default:a((()=>[_,o(p,{prop:"name"},{default:a((()=>[o(m,{modelValue:e.registerUser.name,"onUpdate:modelValue":u[0]||(u[0]=r=>e.registerUser.name=r),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),o(p,{prop:"email"},{default:a((()=>[o(m,{modelValue:e.registerUser.email,"onUpdate:modelValue":u[1]||(u[1]=r=>e.registerUser.email=r),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),o(p,{prop:"password"},{default:a((()=>[o(m,{type:"password",modelValue:e.registerUser.password,"onUpdate:modelValue":u[2]||(u[2]=r=>e.registerUser.password=r),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),o(p,{prop:"password2"},{default:a((()=>[o(m,{type:"password",modelValue:e.registerUser.password2,"onUpdate:modelValue":u[3]||(u[3]=r=>e.registerUser.password2=r),placeholder:"请再次输入密码确认"},null,8,["modelValue"])])),_:1}),o(p,null,{default:a((()=>[o(g,{type:"password",modelValue:e.registerUser.role,"onUpdate:modelValue":u[4]||(u[4]=r=>e.registerUser.role=r),placeholder:"选择你的角色",style:{width:"100%"}},{default:a((()=>[o(n,{lable:"管理员",value:"管理员"},{default:a((()=>[d("管理员")])),_:1}),o(n,{lable:"用户",value:"用户"},{default:a((()=>[d("用户")])),_:1}),o(n,{lable:"游客",value:"游客"},{default:a((()=>[d("游客")])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(p,null,{default:a((()=>[o(c,{type:"primary",onClick:u[5]||(u[5]=e=>{return s="registerForm",void r.$refs[s].validate((e=>{if(!e)return!1;alert("submit!")}));var s}),class:"submit-btn"},{default:a((()=>[d("注册")])),_:1})])),_:1}),o(b,{to:"/",class:"register-btn"},{default:a((()=>[d("去登陆")])),_:1})])),_:1},8,["model","rules"])}}}),[["__scopeId","data-v-eb0f6cb2"]]),w={class:"container"},v={class:"forms-container"},V=(e=>(i("data-v-e8657bee"),e=e(),u(),e))((()=>m("div",{class:"loginbgicon"},null,-1))),y={class:"signin-signup"},h={class:"signbox"},x=n(r({__name:"register",setup:e=>(e,r)=>(s(),g("div",w,[m("div",v,[V,m("div",y,[m("div",h,[o(U,{registerUser:c(b),registerRules:c(f)},null,8,["registerUser","registerRules"])])])])]))}),[["__scopeId","data-v-e8657bee"]]);export{x as default};