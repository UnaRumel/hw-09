const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};let e;function o(){t.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(){e=setInterval(o,1e3),t.stopBtn.removeAttribute("disabled"),t.startBtn.setAttribute("disabled","")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.8ae1a81c.js.map
