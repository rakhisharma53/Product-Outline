(this.webpackJsonpreact_products=this.webpackJsonpreact_products||[]).push([[0],{14:function(e,t,a){},30:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(12),c=a.n(r),o=(a(14),a(26)),m=a(27),i=a(29),u=a(28),s=a(58),d=a(65),p=a(61),E=a(60),y=a(62),b=a(63),f=a(2),g=a(10),h=a(9),v=a.n(h),O=a(59),F=a(64),j="http://localhost:9991",C=a(4),P=(a(16),function(){Object(l.useEffect)((function(){document.title="AddProducts"}),[]);var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=function(e){v.a.post("".concat(j,"/pproducts"),e).then((function(e){console.log(e),console.log("success"),C.b.success("Data Saved")}),(function(e){console.log(e),console.log("error"),C.b.error("Data is not saved")})),Location.reload()},o=function(e){r(Object(f.a)(Object(f.a)({},a),{},{pname:e.target.value}))};return n.a.createElement(s.a,null,n.a.createElement(O.a,{onSubmit:function(e){console.log(a),c(a),e.preventDefault()}},n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,null,n.a.createElement("h1",{style:{color:"#00BFFF",paddingTop:"5%"}},"Product Purchase"))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pid",sm:2,style:{color:" #3a34eb"}},"Purchase ID"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"pid",id:"pid",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pid:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pcategory",sm:2,style:{color:" #3a34eb"}},"Product Category"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"select",name:"pcagtegory",id:"pcategory",onChange:function(e){return function(e){var t=e.target.value;if("Dairy"===t){var l=document.getElementById("fruitslabel"),n=document.getElementById("pfruits");l.style.display="none",n.style.display="none";var c=document.getElementById("dairylabel"),o=document.getElementById("pdairy");c.style.display="block",o.style.display="block"}if("Fruits"===t){var m=document.getElementById("dairylabel"),i=document.getElementById("pdairy");m.style.display="none",i.style.display="none";var u=document.getElementById("fruitslabel"),s=document.getElementById("pfruits");u.style.display="block",s.style.display="block"}r(Object(f.a)(Object(f.a)({},a),{},{pcategory:e.target.value}))}(e)},value:a.pcategory,style:{color:" #3a34eb"}},n.a.createElement("option",{value:"selected",selected:"selected"},"Select a Product Category"),n.a.createElement("option",{value:"Dairy"},"Dairy"),n.a.createElement("option",{value:"Fruits"},"Fruits"),"onChange=",(function(e){r(Object(f.a)(Object(f.a)({},a),{},{pcategory:e.target.value}))})))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pname",sm:2,style:{color:" #3a34eb",display:"none"},id:"dairylabel"},"Dairy"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"select",name:"pname",id:"pdairy",style:{color:" #3a34eb",display:"none"},onChange:function(e){return o(e)},value:a.pname},n.a.createElement("option",{value:"selected",selected:"selected"},"Select a Product"),n.a.createElement("option",null,"Milk"),n.a.createElement("option",null,"Cream"),n.a.createElement("option",null,"Cheese"),"onChange=",(function(e){r(Object(f.a)(Object(f.a)({},a),{},{pname:e.target.value}))})))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pname",sm:2,id:"fruitslabel",style:{color:" #3a34eb",display:"none"}},"Fruits"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"select",name:"pname",id:"pfruits",style:{color:" #3a34eb",display:"none"},onChange:function(e){return o(e)},value:a.pname},n.a.createElement("option",{value:"selected",selected:"selected"},"Select a Product"),n.a.createElement("option",null,"Bananas"),n.a.createElement("option",null,"Apples"),n.a.createElement("option",null,"Oranges"),"onChange=",(function(e){r(Object(f.a)(Object(f.a)({},a),{},{pname:e.target.value}))})))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pcode",sm:2,style:{color:" #3a34eb"}},"Product Code"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"pcode",id:"pcode",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pcode:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pdate",sm:2,style:{color:" #3a34eb"}},"Purchase Date"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"date",name:"pdate",id:"pdate",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pdate:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pquantity",sm:2,style:{color:" #3a34eb"}},"Purchase Quantity"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"pquantity",id:"pquantity",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pquantity:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pprice",sm:2,style:{color:" #3a34eb"}},"Purchase Price"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"pprice",id:"pprice",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pprice:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"ptotalprice",sm:2,style:{color:" #3a34eb"}},"Total Price"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"ptotalprice",id:"ptotalprice",placeholder:" ",style:{color:" #3a34eb"},onSelect:function(e){return function(e){var t=a.pquantity*a.pprice;r(Object(f.a)(Object(f.a)({},a),{},{ptotalprice:t}))}()},value:a.ptotalprice}))),n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,{sm:4,style:{color:"#00BFFF",paddingTop:"1%",paddingLeft:"30%"}},n.a.createElement("div",null,n.a.createElement(F.a,{type:"submit"},"SUBMIT"),n.a.createElement(C.a,{position:"bottom-right",autoClose:"12000",closeOnClick:!0}))))))}),B=function(){Object(l.useEffect)((function(){document.title="Sale Products"}),[]);var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=function(e){v.a.post("".concat(j,"/sproducts"),e).then((function(e){console.log(e),console.log("success"),C.b.success("Data Saved")}),(function(e){console.log(e),console.log("error"),C.b.error("Data is not saved")})),Location.reload()},o=function(e){r(Object(f.a)(Object(f.a)({},a),{},{sname:e.target.value}))};return n.a.createElement(s.a,null,n.a.createElement(O.a,{onSubmit:function(e){console.log(a),c(a),e.preventDefault()}},n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,null,n.a.createElement("h1",{style:{color:"#00BFFF",paddingTop:"5%"}},"Product Sale"))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"sid",sm:2,style:{color:" #3a34eb"}},"Sale ID"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"sid",id:"sid",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{sid:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"scategory",sm:2,style:{color:" #3a34eb"}},"Product Category"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"select",name:"pcagtegory",id:"scategory",onChange:function(e){return function(e){var t=e.target.value;if("Dairy"===t){var l=document.getElementById("fruitslabel"),n=document.getElementById("pfruits");l.style.display="none",n.style.display="none";var c=document.getElementById("dairylabel"),o=document.getElementById("pdairy");c.style.display="block",o.style.display="block"}if("Fruits"===t){var m=document.getElementById("dairylabel"),i=document.getElementById("pdairy");m.style.display="none",i.style.display="none";var u=document.getElementById("fruitslabel"),s=document.getElementById("pfruits");u.style.display="block",s.style.display="block"}r(Object(f.a)(Object(f.a)({},a),{},{scategory:e.target.value}))}(e)},value:a.scategory,style:{color:" #3a34eb"}},n.a.createElement("option",{value:"selected",selected:"selected"},"Select a Product Category"),n.a.createElement("option",{value:"Dairy"},"Dairy"),n.a.createElement("option",{value:"Fruits"},"Fruits"),"onChange=",(function(e){r(Object(f.a)(Object(f.a)({},a),{},{scategory:e.target.value}))})))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"sname",sm:2,style:{color:" #3a34eb",display:"none"},id:"dairylabel"},"Dairy"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"select",name:"sname",id:"pdairy",style:{color:" #3a34eb",display:"none"},onChange:function(e){return o(e)},value:a.sname},n.a.createElement("option",{value:"selected",selected:"selected"},"Select a Product"),n.a.createElement("option",null,"Milk"),n.a.createElement("option",null,"Cream"),n.a.createElement("option",null,"Cheese"),"onChange=",(function(e){r(Object(f.a)(Object(f.a)({},a),{},{sname:e.target.value}))})))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"sname",sm:2,id:"fruitslabel",style:{color:" #3a34eb",display:"none"}},"Fruits"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"select",name:"sname",id:"pfruits",style:{color:" #3a34eb",display:"none"},onChange:function(e){return o(e)},value:a.sname},n.a.createElement("option",{value:"selected",selected:"selected"},"Select a Product"),n.a.createElement("option",null,"Bananas"),n.a.createElement("option",null,"Apples"),n.a.createElement("option",null,"Oranges"),"onChange=",(function(e){r(Object(f.a)(Object(f.a)({},a),{},{sname:e.target.value}))})))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"scode",sm:2,style:{color:" #3a34eb"}},"Product Code"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"scode",id:"scode",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{scode:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"sdate",sm:2,style:{color:" #3a34eb"}},"Sale Date"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"date",name:"sdate",id:"sdate",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{sdate:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"squantity",sm:2,style:{color:" #3a34eb"}},"Sale Quantity"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"squantity",id:"squantity",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{squantity:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"sprice",sm:2,style:{color:" #3a34eb"}},"Sale Price"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"sprice",id:"sprice",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{sprice:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"stotalprice",sm:2,style:{color:" #3a34eb"}},"Total Price"),n.a.createElement(p.a,{sm:4},n.a.createElement(b.a,{type:"number",name:"stotalprice",id:"stotalprice",placeholder:" ",style:{color:" #3a34eb"},onSelect:function(e){return function(e){var t=a.squantity*a.sprice;r(Object(f.a)(Object(f.a)({},a),{},{stotalprice:t}))}()},value:a.stotalprice}))),n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,{sm:4,style:{color:"#00BFFF",paddingTop:"1%",paddingLeft:"30%"}},n.a.createElement("div",null,n.a.createElement(F.a,{type:"submit"},"SUBMIT"),n.a.createElement(C.a,{position:"bottom-right",autoClose:"2000"}))))))},k=function(){Object(l.useEffect)((function(){document.title="Profit Calculator"}),[]);var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=function(){v.a.get("".concat(j,"/profitdate/").concat(a.pdate)).then((function(e){console.log(e.data),r(e.data),C.b.info(e.data)}),(function(e){console.log(e)}))},o=function(){v.a.get("".concat(j,"/profityear/").concat(a.pyear,"/").concat(a.pcategory)).then((function(e){console.log(e.data),r(e.data)}),(function(e){console.log(e)}))},m=function(){v.a.get("".concat(j,"/profitbyname/").concat(a.pyear,"/").concat(a.pname)).then((function(e){console.log(e.data),r(e.data),e.data?C.b.info(e.data):C.b.info("Record Not Found")}),(function(e){console.log(e)}))},i=function(){v.a.get("".concat(j,"/profitbyprice/").concat(a.pyear,"/").concat(a.pprice)).then((function(e){console.log(e.data),r(e.data),C.b.info(e.data)}),(function(e){console.log(e)}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(O.a,{name:"one"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"block-example border border-primary"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement("h6",{style:{color:"#00BFFF",paddingTop:"5%",paddingLeft:"5%"}},"Profit According To Date"))),n.a.createElement("br",null),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pdate",sm:2,style:{color:" #3a34eb",paddingLeft:"10%"}},"Date"),n.a.createElement(p.a,{sm:9},n.a.createElement(b.a,{type:"date",name:"pdate",id:"pdate",placeholder:"yyyy-MM-dd ",style:{color:" #3a34eb"},pattern:"yyyy-MM-dd",required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pdate:e.target.value}))}}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,{sm:4,style:{color:"#00BFFF",paddingTop:"1%",paddingLeft:"30%"}},n.a.createElement("div",null,n.a.createElement(F.a,{onClick:function(e){console.log(a),c(a),C.b.info(a),e.preventDefault()}},"SUBMIT"),n.a.createElement(C.a,{position:"top-center",autoClose:15e3,closeOnClick:!0,rtl:!1,hideProgressBar:!0}))))))))),n.a.createElement(O.a,{name:"two"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"block-example border border-primary"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement("h6",{style:{color:"#00BFFF",paddingTop:"5%",paddingLeft:"5%"}},"Profit According To Year And Category"))),n.a.createElement("br",null),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pyear",sm:6,style:{color:" #3a34eb",paddingLeft:"10%"}},"Year"),n.a.createElement(p.a,{sm:5},n.a.createElement(b.a,{type:"text",name:"pyear",id:"pyear",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pyear:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pcategory",sm:6,style:{color:" #3a34eb",paddingLeft:"10%"}},"Product Category"),n.a.createElement(p.a,{sm:5},n.a.createElement(b.a,{type:"select",name:"select",id:"pcategory",onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pcategory:e.target.value}))},value:a.pcategory,style:{color:" #3a34eb"},required:!0},n.a.createElement("option",{value:"selected",selected:"selected"},"Select Category"),n.a.createElement("option",null,"Dairy"),n.a.createElement("option",null,"Fruits")))),n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,{sm:4,style:{color:"#00BFFF",paddingTop:"1%",paddingLeft:"30%"}},n.a.createElement("div",null,n.a.createElement(F.a,{onClick:function(e){console.log(a),o(a),C.b.info(a),e.preventDefault()}},"SUBMIT"),n.a.createElement(C.a,{position:"top-center",autoClose:15e3,closeOnClick:!0,rtl:!1,hideProgressBar:!0}))))))))),n.a.createElement(O.a,{name:"three"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"block-example border border-primary"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement("h6",{style:{color:"#00BFFF",paddingTop:"5%",paddingLeft:"5%"}},"Profit According To Year And Name"))),n.a.createElement("br",null),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pdate",sm:6,style:{color:" #3a34eb",paddingLeft:"10%"}},"Year"),n.a.createElement(p.a,{sm:5},n.a.createElement(b.a,{type:"number",name:"pyear",id:"pyear",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pyear:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pname",sm:6,style:{color:" #3a34eb",paddingLeft:"10%"}},"Product Name"),n.a.createElement(p.a,{sm:5},n.a.createElement(b.a,{type:"select",name:"select",id:"pname",onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pname:e.target.value}))},value:a.pname,style:{color:" #3a34eb"},required:!0},n.a.createElement("option",{value:"selected",selected:"selected"},"Select Product Name"),n.a.createElement("option",null,"Milk"),n.a.createElement("option",null,"Cream"),n.a.createElement("option",null,"Cheese"),n.a.createElement("option",null,"Bananas"),n.a.createElement("option",null,"Apples"),n.a.createElement("option",null,"Oranges")))),n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,{sm:4,style:{color:"#00BFFF",paddingTop:"1%",paddingLeft:"30%"}},n.a.createElement("div",null,n.a.createElement(F.a,{onClick:function(e){console.log(a),m(a),C.b.info(a),e.preventDefault()}},"SUBMIT"),n.a.createElement(C.a,{position:"top-center",autoClose:15e3,closeOnClick:!0,rtl:!1,hideProgressBar:!0}))))))))),n.a.createElement(O.a,{name:"four"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"block-example border border-primary"},n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement("h6",{style:{color:"#00BFFF",paddingTop:"5%",paddingLeft:"5%"}},"Profit According To Year And Price"))),n.a.createElement("br",null),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pdate",sm:6,style:{color:" #3a34eb",paddingLeft:"10%"}},"Year"),n.a.createElement(p.a,{sm:5},n.a.createElement(b.a,{type:"number",name:"pyear",id:"pyear",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pyear:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(y.a,{for:"pprice",sm:6,style:{color:" #3a34eb",paddingLeft:"10%"}},"Price"),n.a.createElement(p.a,{sm:5},n.a.createElement(b.a,{type:"number",name:"pprice",id:"pprice",placeholder:" ",style:{color:" #3a34eb"},required:!0,onChange:function(e){r(Object(f.a)(Object(f.a)({},a),{},{pprice:e.target.value}))}}))),n.a.createElement(E.a,{row:!0},n.a.createElement(p.a,{sm:4,style:{color:"#00BFFF",paddingTop:"1%",paddingLeft:"30%"}},n.a.createElement("div",null,n.a.createElement(F.a,{onClick:function(e){console.log(a),i(a),C.b.info(a),e.preventDefault()}},"SUBMIT"),n.a.createElement(C.a,{position:"top-center",autoClose:15e3,closeOnClick:!0,rtl:!1,hideProgressBar:!0})))))))))))},w=function(){Object(l.useEffect)((function(){v.a.get("".concat(j,"/pproducts")).then((function(e){console.log(e.data),r(e.data)}),(function(e){console.log(e)}))}),[]);var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",null,n.a.createElement("h1",{style:{color:"#00BFFF"}},"List Of Purchased Products"),n.a.createElement("table",{border:"2",bordercolor:"#00BFFF"},n.a.createElement("tr",null,n.a.createElement("th",null,"Product ID"),n.a.createElement("th",null,"Product Category"),n.a.createElement("th",null," Product Name"),n.a.createElement("th",null,"Product Code"),n.a.createElement("th",null,"Purchase Date"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Purchase Price"),n.a.createElement("th",null,"Total Price"))),a.length>0?a.map((function(e){var t=e.pid,a=e.pcategory,l=e.pname,r=e.pcode,c=e.pdate,o=e.pquantity,m=e.pprice,i=e.ptotalprice;return n.a.createElement("table",{border:"2",bordercolor:"#00BFFF"},n.a.createElement("tr",null,n.a.createElement("td",null,t),n.a.createElement("td",null," ",a),n.a.createElement("td",null,l),n.a.createElement("td",null,r),n.a.createElement("td",null,c),n.a.createElement("td",null,o),n.a.createElement("td",null,m),n.a.createElement("td",null,i)))})):"No Products")},S=function(){Object(l.useEffect)((function(){v.a.get("".concat(j,"/sproducts")).then((function(e){console.log(e.data),r(e.data)}),(function(e){console.log(e)}))}),[]);var e=Object(l.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",null,n.a.createElement("h1",{style:{color:"#00BFFF"}},"List Of Sold Products"),n.a.createElement("table",{border:"2",bordercolor:"#00BFFF"},n.a.createElement("tr",null,n.a.createElement("th",null,"Product ID"),n.a.createElement("th",null,"Product Category"),n.a.createElement("th",null," Product Name"),n.a.createElement("th",null,"Product Code"),n.a.createElement("th",null,"Sale Date"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Sale Price"),n.a.createElement("th",null,"Total Price"))),a.length>0?a.map((function(e){var t=e.sid,a=e.scategory,l=e.sname,r=e.scode,c=e.sdate,o=e.squantity,m=e.sprice,i=e.stotalprice;return n.a.createElement("table",{border:"2",bordercolor:"#00BFFF"},n.a.createElement("tr",null,n.a.createElement("td",null,t),n.a.createElement("td",null," ",a),n.a.createElement("td",null,l),n.a.createElement("td",null,r),n.a.createElement("td",null,c),n.a.createElement("td",null,o),n.a.createElement("td",null,m),n.a.createElement("td",null,i)))})):"No Products")},q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).radioHandler=function(e){l.setState({status:e})},l.state={status:0},l}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.status;return n.a.createElement(s.a,null,n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement("h1",{style:{color:"#00BFFF",paddingTop:"10%"}},"Product Management System"))),n.a.createElement(E.a,{check:!0},n.a.createElement(y.a,{check:!0},n.a.createElement(b.a,{type:"radio",name:"radio1",id:"purchase",checked:1===t,onClick:function(t){return e.radioHandler(1)}})," ",n.a.createElement("p",{class:"text-left",style:{color:"#00BFFF"}},n.a.createElement("h6",null,"Purchase")," "))),n.a.createElement(E.a,{check:!0},n.a.createElement(y.a,{check:!0},n.a.createElement(b.a,{type:"radio",name:"radio1",id:"sale",checked:2===t,onClick:function(t){return e.radioHandler(2)}})," ",n.a.createElement("p",{class:"text-left",style:{color:"#00BFFF"}}," ",n.a.createElement("h6",null,"Sale")))),n.a.createElement(E.a,{check:!0},n.a.createElement(y.a,{check:!0},n.a.createElement(b.a,{type:"radio",name:"radio1",id:"profitcalculator",checked:3===t,onClick:function(t){return e.radioHandler(3)}})," ",n.a.createElement("p",{class:"text-left",style:{color:"#00BFFF"}},n.a.createElement("h6",null,"Profit Calculator")," "))),n.a.createElement(E.a,{check:!0},n.a.createElement(y.a,{check:!0},n.a.createElement(b.a,{type:"radio",name:"radio1",id:"purchaselist",checked:4===t,onClick:function(t){return e.radioHandler(4)}})," ",n.a.createElement("p",{class:"text-left",style:{color:"#00BFFF"}}," ",n.a.createElement("h6",null," Purchase List")))),n.a.createElement(E.a,{check:!0},n.a.createElement(y.a,{check:!0},n.a.createElement(b.a,{type:"radio",name:"radio1",id:"profitcalculator",checked:5===t,onClick:function(t){return e.radioHandler(5)}})," ",n.a.createElement("p",{class:"text-left",style:{color:"#00BFFF"}},n.a.createElement("h6",null,"Sale List")," ")),1===t&&n.a.createElement("div",null,n.a.createElement(P,null)),2===t&&n.a.createElement("div",null,n.a.createElement(B,null)),3===t&&n.a.createElement("div",null,n.a.createElement(k,null)),4===t&&n.a.createElement("div",null,n.a.createElement(w,null)),5===t&&n.a.createElement("div",null,n.a.createElement(S,null))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);c.a.render(n.a.createElement(q,null),document.getElementById("purchase")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1c68e836.chunk.js.map