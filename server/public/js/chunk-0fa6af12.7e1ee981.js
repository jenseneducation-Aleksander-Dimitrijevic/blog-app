(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fa6af12"],{1071:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.blog?a("v-container",{attrs:{"fill-height":""}},[a("v-row",[a("v-col",[a("h1",[t._v("Edit blog")]),a("v-form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.updateBlog(e)}}},[a("v-text-field",{attrs:{type:"text",label:"Blog title",name:"title"},model:{value:t.blog.title,callback:function(e){t.$set(t.blog,"title",e)},expression:"blog.title"}}),a("v-textarea",{attrs:{type:"text",label:"Blog text",name:"text"},model:{value:t.blog.text,callback:function(e){t.$set(t.blog,"text",e)},expression:"blog.text"}}),a("v-btn",{staticClass:"mt-4",attrs:{type:"submit",color:"info",dark:""}},[t._v("Save")])],1)],1)],1)],1):t._e()},n=[],i={name:"edit",props:{blog:Object},data:function(){return{input:{title:this.blog.title||"",text:this.blog.text||""}}},methods:{updateBlog:function(){var t=this;this.$store.dispatch("updateBlog",{body:{title:this.blog.title,text:this.blog.text},id:this.blog._id}).then((function(){return t.$router.push({name:"blogs"})}))}}},s=i,l=a("2877"),r=a("6544"),u=a.n(r),c=a("8336"),h=a("62ad"),p=a("a523"),d=a("4bd4"),g=a("0fd9"),f=a("8654"),b=a("a844"),x=Object(l["a"])(s,o,n,!1,null,"abdaa77c",null);e["default"]=x.exports;u()(x,{VBtn:c["a"],VCol:h["a"],VContainer:p["a"],VForm:d["a"],VRow:g["a"],VTextField:f["a"],VTextarea:b["a"]})},1681:function(t,e,a){},a844:function(t,e,a){"use strict";a("a9e3");var o=a("5530"),n=(a("1681"),a("8654")),i=a("58df"),s=Object(i["a"])(n["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(o["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-0fa6af12.7e1ee981.js.map