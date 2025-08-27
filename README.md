<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Свадьба Магомеда и Фатимы</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    :root {
      --primary: #ffffff41; /* Нежный беж */
      --accent: #d4af37; /* Золото */
      --accent-light: #e6d8a8; /* Светлое золото */
      --text: #5d4037; /* Тёплый коричневый */
      --secondary: #f4e6e2; /* Пастельный розовый */
      --border: #e0d3c3; /* Тонкая золотистая граница */
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      background-color: var(--primary);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }

    header {
      padding: 80px 20px;
      background: url('https://images.unsplash.com/photo-1510812431401-41d2bd2c7879?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') no-repeat center center;
      background-size: cover;
      color: white;
      position: relative;
      text-align: center;
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), 
                  radial-gradient(circle at center, rgba(212, 175, 55, 0.2), transparent 70%);
      z-index: 1;
    }

    header * {
      position: relative;
      z-index: 2;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.8em;
      margin-bottom: 10px;
      font-weight: 700;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
      letter-spacing: 1px;
    }

    .names {
      font-size: 2.2em;
      margin-bottom: 15px;
      font-weight: 300;
      color: #fff;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
    }

    .date {
      font-size: 1.4em;
      font-weight: 300;
      color: #fff;
    }

    section {
      padding: 70px 20px;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.2em;
      margin-bottom: 25px;
      color: var(--accent);
      position: relative;
      display: inline-block;
    }

    h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: var(--accent);
    }

    p {
      max-width: 700px;
      margin: 0 auto;
      font-size: 1.1em;
      line-height: 1.8;
      color: var(--text);
    }

    .divider {
      font-size: 1.8em;
      color: var(--accent);
      margin: 30px 0;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
    }

    .divider.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Кнопка музыки */
    .music-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      background: var(--accent);
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid white;
    }

    .music-btn:hover {
      transform: scale(1.1);
      background: #c19d2a;
    }

    .music-btn i {
      font-size: 1.5em;
    }

    /* Таймер */
    .countdown {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 30px auto;
      max-width: 600px;
      font-weight: bold;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
    }

    .countdown.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .countdown div {
      background: var(--secondary);
      padding: 15px;
      border-radius: 12px;
      min-width: 80px;
      box-shadow: 0 4px 10px rgba(212, 175, 55, 0.15);
      border: 1px solid var(--border);
    }

    .countdown span {
      display: block;
      font-size: 2em;
      color: var(--accent);
      text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }

    .countdown label {
      font-size: 0.9em;
      color: var(--text);
      opacity: 0.8;
    }

    /* Галерея */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 30px auto;
      max-width: 900px;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
    }

    .gallery.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(212, 175, 55, 0.1);
      border: 2px solid var(--accent-light);
      transition: all 0.3s ease;
    }

    .gallery img:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
      border-color: var(--accent);
    }

    /* Форма */
    .rsvp-form {
      max-width: 500px;
      margin: 30px auto;
      text-align: left;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
    }

    .rsvp-form.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--text);
    }

    input, textarea, select {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid var(--border);
      border-radius: 10px;
      font-family: inherit;
      background-color: #fff;
      transition: border 0.3s;
    }

    input:focus, textarea:focus, select:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }

    button {
      background: var(--accent);
      color: white;
      border: none;
      padding: 14px 35px;
      border-radius: 30px;
      font-weight: bold;
      font-size: 1.1em;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
    }

    button:hover {
      background: #c19d2a;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(212, 175, 55, 0.4);
    }

    /* Карта */
    .map {
      margin: 30px auto;
      max-width: 800px;
      height: 400px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.15);
      border: 1px solid var(--border);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
    }

    .map.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Программа */
    .schedule {
      max-width: 800px;
      margin: 30px auto;
      text-align: left;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
    }

    .schedule.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .event {
      background: var(--secondary);
      padding: 16px;
      margin-bottom: 12px;
      border-radius: 10px;
      border-left: 5px solid var(--accent);
      box-shadow: 0 3px 10px rgba(0,0,0,0.05);
    }

    .event-time {
      font-weight: bold;
      color: var(--accent);
    }

    footer {
      text-align: center;
      padding: 50px 20px 30px;
      background: #f0e8e0;
      color: var(--text);
      font-size: 0.95em;
      border-top: 1px solid var(--border);
    }

    .social a {
      color: var(--accent);
      font-size: 1.4em;
      margin: 0 12px;
      transition: 0.3s;
    }

    .social a:hover {
      color: #b89b2e;
      transform: scale(1.2);
    }

    @media (max-width: 768px) {
      h1 { font-size: 2.8em; }
      h2 { font-size: 1.8em; }
      .countdown { flex-wrap: wrap; gap: 10px; }
      .countdown div { min-width: 60px; }
      .countdown span { font-size: 1.6em; }
      .music-btn { width: 50px; height: 50px; }
    }
  </style>
</head>
<body>

  <!-- Кнопка включения музыки -->
  <div class="music-btn" id="musicButton">
    <i class="fas fa-music"></i>
  </div>

  <!-- Аудио (скрытое) -->
  <audio id="backgroundMusic" loop>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    Ваш браузер не поддерживает аудио.
  </audio>

  <!-- Главный экран -->
  <header>
    <h1>Приглашение на свадьбу</h1>
    <div class="names">Магомеда & Фатимы</div>
    <div class="date">20 сентября 2025 года</div>
  </header>

  <div class="container">

    <!-- Таймер -->
    <section id="countdown-section">
      <h2>Осталось до свадьбы</h2>
      <div class="countdown">
        <div><span id="days">00</span><label>Дней</label></div>
        <div><span id="hours">00</span><label>Часов</label></div>
        <div><span id="minutes">00</span><label>Минут</label></div>
        <div><span id="seconds">00</span><label>Секунд</label></div>
      </div>
    </section>

    <div class="divider">✦</div>

    <!-- О нас -->
    <section>
      <h2>Наша история</h2>
      <p>
        Мы познакомились пять лет назад в книжном магазине — она искала роман, я — выход. С тех пор не выпускаем друг друга из рук. 
        Теперь мы решили скрепить свою любовь клятвой перед близкими и начать новую главу — вместе.
      </p>
    </section>

    <!-- Галерея -->
    <section>
      <h2>Моменты счастья</h2>
      <div class="gallery">
        <img src="https://images.unsplash.com/photo-1566490793979-6f7c7a566e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Фото">
        <img src="https://images.unsplash.com/photo-1575377224727-5d50e44fc95c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Фото">
        <img src="https://images.unsplash.com/photo-1580850569314-41c7395439c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Фото">
        <img src="https://images.unsplash.com/photo-1529333166433-e5174f319f28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" alt="Фото">
      </div>
    </section>

    <div class="divider">✦</div>

    <!-- Программа -->
    <section>
      <h2>Программа вечера</h2>
      <div class="schedule">
        <div class="event">
          <span class="event-time">12:00</span> — Церемония
        </div>
        <div class="event">
          <span class="event-time">13:00</span> — Фотосессия и фуршет
        </div>
        <div class="event">
          <span class="event-time">14:30</span> — Банкет
        </div>
        <div class="event">
          <span class="event-time">15:00</span> — Первый танец, тосты
        </div>
        <div class="event">
          <span class="event-time">16:00</span> — Танцы и живая музыка
        </div>
        <div class="event">
          <span class="event-time">00:00</span> — Завершение
        </div>
      </div>
    </section>

    <!-- Дресс-код -->
    <section>
      <h2>Дресс-код</h2>
      <p>
        🎩 <strong>Коктейльный стиль</strong><br>
        Просим гостей одеться элегантно: длинные платья, коктейльные наряды, костюмы.<br>
        <em>Цветовая гамма: пастель, беж, золото, розовый.</em>
      </p>
    </section>

    <div class="divider">✦</div>

    <!-- Место -->
    <section>
      <h2>Где нас найти</h2>
      <p>
        📍 <strong>Дворец «Золотая империя»</strong><br>
        ул. Петра первого, 40д , Махачкала<br>
        🕐 20 июня 2025, 16:00
      </p>
      <div class="map">
        <iframe width="100%" height="100%" frameborder="0" style="border:0"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A57bdf0ab6c420b0392aec92099241081f0267ebab1a9cacefc7a709379935b2b&amp;source=constructor"
          allowfullscreen>
        </iframe>
      </div>
    </section>

    <!-- RSVP -->
    <section class="rsvp">
      <h2>Подтвердите участие</h2>
      <p>Пожалуйста, сообщите нам, придёте ли вы — это поможет с организацией.</p>
      <form action="https://formspree.io/f/xyzdzgvq" method="POST" class="rsvp-form">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input type="text" id="name" name="name" placeholder="Иван и Мария Петровы" required>
        </div>
        <div class="form-group">
          <label for="guests">Количество гостей</label>
          <select id="guests" name="guests" required>
            <option value="1">1 человек</option>
            <option value="2" selected>2 человека</option>
            <option value="3">3 человека</option>
            <option value="4">4 человека</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Сообщение (по желанию)</label>
          <textarea id="message" name="message" rows="3" placeholder="Например: аллергия на глютен"></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </section>

  </div>

  <!-- Футер -->
  <footer>
    <p>Создано с любовью ❤️ | Свадьба Магомеда и Фатимы, 2025</p>
    <div class="social">
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-vk"></i></a>
      <a href="#"><i class="fas fa-envelope"></i></a>
    </div>
  </footer>

  <!-- Скрипты -->
  <script>
    // Таймер
    const weddingDate = new Date("septembr 15, 2025 16:00:00").getTime();
    const countdown = setInterval(function() {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(countdown);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
      }
    }, 1000);

    // Музыка
    const musicButton = document.getElementById("musicButton");
    const audio = document.getElementById("backgroundMusic");
    let isPlaying = false;

    musicButton.addEventListener("click", () => {
      if (isPlaying) {
        audio.pause();
        musicButton.innerHTML = '<i class="fas fa-music"></i>';
        musicButton.style.background = "var(--accent)";
      } else {
        audio.play().then(() => {
          musicButton.innerHTML = '<i class="fas fa-volume-up"></i>';
          musicButton.style.background = "#c19d2a";
        }).catch(err => {
          alert("Браузер требует взаимодействия с пользователем для воспроизведения звука.");
        });
      }
      isPlaying = !isPlaying;
    });

    // Анимация при прокрутке
    const sections = document.querySelectorAll("section, .divider, .countdown, .gallery, .map, .schedule, .rsvp-form");
    
    const checkVisibility = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && !section.classList.contains("visible")) {
          section.classList.add("visible");
        }
      });
    };

    // Проверяем при загрузке и прокрутке
    window.addEventListener("load", checkVisibility);
    window.addEventListener("scroll", checkVisibility);
  </script>

</body>
</html>
