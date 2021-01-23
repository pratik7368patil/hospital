const navbar = document.getElementById('dynamic-navbar');

const content = `
<div class="first-nav">
	  <nav class="nav nav-pills nav-justified">
		  <a class="nav-item nav-link" href="mailto: arpitkharche35@gmail.com"><strong>Email ID: </strong> xyz@gmail.com</a>
		  <a class="nav-item nav-link" href="tel: +91 7218123588"><strong>Mobile Number :</strong> +91 7218123588</a>
	   </nav>
  </div>
<nav class="navbar sticky-top navbar-expand-lg navbar-light" id="bar" data-spy="affix" data-offset-top="400">
  	<div class="#">
  		<a class="navbar-brand" href="#">
			<img src="./img/final_logo.png" width="40" height="40" class="d-inline-block align-top" alt="logo">
			<span class="head_size">Hospital Name</span>
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
	          <a class="dropdown-item" href="./src/gosomewhere1.html">Service 1</a>
	          <a class="dropdown-item" href="./src/gosomewhere1.html">Service 2</a>
	          <a class="dropdown-item" href="#">Link-3</a>
	          <a class="dropdown-item" href="#">Link-1</a>
	          <a class="dropdown-item" href="#">Link-2</a>
	          <a class="dropdown-item" href="#">Link-3</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="./src/new_doc_pro.html">Doc Profile</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="./src/our_associations.html">Associations</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="./src/patients_speak.html">Testimonials</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="./src/faq.html">FAQ's</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="#Condetails">Contact Details</a>
	      </li>
	      
	    </ul>
	  </div>
	</nav>`


navbar.innerHTML = content;