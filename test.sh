#!/bin/bash
diff <(./run.js $1) <(./expected.js $1; echo)
