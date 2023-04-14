import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='m-9'>
            <h1 className='text-center font-extrabold text-5xl'>Questions Answer</h1>
           <h3>a:  When should you use context API?
</h3>
<h3>Ans: Context API should be used when you have data or state that needs to be shared between components in your React application. Context provides a way to pass data through the component tree without having to manually pass props down through every level of the tree.</h3>
<br />

<h3>b:  What is a custom hook?
</h3>
<h3>Ans:  A custom hook is a JavaScript function that starts with the use keyword and allows you to reuse stateful logic across different components. Custom hooks allow you to extract common functionality from components and encapsulate it in a reusable function. They typically use the built-in React hooks like useState, useEffect, and useContext to manage state and side effects. </h3>
<br />


<h3> C: What is useRef?
</h3>
<h3>Ans: useMemo is a built-in React hook that allows you to memoize the result of a function so that it only gets re-evaluated when its dependencies change. Memoization can improve performance by reducing unnecessary re-renders, especially when the function is computationally expensive or creates a new object on every render</h3>
<br />


<h3>D: What is useMemo?
</h3>
<h3>Ans: useMemo is a built-in React hook that allows you to memoize the result of a function so that it only gets re-evaluated when its dependencies change. Memoization can improve performance by reducing unnecessary re-renders, especially when the function is computationally expensive or creates a new object on every render.</h3>
        </div>
        </div>
    );
};

export default Blog;