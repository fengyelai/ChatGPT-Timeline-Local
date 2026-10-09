'use strict';
(() => {
  const options=new URLSearchParams(location.search);
  const total=Number(options.get('count')||36), virtual=options.get('virtual')==='1', reverse=options.get('reverse')==='1', legacy=options.get('legacy')==='1';
  const root=document.querySelector('main'),stage=document.getElementById('stage');
  const height=235;stage.style.height=(total*height)+'px';
  if(reverse){root.style.display='flex';root.style.flexDirection='column-reverse';}
  const questions=['快速筛查与精细建模如何衔接？','整理当前研究思路与关键结论','同一个问题重复出现，仍应分别保留','这次讨论形成了哪些决策？','帮我找回前面讨论的边界条件','如何验证长对话中的跳转准确性？'];
  function render(){
    const range=root.scrollHeight-root.clientHeight,top=root.scrollTop+(reverse?range:0);
    const first=virtual?Math.max(0,Math.floor(top/height)-1):0,last=virtual?Math.min(total,Math.ceil((top+root.clientHeight)/height)+1):total;
    const needed=new Set();
    for(let i=first;i<last;i++){
      const id='demo-'+i;needed.add(id);if(document.getElementById(id))continue;
      const section=document.createElement('section');section.className='turn';section.id=id;section.style.top=(i*height)+'px';section.dataset.turnKey='turn-'+i;
      if(legacy){section.dataset.testid='conversation-turn-'+i;section.removeAttribute('data-turn-key');}
      const bubble=document.createElement('div');bubble.className='question';
      if(legacy){bubble.dataset.messageAuthorRole='user';bubble.dataset.messageId='msg-'+i;}
      else bubble.setAttribute('data-user-message-bubble','');
      bubble.textContent=(i===4||i===8)?'这是一条重复的提问。':`${String(i+1).padStart(2,'0')} / ${questions[i%questions.length]}`;
      const answer=document.createElement('div');answer.className='answer';answer.dataset.messageAuthorRole='assistant';answer.textContent='这是用于检查目录、定位和滚动的模拟回答。长对话模式会移除屏幕外节点，再在滚动时重新挂载。';
      section.append(bubble,answer);stage.append(section);
    }
    if(virtual)for(const n of stage.children)if(!needed.has(n.id))n.remove();
  }
  root.addEventListener('scroll',render);root.scrollTop=reverse?0:root.scrollHeight;render();
  document.getElementById('note').textContent=`${total} 条模拟提问 · ${virtual?'虚拟列表':'完整 DOM'} · ${reverse?'反向滚动':'常规滚动'} · ${legacy?'旧结构':'新版气泡结构'}`;
  globalThis.timelineDemo={render,total,root,stage};
})();
