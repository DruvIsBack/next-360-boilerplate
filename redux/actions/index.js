export const actionTypes = {
    DATA_LOAD_SUCCESS: 'main/DataLoadSuccess',
    DATA_COUNT: 'main/COUNT'
};

export const loadSuccess = () => ({
    type: actionTypes.DATA_LOAD_SUCCESS
});

export const dataCount = () => ({
    type: actionTypes.DATA_COUNT
});
