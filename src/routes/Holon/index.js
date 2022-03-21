import { div } from 'arsnl'

const Input = () => {        // user interacts with the screen

}
const Perception = () => {   // these interactions are percieved

}
const Experience = () => {   // The system finds meaning in the perception

}
const Response = () => {     // Determine a response to the given meaning & update self

}
const Action = () => {       // Determine the appropriate action to take

}
const Output = () => {       // screen interacts with the user

}

const Holon = () => {
    return (
        div({
            style: {
                height: '100vh',
                width: '100vw',
            },
        })
    )
}

export default Holon
