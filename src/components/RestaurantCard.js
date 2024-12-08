const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    const {id} = resData?.info
    const resName = resData?.info?.name;
    const cuisines = resData?.info?.cuisines.join(', ');
    const avgRating = resData?.info?.avgRating;
    const cloudinaryImageId = resData?.info?.cloudinaryImageId;
    return (
        <div data-testid="resCard" key={id} className='m-4 p-4 w-[250px] h-auto border bg-slate-100 rounded-md hover:bg-gray-200'>
            <img alt="res" className='w-[200px] h-[200px] rounded-md'
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-md">{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
};

// Higher order component
// input -> RestaurantCard -> RestaurandCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => (
        <div>
            <label>Promoted</label>
            <RestaurantCard {...props} />
        </div>
    )
}

export default RestaurantCard;