const navbar = document.getElementById('dynamic-navbar');

const content = `<!-- first contact nav here -->
  <div class="first-nav">
	  <nav class="nav nav-pills nav-justified">
		  <a class="nav-item nav-link" href="mailto: drashutoshkharche@gmail.com"><strong>Email ID: </strong> drashutoshkharche@gmail.com</a>
		  <a class="nav-item nav-link" href="tel: +91 9552955808"><strong>Mobile Number :</strong> +91 9552955808</a>
	   </nav>
  </div>
  
  <!-- contact nav ends here -->
  <!-- Navbar goes here -->
  
  <nav class="navbar sticky-top navbar-expand-lg navbar-light" id="bar" data-spy="affix" data-offset-top="400">
  	<div class="#">
  		<a class="navbar-brand" href="../index.html">
			<img src="../img/final_logo.png" width="40" height="40" class="d-inline-block align-top" alt="logo">
			<span class="head_size"><b>Modern Endovascular Clinic</b></span>
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
	   	     	<a class="dropdown-item" href="../src/gosomewhere1.html">Aortic Aneurysm/Dissection</a>
	          	<a class="dropdown-item" href="../src/gosomewhere2.html">Interventional Neuroradiology</a>
	          	<a class="dropdown-item" href="../src/gosomewhere3.html">Hepatobiliary</a>
	          	<a class="dropdown-item" href="../src/gosomewhere4.html">Women's Health: Why choose us? </a>
	          	<a class="dropdown-item" href="../src/gosomewhere5.html">Arteriovenous Malformations</a>
	          	<a class="dropdown-item" href="../src/gosomewhere6.html">Emergency care</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="new_doc_pro.html">Doc Profile</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="our_associations.html">Associations</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="../index.html#testimonials">Testimonials</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="faq.html">FAQ's</a>
	      </li>
		  <li class="nav-item">
	        <a class="nav-link" href="#Condetails">Contact Details</a>
	      </li>
	      
	    </ul>
	  </div>
	</nav>`


navbar.innerHTML = content;