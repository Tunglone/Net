import { Button, Card } from 'react-bootstrap'
import Accordion from './../accordion/Accordion'
import Mailbox from '../Mailbox/Mailbox'

export default function Faqs() {
    return (
        <div className="faqs_container">
            <h2 className = "faqs_title">Frequently Asked Questions</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">

                <Accordion id = "one" target = "tone" title = "Xin chào!!!">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.
                </Accordion>

                <Accordion id = "two" target = "ttwo" title = "Xin chào!!!">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.
                </Accordion>

                <Accordion id = "three" target = "tthree" title = "Xin chào!!!">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.
                </Accordion>

            </div>
            <Mailbox />
        </div>
    )
}