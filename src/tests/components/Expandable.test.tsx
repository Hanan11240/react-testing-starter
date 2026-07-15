import {render,screen} from "@testing-library/react"
import ExpandableText from "../../components/ExpandableText";


describe("ExpandableText",()=>{
    it("should render the full text if less than 255 characters",()=>{

        render(<ExpandableText text="Short text" />);

        expect(screen.getByText("Short text")).toBeInTheDocument();
    })

     it("should truncate if more than 255 characters",()=>{

        const text = 'a'.repeat(256)
        render(<ExpandableText text={text} />);

        const truncatedText = text.substring(0,255) + "..."

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
       const button =  screen.getByRole("button")

       expect(button).toBeInTheDocument()
       expect(button).toHaveTextContent(/more/i)

    })
})