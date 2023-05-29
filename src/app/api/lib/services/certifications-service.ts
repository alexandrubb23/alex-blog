import { EntityController } from '@/app/api/lib/classes/EntityDataReader';

const ENTITY_NAME = 'certifications';

class Certifications extends EntityController {
  constructor() {
    super(ENTITY_NAME);
  }
}

const getCertifications = () => new Certifications().getAll();

export default getCertifications;
