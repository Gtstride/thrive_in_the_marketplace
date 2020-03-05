import React from 'react'

const GalleryView = ()  => {
  return (
    <div>
      		<section id="portfolio" class="portfolio">
			<div class="portfolio-details">
				<div class="section-heading text-center">
					<h2>portfolio</h2>
				</div>
				<div class="container">
					<div class="portfolio-content">
						<div class="isotope">
							<div class="row">

								<div class="col-sm-4">
									<div class="item">
										<img src="assets/images/portfolio/p1.jpg" alt="portfolio"/>
										<div class="isotope-overlay">
											<a href="/">
												ui/ux design
											</a>
										</div>
									</div>
									<div class="item">
										<img src="assets/images/portfolio/p2.jpg" alt="portfolio"/>
										<div class="isotope-overlay">
											<a href="/">
												Digital Marketing
											</a>
										</div>
									</div>
								</div>

								<div class="col-sm-4">
									<div class="item">
										<img src="assets/images/portfolio/p3.jpg" alt="portfolio"/>
										<div class="isotope-overlay">
											<a href="/">
												web design
											</a>
										</div>
									</div>
								</div>

								<div class="col-sm-4">
									<div class="item">
										<img src="assets/images/portfolio/p4.jpg" alt="portfolio"/>
										<div class="isotope-overlay">
											<a href="/">
												web development
											</a>
										</div>
									</div>
									<div class="item">
										<img src="assets/images/portfolio/p5.jpg" alt="portfolio"/>
										<div class="isotope-overlay">
											<a href="/">
												Life coach
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
      
    </div>
  )
}

export default GalleryView