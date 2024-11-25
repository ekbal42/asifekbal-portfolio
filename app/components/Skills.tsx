import { ProjectType } from "../types";

export const Skills = ({ data }: { data: ProjectType[] }) => {
  const tags = [
    ...new Set(data?.map((project: ProjectType) => project.tags).flat()),
  ];
  return (
    <div className="xl:py-12 py-4 dark:text-gray-300">
      <div className="mt-4 flex justify-center flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={tag}
            className="bg-gray-100 dark:bg-gray-700
              px-3 rounded-full py-1 capitalize text-sm border
               dark:border-gray-600"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};
