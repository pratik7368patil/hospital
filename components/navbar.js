const navbar = document.getElementById("dynamic-navbar");

const content = `
<div class="first-nav">
	  <nav class="nav nav-pills nav-justified">
		  <a class="nav-item nav-link" href="mailto: drashutoshkharche@gmail.com"><strong>Email ID: </strong> drashutoshkharche@gmail.com</a>
		  <a class="nav-item nav-link" href="tel: +91 9552955808"><strong>Mobile Number :</strong> +91 9552955808</a>
	   </nav>
  </div>
<nav class="navbar sticky-top navbar-expand-lg navbar-light" id="bar" data-spy="affix" data-offset-top="400">
  	<div class="#">
  		<a class="navbar-brand" href="#">
			<img src="https://res.cloudinary.com/hospitalphotos/image/upload/r_0,c_crop,q_80,fl_progressive/f_auto,c_fit/v1615617108/newlogo_ovxyvr.png" width="170px" height="80px" class="d-inline-block align-top" alt="logo">
		</a>
  	</div>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 	aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
  	  </button>

	  <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
	    <ul class="navbar-nav mx-auto">
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Services
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	          <a class="dropdown-item" href="./src/aortic-aneurysm.html">Aortic Aneurysm/Dissection</a>
	          <a class="dropdown-item" href="./src/neurovascular-conditions-we-treat.html">Interventional Neuroradiology</a>
	          <a class="dropdown-item" href="./src/liver-disease.html">Hepatobiliary</a>
	          <a class="dropdown-item" href="./src/women-health.html">Women's Health: Why choose us? </a>
	          <a class="dropdown-item" href="./src/arteriovenous-malformations.html">Arteriovenous Malformations</a>
	          <a class="dropdown-item" href="./src/emergency-care.html">Emergency care</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="./src/doc_profile.html">Doc Profile</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="./src/our_associations.html">Associations</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="#testimonials">Testimonials</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="./src/faq.html">FAQ's</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="#Condetails">Contact Details</a>
	      </li>
	      
	    </ul>
	  </div>
	</nav>`;

navbar.innerHTML = content;
