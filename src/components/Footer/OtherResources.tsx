import ResourceColumn from "./ResourceColumn";

const OtherResources = () => {
  const resourcesColumnOne = ["New Season", "Most Searched", "Most Selled"];
  const resourcesColumnTwo = ["About", "Help", "Shipping"];
  const resourcesColumnThree = ["Contact", "Policies", "Info"];

  const allResources = [resourcesColumnOne, resourcesColumnTwo, resourcesColumnThree];

  return (
    <>
    <div className="flex justify-between items-center gap-10 px-[140px]">
      {allResources.map((column, index) => (
        <ResourceColumn
          key={index}
          resources={column.map(resource => ({ resourceName: resource }))}
        />
      ))}
    </div>
    </>
  );
};

export default OtherResources;
