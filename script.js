// Tailwind custom config
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            emerald: {
              50:  '#ecfdf5',
              100: '#d1fae5',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
            },
            gold: {
              300: '#fcd34d',
              400: '#fbbf24',
              500: '#f59e0b',
              600: '#d97706',
            },
            dark: {
              900: '#0f172a',
              800: '#1e293b',
              700: '#334155',
            }
          },
          fontFamily: {
            heading: ['"Playfair Display"', 'Georgia', 'serif'],
            body: ['"DM Sans"', 'system-ui', 'sans-serif'],
          },
          keyframes: {
            fadeInUp: {
              '0%':   { opacity: '0', transform: 'translateY(24px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slideInRight: {
              '0%':   { opacity: '0', transform: 'translateX(100%)' },
              '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            slideOutRight: {
              '0%':   { opacity: '1', transform: 'translateX(0)' },
              '100%': { opacity: '0', transform: 'translateX(100%)' },
            },
            shimmer: {
              '0%':   { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' },
            },
            pulse: {
              '0%, 100%': { opacity: '1' },
              '50%':       { opacity: '0.5' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%':      { transform: 'translateY(-8px)' },
            },
          },
          animation: {
            'fade-in-up':    'fadeInUp 0.7s ease forwards',
            'slide-in':      'slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards',
            'slide-out':     'slideOutRight 0.35s cubic-bezier(0.55,0,1,0.45) forwards',
            'float':         'float 3s ease-in-out infinite',
          },
          backdropBlur: { xs: '2px' },
        }
      }
    }
const locations = {
    'con-son': {
      title: 'Côn Sơn – Chí Linh',
      region: 'Hải Dương',
      img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/9c/f9/6f.jpg',
      desc: 'Côn Sơn (nay thuộc Chí Linh, Hải Dương) là nơi Nguyễn Trãi chọn về ẩn cư sau những năm tháng triều chính đầy thăng trầm. Nơi đây có suối Côn Sơn trong mát, rừng thông vi vút, và những tảng đá rêu phong. Chính trong không gian sơn thuỷ hữu tình này, ông đã sáng tác những vần thơ thanh thản và sâu sắc nhất về thiên nhiên và lẽ đời.',
      poem: '"Côn Sơn suối chảy rì rầm,\nTa nghe như tiếng đàn cầm bên tai.\nCôn Sơn có đá rêu phơi,\nTa ngồi trên đá như ngồi chiếu êm."',
      poemSrc: '— Côn Sơn Ca, Nguyễn Trãi',
      tags: ['Ẩn cư', 'Sáng tác', 'Di tích UNESCO', 'Thiên nhiên'],
      link: 'https://www.youtube.com/watch?v=SV79Vtiz7z8'
    },
    'nhi-khe': {
      title: 'Nhị Khê – Làng quê',
      region: 'Hà Nội',
      img: 'https://dulichviet.net.vn/wp-content/uploads/2019/10/chua-dau01.jpg',
      desc: 'Nhị Khê (nay thuộc huyện Thường Tín, Hà Nội) là quê ngoại của Nguyễn Trãi, nơi ông được sinh ra và lớn lên. Đây là vùng đất văn vật bên bờ sông Nhuệ, nơi nuôi dưỡng tâm hồn nhạy cảm và trí tuệ sắc sảo của thi nhân từ thuở ấu thơ. Làng Nhị Khê còn nổi tiếng với nghề làm tiện gỗ truyền thống.',
      poem: '"Quê hương nếu ai không nhớ,\nSẽ không lớn nổi thành người."',
      poemSrc: '— Nguyễn Trãi (lời hậu thế ghi)',
      tags: ['Quê hương', 'Thời thơ ấu', 'Hà Nội', 'Di tích'],
      link: 'https://www.youtube.com/watch?v=53WFf4lh2e8'
    },
    'lam-son': {
      title: 'Lam Sơn – Căn cứ địa',
      region: 'Thanh Hoá',
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz_1kk2wwo6aQjqD2jI_2cGzSjirlY_sS6McRnjqnRHPCZi-n-tVWb22NhkqXuoEIM9rcielYhZpY9Kyn2EnykE9r-uLDPBrwFghP2HA2cNB666ma7OjPwdDoo_xP3KeWpwomE_vNgGHHtI42uYXNgPHqUlBwxhPrYi4nLau6dFjhZSUe7Ru9JQ6c1zA/w0/Lam-Son-Uprising.jpg',
      desc: 'Lam Sơn (Thọ Xuân, Thanh Hoá) là nơi Lê Lợi dấy binh khởi nghĩa năm 1418. Nguyễn Trãi đã bỏ cuộc sống Hà thành, tìm đến đây phò tá Bình Định Vương. Ông trở thành quân sư chiến lược hàng đầu, soạn thảo hàng trăm bức thư chiêu dụ quân Minh, đóng góp quyết định vào thắng lợi cuối cùng năm 1427.',
      poem: '"Đem đại nghĩa để thắng hung tàn,\nLấy chí nhân để thay cường bạo."',
      poemSrc: '— Bình Ngô Đại Cáo, 1428',
      tags: ['Khởi nghĩa Lam Sơn', 'Chiến lược', 'Lê Lợi', '1418–1427'],
      link: 'https://www.youtube.com/watch?v=7hYLCHS-WHU'
    },
    'thang-long': {
      title: 'Thăng Long – Kinh thành',
      region: 'Hà Nội',
      img: 'https://dulichviet.net.vn/wp-content/uploads/2019/08/kinh-thanh-thang-long-2.jpg',
      desc: 'Thăng Long (nay là Hà Nội) là trung tâm quyền lực của Đại Việt. Sau chiến thắng năm 1428, Nguyễn Trãi giữ chức Hàn lâm học sĩ, phụ trách văn kiện triều đình. Tại đây, ông viết Bình Ngô Đại Cáo – áng thiên cổ hùng văn, soạn Dư Địa Chí và nhiều tác phẩm quan trọng khác phục vụ đất nước.',
      poem: '"Trừ độc, trừ tham, trừ bạo ngược,\nCó nhân, có trí, có anh hùng."',
      poemSrc: '— Bảo kính cảnh giới, Nguyễn Trãi',
      tags: ['Triều đình', 'Hàn lâm', 'Văn kiện', 'Thăng Long'],
      link: 'https://youtu.be/YXQQvas-p6k?si=RagUxx9Yb8FtuZaH'
    },
    'le-chi-vien': {
      title: 'Lệ Chi Viên – Oan án',
      region: 'Bắc Ninh',
      img: 'https://cdn3.ivivu.com/2022/12/di-tich-le-chi-vien-ivivu-1-1024x666.jpg',
      desc: 'Lệ Chi Viên (Gia Bình, Bắc Ninh) là nơi diễn ra vụ án oan nghiệt nhất lịch sử văn học Việt Nam. Tháng 8 năm 1442, vua Lê Thái Tông băng hà tại đây khi đang thăm Nguyễn Trãi. Ông bị vu oan và bị xử lăng trì cùng gia tộc. Năm 1464, Lê Thánh Tông minh oan, phục hồi danh dự và ca ngợi: "Ức Trai tâm thượng quang Khuê tảo".',
      poem: '"Ức Trai tâm thượng quang Khuê tảo\n(Lòng Ức Trai sáng như sao Khuê)"',
      poemSrc: '— Lê Thánh Tông, 1464 (minh oan cho Nguyễn Trãi)',
      tags: ['Oan án 1442', 'Minh oan 1464', 'Bi kịch', 'Lịch sử'],
      link: 'https://www.youtube.com/watch?v=OfWenurZeJ0'
    },
    'chi-linh': {
      title: 'Chí Linh Sơn – Ẩn náu',
      region: 'Hải Dương',
      img: 'https://static-cms-vovworld.zadn.vn/uploaded/vietanh/2022_01_24/yen_tu_complex_1_osbh.jpg',
      desc: 'Núi rừng Chí Linh (Hải Dương) là nơi Lê Lợi và Nguyễn Trãi cùng nghĩa quân Lam Sơn ẩn náu trong những năm đầu gian khổ nhất của cuộc khởi nghĩa. Rừng núi hiểm trở vừa là lá chắn bảo vệ nghĩa quân, vừa là nơi Nguyễn Trãi suy nghĩ, hoạch định chiến lược phục hưng đất nước. Chí Linh cũng là nơi gắn bó với tuổi ẩn cư cuối đời của ông.',
      poem: '"Núi non hùng vĩ tựa lưng trời,\nAnh hùng náu bóng đợi thời cơ."',
      poemSrc: '— Hậu thế ngợi ca Chí Linh Sơn',
      tags: ['Kháng chiến', 'Ẩn náu', 'Chiến lược', 'Núi rừng'],
      link: 'https://www.youtube.com/watch?v=gMe4NdqMfGc'
    }
  };

  /* ── Sidebar logic ───────────────────────────────────────── */
  function openSidebar(locKey) {
    const data = locations[locKey];
    if (!data) return;

    // Populate content
    document.getElementById('sidebar-title').textContent = data.title;
    document.getElementById('sidebar-region').textContent = data.region;
    document.getElementById('sidebar-desc').textContent = data.desc;
    document.getElementById('sidebar-poem').innerHTML = data.poem.replace(/\n/g, '<br/>');
    document.getElementById('sidebar-poem-src').textContent = data.poemSrc;
    document.getElementById('sidebar-readmore').href = data.link;

    // Image
    const img = document.getElementById('sidebar-img');
    img.classList.remove('loaded');
    img.src = data.img;
    img.alt = data.title;

    // Tags
    const tagsEl = document.getElementById('sidebar-tags');
    tagsEl.innerHTML = data.tags.map(t =>
      `<span class="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800">${t}</span>`
    ).join('');

    // Open
    const sidebar = document.getElementById('info-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    const sidebar = document.getElementById('info-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── TOC Modal logic ─────────────────────────────────────── */
  function openTOC() {
    const modal = document.getElementById('toc-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeTOC() {
    const modal = document.getElementById('toc-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function handleTOCBackdrop(e) {
    // Only close if clicking the backdrop itself, not the box
    if (e.target === document.getElementById('toc-modal')) {
      closeTOC();
    }
  }

  /* ── Dark mode ───────────────────────────────────────────── */
  function toggleDark() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Swap icons
    const moon = document.getElementById('icon-moon');
    const sun  = document.getElementById('icon-sun');
    if (moon && sun) {
      moon.classList.toggle('hidden', isDark);
      sun.classList.toggle('hidden', !isDark);
    }
  }

  // Restore saved theme
  (function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
      const moon = document.getElementById('icon-moon');
      const sun  = document.getElementById('icon-sun');
      if (moon) moon.classList.add('hidden');
      if (sun)  sun.classList.remove('hidden');
    }
  })();

  /* ── Header scroll effect ────────────────────────────────── */
  (function() {
    const header = document.getElementById('site-header');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 60) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  })();

  /* ── Mobile menu toggle ──────────────────────────────────── */
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
  }
  function closeMobileMenu() {
    document.getElementById('mobile-menu').classList.remove('open');
  }

  /* ── Intersection Observer – reveal on scroll ────────────── */
  (function() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
  })();

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Keyboard: ESC closes modals ────────────────────────── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSidebar();
      closeTOC();
    }
  });

  /* ── Page load entrance animation ───────────────────────── */
  window.addEventListener('load', () => {
    document.querySelector('.hero-content')?.classList.add('loaded');
  });