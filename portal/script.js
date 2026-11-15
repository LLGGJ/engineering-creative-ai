(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add('visible'));

  const canvas = document.getElementById('particles');
  if (!canvas || reduced) return;
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, points = [], raf = 0;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = Math.floor(width * ratio); canvas.height = Math.floor(height * ratio);
    canvas.style.width = width + 'px'; canvas.style.height = height + 'px'; ctx.setTransform(ratio,0,0,ratio,0,0);
    const count = Math.min(65, Math.floor(width * height / 18000));
    points = Array.from({length:count}, () => ({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.4}));
  };
  const draw = () => {
    ctx.clearRect(0,0,width,height);
    for (let i=0;i<points.length;i++) {
      const p=points[i]; p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>width)p.vx*=-1; if(p.y<0||p.y>height)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(116,220,229,.55)';ctx.fill();
      for(let j=i+1;j<points.length;j++) { const q=points[j],d=Math.hypot(p.x-q.x,p.y-q.y); if(d<115){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(126,145,220,${(1-d/115)*.12})`;ctx.stroke();} }
    }
    raf=requestAnimationFrame(draw);
  };
  resize(); draw(); window.addEventListener('resize',resize,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else draw();});
})();
