---
hide:
  - navigation
  - toc
  - footer
---
<style>
  /* سفید کردن زمینه هدر */
  .md-header {
    background-color: #ffffff !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05) !important;
    border-bottom: 1px solid #e2e8f0 !important;
  }
  /* ساختار والد: فلکس معکوس */
  .md-header__inner.md-grid {
    display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: flex-start !important;
    align-items: center !important;
    padding: 0 14px !important;
  }

  /* ۱. منوی سه خط (همبرگری) در منتهی‌الیه راست */
  .md-header__button[for="__drawer"] {
    order: 10 !important;
    margin-right: 0 !important;
    margin-left: auto !important;
    color: #0f172a !important;
  }

  /* ۲. لوگو در منتهی‌الیه چپ */
  .md-header__button.md-logo {
    order: 1 !important;
    margin-left: 0 !important;
    margin-right: 8px !important;
  }

  /* ۳. عنوان و نام سایت در سمت چپ کنار لوگو */
  .md-header__title {
    order: 2 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    text-align: left !important;
    flex-grow: 0 !important;
  }

  .md-header__topic {
    color: #0f172a !important;
    font-weight: 800 !important;
    text-align: left !important;
  }

 
  }

  /* حذف دکمه‌های جستجو و تم از هدر */
  .md-header__button.md-icon[for="__search"],
  .md-header__option[data-md-component="palette"] {
    display: none !important;
  }

  /* شاخص عمودی نارنجی کنار تیتر تازه‌ترین‌ها */
  h3[style*="margin-top"] {
    position: relative;
    padding-right: 14px;
    font-weight: 800 !important;
    color: #0f172a;
  }

  h3[style*="margin-top"]::before {
    content: "";
    position: absolute;
    right: 0;
    top: 15%;
    height: 70%;
    width: 4px;
    background-color: #ff6a00;
    border-radius: 4px;
  }
</style>



<div class="hero-slider">
  <a href="/blog/parthians/" class="hero-card">
    <img src="parthians.png" alt="اشکانیان">
    <div class="hero-content">
      <span class="hero-badge">میز تاریخ</span>
      <h2>اشکانیان؛ از قیام علیه سلوکیان تا ظهور ساسانیان</h2>
      <small>تحریریه عقل و انگیزش | ۲۸ شهریور</small>
    </div>
  </a>

  <a href="/blog/pomodoro/" class="hero-card">
    <img src="pomodoro.png" alt="پومودورو">
    <div class="hero-content">
      <span class="hero-badge">روان‌شناسی یادگیری</span>
      <h2>پومودورو؛ آیا ۲۵ دقیقه مطالعه می‌تواند یادگیری را بهتر کند؟</h2>
      <small>تحریریه عقل و انگیزش | ۲۵ شهریور</small>
    </div>
  </a>

  <a href="https://aqloangizeh.ir/The-Frist-Conference/" class="hero-card">
    <img src="logo.png" alt="نشست نخست">
    <div class="hero-content">
      <span class="hero-badge">رویدادها</span>
      <h2>گزارش و اسلایدهای نشست نخست اندیشکده عقل و انگیزش</h2>
      <small>رویدادهای علمی | ۱ هفته قبل</small>
    </div>
  </a>

</div>


<h3 style="margin-top: 28px; font-weight: bold;">تازه‌ترین یادداشت‌ها و رویدادها</h3>

<div class="mag-list">
  <a href="/blog/nozheh-coup/" class="mag-item">
    <img src="nozheh.png" class="mag-thumb" alt="کودتای نوژه">
    <div class="mag-details">
      <h3>کودتای نوژه؛ از شکل‌گیری طرح تا شکست و پیامدهای آن</h3>
      <span class="mag-meta">میز تاریخ | ۲۹ شهریور</span>
    </div>
  </a>

  <a href="blog/posts/conference-1.md" class="mag-item">
    <img src="logo.png" class="mag-thumb" alt="نشست نخست">
    <div class="mag-details">
      <h3>گزارش و اسلایدهای نشست نخست اندیشکده عقل و انگیزش</h3>
      <span class="mag-meta">رویدادهای علمی | ۱ هفته قبل</span>
    </div>
  </a>

</div>

  <div class="social-strip-title">ارتباط مستقیم با تحریریه در تلگرام</div>
  <div class="social-strip-icons">
    <!-- آیدی پیام شخصی تلگرام -->
    <a href="https://t.me/Black_Apple_1" target="_blank" rel="noopener" class="social-strip-item" title="ارسال پیام در تلگرام">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
    </a>
  </div>
</div>
