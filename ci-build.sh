if [ ${TRAVIS_BRANCH} == develop ]; then
    REACT_APP_STAGE=test
else
    REACT_APP_STAGE=prod
fi

export REACT_APP_STAGE
npm run build
