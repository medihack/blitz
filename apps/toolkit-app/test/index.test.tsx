import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { render } from "test/utils"

import Home from "../src/pages/index"

jest.mock("src/users/hooks/useCurrentUser")
const mockUseCurrentUser = useCurrentUser as jest.MockedFunction<typeof useCurrentUser>

describe("renders blitz documentation link", () => {
  it("test", () => {
    // This is an example of how to ensure a specific item is in the document
    // But it's disabled by default (by test.skip) so the test doesn't fail
    // when you remove the the default content from the page

    // This is an example on how to mock api hooks when testing
    mockUseCurrentUser.mockReturnValue({
      id: 1,
      name: "User",
      email: "user@email.com",
      role: "user",
    })

    const { getByText } = render(<Home />)
    const linkElement = getByText(/Documentation/i)
    expect(linkElement).toBeInTheDocument()
  })
})
