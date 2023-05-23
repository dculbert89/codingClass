    // TEST EXAMPLES
// call up should bring elevator to you to go up
// call down should bring elevator to you to go down
// buttons should light when pressed
// close door button should close door if open with no obsructions
// open door should work only if stopped and safe

    // INTEGRATION TEST EXAMPLE
// while in motion. if opposite lobby call is pressed then ignore

    // FUNCTIONAL TEST
// person from lobby presses desired direction (up or down)
// elevator comes to the call (IGNORES if in motion of opposite desired direction( up or down)) and opens doors.
    // stays open for 30 secs/until close door button is pressed
        // closes if no obstruction
        // stays open if there are obstruction
// elevator goes to desired floor
    // stays open for 30 secs/until close door button is pressed
        // closes if no obstruction
        // stays open if there are obstruction
// elevator waits to be called (up or down)

    // ACCEPT TEST
// Install new panels in 5 locations for six month to collect feedback before istalling in all locations
