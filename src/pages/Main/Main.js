import './main.styles.css'

const Main = (props) => {
    return(
        <section className="corpo">
            {props.children}
        </section>
    )
}

export default Main