/////////////////////////////////////////////
/////// BOILER PLATE
/////////////////////////////////////////////

// screen.debug(); Place it inside the it() fn to print html component in the terminal
// screen.getByTestId('comp-id'); select a component element eg: const element = screen....

// expect(element).toBeInDocument();  check in 'element' is rendered. element must be selected before; Remeber to ad a prop 'data-testid' to the component element

// "test": "vitest",

// "coverage": "vitest run --coverage",

// "test-file": "vitest src/components/8TDD/Post.test.tsx"

describe('Post component test suite', () => {
  it('should render component', () => {})

  it('should clear form on submit', () => {})

  it('should delete row on delete button pressed', () => {})

  it.skip('should work - not working', () => {})

  it.todo('should show error message on backend error')

  describe('handling errors', () => {
    beforeEach(() => {
      // setup test
    })

    afterEach(() => {
      // teardown test, clear data
    })

    afterAll(() => {
      // close DB connection
    })

    it('should show message on not found error', () => {})

    it('should show message on unknown error', () => {})

    it('should show message on not authorized error', () => {})
  })
})
