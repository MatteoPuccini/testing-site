body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 1rem 0;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

header p {
    margin: 0.5rem 0 0;
    font-size: 1.2rem;
}

nav {
    background-color: #333;
    padding: 0.5rem 0;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

nav ul li a:hover {
    text-decoration: underline;
}

.container {
    width: 80%;
    margin: 0 auto;
}

main {
    padding: 2rem 0;
}

main h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
}

main p, main ul {
    font-size: 1rem;
    line-height: 1.5;
}

main ul {
    list-style: none;
    padding: 0;
}

main ul li {
    background: #fff;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem 0;
}

footer p {
    margin: 0;
}

footer .social-media {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    display: flex;
    justify-content: center;
}

footer .social-media li {
    margin: 0 0.5rem;
}

footer .social-media li a img {
    width: 24px;
    height: 24px;
}

.input-section, .output-section, .about-section, .features-section, .gallery-section, .pricing-section, .contact-section {
    background: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 1px solid #ddd;
}

textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.output-placeholder img {
    width: 100%;
    max-width: 600px;
}

.gallery-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.gallery-images img {
    width: 100%;
    max-width: 300px;
    border: 1px solid #ddd;
    padding: 0.5rem;
    background: #fff;
}

.pricing-table {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
}

.pricing-plan {
    background: #fff;
    border: 1px solid #ddd;
    padding: 1rem;
    width: 100%;
    max-width: 300px;
    text-align: center;
}

.pricing-plan h3 {
    margin-top: 0;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    margin-bottom: 0.5rem;
}

form input, form textarea {
    margin-bottom: 1rem;
}

form button {
    align-self: center;
    width: 50%;
}
