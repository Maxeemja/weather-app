(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var i=c(3),s=c.n(i),a=c(18),n=c.n(a),r=c(15),l=c(6),o=c(0),d=function(){return Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(o.jsx)("circle",{cx:"50",cy:"50",r:"32",strokeWidth:"14",stroke:"#fe718d",strokeDasharray:"50.26548245743669 50.26548245743669",fill:"none",strokeLinecap:"round",children:Object(o.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",keyTimes:"0;1",values:"0 50 50;360 50 50"})})})})},h=(c(45),function(e){var t=e.setCity,c=e.toggleTabs,s=Object(i.useState)(""),a=Object(r.a)(s,2),n=a[0],h=a[1],j=Object(l.useQuery)(["cities",n],(function(){return fetch("https://www.metaweather.com/api/location/search/?query=".concat(n),{mode:"no-cors"}).then((function(e){return e.json()}))}),{enabled:n.length>0}),m=j.isLoading,u=j.data,b=(j.isFetching,j.isSuccess),A=j.isError,O=function(){var e=document.querySelector(".search-form > input").value,t=document.querySelector("form > i");t.style.display=""!==e?"none":"block"};return b&&console.log(u),Object(o.jsxs)("div",{className:"city__search",children:[Object(o.jsx)("div",{className:"close",onClick:function(){c("info"),h("")},children:"\xd7"}),Object(o.jsxs)("form",{className:"search-form",action:"submit",onSubmit:function(e){e.preventDefault(),h(e.target.cityName.value),e.target.reset(),O()},children:[Object(o.jsx)("i",{className:"fas fa-search"}),";",Object(o.jsx)("input",{onChange:O,placeholder:"search",type:"text",name:"cityName"}),Object(o.jsx)("button",{type:"submit",disabled:m,children:"Search"})]}),m?Object(o.jsx)(d,{}):null,b&&u.length>0?Object(o.jsx)("div",{className:"city__search_results",children:u.slice(0,3).map((function(e){return Object(o.jsxs)("li",{className:"city__search_results-item",id:e.woeid,onClick:function(e){t(e.target.id),c("info"),h("")},children:[e.title,Object(o.jsx)("i",{className:"fas fa-chevron-right"})]},e.woeid)}))}):null,b&&u.length<1?Object(o.jsx)("div",{className:"no-results",children:"No city found"}):null,A?Object(o.jsx)("div",{children:"Something is wrong"}):null]})}),j=function(){var e=new Date,t=e.getUTCDate(),c=e.getUTCMonth();return{getWeekDay:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.getUTCDay();switch(t){case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";case 0:return"Sun";default:return"Error"}},getMonth:function(){switch(c+1){case 1:return"Jan";case 2:return"Feb";case 3:return"Mar";case 4:return"Apr";case 5:return"May";case 6:return"Jun";case 7:return"Jul";case 8:return"Aug";case 9:return"Sep";case 10:return"Oct";case 11:return"Nov";case 12:return"Dec";default:return"Error!"}},day:t}},m=(c(46),function(e){var t=e.toggleTabs,c=e.cityId,i=e.tempMeasure,s=e.convertToFahrengeit,a=Object(l.useQuery)(["city",c],(function(){return fetch("https://www.metaweather.com/api/location/".concat(c,"/"),{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){return g(e)}))})),n=a.isLoading,r=a.data,h=a.isFetching,m=(a.isSuccess,a.isError),u=(a.isStale,j()),b=u.getMonth,A=u.getWeekDay,O=u.day,g=function(e){return{img:e.consolidated_weather[0].weather_state_abbr,temp:Math.floor(e.consolidated_weather[0].the_temp),state:e.consolidated_weather[0].weather_state_name,title:e.title}};return n||h?Object(o.jsx)(d,{}):m?Object(o.jsx)("div",{children:"Ooops! Something happened..."}):Object(o.jsxs)("div",{className:"city__info",children:[Object(o.jsxs)("div",{className:"city__info_search",children:[Object(o.jsx)("div",{className:"city__info_search-btn",onClick:function(){return t("search")},children:"Search for places"}),Object(o.jsx)("div",{className:"city__info_search-currLoc",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMThUMTc6NTI6MTErMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTE4VDE4OjAxOjI0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTE4VDE4OjAxOjI0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplOTI0YzdmOC00NjkxLWYxNGMtODBiYy05YmQ2OWY4NTBhZjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTkyNGM3ZjgtNDY5MS1mMTRjLTgwYmMtOWJkNjlmODUwYWY3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTkyNGM3ZjgtNDY5MS1mMTRjLTgwYmMtOWJkNjlmODUwYWY3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOTI0YzdmOC00NjkxLWYxNGMtODBiYy05YmQ2OWY4NTBhZjciIHN0RXZ0OndoZW49IjIwMjEtMTEtMThUMTc6NTI6MTErMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ZDcE5AAACSUlEQVR4nO2cwXLDMAhESaff2H5j8pPpoVWbg50FaReUDm8mt1jgFRYIObnc73drznmrdmB3WiBACwRogQDv1Q78cJYpLqleHLBDBD1Lo+UpdgeBtqYFArRAgBYI0AIBqtJ8JDs9fjc97WcKxEjZ6WJlCKSqZca4UqGUAmUVeVKhVIt0RQUssakQqHJ7QLfNFqh872RkH5gCRR272fe64fncxL6cciH1pCODrC6mmbYoEeR1eETMKpGIWp791QjyXqyqVeT2M/ZiykJOXk2vCOSZvYztgMfG9GOijKDMjaXM1qxAaEaiaZkBsjkVRbOLNLrIO6NXM/sA37mZ2adzPJZffxcIBPI6ETXMGDcs0Mwjxu7rbG2XvUh71p6VG/VcS13/2AKhteJKsIHG8K5XLp6tQTMzjZ5x1iZSYedwzLMI2qFtkc3hPfexD6AFArRAgBYI0AIBzgQqf7OrgFCaHxccfVZgVLmrY4Tui/2IZVS5GdX6LzO7eUZLYbYQZYwdegpmIoh1MvESdiuPnr3HN5HjIvoWSdVRjHQBWXi6k2kdRTNBe3MRiT/KQjGzIyCztSKQ9DwqgPR8LmOroRRJPgGrAkWyC7OAu1rSewH9+guA9YhFHLlbPKJGxKSKY8aLoMEuvWxaicFepHdok1B9UGSxSpHotlVpvkIkiU3lm/bDYfW69LI/RRiohPo3P2YZPN6QsmFGper3YhGxSjNjH/sAWiBACwRogQAtEGAHgZ5lqfK93S7//lIuxBk7RNDWtECAFgjQAgG+ABt7fCQiMPcMAAAAAElFTkSuQmCC",alt:""})})]}),Object(o.jsxs)("div",{className:"city__info_imgs",children:[Object(o.jsx)("div",{className:"background"}),Object(o.jsx)("img",{src:"https://www.metaweather.com/static/img/weather/".concat(r.img,".svg"),alt:""})]}),Object(o.jsxs)("div",{className:"city__info_weather",children:[Object(o.jsxs)("div",{className:"city__info_weather-temp",children:["celsius"===i?r.temp:s(r.temp).slice(0,-2),Object(o.jsx)("span",{className:"measure",children:"celsius"===i?"\xb0C":"\xb0F"})]}),Object(o.jsx)("div",{className:"city__info_weather-state",children:r.state})]}),Object(o.jsxs)("div",{className:"city__info_date",children:["Today ",Object(o.jsx)("span",{children:"\u2022"})," ","".concat(A(),", ").concat(O," ").concat(b())]}),Object(o.jsxs)("div",{className:"city__info_location",children:[Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAnXsAAJ17ATyfd8QAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMThUMjE6NTc6MjgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTE4VDIxOjU4OjI0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTE4VDIxOjU4OjI0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiYjgyMzk5My1kYTFiLWYzNDItYjQ2ZC1iYWE1ZDYyYzkyY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YmI4MjM5OTMtZGExYi1mMzQyLWI0NmQtYmFhNWQ2MmM5MmNhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmI4MjM5OTMtZGExYi1mMzQyLWI0NmQtYmFhNWQ2MmM5MmNhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYjgyMzk5My1kYTFiLWYzNDItYjQ2ZC1iYWE1ZDYyYzkyY2EiIHN0RXZ0OndoZW49IjIwMjEtMTEtMThUMjE6NTc6MjgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5t9oKxAAAAvUlEQVRYhe2XzQ2AIAxGW+OkLmGcwLiEq+LBGwL9BTTSi1EofXxtIWIIAXra1DX6AACAuTR47GduqFQ4GH9Yt0UHIAwcz3mApEySAmm7sOZzAbS9SvpxAKoeFC26oLgBDwBWsWkBKPkxeroDcILn3qsDxOqoivXdRzHcspZ2Zm7R7gpwAExtRvl/QgEAvQqkn0QBKYT7dVzFpABcFdhqaRSgFhelyjsF4mLVAljPBjNACqL5behiOP4Nfw9wAQ5bF0czjOPdAAAAAElFTkSuQmCC",alt:""})," ",r.title]})]})}),u=(c(47),function(e){var t=e.city,c=e.setCity,i=e.tempMeasure,s=e.convertToFahrengeit,a=function(e){var t=document.querySelector(".city__search"),c=document.querySelector(".city__info");"info"===e?(t.style.display="none",c.style.display="block"):(t.style.display="block",c.style.display="none")};return Object(o.jsxs)("div",{className:"main__block",children:[Object(o.jsx)(m,{toggleTabs:a,cityId:t,tempMeasure:i,convertToFahrengeit:s}),Object(o.jsx)(h,{toggleTabs:a,setCity:c})]})}),b=c(28),A=c(29),O=c(31),g=c(30),v=(c(48),function(e){Object(O.a)(c,e);var t=Object(g.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(o.jsxs)("footer",{children:["Created by ",Object(o.jsx)("a",{href:"https://github.com/Maxeemja",children:"Maxeemja"})," - devChallenges.io"]})}}]),c}(i.Component)),I=(c(49),function(e){var t=e.tempMeasure,c=e.setTempMeasure;return Object(o.jsxs)("div",{className:"subheader",children:[Object(o.jsx)("div",{onClick:function(){return c("celsius")},className:"celsius-btn".concat("celsius"===t?" active":""),children:"\xb0C"}),Object(o.jsx)("div",{onClick:function(){return c("fahrengeit")},className:"fahrengeit-btn".concat("fahrengeit"===t?" active":""),children:"\xb0F"})]})}),x=(c(50),function(e){e.cityId;var t=e.weather,c=e.tempMeasure,i=e.convertToFahrengeit,s=j(),a=s.getMonth,n=s.getWeekDay,r=s.day;return Object(o.jsx)("div",{className:"forecast",children:t.map((function(e,t){var s=new Date(e.applicable_date).getDay();return Object(o.jsxs)("li",{className:"forecast-item",children:[Object(o.jsx)("div",{className:"forecast-item_day",children:0===t?"Tomorrow":"".concat(n(s),"  ").concat(r+t+1," ").concat(a())}),Object(o.jsx)("div",{className:"forecast-item_img",children:Object(o.jsx)("img",{src:"https://www.metaweather.com/static/img/weather/".concat(e.weather_state_abbr,".svg"),alt:""})}),Object(o.jsxs)("div",{className:"forecast-item_temps",children:["celsius"===c?Math.floor(e.max_temp)+"\xb0C":i(Math.floor(e.max_temp)),Object(o.jsx)("span",{children:"celsius"===c?Math.floor(e.min_temp)+"\xb0C":i(Math.floor(e.min_temp))})]})]},t)}))})}),y=(c(51),c(52),function(e){var t=e.highlights;return console.log(t),Object(o.jsxs)("div",{className:"highlights",children:[Object(o.jsx)("div",{className:"highlights__header",children:"Today's highlights"}),Object(o.jsxs)("div",{className:"highlights__grid",children:[Object(o.jsxs)("div",{className:"highlights__grid-item",children:[Object(o.jsx)("div",{className:"label",children:"Wind status"}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"count",children:[t.wind.speed,Object(o.jsx)("span",{children:" mph"})]}),Object(o.jsxs)("div",{className:"direction",children:[Object(o.jsx)("i",{className:"far fa-compass"}),t.wind.direction]})]})]}),Object(o.jsxs)("div",{className:"highlights__grid-item",children:[Object(o.jsx)("div",{className:"label",children:"Humidity"}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"count",children:[t.humidity,Object(o.jsx)("span",{children:" %"})]}),Object(o.jsxs)("div",{className:"bar_block",children:[Object(o.jsxs)("div",{className:"limits",children:[Object(o.jsx)("span",{children:"0"}),Object(o.jsx)("span",{children:"50"}),Object(o.jsx)("span",{children:"100"})]}),Object(o.jsx)("div",{className:"bar",children:Object(o.jsx)("div",{style:{width:"".concat(t.humidity,"%")},className:"bar-line"})}),Object(o.jsx)("div",{className:"percent-symbol",children:"%"})]})]})]}),Object(o.jsxs)("div",{className:"highlights__grid-item",children:[Object(o.jsx)("div",{className:"label",children:"Visibility"}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"count",children:[t.visibility,Object(o.jsx)("span",{children:" miles"})]})})]}),Object(o.jsxs)("div",{className:"highlights__grid-item",children:[Object(o.jsx)("div",{className:"label",children:"Air pressure"}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"count",children:[t.pressure,Object(o.jsx)("span",{children:" mb"})]})})]})]})]})}),p=function(e){var t=e.cityId,c=e.tempMeasure,i=e.setTempMeasure,s=e.convertToFahrengeit,a=Object(l.useQuery)(["forecast",t],(function(){return fetch("https://www.metaweather.com/api/location/".concat(t,"/"),{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){return j(e)}))})),n=a.isLoading,r=a.data,h=(a.isFetching,a.isError,a.isSuccess),j=function(e){return{weather:e.consolidated_weather.slice(1),highlights:{wind:{speed:Math.round(e.consolidated_weather[0].wind_speed),direction:e.consolidated_weather[0].wind_direction_compass},humidity:e.consolidated_weather[0].humidity,visibility:e.consolidated_weather[0].visibility.toFixed(1),pressure:Math.round(e.consolidated_weather[0].air_pressure)}}};return n?Object(o.jsx)(d,{}):(h&&console.log(r),Object(o.jsxs)("div",{className:"secondary__block",children:[Object(o.jsx)(I,{tempMeasure:c,setTempMeasure:i}),Object(o.jsx)(x,{cityId:t,weather:r.weather,tempMeasure:c,convertToFahrengeit:s}),Object(o.jsx)(y,{cityId:t,highlights:r.highlights}),Object(o.jsx)(v,{})]}))},M=function(){var e=new l.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),t=Object(i.useState)(924938),c=Object(r.a)(t,2),s=c[0],a=c[1],n=Object(i.useState)("celsius"),d=Object(r.a)(n,2),h=d[0],j=d[1],m=function(e){return"".concat((1.8*e+32).toFixed(0),"\xb0F")};return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)(l.QueryClientProvider,{client:e,children:[Object(o.jsx)(u,{city:s,convertToFahrengeit:m,setCity:a,tempMeasure:h}),Object(o.jsx)(p,{cityId:s,convertToFahrengeit:m,tempMeasure:h,setTempMeasure:j})]})})};c(53),c(54);n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.06e3cb37.chunk.js.map