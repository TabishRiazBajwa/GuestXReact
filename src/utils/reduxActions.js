const asyncActionType = (type) => ({
    PENDING: `${type} - Pending`,
    SUCCESS: `${type} - Success`,
    ERROR: `${type} - Error`,
});

export default asyncActionType;
