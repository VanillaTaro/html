/*
 * @Author: your name
 * @Date: 2021-04-06 14:02:46
 * @LastEditTime: 2021-04-07 14:33:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html\link.js
 */

hour=nowtime.getHours(); //将小时赋给hour

min=nowtime.getMinutes(); //分钟

second=nowtime.getSeconds(); //秒

day=nowtime.getDate(); //天

mon=nowtime.getMonth(); //月

year=nowtime.getFullYear(); //年

datashow=year+"年"+mon+"月"+day+"日"+hour+"时"+min+"分"+second+"秒";

document.getElementById("time").innerHTML=datashow; //在id为time的地方输出时间，注意，time需要在这行之前才可以