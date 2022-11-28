import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
	useTitle('blog');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Blog</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Answer to The Question</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline"> What are the different ways to manage a state in a React application?</summary>
				<div className="px-4 pb-4">
					<p>There are four main types of state you need to properly manage in your React apps:  </p>
                        <ol>
                            <li> 1.Local state</li>
                            <li> 2.Global state</li>
                            <li> 3.Server state</li>
                            <li> 4.URL state</li>
                        </ol>
                  
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
				<div className="px-4 pb-4">
					<p>he Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline"> What is a unit test? Why should we write unit tests?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
      					
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">React vs. Angular vs. Vue?</summary>
				<div className="px-4 pb-4 space-y-2">
					
      					<p><b>Angular​ </b>
                      In Angular, components are called directives those are used as markers on Document Object                       Model (DOM) elements, which can track and detect specific behavior of every single component.
                      
                      For that reason, Angular usually divides the UI part of components as attributes of HTML tags,                       and their behaviors in the form of JavaScript code.
                      <br />
                     <b>  React</b>
                      In React, it usually combines the UI and behavior of components. For instance, a code that can                       create a "hello world" component in React and the same part of the code is responsible for                       developing a UI element as well as tracking its behavior.
                      <br />
                     <b>Vue​</b>
                      Vue gives the opportunity to customize it which allows combining the UI and behavior of                       components in the same script. Further, it allows using preprocessors in Vue rather than CSS                       that is a relief for developers nowadays. 
                      
                      Vue can integrate other libraries like Bootstrap.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    );
};

export default Blog;