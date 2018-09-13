#!/bin/bash
echo TRAVIS_BRANCH is $TRAVIS_BRANCH
if [ "${TRAVIS_BRANCH}" == test ]; then
    REACT_APP_STAGE=test
else
    REACT_APP_STAGE=prod
fi

export REACT_APP_STAGE
echo REACT_APP_STAGE is $REACT_APP_STAGE
npm run build
