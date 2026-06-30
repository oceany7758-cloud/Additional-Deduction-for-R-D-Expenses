/* ========================================
 * components.js — 共享UI工具函数
 * ======================================== */

function openMo(id){document.getElementById(id).classList.add('on')}
function closeMo(id){document.getElementById(id).classList.remove('on')}
function stab(el,id){
  var p=el.parentNode;
  var ts=p.querySelectorAll('.tb');for(var i=0;i<ts.length;i++)ts[i].classList.remove('on');
  el.classList.add('on');
  var pp=p.parentNode;
  var ps=pp.querySelectorAll('.tp');for(var i=0;i<ps.length;i++)ps[i].classList.remove('on');
  document.getElementById(id).classList.add('on');
}
function fmt(n){return n?n.toLocaleString('zh-CN',{minimumFractionDigits:0,maximumFractionDigits:2}):'0'}
function ttag(v){return v==='已结项'?'<span class="t t-b">'+v+'</span>':v==='研发中'?'<span class="t t-g">'+v+'</span>':v==='已立项'?'<span class="t t-x">'+v+'</span>':v}
function stag(v){return v==='费用化'?'<span class="t t-x">'+v+'</span>':v==='资本化'?'<span class="t t-b">'+v+'</span>':v==='混合型'?'<span class="t t-p">'+v+'</span>':v}
function astag(v){return v==='已启用'?'<span class="t t-y">'+v+'</span>':v==='已关账'?'<span class="t t-r">'+v+'</span>':v==='待建账'?'<span class="t t-p">'+v+'</span>':v}
function seltag(v){return v==='机密'?'<span class="t t-r">'+v+'</span>':v==='内部'?'<span class="t t-y">'+v+'</span>':'<span class="t t-x">'+v+'</span>'}
