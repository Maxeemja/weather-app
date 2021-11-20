(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var i=c(3),s=c.n(i),n=c(18),a=c.n(n),r=c(15),l=c(6),d=c(0),o=function(){return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(d.jsx)("circle",{cx:"50",cy:"50",r:"32",strokeWidth:"14",stroke:"#fe718d",strokeDasharray:"50.26548245743669 50.26548245743669",fill:"none",strokeLinecap:"round",children:Object(d.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",keyTimes:"0;1",values:"0 50 50;360 50 50"})})})})},h=(c(45),function(e){var t=e.setCity,c=e.toggleTabs,s=Object(i.useState)(""),n=Object(r.a)(s,2),a=n[0],h=n[1],j=Object(l.useQuery)(["cities",a],(function(){return fetch("location/search/?query=".concat(a)).then((function(e){return e.json()}))}),{enabled:a.length>0}),m=j.isLoading,u=j.data,b=(j.isFetching,j.isSuccess),A=j.isError,O=function(){var e=document.querySelector(".search-form > input").value,t=document.querySelector("form > i");t.style.display=""!==e?"none":"block"};return b&&console.log(u),Object(d.jsxs)("div",{className:"city__search",children:[Object(d.jsx)("div",{className:"close",onClick:function(){c("info"),h("")},children:"\xd7"}),Object(d.jsxs)("form",{className:"search-form",action:"submit",onSubmit:function(e){e.preventDefault(),h(e.target.cityName.value),e.target.reset(),O()},children:[Object(d.jsx)("i",{className:"fas fa-search"}),";",Object(d.jsx)("input",{onChange:O,placeholder:"search",type:"text",name:"cityName"}),Object(d.jsx)("button",{type:"submit",disabled:m,children:"Search"})]}),m?Object(d.jsx)(o,{}):null,b&&u.length>0?Object(d.jsx)("div",{className:"city__search_results",children:u.slice(0,3).map((function(e){return Object(d.jsxs)("li",{className:"city__search_results-item",id:e.woeid,onClick:function(e){t(e.target.id),c("info"),h("")},children:[e.title,Object(d.jsx)("i",{className:"fas fa-chevron-right"})]},e.woeid)}))}):null,b&&u.length<1?Object(d.jsx)("div",{className:"no-results",children:"No city found"}):null,A?Object(d.jsx)("div",{children:"Something is wrong"}):null]})}),j=function(){var e=new Date,t=e.getUTCDate(),c=e.getUTCMonth();return{getWeekDay:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.getUTCDay();switch(t){case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";case 0:return"Sun";default:return"Error"}},getMonth:function(){switch(c+1){case 1:return"Jan";case 2:return"Feb";case 3:return"Mar";case 4:return"Apr";case 5:return"May";case 6:return"Jun";case 7:return"Jul";case 8:return"Aug";case 9:return"Sep";case 10:return"Oct";case 11:return"Nov";case 12:return"Dec";default:return"Error!"}},day:t}},m=(c(46),function(e){var t=e.toggleTabs,c=e.cityId,i=e.tempMeasure,s=e.convertToFahrengeit,n=Object(l.useQuery)(["city",c],(function(){return fetch("location/".concat(c,"/")).then((function(e){return e.json()})).then((function(e){return g(e)}))})),a=n.isLoading,r=n.data,h=n.isFetching,m=(n.isSuccess,n.isError),u=(n.isStale,j()),b=u.getMonth,A=u.getWeekDay,O=u.day,g=function(e){return{img:e.consolidated_weather[0].weather_state_abbr,temp:Math.floor(e.consolidated_weather[0].the_temp),state:e.consolidated_weather[0].weather_state_name,title:e.title}};return a||h?Object(d.jsx)(o,{}):m?Object(d.jsx)("div",{children:"Ooops! Something happened..."}):Object(d.jsxs)("div",{className:"city__info",children:[Object(d.jsxs)("div",{className:"city__info_search",children:[Object(d.jsx)("div",{className:"city__info_search-btn",onClick:function(){return t("search")},children:"Search for places"}),Object(d.jsx)("div",{className:"city__info_search-currLoc",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMThUMTc6NTI6MTErMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTE4VDE4OjAxOjI0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTE4VDE4OjAxOjI0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplOTI0YzdmOC00NjkxLWYxNGMtODBiYy05YmQ2OWY4NTBhZjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTkyNGM3ZjgtNDY5MS1mMTRjLTgwYmMtOWJkNjlmODUwYWY3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTkyNGM3ZjgtNDY5MS1mMTRjLTgwYmMtOWJkNjlmODUwYWY3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOTI0YzdmOC00NjkxLWYxNGMtODBiYy05YmQ2OWY4NTBhZjciIHN0RXZ0OndoZW49IjIwMjEtMTEtMThUMTc6NTI6MTErMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZDcE5AAACSUlEQVR4nO2cwXLDMAhESaff2H5j8pPpoVWbg50FaReUDm8mt1jgFRYIObnc73drznmrdmB3WiBACwRogQDv1Q78cJYpLqleHLBDBD1Lo+UpdgeBtqYFArRAgBYI0AIBqtJ8JDs9fjc97WcKxEjZ6WJlCKSqZca4UqGUAmUVeVKhVIt0RQUssakQqHJ7QLfNFqh872RkH5gCRR272fe64fncxL6cciH1pCODrC6mmbYoEeR1eETMKpGIWp791QjyXqyqVeT2M/ZiykJOXk2vCOSZvYztgMfG9GOijKDMjaXM1qxAaEaiaZkBsjkVRbOLNLrIO6NXM/sA37mZ2adzPJZffxcIBPI6ETXMGDcs0Mwjxu7rbG2XvUh71p6VG/VcS13/2AKhteJKsIHG8K5XLp6tQTMzjZ5x1iZSYedwzLMI2qFtkc3hPfexD6AFArRAgBYI0AIBzgQqf7OrgFCaHxccfVZgVLmrY4Tui/2IZVS5GdX6LzO7eUZLYbYQZYwdegpmIoh1MvESdiuPnr3HN5HjIvoWSdVRjHQBWXi6k2kdRTNBe3MRiT/KQjGzIyCztSKQ9DwqgPR8LmOroRRJPgGrAkWyC7OAu1rSewH9+guA9YhFHLlbPKJGxKSKY8aLoMEuvWxaicFepHdok1B9UGSxSpHotlVpvkIkiU3lm/bDYfW69LI/RRiohPo3P2YZPN6QsmFGper3YhGxSjNjH/sAWiBACwRogQAtEGAHgZ5lqfK93S7//lIuxBk7RNDWtECAFgjQAgG+ABt7fCQiMPcMAAAAAElFTkSuQmCC",alt:""})})]}),Object(d.jsxs)("div",{className:"city__info_imgs",children:[Object(d.jsx)("div",{className:"background"}),Object(d.jsx)("img",{src:"https://www.metaweather.com/static/img/weather/".concat(r.img,".svg"),alt:""})]}),Object(d.jsxs)("div",{className:"city__info_weather",children:[Object(d.jsxs)("div",{className:"city__info_weather-temp",children:["celsius"===i?r.temp:s(r.temp).slice(0,-2),Object(d.jsx)("span",{className:"measure",children:"celsius"===i?"\xb0C":"\xb0F"})]}),Object(d.jsx)("div",{className:"city__info_weather-state",children:r.state})]}),Object(d.jsxs)("div",{className:"city__info_date",children:["Today ",Object(d.jsx)("span",{children:"\u2022"})," ","".concat(A(),", ").concat(O," ").concat(b())]}),Object(d.jsxs)("div",{className:"city__info_location",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAnXsAAJ17ATyfd8QAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMThUMjE6NTc6MjgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTE4VDIxOjU4OjI0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTE4VDIxOjU4OjI0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiYjgyMzk5My1kYTFiLWYzNDItYjQ2ZC1iYWE1ZDYyYzkyY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YmI4MjM5OTMtZGExYi1mMzQyLWI0NmQtYmFhNWQ2MmM5MmNhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmI4MjM5OTMtZGExYi1mMzQyLWI0NmQtYmFhNWQ2MmM5MmNhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYjgyMzk5My1kYTFiLWYzNDItYjQ2ZC1iYWE1ZDYyYzkyY2EiIHN0RXZ0OndoZW49IjIwMjEtMTEtMThUMjE6NTc6MjgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5t9oKxAAAAvUlEQVRYhe2XzQ2AIAxGW+OkLmGcwLiEq+LBGwL9BTTSi1EofXxtIWIIAXra1DX6AACAuTR47GduqFQ4GH9Yt0UHIAwcz3mApEySAmm7sOZzAbS9SvpxAKoeFC26oLgBDwBWsWkBKPkxeroDcILn3qsDxOqoivXdRzHcspZ2Zm7R7gpwAExtRvl/QgEAvQqkn0QBKYT7dVzFpABcFdhqaRSgFhelyjsF4mLVAljPBjNACqL5behiOP4Nfw9wAQ5bF0czjOPdAAAAAElFTkSuQmCC",alt:""})," ",r.title]})]})}),u=(c(47),function(e){var t=e.city,c=e.setCity,i=e.tempMeasure,s=e.convertToFahrengeit,n=function(e){var t=document.querySelector(".city__search"),c=document.querySelector(".city__info");"info"===e?(t.style.display="none",c.style.display="block"):(t.style.display="block",c.style.display="none")};return Object(d.jsxs)("div",{className:"main__block",children:[Object(d.jsx)(m,{toggleTabs:n,cityId:t,tempMeasure:i,convertToFahrengeit:s}),Object(d.jsx)(h,{toggleTabs:n,setCity:c})]})}),b=c(28),A=c(29),O=c(31),g=c(30),v=(c(48),function(e){Object(O.a)(c,e);var t=Object(g.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("footer",{children:["Created by ",Object(d.jsx)("a",{href:"https://github.com/Maxeemja",children:"Maxeemja"})," - devChallenges.io"]})}}]),c}(i.Component)),I=(c(49),function(e){var t=e.tempMeasure,c=e.setTempMeasure;return Object(d.jsxs)("div",{className:"subheader",children:[Object(d.jsx)("div",{onClick:function(){return c("celsius")},className:"celsius-btn".concat("celsius"===t?" active":""),children:"\xb0C"}),Object(d.jsx)("div",{onClick:function(){return c("fahrengeit")},className:"fahrengeit-btn".concat("fahrengeit"===t?" active":""),children:"\xb0F"})]})}),x=(c(50),function(e){e.cityId;var t=e.weather,c=e.tempMeasure,i=e.convertToFahrengeit,s=j(),n=s.getMonth,a=s.getWeekDay,r=s.day;return Object(d.jsx)("div",{className:"forecast",children:t.map((function(e,t){var s=new Date(e.applicable_date).getDay();return Object(d.jsxs)("li",{className:"forecast-item",children:[Object(d.jsx)("div",{className:"forecast-item_day",children:0===t?"Tomorrow":"".concat(a(s),"  ").concat(r+t+1," ").concat(n())}),Object(d.jsx)("div",{className:"forecast-item_img",children:Object(d.jsx)("img",{src:"https://www.metaweather.com/static/img/weather/".concat(e.weather_state_abbr,".svg"),alt:""})}),Object(d.jsxs)("div",{className:"forecast-item_temps",children:["celsius"===c?Math.floor(e.max_temp)+"\xb0C":i(Math.floor(e.max_temp)),Object(d.jsx)("span",{children:"celsius"===c?Math.floor(e.min_temp)+"\xb0C":i(Math.floor(e.min_temp))})]})]},t)}))})}),y=(c(51),c(52),function(e){var t=e.highlights;return console.log(t),Object(d.jsxs)("div",{className:"highlights",children:[Object(d.jsx)("div",{className:"highlights__header",children:"Today's highlights"}),Object(d.jsxs)("div",{className:"highlights__grid",children:[Object(d.jsxs)("div",{className:"highlights__grid-item",children:[Object(d.jsx)("div",{className:"label",children:"Wind status"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"count",children:[t.wind.speed,Object(d.jsx)("span",{children:" mph"})]}),Object(d.jsxs)("div",{className:"direction",children:[Object(d.jsx)("i",{className:"far fa-compass"}),t.wind.direction]})]})]}),Object(d.jsxs)("div",{className:"highlights__grid-item",children:[Object(d.jsx)("div",{className:"label",children:"Humidity"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"count",children:[t.humidity,Object(d.jsx)("span",{children:" %"})]}),Object(d.jsxs)("div",{className:"bar_block",children:[Object(d.jsxs)("div",{className:"limits",children:[Object(d.jsx)("span",{children:"0"}),Object(d.jsx)("span",{children:"50"}),Object(d.jsx)("span",{children:"100"})]}),Object(d.jsx)("div",{className:"bar",children:Object(d.jsx)("div",{style:{width:"".concat(t.humidity,"%")},className:"bar-line"})}),Object(d.jsx)("div",{className:"percent-symbol",children:"%"})]})]})]}),Object(d.jsxs)("div",{className:"highlights__grid-item",children:[Object(d.jsx)("div",{className:"label",children:"Visibility"}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"count",children:[t.visibility,Object(d.jsx)("span",{children:" miles"})]})})]}),Object(d.jsxs)("div",{className:"highlights__grid-item",children:[Object(d.jsx)("div",{className:"label",children:"Air pressure"}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"count",children:[t.pressure,Object(d.jsx)("span",{children:" mb"})]})})]})]})]})}),p=function(e){var t=e.cityId,c=e.tempMeasure,i=e.setTempMeasure,s=e.convertToFahrengeit,n=Object(l.useQuery)(["forecast",t],(function(){return fetch("location/".concat(t,"/")).then((function(e){return e.json()})).then((function(e){return j(e)}))})),a=n.isLoading,r=n.data,h=(n.isFetching,n.isError,n.isSuccess),j=function(e){return{weather:e.consolidated_weather.slice(1),highlights:{wind:{speed:Math.round(e.consolidated_weather[0].wind_speed),direction:e.consolidated_weather[0].wind_direction_compass},humidity:e.consolidated_weather[0].humidity,visibility:e.consolidated_weather[0].visibility.toFixed(1),pressure:Math.round(e.consolidated_weather[0].air_pressure)}}};return a?Object(d.jsx)(o,{}):(h&&console.log(r),Object(d.jsxs)("div",{className:"secondary__block",children:[Object(d.jsx)(I,{tempMeasure:c,setTempMeasure:i}),Object(d.jsx)(x,{cityId:t,weather:r.weather,tempMeasure:c,convertToFahrengeit:s}),Object(d.jsx)(y,{cityId:t,highlights:r.highlights}),Object(d.jsx)(v,{})]}))},M=function(){var e=new l.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),t=Object(i.useState)(924938),c=Object(r.a)(t,2),s=c[0],n=c[1],a=Object(i.useState)("celsius"),o=Object(r.a)(a,2),h=o[0],j=o[1],m=function(e){return"".concat((1.8*e+32).toFixed(0),"\xb0F")};return Object(d.jsx)("div",{className:"app",children:Object(d.jsxs)(l.QueryClientProvider,{client:e,children:[Object(d.jsx)(u,{city:s,convertToFahrengeit:m,setCity:n,tempMeasure:h}),Object(d.jsx)(p,{cityId:s,convertToFahrengeit:m,tempMeasure:h,setTempMeasure:j})]})})};c(53),c(54);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.644604bf.chunk.js.map