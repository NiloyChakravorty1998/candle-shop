interface Resource {
  resourceName: string;
}

const ResourceItem = ({ resourceName }: Resource) => {
  return (
    <h1 className="roboto-regular-italic hover:cursor-pointer">
      {resourceName}
    </h1>
  );
};

interface ResourceColumnProps {
  resources: Resource[];
}

const ResourceColumn = ({ resources }: ResourceColumnProps) => {
  return (
    <div className="flex flex-col gap-3">
      {resources.map((item, index) => (
        <ResourceItem resourceName={item.resourceName} key={index} />
      ))}
    </div>
  );
};

export default ResourceColumn;
