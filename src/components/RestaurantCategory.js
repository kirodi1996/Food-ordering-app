import ItemList from "./ItemList";

const RestaurantCatgory = (props) => {
    const {data, showItem, setShowIndex} = props;
    const handleClick = () => {
        setShowIndex()
    }
 
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data?.title} ({data?.itemCards?.length})	&darr;	
                </span>
            </div>
            {showItem && <ItemList items={data.itemCards} />}
        </div>
      
    )
}

export default RestaurantCatgory;