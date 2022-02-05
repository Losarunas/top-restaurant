import './style/style.css';

const content = document.querySelector("#content");
content.addEventListener('click', (e) => {
    if (e.target.innerHTML === "About us") {
        loadAboutUs()
    } else if (e.target.innerHTML === "Contacts") {
        loadContact()
    } else if (e.target.innerHTML === "Home") {
        loadHomePage();
    }
})

function loadHomePage() {
    content.innerHTML = `<div class="header">
        <h1>Takeasdshi Restaurant</h1>
        <h3>Best restaurant in your city</h3>
    </div>
    <nav>
        <div class="nav-link nav-link-active">Home</div>
        <div class="nav-link">About us</div>
        <div class="nav-link">Contacts</div>
    </nav>
    <div class="main-page">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magni debitis saepe, earum et voluptate
            nisi,
            qui impedit, cumque unde aliquam possimus. Necessitatibus, earum assumenda.</p>
        <img src="./src/img/restaurant-inside.jpg" width="600px">
    </div>`

}

function loadAboutUs() {
    content.innerHTML = `<div class="header">
        <h1>Takeasdshi Restaurant</h1>
        <h3>Best restaurant in your city</h3>
    </div>
    <nav>
        <div class="nav-link">Home</div>
        <div class="nav-link nav-link-active">About us</div>
        <div class="nav-link">Contacts</div>
    </nav>
    <div class="main-page">
        <h2>We are making best food</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magni debitis saepe, earum et voluptate
        nisi</p>
        <img src="https://images.unsplash.com/photo-1585547065112-379253e53aad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2glMjBidWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="bucket full of fish">
    </div>`
}

function loadContact() {
    content.innerHTML = `<div class="header">
        <h1>Takeasdshi Restaurant</h1>
        <h3>Best restaurant in your city</h3>
    </div>
    <nav>
        <div class="nav-link ">Home</div>
        <div class="nav-link">About us</div>
        <div class="nav-link nav-link-active">Contacts</div>
    </nav>
    <div class="main-page">
        <p>You can find us here: </p>
        <p><div style="width: 100%"><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-64.8953883,-62.8707877+(Very%20good%20food%20here)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.gps.ie/golf-gps/">golf gps</a></iframe></div></p>
    </div>`
}

loadHomePage();
