@if(session('success'))
    <p style="color: green;">{{ session('success') }}</p>
@endif



<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Super Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
    <!-- Particle Background (Falling Leaves) -->
    <div id="particles-js"></div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="container nav-container">
            <div class="logo">
                <img src="{{ asset('images/logoku.png') }}" alt="Logo">
            </div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button id="darkModeToggle" class="dark-mode-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
        </div>
    </nav>
=
    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title" data-aos="fade-down">Welcome...</h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">Full Stack Developer & UI Designer</p>
            <div class="hero-buttons" data-aos="fade-up" data-aos-delay="400">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a href="#contact" class="btn btn-secondary">Contact Me</a>
            </div>
        </div>
        <div class="scroll-indicator">
            <span>Scroll Down</span>
            <div class="scroll-arrow"></div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="about-grid">
                <div class="about-image" data-aos="fade-right">
                    <div class="image-wrapper">
                        <img src="{{ asset('images/akoh.jpeg') }}" alt="Profile" class="profile-img">
                        <div class="image-glow"></div>
                    </div>
                </div>
                <div class="about-content" data-aos="fade-left">
                    <h2 class="section-title">About Me</h2>
                    <p class="about-text">
                        Hi! Saya seorang Full Stack Developer dengan passion dalam menciptakan pengalaman digital yang
                        menarik dan fungsional.
                        saya fokus pada pengembangan web modern dan desain UI yang intuitif.
                    </p>
                    <p class="about-text">
                        Saya percaya bahwa teknologi terbaik adalah yang dapat membuat hidup lebih mudah, dan saya
                        selalu berusaha untuk menciptakan solusi yang tidak hanya cantik, tetapi juga powerful.
                    </p>
                    <div class="skills-grid">
                        <div class="skill-item" data-aos="zoom-in" data-aos-delay="100">
                            <div class="skill-icon">⚡</div>
                            <h3>Laravel & PHP</h3>
                            <p>Backend Development</p>
                        </div>
                        <div class="skill-item" data-aos="zoom-in" data-aos-delay="200">
                            <div class="skill-icon">🎨</div>
                            <h3>CSS & Design</h3>
                            <p>UI/UX Design</p>
                        </div>
                        <div class="skill-item" data-aos="zoom-in" data-aos-delay="300">
                            <div class="skill-icon">⚛️</div>
                            <h3>React & Vue</h3>
                            <p>Frontend Frameworks</p>
                        </div>
                        <div class="skill-item" data-aos="zoom-in" data-aos-delay="400">
                            <div class="skill-icon">🚀</div>
                            <h3>JavaScript</h3>
                            <p>Interactive Experiences</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-up">Featured Projects</h2>
            <p class="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
                Beberapa project yang telah saya kerjakan
            </p>

            <div class="projects-grid">
                <div class="project-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="project-image">
                        <img src="{{ asset('images/arduino.png') }}">
                        <div class="project-overlay">
                            <button class="btn-view-detail">View Detail</button>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>Smart Tabungan</h3>
                        <p>Celengan pintar yang berbasis hardware arduino uno R3 yang bisa mendeteksi uang, dan bisa di
                            akses lewat website untuk melihat total saldo</p>
                        <div class="project-tech">
                            <span class="tech-tag">arduino IDE</span>
                            <span class="tech-tag">JavaScript(node.js)</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                    </div>
                </div>

                <div class="project-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="project-image">
                        <img src="{{ asset('images/wewok.png') }}">
                        <div class="project-overlay">
                            <button class="btn-view-detail">View Detail</button>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>Retail Web Cafe Wewok</h3>
                        <p>Website untuk membeli makanan atau minuman dan kopi, objectivenya agar tidak perlu mengantri
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Mysql</span>
                        </div>
                    </div>
                </div>

                <div class="project-info">
                    <center>

                        <h3>Wait for my next project!!</h3>
                    </center>
                </div>

            </div>
        </div>
    </section>


    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2 class="section-title text-center" data-aos="fade-up">Get In Touch</h2>
            <p class="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
                Punya project menarik? Mari berdiskusi!
            </p>

            <div class="contact-wrapper">
                <form action="{{ route('contact.submit') }}" method="POST">
    @csrf

    <input type="text" name="name" placeholder="Nama" required>
    <input type="email" name="email" placeholder="Email" required>
    <textarea name="message" placeholder="Pesan" required></textarea>

    <button type="submit">SEND</button>
</form>

{{-- Notifikasi --}}
@if(session('success'))
    <p style="color: green">{{ session('success') }}</p>
@endif

@if(session('error'))
    <p style="color: red">{{ session('error') }}</p>
@endif


                <div class="contact-info" data-aos="fade-up" data-aos-delay="300">
                    <div class="contact-item">
                        <div class="contact-icon">📧</div>
                        <h3>Email</h3>
                        <p>muhsulrafi32@gmail.com</p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📱</div>
                        <h3>Phone</h3>
                        <p>+62 815-7276-2418</p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <h3>Location</h3>
                        <p>Bandung, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h3>Best of me</h3>
                    <p>Building digital experiences</p>
                </div>
                <div class="footer-social">
                    <a href="https://instagram.com/msrfi_" target="_blank" class="social-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z"></path>
                            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-sultan-rafi-6b263138a/" class="social-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="https://github.com/Asulll-edan" class="social-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 M.S.Rafi. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="backToTop" class="back-to-top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
    </button>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
        <div class="lightbox-caption"></div>
    </div>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="{{ asset('js/script.js') }}"></script>
</body>

</html>
