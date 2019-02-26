import * as types from '../constants/types/recruitment_type';

const initialDefault = {
    job: [],
    job_hot: [],
    job_detail:{}
};

const myReducer = (state = initialDefault, action) => {
    switch (action.type) {
        case types.RECRUITMENT_LIST:
            job = state.job;
            action.jobs.data.map(item => {
                job.push(item);
            })
            state.job.data = job
            return { ...state };

        case types.RECRUITMENT_LIST_HOT:
            job_hot = []
            job_hot = state.job_hot;
            if (action.job_hot != []) {
                action.job_hot.data.map(item => {
                    job_hot.push(item);
                })
            } else {
                state.refresh = false;
            }
            state.job_hot.data = job_hot
            return { ...state };
        case types.JOB_DETAIL:

            state.job_detail = action.job;
            console.log(state);
            return { ...state };
        default:
            return { ...state };
    }
}

export default myReducer;