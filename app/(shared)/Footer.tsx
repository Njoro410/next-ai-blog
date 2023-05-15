import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* first column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            alias necessitatibus amet neque provident pariatur cum consequuntur
            voluptatem, explicabo officia quasi quo, aut numquam. Ab deleniti
            sunt fugiat eaque quod? Sit quibusdam omnis quasi nobis delectus
            eius aliquam illo architecto veniam odit, natus veritatis magni unde
            numquam harum dolore, error tenetur dolor exercitationem nostrum
            ratione dicta corrupti blanditiis doloremque? Harum! Odio minima
            veritatis vero placeat?{" "}
          </p>
          <p>Blog of the Future All Rights Reserved.</p>
        </div>
        {/* second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="my-5">Another link.</p>
          <p>And another one.</p>
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="my-5">Another link.</p>
          <p>And another one.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
