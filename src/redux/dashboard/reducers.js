import { MeTypes } from './constants';

const initialState = {
    totalSum: 0,
    meList: [],
    currentPage: 0,
    pageSize: 20,
    totalRecords: 0,
    loading: false,
    error: null,
    showError: false,
    successUpdate: null,
    showSuccessUpdate: false,
    successSubmit: null,
    showSuccessSubmit: false,
    successApprove: null,
    showSuccessApprove: false,
    successFeedback: null,
    showSuccessFeedback: false,
    successApproveMultiple: null,
    showSuccessApproveMultiple: false,
    successFeedbackMultiple: null,
    showSuccessFeedbackMultiple: false,
};

export default function meReducer(state = initialState, action) {
    switch (action.type) {
        case MeTypes.RESPONSE_SUCCESS: {
            switch (action.payload.actionType) {
                case MeTypes.GET_ME_LIST:
                    return {
                        ...state,
                        totalSum: action.payload.data?.totalSum,
                        meList: action.payload.data?.users?.content,
                        currentPage: action.payload.data?.users?.number,
                        pageSize: action.payload.data?.users?.size,
                        totalRecords: action.payload.data?.users?.totalElements,
                        loading: false,
                    };
                case MeTypes.UPDATE_ME:
                    return {
                        ...state,
                        successUpdate: 'Update ME success',
                        showSuccessUpdate: true,
                        loading: false,
                    };
                case MeTypes.SUBMIT_ME:
                    return {
                        ...state,
                        successSubmit: 'Submit ME success',
                        showSuccessSubmit: true,
                        loading: false,
                    };
                case MeTypes.APPROVE_ME:
                    return {
                        ...state,
                        successApprove: 'Aprove ME success',
                        showSuccessApprove: true,
                        loading: false,
                    };
                case MeTypes.FEEDBACK_ME:
                    return {
                        ...state,
                        successFeedback: 'Feedback ME success',
                        showSuccessFeedback: true,
                        loading: false,
                    };
                case MeTypes.APPROVE_MULTIPLE_ME:
                    return {
                        ...state,
                        successApproveMultiple: 'Aprove multiple ME success',
                        showSuccessApproveMultiple: true,
                        loading: false,
                    };
                case MeTypes.FEEDBACK_MULTIPLE_ME:
                    return {
                        ...state,
                        successFeedbackMultiple: 'Feedback multiple ME success',
                        showSuccessFeedbackMultiple: true,
                        loading: false,
                    };
                default:
                    return state;
            }
        }
        case MeTypes.RESPONSE_ERROR: {
            switch (action.payload.actionType) {
                case MeTypes.GET_ME_LIST:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                case MeTypes.UPDATE_ME:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                case MeTypes.SUBMIT_ME:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                case MeTypes.APPROVE_ME:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                case MeTypes.FEEDBACK_ME:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                case MeTypes.APPROVE_MULTIPLE_ME:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                case MeTypes.FEEDBACK_MULTIPLE_ME:
                    return {
                        ...state,
                        error: action.payload.error,
                        showError: true,
                        loading: false,
                    };
                default:
                    return state;
            }
        }
        case MeTypes.GET_ME_LIST:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.UPDATE_ME:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.SUBMIT_ME:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.APPROVE_ME:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.FEEDBACK_ME:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.APPROVE_MULTIPLE_ME:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.FEEDBACK_MULTIPLE_ME:
            return {
                ...state,
                loading: true,
            };
        case MeTypes.RESET_ERROR: {
            return {
                ...state,
                error: null,
                showError: false,
            };
        }
        case MeTypes.RESET_SUCCESS_UPDATE: {
            return {
                ...state,
                successUpdate: null,
                showSuccessUpdate: false,
            };
        }
        case MeTypes.RESET_SUCCESS_SUBMIT: {
            return {
                ...state,
                successSubmit: null,
                showSuccessSubmit: false,
            };
        }
        case MeTypes.RESET_SUCCESS_APPROVE: {
            return {
                ...state,
                successApprove: null,
                showSuccessApprove: false,
            };
        }
        case MeTypes.RESET_SUCCESS_FEEDBACK: {
            return {
                ...state,
                successFeedback: null,
                showSuccessFeedback: false,
            };
        }
        case MeTypes.RESET_SUCCESS_APPROVE_MULTIPLE: {
            return {
                ...state,
                successApproveMultiple: null,
                showSuccessApproveMultiple: false,
            };
        }
        case MeTypes.RESET_SUCCESS_FEEDBACK_MULTIPLE: {
            return {
                ...state,
                successFeedbackMultiple: null,
                showSuccessFeedbackMultiple: false,
            };
        }
        default:
            return state;
    }
}
