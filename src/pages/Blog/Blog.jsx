/*eslint-disable */
import React from "react";
import Pdf from "react-to-pdf";

const ref =React.createRef();

const Blog = () => {
  return (

    <div className="App ml-56 me-56 mt-10">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-error" onClick={toPdf}>Pdf</button>}
      </Pdf>
      <div ref={ref}>
      <div className="">
      <h1 className="font-bold mt-10 text-3xl">Blog Questions:</h1>
      <hr className="border-zinc-950" />

      <h3 className="font-bold mt-5">1. Difference the between uncontrolled and controlled components</h3>
      <p>
        
        <br />
        
      </p>

      <h3 className="font-bold mt-5">2. How to validate React props using PropTypes?</h3>
      <p>
       
        <br />
        
      </p>

      <h3 className="font-bold mt-5">3. Difference between nodejs and express js.</h3>
      <p>
        
        <br />
       
      </p>
      <h3 className="font-bold mt-5">4. What is a custom hook, and why will you create a custom hook??</h3>
      <p>
       
      </p>
    </div>
      </div>
    </div>

    
  );
};

export default Blog;
