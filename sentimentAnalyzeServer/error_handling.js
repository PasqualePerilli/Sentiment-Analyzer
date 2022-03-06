/*
    Module name: error_handling.js

    Purpose: The purpose of this module is to be the repository of exception handling code, to be referenced by other modules.

    Explanation: Copy/pasting the code from async_file_3.js for exception handling.

    How to import in other modules:
      - In another module, add the following two lines:
        const { errorHandling, exceptions } = require("./error_handling.js");
        process.on(exceptions, errorHandling);

    Author(s): Pasquale Perilli

    History:
       _________________________________________________________________________________________
       |          |                |                        |                                   |
      | VERSION   |     DATE      |    AUTHOR               |          COMMENT                  |
      |__________|________________|________________________|____________________________________|
      |   1.0   |   01-MAR-2022   |     Pasquale Perilli   |     Initial version                |
      |________|_________________|_________________________|____________________________________|
      |        |                 |                         |                                    |
      |________|_________________|_________________________|____________________________________|

*/

const { debug, error, enableDebug, disableDebug }  = require('./troubleshooting.js');
const exceptions                                   = "uncaughtException";
const safeExit                                     = 0;
const unsafeExit                                   = 1;

function errorHandling(exception) {
  error("An exception was thrown and caught. Printing details below.");
  error(exception);
  error("Exiting application now");
  process.exit(unsafeExit);
}

module.exports = { exceptions, errorHandling };
