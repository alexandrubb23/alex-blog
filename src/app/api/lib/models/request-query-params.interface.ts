import EntityQueryParams from './entity-query-params.interface';

interface RequestQueryParams {
  params: Promise<EntityQueryParams>;
}

export default RequestQueryParams;
