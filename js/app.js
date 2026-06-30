/* ========================================
 * app.js — 路由与导航控制
 * ======================================== */

/* ---------- 侧栏导航 ---------- */
var _curPage='project';
function goPage(id){
  if(_curPage===id) return;
  _curPage=id;
  // 切换侧栏高亮
  var items=document.querySelectorAll('.side-item[data-p]');
  for(var i=0;i<items.length;i++){
    items[i].classList.remove('on');
    if(items[i].getAttribute('data-p')===id) items[i].classList.add('on');
  }
  loadPage(id);
}

/* ---------- 页面加载 ---------- */
var _pageCache={};
function loadPage(id){
  var main=document.getElementById('mainContent');
  // 先隐藏所有已加载的页面
  var pages=main.querySelectorAll('.pg');
  for(var i=0;i<pages.length;i++) pages[i].classList.remove('on');
  // 如果已加载，直接显示
  if(_pageCache[id]){
    _pageCache[id].classList.add('on');
    return;
  }
  // 否则加载页面HTML
  fetch('pages/'+id+'/index.html')
    .then(function(r){return r.text()})
    .then(function(html){
      var div=document.createElement('div');
      div.innerHTML=html;
      var pg=div.querySelector('.pg');
      if(pg){
        main.appendChild(pg);
        _pageCache[id]=pg;
        // 加载页面JS
        var script=document.createElement('script');
        script.src='pages/'+id+'/index.js';
        script.onload=function(){
          // 调用页面初始化函数（如果存在）
          if(typeof window['init_'+id]==='function') window['init_'+id]();
        };
        document.body.appendChild(script);
      }
    })
    .catch(function(e){console.error('页面加载失败:',id,e)});
}

/* ---------- 初始化 ---------- */
document.addEventListener('DOMContentLoaded',function(){
  // 绑定侧栏点击
  var items=document.querySelectorAll('.side-item[data-p]');
  for(var i=0;i<items.length;i++){
    items[i].addEventListener('click',function(){
      var p=this.getAttribute('data-p');
      if(p) goPage(p);
    });
  }
  // 加载默认页面
  loadPage('project');
});
