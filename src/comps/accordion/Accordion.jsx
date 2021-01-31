

function Accordion(props) {
    
    return (
        <div className="accordion-item custom-accordion">
            <h2 className="accordion-header" id={props.id}>
                <button style={{ 'backgroundColor': 'gray', 'color':'white' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.target} aria-expanded="false" aria-controls={props.target}>
                    <strong>{props.title}</strong>
                        </button>
            </h2>
            <div id={props.target} className="accordion-collapse collapse" aria-labelledby={props.id} data-bs-parent="#accordionFlushExample">
                <div style={{ 'color': 'white' }} className="accordion-body">{props.children}</div>
            </div>
        </div>
    )
}

export default Accordion
