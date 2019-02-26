import * as actions from '../../constants/types/recruitment_type';

import { callApi } from '../../utils/call_api'

//------------- List ------------
export const fetchListJob = (jobs) => {
    return {
        type: actions.RECRUITMENT_LIST,
        jobs
    }
}
export const fetchListJobHot = (job_hot) => {
    return {
        type: actions.RECRUITMENT_LIST_HOT,
        job_hot
    }
}
export const fetchListJobHotRequest = (page = 1) => {
    return (dispatch) => {
        return callApi('doActionAPI?action=list-job-hot&limit=999&page=' + page, 'GET').then(res => {
            dispatch(fetchListJobHot(res.data));
        });
    }
}

export const fetchListJobRequest = (page = 1) => {
    return (dispatch) => {
        return callApi('doActionAPI?action=list-job&limit=5&page='+page, 'GET').then(res => {
            if (res.data != []) {
                dispatch(fetchListJob(res.data));
            }
        });
    }
}

//------------- List ------------



// --------------- Detail ------------

export const getDetail = (job) => {
    return {
        type: actions.JOB_DETAIL,
        job
    }
}

export const getDetailRequest =  (id) => {
    return (dispatch) => {
        return  callApi('doActionAPI?action=job-detail&job_id='+id, 'GET').then(res => {  
            dispatch(getDetail(res.data));
        });
    }
}
