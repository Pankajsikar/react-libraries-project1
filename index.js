const H1= React.createElement('h1', {}, "Learn Web Development")
const P= React.createElement('p', {}, "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services")

const P2 = React.createElement('p', {}, [
    ' There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.[3] Front-end developers are responsible for behavior and visuals that run in the user browser, while back-end developers deal with the servers.[4] Since the commercialization of the Web, the industry has boomed and has become one of the most used technologies ever. ',
    React.createElement('a', { href: 'https://en.wikipedia.org/wiki/Web_development', key: 'link' }, 'Learn more about full-stack development.')
  ]);
  

const P3= React.createElement('p', {}, "Web development is a dynamic field, and developers often need to adapt to new technologies and frameworks. It's a broad discipline that covers a wide range of skills and tools to create efficient, secure, and visually appealing web solutions.")


const Div = React.createElement('div',{},[P])
const secDiv = React.createElement('div',{},[P2])
const thirdDiv = React.createElement('div',{},[P3])
ReactDOM.render(H1, document.getElementById("heading"))


ReactDOM.render(Div, document.getElementById("container"))
ReactDOM.render(secDiv, document.getElementById("paragraph"))
ReactDOM.render(thirdDiv, document.getElementById("third"))
