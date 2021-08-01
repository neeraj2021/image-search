import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="mt-auto py-3 bg-dark">
        <div className="container">
          <section className="my-2 d-flex align-items-center justify-content-center">
            <a
              className="btn btn-link mx-4 btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/neeraj-kumar-/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link mx-4 btn-floating btn-lg text-dark m-1"
              href="https://github.com/neeraj2021"
              role="button"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:neerajkmahawar2017@gmail.com"
              target="_blank"
              className="btn btn-link mx-4 btn-floating btn-lg text-dark m-1"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
}
