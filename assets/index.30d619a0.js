var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{_ as o,p as i,a as l,o as r,c as u,b as p,w as d,d as c,r as m,t as h,F as v,e as g,f as y,O as b}from"./vendor.e3cd7678.js";var f={levels:{1:40,2:180,3:480,4:1100,5:2400,6:4120,7:6220,8:9850,9:14690,10:20080,11:25580,12:33180,13:41830,14:50750,15:63040,16:79130,17:99520,18:129780,19:159920,20:189800,21:222600,22:272800,23:354200,24:470400,25:625e3,26:821600,27:1063800,28:1355200,29:1699400,30:84e4,31:899e3,32:1024e3,33:1221e3,34:1496e3,35:1855e3,36:2304e3,37:2849e3,38:3496e3,39:4251e3,40:216e4,41:2255e3,42:2436e3,43:2709e3,44:308e4,45:3452e3,46:4127e3,47:5072e3,48:6241e3,49:764e4,50:4115e3,51:4401e3,52:4803e3,53:5353e3,54:6015e3,55:6892e3,56:79e5,57:9308e3,58:1122e4,59:14057e3,60:8122e3,61:8538e3,62:9247e3,63:10101e3,64:11203e3,65:124e5,66:14382e3,67:17194e3,68:20444e3,69:256e5,70:21400314,71:23239696,72:24691100,73:27213e3,74:31415926,75:37564e3,76:4649e4,77:555e5,78:666e5,79:78783200,80:763e5,81:78364e3,82:8131e4,83:851e5,84:8929e4,85:974e5,86:11005e4,87:162e6,88:264e6,89:354e6,90:696409989,91:1392819977,92:2089229966,93:21e8,94:211e7,95:10477689898,96:41910759592,97:125732278776,98:565795254492},dungeons:[{name:"Cathedral (Dungeon)",quantity:1e3},{name:"Celu Tower Bronze",quantity:15},{name:"Celu Tower Silver",quantity:250},{name:"Celu Tower Gold",quantity:2450},{name:"Ichigaya Camp Bronze",quantity:5},{name:"Ichigaya Camp Silver",quantity:80},{name:"Ichigaya Camp Gold",quantity:340},{name:"Nakano Ruins Bronze",quantity:25},{name:"Nakano Ruins Silver",quantity:340},{name:"Nakano Ruins Gold (False)",quantity:3e3},{name:"Nakano Ruins Gold (True Xuan Wu)",quantity:3600},{name:"Shibuya Quartz Bronze",quantity:20},{name:"Shibuya Quartz Silver",quantity:80},{name:"Shibuya Quartz Gold",quantity:250},{name:"Shinagawa Catacombs Bronze",quantity:25},{name:"Shinagawa Catacombs Gold",quantity:200},{name:"Suginami Tunnels Bronze",quantity:15},{name:"Suginami Tunnels Silver",quantity:210},{name:"Suginami Tunnels Gold",quantity:950},{name:"TMG Building (False)",quantity:250},{name:"Ueno Mirage Bronze",quantity:20},{name:"Ueno Mirage Silver",quantity:350},{name:"Ueno Mirage Gold",quantity:3e3},{name:"Zhu Que Bronze",quantity:20},{name:"Zhu Que Gold (Susano-O)",quantity:1520},{name:"Zhu Que Gold (Amaterasu M)",quantity:1520},{name:"Zhu Que Gold (Amaterasu F)",quantity:2660}]};var q={start:1,end:99,incense:0,gearXpBoost:0,sort:!1,talisman:!1},S={reset(){var e=o.cloneDeep(f);return{levels:e.levels,dungeons:e.dungeons,options:o.cloneDeep(q)}}};const k={name:"Options",components:{},props:{options:{type:Object,required:!0}},data:()=>({messages:{}}),methods:{reset(){this.$parent.reset()},validate(){this.messages={},this.options.start>this.options.end?(this.messages.start="You idiot.",this.messages.end="You absolute buffoon."):((this.options.start<=0||this.options.start>=100)&&(this.messages.start="Levels 1-99 only"),(this.options.end<=0||this.options.end>=100)&&(this.messages.end="Levels 1-99 only")),this.options.gearXpBoost<0&&(this.messages.xp="Gear XP Boost can't be negative"),this.messages=Object.assign({},((e,o)=>{for(var i in o||(o={}))t.call(o,i)&&s(e,i,o[i]);if(a)for(var i of a(o))n.call(o,i)&&s(e,i,o[i]);return e})({},this.messages))}}},x=d();i("data-v-4e36f6e0");const I={id:"options",class:"container"},G={class:"columns"},B={class:"column"},V={class:"column"},N=p("option",{value:"0"},"No Incense",-1),O=p("option",{value:"1"},"x2",-1),z=p("option",{value:"4"},"x5",-1),_=p("option",{value:"9"},"x10",-1),C=p("option",{value:"20.10"},"x2010",-1),w=c("Reset Options");l();const A=x(((e,a,t,n,s,o)=>{const i=m("o-input"),l=m("o-field"),d=m("o-select"),c=m("o-switch"),h=m("o-button");return r(),u("div",I,[p("div",G,[p("div",B,[p(l,{label:"From:",message:s.messages.start,variant:s.messages.start?"danger":""},{default:x((()=>[p(i,{type:"number",min:"1",max:"99",modelValue:t.options.start,"onUpdate:modelValue":a[1]||(a[1]=e=>t.options.start=e),onKeyup:o.validate,onInput:o.validate},null,8,["modelValue","onKeyup","onInput"])])),_:1},8,["message","variant"])]),p("div",V,[p(l,{label:"To:",message:s.messages.end,variant:s.messages.end?"danger":""},{default:x((()=>[p(i,{type:"number",min:"1",max:"99",modelValue:t.options.end,"onUpdate:modelValue":a[2]||(a[2]=e=>t.options.end=e),onKeyup:o.validate,onInput:o.validate},null,8,["modelValue","onKeyup","onInput"])])),_:1},8,["message","variant"])])]),p(l,{label:"Incense"},{default:x((()=>[p(d,{modelValue:t.options.incense,"onUpdate:modelValue":a[3]||(a[3]=e=>t.options.incense=e),class:"is-fullwidth"},{default:x((()=>[N,O,z,_,C])),_:1},8,["modelValue"])])),_:1}),p(l,{label:"Gear XP Boosts",message:s.messages.xp,variant:s.messages.xp?"danger":""},{default:x((()=>[p(i,{type:"number",min:"0",modelValue:t.options.gearXpBoost,"onUpdate:modelValue":a[4]||(a[4]=e=>t.options.gearXpBoost=e),id:"xpboost","icon-right":"percent",onKeyup:o.validate,onInput:o.validate},null,8,["modelValue","onKeyup","onInput"])])),_:1},8,["message","variant"]),p(l,{label:"Dame-Du-Lac-Emblem"},{default:x((()=>[p(c,{modelValue:t.options.talisman,"onUpdate:modelValue":a[5]||(a[5]=e=>t.options.talisman=e)},null,8,["modelValue"])])),_:1}),p(l,{label:"Sort Table by Apples"},{default:x((()=>[p(c,{modelValue:t.options.sort,"onUpdate:modelValue":a[6]||(a[6]=e=>t.options.sort=e)},null,8,["modelValue"])])),_:1}),p(h,{onClick:o.reset,"icon-left":"refresh"},{default:x((()=>[w])),_:1},8,["onClick"])])}));k.render=A,k.__scopeId="data-v-4e36f6e0";const T={name:"Dungeon",components:{},props:{dungeon:{type:Object,required:!0},apples:{type:Number,required:!0}},data:()=>({}),computed:{modifier(){return this.$parent.options.talisman?1.2:1},runs(){return Math.ceil(this.apples/(this.dungeon.quantity*this.modifier))}}},M=d()(((e,a,t,n,s,o)=>(r(),u("tr",null,[p("th",null,h(t.dungeon.name),1),p("td",null,h(Number(t.dungeon.quantity*o.modifier).toLocaleString()),1),p("td",null,h(Number(o.runs).toLocaleString()),1)]))));T.render=M,T.__scopeId="data-v-f99b3e3a";const j={},D=d();i("data-v-4d932fd8");const U={class:"navbar",role:"navigation","aria-label":"main navigation"},X={id:"navbarBasicExample",class:"navbar-menu"},K={class:"navbar-start"},L={class:"navbar-item",href:"https://expertise.kuenaimaku.com/"},R=c(" Expertise "),Q={class:"navbar-item",href:"https://apple.kuenaimaku.com/"},E={style:{color:"gold"}},F=c(" Golden Apples");l();const P=D(((e,a)=>{const t=m("o-icon");return r(),u("nav",U,[p("div",X,[p("div",K,[p("a",L,[p(t,{pack:"mdi",icon:"arm-flex"}),R]),p("a",Q,[p("span",E,[p(t,{pack:"mdi",icon:"food-apple"}),F])])])])])}));j.render=P,j.__scopeId="data-v-4d932fd8";const Z={name:"App",components:{Options:k,Dungeon:T,Navbar:j},data:()=>({options:{},levels:{},dungeons:[],experience:0}),created(){let e=S.reset();this.options=e.options,this.levels=e.levels,this.dungeons=e.dungeons},computed:{apples(){const e=Object.values(this.levels);let a=0,t=0,n=this.modifier;const s=this.options.start-1,o=this.options.end-1;if(o<s)return this.experience=0,0;for(a=s;a<o;a++)t+=e[a];return this.experience=t,Math.ceil(t/(1e4*n))},modifier(){return 1+parseInt(this.options.incense)+this.options.gearXpBoost/100},pluralize(){return 1==this.apples?"Apple":"Apples"},tablesort(){let e=S.reset();return this.options.sort?this.dungeons.sort(((e,a)=>a.quantity-e.quantity)):e.dungeons},validation(){return!isNaN(this.apples)&&(!(this.options.gearXpBoost<0)&&this.options.start<this.options.end)}},methods:{reset(){let e=S.reset();this.options=e.options}}},Y={id:"app"},$=p("section",{class:"hero is-primary is-bold"},[p("div",{class:"hero-body"},[p("div",{class:"container"},[p("div",{class:"columns is-vcentered"},[p("div",{class:"column is-2 has-text-centered"},[p("figure",{class:"image is-128x128 is-inline-block"},[p("img",{alt:"ReIMAGINE logo",src:"./assets/logo.b4a90456.png"})])]),p("div",{class:"column is-10"},[p("h1",{class:"title"},"Golden Apple Calculator"),p("p",{class:"subtitle"},"For ReIMAGINE")])])])])],-1),W={class:"section"},H={class:"container"},J={class:"columns"},ee={class:"column is-one-quarter"},ae={class:"container"},te=p("div",{class:"content"},[p("h1",null,"Input")],-1),ne={class:"column"},se={key:0,class:"container"},oe={class:"content"},ie=p("h1",null,"Summary",-1),le={style:{color:"gold"}},re={style:{color:"gold"}},ue=c(" experience in total"),pe={class:"table is-hoverable is-striped is-fullwidth"},de=p("thead",null,[p("tr",null,[p("th",null,"Dungeon"),p("th",null,"Apples"),p("th",null,"Runs")])],-1),ce={key:1,class:"container"},me={class:"content"},he=p("h1",null,"Summary",-1),ve={style:{color:"red"}},ge=p("footer",{class:"footer"},[p("div",{class:"content has-text-centered"},[p("p",null,[p("strong",null,"Golden Apple Calculator"),c(" by "),p("a",{href:"https://github.com/kuenaimaku"},"Kuenaimaku"),c(". The "),p("a",{href:"https://github.com/Kuenaimaku/apple-calculator"},"source code"),c(" is licensed "),p("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),c(". ")])])],-1);Z.render=function(e,a,t,n,s,o){const i=m("Navbar"),l=m("Options"),d=m("o-icon"),y=m("Dungeon");return r(),u("div",Y,[p(i),$,p("section",W,[p("div",H,[p("div",J,[p("div",ee,[p("div",ae,[te,p(l,{options:this.options},null,8,["options"])])]),p("div",ne,[o.validation?(r(),u("div",se,[p("div",oe,[ie,p("h3",null,[p("span",le,[c(h(Number(o.apples).toLocaleString())+" ",1),p(d,{pack:"mdi",icon:"food-apple"})]),c(" "+h(o.pluralize)+" required to level from "+h(s.options.start)+" to "+h(s.options.end),1)]),p("h4",null,[p("span",re,h(Number(s.experience).toLocaleString()),1),ue])]),p("table",pe,[de,p("tbody",null,[(r(!0),u(v,null,g(o.tablesort,(e=>(r(),u(y,{key:e.name,dungeon:e,apples:this.apples},null,8,["dungeon","apples"])))),128))])])])):(r(),u("div",ce,[p("div",me,[he,p("h3",null,[p("span",ve,[c(h(Number(1/0).toLocaleString())+" ",1),p(d,{pack:"mdi",icon:"food-apple"})]),c(" "+h(o.pluralize)+". You broke it.",1)])])]))])])])]),ge])};y(Z).use(b).mount("#app");
