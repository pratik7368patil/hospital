const associationContent = `<div class="row justify-content-center mb-2 ">
			<h1 class="pt-4 pb-4 mb-4 hd-name text-center">Our Associations</h1>
		</div>
		
		<div class="container my-4">
			<div class="regular slider" id="our_associations_slick">
				<div class="card">
			      <img src="./img/Bethany.jpg" alt="Bethany">
			    </div>
			    <div class="card">
			      <img src="./img/fortis.jpg" alt = "fortis">
			    </div>
			    <div class="card">
			      <img src="./img/godrej.jpg" alt="godrej">
			    </div>
			    <div class="card">
			      <img src="./img/jupiter.jpg" alt="jupiter">
			    </div>
			    <div class="card">
			      <img src="./img/kjsomaiya.jpg" alt="kjsomaiya">
			    </div>
			    <div class="card">
			      <img src="./img/Masina.png" alt="Masina">
			    </div>
			    <div class="card">
			      <img src="./img/srv.jpg" alt="srv">
			    </div>
			    <div class="card">
			      <img src="./img/sushrut.png" alt="sushrut">
			    </div>
			    <div class="card">
			      <img src="./img/ussh.png" alt="ussh">
			    </div>
			</div>
		</div>

		<div class="row justify-content-center mt-4">
			<a href="./src/our_associations.html">Want to check more!</a>
		</div>`

let associations = document.getElementById('our_associations');
associations.innerHTML = associationContent;

$("#our_associations_slick").slick({
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
	responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {

      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }

    }]
});
