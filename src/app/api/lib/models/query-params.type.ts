import PostData from "./post-data.interface";

type QueryParams = Pick<PostData, 'id' | 'topic'>;

export default QueryParams;