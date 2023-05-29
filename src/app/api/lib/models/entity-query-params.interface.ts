import Entity from './entity.type';
import QueryParams from './query-params.type';

interface EntityQueryParams extends QueryParams {
  entity: Entity;
}

export default EntityQueryParams;
