// 1. البحث المحسن
document.getElementById('search').addEventListener('input', function(e){
  let query = e.target.value.toLowerCase();
  document.querySelectorAll('.card[data-name]').forEach(card=>{
    let name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});

// 2. حفظ اخر بحث في LocalStorage
let lastSearch = localStorage.getItem('lastSearch');
if(lastSearch){ document.getElementById('search').value = lastSearch; }
document.getElementById('search').addEventListener('input', e=>{
  localStorage.setItem('lastSearch', e.target.value);
});

// 3. عداد المواد
document.querySelector('.section-title').innerHTML += ` <span style="color:#9ca3af;font-size:1rem">(${document.querySelectorAll('#term1 .card').length} مواد)</span>`;

// 4. Dark/Light Mode Toggle
const toggleBtn = document.createElement('button');
toggleBtn.className = 'theme-toggle';
toggleBtn.innerHTML = '🌙';
document.body.appendChild(toggleBtn);

toggleBtn.onclick = () => {
  document.body.classList.toggle('light');
  toggleBtn.innerHTML = document.body.classList.contains('light') ? '🌙' : '☀️';
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

// استرجاع الثيم
if(localStorage.getItem('theme') === 'light'){ 
  document.body.classList.add('light'); 
  toggleBtn.innerHTML = '🌙';
}

// 5. تنبيه عند الضغط على لينك فاضي
document.querySelectorAll('.section a[href="#"]').forEach(link=>{
  link.onclick = (e) => {
    e.preventDefault();
    alert('لسا مضفتش اللينك ده يا زياد 😅');
  }
});