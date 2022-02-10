# App
    - stores the 'score' variable

    > function to generate nine MoleContainers

## MoleContainer
    - decides which child component is rendered
    - store boolean state variable called 'displayMole'

    > handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to 'Mole' components)
    > a ternary that will determine which child to render

### Mole
    - displayed mole
    - contain a timer determining the lifespan of a mole
    - will render when 'displayMole' === true

### EmptySlot
    - represent an empty molehill or an invalid location to click
    - internal timer to cycle the display
    - will render when 'displayMole' === false

    > a useEffect hook that will start the timer and clean it up afterward