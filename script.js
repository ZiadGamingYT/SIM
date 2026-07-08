// script.js - تحسينات إضافية

// 1. حفظ حالة البحث في LocalStorage
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  if (searchInput) {
    const savedSearch = localStorage.getItem('searchQuery');
    if (savedSearch) {
      searchInput.value = savedSearch;
      searchInput.dispatchEvent(new Event('input'));
    }
    searchInput.addEventListener('input', function() {
      localStorage.setItem('searchQuery', this.value);
    });
  }
});

// 2. إحصائية المواد
function countSubjects() {
  const cards = document.querySelectorAll('.card:not(.coming)');
  if (cards.length > 0) {
    console.log(`📚 عدد المواد المتاحة: ${cards.length}`);
  }
}
countSubjects();

// 3. رسالة ترحيب في Console
console.log('%c🚀 SIM Portal - الفرقة الثانية', 'font-size:20px; font-weight:bold; color:#00f5d4;');
console.log('%c👨‍💻 Designed by Ziad Taha', 'font-size:14px; color:#7b2cbf;');