// import Fskills from './components/Fskills'
// import Numbers from './components/Numbers'
// import FStates from './components/FStates'


function App() {

    const anything = [
        ["Sourin", "Kangana", "Sheetal", "Aastha"],
        ["C++", "Java","JavaScript", "Rust"]
    ]
    return (
    <div>
        {/* <h1>Numbers List</h1>
        <Numbers numbers = {[1,2,3,4,5]} />
        <Numbers numbers = {[1,2,3,4,5,6]} />
        <Numbers numbers = {[1,2,3,4,5,6,7]} />
        <Numbers numbers = {[1,2,3,4,5,6,7,8]} />
        <Numbers numbers = {[1,2,3,4,5,6,7,8,9]} />
        <Fskills /> */}
        {/* <FStates />  */}
        {/* <Numbers numbers = {[1,2,3,4,5]} />*/}

        {anything.map((items, index) => {
            return (
                <div>
                    <li>{items}</li>
                </div>
            )
        })}
    </div>
    )
}

export default App
