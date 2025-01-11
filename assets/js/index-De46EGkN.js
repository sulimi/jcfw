import{u as e,q as l,r as a,K as o,y as i,p as t,f as s,F as r,C as d,L as n,M as u}from"./element-plus-DzEfNFEh.js";import{d as p,r as c,U as m,w as v,I as f,J as g,o as h,a as C,L as y,a2 as R,i as _,c as k,G as b,k as P,O as V,F as I}from"./@vue-DMj6kJP1.js";import{a as j}from"./index-DQPoPE4b.js";import"./lodash-es-Dfcc72EO.js";import"./@vueuse-D6tFO15K.js";import"./@element-plus-UY_HfQnI.js";import"./async-validator-BTKOuuO-.js";import"./@ctrl-D2oWfImC.js";import"./@popperjs-CpAfbxx4.js";import"./normalize-wheel-es-Vn5vHDCm.js";import"./vue-router-BQuPhA_r.js";import"./pinia-DgxDnLzq.js";import"./axios-DMXdiZgf.js";const N={class:"dialog-footer"},U=p({__name:"RolePopForm",props:{roleDialogVisible:{type:Boolean},dialogType:{},editRoleInfo:{},reloadRoleList:{type:Boolean}},emits:["update:roleDialogVisible","update:editRoleInfo","update:reloadRoleList"],setup(r,{emit:d}){const n=r,u=d,p=c(),_=m({id:"",roleName:"",roleCode:"",description:"",status:"1"});v((()=>n.roleDialogVisible),(e=>{e&&n.editRoleInfo?(_.id=n.editRoleInfo.id,_.roleName=n.editRoleInfo.roleName,_.roleCode=n.editRoleInfo.roleCode,_.description=n.editRoleInfo.description,_.status=n.editRoleInfo.status):(_.id="",_.roleName="",_.roleCode="",_.description="",_.status="1",u("update:editRoleInfo",null))}));const k={roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],roleCode:[{required:!0,message:"请输入角色编码",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},b=()=>{var e;u("update:roleDialogVisible",!1),u("update:editRoleInfo",null),null==(e=p.value)||e.resetFields()},P=async()=>{p.value&&await p.value.validate((async e=>{if(e)try{u("update:reloadRoleList",!0)}catch(l){}}))};return(r,d)=>{const n=l,u=a,c=o,m=i,v=t,V=s,I=e;return h(),f(I,{title:"add"===r.dialogType?"新增角色":"编辑角色","model-value":r.roleDialogVisible,width:"500px",onClose:b},{footer:g((()=>[C("span",N,[y(V,{onClick:b},{default:g((()=>d[6]||(d[6]=[R("取消")]))),_:1}),y(V,{type:"primary",onClick:P},{default:g((()=>d[7]||(d[7]=[R("确定")]))),_:1})])])),default:g((()=>[y(v,{ref_key:"roleFormRef",ref:p,model:_,rules:k,"label-width":"80px"},{default:g((()=>[y(u,{label:"角色名称",prop:"roleName"},{default:g((()=>[y(n,{modelValue:_.roleName,"onUpdate:modelValue":d[0]||(d[0]=e=>_.roleName=e),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),y(u,{label:"角色编码",prop:"roleCode"},{default:g((()=>[y(n,{modelValue:_.roleCode,"onUpdate:modelValue":d[1]||(d[1]=e=>_.roleCode=e),placeholder:"请输入角色编码"},null,8,["modelValue"])])),_:1}),y(u,{label:"角色描述",prop:"description"},{default:g((()=>[y(n,{modelValue:_.description,"onUpdate:modelValue":d[2]||(d[2]=e=>_.description=e),type:"textarea",rows:3,placeholder:"请输入角色描述"},null,8,["modelValue"])])),_:1}),y(u,{label:"状态",prop:"status"},{default:g((()=>[y(m,{modelValue:_.status,"onUpdate:modelValue":d[3]||(d[3]=e=>_.status=e)},{default:g((()=>[y(c,{value:"1"},{default:g((()=>d[4]||(d[4]=[R("启用")]))),_:1}),y(c,{value:"0"},{default:g((()=>d[5]||(d[5]=[R("禁用")]))),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title","model-value"])}}}),w={class:"role-card"},x={class:"card-header"},D=j(p({__name:"RoleList",props:{currentRole:{},isChangePermission:{type:Boolean}},emits:["update:currentRole","update:isChangePermission"],setup(e,{emit:l}){const a=e,o=l,i=c([]),t=c(!1),n=c("add"),u=c(null),p=c(!1);_((()=>{P()})),v((()=>p.value),(e=>{e&&P()}));const m=()=>{n.value="add",t.value=!0},f=e=>{var l;(null==(l=a.currentRole)?void 0:l.id)!==e.id&&o("update:currentRole",e),a.isChangePermission&&o("update:isChangePermission",!1)},P=async()=>{try{i.value=[{id:"1",roleName:"超级管理员",roleCode:"SUPER_ADMIN",description:"系统超级管理员",status:"1"},{id:"2",roleName:"普通管理员",roleCode:"SUPER_B",description:"管理员",status:"1"}],o("update:currentRole",i.value[0])}catch(e){}};return(e,l)=>{const a=s,c=d,v=r;return h(),k(b,null,[C("div",w,[C("div",x,[l[4]||(l[4]=C("span",null,"角色列表",-1)),y(a,{type:"primary",onClick:m},{default:g((()=>l[3]||(l[3]=[R("新增角色")]))),_:1})]),y(v,{data:i.value,"highlight-current-row":"",onRowClick:f,class:"role-table"},{default:g((()=>[y(c,{prop:"roleName",label:"角色名称"}),y(c,{prop:"roleCode",label:"角色编码"}),y(c,{label:"操作",width:"200"},{default:g((({row:e})=>[y(a,{type:"primary",link:"",onClick:l=>(e=>{n.value="edit",t.value=!0,u.value=e})(e)},{default:g((()=>l[5]||(l[5]=[R("编辑")]))),_:2},1032,["onClick"]),y(a,{type:"success",link:"",onClick:l=>((e,l)=>{l.stopPropagation(),o("update:currentRole",e),o("update:isChangePermission",!0)})(e,l)},{default:g((()=>l[6]||(l[6]=[R("分配权限")]))),_:2},1032,["onClick"]),y(a,{type:"danger",link:"",onClick:e=>{}},{default:g((()=>l[7]||(l[7]=[R("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),y(U,{roleDialogVisible:t.value,"onUpdate:roleDialogVisible":l[0]||(l[0]=e=>t.value=e),dialogType:n.value,editRoleInfo:u.value,"onUpdate:editRoleInfo":l[1]||(l[1]=e=>u.value=e),reloadRoleList:p.value,"onUpdate:reloadRoleList":l[2]||(l[2]=e=>p.value=e)},null,8,["roleDialogVisible","dialogType","editRoleInfo","reloadRoleList"])],64)}}}),[["__scopeId","data-v-03487268"]]),L={class:"permission-tree-card"},T={class:"permission-header"},B={key:0},F=j(p({__name:"PermissionTree",props:{currentRole:{},isChangePermission:{type:Boolean}},setup(e){const l=e;v((()=>l.currentRole),(e=>{e&&j(e.id)}),{deep:!0}),v((()=>l.isChangePermission),(e=>{e||m()}));const a=P((()=>l.isChangePermission?"分配权限":"角色权限")),o=c([]),i={children:"children",label:"title",disabled:"disabled"},t=c([]),r=c(null);_((()=>{b()}));const d=()=>{l.isChangePermission||m()},p=async()=>{},m=()=>{var e;null==(e=r.value)||e.setCheckedKeys(t.value)},b=async()=>{try{o.value=[{id:"1",title:"系统管理",children:[{id:"1-1",title:"用户管理",children:[{id:"1-1-1",title:"查看用户"},{id:"1-1-2",title:"新增用户"},{id:"1-1-3",title:"编辑用户"},{id:"1-1-4",title:"删除用户"}]},{id:"1-2",title:"角色管理",children:[{id:"1-2-1",title:"查看角色"},{id:"1-2-2",title:"新增角色"},{id:"1-2-3",title:"编辑角色"},{id:"1-2-4",title:"删除角色"}]},{id:"1-3",title:"角色管理",children:[{id:"1-3-1",title:"查看角色"},{id:"1-3-2",title:"新增角色"},{id:"1-3-3",title:"编辑角色"},{id:"1-3-4",title:"删除角色"}]},{id:"1-4",title:"角色管理",children:[{id:"1-4-1",title:"查看角色"},{id:"1-4-2",title:"新增角色"},{id:"1-4-3",title:"编辑角色"},{id:"1-4-4",title:"删除角色"}]}]}]}catch(e){}},j=async e=>{try{const e=["1-1-1","1-1-2"];t.value=e}catch(l){}};return(e,l)=>{var c;const v=s,_=n,b=u;return h(),k("div",L,[C("div",T,[C("span",null,V(a.value)+" - "+V((null==(c=e.currentRole)?void 0:c.roleName)||"请选择角色"),1),e.isChangePermission?(h(),k("div",B,[y(v,{type:"primary",onClick:p},{default:g((()=>l[0]||(l[0]=[R("保存配置")]))),_:1}),y(v,{onClick:m},{default:g((()=>l[1]||(l[1]=[R("重置")]))),_:1})])):I("",!0)]),e.currentRole?(h(),f(_,{key:0,class:"permission-tree",ref_key:"permissionTreeRef",ref:r,"show-checkbox":"","node-key":"id","default-expand-all":"",data:o.value,props:i,"default-checked-keys":t.value,onCheck:d},null,8,["data","default-checked-keys"])):(h(),f(b,{key:1,description:"请选择要配置的角色"}))])}}}),[["__scopeId","data-v-248f7793"]]),q={class:"permission-layout"},E=j({__name:"index",setup(e){const l=c(null),a=c(!1);return(e,o)=>(h(),k("div",q,[y(D,{currentRole:l.value,"onUpdate:currentRole":o[0]||(o[0]=e=>l.value=e),isChangePermission:a.value,"onUpdate:isChangePermission":o[1]||(o[1]=e=>a.value=e)},null,8,["currentRole","isChangePermission"]),y(F,{currentRole:l.value,isChangePermission:a.value},null,8,["currentRole","isChangePermission"])]))}},[["__scopeId","data-v-ed8ac611"]]);export{E as default};
