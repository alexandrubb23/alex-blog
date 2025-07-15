import { ENTITIES } from "@/app/api/lib/constants";
import hydratedPage, { type EntityProps } from "@/app/hydratedPage";
import AboutMe from "@/components/Author/AboutAuthor/AboutMe";

const Page = ({ params }: EntityProps) =>
  hydratedPage({
    params,
    entity: ENTITIES.PAGES,
    component: AboutMe,
  });

export default Page;
