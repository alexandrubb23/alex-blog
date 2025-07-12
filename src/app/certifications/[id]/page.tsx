import { ENTITIES } from "@/app/api/lib/constants";
import hydratedPage, { type EntityProps } from "@/app/hydratedPage";
import { CertificateComponent } from "@/components/Certificate";

const Certificate = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.CERTIFICATIONS,
    component: CertificateComponent,
  });

export default Certificate;
