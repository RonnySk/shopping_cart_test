import Button from "../Button/page";

const SubscriptionCard = (product) => {
  return (
    <>
      <div className="flex flex-col border-2 border-white w-3/4 p-16 ">
        <div>product.image</div>
        <div>product.title</div>
        {/* here logic to date activt */}
        <div>
          <p>profduct price, with logic</p>
        </div>
        <Button />
      </div>
    </>
  );
};

export default SubscriptionCard;
