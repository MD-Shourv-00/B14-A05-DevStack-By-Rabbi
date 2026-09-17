## Name of My project:

    B14-A05-DevStack-By-Rabbi

## A little description:

    " This is an assignment 05 of programming hero web development learning course.This is a react and typescript project. This project have a technology section where one can select their favorite tech and it instantly add in stack that is in the right side. Visitors can remove tech from the stack with one by one or bulk delete. "

## Technology that you use:

    I use some  technology in my project,
        - React.js
        - Tailwind CSS, DaisyUI
        - TypeScript
        - React-Toastify (NPM Package)
        - JSON (for technology data)
        - Vite
        - git
        - react icon's

## 3 features about your project:

    1. interactive 'add to stack' button. when some one click this btn, a toastify show and add the tech in the stack
    2. Visitor can remove a tech from stack with clicking cross btn. Here also shows a toastify
    3. In stack, there are a remove all btn that allow to empty the stack by one click.

## some Q & A:

1. What is JSX, and why is it used in React?
   => - JSX means JavaScript Extention that allow developer to write html into js that's why we do not need to write js in another file.
   - JSX used in react because jsx code is more readable, easy to maintain. it also allows to write js logic and dynamic data in one place. Without jsx, it is very deficult to write html, js logic and dynamic data in one place. Everytime, we have to use defferent method for different work and the code will be complex and hard to maintain. That's why Jsx use in react.

2. What is the difference between props and state?
   => Props is a way that data allows us to transfer data from one component to another component. And state is a spacial variable that tell the react to update UI when it updated or changed.

3. What does the `useState` hook do, and where did you use it in this project?
   => useState is method that comes from react and it create state and set the initial value in variable. It return two things, one is variable and another is a method that update the variable value.

   In the project, We use it based on where we have to use variable or where we have to change value. If we have to show same value in more component then we do lifting state up and use it in there parent so that we can send the data by props and use defferent component.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   => useEffect is a React Hook used to perform side effects, such as fetching data from an API or JSON file. We needed it to load the JSON data when the component first renders and then store that data in the state so we could display it in the UI.

5. Why does every item in a `.map()` list need a unique `key` prop?
   => Because it helps react to identify every items in the list indivisually so that it can easliy change something in specific items.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   => Conditional rendering means showing or hiding something in the UI based on a condition.
   - I used it for the empty stack message. If the selected players stack is empty, the message is shown. If there are players in the stack, the message is not shown.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   - I use props to pass data from a parent component to a child component. But it is no possible to send data back to the parent. Because Prop is a unidirectional that means it allows to p - c data flow not c - p.
