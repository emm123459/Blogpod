document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.nav-btn');

  const sections = {
    home: document.getElementById('homeSection'),
    insights: document.getElementById('insightsSection'),
    events: document.getElementById('eventsSection'),
    Builders: document.getElementById('BuildersSection'),
  };

  function showSection(target) {
    Object.values(sections).forEach(section => section.style.display = 'none');
    if (sections[target]) {
      sections[target].style.display = 'block';
      window.location.hash = target;
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.dataset.target;
      showSection(target);
    });
  });

  const initialHash = window.location.hash.replace('#', '');
  if (sections[initialHash]) {
    showSection(initialHash);
  } else {
    showSection('home');
  }
});


function openArticle(id) {
  document.getElementById(`article-overlay-${id}`).style.display = "flex";
}

function closeArticle(id) {
  document.getElementById(`article-overlay-${id}`).style.display = "none";
}

(function() {
  function clampToLines(el, lines) {
    const cs = window.getComputedStyle(el);
    let lh = parseFloat(cs.lineHeight);
    if (isNaN(lh) || cs.lineHeight === 'normal') {
      lh = 1.4 * parseFloat(cs.fontSize || 16);
      el.style.lineHeight = (lh / parseFloat(cs.fontSize || 16)).toFixed(2);
    }

    const maxHeight = Math.floor(lh * lines);
    const full = (el.textContent || el.innerText || '')
      .replace(/\s+/g, ' ')
      .trim();

    el.textContent = full;
    if (el.scrollHeight <= maxHeight) return;

    let lo = 0, hi = full.length, best = 0;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      el.textContent = full.slice(0, mid).trimEnd() + '…';
      if (el.scrollHeight <= maxHeight) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    let candidate = best;
    while (candidate < full.length) {
      el.textContent = full.slice(0, candidate + 1).trimEnd() + '…';
      if (el.scrollHeight > maxHeight) break;
      candidate++;
    }

    el.textContent = full.slice(0, candidate).trimEnd() + '…';
    el.style.maxHeight = maxHeight + 'px';
    el.style.overflow = 'hidden';
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.update-text').forEach(el => clampToLines(el, 6));
  });
})();


document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById("articlesRow");
  const scrollAmount = 300;

  document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.dir;
      if (dir === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });
});



