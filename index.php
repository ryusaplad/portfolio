<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ryu Saplad CV</title>
    <link rel="stylesheet" href="assets/css/bootstrap-icons.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .contact-section {
            background-image: url('assets/img/staticmap.png');
            background-size: cover;
            position: relative;
        }
    </style>
</head>


<body data-theme="light">
    <div class="preloader">
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg ">
        <div class="container">
            <a class="navbar-brand" href="#">Ryu Saplad CV</a>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#experience">Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item theme-switch d-flex align-items-center ">
                        <label class="form-check-label theme-switch-label dark_light_icon" for="themeSwitch"
                            style="cursor: pointer;">
                            <input class="d-none" type="checkbox" role="switch" id="themeSwitch" checked>
                            <i id="themeIcon" class="bi bi-brightness-high-fill"></i>
                        </label>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid hero d-flex flex-column justify-content-center align-items-center py-5 mt-5 ">
        <img src="assets/img/profile.png" alt="Profile Image" class="profile-image mb-4">
        <h1 class="display-4 fw-bold mb-2">Ryu Saplad</h1>
        <p class="mb-4 text-center">DEVELOPER | PROGRAMMER | FREELANCER</p>
        <div class="d-flex mb-4">
            <a href="#contact" class="btn btn-primary me-3">Hire Me</a>
            <a href="javascript:void();" class="btn btn-outline-primary downloadCV">Download CV</a>
        </div>
        <div class="social-icons">
            <a target="_blank" href="https://github.com/ryusaplad"><i class="bi bi-github"></i></a>
        </div>
    </div>

    <!-- Sections -->
    <section id="about" class="container-sm py-5">
        <div class="container">
            <div class="card border-0 about-me-card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h2 class="card-title h4 mb-3 text-center">About Me</h2>
                            <p class="card-text about-me-text" style="text-align:justify;"><strong>I'm a passionate and
                                    dedicated developer with a strong track record of academic and professional
                                    accomplishments.</strong> During my studies, I was recognized for my excellence in a
                                capstone project. Beyond academics, I've gained valuable experience through freelance
                                work, tackling a variety of projects. I also had the opportunity to intern and work as
                                an IT programmer, where I contributed to system development and maintenance. Throughout
                                my journey, I've developed a robust skill set, and I'm excited to continue growing and
                                making a meaningful impact as part of a dynamic team.</p>
                        </div>
                        <div class="col-md-4">
                            <h2 class="card-title h4 mb-3 text-center">Basic Information</h2>
                            <ul class="list-unstyled">
                                <li><strong>Name:</strong> Ryu Saplad</li>
                                <li><strong>Email:</strong> changsaplad@gmail.com</li>
                                <li><strong>Phone:</strong> 09551661142</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="skills" class="container-sm py-5">
        <div class="container">
            <h2 class="text-center mb-5">Tools & Skills</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">Java</span>
                            <span class="ms-auto">80%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%;"
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">Spring Boot</span>
                            <span class="ms-auto">70%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 70%;"
                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">PHP</span>
                            <span class="ms-auto">75%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 85%;"
                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">REST APIs</span>
                            <span class="ms-auto">50%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%;"
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">MySQL</span>
                            <span class="ms-auto">80%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 85%;"
                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">Hosting</span>
                            <span class="ms-auto">80%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%;"
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">jQuery</span>
                            <span class="ms-auto">80%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 80%;"
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">Bootstrap</span>
                            <span class="ms-auto">75%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 75%;"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="progress-label">Git/Github</span>
                            <span class="ms-auto">75%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 75%;"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section id="projects" class="container-sm py-5">
        <h2 class="text-center mb-5">Projects</h2>
        <div class="row">
            <div class="col-md">
                <div class="card project-card" style="padding: 1rem;">
                    <div class="row g-0">
                        <div class="col-md-4 col-sm-12 bg-light projectCard" style="padding: 1rem;">
                            <h5 class="card-title projectTitle" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">
                                (Capstone Project) Request and Document Management System
                            </h5>

                            <ul class="list-unstyled projectDetails" style="padding-top: 0.5rem;">
                                <strong>Best in Capstone Project (2023-2024)</strong>

                                <li>

                                    <strong>Technology Used:</strong>

                                    <ul style="padding-top: 0.5rem;">
                                        <li>Java</li>
                                        <li>Spring Boot</li>
                                        <li>MySQL</li>
                                        <li>Bootstrap</li>
                                        <li>JS/JQuery</li>
                                        <li>Matrix Admin Template</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-8 col-sm-12" style="padding: 1rem;">
                            <div class="card-body" style="padding: 1rem;">
                                <p class="card-text projectDescription"
                                    style="padding-top: 0.5rem; padding-bottom: 0.5rem;">
                                    RDMS is a web application designed to streamline
                                    communication among students, registrars, and teachers,
                                    and provide students with an efficient way to access their
                                    required documents. The system has a user-friendly interface,
                                    simplifying the process for registrars to manage student
                                    requests and documents.</p>
                                <a href="https://github.com/ryusaplad/rdms" target="_blank"
                                    class="btn btn-outline-primary projectBtn"
                                    style="padding-top: 0.5rem; padding-bottom: 0.5rem;">View Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md">
                <div class="card project-card" style="padding: 1rem;">
                    <div class="row g-0">
                        <div class="col-md-4 col-sm-12 bg-light projectCard" style="padding: 1rem;">
                            <h5 class="card-title projectTitle" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">
                                (Personal Project)NotePad Java</h5>
                            <ul class="list-unstyled projectDetails" style="padding-top: 0.5rem;">
                                <li><strong>Technology Used:</strong> Java, Java Swing</li>
                            </ul>
                        </div>
                        <div class="col-md-8 col-sm-12" style="padding: 1rem;">
                            <div class="card-body" style="padding: 1rem;">
                                <p class="card-text projectDescription"
                                    style="padding-top: 0.5rem; padding-bottom: 0.5rem;">Simple NotePad using Java</p>
                                <a href="https://github.com/ryusaplad/NotePad-Java" target="_blank"
                                    class="btn btn-outline-primary projectBtn"
                                    style="padding-top: 0.5rem; padding-bottom: 0.5rem;">View Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="experience" class="container-sm py-5">
        <h2 class="text-center mb-5">Experience</h2>
        <div class="row">
            <div class="col-md-12">
                <div class="card experience-card">
                    <div class="card-body">
                        <h5 class="card-title">FREELANCING</h5>
                        <div class="card-text">
                            <p><strong>2020 - Present</strong></p>
                            <p><strong>Responsibilities:</strong></p>
                            <ul>
                                <li>Assisted and helped students with various systems including:</li>
                                <ul>
                                    <li>Airline Management System</li>
                                    <li>Cake Ordering Management System</li>
                                    <li>Simple E-Commerce Website</li>
                                    <li>Web Online Appointment Fitness Gym</li>
                                    <li>and more...</li>
                                </ul>
                            </ul>
                            <p><strong>Collaboration:</strong> Provided support and assistance to fellow students
                                through platforms like AnyDesk and Discord.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card experience-card">
                    <div class="card-body">
                        <h5 class="card-title">IT - INTERNSHIP</h5>
                        <div class="card-text">
                            <p><strong>Dr. Jose N. Rodriquez Memorial Hospital and Sanitarium</strong></p>
                            <p><strong>February 2023 - June 2023</strong></p>
                            <p><strong>Responsibilities:</strong></p>
                            <ul>
                                <li>Maintained computers and printers</li>
                                <li>Troubleshooted issues</li>
                                <li>Learned basic web development with other programmers</li>
                                <li>Engaged in the development of an online appointment and patient management
                                    system.</li>
                            </ul>
                            <p><strong>Collaboration:</strong> Worked closely with team members to complete projects,
                                shared knowledge and resources, and provided technical assistance to fellow interns and
                                hospital staff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mb-4">
                <div class="card experience-card">
                    <div class="card-body">
                        <h5 class="card-title">IT PROGRAMMER</h5>
                        <div class="card-text">
                            <p><strong>Dr. Jose N. Rodriquez Memorial Hospital and Sanitarium</strong></p>
                            <p><strong>July 10, 2023 - December 29, 2023</strong></p>
                            <p><strong>Responsibilities:</strong></p>
                            <ul>
                                <li>Participated in the planning and development of a comprehensive patient
                                    management system with appointment booking functionality.</li>
                                <li>Led task management and team implementation for the project.</li>
                            </ul>
                            <p><strong>Collaboration:</strong> Collaborated with team members to develop the system,
                                shared
                                knowledge and resources, and provided support during the implementation process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="container-fluid py-5 contact-section">
        <div class="container">
            <div class="row justify-content-center">
                <!-- Contact Form Column -->
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="card contact-card">
                        <h2 class="card-title h4 py-4 text-center">Contact Me</h2>
                        <div class="card-body">
                            <form action="https://formspree.io/f/xyyoqlnd" method="POST">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject" name="Subject"
                                        placeholder="Subject" required>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" name="recipient"
                                        placeholder="Email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" name="message" rows="3"
                                        placeholder="Your Message" required></textarea>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-6">
                                        <button type="submit" class="btn w-100 btn-primary">Send</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button type="reset" class="btn btn-outline-secondary w-100 me-3">Clear</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Contact Information Column -->
                <div class="col-md-6">
                    <div class="card contact-card">
                        <h2 class="card-title h4 py-4 text-center">Contact Information</h2>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li><i class="bi bi-geo-alt"></i> Tatak Kubo, Metro Manila, Philippines</li>
                                <li><i class="bi bi-telephone"></i> Phone: 09551661142</li>
                                <li><i class="bi bi-envelope"></i> Email: <a id="email-link"
                                        href="mailto:example@example.com">changsaplad@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer id="footer" class="container-fluid ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <p>&copy; 2023 Ryu Saplad. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>




    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>

</html>