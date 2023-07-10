"use strict";

// 3a)
// let link = document.createElement("a");
// link.href = "index.html";
// link.innerText = "back";
// document.getElementsByTagName("body")[0].append(link); oder halt genau selektieren und parent.insertbefore(link, footer);

// 3b)
// let allParagraphs = document.querySelectorAll(".col p");
// for(const p of allParagraphs)
//     p.addEventListener("click", function(){
//         this.style.color = "red";
//     })

// 3d) --c) missing
// let allParagraphs = $(".col:not(:contains('Überschrift 1')) > p").css("background","blue");
