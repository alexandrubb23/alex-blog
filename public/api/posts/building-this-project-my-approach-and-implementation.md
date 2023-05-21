---
title: 'Building This Project: My Approach and Implementation'
date: '2023-05-19'
---

_The source code of this project could be found on [GitHub](https://github.com/alexandrubb23/alex-blog)._

This project was built using [Next.js](), [Chakra UI](), [Axios](), [React Query](), and [TypeScript](). With Next.js and TypeScript, I was able to develop a powerful and scalable web application, taking advantage of server-side rendering, seamless routing, and the benefits of static typing.

> _I haven't used the SSR (Server Side Rendering) given that this project is using Chakra UI_

Chakra UI provided a delightful and customizable component library, enabling me to create a beautiful and responsive user interface.

To handle data fetching and state management, I integrated Axios for making API requests and leveraged the capabilities of React Query for efficient caching, optimistic updates, and real-time data synchronization.

TypeScript enhanced the development process by providing static type checking, improved code organization, and increased confidence in refactoring. Together, these technologies allowed me to build a performant and modern web application that offers a seamless user experience."

By incorporating TypeScript, you can enjoy the benefits of static typing, improved code quality, enhanced developer productivity, and increased code maintainability within your project.

One of the highlights of this project is its well-structured architecture. I've implemented different layers to enhance code organization and maintainability:

- At the foundation, we have the APIClient, responsible for handling and sending HTTP requests to the backend.

```code
class APIClient<T> {
  constructor(private ebdpoint: string) {
    this.ebdpoint = ebdpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.ebdpoint, config)
      .then(res => res.data);
  };
}
```

- On top of the APIClient, we have HTTP services (pageService, postService, postsService), which are dedicated instances of APIClient tailored to work with specific types of objects.

```code
export default new APIClient('/posts');
```

- Above these layers, I've developed custom React hooks that utilize the **HTTP** services to fetch and update data. These hooks encapsulate the logic for managing data in the cache effectively.

```code
const usePost = (id: string) =>
  useQuery<Post, Error>({
    queryKey: ['post', id],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
```

- Finally, at the top layer, we have components that utilize these hooks to fetch and update data, providing a seamless user experience.

```code
const Page = ({ params }: PageProps) => {
  const page = usPage(params.id);

  return <PageLayout result={page} />;
};

```

- This architectural approach adheres to the Single Responsibility Principle, resulting in a clean and well-organized codebase. By breaking down the application into distinct layers, we achieve easy code management, reduced duplication (DRY principle), and improved scalability.

Furthermore, I plan to incorporate Domain-driven Design (DDD) principles to structure the folders and components according to specific domains within the project. This approach will further enhance code organization and maintainability.

## Highlight code

You may be wondering, **How do I highlight the code?**

Trust me, is very simple! If you take a look [here](https://github.com/alexandrubb23/alex-blog/blob/main/src/app/posts/%5Bid%5D/page.tsx) you will notice that I have used the PrissJS plus I've added [prism-dracula css style](https://github.com/alexandrubb23/alex-blog/blob/main/src/styles/prism-dracula.css)

```code
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, [post]);
```

_Prism is a lightweight, extensible syntax highlighter that can be used when working with code blocks in markdown files in blog posts._

## Markdown files

As you may have already noticed, this project utilizes `.md` files that serve as an API, providing data and content in a structured manner.

For parsing those files I'using `matter`, `remark` and `remark-html`.

```code
const parsedPage = matter(response);
      const content = await remark().use(html).process(parsedPage.content);
```

This function converts an `.md` file into HTML. As an example, it precisely transforms the article you have just read into HTML format 🙂
