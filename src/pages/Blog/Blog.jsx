/*eslint-disable */
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="App ml-56 me-56 mt-10 mb-10">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-error" onClick={toPdf}>
            Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="">
          <h1 className="font-bold mt-10 text-3xl">Blog Questions:</h1>
          <hr className="border-zinc-950" />

          <h3 className="font-bold mt-5">
            1. Difference the between uncontrolled and controlled components
          </h3>
          <p>
            Controlled component is controlled by React state, while an
            uncontrolled component is a component that maintains its own
            internal state.
            <br />
            <br />
            A controlled component receives its current value and an update
            callback via props, and the parent component manages the state of
            the component. When the user interacts with the component, the
            parent component updates the state, which in turn updates the
            component's value.
            <br />
            <br />
            An uncontrolled component, maintains its own internal state, and
            when the user interacts with the component, it updates its own
            state, which in turn updates the component's value.
          </p>

          <h3 className="font-bold mt-5">
            2. How to validate React props using PropTypes?
          </h3>
          <p>
            PropTypes is React’s internal mechanism for adding type checking to
            component props. React components use a special property called
            propTypes to set up type checking.
            <br />
            <br />
            When props are passed to a React component, they are checked against
            the type definitions configured in the propTypes property. When an
            invalid value is passed for a prop, a warning is displayed on the
            JavaScript console.
          </p>

          <h3 className="font-bold mt-5">
            3. Difference between nodejs and express js.
          </h3>
          <p>
            Node.js: <br /> Node.js is an open source and cross-platform runtime
            environment for executing JavaScript code outside of a
            browser.Node.js for use building back-end services like APIs like
            Web App or Mobile App.
            <br />
            <br />
            Express.js: <br /> Express is a small framework that sits on top of
            Node.js’s web server functionality to simplify its APIs and add
            helpful new features. It makes it easier to organize application’s
            functionality with middle ware and routing. It adds helpful
            utilities to Node.js’s HTTP objects. It facilitates the rendering of
            dynamic HTTP objects.
          </p>
          <h3 className="font-bold mt-5">
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            A custom hook is a special JavaScript function whose name starts
            with ‘use’ and can be used to call other hooks. Custom React JS
            hooks are reusable functions that a React JS software developer can
            use to add special and unique functionality to the React
            applications. <br /><br />

            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
