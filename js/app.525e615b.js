(function(t){function e(e){for(var a,i,o=e[0],r=e[1],c=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(m.length)m.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},l=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tazapay/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=r;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1afd":function(t,e,n){},"1d7b":function(t,e,n){},"2ec6":function(t,e,n){"use strict";n("1afd")},"36be":function(t,e,n){t.exports=n.p+"img/menu.1fd466c6.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-seaBlue desk:bg-deskBack",attrs:{id:"app"}},[n("ViewArea",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col"},[n("Header"),n("SideNav",{directives:[{name:"show",rawName:"v-show",value:t.SHOW_SIDE_NAV,expression:"SHOW_SIDE_NAV"}],staticClass:"z-10"})],1),n("div",{staticClass:"px-4 h-300 m-auto desk:ml-56"},[n("ContentArea")],1),t.SHOW_MODAL?n("Modal"):t._e(),t.DATA_FETCHING?n("PageSpinner"):t._e()],1)},o=[],r=n("5530"),c=n("2f62"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex\n    w-full\n    h-screen\n    top-0\n    left-0\n    fixed\n    bg-bgGrey\n    items-center\n    justify-center\n  "},[n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")])])}],m={},f=m,b=(n("d8f9"),n("2877")),p=Object(b["a"])(f,u,d,!1,null,null,null),_=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex\n    w-full\n    h-screen\n    top-0\n    left-0\n    fixed\n    bg-bgGrey\n    items-center\n    justify-center\n  "},[n("Transfer",{staticClass:"\n      absolute\n      rounded-lg\n      bg-chalk\n      h-3/4\n      w-11/12 w-1/2\n      shadow-shadow\n      min-h-90%\n      overflow-y-scroll\n      mobile:max-w-400\n      tab:max-w-550\n      desk:max-w-49\n      desk:h-42%\n      desk:rounded-b-lg\n    ",attrs:{hasTitle:!0,hasBorder:!0,details:"edit",closeBtn:!0,titleText:"Buyer Details",titleClass:"leading-6 mt-4 ml-6 pixel:mt-6 font-semibold text-grey800 text-base pixel:text-xl"}})],1)},h=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasTitle?n("HeadingText",{class:t.titleClass,attrs:{text:t.titleText,closeBtn:t.closeBtn}}):t._e(),t.hasBorder?n("div",{staticClass:"border-dashed border-b-1.5 border-grey mx-6 my-4"}):t._e(),"buyer"===t.details?n("TransferDetails"):"edit"===t.details?n("EditSection"):n("BuyerDetails")],1)},E=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex",on:{click:t.caputureUpload}},[a("p",[t._v(t._s(t.text))]),t.closeBtn?a("img",{staticClass:"h-6 w-6 mr-6 right-0 absolute",attrs:{src:n("bf37"),alt:"close icon"},on:{click:t.closeModal}}):t._e()])},O=[],C={props:{text:{type:String,default:"Create your first transfer agreement"},closeBtn:{type:Boolean,default:!1}},methods:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["TOGGLE_MODAL"])),{},{caputureUpload:function(t){this.$emit("caputureUpload",t)},closeModal:function(){this.TOGGLE_MODAL()}})},T=C,S=Object(b["a"])(T,g,O,!1,null,null,null),w=S.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex-col flex flex-wrap\n    leading-5\n    mt-12\n    text-coolGray text-base\n    tab:flex-row\n  "},[n("div",{staticClass:"flex justify-between w-full px-6 tab:w-30% tab:block tab:pl-6"},[n("p",{staticClass:"mb-6 font-semibold text-coolGray tab:mb-4"},[t._v("Buyer’s Details")]),n("p",{staticClass:"text-cyan cursor-pointer",on:{click:t.switchModal}},[t._v("Edit")])]),n("div",{staticClass:"w-full pl-6 tab:w-30%"},[n("p",{staticClass:"mb-2 font-medium text-coolGray tab:mb-4"},[t._v("Company")]),n("p",{staticClass:"mb-1.5 font-normal text-dullGray"},[t._v(" "+t._s(t.BUYER_DETAILS.company)+" ")]),n("p",{staticClass:"mb-6 font-normal text-dullGray tab:mb-0"},[t._v(" "+t._s(t.BUYER_DETAILS.location)+" ")])]),n("div",{staticClass:"w-full pl-6 tab:w-30%"},[n("p",{staticClass:"mb-2 font-medium text-coolGray tab:mb-4"},[t._v("Contact Person")]),n("p",{staticClass:"mb-1.5 font-normal text-dullGray"},[t._v(" "+t._s(t.BUYER_DETAILS.contact_person)+" ")]),n("p",{staticClass:"font-normal text-dullGray"},[t._v(t._s(t.BUYER_DETAILS.contact_email))])])])},A=[],y={computed:Object(r["a"])({},Object(c["d"])(["BUYER_DETAILS","SHOW_MODAL"])),methods:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["TOGGLE_MODAL"])),{},{switchModal:function(){this.TOGGLE_MODAL()}})},I=y,G=Object(b["a"])(I,D,A,!1,null,null,null),L=G.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col desk:flex-row"},[n("div",{staticClass:"w-full pr-12 mx-6 desk:pr-0 desk:w-1/2"},[n("p",{staticClass:"font-semibold text-coolGray"},[t._v("Company")]),n("Input",{attrs:{lable:"Company Name",value:t.formdata["company"]},on:{input:function(e){return t.formdata["company"]=e}}}),n("Input",{attrs:{lable:"Location",value:t.formdata["location"]},on:{input:function(e){return t.formdata["location"]=e}}})],1),n("div",{staticClass:"w-full pr-12 mx-6 mt-6 desk:mt-0 desk:pr-0 desk:w-1/2"},[n("p",{staticClass:"font-semibold text-coolGray"},[t._v("Contact Person")]),n("Input",{attrs:{lable:"Name",value:t.formdata["contact_person"]},on:{input:function(e){return t.formdata["contact_person"]=e}}}),n("Input",{attrs:{lable:"Email",value:t.formdata["contact_email"]},on:{input:function(e){return t.formdata["contact_email"]=e}}})],1)]),n("div",{staticClass:"h-28"},[n("Button",{staticClass:"absolute right-0 mt-7 mr-8 bg-blue",attrs:{btnText:"Save"},on:{btnClick:t.sumbmitForm}})],1)])},P=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"w-32 h-11 mb-5 rounded-lg font-semibold text-base text-white",class:t.btnClass,attrs:{disabled:t.disabled},on:{click:t.clickHandler}},[t._v(" "+t._s(t.btnText)+" ")])},k=[],H={props:{btnText:String,btnClass:String,disabled:Boolean},methods:{clickHandler:function(){this.$emit("btnClick")}}},U=H,R=Object(b["a"])(U,N,k,!1,null,null,null),B=R.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("label",{staticClass:"mt-4 font-medium text-coolGray"},[t._v(t._s(t.lable))]),n("input",{staticClass:"focus:outline-none bg-chalk h-8 border-b border-bgGrey",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){return t.emitValues(e)}}})])},$=[],W={props:{title:String,lable:String,value:String},methods:{emitValues:function(t){this.$emit("input",t.target.value)}}},M=W,V=Object(b["a"])(M,F,$,!1,null,null,null),Y=V.exports,J={data:function(){return{formdata:{company:"",contact_email:"",contact_person:"",location:""}}},components:{Input:Y,Button:B},computed:Object(r["a"])({},Object(c["d"])(["BUYER_DETAILS","SHOW_MODAL"])),mounted:function(){this.formdata.company=this.BUYER_DETAILS.company,this.formdata.contact_email=this.BUYER_DETAILS.contact_email,this.formdata.contact_person=this.BUYER_DETAILS.contact_person,this.formdata.location=this.BUYER_DETAILS.location},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["b"])(["UPDATE_BUYER_DETAILS"])),Object(c["c"])(["TOGGLE_MODAL"])),{},{sumbmitForm:function(){this.TOGGLE_MODAL(),this.UPDATE_BUYER_DETAILS(this.formdata)}})},z=J,K=Object(b["a"])(z,j,P,!1,null,null,null),q=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    flex-col flex\n    text-base\n    flex-wrap\n    leading-5\n    font-semibold\n    tab:flex-row\n  "},[n("div",{staticClass:"mt-2 w-full tab:w-30% pl-6 tab:mt-0"},[n("p",{staticClass:"mb-4 text-blue"},[t._v("Buyer’s Email")]),n("p",[t._v(t._s(t.TRANSFER_DETAILS.buyer_email))])]),n("div",{staticClass:"mt-6 mobile:mt-5 w-full tab:w-30% pl-6 tab:mt-0"},[n("p",{staticClass:"mb-4 text-blue"},[t._v("Exporting To")]),n("p",[t._v(t._s(t.TRANSFER_DETAILS.importing_from))])]),n("div",{staticClass:"mt-6 mobile:mt-5 w-full tab:w-30% pl-6 tab:mt-0"},[n("p",{staticClass:"mb-4 text-blue"},[t._v("Invoice Amount")]),n("p",[t._v(t._s(t.TRANSFER_DETAILS.invoice_amount))])])])},X=[],Z={computed:Object(r["a"])({},Object(c["d"])(["TRANSFER_DETAILS"]))},tt=Z,et=Object(b["a"])(tt,Q,X,!1,null,null,null),nt=et.exports,at={components:{HeadingText:w,TransferDetails:nt,BuyerDetails:L,EditSection:q},props:{hasTitle:{type:Boolean,default:!1},titleText:{type:String},titleClass:{type:String},hasBorder:{type:Boolean,default:!1},details:{type:String,default:"transfer"},closeBtn:{type:Boolean}}},st=at,lt=Object(b["a"])(st,x,E,!1,null,null,null),it=lt.exports,ot={components:{Transfer:it}},rt=ot,ct=Object(b["a"])(rt,v,h,!1,null,null,null),ut=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-2xl tab:max-w-49 desk:max-w-60 m-auto relative"},[n("HeadingText",{staticClass:"\n      my-4\n      font-semibold\n      text-base text-darkBlue\n      pixel:my-6\n      pixel:text-xl\n    "}),n("Transfer",{staticClass:"\n      absolute\n      rounded-b-lg\n      h-80\n      w-full\n      bg-shadow\n      top-18\n      shadow-shadow\n      pixel:top-22\n      tab:top-48\n      tab:h-40\n    "}),n("Transfer",{staticClass:"\n      absolute\n      rounded-lg\n      desk:rounded-b-lg\n      bg-chalk\n      h-80\n      tab:h-40\n      w-full\n      shadow-shadow\n    ",attrs:{hasTitle:!0,hasBorder:!0,details:"buyer",titleText:"Transfer Agreement #1",titleClass:"leading-6 mt-4 ml-6 pixel:mt-6 font-semibold text-grey800 text-base pixel:text-xl"}}),n("ProductDetails",{staticClass:"bg-shadow shadow-shadow"})],1)},mt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-280 w-full rounded-lg desk:rounded-none"},[n("div",{staticClass:"absolute mt-38 ml-6 w-84% tab:mt-72 tab:w-2/4"},[n("HeadingText",{staticClass:"\n        mt-8\n        mb-2\n        text-blue\n        font-semibold\n        text-lg\n        desk:my-8\n        desk:text-darkBlue\n      ",attrs:{text:t.SHOW_SHIPPING?"Shipping Information":"Product Details"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.SHOW_SHIPPING,expression:"SHOW_SHIPPING"}],staticClass:"pl-6"},[n("p",{staticClass:"mb-2 font-medium text-coolGray tab:mb-4"},[t._v("Shipping Info")]),n("p",{staticClass:"mb-1.5 font-normal text-dullGray"},[t._v("Hari")]),n("p",{staticClass:"mb-1.5 font-normal text-dullGray"},[t._v(" No 120, Balamurugan gardern ")]),n("p",{staticClass:"mb-1.5 font-normal text-dullGray"},[t._v(" first cross main road , thurapakkam ")]),n("p",{staticClass:"mb-1.5 font-normal text-dullGray"},[t._v("chennai-97, TN")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.SHOW_SHIPPING,expression:"!SHOW_SHIPPING"}]},[n("p",{staticClass:"text-darkGray text-sm mb-4 font-medium"},[t._v(" Placeholder for subtitle ")]),n("div",{staticClass:"border-solid border-b border-lightGray mb-6"}),n("HeadingText",{staticClass:"\n          mb-4\n          text-grey600 text-base\n          font-semibold\n          mobile:text-lg\n          mobile:mb-6\n        ",attrs:{text:"Upload your Proforma Invoice"}}),n("FileUpload"),t._m(0),n("div",{staticClass:"border-solid border-b border-centerBorder mb-6"})],1),n("Button",{staticClass:"hidden absolute right-0 desk:inline-block",class:[t.FILES_COUNT?"bg-blue":"bg-disableGrey"],attrs:{disabled:!t.FILES_COUNT,btnText:"Next"},on:{btnClick:t.toggelShipping}}),n("Button",{staticClass:"inline-block absolute right-0 desk:hidden",class:[t.FILES_COUNT?"bg-blue":"bg-disableGrey"],attrs:{btnText:"Done",disabled:!t.FILES_COUNT},on:{btnClick:t.toggelShipping}}),n("div",{staticClass:"mt-20"},[n("HeadingText",{staticClass:"my-4 text-grey400 text-xl font-semibold",attrs:{text:t.SHOW_SHIPPING?"Product Details":"Shipping Information"}}),n("HeadingText",{staticClass:"my-4 text-grey400 text-xl font-semibold",attrs:{text:"Release Conditions"}}),n("HeadingText",{staticClass:"my-4 text-grey400 text-xl font-semibold",attrs:{text:"Payment Details"}})],1)],1)])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex mt-8 mb-9"},[a("div",{staticClass:"h-7 w-7 mr-2"},[a("img",{attrs:{src:n("eef4"),alt:""}})]),a("p",{staticClass:"text-base text-lightIndigo font-normal"},[t._v(" Upload another document ")])])}],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"\n      h-44\n      p-6\n      w-full\n      rounded-lg\n      flex flex-col\n      justify-center\n      items-start\n      bg-border-mob\n      desk:border-dashed desk:border desk:border-innerBorder\n      desk:bg-none desk:bg-wheat\n    ",on:{drop:function(e){return e.preventDefault(),t.onDrop.apply(null,arguments)},dragover:function(e){return e.preventDefault(),t.onDrag.apply(null,arguments)},dragstart:t.onDragStart}},[t.PERCNTAGE_UPLOADED?n("div",{staticClass:"absolute w-full justify-center items-center flex pr-14 text-3xl"},[t._v(" "+t._s(t.PERCNTAGE_UPLOADED)+"% ")]):t._e(),n("div",{staticClass:"hidden desk:inline-block",class:[t.PERCNTAGE_UPLOADED?"opacity-30 pointer-events-none":"opacity-100 pointer-events-auto"]},[n("div",{staticClass:"flex mb-3.5"},[t._m(0),n("HeadingText",{staticClass:"text-indigo text-lg font-semibold",attrs:{text:"Drop Proforma Invoice Here"}})],1),n("input",{ref:"fileInput",staticClass:"hidden",attrs:{type:"file",multiple:"",accept:".pdf, .jpg, .png, .csv, .xls"},on:{change:t.onDrop}}),n("p",{staticClass:"text-sm mb-2 text-grey600"},[t._v(" or "),n("span",{staticClass:"text-indigo cursor-pointer",on:{click:t.selectFiles}},[t._v("Browse")]),t._v(" from your computer ")]),n("p",{staticClass:"text-xs text-grey"},[t._v(" Acceptable formats - pdf, .jpg. png, .csv, excel ")])]),n("div",{staticClass:"\n        inline-block\n        w-full\n        flex flex-col\n        justify-center\n        items-center\n        desk:hidden\n      ",class:[t.PERCNTAGE_UPLOADED?"opacity-30 pointer-events-none":"opacity-100 pointer-events-auto"]},[n("input",{ref:"caputureInput",staticClass:"hidden",attrs:{type:"file",accept:"image/*",capture:"environment"},on:{change:t.onDrop}}),n("input",{ref:"caputureUpload",staticClass:"hidden",attrs:{type:"file",accept:"image/*"},on:{change:t.onDrop}}),n("IconButton",{staticClass:"mt-4",on:{capture:t.capture}}),t._m(1),n("div",{staticClass:"flex mb-3.5 items-center mt-4"},[t._m(2),n("HeadingText",{staticClass:"text-indigo text-base font-medium cursor-pointer",attrs:{text:"Select from the Gallery"},on:{caputureUpload:t.caputureUpload}})],1)],1)]),t.FILES_COUNT?n("p",{staticClass:"text-sm my-2 text-grey600"},[t._v(" "+t._s(t.FILES_COUNT)+" files "+t._s(t.PERCNTAGE_UPLOADED?"uploading":"uploaded")+" ")]):t._e()])},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-7 w-7 mr-4"},[a("img",{attrs:{src:n("c118"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center w-3/6"},[n("div",{staticClass:"border-solid border-b border-grey w-2/5"}),n("span",{staticClass:"w-1/5 text-center"},[t._v("or")]),n("div",{staticClass:"border-solid border-b border-grey w-2/5"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-7 w-7 mr-4"},[a("img",{attrs:{src:n("9293"),alt:""}})])}],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"\n      flex\n      items-center\n      justify-center\n      bg-blue\n      w-52\n      h-11\n      mb-5\n      rounded-lg\n      font-medium\n      text-base text-white\n    ",on:{click:t.captureFiles}},[a("img",{attrs:{src:n("ecd7"),alt:"camera icon"}}),a("p",{staticClass:"ml-2"},[t._v("Use Camera")])])])},ht=[],xt={methods:{captureFiles:function(t){this.$emit("capture",t)}}},Et=xt,gt=Object(b["a"])(Et,vt,ht,!1,null,null,null),Ot=gt.exports,Ct={data:function(){return{dragEffect:!1}},components:{HeadingText:w,IconButton:Ot},computed:Object(r["a"])({},Object(c["d"])(["PERCNTAGE_UPLOADED","FILES_COUNT"])),watch:{PERCNTAGE_UPLOADED:function(){100===this.PERCNTAGE_UPLOADED&&this.SET_PERCNTAGE_UPLOADED(0)}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["b"])(["GET_UPLOAD_PROGRESS"])),Object(c["c"])(["SET_PERCNTAGE_UPLOADED"])),{},{onDrag:function(t){t.dataTransfer.dropEffect="move"},onDrop:function(t){var e,n,a,s,l;(console.log(null===t||void 0===t||null===(e=t.dataTransfer)||void 0===e?void 0:e.files),null!==t&&void 0!==t&&null!==(n=t.dataTransfer)&&void 0!==n&&n.files)?a=null===t||void 0===t||null===(s=t.dataTransfer)||void 0===s?void 0:s.files:a=null===t||void 0===t||null===(l=t.target)||void 0===l?void 0:l.files;this.GET_UPLOAD_PROGRESS(a)},onDragStart:function(t){t.dataTransfer.dropEffect="move"},selectFiles:function(){this.$refs.fileInput.click()},capture:function(){this.$refs.caputureInput.click()},caputureUpload:function(){this.$refs.caputureUpload.click()}})},Tt=Ct,St=(n("2ec6"),Object(b["a"])(Tt,pt,_t,!1,null,null,null)),wt=St.exports,Dt={components:{HeadingText:w,Button:B,FileUpload:wt},computed:Object(r["a"])({},Object(c["d"])(["PERCNTAGE_UPLOADED","FILES_COUNT","SHOW_SHIPPING"])),methods:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["TOGGLE_SHIPPING"])),{},{toggelShipping:function(){this.TOGGLE_SHIPPING()}})},At=Dt,yt=Object(b["a"])(At,ft,bt,!1,null,null,null),It=yt.exports,Gt={components:{HeadingText:w,ProductDetails:It,Transfer:it}},Lt=Gt,jt=Object(b["a"])(Lt,dt,mt,!1,null,null,null),Pt=jt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n    bg-teal\n    h-16\n    tab:h-24\n    flex\n    items-center\n    mobile:h-24\n    desk:bg-white\n    desk:h-16\n  "},[t._m(0),a("div",{staticClass:"absolute left-0 flex items-center"},[a("div",{staticClass:"h-6 w-6 ml-4 mobile:ml-6 mobile:h-8 mobile:w-8 desk:hidden",on:{click:t.switchSideNav}},[a("img",{attrs:{src:n("36be"),alt:""}})]),a("p",{staticClass:"\n        inline-block\n        ml-4\n        text-white\n        font-semibold\n        text-2xl\n        mobile:text-3xl\n        desk:hidden\n      "},[t._v(" Transfer ")])])])},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"absolute right-0 flex items-center"},[a("div",{staticClass:"\n        h-6\n        w-6\n        mr-4\n        inline-block\n        mobile:h-9\n        mobile:w-9\n        mobile:mr-6\n        tab:hidden\n      "},[a("img",{attrs:{src:n("8909"),alt:""}})]),a("div",{staticClass:"h-8 w-8 mr-6 mobile:h-12 mobile:w-12 desk:h-8 desk:w-8 desk:mr-4"},[a("img",{attrs:{src:n("cba0"),alt:""}})]),a("p",{staticClass:"hidden mr-10 font-semibold text-base desk:inline-block"},[t._v(" Nathan Keller ")])])}],Ht={methods:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["TOGGLE_SIDE_NAV"])),{},{switchSideNav:function(){this.TOGGLE_SIDE_NAV()}})},Ut=Ht,Rt=Object(b["a"])(Ut,Nt,kt,!1,null,null,null),Bt=Rt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"absolute h-full bg-teal w-56"},[a("img",{staticClass:"\n      h-6\n      w-6\n      mr-2\n      mb-4\n      mt-2\n      fill-current\n      text-white\n      right-0\n      absolute\n      desk:hidden\n    ",attrs:{src:n("bf37"),alt:"close icon"},on:{click:t.switchSideNav}}),a("div",{staticClass:"\n      flex\n      items-center\n      justify-center\n      m-auto\n      w-40\n      h-9\n      mt-8\n      bg-white\n      rounded-lg\n      text-base\n      font-medium\n    "},[t._v(" Company Logo ")]),t._m(0)])},$t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"mt-16 text-white font-semibold text-xl"},[n("li",{staticClass:"mb-10 ml-7"},[t._v("Home")]),n("div",{staticClass:"bg-cyan py-4 pl-7 mb-10"},[n("li",[t._v("Transfer")])]),n("li",{staticClass:"mb-10 ml-7"},[t._v("Account")]),n("li",{staticClass:"mb-10 ml-7"},[t._v("Documents")]),n("li",{staticClass:"mb-10 ml-7"},[t._v("Reports")])])}],Wt={methods:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["TOGGLE_SIDE_NAV"])),{},{switchSideNav:function(){this.TOGGLE_SIDE_NAV()}})},Mt=Wt,Vt=Object(b["a"])(Mt,Ft,$t,!1,null,null,null),Yt=Vt.exports,Jt={components:{Header:Bt,SideNav:Yt,ContentArea:Pt,PageSpinner:_,Modal:ut},name:"HelloWorld",data:function(){return{screenWidth:window.innerWidth}},props:{msg:String},watch:{screenWidth:function(){this.screenWidth<1100?this.TOGGLE_SIDE_NAV(!1):this.TOGGLE_SIDE_NAV(!0)}},computed:Object(r["a"])({},Object(c["d"])(["DATA_FETCHING","SHOW_MODAL","SHOW_SIDE_NAV"])),methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["GET_JSON_DETAILS"])),Object(c["c"])(["TOGGLE_SIDE_NAV"])),mounted:function(){var t=this;this.GET_JSON_DETAILS(),window.addEventListener("resize",(function(){return t.screenWidth=window.innerWidth}))},beforeDestroy:function(){window.removeEventListener("resize")}},zt=Jt,Kt=Object(b["a"])(zt,i,o,!1,null,null,null),qt=Kt.exports,Qt={name:"App",components:{ViewArea:qt}},Xt=Qt,Zt=Object(b["a"])(Xt,s,l,!1,null,"351a21ce",null),te=Zt.exports,ee=n("1da1"),ne=(n("96cf"),n("bc3a")),ae=n.n(ne);a["a"].use(c["a"]);var se=new c["a"].Store({state:{TRANSFER_DETAILS:{},BUYER_DETAILS:{},DATA_FETCHING:!1,PERCNTAGE_UPLOADED:0,FILES_COUNT:0,SHOW_MODAL:!1,SHOW_SHIPPING:!1,SHOW_SIDE_NAV:!0},mutations:{SET_TRANSFER_DETAILS:function(t,e){t.TRANSFER_DETAILS=e},SET_BUYER_DETAILS:function(t,e){t.BUYER_DETAILS=e},SET_PERCNTAGE_UPLOADED:function(t,e){t.PERCNTAGE_UPLOADED=e},TOGGLE_MODAL:function(t){t.SHOW_MODAL=!t.SHOW_MODAL},TOGGLE_SHIPPING:function(t){t.SHOW_SHIPPING=!t.SHOW_SHIPPING},TOGGLE_SIDE_NAV:function(t,e){t.SHOW_SIDE_NAV=null!==e&&void 0!==e?e:!t.SHOW_SIDE_NAV}},actions:{GET_JSON_DETAILS:function(t){return Object(ee["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,a=t.commit,n.DATA_FETCHING=!0,e.next=4,ae.a.get("https://my-json-server.typicode.com/harimathi/json_db/json_details").then((function(t){if(null!==t&&void 0!==t&&t.data){var e=null===t||void 0===t?void 0:t.data;a("SET_TRANSFER_DETAILS",e[0]),a("SET_BUYER_DETAILS",e[1]),n.DATA_FETCHING=!1}})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},UPDATE_BUYER_DETAILS:function(t,e){return Object(ee["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,s=t.commit,a.DATA_FETCHING=!0,n.next=4,ae.a.put("https://my-json-server.typicode.com/harimathi/json_db/json_details/buyer_details/",e).then((function(t){if(null!==t&&void 0!==t&&t.data){var e=null===t||void 0===t?void 0:t.data;s("SET_BUYER_DETAILS",e),a.DATA_FETCHING=!1}})).catch((function(t){console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},GET_UPLOAD_PROGRESS:function(t,e){var n=this;return Object(ee["a"])(regeneratorRuntime.mark((function a(){var s,l,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(i in s=t.state,console.log(e),l=new FormData,s.FILES_COUNT=0,e)Object.hasOwnProperty.call(e,i)&&(l.append("file",e[i]),s.FILES_COUNT++);return a.next=7,ae.a.put("https://my-json-server.typicode.com/harimathi/json_db/json_details/form_data",l,{onUploadProgress:function(t){s.PERCNTAGE_UPLOADED=parseInt(Math.round(t.loaded/t.total*100))}.bind(n)}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 7:case"end":return a.stop()}}),a)})))()}},modules:{}});n("ba8c");a["a"].config.productionTip=!1,new a["a"]({store:se,render:function(t){return t(te)}}).$mount("#app")},8909:function(t,e,n){t.exports=n.p+"img/lens.40f65cf5.svg"},9293:function(t,e,n){t.exports=n.p+"img/slide.ad037b7d.svg"},ba8c:function(t,e,n){},bf37:function(t,e,n){t.exports=n.p+"img/close.21ccc530.svg"},c118:function(t,e,n){t.exports=n.p+"img/upload.7327d632.svg"},cba0:function(t,e,n){t.exports=n.p+"img/name.a4fd0378.svg"},d8f9:function(t,e,n){"use strict";n("1d7b")},ecd7:function(t,e,n){t.exports=n.p+"img/cam.adec875b.svg"},eef4:function(t,e,n){t.exports=n.p+"img/add.bb3e4f37.svg"}});
//# sourceMappingURL=app.525e615b.js.map