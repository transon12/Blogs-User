import { commentActionTypes } from './comment_contanst';
export function commentContent(data) {
    return {
        type: commentActionTypes.COMMENT_CONTENT,
        payload: data,
    };
}
export function commentBasic(data) {
    return {
        type: commentActionTypes.COMMENT_BASIC,
        payload: data,
    };
}
export const likeClicked = () => ({
    type: 'LIKE_CLICKED',
    
  });
  
  export const dislikeClicked = () => ({
    type: 'DISLIKE_CLICKED'
  });
