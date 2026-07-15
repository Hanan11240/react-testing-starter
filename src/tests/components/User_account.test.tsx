import { render, screen } from "@testing-library/react"
import { expect, it, describe } from "vitest"
import { User } from "../../entities"
import UserAccount from "../../components/UserAccount"

describe("UserAccount", () => {
   it("should render user name", () => {
     const user: User = {
        id: 1,
        name: "John Doe"
    };
    render(<UserAccount user={user} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
   });
   it("should render edit button if user is admin", () => {
       const user: User = {id:1,name:"Hanan",isAdmin:true}
       render(<UserAccount user={user}/>)
      const btn =  screen.getByRole("button")
      expect(btn).toHaveTextContent(/edit/i)
   })

   it("should not render edit button if user is not admin", () => {
       const user: User = {id:1,name:"Hanan",isAdmin:false}
       render(<UserAccount user={user}/>)
      const btn =  screen.queryByRole("button")
      expect(btn).not.toBeInTheDocument()
      
   })
});