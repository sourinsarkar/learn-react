// import Fskills from './components/Fskills'
// import Numbers from './components/Numbers'
// import FStates from './components/FStates'
import People from './components/People'


function App() {

    // const anything = [
    //     ["Sourin", "Kangana", "Sheetal", "Aastha"],
    //     ["C++", "Java","JavaScript", "Rust"]
    // ]

    // const student = [
    //     ["Name", "Subject", "Marks"],
    //     ["Sourin", "React", "100"],
    //     ["Sheetal", "Vue", "99"]
    // ]
    const people = [
        {
            id : 1,
            name : "Sourin",
            skills : ["C++", "Java","JavaScript", "Rust"],
            date : new Date(2021, 2, 26)
        },
        {
            id : 2,
            name : "ABC",
            skills : ["C++", "Python","Ruby", "Erlang"]
        },
        {
            id : 3,
            name : "XYZ",
            skills : ["Elixr", "Java","Golang", "Rust"]
        },
        {
            id : 4,
            name : "MNO",
            skills : ["R", "Java", "C++", "HTML"]
        }
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

        {/* {anything.map((items, index) => {
            return (
                <div>
                    <li>{items}</li>

                    <ol key = {index}>
                        {items.map((subitems, subindex) => {
                            return <li key = {subindex}>{subitems}</li>
                        })}
                    </ol>
                </div>
            )
        })} */}

        {/* <table>
            <thead>
                <tr>
                    {student[0].map((item,index) => {
                        return <th key = {index}>{item}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {student.slice(1).map((items, index) => {
                    return (
                        <tr>
                            <td key = {index}>{items[0]}</td>
                            <td key = {index}>{items[1]}</td>
                            <td key = {index}>{items[2]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> */}

        {people.map((person, index) => {
            return (
                <div>
                    <h1>Name : {person.name}</h1>             
                </div>
            )
        })}

        {/* <People id = {people.id} name = {people.name} /> */}

        <People 
        id = {people[0].id}
        name = {people[0].name}
        date = {people[0].date}
        />

    </div>
    )
}

export default App
