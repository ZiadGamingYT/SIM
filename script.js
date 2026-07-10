// ====== البيانات ======
const levelsData = {
  level1: {
    name: 'الفرقة الأولى',
    icon: '📘',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'l1t1s1', name: 'Math I', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t1s2', name: 'Physics I', icon: '⚛️', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop' },
          { id: 'l1t1s3', name: 'Introduction to Computing Technology', icon: '💻', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop' },
          { id: 'l1t1s4', name: 'Computer Programming I', icon: '🖥️', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
          { id: 'l1t1s5', name: 'English', icon: '🇬🇧', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop' },
          { id: 'l1t1s6', name: 'تاريخ علوم', icon: '📜', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop' },
          { id: 'l1t1s7', name: 'إنسان وبيئة', icon: '🌍', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l1t2s1', name: 'Math II', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t2s2', name: 'Introduction to Probability', icon: '🎲', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop' },
          { id: 'l1t2s3', name: 'Physics II', icon: '⚛️', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop' },
          { id: 'l1t2s4', name: 'Mathematics for Computer Science (MCS)', icon: '🧮', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t2s5', name: 'Object Oriented Programming (OOP)', icon: '🔷', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
          { id: 'l1t2s6', name: 'Arabic', icon: '🇸🇦', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop' },
          { id: 'l1t2s7', name: 'حاسب ومجتمع', icon: '🤝', image: 'https://images.unsplash.com/photo-1521791136064-7986c0212926?w=400&h=300&fit=crop' }
        ]
      }
    }
  },
  level2: {
    name: 'الفرقة الثانية',
    icon: '📗',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'dataScience', name: 'Data Science', icon: '📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
          { id: 'softwareEngineering', name: 'Software Engineering', icon: '💻', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
          { id: 'math', name: 'Math III', icon: '➗', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'multimedia', name: 'Multimedia Systems', icon: '🎬', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop' },
          { id: 'dataStructures', name: 'Data Structures', icon: '🗂️', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
          { id: 'game', name: 'Game Programming', icon: '🎮', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l2t2s1', name: 'Math IV', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l2t2s2', name: 'Web Programming', icon: '🌐', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop' },
          { id: 'l2t2s3', name: 'Database', icon: '🗄️', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop' },
          { id: 'l2t2s4', name: 'Human Computer Interaction', icon: '👤💻', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop' },
          { id: 'l2t2s5', name: 'Software Requirements Analysis', icon: '📋', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop' }
        ]
      }
    }
  },
  level3: {
    name: 'الفرقة الثالثة',
    icon: '📕',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'l3t1s1', name: 'Linear Algebra', icon: '🔢', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l3t1s2', name: 'Operating Systems', icon: '⚙️', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop' },
          { id: 'l3t1s3', name: 'Design and Analysis of Algorithms', icon: '🧩', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop' },
          { id: 'l3t1s4', name: 'Advanced Methods for Multimedia', icon: '🎥', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l3t2s1', name: 'Numerical Computation', icon: '🔢', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l3t2s2', name: 'AI for Game', icon: '🤖', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
          { id: 'l3t2s3', name: 'Mobile Application Development', icon: '📱', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop' }
        ]
      }
    }
  },
  level4: {
    name: 'الفرقة الرابعة',
    icon: '📙',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'l4t1s1', name: 'Computer Graphics', icon: '🎨', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop' },
          { id: 'project1', name: 'Project I', icon: '📋', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l4t2s1', name: 'Game Design & Modeling', icon: '🎮', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop' },
          { id: 'project2', name: 'Project II', icon: '📋', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' }
        ]
      }
    }
  }
};

// ====== بيانات المحاضرات ======
const subjectsLectures = {
  dataScience: {
    name: '📊 Data Science',
    lectures: [
      'https://drive.google.com/file/d/1dbKi-vRIFx3Ynl7-FmAtGcwaPr8LSWBh/view?usp=drivesdk',
      'https://drive.google.com/file/d/1r52kwBYqGtPAtTE13VAQIkTkEURh5r2H/view?usp=drivesdk',
      'https://drive.google.com/file/d/1YtZ1sNChbpqAPzc5mY2kaQEAqSkJR7Mz/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HiOVGb66Rtc9ROM_-ikXoajCRSuaNT6a/view?usp=drivesdk',
      'https://drive.google.com/file/d/1jHCmkxxaThQvdZcrJ4yYWkg4AaVIGi-E/view?usp=drivesdk',
      'https://drive.google.com/file/d/1yT02KGhdF4AjYqlrsLUB7-DC34K-8MlU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LEc3a8DWWjQk4lrwC0DcTbhKoIZ1atty/view?usp=drivesdk',
      'https://drive.google.com/file/d/1GbZRS7CNDoez8gVlARgGZspHBbkHhOF4/view?usp=drivesdk'
    ],
    sections: [],
    summaries: []
  },
  softwareEngineering: { name: '💻 Software Engineering', lectures: [], sections: [], summaries: [] },
  math: { name: '➗ Math III', lectures: [], sections: [], summaries: [] },
  multimedia: { name: '🎬 Multimedia Systems', lectures: [], sections: [], summaries: [] },
  dataStructures: { name: '🗂️ Data Structures', lectures: [], sections: [], summaries: [] },
  game: { name: '🎮 Game Programming', lectures: [], sections: [], summaries: [] },
  project1: { name: '📋 Project I', lectures: [], sections: [], summaries: [], isProject: true },
  project2: { name: '📋 Project II', lectures: [], sections: [], summaries: [], isProject: true }
};

// ====== المتغيرات ======
let currentLevel = null;
let currentSubjectId = null;
let isTransitioning = false;
let historyStack = ['welcome'];
let isBackAction = false;
let isFirstLoad = true;

// ====== دالة إدارة التاريخ ======
function pushHistory(state, title, url) {
  if (isBackAction) { isBackAction = false; return; }
  history.pushState(state, title, url);
  historyStack.push(state.page);
}

// ====== حفظ الحالة الحالية - ملغي ======
function saveCurrentState() { /* تم إلغاء حفظ الحالة */ }

// ====== استعادة الحالة المحفوظة - ملغي ======
function restoreSavedState() { return false; }

// ====== إعداد تبويبات المادة ======
function setupMaterialTabs(subjectId, isProject) {
  const tabsContainer = document.getElementById('materialTabs');
  tabsContainer.innerHTML = '';
  let tabs = [], tabKeys = [];
  if (isProject) { tabs = ['📋 متطلب المشروع']; tabKeys = ['project']; } 
  else { tabs = ['📖 محاضرات', '✏️ سكاشن', '📝 ملخصات']; tabKeys = ['lectures', 'sections', 'summaries']; }

  tabs.forEach((tab, index) => {
    const btn = document.createElement('button');
    btn.className = `material-tab ${index === 0 ? 'active' : ''}`;
    btn.textContent = tab;
    btn.dataset.tabKey = tabKeys[index];
    btn.onclick = () => switchMaterialTab(tabKeys[index]);
    tabsContainer.appendChild(btn);
  });

  const contentContainer = document.getElementById('materialContent');
  contentContainer.innerHTML = '';

  if (isProject) {
    const div = document.createElement('div');
    div.className = 'material-content active';
    div.id = 'material-project';
    div.innerHTML = `
      <div style="text-align:center;padding:40px 20px;">
        <span style="font-size:3.5rem;display:block;margin-bottom:15px;">📋</span>
        <h2 style="color:var(--accent);margin-bottom:12px;">متطلب مشروع التخرج</h2>
        <p style="font-size:1rem;color:var(--text-secondary);margin-bottom:25px;">سيتم إضافة رابط المشروع هنا قريباً</p>
        <a href="#" target="_blank" style="display:inline-block;padding:12px 35px;background:var(--accent);color:#fff;border-radius:12px;text-decoration:none;font-weight:700;">🚀 اضغط لإضافة الرابط</a>
      </div>
    `;
    contentContainer.appendChild(div);
  } else {
    tabKeys.forEach((key, index) => {
      const div = document.createElement('div');
      div.className = `material-content ${index === 0 ? 'active' : ''}`;
      div.id = `material-${key}`;
      contentContainer.appendChild(div);
    });
    renderMaterialContent(subjectId, 'lectures');
    renderMaterialContent(subjectId, 'sections');
    renderMaterialContent(subjectId, 'summaries');
  }
}

// ====== الدخول إلى المنصة ======
function enterPlatform() {
  const welcomePage = document.getElementById('welcomePage');
  const mainPage = document.getElementById('mainPage');
  welcomePage.classList.add('exiting');
  setTimeout(() => {
    welcomePage.classList.add('hidden');
    welcomePage.classList.remove('exiting');
    mainPage.classList.remove('hidden');
    mainPage.classList.remove('entering');
    void mainPage.offsetWidth;
    mainPage.classList.add('entering');
    pushHistory({ page: 'main' }, 'الرئيسية', '#main');
    setTimeout(applyNeonFrameToCurrentPage, 100);
  }, 300);
}

// ====== دالة الانتقال بين الصفحات مع التاريخ ======
function transitionToPage(pageIn, pageOut, stateData, callback) {
  if (isTransitioning) return;
  isTransitioning = true;
  if (pageOut && !pageOut.classList.contains('hidden')) {
    pageOut.classList.remove('entering');
    pageOut.classList.add('exiting');
    setTimeout(() => {
      pageOut.classList.add('hidden');
      pageOut.classList.remove('exiting');
      if (pageIn) {
        pageIn.classList.remove('hidden');
        pageIn.classList.remove('entering');
        void pageIn.offsetWidth;
        pageIn.classList.add('entering');
      }
      if (stateData && !isBackAction) pushHistory(stateData, stateData.title || '', stateData.url || '#');
      else isBackAction = false;
      isTransitioning = false;
      if (callback) callback();
      setTimeout(applyNeonFrameToCurrentPage, 100);
    }, 250);
  } else {
    if (pageIn) {
      pageIn.classList.remove('hidden');
      pageIn.classList.remove('entering');
      void pageIn.offsetWidth;
      pageIn.classList.add('entering');
    }
    if (stateData && !isBackAction) pushHistory(stateData, stateData.title || '', stateData.url || '#');
    else isBackAction = false;
    isTransitioning = false;
    if (callback) callback();
    setTimeout(applyNeonFrameToCurrentPage, 100);
  }
}

// ====== عرض مواد الفرقة ======
function renderLevelSubjects(levelId) {
  const level = levelsData[levelId];
  const term1Grid = document.getElementById('term1Grid');
  const term2Grid = document.getElementById('term2Grid');
  term1Grid.innerHTML = '';
  term2Grid.innerHTML = '';
  
  level.terms.term1.subjects.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.subjectName = sub.name.toLowerCase();
    card.innerHTML = `
      <img src="${sub.image}" alt="${sub.name}" style="width:100%;height:140px;object-fit:cover;border-radius:10px;margin-bottom:10px;">
      <span class="icon">${sub.icon}</span>
      <h3>${sub.name}</h3>
      <p>اضغط للدخول</p>
    `;
    card.onclick = () => showSubject(levelId, 'term1', sub.id);
    term1Grid.appendChild(card);
  });

  level.terms.term2.subjects.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.subjectName = sub.name.toLowerCase();
    card.innerHTML = `
      <img src="${sub.image}" alt="${sub.name}" style="width:100%;height:140px;object-fit:cover;border-radius:10px;margin-bottom:10px;">
      <span class="icon">${sub.icon}</span>
      <h3>${sub.name}</h3>
      <p>اضغط للدخول</p>
    `;
    card.onclick = () => showSubject(levelId, 'term2', sub.id);
    term2Grid.appendChild(card);
  });
}

// ====== عرض الفرقة ======
function showLevel(levelId) {
  if (isTransitioning) return;
  currentLevel = levelId;
  const level = levelsData[levelId];
  const mainPage = document.getElementById('mainPage');
  const levelPage = document.getElementById('levelPage');
  document.getElementById('levelTitle').textContent = `${level.icon} ${level.name}`;
  document.getElementById('levelSubtitle').textContent = 'اختر الترم';
  renderLevelSubjects(levelId);
  setupLevelSearch(levelId);
  transitionToPage(levelPage, mainPage, { page: 'level', levelId: levelId, title: level.name, url: `#level-${levelId}` });
}

// ====== سيرش الفرقة ======
function setupLevelSearch(levelId) {
  const searchInput = document.getElementById('levelSearch');
  searchInput.value = '';
  searchInput.oninput = function() {
    const query = this.value.toLowerCase().trim();
    const term1Grid = document.getElementById('term1Grid');
    const term2Grid = document.getElementById('term2Grid');
    const noResults1 = document.getElementById('noResultsTerm1');
    const noResults2 = document.getElementById('noResultsTerm2');
    let term1HasResults = false, term2HasResults = false;
    
    term1Grid.querySelectorAll('.card').forEach(card => {
      const name = card.dataset.subjectName || '';
      if (name.includes(query) || query === '') { card.classList.remove('hidden-card'); term1HasResults = true; } 
      else { card.classList.add('hidden-card'); }
    });
    term2Grid.querySelectorAll('.card').forEach(card => {
      const name = card.dataset.subjectName || '';
      if (name.includes(query) || query === '') { card.classList.remove('hidden-card'); term2HasResults = true; } 
      else { card.classList.add('hidden-card'); }
    });
    noResults1.classList.toggle('show', query !== '' && !term1HasResults);
    noResults2.classList.toggle('show', query !== '' && !term2HasResults);
  };
}

// ====== عرض المادة ======
function showSubject(levelId, termId, subjectId) {
  if (isTransitioning) return;
  currentSubjectId = subjectId;
  const level = levelsData[levelId];
  let subject = null, termName = '';
  if (termId === 'term1') { subject = level.terms.term1.subjects.find(s => s.id === subjectId); termName = 'الترم الأول'; } 
  else { subject = level.terms.term2.subjects.find(s => s.id === subjectId); termName = 'الترم الثاني'; }
  if (!subject) return;

  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  document.getElementById('subjectTitle').textContent = `${subject.icon} ${subject.name}`;
  document.getElementById('subjectSubtitle').textContent = `${termName} - ${level.name}`;

  const isProject = subjectId === 'project1' || subjectId === 'project2';
  setupMaterialTabs(subjectId, isProject);
  setupSubjectSearch(subjectId);

  transitionToPage(subjectPage, levelPage, { page: 'subject', subjectId: subjectId, title: subject.name, url: `#subject-${subjectId}` });
}

// ====== تعبئة محتوى المادة ======
function renderMaterialContent(subjectId, type) {
  const container = document.getElementById(`material-${type}`);
  if (!container) return;
  const data = subjectsLectures[subjectId];
  if (!data) { container.innerHTML = '<p style="text-align:center;padding:30px;color:var(--text-secondary);">⏳ قيد الانتظار</p>'; return; }
  
  let items = [];
  if (type === 'lectures') items = data.lectures || [];
  else if (type === 'sections') items = data.sections || [];
  else if (type === 'summaries') items = data.summaries || [];

  const grid = document.createElement('div');
  grid.className = 'lecture-grid';
  if (items.length === 0) {
    grid.innerHTML = `<div class="lecture-card"><span class="num">⏳</span><h3>قيد الانتظار</h3><a href="#">سيتم الإضافة قريباً</a></div>`;
  } else {
    items.forEach((link, index) => {
      const card = document.createElement('div');
      card.className = 'lecture-card';
      const label = type === 'lectures' ? 'المحاضرة' : type === 'sections' ? 'سكشن' : 'ملخص';
      const btnText = type === 'summaries' ? '📥 تحميل' : '▶️ مشاهدة';
      card.dataset.lectureName = `${label} ${index + 1}`;
      card.innerHTML = `
        <span class="num">${String(index + 1).padStart(2, '0')}</span>
        <h3>${label} ${index + 1}</h3>
        <a href="${link}" target="_blank">${btnText}</a>
      `;
      grid.appendChild(card);
    });
  }
  container.innerHTML = '';
  container.appendChild(grid);
}

// ====== سيرش المادة ======
function setupSubjectSearch(subjectId) {
  const searchInput = document.getElementById('subjectSearch');
  searchInput.value = '';
  searchInput.oninput = function() {
    const query = this.value.toLowerCase().trim();
    const noResults = document.getElementById('noResultsSubject');
    let hasResults = false;
    document.querySelectorAll('.lecture-card').forEach(card => {
      const name = card.dataset.lectureName ? card.dataset.lectureName.toLowerCase() : '';
      if (name.includes(query) || query === '') { card.classList.remove('hidden-card'); hasResults = true; } 
      else { card.classList.add('hidden-card'); }
    });
    noResults.classList.toggle('show', query !== '' && !hasResults);
  };
}

// ====== التبديل بين التبويبات ======
function switchMaterialTab(tabKey) {
  document.querySelectorAll('.material-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.material-content').forEach(content => content.classList.remove('active'));
  const tabs = document.querySelectorAll('.material-tab');
  const keys = ['lectures', 'sections', 'summaries', 'project'];
  const index = keys.indexOf(tabKey);
  if (tabs[index]) tabs[index].classList.add('active');
  const target = document.getElementById(`material-${tabKey}`);
  if (target) target.classList.add('active');
  document.getElementById('subjectSearch').value = '';
  document.getElementById('subjectSearch').dispatchEvent(new Event('input'));
}

// ====== العودة للرئيسية ======
function goBackToMain() {
  if (isTransitioning) return;
  const mainPage = document.getElementById('mainPage');
  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  if (!subjectPage.classList.contains('hidden')) subjectPage.classList.add('hidden');
  if (!levelPage.classList.contains('hidden')) levelPage.classList.add('hidden');
  document.getElementById('levelSearch').value = '';
  document.getElementById('subjectSearch').value = '';
  pushHistory({ page: 'main' }, 'الرئيسية', '#main');
  mainPage.classList.remove('hidden');
  mainPage.classList.remove('entering');
  void mainPage.offsetWidth;
  mainPage.classList.add('entering');
  setTimeout(applyNeonFrameToCurrentPage, 100);
}

// ====== العودة للترم ======
function goBackToLevel() {
  if (isTransitioning) return;
  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  document.getElementById('subjectSearch').value = '';
  document.getElementById('noResultsSubject').classList.remove('show');
  renderLevelSubjects(currentLevel);
  setupLevelSearch(currentLevel);
  pushHistory({ page: 'level', levelId: currentLevel, title: levelsData[currentLevel].name }, levelsData[currentLevel].name, `#level-${currentLevel}`);
  levelPage.classList.remove('hidden');
  levelPage.classList.remove('entering');
  void levelPage.offsetWidth;
  levelPage.classList.add('entering');
  subjectPage.classList.add('hidden');
  setTimeout(applyNeonFrameToCurrentPage, 100);
}

// ====== تطبيق Neon Frame ======
function applyNeonFrameToCurrentPage() {
  document.querySelectorAll('.neon-frame').forEach(el => el.classList.remove('active'));
  const visiblePages = document.querySelectorAll('.page-level:not(.hidden), #welcomePage');
  visiblePages.forEach(page => {
    const frame = page.querySelector('.neon-frame');
    if (frame) {
      frame.classList.add('active');
      clearTimeout(frame._timeout);
      frame._timeout = setTimeout(() => frame.classList.remove('active'), 2500);
    }
  });
  if (document.querySelectorAll('.page-level:not(.hidden)').length === 0) {
    const welcomeFrame = document.querySelector('#welcomePage .neon-frame');
    if (welcomeFrame) {
      welcomeFrame.classList.add('active');
      clearTimeout(welcomeFrame._timeout);
      welcomeFrame._timeout = setTimeout(() => welcomeFrame.classList.remove('active'), 2500);
    }
  }
}

// ====== معالجة زر الرجوع ======
window.addEventListener('popstate', function(event) {
  if (isTransitioning) return;
  const mainPage = document.getElementById('mainPage');
  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  const welcomePage = document.getElementById('welcomePage');
  let currentPage = 'welcome';
  if (!welcomePage.classList.contains('hidden')) currentPage = 'welcome';
  else if (!mainPage.classList.contains('hidden')) currentPage = 'main';
  else if (!levelPage.classList.contains('hidden')) currentPage = 'level';
  else if (!subjectPage.classList.contains('hidden')) currentPage = 'subject';
  const state = event.state;
  let targetPage = 'welcome';
  if (state) targetPage = state.page || 'welcome';
  if (currentPage === 'welcome') { history.pushState({ page: 'welcome' }, '', '#welcome'); setTimeout(applyNeonFrameToCurrentPage, 100); return; }
  if (targetPage === 'welcome') {
    welcomePage.classList.remove('hidden'); welcomePage.classList.remove('entering'); void welcomePage.offsetWidth; welcomePage.classList.add('entering');
    mainPage.classList.add('hidden'); levelPage.classList.add('hidden'); subjectPage.classList.add('hidden');
    history.pushState({ page: 'welcome' }, '', '#welcome'); setTimeout(applyNeonFrameToCurrentPage, 100); return;
  }
  if (targetPage === 'main') {
    if (currentPage !== 'main') {
      if (currentPage === 'welcome') welcomePage.classList.add('hidden');
      mainPage.classList.remove('hidden'); mainPage.classList.remove('entering'); void mainPage.offsetWidth; mainPage.classList.add('entering');
      levelPage.classList.add('hidden'); subjectPage.classList.add('hidden');
    }
    setTimeout(applyNeonFrameToCurrentPage, 100); return;
  }
  if (targetPage === 'level' && state && state.levelId) {
    if (currentPage === 'subject') goBackToLevel(); else showLevel(state.levelId);
    setTimeout(applyNeonFrameToCurrentPage, 100); return;
  }
  if (targetPage === 'subject' && state && state.subjectId) {
    for (const levelId in levelsData) {
      const level = levelsData[levelId];
      for (const termId in level.terms) {
        const found = level.terms[termId].subjects.find(s => s.id === state.subjectId);
        if (found) { showSubject(levelId, termId, state.subjectId); setTimeout(applyNeonFrameToCurrentPage, 100); return; }
      }
    }
  }
  if (currentPage !== 'welcome') {
    welcomePage.classList.remove('hidden'); welcomePage.classList.remove('entering'); void welcomePage.offsetWidth; welcomePage.classList.add('entering');
    mainPage.classList.add('hidden'); levelPage.classList.add('hidden'); subjectPage.classList.add('hidden');
    history.pushState({ page: 'welcome' }, '', '#welcome'); setTimeout(applyNeonFrameToCurrentPage, 100);
  }
});

// ====== Toast ======
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ====== Preloader واستعادة الحالة بعد Refresh ======
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  
  // محاولة استعادة الصفحة بعد الـ Refresh
  const restored = restorePageAfterRefresh();
  
  if (!restored) {
    // لو مفيش حالة محفوظة، نبدأ من الترحيب
    const welcomePage = document.getElementById('welcomePage');
    const mainPage = document.getElementById('mainPage');
    const levelPage = document.getElementById('levelPage');
    const subjectPage = document.getElementById('subjectPage');
    
    welcomePage.classList.add('hidden');
    mainPage.classList.add('hidden');
    levelPage.classList.add('hidden');
    subjectPage.classList.add('hidden');
    
    welcomePage.classList.remove('hidden');
    welcomePage.classList.remove('entering');
    void welcomePage.offsetWidth;
    welcomePage.classList.add('entering');
    
    setTimeout(() => {
      history.pushState({ page: 'welcome' }, '', '#welcome');
      setTimeout(() => {
        history.pushState({ page: 'welcome' }, '', '#welcome-keep');
      }, 100);
    }, 200);
  }
  
  // إخفاء Preloader
  setTimeout(() => {
    preloader.classList.add('hide');
  }, 300);
  
  isFirstLoad = false;
  setTimeout(applyNeonFrameToCurrentPage, 200);
});

// ====== Ripple Effect ======
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(14, 165, 233, 0.15);
      width: ${size}px;
      height: ${size}px;
      left: ${e.clientX - rect.left - size/2}px;
      top: ${e.clientY - rect.top - size/2}px;
      transform: scale(0);
      animation: rippleAnim 0.5s ease forwards;
      pointer-events: none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

// ====== Dark/Light Mode ======
const themeToggle = document.getElementById('themeToggle');
let isDark = true;
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = '☀️';
  isDark = false;
}
themeToggle.addEventListener('click', function() {
  if (isDark) {
    document.body.classList.add('light-mode');
    this.textContent = '☀️';
    isDark = false;
    localStorage.setItem('theme', 'light');
    showToast('☀️ الوضع الفاتح');
  } else {
    document.body.classList.remove('light-mode');
    this.textContent = '🌙';
    isDark = true;
    localStorage.setItem('theme', 'dark');
    showToast('🌙 الوضع الداكن');
  }
});

// ================================================================
// ====== الجزء الجديد: حفظ واستعادة حالة الصفحة للـ Refresh ======
// ================================================================

// دالة لحفظ الصفحة الحالية في localStorage (باستثناء صفحة الترحيب)
function saveCurrentPageForRefresh() {
    const welcomePage = document.getElementById('welcomePage');
    const mainPage = document.getElementById('mainPage');
    const levelPage = document.getElementById('levelPage');
    const subjectPage = document.getElementById('subjectPage');

    let pageState = { page: 'welcome' };

    if (!welcomePage.classList.contains('hidden')) {
        pageState = { page: 'welcome' };
    } else if (!mainPage.classList.contains('hidden')) {
        pageState = { page: 'main' };
    } else if (!levelPage.classList.contains('hidden')) {
        pageState = {
            page: 'level',
            levelId: currentLevel || 'level1'
        };
    } else if (!subjectPage.classList.contains('hidden')) {
        pageState = {
            page: 'subject',
            subjectId: currentSubjectId || 'dataScience'
        };
    }

    // نحفظ الحالة في localStorage (بس مش للترحيب عشان الـ Refresh)
    if (pageState.page !== 'welcome') {
        localStorage.setItem('refreshPageState', JSON.stringify(pageState));
    } else {
        // لو في الترحيب، نمسح الحالة عشان نبدأ من البداية
        localStorage.removeItem('refreshPageState');
    }
}

// دالة لاستعادة الصفحة بعد الـ Refresh
function restorePageAfterRefresh() {
    const savedState = localStorage.getItem('refreshPageState');
    if (!savedState) return false;

    try {
        const state = JSON.parse(savedState);
        const welcomePage = document.getElementById('welcomePage');
        const mainPage = document.getElementById('mainPage');
        const levelPage = document.getElementById('levelPage');
        const subjectPage = document.getElementById('subjectPage');

        // نخفي كل الصفحات
        welcomePage.classList.add('hidden');
        mainPage.classList.add('hidden');
        levelPage.classList.add('hidden');
        subjectPage.classList.add('hidden');

        if (state.page === 'main') {
            mainPage.classList.remove('hidden');
            mainPage.classList.remove('entering');
            void mainPage.offsetWidth;
            mainPage.classList.add('entering');
            history.pushState({ page: 'main' }, '', '#main');
            return true;
        }

        if (state.page === 'level' && state.levelId) {
            const levelId = state.levelId;
            currentLevel = levelId;
            const level = levelsData[levelId];
            if (level) {
                document.getElementById('levelTitle').textContent = `${level.icon} ${level.name}`;
                document.getElementById('levelSubtitle').textContent = 'اختر الترم';
                renderLevelSubjects(levelId);
                setupLevelSearch(levelId);
                levelPage.classList.remove('hidden');
                levelPage.classList.remove('entering');
                void levelPage.offsetWidth;
                levelPage.classList.add('entering');
                history.pushState({ page: 'level', levelId: levelId }, '', `#level-${levelId}`);
                return true;
            }
        }

        if (state.page === 'subject' && state.subjectId) {
            for (const levelId in levelsData) {
                const level = levelsData[levelId];
                for (const termId in level.terms) {
                    const found = level.terms[termId].subjects.find(s => s.id === state.subjectId);
                    if (found) {
                        currentLevel = levelId;
                        currentSubjectId = state.subjectId;
                        // نضبط الصفحة من غير transition عشان تظهر بسرعة
                        const levelPage = document.getElementById('levelPage');
                        const subjectPage = document.getElementById('subjectPage');
                        const subject = found;
                        const termName = termId === 'term1' ? 'الترم الأول' : 'الترم الثاني';
                        const level = levelsData[levelId];

                        document.getElementById('subjectTitle').textContent = `${subject.icon} ${subject.name}`;
                        document.getElementById('subjectSubtitle').textContent = `${termName} - ${level.name}`;

                        const isProject = state.subjectId === 'project1' || state.subjectId === 'project2';
                        setupMaterialTabs(state.subjectId, isProject);
                        setupSubjectSearch(state.subjectId);

                        levelPage.classList.add('hidden');
                        subjectPage.classList.remove('hidden');
                        subjectPage.classList.remove('entering');
                        void subjectPage.offsetWidth;
                        subjectPage.classList.add('entering');
                        history.pushState({ page: 'subject', subjectId: state.subjectId }, '', `#subject-${state.subjectId}`);
                        return true;
                    }
                }
            }
        }

        return false;

    } catch (e) {
        return false;
    }
}

// ====== تعديل دالة الانتقال عشان تحفظ الحالة ======
const originalTransitionToPage = transitionToPage;
transitionToPage = function(pageIn, pageOut, stateData, callback) {
    originalTransitionToPage(pageIn, pageOut, stateData, function() {
        setTimeout(() => {
            saveCurrentPageForRefresh();
            if (callback) callback();
        }, 50);
    });
};

// ====== تعديل دالة العودة للرئيسية عشان تمسح الحالة ======
const originalGoBackToMain = goBackToMain;
goBackToMain = function() {
    originalGoBackToMain();
    localStorage.removeItem('refreshPageState');
};

// ====== تعديل دالة الدخول للمنصة عشان تمسح الحالة ======
const originalEnterPlatform = enterPlatform;
enterPlatform = function() {
    localStorage.removeItem('refreshPageState');
    originalEnterPlatform();
};

// ====== نمسح الحالة عند إغلاق المتصفح ======
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('refreshPageState');
});