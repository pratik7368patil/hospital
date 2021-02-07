const footer = `<div class="row">
<div class="col-md-4">
    <div class="footer-img-title">			  	
        <img src="./img/final_logo.png" width="40" height="40" class="d-inline-block align-top" alt="logo">
        <span class="footer-head-size">Modern Endovascular Clinic</span>
      </div>
    <h3 class="text-white">Dr. Ashutosh Dattatraya Kharche</h3>
    <p class="text-muted">MD, FVIR</p>
</div>
<div class="col-md-4">
    <h3 class="text-white">Hospital Address:</h3>
    <p class="text-muted">5-6, Aroto House, Ground Floor, Below Surya Eye Hospital, Purushottam Kheraj Rd, Mulund West, Mumbai, Maharashtra</p>
    <p class="text-muted">PIN No: 400080</p>

</div>
<div class="col-md-4">
    <h3 class="text-white">Contact :</h3>
    <p class="text-muted">Mobile No: <a href="tel:+91 9552955808" class="#">+919552955808</a></p>
    <p class="text-muted">Mobile No: <a href="tel:+91 9920294748" class="#">+919920294748</a></p>
    <p class="text-muted">Email Id: <a href="mailto: drashutoshkharche@gmail.com" class="#">drashutoshkharche@gmail.com</a></p>
    <div id="social-links">
        <div class="social-icons mr-3">
            <a href="https://www.linkedin.com/in/ashutosh-kharche-47a153119/" target="_blank"><img src="./img/linkedin-icon.svg" alt="linkedin icon"></a>
        </div>
        <div class="social-icons mr-3">
            <img src="./img/facebook-icon.svg" alt="facebook icon">
        </div>
        <div class="social-icons mr-3">
            <img src="./img/instagram-icon.svg" alt="instagram icon">
        </div>
    </div>
</div>
</div>
<p class="text-center text-muted" style="padding-top: 100px"> All &copy; Copyrights Reserved 2021. Modern Endovascular Clinic</p>`;

const getFooterContainer = document.getElementById('footer-container-holder');
getFooterContainer.innerHTML = footer;