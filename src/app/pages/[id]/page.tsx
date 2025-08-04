import { ENTITIES } from "@/app/api/lib/constants";
import hydratedPage, { type EntityProps } from "@/app/hydratedPage";
import { Page as PageComponent } from "@/components/Page";

const Page = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.PAGES,
    component: PageComponent,
  });

export default Page;
