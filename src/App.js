import About from "./components/About"
import Button from "./components/Button"
import Header from "./components/Header"
import Skills from "./components/Skills"
import FatherH from "./components/FatherH"

function App() {
    const data = {
        name : "Steven Paul Jobs",
        company : "Apple",
        birthdate : 24,
        birthmonth : "February",
        estd : 1976,
        location : "Los Altos"
    }

    let date = 26;
    let month = '02';
    let year = 2002;

    const sayhi = () => {
        alert('Hi buddy')
    }

    return <div>
        {/* <About name = "Sourin" age = "20" edu = "LPU" day = "30" month = "09" year = "2002"/> */}
        {/* <About name = "Sandhik" age = "18" edu = " Riva" day = {date} month = {month} year = {year}/> */}
        {/* <Skills skills = {['HTML', 'CSS', 'JS', 'C++', 'Figma']}/> */}
        {/* <Header data = {data}/> */}
        {/* <Button text = "Say Hi" onClick = {sayhi} /> */}
        <FatherH />
    </div>
}

export default App
